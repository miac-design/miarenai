// lib/schema.ts | JSON-LD Structured Data for AI Crawlability

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Miaren AI",
    alternateName: "Miaren",
    url: "https://miarenai.com",
    logo: "https://miarenai.com/logo.png",
    description:
      "Miaren AI is an AI visibility research and strategy firm studying how organizations become discoverable, citable, and recommended in AI-powered search systems including ChatGPT, Perplexity, Google AI Overviews, and Copilot.",
    foundingDate: "2026",
    founder: {
      "@type": "Person",
      name: "Mia Cheraghian",
      alternateName: "Mahboubeh Cheraghian",
      jobTitle: "Founder",
      url: "https://miarenai.com/about",
      sameAs: ["https://www.linkedin.com/in/mia-cheraghian/"],
      affiliation: [
        {
          "@type": "Organization",
          name: "Texas Tech University",
        },
        {
          "@type": "Organization",
          name: "Austin AI Hub",
        },
        {
          "@type": "Organization",
          name: "Rackspace Technology",
        },
      ],
      knowsAbout: [
        "Generative Engine Optimization",
        "AI Search Visibility",
        "Structured Data",
        "Entity Optimization",
        "AI Citation Tracking",
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    sameAs: ["https://www.linkedin.com/company/miaren-ai/"],
    knowsAbout: [
      "Generative Engine Optimization (GEO)",
      "AI Search Visibility",
      "AI Citation Optimization",
      "Structured Data Implementation",
      "Entity Consistency",
      "Cross-Platform Presence",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Visibility Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility Audit",
            description:
              "A structured diagnostic analyzing how AI systems currently interpret, reference, and cite your organization across ChatGPT, Perplexity, Google AI Overviews, and Copilot.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility Strategy",
            description:
              "A research-informed strategic analysis that maps how AI systems construct knowledge about your category, identifies gaps, and designs the knowledge architecture to improve AI interpretation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Information Architecture",
            description:
              "Structuring organizational knowledge so AI systems can correctly interpret, reference, and recommend an organization through semantic hierarchies, structured data schemas, and entity graphs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Executive Intelligence Briefings",
            description:
              "Structured briefings for leadership and technical teams on how AI search systems evaluate and cite sources, grounded in the three-signal diagnostic methodology.",
          },
        },
      ],
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mia Cheraghian",
    alternateName: "Mahboubeh Cheraghian",
    jobTitle: "Founder, Miaren AI",
    url: "https://miarenai.com/about",
    image: "https://miarenai.com/mia-cheraghian.png",
    description:
      "PhD researcher and founder of Miaren AI. Studies how AI-powered search systems interpret, reference, and recommend organizations. Background in UX research and market research. Director of Strategic Partnerships & Marketing at Austin AI Hub.",
    sameAs: ["https://www.linkedin.com/in/mia-cheraghian/"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Texas Tech University",
    },
    worksFor: [
      { "@type": "Organization", name: "Miaren AI" },
      { "@type": "Organization", name: "Austin AI Hub" },
      { "@type": "Organization", name: "Rackspace Technology" },
    ],
    knowsAbout: [
      "Generative Engine Optimization",
      "AI Search Visibility",
      "Structured Data",
      "Digital Discovery",
      "AI Accessibility",
    ],
  };
}

export function getFaqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    url: `https://miarenai.com/insights/${article.slug}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Mia Cheraghian",
      url: "https://miarenai.com/about",
      jobTitle: "Founder, Miaren AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Miaren AI",
      url: "https://miarenai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://miarenai.com/og-image.png",
      },
    },
    image: "https://miarenai.com/og-image.png",
    articleSection: article.category,
    inLanguage: "en-US",
  };
}

export function getWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      name: "Miaren AI",
      url: "https://miarenai.com",
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getGlossarySchema(terms: { term: string; definition: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "GEO Glossary | The Language of AI Visibility",
    description: "50+ terms defined, from GEO fundamentals to technical implementation. Maintained by Mia Cheraghian, PhD.",
    url: "https://miarenai.com/insights/glossary",
    publisher: {
      "@type": "Organization",
      name: "Miaren AI",
      url: "https://miarenai.com",
    },
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: "https://miarenai.com/insights/glossary",
    })),
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Miaren AI",
    description: "AI visibility research and strategy firm studying how organizations become discoverable and citable in AI-powered search systems.",
    url: "https://miarenai.com/services",
    provider: {
      "@type": "Organization",
      name: "Miaren AI",
      url: "https://miarenai.com",
    },
    areaServed: "US",
    serviceType: "Generative Engine Optimization",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Visibility Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility Audit",
            description:
              "A structured diagnostic analyzing how AI systems currently interpret, reference, and cite your organization across ChatGPT, Perplexity, Google AI Overviews, and Copilot.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility Strategy",
            description:
              "A research-informed strategic analysis that maps how AI systems construct knowledge about your category, identifies gaps, and designs the knowledge architecture to improve AI interpretation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Information Architecture",
            description:
              "Structuring organizational knowledge so AI systems can correctly interpret, reference, and recommend an organization through semantic hierarchies, structured data schemas, and entity graphs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Executive Intelligence Briefings",
            description:
              "Structured briefings for leadership and technical teams on how AI search systems evaluate and cite sources, grounded in the three-signal diagnostic methodology.",
          },
        },
      ],
    },
  };
}

export function getMethodologyArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Three Diagnostic Signals for AI Visibility",
    description:
      "How AI decides who to cite. Three diagnostic signals that determine whether AI engines name your brand in their answers. Research and methodology by Mia Cheraghian, PhD.",
    url: "https://miarenai.com/methodology",
    datePublished: "2026-03-09",
    dateModified: "2026-03-12",
    author: {
      "@type": "Person",
      name: "Mia Cheraghian",
      url: "https://miarenai.com/about",
      jobTitle: "Founder, Miaren AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Miaren AI",
      url: "https://miarenai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://miarenai.com/og-image.png",
      },
    },
    articleSection: "Methodology",
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://miarenai.com/#business",
    name: "Miaren AI",
    description:
      "AI visibility research and strategy firm. Generative Engine Optimization (GEO) diagnostics and consulting.",
    url: "https://miarenai.com",
    email: "hello@miarenai.com",
    founder: {
      "@type": "Person",
      name: "Mia Cheraghian",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2672,
      longitude: -97.7431,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [
      "https://www.linkedin.com/company/miaren-ai/",
      "https://www.linkedin.com/in/mia-cheraghian/",
    ],
    priceRange: "$$",
  };
}

export function getEventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "AI Visibility Consultation with Mia Cheraghian",
    description:
      "A 30-minute conversation to explore how AI search engines currently perceive your brand and discuss the three-signal diagnostic methodology.",
    url: "https://calendly.com/c2018-mia/chat-with-mia",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://calendly.com/c2018-mia/chat-with-mia",
    },
    organizer: {
      "@type": "Organization",
      name: "Miaren AI",
      url: "https://miarenai.com",
    },
    performer: {
      "@type": "Person",
      name: "Mia Cheraghian",
      jobTitle: "Founder, Miaren AI",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://calendly.com/c2018-mia/chat-with-mia",
    },
    isAccessibleForFree: true,
  };
}

export function getCollectionPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      name: "Miaren AI",
      url: "https://miarenai.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Miaren AI",
      url: "https://miarenai.com",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Miaren AI",
    url: "https://miarenai.com",
    description:
      "AI visibility research and strategy firm studying how organizations become discoverable, citable, and recommended in AI-powered search systems.",
    publisher: {
      "@type": "Organization",
      name: "Miaren AI",
    },
  };
}

