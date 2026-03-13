import type { Metadata } from "next";
import NodeNetwork from "@/components/NodeNetwork";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Research & Insights | How AI Systems Interpret Organizations | Miaren AI",
    description: "Studying how organizations become discoverable, citable, and recommended in AI-powered search systems. Research by Mia Cheraghian, PhD.",
    alternates: { canonical: "https://miarenai.com/research" },
    openGraph: {
        title: "Research & Insights | Miaren AI",
        description: "Studying how organizations become discoverable, citable, and recommended in AI-powered search systems.",
        images: [{ url: "https://miarenai.com/og-image.png", width: 1200, height: 630, alt: "Miaren AI Research" }],
    },
};

export default function ResearchPage() {
    const webPageSchema = getWebPageSchema({
        title: "Research & Insights | How AI Systems Interpret Organizations",
        description: "Studying how organizations become discoverable, citable, and recommended in AI-powered search systems. Research by Mia Cheraghian, PhD.",
        url: "https://miarenai.com/research",
    });
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://miarenai.com" },
        { name: "Research", url: "https://miarenai.com/research" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero */}
            <section className="relative bg-soft-white pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden">
                <NodeNetwork opacity={0.3} />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <p className="section-label mb-4">// RESEARCH</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
                        Research & Insights on <span className="text-gradient">AI Visibility</span>
                    </h1>
                    <p className="mt-5 text-warm-gray text-lg leading-relaxed">
                        AI systems like ChatGPT, Perplexity, and Google AI Overviews make citation decisions about organizations every day. We research how those decisions are made, what signals drive them, and how organizations can structure their presence accordingly.
                    </p>
                    <p className="mt-4 text-sm font-mono tracking-wider text-teal uppercase">Research by Mia Cheraghian, PhD</p>
                </div>
            </section>

            {/* Core Research Areas */}
            <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="section-label mb-3">CORE RESEARCH AREAS</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">Three Research Initiatives</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "AI Visibility Index", desc: "A research initiative measuring how organizations appear across AI systems such as ChatGPT, Perplexity, and Google AI Overviews. The index evaluates entity consistency, authority signals, cross-platform presence, and information architecture to produce a quantified understanding of AI visibility.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
                            },
                            {
                                title: "AI Search Ecosystem Map", desc: "A framework explaining how generative AI systems retrieve and synthesize information from the internet. This maps the relationships between knowledge graphs, trusted source hierarchies, website content, structured data, and the citation selection process.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
                            },
                            {
                                title: "AI Discoverability Framework", desc: "A strategic model explaining how organizations can structure their information so AI systems correctly interpret, reference, and recommend them. This framework connects information architecture principles to the specific behaviors of generative search systems.",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />,
                            },
                        ].map((item) => (
                            <div key={item.title} className="glass-card-dark p-8 group">
                                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                                    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{item.icon}</svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="py-16 md:py-20 bg-soft-white">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="section-label mb-3">// WHY THIS MATTERS</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight">A new information layer is forming</h2>
                    <div className="space-y-4 text-warm-gray leading-relaxed text-lg">
                        <p>
                            People are asking AI for recommendations instead of scrolling through search results. AI must decide which organizations to name — based on information consistency, authority signals, content structure, and technical readability. This layer follows different rules than traditional search. Organizations that understand it early will compound advantages that late movers spend years closing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Future Research */}
            <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
                <NodeNetwork opacity={0.15} color="0, 212, 170" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="section-label mb-3">// FUTURE RESEARCH</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">Upcoming Studies</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            { title: "AI Visibility for Nonprofits", desc: "How mission-driven organizations with limited marketing resources can structure their presence for AI discoverability." },
                            { title: "Generative Search Behavior", desc: "Comparative analysis of citation selection behaviors across ChatGPT, Perplexity, Google AI Overviews, and Copilot." },
                            { title: "AI Citation Patterns", desc: "What types of content, sources, and structured data correlate with higher AI citation rates across industries." },
                            { title: "Information Architecture for AI Systems", desc: "How organizational information should be distributed and structured for AI systems that synthesize from multiple sources." },
                        ].map((item) => (
                            <div key={item.title} className="glass-card-dark p-7">
                                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-gray-400 text-sm">Research updates will be published on our <a href="/insights" className="text-teal hover:underline">Insights</a> page.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-soft-white">
                <div className="max-w-xl mx-auto px-6">
                    <div className="bg-gradient-to-br from-teal-light to-white border border-teal/15 rounded-2xl p-10 text-center shadow-lg shadow-teal/5">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Interested in our research?</h2>
                        <p className="mt-4 text-warm-gray text-lg">We work with organizations who want to understand how AI search systems interpret their presence.</p>
                        <div className="mt-8">
                            <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="btn-primary">Schedule a Conversation →</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
