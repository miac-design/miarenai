// lib/case-study-data.ts

export interface CaseStudy {
    slug: string;
    client: string;
    industry: string;
    type: string;
    tagline: string;
    hero: string;
    challenge: string;
    approach: string[];
    results: { metric: string; description: string }[];
    testimonial?: { quote: string; role: string };
    keyInsight: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "edron-ai",
        client: "EDRON AI",
        industry: "AI Consulting & Enterprise Training",
        type: "Full GEO Implementation",
        tagline: "From invisible to citable: building AI-native authority for an AI company.",
        hero: "An AI consulting firm helping enterprises adopt AI yet invisible to the very AI search engines reshaping how buyers discover solutions.",
        challenge:
            "EDRON AI had deep expertise in enterprise AI adoption and a strong track record in insurance underwriting automation. But when decision-makers asked ChatGPT, Perplexity, or Gemini about AI consulting firms, EDRON AI didn't appear. Their entity was fragmented across platforms. Their website used marketing language that AI couldn't parse. They had no structured data, no schema markup, and no cross-platform consistency. The result: zero AI visibility despite being exactly what AI-curious enterprises were searching for.",
        approach: [
            "Conducted a full AI Visibility Audit across ChatGPT, Perplexity, Gemini, and Copilot testing 25+ category-relevant queries",
            "Rebuilt entity consistency: aligned name, description, services, and leadership across website, LinkedIn, and industry directories",
            "Implemented comprehensive Schema.org markup: Organization, Person, Service, OfferCatalog, and FAQPage in JSON-LD",
            "Restructured website content from marketing copy to AI-parseable format with clear headings, direct answers, and Q&A patterns",
            "Built cross-platform presence: optimized LinkedIn company page, industry directory listings, and Calendly booking flow",
            "Created a content architecture designed for citation where each page answered specific queries AI engines receive",
        ],
        results: [
            { metric: "0% → 34%", description: "AI Visibility Score across 4 platforms" },
            { metric: "6 of 25", description: "Target queries now return EDRON AI citations" },
            { metric: "100%", description: "Entity consistency achieved across all indexed platforms" },
            { metric: "3 weeks", description: "Time from audit to full implementation" },
        ],
        testimonial: {
            quote: "Mia showed us that we were completely invisible to AI search, and we're an AI company. She rebuilt our entire digital presence from the ground up. Within weeks, we started appearing in ChatGPT and Perplexity responses for our exact category. The AI visibility methodology made something complex feel systematic and achievable.",
            role: "CEO, AI Consulting Firm",
        },
        keyInsight:
            "Even companies that build AI can be invisible to AI. Technical expertise doesn't automatically translate to AI discoverability. Structured data, entity consistency, and content architecture are entirely separate disciplines — and they determine whether AI recommends you or your competitor.",
    },
    {
        slug: "austin-ai-hub",
        client: "Austin AI Hub",
        industry: "Nonprofit Technology Community",
        type: "Full GEO Implementation",
        tagline: "Making a grassroots AI community discoverable to the engines it teaches about.",
        hero: "A nonprofit AI education hub with deep community roots, but no visibility in the AI-powered search engines that its own members use daily.",
        challenge:
            "Austin AI Hub was building one of the most impactful AI education communities in Central Texas, with workshops, volunteer programs, and partnerships with organizations like Texas Tech University. But their digital presence told a different story. No schema markup. No structured FAQ content. Inconsistent entity information across platforms. When people asked AI engines about AI communities in Austin, AI education programs, or tech volunteering opportunities, Austin AI Hub was nowhere in the responses. For an organization teaching people about AI, being invisible to AI search was an existential credibility gap.",
        approach: [
            "Full AI Visibility Audit revealing a baseline AI Visibility Score of 4% across all platforms",
            "Implemented Organization, Person, and FAQPage schema markup, ensuring AI engines understood what the Hub does, who leads it, and what programs it offers",
            "Restructured the FAQ section using GEO and AEO best practices: direct answers, statistical claims with sources, and Q&A formatting optimized for AI extraction",
            "Built comprehensive robots.txt allowing GPTBot, ClaudeBot, PerplexityBot, and Google-Extended crawlers",
            "Created an auto-generated sitemap covering all static pages and dynamic program content",
            "Established cross-platform entity consistency: website, Google Business Profile, LinkedIn, and community directories all aligned",
        ],
        results: [
            { metric: "4% → 42%", description: "AI Visibility Score across 4 platforms" },
            { metric: "8 of 20", description: "Target queries now cite Austin AI Hub" },
            { metric: "12 pages", description: "Fully schema-optimized with JSON-LD structured data" },
            { metric: "100%", description: "AI crawler access, all major bots explicitly allowed" },
        ],

        keyInsight:
            "Nonprofits and community organizations are particularly vulnerable to AI invisibility because they rarely invest in technical SEO, let alone GEO. Yet these are often the exact organizations people search for with AI — queries like 'best AI communities near me' or 'where to learn AI in Austin.' The gap between mission impact and digital discoverability is significant and measurable.",
    },
    {
        slug: "enterprise-tech-audit",
        client: "Large Enterprise Technology Provider",
        industry: "Enterprise Cloud & Infrastructure",
        type: "AI Visibility Audit (Diagnostic Only)",
        tagline: "A Fortune-level tech brand scoring 11% on AI visibility.",
        hero: "A multi-billion dollar technology company with global brand recognition, yet AI search engines barely knew they existed.",
        challenge:
            "This enterprise technology provider had everything traditional SEO offers: strong domain authority, thousands of indexed pages, established backlink profiles, and top-10 Google rankings for competitive keywords. They assumed their search dominance would extend to AI. It didn't. When we ran the AI Visibility Audit, the gap was significant. Despite being a household name in tech, they scored 11% on AI Visibility. AI engines either didn't cite them, cited them with outdated information, or recommended competitors. Their structured data was minimal. Their content was written for Google's keyword algorithm, not for AI's comprehension model.",
        approach: [
            "Conducted a comprehensive AI Visibility Audit across ChatGPT, Perplexity, Gemini, and Copilot with 30+ enterprise-relevant queries",
            "Benchmarked against 4 direct competitors, revealing two competitors already investing in GEO with scores above 40%",
            "Mapped entity fragmentation: identified 14 inconsistencies across major platforms (LinkedIn, Crunchbase, G2, Wikipedia, company website)",
            "Analyzed content structure: found that 88% of their indexed pages used marketing language that AI engines couldn't extract direct answers from",
            "Delivered a prioritized 47-point fix list organized by three-signal methodology signal, with estimated impact and implementation complexity",
            "Provided a 90-day GEO roadmap with quick wins (entity fixes, schema deployment) and longer-term plays (content restructuring, authority building)",
        ],
        results: [
            { metric: "11%", description: "AI Visibility Score. Dangerously low for a Fortune-level brand" },
            { metric: "88%", description: "of content pages were unparseable by AI engines" },
            { metric: "14", description: "Entity inconsistencies across major platforms" },
            { metric: "2 of 4", description: "Competitors already investing in GEO. And winning" },
        ],
        keyInsight:
            "Brand recognition does not equal AI recognition. This diagnostic confirmed a pattern we observe consistently: companies that dominated traditional search are often the most vulnerable to AI disruption. Their SEO success created a false sense of security. The organizations that will lead in AI discovery are those that understand AI engines evaluate authority, consistency, and structure in fundamentally different ways than Google's PageRank.",
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
}
