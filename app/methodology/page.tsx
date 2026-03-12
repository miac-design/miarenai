import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import FlipCards from "@/components/FlipCards";
import { getExactFrameworkArticleSchema, getBreadcrumbSchema } from "@/lib/schema";

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

export default function ExactFrameworkPage() {
    const articleSchema = getExactFrameworkArticleSchema();
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

            {/* ============================================= */}
            {/* Section 1: Hero / Introduction                */}
            {/* ============================================= */}
            <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
                <NodeNetwork opacity={0.3} />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <p className="section-label mb-4">// METHODOLOGY</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                        Three <span className="text-teal">Diagnostic Signals</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-warm-gray font-medium">
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

            {/* ============================================= */}
            {/* Section 2: How AI Works + Three Signals       */}
            {/* ============================================= */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    {/* How AI finds info — condensed intro */}
                    <div className="max-w-3xl mb-14">
                        <p className="section-label mb-3">// HOW AI FINDS INFORMATION</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Crawl. Cross-Reference.{" "}
                            <span className="text-teal">Synthesize & Cite.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
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

                    {/* Three Signals */}
                    <div className="text-center mb-10">
                        <p className="section-label mb-3">THE THREE SIGNALS</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Three signals that determine whether AI names your brand
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* Signal 1 */}
                        <div id="signal-find" className="bg-[rgba(20,30,48,0.6)] border border-white/10 rounded-xl p-7">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-mono tracking-wider text-teal bg-teal/10 px-2.5 py-1 rounded">SIGNAL 1 OF 3</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Can AI find you?</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Your content must be structured, crawlable, and readable by AI engines.
                                Without structured data (Schema.org markup), clean heading hierarchy, and
                                direct answers to real questions, AI doesn&apos;t know you exist. This is the
                                foundation — nothing else matters if AI can&apos;t parse your content.
                            </p>
                            <p className="text-gray-400 leading-relaxed mt-3">
                                Schema markup helps AI directly interpret your brand information, products,
                                FAQs, and more. Content with clear headings, Q&amp;A format, and direct answers
                                performs significantly better than marketing copy. Lead with the answer.
                            </p>
                        </div>

                        {/* Signal 2 */}
                        <div id="signal-trust" className="bg-[rgba(20,30,48,0.6)] border border-white/10 rounded-xl p-7">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-mono tracking-wider text-teal bg-teal/10 px-2.5 py-1 rounded">SIGNAL 2 OF 3</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Can AI trust you?</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Your brand information must be identical across every platform AI looks at:
                                website, LinkedIn, directories, review sites, event platforms. AI engines
                                cross-reference multiple sources to build confidence. If your description on
                                LinkedIn says one thing and your website says another, AI has lower confidence
                                and is less likely to cite you.
                            </p>
                            <p className="text-gray-400 leading-relaxed mt-3">
                                You also need to be visible across the platforms AI cross-references — not just
                                your own domain. LinkedIn, industry directories, news articles, event platforms.
                                The more places AI finds consistent information about you, the more confident
                                it becomes.
                            </p>
                        </div>

                        {/* Signal 3 */}
                        <div id="signal-quote" className="bg-[rgba(20,30,48,0.6)] border border-white/10 rounded-xl p-7">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-mono tracking-wider text-teal bg-teal/10 px-2.5 py-1 rounded">SIGNAL 3 OF 3</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Can AI quote you?</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Third-party validation from trusted sources tells AI your brand is worth naming.
                                If the only source saying you&apos;re great is your own website, that&apos;s weak.
                                If industry publications, review sites, news articles, and other independent
                                sources reference you, that&apos;s strong.
                            </p>
                            <p className="text-gray-400 leading-relaxed mt-3">
                                This is the hardest signal to build and the most durable once you have it.
                                AI won&apos;t stake its reputation on citing you unless independent sources
                                confirm you&apos;re worth naming.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* Section 2.5: How to Think About It (Flip Cards)*/}
            {/* ============================================= */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.15} color="0, 212, 170" />
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <p className="section-label mb-3">// HOW TO THINK ABOUT IT</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Your Brand Is a Witness.{" "}
                            <span className="text-teal">AI Is the Investigator.</span>
                        </h2>
                    </div>

                    {/* 5 Flip Cards */}
                    <FlipCards />

                    {/* Bottom Callout */}
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

            {/* ============================================= */}
            {/* Section 3: The Ongoing Strategy Layer         */}
            {/* ============================================= */}
            <section className="relative bg-soft-white py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.2} />
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <p className="section-label mb-3">// SUSTAINED CITATION INTEGRITY</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                            The diagnostic establishes your baseline.{" "}
                            <span className="text-teal">These sustain it.</span>
                        </h2>
                        <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
                            Finding gaps is step one. Staying visible requires ongoing work across three dimensions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Freshness */}
                        <div className="glass-card p-7 border-t-4 border-teal/40 hover:border-teal transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-mono font-bold text-teal bg-teal/10 w-7 h-7 rounded-lg flex items-center justify-center">1</span>
                                <h3 className="text-lg font-bold text-navy">Freshness</h3>
                            </div>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                AI prioritizes recent, consistently updated content. You
                                can&apos;t build it once and walk away. Brands that go silent
                                lose citations to brands that show up consistently.
                            </p>
                        </div>

                        {/* Sentiment */}
                        <div className="glass-card p-7 border-t-4 border-teal/40 hover:border-teal transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-mono font-bold text-teal bg-teal/10 w-7 h-7 rounded-lg flex items-center justify-center">2</span>
                                <h3 className="text-lg font-bold text-navy">Sentiment</h3>
                            </div>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                It&apos;s not just whether AI mentions you &mdash; it&apos;s
                                how. Are you recommended enthusiastically or mentioned with
                                caveats? Managing how AI describes your brand is an ongoing strategy.
                            </p>
                        </div>

                        {/* Query Alignment */}
                        <div className="glass-card p-7 border-t-4 border-teal/40 hover:border-teal transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-mono font-bold text-teal bg-teal/10 w-7 h-7 rounded-lg flex items-center justify-center">3</span>
                                <h3 className="text-lg font-bold text-navy">Query Alignment</h3>
                            </div>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                Are you optimizing for the questions people actually ask AI?
                                If nobody asks &quot;What is [your brand]?&quot; but they do ask
                                &quot;best [category] in [city],&quot; your content needs to
                                match those real queries.
                            </p>
                        </div>
                    </div>

                    {/* Quote — tightened */}
                    <div className="mt-12 max-w-3xl mx-auto">
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

            {/* ============================================= */}
            {/* Section 5: Advanced Research Areas             */}
            {/* ============================================= */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <p className="section-label mb-3">// GOING DEEPER</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Advanced research areas
                        </h2>
                        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                            For organizations ready to go beyond the diagnostic.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal/30 transition-colors">
                            <p className="text-xs font-mono tracking-wider text-teal mb-3">01</p>
                            <h3 className="text-base font-bold text-white mb-2">
                                Platform-Specific Optimization
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                How Perplexity, ChatGPT, and Google AI Overviews each cite
                                differently, and how to tailor your strategy for each.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal/30 transition-colors">
                            <p className="text-xs font-mono tracking-wider text-teal mb-3">02</p>
                            <h3 className="text-base font-bold text-white mb-2">
                                Competitive Displacement
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Who AI is citing instead of you and why. Analyzing
                                competitive citation patterns to find positioning gaps.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal/30 transition-colors">
                            <p className="text-xs font-mono tracking-wider text-teal mb-3">03</p>
                            <h3 className="text-base font-bold text-white mb-2">
                                AI Misinformation Monitoring
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                What happens when AI says something inaccurate about your
                                organization. Identifying, documenting, and correcting it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* Section 6: CTA                                */}
            {/* ============================================= */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.15} color="0, 212, 170" />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Explore how AI sees{" "}
                        <span className="text-teal">your brand.</span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        The entity relationships AI engines are forming now will compound.
                        Early understanding creates advantages that become difficult to close.
                    </p>
                    <p className="mt-2 text-gray-500 text-sm">
                        Have questions? Check our{" "}
                        <Link href="/faq" className="text-teal hover:underline">
                            FAQ
                        </Link>
                        .
                    </p>
                    <div className="mt-8">
                        <a
                            href="https://calendly.com/c2018-mia/chat-with-mia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg !px-8 !py-4"
                        >
                            Schedule a Conversation
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* Section 7: Source Attribution                  */}
            {/* ============================================= */}
            <section className="bg-soft-white py-10 md:py-14">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="border-t border-gray-200 pt-8 space-y-3">
                        <p className="text-sm text-warm-gray leading-relaxed">
                            AI visibility research and methodology by Mia Cheraghian, PhD. Published March 2026.
                            Foundational GEO research by Aggarwal et al. (2024),
                            Georgia Tech / Princeton / IIT Delhi.
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
