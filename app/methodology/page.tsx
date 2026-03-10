import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import FlipCards from "@/components/FlipCards";
import { getExactFrameworkArticleSchema } from "@/lib/schema";

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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
                        Three signals. One methodology. Complete clarity.
                    </p>
                    <p className="mt-6 text-warm-gray text-lg leading-relaxed max-w-2xl mx-auto">
                        AI engines evaluate multiple signals when deciding which brands to
                        name in their responses. Through extensive research, auditing, and
                        hands-on testing across ChatGPT, Perplexity, Google AI Overviews, and Copilot,
                        I&apos;ve identified three diagnostic signals that consistently determine
                        who gets cited and who gets ignored.
                    </p>
                    <p className="mt-6 text-sm font-mono tracking-wider text-teal uppercase">
                        Developed by Mia Cheraghian, PhD / Founder of Miaren AI
                    </p>
                </div>
            </section>

            {/* ============================================= */}
            {/* Section 1.5: How AI Actually Finds Info       */}
            {/* ============================================= */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <p className="section-label mb-3">// HOW AI FINDS INFORMATION</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Crawl. Cross-Reference.{" "}
                        <span className="text-teal">Synthesize & Cite.</span>
                    </h2>
                    <div className="space-y-5 text-gray-400 leading-relaxed">
                        <p>
                            AI bots scan websites, directories, news articles, and platforms.
                            Then AI compares what it finds across multiple sources. If 5
                            sources agree, confidence builds. If sources conflict, confidence
                            drops.
                        </p>
                        <p>
                            When someone asks a question, AI pulls from its most trusted
                            sources and names specific brands in its answer. The brands that
                            get cited are the ones with the strongest, most consistent
                            signals.
                        </p>
                        <p>
                            Only 12% of URLs that AI engines cite also rank in Google&apos;s
                            top 10{" "}
                            <span className="text-xs font-mono text-warm-gray">
                                (Ahrefs, 2025)
                            </span>
                            . This means AI uses different criteria than Google for deciding
                            who&apos;s trustworthy. That&apos;s why{" "}
                            <Link
                                href="/geo-vs-seo"
                                className="text-teal hover:underline"
                            >
                                GEO and SEO are different disciplines
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* Section 2: The Three Diagnostic Signals       */}
            {/* ============================================= */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
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
                            Your Brand Is a Restaurant.{" "}
                            <span className="text-teal">AI Is the Food Critic.</span>
                        </h2>
                    </div>

                    {/* 5 Flip Cards */}
                    <FlipCards />

                    {/* Bottom Callout */}
                    <div className="mt-14">
                        <div className="teal-border-left">
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                &ldquo;Academic research has identified 9 content
                                optimization techniques for AI citation. Content is one of
                                three signals in the methodology. The other two are
                                equally important — and often overlooked.&rdquo;
                            </p>
                            <p className="mt-4 text-sm font-mono tracking-wider text-teal uppercase">
                                Aggarwal et al., Georgia Tech / Princeton / IIT Delhi (2024)
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
                    <div className="text-center mb-4">
                        <p className="section-label mb-3">// BEYOND THE FOUNDATION</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                            The three signals get you in the door.{" "}
                            <span className="text-teal">These keep you in the room.</span>
                        </h2>
                        <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
                            The methodology builds your foundation for AI citability.
                            Staying visible requires three ongoing strategies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {/* Freshness */}
                        <div className="glass-card p-7 border-t-4 border-teal/40 hover:border-teal transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                                <svg
                                    className="w-5 h-5 text-teal"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-navy mb-2">Freshness</h3>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                AI prioritizes recent, consistently updated content. You
                                can&apos;t build it once and walk away. Publishing regularly
                                tells AI you&apos;re active and current. Brands that go silent
                                lose citations to brands that show up consistently.
                            </p>
                        </div>

                        {/* Sentiment */}
                        <div className="glass-card p-7 border-t-4 border-teal/40 hover:border-teal transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                                <svg
                                    className="w-5 h-5 text-teal"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-navy mb-2">Sentiment</h3>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                It&apos;s not just whether AI mentions you. It&apos;s how AI
                                describes you when it does. Are you recommended enthusiastically
                                or mentioned with caveats? Managing how AI perceives and
                                describes your brand is an ongoing strategy.
                            </p>
                        </div>

                        {/* Query Alignment */}
                        <div className="glass-card p-7 border-t-4 border-teal/40 hover:border-teal transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                                <svg
                                    className="w-5 h-5 text-teal"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-navy mb-2">
                                Query Alignment
                            </h3>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                Are you optimizing for the questions people actually ask AI about
                                your category? If nobody asks &quot;What is [your brand]?&quot;
                                but they do ask &quot;best [category] in [city],&quot; your
                                content needs to match those real queries. Understanding what
                                prompts your audience uses is essential.
                            </p>
                        </div>
                    </div>

                    {/* Relationship Quote — closing this section */}
                    <div className="mt-12 max-w-3xl mx-auto">
                        <div className="teal-border-left">
                            <p className="text-xl md:text-2xl font-bold text-navy leading-relaxed">
                                &ldquo;AI visibility is like a relationship. It needs consistency,
                                showing up, trust, clear communication, and a solid foundation.
                                You don&apos;t go on one date and expect a lifelong partner. You
                                don&apos;t publish one blog post and expect AI to recommend you
                                forever.&rdquo;
                            </p>
                            <p className="mt-4 text-sm font-mono tracking-wider text-teal uppercase">
                                / Mia Cheraghian
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* Section 5: Beyond the Framework               */}
            {/* ============================================= */}
            <section className="relative bg-soft-white py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.15} />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <p className="section-label mb-3">// ADVANCED LAYERS</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                        For brands ready to go deeper
                    </h2>
                    <p className="text-warm-gray text-lg leading-relaxed mb-8 max-w-3xl">
                        The methodology covers your foundation and ongoing strategy for
                        AI visibility. For brands and organizations ready to go deeper into AI
                        visibility, these are the advanced research areas we explore.
                    </p>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="glass-card p-6">
                            <div className="w-8 h-8 rounded-md bg-navy/5 flex items-center justify-center mb-3">
                                <svg
                                    className="w-4 h-4 text-navy"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-base font-bold text-navy mb-1">
                                Platform-Specific Optimization
                            </h3>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                How Perplexity, ChatGPT, and Google AI Overviews each cite
                                differently, and how to tailor your strategy for each.
                            </p>
                        </div>

                        <div className="glass-card p-6">
                            <div className="w-8 h-8 rounded-md bg-navy/5 flex items-center justify-center mb-3">
                                <svg
                                    className="w-4 h-4 text-navy"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-4.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-base font-bold text-navy mb-1">
                                Competitive Displacement
                            </h3>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                Who AI is citing instead of you and how to change that. Identify
                                gaps and shift the citation landscape in your favor.
                            </p>
                        </div>

                        <div className="glass-card p-6">
                            <div className="w-8 h-8 rounded-md bg-navy/5 flex items-center justify-center mb-3">
                                <svg
                                    className="w-4 h-4 text-navy"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-base font-bold text-navy mb-1">
                                AI Misinformation Monitoring
                            </h3>
                            <p className="text-warm-gray text-sm leading-relaxed">
                                What happens when AI says something wrong about your brand.
                                Detect, correct, and protect your brand narrative.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* Section 6: CTA                                */}
            {/* ============================================= */}
            <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <p className="text-warm-gray text-lg leading-relaxed mb-8">
                        For brands and organizations ready to go deeper into AI visibility.
                        The entity relationships AI engines are forming right now will
                        compound. Early movers build advantages that late movers spend
                        years trying to close.
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Explore how AI sees{" "}
                        <span className="text-teal">your brand.</span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Learn where your brand stands in AI search based on the three
                        diagnostic signals. Have questions? Check our{" "}
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
                    <div className="border-t border-gray-200 pt-8">
                        <p className="text-sm text-warm-gray leading-relaxed">
                            AI visibility research and methodology by Mia Cheraghian, PhD.
                            Foundational GEO research by Aggarwal et al. (2024),
                            Georgia Tech / Princeton / IIT Delhi.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
