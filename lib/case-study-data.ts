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
    disclosure?: string;
    whatAiCites?: string[];
    methodologyNote?: string;
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
        client: "Austin AI Hub: From Invisible to AI-Cited",
        industry: "Nonprofit Technology Community",
        type: "GEO Case Study",
        tagline: "A 501(c)(3) nonprofit AI community went from a 28/100 GEO score to a cleanly cited, machine-readable entity — surfacing alongside communities ten times its size.",
        hero: "A 501(c)(3) nonprofit AI community went from a 28/100 GEO score and zero AI visibility to a cleanly cited, machine-readable entity — surfacing alongside communities ten times its size.",
        disclosure:
            "Miaren AI and Austin AI Hub share leadership. Mia Cheraghian, PhD is the founder of Miaren AI and part of the founding team of Austin AI Hub, where she serves as Director of Strategic Partnerships & Marketing. This GEO work was delivered as a pro bono community initiative. We share it as a portfolio example of our Visibility methodology and its measurable results — not as an independent client testimonial.",
        challenge:
            "Austin AI Hub had a clear mission and an active community, but it was effectively invisible to the AI search engines its audience increasingly relies on. A GEO audit scored the site 28 out of 100 for AI discoverability. The net effect: when someone asked an AI assistant about AI communities in Austin, Austin AI Hub did not exist. The audit found zero structured data — no JSON-LD anywhere, so AI models had no machine-readable way to understand the organization, its leaders, or its programs. There was no llms.txt at root and crawler access for GPTBot, ClaudeBot, and PerplexityBot was unconfirmed. Entity signals were fragmented across three competing domains, with a decommissioned legacy brand still in the footer, an outdated member count, the wrong founding year, and an old contact email. And there was no external verification — no presence on the third-party sources AI models lean on to verify entities, such as Crunchbase, Wikidata, and Candid.",
        approach: [
            "Establish one source of truth: defined the canonical entity once — name, founding year, nonprofit status, leadership, location, programs — and enforced it everywhere, replacing legacy branding and correcting every inconsistent fact.",
            "Build the machine-readable foundation: Organization, FAQPage, and BreadcrumbList JSON-LD across the site, a curated llms.txt at root, a robots.txt that explicitly admits every major AI crawler, plus sitemap and canonical tags to consolidate authority.",
            "Create citation-ready content: a dense, factual About page and a FAQ structured as direct question-and-answer pairs — the exact format AI models prefer to quote — plus a live blog to build topical authority over time.",
            "Extend the external signal network: consistent entity profiles across Crunchbase, Wikidata, Google Business Profile, Built In Austin, Candid, and LinkedIn — so external verification reinforces the website rather than contradicting it.",
        ],
        results: [
            { metric: "28 → ~60", description: "AI-readiness score (2x+ improvement)" },
            { metric: "0 → Org-wide", description: "Structured data schema coverage" },
            { metric: "6+", description: "Verification sources (Crunchbase, Wikidata, more)" },
            { metric: "500+", description: "Member nonprofit now AI-cited" },
        ],
        whatAiCites: [
            "501(c)(3) nonprofit AI community in Austin, founded in 2025",
            "500+ members, led by Hamed Alikhani, PhD (Founder) and Mia Cheraghian, PhD (Director of Strategic Partnerships & Marketing)",
            "Sharp, quotable differentiator: the only 501(c)(3) nonprofit AI community in Austin combining PhD-led education for complete beginners with AI-for-social-good projects",
            "Now appears alongside AITX Community (7,000+), AI Tinkerers (110,000+ global), and Austin AI Developers Group (8,000+) in Austin AI community searches",
        ],
        methodologyNote:
            "The AI-readiness score reflects Miaren AI's internal GEO audit framework. We have intentionally not claimed specific platform-citation wins (e.g. \"#1 in ChatGPT\") because those have not yet been formally measured. A tracking sweep across ChatGPT, Perplexity, Gemini, and Claude can quantify live citation results. The engagement is ongoing — remaining levers include full domain consolidation and a sustained content cadence to compound topical authority.",
        keyInsight:
            "The organization's AI-readiness score more than doubled, from a 28/100 baseline into the high-50s to low-60s range, with the highest-leverage fixes delivering the steepest gains. More tellingly, the facts now surface: across the site, AI-facing descriptions return a clean, consistent profile. A 500+ member nonprofit now holds a cleaner, more accurate, more machine-readable profile than communities ten times larger. In GEO, structure beats size.",
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
