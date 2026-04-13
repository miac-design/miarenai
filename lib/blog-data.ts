// lib/blog-data.ts

export type BlogCategory = "GEO 101" | "Deep Dive" | "Research" | "How-To" | "Strategy";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-search-query-intent-optimization-2026",
    title: "AI Search Query Intent: Why Your Keywords Don't Match What AI Engines Need",
    description:
      "AI engines interpret query intent differently than Google—here's how to optimize content for the way ChatGPT, Perplexity, and Gemini actually parse user questions.",
    category: "Deep Dive",
    date: "2026-04-13",
    readTime: "8 min read",
  },
  {
    slug: "building-authority-signals-ai-engines-trust-2026",
    title: "Building Authority Signals AI Engines Actually Trust in 2026",
    description:
      "Most authority-building tactics work for Google but fail AI engines—here's what ChatGPT, Perplexity, and Gemini actually look for before citing your brand.",
    category: "Deep Dive",
    date: "2026-04-06",
    readTime: "9 min read",
  },
  {
    slug: "schema-markup-audit-ai-search-optimization",
    title: "How to Audit Your Schema Markup for AI Search Engines",
    description:
      "Most schema implementations work for Google but fail AI engines—here's the systematic audit process that reveals what needs fixing.",
    category: "How-To",
    date: "2026-03-30",
    readTime: "8 min read",
  },
  {
    slug: "local-business-ai-search-optimization-guide",
    title: "AI Search for Local Businesses: Why Your GMB Profile Isn't Enough",
    description:
      "Local businesses need different GEO tactics than enterprises—here's the specific optimization strategy that works for location-based queries.",
    category: "How-To",
    date: "2026-03-23",
    readTime: "7 min read",
  },
  {
    slug: "measuring-ai-visibility-roi-beyond-vanity-metrics",
    title: "Measuring AI Visibility ROI: Beyond Vanity Metrics",
    description:
      "How to prove AI visibility impact to executives with revenue-linked metrics, not just citation counts.",
    category: "Strategy",
    date: "2026-03-16",
    readTime: "8 min read",
  },
  {
    slug: "entity-optimization-for-ai-search-engines",
    title: "Entity Optimization: How AI Search Engines Build Trust in Your Brand",
    description:
      "Why entity consistency across platforms determines whether AI engines cite you, and the specific signals they check before recommending your brand.",
    category: "Deep Dive",
    date: "2026-03-12",
    readTime: "8 min read",
  },
  {
    slug: "what-is-generative-engine-optimization",
    title: "What is Generative Engine Optimization?",
    description:
      "The complete guide to GEO: what it is, why it matters, and why your SEO strategy alone isn't enough anymore.",
    category: "GEO 101",
    date: "2026-02-26",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "how-ai-search-engines-decide-which-brands-to-cite",
    title: "How AI Search Engines Decide Which Brands to Cite",
    description:
      "We analyzed how ChatGPT, Perplexity, Gemini, and Copilot choose sources. The patterns are consistent, and most brands are missing all of them.",
    category: "Deep Dive",
    date: "2026-02-13",
    readTime: "8 min read",
  },
  {
    slug: "why-most-companies-score-below-20-on-ai-visibility",
    title: "Why Most Companies Score Below 20% on AI Visibility",
    description:
      "After auditing dozens of brands, the same gaps appear every time. Here's what's going wrong and the fix order that matters.",
    category: "Research",
    date: "2026-01-30",
    readTime: "5 min read",
  },
  {
    slug: "ai-citation-tracking-explained",
    title: "AI Citation Tracking: How to Measure What You Can't See",
    description:
      "Your Google Analytics won't show this. Here's how to measure whether AI systems are referencing your brand, and what the data tells you.",
    category: "How-To",
    date: "2026-01-18",
    readTime: "7 min read",
  },
  {
    slug: "seo-vs-geo-complementary-not-interchangeable",
    title: "SEO vs. GEO: Complementary, Not Interchangeable",
    description:
      "Only 12% of AI-cited URLs rank in Google's top 10. Same goal, completely different rules.",
    category: "GEO 101",
    date: "2026-01-08",
    readTime: "6 min read",
  },
  {
    slug: "how-to-prepare-your-enterprise-for-ai-driven-discovery",
    title: "How to Prepare Your Enterprise for AI-Driven Discovery",
    description:
      "A structured approach for marketing leaders who need to present the case for GEO internally, with the data to back it up.",
    category: "Strategy",
    date: "2026-01-03",
    readTime: "9 min read",
  },
];

export const categories: BlogCategory[] = [
  "GEO 101",
  "Deep Dive",
  "Research",
  "How-To",
  "Strategy",
];
