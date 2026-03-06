// lib/glossary-data.ts

export type GlossaryCategory =
  | "Core GEO"
  | "AI Platforms"
  | "Strategy"
  | "Measurement"
  | "Technical"
  | "SEO Bridge";

export interface GlossaryTerm {
  term: string;
  category: GlossaryCategory;
  definition: string;
  insight?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "AEO (Answer Engine Optimization)",
    category: "Core GEO",
    definition:
      "The broader practice of optimizing content to appear in any engine that provides direct answers rather than links. This includes Google's Featured Snippets, voice assistant responses, and AI-generated responses. GEO is a subset of AEO that focuses specifically on generative AI engines.",
    insight:
      "All GEO is AEO, but not all AEO is GEO. Understanding the umbrella helps you see how the field evolved.",
  },
  {
    term: "AI Agent",
    category: "Strategy",
    definition:
      "An autonomous AI system that takes actions on behalf of users: comparing options, making recommendations, and even completing purchases. AI agents rely on the same signals GEO addresses: authority, structure, entity consistency, and trust.",
    insight:
      "Brands that AI search engines trust today will be the brands AI agents recommend tomorrow.",
  },
  {
    term: "AI Overview",
    category: "AI Platforms",
    definition:
      "Google's AI-generated summary that appears at the top of search results for certain queries. Previously called Search Generative Experience (SGE). AI Overviews synthesize information from multiple sources and can include citations and links.",
    insight:
      "When an AI Overview appears, it pushes traditional organic results further down the page. Being cited in the AI Overview becomes more valuable than the #1 organic position.",
  },
  {
    term: "AI Visibility",
    category: "Measurement",
    definition:
      "The measure of whether and how often your brand appears when users query AI-powered search engines about your category, products, or services. Measured through citation frequency, share of voice, and sentiment.",
    insight:
      "This is the core metric of GEO. If you can't measure it, you can't improve it.",
  },
  {
    term: "AI Visibility Score",
    category: "Measurement",
    definition:
      "A percentage calculated by testing your brand across multiple AI platforms with relevant queries. The formula: (number of mentions ÷ total checks across platforms) × 100. Scores below 20% indicate urgent action is needed.",
  },
  {
    term: "Authority Signals",
    category: "Core GEO",
    definition:
      "Third-party validation that tells AI engines your brand is credible and trustworthy. Includes earned media, review site presence, expert citations, high-authority backlinks, social proof, and Wikipedia presence. The 'A' in the EXACT Framework.",
    insight:
      "AI engines weigh external validation heavily. This is the hardest signal to build but has the biggest compounding impact.",
  },
  {
    term: "Backlink",
    category: "SEO Bridge",
    definition:
      "A link from another website pointing to yours. In traditional SEO, backlinks are a primary ranking factor. In GEO, backlinks from high-authority domains (.edu, .gov, major publications) serve as authority signals that increase AI confidence in citing your brand.",
  },
  {
    term: "ChatGPT",
    category: "AI Platforms",
    definition:
      "OpenAI's conversational AI with over 300 million weekly active users as of 2025. The most widely used AI search platform. Cites authoritative, recent content and is increasingly used as a search alternative.",
  },
  {
    term: "Citation Frequency",
    category: "Measurement",
    definition:
      "How often your brand is mentioned in AI-generated responses across platforms. One of the three dimensions of AI visibility, alongside share of voice and sentiment.",
  },
  {
    term: "Content Structure",
    category: "Core GEO",
    definition:
      "How your content is organized and formatted for AI readability. AI engines pull from content that directly answers questions. Content structured with clear headings, direct answers, and Q&A format performs significantly better than marketing copy. The 'C' in the EXACT Framework.",
  },
  {
    term: "Copilot",
    category: "AI Platforms",
    definition:
      "Microsoft's AI assistant embedded in Bing, Edge, Windows, and Office 365. Uses Bing's index for web-grounded responses and is particularly relevant for enterprise users.",
  },
  {
    term: "Cross-Platform Presence",
    category: "Core GEO",
    definition:
      "Being visible and referenced across multiple platforms that AI engines cross-reference when building responses. Includes LinkedIn, review sites, industry directories, Google Business Profile, and more. The 'X' in the EXACT Framework.",
  },
  {
    term: "Entity",
    category: "Technical",
    definition:
      "How AI systems understand your brand as a distinct, consistent concept. Your brand's digital fingerprint assembled from information scattered across the web — your website, LinkedIn, directories, news articles, and more.",
  },
  {
    term: "Entity Consistency",
    category: "Core GEO",
    definition:
      "Having identical brand information across all platforms where AI engines look. Name, description, services, founding date, leadership, and location must match everywhere. Inconsistency kills AI confidence in citing you. The 'E' in the EXACT Framework.",
    insight:
      "Entity consistency fixes can show impact within 2-4 weeks. This is often the single fastest improvement you can make.",
  },
  {
    term: "EXACT Framework",
    category: "Core GEO",
    definition:
      "Miaren AI's proprietary methodology for assessing and improving AI visibility. Evaluates five signals: Entity Consistency, Cross-Platform Presence, Authority Signals, Content Structure, and Technical Infrastructure.",
  },
  {
    term: "FAQPage Schema",
    category: "Technical",
    definition:
      "A Schema.org markup type that structures question-and-answer content in a format AI engines can directly parse. Maps to how people prompt AI, making it one of the most impactful schema types for GEO.",
  },
  {
    term: "Gemini",
    category: "AI Platforms",
    definition:
      "Google's AI platform integrated across the Google ecosystem. Growing for research queries and increasingly used alongside traditional Google Search.",
  },
  {
    term: "GEO (Generative Engine Optimization)",
    category: "Core GEO",
    definition:
      "The practice of optimizing a brand's digital presence so that AI-powered search engines cite, recommend, and reference it in their generated responses. Unlike traditional SEO which focuses on ranking in a list of links, GEO focuses on being named in AI-generated answers.",
    insight:
      "The term emerged from foundational 2024 research by Aggarwal et al. from Georgia Tech, Princeton, and IIT Delhi.",
  },
  {
    term: "Google Business Profile",
    category: "SEO Bridge",
    definition:
      "Google's free business listing tool. For GEO, it serves as a critical entity verification source — AI engines cross-reference your GBP information with your website and other platforms to validate entity consistency.",
  },
  {
    term: "JSON-LD",
    category: "Technical",
    definition:
      "JavaScript Object Notation for Linked Data. The recommended format for implementing Schema.org structured data. Placed in the HTML head section, it provides machine-readable information about your content without affecting what users see.",
  },
  {
    term: "Knowledge Graph",
    category: "Technical",
    definition:
      "A structured database of entities and their relationships that search engines use to understand the world. Google's Knowledge Graph powers Knowledge Panels and AI Overviews. Building your entity in knowledge graphs is foundational to GEO.",
  },
  {
    term: "Perplexity",
    category: "AI Platforms",
    definition:
      "The fastest-growing AI search engine, known for always showing inline citations with every response. Strong in B2B and enterprise use cases with approximately 40% month-over-month growth in enterprise adoption.",
  },
  {
    term: "Schema.org",
    category: "Technical",
    definition:
      "A collaborative vocabulary for structured data markup on web pages. Supported by Google, Microsoft, and other major platforms. Key schema types for GEO include Organization, Person, FAQPage, Product/Service, Article, and BreadcrumbList.",
  },
  {
    term: "Sentiment",
    category: "Measurement",
    definition:
      "How AI describes your brand when it mentions you. One of the three dimensions of AI visibility. Positive sentiment in AI responses drives consideration; negative or neutral sentiment can be actively harmful.",
  },
  {
    term: "Share of Voice",
    category: "Measurement",
    definition:
      "Your brand's mentions compared to competitors in AI-generated responses for your category. Measured by running the same queries across platforms and counting relative citations.",
  },
  {
    term: "Structured Data",
    category: "Technical",
    definition:
      "Machine-readable markup (primarily Schema.org in JSON-LD format) that explicitly tells AI engines what your content is about. Without structured data, AI engines must infer meaning from unstructured text. The 'T' (Technical Infrastructure) in the EXACT Framework.",
  },
  {
    term: "Technical Infrastructure",
    category: "Core GEO",
    definition:
      "The machine-readable backbone that makes all other GEO signals work. Primarily Schema.org structured data in JSON-LD format that explicitly tells AI engines what your content is about. The 'T' in the EXACT Framework.",
  },
  {
    term: "Digital Footprint",
    category: "Strategy",
    definition:
      "The collective trail of data your brand leaves across the internet — website content, social profiles, reviews, press mentions, directory listings. AI engines assemble your entity understanding from this footprint, making consistency across all touchpoints critical for GEO.",
  },
  {
    term: "Hallucination",
    category: "AI Platforms",
    definition:
      "When an AI engine generates factually incorrect information with high confidence. For brands, hallucinations can mean being incorrectly described, attributed with wrong services, or confused with competitors. Strong entity consistency and structured data reduce hallucination risk.",
    insight:
      "If AI is hallucinating about your brand, it's because your digital footprint doesn't give it enough structured, consistent data to work with.",
  },
  {
    term: "Indexing",
    category: "SEO Bridge",
    definition:
      "The process by which search engines and AI crawlers discover, process, and store your web content. For GEO, indexing goes beyond traditional search — AI engines also index structured data, review sites, and third-party mentions to build entity understanding.",
  },
  {
    term: "LLM (Large Language Model)",
    category: "AI Platforms",
    definition:
      "The neural network architecture powering AI search engines like ChatGPT (GPT-4), Gemini (Gemini Pro), and Perplexity. LLMs process vast amounts of text data and generate human-like responses. Understanding how LLMs retrieve and synthesize information is foundational to GEO strategy.",
  },
  {
    term: "Mention",
    category: "Measurement",
    definition:
      "Any instance where your brand is named in an AI-generated response. Mentions can be direct (brand name cited) or indirect (described without naming). Tracking mentions across platforms is a core GEO measurement practice.",
  },
  {
    term: "NAP Consistency",
    category: "SEO Bridge",
    definition:
      "Name, Address, Phone number — the foundational entity data that must be identical across every platform. Originally a local SEO concept, NAP consistency is now critical for GEO because AI engines cross-reference this data to verify entity identity.",
  },
  {
    term: "Organic Search",
    category: "SEO Bridge",
    definition:
      "Traditional unpaid search results on engines like Google and Bing. While still important, organic search is being supplemented by AI-generated responses that synthesize information from multiple sources rather than presenting a list of links.",
    insight:
      "88% of top Google results are invisible to AI engines. Ranking organically no longer guarantees being cited by AI.",
  },
  {
    term: "Query Intent",
    category: "Strategy",
    definition:
      "The underlying purpose behind a user's search or AI prompt. AI engines are sophisticated at interpreting intent — informational, navigational, transactional, or comparative. GEO strategy must align content structure with the query intents your target audience uses.",
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    category: "Technical",
    definition:
      "A technique where AI engines retrieve relevant documents from external sources before generating a response. RAG is how most AI search engines ground their answers in real data. Being in the retrieval set is the first step to being cited.",
    insight:
      "If your content isn't in the retrieval step, it can never appear in the generation step. RAG is why structured, authoritative content matters.",
  },
  {
    term: "User Prompt",
    category: "AI Platforms",
    definition:
      "The natural language query a user types into an AI search engine. Unlike keyword-based search queries, prompts are conversational and often complex. GEO must account for the wide variety of ways users phrase questions about your category.",
  },
  {
    term: "Visibility Audit",
    category: "Measurement",
    definition:
      "A systematic assessment of how your brand appears across AI search platforms. Involves querying multiple AI engines with category-relevant prompts and scoring citation frequency, sentiment, and accuracy. The EXACT Audit is Miaren AI's proprietary visibility audit methodology.",
  },
  {
    term: "Web Crawling",
    category: "Technical",
    definition:
      "The automated process by which search engines and AI systems discover and download web content. AI-specific crawlers like GPTBot (OpenAI), PerplexityBot, and Google-Extended must be allowed in your robots.txt for your content to be included in AI training and retrieval.",
  },
  {
    term: "XML Sitemap",
    category: "Technical",
    definition:
      "A structured file that tells search engines and AI crawlers which pages on your site exist and when they were last updated. Critical for GEO because it helps AI crawlers efficiently discover and prioritize your content for indexing.",
  },
  {
    term: "YMYL (Your Money or Your Life)",
    category: "SEO Bridge",
    definition:
      "Content categories that can impact a user's health, finances, safety, or well-being. AI engines apply stricter authority requirements for YMYL topics, making entity consistency and third-party validation even more critical for brands in healthcare, finance, and legal sectors.",
  },
  {
    term: "Zero-Click Search",
    category: "Strategy",
    definition:
      "A search where the user gets their answer directly in the results without clicking through to any website. AI-generated responses are the ultimate zero-click experience. GEO ensures your brand is the one being cited in these responses, even when users never visit your site.",
    insight:
      "In a zero-click world, being cited IS the conversion. Brand visibility in the answer is the new click.",
  },
];

export function getTermsByLetter(): Record<string, GlossaryTerm[]> {
  const grouped: Record<string, GlossaryTerm[]> = {};
  const sorted = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  for (const term of sorted) {
    const letter = term.term[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(term);
  }

  return grouped;
}

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
