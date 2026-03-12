#!/usr/bin/env node
// scripts/validate-blog-post.mjs
// Validates a generated blog post using Claude before auto-publishing
// Checks: stat accuracy, citations, AI-friendliness, tone, structure

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const BLOG_DATA_PATH = resolve(ROOT, "lib/blog-data.ts");
const BLOG_CONTENT_PATH = resolve(ROOT, "lib/blog-content.ts");

const blogDataRaw = readFileSync(BLOG_DATA_PATH, "utf-8");
const blogContentRaw = readFileSync(BLOG_CONTENT_PATH, "utf-8");

const client = new Anthropic();

const systemPrompt = `You are a strict editorial reviewer for Miaren AI (miarenai.com), a company specializing in AI visibility and Generative Engine Optimization (GEO).

Your job is to validate a blog post BEFORE it gets auto-published. You must check:

1. **Statistics & Data Accuracy**
   - Are all statistics plausible and not fabricated?
   - Are percentages, numbers, and claims reasonable?
   - Are sources/studies cited inline when stats are mentioned?
   - Flag any stat that sounds made up or lacks a citation

2. **AI-Friendliness (GEO-optimized content)**
   - Does the post have clear, descriptive section headings?
   - Is the content structured for AI parsability (clear topic sentences, logical flow)?
   - Does it include entity-rich language (proper nouns, specific tools, named methodologies)?
   - Would an AI search engine be able to extract clear answers from this content?

3. **Brand Voice & Tone**
   - Does it sound like Mia's voice: authoritative, research-backed, direct, no fluff?
   - Is it free of generic marketing language?
   - No emojis?

4. **Content Quality**
   - Is the content actionable and practical?
   - Are there at least 5 well-developed sections?
   - Is the category appropriate for the content?
   - No duplicate topics with existing posts?

Respond with ONLY a valid JSON object (no markdown fencing):
{
  "approved": true or false,
  "score": 1-10,
  "issues": ["list of issues found, empty if approved"],
  "suggestions": ["optional improvements, even if approved"],
  "stats_flagged": ["any statistics that seem unverifiable or fabricated"],
  "summary": "One sentence summary of your verdict"
}

Be strict. Only approve (approved: true) if score >= 7 and there are no critical issues with stats accuracy.`;

async function main() {
  console.log("Validating generated blog post...");

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: `Review the most recently added blog post in these files. The newest post is at the TOP of the array.

BLOG DATA (metadata):
${blogDataRaw}

BLOG CONTENT (sections):
${blogContentRaw.slice(0, 8000)}

Validate this post for auto-publishing.`,
      },
    ],
  });

  const text = response.content[0].text.trim();

  let result;
  try {
    result = JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      result = JSON.parse(match[0]);
    } else {
      console.error("Failed to parse validation response:");
      console.error(text);
      process.exit(2);
    }
  }

  console.log("\n--- Validation Result ---");
  console.log(`Approved: ${result.approved}`);
  console.log(`Score: ${result.score}/10`);
  console.log(`Summary: ${result.summary}`);

  if (result.stats_flagged?.length > 0) {
    console.log("\nFlagged Statistics:");
    result.stats_flagged.forEach((s) => console.log(`  - ${s}`));
  }

  if (result.issues?.length > 0) {
    console.log("\nIssues:");
    result.issues.forEach((s) => console.log(`  - ${s}`));
  }

  if (result.suggestions?.length > 0) {
    console.log("\nSuggestions:");
    result.suggestions.forEach((s) => console.log(`  - ${s}`));
  }

  // Write result to file for workflow to read
  const fs = await import("fs");
  fs.writeFileSync(
    resolve(ROOT, "validation-result.json"),
    JSON.stringify(result, null, 2)
  );

  if (!result.approved) {
    console.log("\nPost NOT approved for auto-publish. Will create PR for manual review.");
    process.exit(1);
  }

  console.log("\nPost APPROVED for auto-publish.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Validation failed:", err.message);
  process.exit(2);
});
