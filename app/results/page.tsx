import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import { caseStudies } from "@/lib/case-study-data";

export const metadata: Metadata = {
    title: "Results | Proof That GEO Works",
    description:
        "Real results from real GEO engagements. See how Miaren AI helped organizations go from invisible to citable in AI-powered search.",
    alternates: {
        canonical: "https://miarenai.com/results",
    },
    openGraph: {
        title: "Results | Miaren AI",
        description: "Real results from real GEO engagements. See how organizations went from invisible to citable.",
        images: [{ url: "https://miarenai.com/og-image.png", width: 1200, height: 630, alt: "Miaren AI | Be found where it matters next." }],
    },
};

export default function ResultsPage() {
    return (
        <section className="relative bg-soft-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
            <NodeNetwork opacity={0.2} />
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <p className="section-label mb-3">PROOF IT WORKS</p>
                <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
                    Client <span className="text-teal">Results</span>
                </h1>
                <p className="text-warm-gray text-lg mb-12 max-w-2xl">
                    Real GEO engagements. Measurable outcomes. Every project follows the same EXACT Framework. The results speak for themselves.
                </p>

                <div className="space-y-6">
                    {caseStudies.map((cs) => (
                        <Link
                            key={cs.slug}
                            href={`/results/${cs.slug}`}
                            className="block glass-card p-7 md:p-9 hover:shadow-lg transition-shadow group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-mono tracking-wider text-teal uppercase">
                                            {cs.type}
                                        </span>
                                        <span className="text-xs text-warm-gray">•</span>
                                        <span className="text-xs text-warm-gray">{cs.industry}</span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-navy group-hover:text-teal transition-colors mb-2">
                                        {cs.client}
                                    </h2>
                                    <p className="text-warm-gray leading-relaxed">{cs.tagline}</p>
                                </div>
                                <div className="flex gap-6 md:gap-8 shrink-0">
                                    {cs.results.slice(0, 2).map((r, i) => (
                                        <div key={i} className="text-center">
                                            <p className="text-2xl font-bold text-navy">{r.metric}</p>
                                            <p className="text-xs text-warm-gray mt-1 max-w-[120px]">{r.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Testimonials Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-navy mb-8 text-center">What clients say</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {caseStudies
                            .filter((cs) => cs.testimonial)
                            .map((cs) => (
                                <div key={cs.slug} className="glass-card p-7">
                                    <svg className="w-8 h-8 text-teal/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                                    </svg>
                                    <p className="text-warm-gray leading-relaxed italic mb-4">
                                        &ldquo;{cs.testimonial!.quote}&rdquo;
                                    </p>
                                    <p className="text-sm font-medium text-navy">/ {cs.testimonial!.role}</p>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/contact" className="btn-primary">
                        Get your own EXACT Audit
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
