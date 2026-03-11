// lib/faq-data.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "GEO is the practice of making your brand visible, citable, and recommendable in AI-generated search responses. Unlike traditional SEO which focuses on ranking in a list of links, GEO focuses on being named and cited in AI-generated answers from ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot.",
  },
  {
    question: "What is AI visibility?",
    answer:
      "AI visibility is whether AI search engines mention, cite, or recommend your brand when users ask relevant questions. If someone asks ChatGPT for recommendations in your industry and your brand is not mentioned, you have an AI visibility gap. In our research, most organizations score below 20%.",
  },
  {
    question: "How is GEO different from SEO?",
    answer:
      "SEO optimizes for Google's ranking algorithm. GEO optimizes for AI synthesis engines that evaluate authority, entity consistency, and structured data to decide who to cite. Only 12% of AI-cited URLs also rank in Google's top 10 (Ahrefs, 2025). GEO layers on top of SEO. It does not replace it.",
  },
  {
    question: "Should we stop investing in SEO and focus on GEO?",
    answer:
      "No. GEO layers on top of SEO, it does not replace it. A strong SEO foundation actually supports GEO performance. What you should do is evolve your SEO strategy to include GEO elements: structured data, AI-readable content, entity consistency, and AI citation tracking alongside your traditional metrics.",
  },
  {
    question: "What is the AI visibility methodology?",
    answer:
      "The AI visibility methodology is a diagnostic framework developed by Mia Cheraghian, PhD. It evaluates three signals that AI engines use when deciding who to cite: Can AI find you? (content structure, schema markup, technical infrastructure), Can AI trust you? (entity consistency, cross-platform presence), and Can AI quote you? (third-party authority signals). Each signal is assessed to reveal your overall AI visibility.",
  },
  {
    question: "How do AI engines decide what to cite?",
    answer:
      "AI engines evaluate multiple signals including entity consistency across platforms, authority from trusted third-party sources, content structure and AI readability, technical infrastructure like schema markup, and cross-platform presence. They synthesize from multiple sources rather than ranking individual pages.",
  },
  {
    question: "How long does it take to see results from GEO?",
    answer:
      "Entity consistency fixes can show impact within 2-4 weeks as AI engines re-crawl your profiles. Structured data improvements typically take 4-8 weeks. Authority building is the longest play at 3-6+ months but produces the most durable results. We prioritize quick wins first so you see momentum early.",
  },
  {
    question: "Can you pay to be cited by AI?",
    answer:
      "No. AI engines do not accept payment for citations. They cite sources based on authority, relevance, and consistency. This is why earned visibility through proper GEO strategy matters. You cannot buy your way into an AI-generated answer the way you can buy Google Ads.",
  },
  {
    question: "We're a small company. Does AI visibility matter for us?",
    answer:
      "Yes, especially for you. AI search tends to recommend a smaller number of brands per query compared to Google's ten blue links. This means the gap between being mentioned and being invisible is wider. Small businesses with strong AI visibility can compete directly with larger competitors in AI responses.",
  },
  {
    question: "How do we measure AI visibility?",
    answer:
      "We measure AI visibility by querying major AI platforms (ChatGPT, Perplexity, Google AI Overviews, Copilot) with questions your customers would ask. We track brand mentions, citation frequency, sentiment, and recommendation positioning. The AI visibility methodology provides a quantified score across all three signals.",
  },
  {
    question: "What AI search platforms should we care about?",
    answer:
      "ChatGPT (300M+ weekly active users), Perplexity (fastest-growing AI search engine), Google AI Overviews (appearing in 30%+ of queries), Microsoft Copilot (enterprise via Office 365), and Google Gemini. Each platform has different citation behaviors, and a real GEO strategy addresses all of them.",
  },
  {
    question: "Is this just a fad?",
    answer:
      "No. AI-referred website sessions grew 527% in 2024-2025 (Previsible/Search Engine Land). Traditional click-through rates dropped ~30% since AI Overviews launched (BrightEdge). 300M+ people use ChatGPT weekly (OpenAI). This is a structural shift in how people find businesses, not a temporary trend.",
  },
];
