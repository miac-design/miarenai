import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import FlipCards from "@/components/FlipCards";
import { getMethodologyArticleSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "How AI Decides Who to Cite | AI Visibility Methodology | Miaren AI",
    description:
        "How AI decides who to cite. Three diagnostic signals that determine whether AI engines name your brand in their answers. Research and methodology by Mia Cheraghian, PhD.",
    alternates: {
        canonical: "https://miarenai.com/methodology",
    },
    openGraph: {
        title: "How AI Decides Who to Cite | Miaren AI",
        description:
            "Three diagnostic signals that determine whether AI engines name your brand. Research and methodology by Mia Cheraghian, PhD.",
        url: "https://miarenai.com/methodology",
        images: [
            {
                url: "https://miarenai.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "AI Visibility Methodology | Miaren AI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "How AI Decides Who to Cite | AI Visibility Methodology",
        description:
            "Three diagnostic signals that determine whether AI engines name your brand. By Mia Cheraghian, PhD.",
        images: ["https://miarenai.com/og-image.png"],
    },
};

export default function MethodologyPage() {
    const articleSchema = getMethodologyArticleSchema();
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://miarenai.com" },
        { name: "Methodology", url: "https://miarenai.com/methodology" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Section 1: Hero */}
            <section className="relative bg-soft-white pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden">
                <NodeNetwork opacity={0.3} />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <p className="section-label mb-4">// METHODOLOGY</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
                        Three <span className="text-gradient">Diagnostic Signals</span>
                    </h1>
                    <p className="mt-5 text-xl md:text-2xl text-warm-gray font-medium">
                        A proprietary diagnostic system for evaluating entity verification,
                        RAG alignment, and citation authority in synthetic search.
                    </p>
                    <p className="mt-6 text-warm-gray text-lg leading-relaxed max-w-2xl mx-auto">
                        AI retrieval systems evaluate entity consistency, knowledge structure,
                        and third-party authority signals when constructing generated responses.
                        Through PhD-level research and systematic testing across four major
                        AI platforms, I have isolated three diagnostic signals that determine
                        citation probability.
                    </p>
                    <p className="mt-6 text-sm font-mono tracking-wider text-teal uppercase">
                        Developed by Mia Cheraghian, PhD / Founder of Miaren AI
                    </p>
                </div>
            </section>

            {/* Section 2: How AI Works + Three Signals */}
            <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="max-w-3xl mb-16">
                        <p className="section-label mb-3">// HOW AI FINDS INFORMATION</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                            Crawl. Cross-Reference.{" "}
                            <span className="text-gradient">Synthesize & Cite.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                            <p>
                                AI scans websites, directories, news, and platforms, then
                                cross-references across sources. Agreement builds confidence.
                                Conflict drops it. The brands that get cited have the strongest,
                                most consistent signals. Only 12% of AI-cited URLs also rank
                                in Google&apos;s top 10{" "}
                                <span className="text-xs font-mono text-warm-gray">(Ahrefs, 2025)</span>
                                — that&apos;s why{" "}
                                <Link href="/geo-vs-seo" className="text-teal hover:underline">
                                    GEO and SEO are different disciplines
                                </Link>.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <p className="section-label mb-3">THE THREE SIGNALS</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Three signals that determine whether AI names your brand
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                id: "signal-find",
                                num: "1",
                                title: "Can AI find you?",
                                p1: "Your content must be structured, crawlable, and readable by AI engines. Without structured data (Schema.org markup), clean heading hierarchy, and direct answers to real questions, AI doesn't know you exist. This is the foundation — nothing else matters if AI can't parse your content.",
                                p2: "Schema markup helps AI directly interpret your brand information, products, FAQs, and more. Content with clear headings, Q&A format, and direct answers performs significantly better than marketing copy. Lead with the answer.",
                            },
                            {
                                id: "signal-trust",
                                num: "2",
                                title: "Can AI trust you?",
                                p1: "Your brand information must be identical across every platform AI looks at: website, LinkedIn, directories, review sites, event platforms. AI engines cross-reference multiple sources to build confidence. If your description on LinkedIn says one thing and your website says another, AI has lower confidence and is less likely to cite you.",
                                p2: "You also need to be visible across the platforms AI cross-references — not just your own domain. LinkedIn, industry directories, news articles, event platforms. The more places AI finds consistent information about you, the more confident it becomes.",
                            },
                            {
                                id: "signal-quote",
                                num: "3",
                                title: "Can AI quote you?",
                                p1: "Third-party validation from trusted sources tells AI your brand is worth naming. If the only source saying you're great is your own website, that's weak. If industry publications, review sites, news articles, and other independent sources reference you, that's strong.",
                                p2: "This is the hardest signal to build and the most durable once you have it. AI won't stake its reputation on citing you unless independent sources confirm you're worth naming.",
                            },
                        ].map((signal) => (
                            <div key={signal.id} id={signal.id} className="glass-card-dark p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-mono tracking-wider text-teal bg-teal/10 px-3 py-1.5 rounded-lg">
                                        SIGNAL {signal.num} OF 3
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{signal.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{signal.p1}</p>
                                <p className="text-gray-400 leading-relaxed mt-3">{signal.p2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2.5: Flip Cards */}
            <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
                <NodeNetwork opacity={0.15} color="0, 212, 170" />
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="section-label mb-3">// HOW TO THINK ABOUT IT</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                            Your Brand Is a Witness.{" "}
                            <span className="text-gradient">AI Is the Investigator.</span>
                        </h2>
                    </div>

                    <FlipCards />

                    <div className="mt-14">
                        <div className="teal-border-left">
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                Academic research identified 9 content optimization techniques
                                that improve AI citation rates by up to 40%.
                            </p>
                            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                But content is only one of three signals. The other two &mdash;
                                entity consistency and third-party authority &mdash; are equally
                                important, and often overlooked.
                            </p>
                            <p className="mt-4 text-sm font-mono tracking-wider text-teal uppercase">
                                Research: Aggarwal et al., Georgia Tech / Princeton / IIT Delhi (2024)
                                <span className="text-gray-500 normal-case tracking-normal"> &middot; </span>
                                <span className="text-gray-500 normal-case tracking-normal">Analysis: Mia Cheraghian, PhD</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Sustained Citation Integrity */}
            <section className="relative bg-soft-white py-20 md:py-28 overflow-hidden">
                <NodeNetwork opacity={0.2} />
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="section-label mb-3">// SUSTAINED CITATION INTEGRITY</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
                            The diagnostic establishes your baseline.{" "}
                            <span className="text-gradient">These sustain it.</span>
                        </h2>
                        <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
                            Finding gaps is step one. Staying visible requires ongoing work across three dimensions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { num: "1", title: "Freshness", desc: "AI prioritizes recent, consistently updated content. You can't build it once and walk away. Brands that go silent lose citations to brands that show up consistently." },
                            { num: "2", title: "Sentiment", desc: "It's not just whether AI mentions you — it's how. Are you recommended enthusiastically or mentioned with caveats? Managing how AI describes your brand is an ongoing strategy." },
                            { num: "3", title: "Query Alignment", desc: "Are you optimizing for the questions people actually ask AI? If nobody asks \"What is [your brand]?\" but they do ask \"best [category] in [city],\" your content needs to match those real queries." },
                        ].map((item) => (
                            <div key={item.title} className="glass-card p-8 border-t-4 border-teal/20 hover:border-teal transition-colors duration-300 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-mono font-bold text-teal bg-teal/10 w-8 h-8 rounded-xl flex items-center justify-center group-hover:bg-teal/20 transition-colors">{item.num}</span>
                                    <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                                </div>
                                <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 max-w-3xl mx-auto">
                        <div className="teal-border-left">
                            <p className="text-xl md:text-2xl font-bold text-navy leading-relaxed">
                                &ldquo;AI citation is not a one-time achievement.
                                It requires consistent signals over time.&rdquo;
                            </p>
                            <p className="mt-4 text-sm font-mono tracking-wider text-teal uppercase">
                                / Mia Cheraghian, PhD
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Advanced Research Areas */}
            <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="section-label mb-3">// GOING DEEPER</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Advanced research areas
                        </h2>
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
                            For organizations ready to go beyond the diagnostic.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { num: "01", title: "Platform-Specific Optimization", desc: "How Perplexity, ChatGPT, and Google AI Overviews each cite differently, and how to tailor your strategy for each." },
                            { num: "02", title: "Competitive Displacement", desc: "Who AI is citing instead of you and why. Analyzing competitive citation patterns to find positioning gaps." },
                            { num: "03", title: "AI Misinformation Monitoring", desc: "What happens when AI says something inaccurate about your organization. Identifying, documenting, and correcting it." },
                        ].map((item) => (
                            <div key={item.num} className="glass-card-dark p-7 group">
                                <p className="text-xs font-mono tracking-wider text-teal mb-3">{item.num}</p>
                                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: CTA */}
            <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
                <NodeNetwork opacity={0.15} color="0, 212, 170" />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                        Explore how AI sees{" "}
                        <span className="text-gradient">your brand.</span>
                    </h2>
                    <p className="mt-5 text-gray-400 text-lg">
                        The entity relationships AI engines are forming now will compound.
                        Early understanding creates advantages that become difficult to close.
                    </p>
                    <p className="mt-2 text-gray-500 text-sm">
                        Have questions? Check our{" "}
                        <Link href="/faq" className="text-teal hover:underline">FAQ</Link>.
                    </p>
                    <div className="mt-10">
                        <a
                            href="https://calendly.com/c2018-mia/chat-with-mia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg !px-8 !py-4"
                        >
                            Schedule a Conversation
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 7: Source Attribution */}
            <section className="bg-soft-white py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="border-t border-gray-200 pt-8 space-y-3">
                        <p className="text-sm text-warm-gray leading-relaxed">
                            AI visibility research and methodology by Mia Cheraghian, PhD. Published March 2026.
                            Foundational GEO research by Aggarwal et al. (2024), Georgia Tech / Princeton / IIT Delhi.
                        </p>
                        <p className="text-xs text-warm-gray/70 leading-relaxed">
                            Cite this methodology: Cheraghian, M. (2026). <em>Three diagnostic signals for AI visibility.</em> Miaren AI. https://miarenai.com/methodology
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
