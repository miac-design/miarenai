// lib/faq-data.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "GEO is the practice of optimizing your brand's digital presence so that AI-powered search engines — like ChatGPT, Perplexity, Gemini, and Copilot — cite, recommend, and reference your brand in their generated responses. Unlike traditional SEO which focuses on ranking in a list of links, GEO focuses on being named in AI-generated answers.",
  },
  {
    question: "How is GEO different from SEO?",
    answer:
      "SEO optimizes for Google's ranking algorithm — backlinks, keywords, page speed. GEO optimizes for AI synthesis engines that evaluate authority, entity consistency, and structured data to decide who to cite. Only 12% of URLs that AI engines cite also rank in Google's top 10 (Ahrefs, 2025). They're different systems with different rules. GEO layers on top of SEO — it doesn't replace it.",
  },
  {
    question: "What is the EXACT Framework?",
    answer:
      "The EXACT Framework is Miaren AI's proprietary audit methodology for assessing AI visibility. It evaluates five signals that AI engines use when deciding which brands to cite: Entity Consistency, Cross-Platform Presence, Authority Signals, Content Structure, and Technical Infrastructure. Each signal is scored to produce an overall AI Visibility Score.",
  },
  {
    question: "Does GEO replace SEO?",
    answer:
      "No. GEO layers on top of SEO — it doesn't replace it. You still need strong traditional search fundamentals. But SEO alone is no longer sufficient. AI engines use different signals and pull from different sources than Google's traditional algorithm. The brands winning in AI search are the ones doing both.",
  },
  {
    question: "How do I know if my brand has AI visibility?",
    answer:
      "Ask ChatGPT, Perplexity, and Gemini questions that your customers would ask about your industry, products, or services. Does your brand get mentioned? If not, you have an AI visibility gap. Our EXACT Audit provides a systematic, research-backed assessment across all major AI platforms with a quantified score and prioritized action plan.",
  },
  {
    question: "How long until I see results from GEO?",
    answer:
      "Entity consistency fixes can show impact within 2-4 weeks as AI engines recrawl your profiles. Structured data improvements typically take 4-8 weeks. Authority building is the longest play — 3-6 months for meaningful third-party signals. The EXACT Audit prioritizes quick wins first so you see momentum early.",
  },
  {
    question: "What AI platforms do you optimize for?",
    answer:
      "We optimize across all major AI search platforms: ChatGPT (300M+ weekly active users), Perplexity (fastest-growing AI search engine), Google AI Overviews (appearing in 30%+ of queries), Microsoft Copilot (enterprise via Office 365), and Google Gemini. Each platform has different citation behaviors, and a real GEO strategy addresses all of them.",
  },
];
