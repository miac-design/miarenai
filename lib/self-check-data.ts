// lib/self-check-data.ts | AI Visibility Self-Check Questions

export type Signal = "find" | "trust" | "quote";

export interface CheckQuestion {
  id: string;
  signal: Signal;
  question: string;
  explanation: string;
}

export const signalLabels: Record<Signal, { name: string; title: string; description: string }> = {
  find: {
    name: "Signal 1",
    title: "Can AI find you?",
    description: "Content structure, schema markup, and technical infrastructure that make you machine-readable.",
  },
  trust: {
    name: "Signal 2",
    title: "Can AI trust you?",
    description: "Entity consistency and cross-platform presence that build AI confidence in your identity.",
  },
  quote: {
    name: "Signal 3",
    title: "Can AI quote you?",
    description: "Third-party authority signals that give AI engines the confidence to cite you by name.",
  },
};

export const selfCheckQuestions: CheckQuestion[] = [
  // Signal 1: Can AI find you? (3 questions)
  {
    id: "schema",
    signal: "find",
    question: "Do you have Schema.org structured data (JSON-LD) on your website?",
    explanation:
      "Schema markup helps AI systems understand what your organization does, who leads it, and what services you offer. Without it, AI engines have to guess.",
  },
  {
    id: "crawlers",
    signal: "find",
    question: "Does your robots.txt allow AI crawlers like GPTBot, ClaudeBot, and PerplexityBot?",
    explanation:
      "Many websites block AI crawlers by default. If AI engines can't crawl your site, they can't cite you. Check your robots.txt for explicit bot permissions.",
  },
  {
    id: "content-structure",
    signal: "find",
    question: "Is your website content structured with clear headings, direct answers, and Q&A patterns?",
    explanation:
      "AI engines extract direct answers from well-structured content. Marketing-heavy copy without clear headings is difficult for AI systems to parse and cite.",
  },
  // Signal 2: Can AI trust you? (4 questions)
  {
    id: "entity-consistency",
    signal: "trust",
    question: "Is your company description identical across your website, LinkedIn, and Google Business Profile?",
    explanation:
      "When AI engines find conflicting descriptions of your organization across platforms, they lose confidence. Entity consistency is a core trust signal.",
  },
  {
    id: "leadership",
    signal: "trust",
    question: "Are your leadership team's names, titles, and bios consistent across all online platforms?",
    explanation:
      "AI systems build entity graphs connecting people to organizations. Inconsistent information about leadership creates fragmented entities that AI can't confidently reference.",
  },
  {
    id: "gbp",
    signal: "trust",
    question: "Do you have a claimed and fully completed Google Business Profile?",
    explanation:
      "Google Business Profile is one of the strongest entity verification signals. AI systems use it to confirm your organization exists, what you do, and where you operate.",
  },
  {
    id: "directory-listings",
    signal: "trust",
    question: "Are you listed in relevant industry directories with consistent information?",
    explanation:
      "Directory listings (Crunchbase, G2, industry-specific directories) reinforce your entity across the web. The more consistent touchpoints, the more AI trusts your identity.",
  },
  // Signal 3: Can AI quote you? (3 questions)
  {
    id: "chatgpt-test",
    signal: "quote",
    question: "When you ask ChatGPT or Perplexity about your industry, does your brand appear in the response?",
    explanation:
      "This is the ultimate test. If AI engines don't mention you when users ask about your category, you have an AI visibility gap that needs attention.",
  },
  {
    id: "third-party",
    signal: "quote",
    question: "Have independent publications, review sites, or industry outlets mentioned your brand?",
    explanation:
      "AI engines rely heavily on third-party mentions to decide who to cite. If only your own website talks about you, AI has limited confidence to recommend you.",
  },
  {
    id: "original-research",
    signal: "quote",
    question: "Do you publish original research, data, or insights that others reference?",
    explanation:
      "Original, citable content is the strongest authority signal. When other sites link to your research, AI engines recognize you as a primary source worth citing.",
  },
];
