// lib/self-check-data.ts | AI Visibility Self-Check Questions

export type Signal = "find" | "trust" | "quote";

export interface CheckQuestion {
  id: string;
  signal: Signal;
  question: string;
  hint?: string;
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
    question: "Does your website have structured data that tells AI what your business does?",
    hint: "This is code (called Schema.org / JSON-LD) embedded in your site that describes your company, services, and team in a format AI can read. Your developer or SEO team would know.",
    explanation:
      "Schema markup helps AI systems understand what your organization does, who leads it, and what services you offer. Without it, AI engines have to guess — and often guess wrong.",
  },
  {
    id: "crawlers",
    signal: "find",
    question: "Can AI bots like ChatGPT and Perplexity actually access and read your website?",
    hint: "Some websites block AI bots without realizing it. There's a file called robots.txt that controls this. If you're not sure, the answer is probably 'I'm not sure.'",
    explanation:
      "Many websites block AI crawlers by default. If AI engines can't crawl your site, they can't cite you. Ask your developer to check your robots.txt for GPTBot, ClaudeBot, and PerplexityBot permissions.",
  },
  {
    id: "content-structure",
    signal: "find",
    question: "Does your website use clear headings, direct answers, and organized sections (not just marketing slogans)?",
    hint: "Think about whether someone scanning your site could quickly find what you do, who you serve, and how you're different — or whether it's mostly brand language and buzzwords.",
    explanation:
      "AI engines extract direct answers from well-structured content. Pages full of vague marketing copy without clear headings are difficult for AI systems to parse and cite.",
  },
  // Signal 2: Can AI trust you? (4 questions)
  {
    id: "entity-consistency",
    signal: "trust",
    question: "Is your company description the same on your website, LinkedIn, and Google?",
    hint: "Go check: does your website say the same thing about your company as your LinkedIn page and your Google Business listing? Even small differences matter to AI.",
    explanation:
      "When AI engines find conflicting descriptions of your organization across platforms, they lose confidence. Entity consistency is a core trust signal.",
  },
  {
    id: "leadership",
    signal: "trust",
    question: "Are your leaders' names, titles, and bios consistent everywhere they appear online?",
    hint: "Check if your CEO's title says the same thing on LinkedIn, your website, and any press mentions. AI connects people to companies, and mismatches create confusion.",
    explanation:
      "AI systems build entity graphs connecting people to organizations. Inconsistent information about leadership creates fragmented entities that AI can't confidently reference.",
  },
  {
    id: "gbp",
    signal: "trust",
    question: "Do you have a complete Google Business Profile with hours, services, and description?",
    hint: "Search your business name on Google. If a panel appears on the right with your info, you have one. If it's incomplete or unclaimed, that's a gap.",
    explanation:
      "Google Business Profile is one of the strongest entity verification signals. AI systems use it to confirm your organization exists, what you do, and where you operate.",
  },
  {
    id: "directory-listings",
    signal: "trust",
    question: "Is your business listed on industry directories or review platforms with accurate info?",
    hint: "Think Crunchbase, G2, Clutch, Yelp, or industry-specific directories. Are you listed? Is the info correct and matching your website?",
    explanation:
      "Directory listings reinforce your entity across the web. The more consistent touchpoints AI finds, the more it trusts your identity.",
  },
  // Signal 3: Can AI quote you? (3 questions)
  {
    id: "chatgpt-test",
    signal: "quote",
    question: "When you ask ChatGPT or Perplexity about your industry, does your brand come up?",
    hint: "Try it right now: ask ChatGPT 'What are the best [your industry] companies in [your city]?' If you don't appear, that's the gap this tool is measuring.",
    explanation:
      "This is the ultimate test. If AI engines don't mention you when users ask about your category, you have an AI visibility gap that needs immediate attention.",
  },
  {
    id: "third-party",
    signal: "quote",
    question: "Have other websites, blogs, or news outlets mentioned or featured your brand?",
    hint: "This includes press coverage, guest articles, podcast appearances, or reviews on independent sites — anything where someone other than you is talking about your brand.",
    explanation:
      "AI engines rely heavily on third-party mentions to decide who to cite. If only your own website talks about you, AI has limited confidence to recommend you.",
  },
  {
    id: "original-research",
    signal: "quote",
    question: "Do you publish original data, research, or unique insights that others link to?",
    hint: "This could be case studies, survey results, industry reports, or unique frameworks. Content that other people cite or reference when making a point.",
    explanation:
      "Original, citable content is the strongest authority signal. When other sites link to your research, AI engines recognize you as a primary source worth citing.",
  },
];
