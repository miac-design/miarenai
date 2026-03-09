import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";

export const metadata: Metadata = {
    title: "GEO vs SEO — What's the Difference?",
    description:
        "GEO (Generative Engine Optimization) is the practice of being cited in AI search responses. SEO focuses on ranking in Google. GEO layers on top of SEO. Learn the difference.",
    alternates: {
        canonical: "https://miarenai.com/geo-vs-seo",
    },
    openGraph: {
        title: "GEO vs SEO — What's the Difference? | Miaren AI",
        description:
            "GEO layers on top of SEO. Learn how AI search differs from traditional search and what your brand needs to do about it.",
        url: "https://miarenai.com/geo-vs-seo",
        images: [
            {
                url: "https://miarenai.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "GEO vs SEO — Miaren AI",
            },
        ],
    },
};

function getGeoVsSeoSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "GEO vs SEO: What's the Difference?",
        description:
            "GEO (Generative Engine Optimization) is the practice of being cited in AI search responses. SEO focuses on ranking in Google. GEO layers on top of SEO.",
        url: "https://miarenai.com/geo-vs-seo",
        datePublished: "2026-03-09",
        author: {
            "@type": "Person",
            name: "Mia Cheraghian",
            url: "https://miarenai.com/about",
        },
        publisher: {
            "@type": "Organization",
            name: "Miaren AI",
            url: "https://miarenai.com",
        },
        articleSection: "GEO Education",
    };
}

function getFaqSectionSchema() {
    const questions = [
        {
            q: "Is GEO better than SEO?",
            a: "GEO and SEO serve different systems. SEO optimizes for Google's ranking algorithm. GEO optimizes for AI synthesis engines that evaluate authority, entity consistency, and structured data to decide who to cite. Only 12% of AI-cited URLs also rank in Google's top 10 (Ahrefs, 2025). You need both working together.",
        },
        {
            q: "Is GEO taking over SEO?",
            a: "No. GEO layers on top of SEO. A strong SEO foundation actually supports GEO performance because many of the same signals matter: quality content, site authority, technical health. What's changing is that SEO alone is no longer sufficient. Businesses need to add GEO elements: structured data, AI-readable content, entity consistency, and AI citation tracking.",
        },
        {
            q: "What is the equivalent of SEO for AI?",
            a: "GEO (Generative Engine Optimization) is the direct equivalent. While SEO focuses on being ranked by Google, GEO focuses on being cited by AI engines like ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot.",
        },
        {
            q: "Will SEO be replaced by AI?",
            a: "No. AI search engines rely on indexed web content to generate their answers. If content doesn't rank or exist on the web, AI has nothing to pull from. SEO remains the foundation of web visibility. GEO is the new layer that ensures AI engines can find, understand, and cite your content.",
        },
        {
            q: "Will SEO exist in 5 years?",
            a: "SEO will exist but will evolve significantly. By 2026, an estimated 85% of consumers will have used AI for search. Traditional search volume may decline, but SEO fundamentals (quality content, site structure, authority) will remain important as the foundation that GEO builds on. The businesses that thrive will be those who integrate GEO into their SEO strategy now.",
        },
        {
            q: "Is SEO still worth it with AI?",
            a: "Absolutely. SEO and GEO are complementary. A strong SEO foundation supports GEO performance. What you should do is evolve your SEO strategy to include GEO elements: add structured data, restructure content for AI readability, build entity consistency, and start tracking AI citations alongside your traditional SEO metrics.",
        },
    ];

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.q,
            acceptedAnswer: { "@type": "Answer", text: q.a },
        })),
    };
}

export default function GeoVsSeoPage() {
    const articleSchema = getGeoVsSeoSchema();
    const faqSchema = getFaqSectionSchema();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Section 1: Direct Answer */}
            <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
                <NodeNetwork opacity={0.3} />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <p className="section-label mb-4">// GEO EDUCATION</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                        GEO vs SEO:{" "}
                        <span className="text-teal">What&apos;s the Difference?</span>
                    </h1>
                    <div className="mt-8 text-warm-gray text-lg leading-relaxed space-y-4">
                        <p>
                            <strong className="text-navy">
                                GEO (Generative Engine Optimization)
                            </strong>{" "}
                            is the practice of making your brand visible, citable, and
                            recommendable in AI-generated search responses from platforms like
                            ChatGPT, Perplexity, and Google AI Overviews.{" "}
                            <strong className="text-navy">
                                SEO (Search Engine Optimization)
                            </strong>{" "}
                            focuses on ranking in traditional Google search results.
                        </p>
                        <p>
                            GEO layers on top of SEO. It does not replace it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: The Evolution */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <p className="section-label mb-3">THE EVOLUTION</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            From SEO to AEO to GEO
                        </h2>
                        <p className="mt-3 text-warm-gray max-w-2xl mx-auto">
                            SEO has been the standard since the early 2000s. AEO (Answer
                            Engine Optimization) emerged around 2018 with featured snippets
                            and voice search. GEO is the newest evolution, emerging in 2024 as
                            AI-powered search became mainstream.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-7">
                            <p className="text-xs font-mono tracking-wider text-warm-gray mb-2">
                                2000s
                            </p>
                            <h3 className="text-xl font-bold text-white mb-2">SEO</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                Rank on Google page 1.
                            </p>
                            <p className="text-xs font-mono text-teal">
                                Success = rankings, traffic, click-through rates
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-7">
                            <p className="text-xs font-mono tracking-wider text-warm-gray mb-2">
                                2018
                            </p>
                            <h3 className="text-xl font-bold text-white mb-2">AEO</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                Be the featured snippet.
                            </p>
                            <p className="text-xs font-mono text-teal">
                                Success = direct answers, voice search results
                            </p>
                        </div>
                        <div className="bg-white/5 border border-teal/30 rounded-xl p-7">
                            <p className="text-xs font-mono tracking-wider text-teal mb-2">
                                2024
                            </p>
                            <h3 className="text-xl font-bold text-teal mb-2">GEO</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                Be cited in AI responses.
                            </p>
                            <p className="text-xs font-mono text-teal">
                                Success = AI citations, share of voice, AI-referred traffic
                            </p>
                        </div>
                    </div>

                    <p className="text-center text-gray-400 mt-8">
                        Each one layers on the last. None replaces the previous.
                    </p>
                </div>
            </section>

            {/* Section 3: FAQ / PAA Questions */}
            <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
                <NodeNetwork opacity={0.15} />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <p className="section-label mb-3">// COMMON QUESTIONS</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
                        People Also Ask
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Is GEO better than SEO?",
                                a: "GEO and SEO serve different systems. SEO optimizes for Google's ranking algorithm. GEO optimizes for AI synthesis engines that evaluate authority, entity consistency, and structured data to decide who to cite. Only 12% of AI-cited URLs also rank in Google's top 10 (Ahrefs, 2025). You need both working together.",
                            },
                            {
                                q: "Is GEO taking over SEO?",
                                a: "No. GEO layers on top of SEO. A strong SEO foundation actually supports GEO performance because many of the same signals matter: quality content, site authority, technical health. What's changing is that SEO alone is no longer sufficient. Businesses need to add GEO elements: structured data, AI-readable content, entity consistency, and AI citation tracking.",
                            },
                            {
                                q: "What is the equivalent of SEO for AI?",
                                a: "GEO (Generative Engine Optimization) is the direct equivalent. While SEO focuses on being ranked by Google, GEO focuses on being cited by AI engines like ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot.",
                            },
                            {
                                q: "Will SEO be replaced by AI?",
                                a: "No. AI search engines rely on indexed web content to generate their answers. If content doesn't rank or exist on the web, AI has nothing to pull from. SEO remains the foundation of web visibility. GEO is the new layer that ensures AI engines can find, understand, and cite your content.",
                            },
                            {
                                q: "Will SEO exist in 5 years?",
                                a: "SEO will exist but will evolve significantly. By 2026, an estimated 85% of consumers will have used AI for search. Traditional search volume may decline, but SEO fundamentals (quality content, site structure, authority) will remain important as the foundation that GEO builds on. The businesses that thrive will be those who integrate GEO into their SEO strategy now.",
                            },
                            {
                                q: "Is SEO still worth it with AI?",
                                a: "Absolutely. SEO and GEO are complementary. A strong SEO foundation supports GEO performance. What you should do is evolve your SEO strategy to include GEO elements: add structured data, restructure content for AI readability, build entity consistency, and start tracking AI citations alongside your traditional SEO metrics.",
                            },
                        ].map((item) => (
                            <div
                                key={item.q}
                                className="border border-gray-200 rounded-xl p-6 bg-white"
                            >
                                <h3 className="text-lg font-bold text-navy mb-3">{item.q}</h3>
                                <p className="text-warm-gray leading-relaxed text-sm">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: The Numbers */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <p className="section-label mb-3">THE NUMBERS</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            AI search is not a trend. It&apos;s a structural shift.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                stat: "527%",
                                label: "Growth in AI-referred website sessions",
                                source: "Previsible / Search Engine Land, 2025",
                            },
                            {
                                stat: "~30%",
                                label: "Decline in click-through rates since AI Overviews",
                                source: "BrightEdge, 2024-2025",
                            },
                            {
                                stat: "12%",
                                label:
                                    "Of AI-cited URLs also rank in Google's top 10",
                                source: "Ahrefs, 2025",
                            },
                            {
                                stat: "300M+",
                                label: "Weekly active ChatGPT users",
                                source: "OpenAI, 2025",
                            },
                            {
                                stat: "30%+",
                                label: "Of Google queries now show AI Overviews",
                                source: "BrightEdge",
                            },
                        ].map((item) => (
                            <div
                                key={item.stat}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-teal">
                                    {item.stat}
                                </p>
                                <p className="text-sm text-gray-400 mt-2">{item.label}</p>
                                <p className="text-xs text-warm-gray mt-1 font-mono">
                                    {item.source}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: CTA */}
            <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
                <NodeNetwork opacity={0.15} />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                        Want to know where your brand stands in{" "}
                        <span className="text-teal">AI search?</span>
                    </h2>
                    <p className="mt-4 text-warm-gray text-lg">
                        See how you score across the{" "}
                        <Link
                            href="/exact-framework"
                            className="text-teal font-medium hover:underline"
                        >
                            EXACT Framework
                        </Link>{" "}
                        signals.
                    </p>
                    <div className="mt-8">
                        <a
                            href="https://calendly.com/c2018-mia/chat-with-mia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg !px-8 !py-4"
                        >
                            Book Your Free Assessment →
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 6: Source Attribution */}
            <section className="bg-soft-white py-10 md:py-14">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="border-t border-gray-200 pt-8">
                        <p className="text-sm text-warm-gray leading-relaxed">
                            The foundational research on GEO was published by Aggarwal et al.
                            (2024) from Georgia Tech, Princeton, and IIT Delhi. Statistics
                            sourced from Previsible/Search Engine Land, BrightEdge, Ahrefs,
                            and OpenAI.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
