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
    question: "What is GEO in marketing?",
    answer:
      "In marketing, GEO (Generative Engine Optimization) refers to the strategy of positioning a brand to be cited and recommended by AI-powered search systems. As more consumers use ChatGPT, Perplexity, and Google AI Overviews to discover products and services, GEO has become a critical layer of digital marketing strategy. It differs from traditional SEO by focusing on AI citation signals rather than search engine rankings.",
  },
  {
    question: "What is the difference between GEO and AEO?",
    answer:
      "AEO (Answer Engine Optimization) emerged around 2018 and focuses on earning featured snippets and voice search results in traditional search engines. GEO (Generative Engine Optimization) is the newer evolution, emerging in 2024, focused on being cited in fully AI-generated responses from systems like ChatGPT and Perplexity. AEO optimizes for structured answers within Google. GEO optimizes for AI systems that synthesize information across multiple sources to generate original responses.",
  },
  {
    question: "Should businesses stop investing in SEO and focus on GEO instead?",
    answer:
      "No. GEO layers on top of SEO, it does not replace it. A strong SEO foundation actually supports GEO performance. What organizations should do is evolve their SEO strategy to include GEO elements: structured data, AI-readable content, entity consistency, and AI citation tracking alongside traditional metrics.",
  },
  {
    question: "How do you measure whether AI search engines will cite a brand?",
    answer:
      "The AI visibility methodology is a diagnostic framework developed by Mia Cheraghian, PhD. It evaluates three signals that AI engines use when deciding who to cite: Can AI find you? (content structure, schema markup, technical infrastructure), Can AI trust you? (entity consistency, cross-platform presence), and Can AI quote you? (third-party authority signals). Each signal is assessed to produce a quantified AI visibility score.",
  },
  {
    question: "How do AI engines decide what to cite?",
    answer:
      "AI engines evaluate multiple signals including entity consistency across platforms, authority from trusted third-party sources, content structure and AI readability, technical infrastructure like schema markup, and cross-platform presence. They synthesize from multiple sources rather than ranking individual pages.",
  },
  {
    question: "How long does it take for GEO to work?",
    answer:
      "Entity consistency fixes can show impact within 2-4 weeks as AI engines re-crawl your profiles. Structured data improvements typically take 4-8 weeks. Authority building is the longest play at 3-6+ months but produces the most durable results. Implementation is typically sequenced from highest-impact, lowest-effort fixes first.",
  },
  {
    question: "Can you pay to be cited by AI?",
    answer:
      "No. AI engines do not accept payment for citations. They cite sources based on authority, relevance, and consistency. This is why earned visibility through proper GEO strategy matters. You cannot buy your way into an AI-generated answer the way you can buy Google Ads.",
  },
  {
    question: "How do I get my business mentioned by ChatGPT?",
    answer:
      "To be mentioned by ChatGPT, your organization needs strong signals across three areas: structured content that AI can parse (Schema.org markup, clear headings, direct answers), consistent entity information across platforms (your website, LinkedIn, directories, and review sites must align), and third-party authority (independent sources that reference and validate your expertise). ChatGPT synthesizes from multiple sources, so single-platform optimization is not sufficient.",
  },
  {
    question: "Does AI visibility matter for small businesses?",
    answer:
      "Yes, especially for small businesses. AI search tends to recommend a smaller number of brands per query compared to Google's ten blue links. This means the gap between being mentioned and being invisible is wider. Small businesses with strong AI visibility can compete directly with larger competitors in AI responses.",
  },
  {
    question: "How is AI visibility measured?",
    answer:
      "AI visibility is measured by querying major AI platforms (ChatGPT, Perplexity, Google AI Overviews, Copilot) with questions your audience would ask. Metrics include brand mention frequency, citation positioning, sentiment, and recommendation context. The AI visibility methodology provides a quantified score across three diagnostic signals.",
  },
  {
    question: "Does schema markup help with AI search?",
    answer:
      "Yes. Schema.org markup (structured data in JSON-LD format) is one of the most impactful technical signals for AI visibility. It allows AI engines to directly parse your brand information, services, FAQs, and organizational details rather than inferring them from unstructured text. In our research, the majority of websites have no schema markup at all, which means AI must guess what their content is about.",
  },
  {
    question: "What is entity consistency in AI search?",
    answer:
      "Entity consistency means your organization's name, description, services, leadership, and contact information are identical across every platform AI engines reference: your website, LinkedIn, Google Business Profile, industry directories, review sites, and event platforms. AI engines cross-reference multiple sources to build confidence. If sources conflict, AI confidence drops and citation likelihood decreases. Achieving entity consistency is one of the three diagnostic signals in the AI visibility methodology.",
  },
  {
    question: "What AI search platforms should we care about?",
    answer:
      "ChatGPT (900M+ weekly active users), Perplexity (fastest-growing AI search engine), Google AI Overviews (appearing in nearly 50% of queries), Microsoft Copilot (enterprise via Office 365), and Google Gemini. Each platform has different citation behaviors, and an effective GEO strategy addresses all of them.",
  },
  {
    question: "How much does an AI visibility audit cost?",
    answer:
      "Pricing depends on the scope of the engagement — the number of AI platforms analyzed, queries tested, and the depth of competitive analysis. We offer diagnostics for organizations of different sizes. The best way to get a clear answer is to schedule a conversation so we can understand your needs and provide a tailored scope.",
  },
  {
    question: "Is this just a fad?",
    answer:
      "No. AI-referred website sessions grew 527% in 2024-2025 (Previsible/Search Engine Land). Traditional click-through rates dropped ~30% since AI Overviews launched (BrightEdge). 900M+ people use ChatGPT weekly (OpenAI, 2026). This is a structural shift in how people find businesses, not a temporary trend.",
  },
];

/** GEO vs SEO specific FAQ items used on the /geo-vs-seo page */
export const geoVsSeoFaqItems: FaqItem[] = [
  {
    question: "Is GEO better than SEO?",
    answer:
      "GEO and SEO serve different systems. SEO optimizes for Google's ranking algorithm. GEO optimizes for AI synthesis engines that evaluate authority, entity consistency, and structured data to decide who to cite. Only 12% of AI-cited URLs also rank in Google's top 10 (Ahrefs, 2025). You need both working together.",
  },
  {
    question: "Is GEO taking over SEO?",
    answer:
      "No. GEO layers on top of SEO. A strong SEO foundation actually supports GEO performance because many of the same signals matter: quality content, site authority, technical health. What's changing is that SEO alone is no longer sufficient. Businesses need to add GEO elements: structured data, AI-readable content, entity consistency, and AI citation tracking.",
  },
  {
    question: "What is the equivalent of SEO for AI?",
    answer:
      "GEO (Generative Engine Optimization) is the direct equivalent. While SEO focuses on being ranked by Google, GEO focuses on being cited by AI engines like ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot.",
  },
  {
    question: "Will SEO be replaced by AI?",
    answer:
      "No. AI search engines rely on indexed web content to generate their answers. If content doesn't rank or exist on the web, AI has nothing to pull from. SEO remains the foundation of web visibility. GEO is the new layer that ensures AI engines can find, understand, and cite your content.",
  },
  {
    question: "Will SEO exist in 5 years?",
    answer:
      "SEO will exist but will evolve significantly. ChatGPT alone has 900M+ weekly active users (OpenAI, 2026), and 37% of consumers now start searches with AI instead of Google (Eight Oh Two, 2026). Traditional search volume may decline, but SEO fundamentals (quality content, site structure, authority) will remain important as the foundation that GEO builds on. The businesses that thrive will be those who integrate GEO into their SEO strategy now.",
  },
  {
    question: "Is SEO still worth it with AI?",
    answer:
      "Absolutely. SEO and GEO are complementary. A strong SEO foundation supports GEO performance. What you should do is evolve your SEO strategy to include GEO elements: add structured data, restructure content for AI readability, build entity consistency, and start tracking AI citations alongside your traditional SEO metrics.",
  },
];
