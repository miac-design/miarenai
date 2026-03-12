#!/usr/bin/env node
// scripts/generate-blog-post.mjs
// Generates a new blog post draft using the Claude API
// Usage: node scripts/generate-blog-post.mjs [optional-topic]

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const BLOG_DATA_PATH = resolve(ROOT, "lib/blog-data.ts");
const BLOG_CONTENT_PATH = resolve(ROOT, "lib/blog-content.ts");

const topicArg = process.argv[2] || "";

// Read existing posts to avoid duplicates and match style
const blogDataRaw = readFileSync(BLOG_DATA_PATH, "utf-8");
const blogContentRaw = readFileSync(BLOG_CONTENT_PATH, "utf-8");

const client = new Anthropic();

const systemPrompt = `You are the content strategist for Miaren AI (miarenai.com), a company founded by Mia Cheraghian, PhD that specializes in AI visibility and Generative Engine Optimization (GEO).

Your job is to write blog posts for the /insights section. The posts should:
- Sound like Mia's voice: authoritative, research-backed, direct, no fluff
- Focus on AI visibility, GEO, and how brands appear in AI search (ChatGPT, Perplexity, Gemini, Copilot)
- Reference the Three-Signal Diagnostic Methodology: Can AI Find You? (structured data, crawlability), Can AI Trust You? (entity consistency), Can AI Quote You? (third-party authority)
- Include real statistics where possible (cite sources inline)
- Be practical and actionable, not just thought leadership
- Categories available: "GEO 101", "Deep Dive", "Research", "How-To", "Strategy"
- Each post should have 5-7 sections with clear headings
- Avoid generic marketing language. Be specific and evidence-based.
- Do NOT use emojis.

Here are the existing blog posts (do not duplicate topics):
${blogDataRaw}

Here is a sample of the existing content style (first post):
${blogContentRaw.slice(0, 3000)}`;

const userPrompt = topicArg
  ? `Write a new blog post about: ${topicArg}`
  : `Write a new blog post on a topic that hasn't been covered yet. Choose something timely and relevant to AI visibility in 2026. Consider topics like: entity optimization for AI, how to audit your schema markup for AI readability, AI search for local businesses, building authority signals AI engines trust, or measuring AI visibility ROI.`;

const responseFormat = `
Respond with ONLY a valid JSON object in this exact format (no markdown fencing, no explanation):
{
  "slug": "kebab-case-url-slug",
  "title": "Post Title Here",
  "description": "One-sentence description for the card and meta tags.",
  "category": "One of: GEO 101, Deep Dive, Research, How-To, Strategy",
  "readTime": "X min read",
  "sections": [
    { "heading": "Section Heading", "content": "Section content paragraph..." },
    { "heading": "Another Heading", "content": "More content..." }
  ]
}`;

async function main() {
  console.log("Generating blog post draft...");
  if (topicArg) console.log(`Topic: ${topicArg}`);

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4000,
    messages: [
      {
        role: "user",
        content: `${userPrompt}\n\n${responseFormat}`,
      },
    ],
    system: systemPrompt,
  });

  const text = response.content[0].text.trim();

  let post;
  try {
    post = JSON.parse(text);
  } catch {
    // Try extracting JSON from possible markdown fencing
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      post = JSON.parse(match[0]);
    } else {
      console.error("Failed to parse Claude response as JSON:");
      console.error(text);
      process.exit(1);
    }
  }

  // Validate required fields
  const required = ["slug", "title", "description", "category", "readTime", "sections"];
  for (const field of required) {
    if (!post[field]) {
      console.error(`Missing required field: ${field}`);
      process.exit(1);
    }
  }

  const today = new Date().toISOString().split("T")[0];

  // --- Update blog-data.ts ---
  const newEntry = `  {
    slug: "${post.slug}",
    title: "${post.title.replace(/"/g, '\\"')}",
    description:
      "${post.description.replace(/"/g, '\\"')}",
    category: "${post.category}",
    date: "${today}",
    readTime: "${post.readTime}",
  },`;

  // Insert new post at the top of the array
  const updatedBlogData = blogDataRaw.replace(
    "export const blogPosts: BlogPost[] = [\n",
    `export const blogPosts: BlogPost[] = [\n${newEntry}\n`
  );
  writeFileSync(BLOG_DATA_PATH, updatedBlogData);
  console.log(`Updated ${BLOG_DATA_PATH}`);

  // --- Update blog-content.ts ---
  const sectionsCode = post.sections
    .map(
      (s) =>
        `      {\n        heading: "${s.heading.replace(/"/g, '\\"')}",\n        content: "${s.content.replace(/"/g, '\\"').replace(/\n/g, " ")}",\n      }`
    )
    .join(",\n");

  const newContentEntry = `  "${post.slug}": {\n    sections: [\n${sectionsCode},\n    ],\n  },`;

  // Insert after the opening of the blogContent object
  const updatedBlogContent = blogContentRaw.replace(
    'export const blogContent: Record<string, { sections: { heading: string; content: string }[] }> = {\n',
    `export const blogContent: Record<string, { sections: { heading: string; content: string }[] }> = {\n${newContentEntry}\n`
  );
  writeFileSync(BLOG_CONTENT_PATH, updatedBlogContent);
  console.log(`Updated ${BLOG_CONTENT_PATH}`);

  console.log(`\nGenerated: "${post.title}"`);
  console.log(`Slug: ${post.slug}`);
  console.log(`Category: ${post.category}`);
  console.log(`Sections: ${post.sections.length}`);
}

main().catch((err) => {
  console.error("Generation failed:", err.message);
  process.exit(1);
});
