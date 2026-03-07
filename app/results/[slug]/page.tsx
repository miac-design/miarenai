import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NodeNetwork from "@/components/NodeNetwork";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-study-data";

export function generateStaticParams() {
    return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Metadata {
    const cs = getCaseStudyBySlug(params.slug);
    if (!cs) return {};

    return {
        title: `${cs.client} — GEO Results`,
        description: cs.tagline,
        alternates: {
            canonical: `https://miarenai.com/results/${cs.slug}`,
        },
        openGraph: {
            title: `${cs.client} — GEO Results | Miaren AI`,
            description: cs.tagline,
            images: [{ url: "https://miarenai.com/og-image.png", width: 1200, height: 630, alt: "Miaren AI — Be found where it matters next." }],
        },
    };
}

export default function CaseStudyPage({
    params,
}: {
    params: { slug: string };
}) {
    const cs = getCaseStudyBySlug(params.slug);
    if (!cs) notFound();

    return (
        <>
            {/* Hero */}
            <section className="relative bg-navy py-12 md:py-20 overflow-hidden">
                <NodeNetwork opacity={0.2} color="0, 212, 170" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <Link
                        href="/results"
                        className="inline-flex items-center gap-2 text-sm text-warm-gray hover:text-teal transition-colors mb-6"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Results
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono tracking-wider text-teal uppercase">
                            {cs.type}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-400">{cs.industry}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {cs.client}
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                        {cs.hero}
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {cs.results.map((r, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                                <p className="text-2xl md:text-3xl font-bold text-teal">{r.metric}</p>
                                <p className="text-xs text-gray-400 mt-2">{r.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative bg-soft-white py-12 md:py-16 overflow-hidden">
                <NodeNetwork opacity={0.15} />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    {/* The Challenge */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-navy mb-4">The Challenge</h2>
                        <p className="text-warm-gray leading-relaxed">{cs.challenge}</p>
                    </div>

                    {/* The Approach */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-navy mb-4">The Approach</h2>
                        <div className="space-y-4">
                            {cs.approach.map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-sm font-bold text-teal">{i + 1}</span>
                                    </div>
                                    <p className="text-warm-gray leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    {cs.testimonial && (
                        <div className="mb-12 bg-navy rounded-xl p-7 md:p-9">
                            <svg className="w-8 h-8 text-teal/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                            </svg>
                            <p className="text-gray-300 leading-relaxed italic text-lg mb-4">
                                &ldquo;{cs.testimonial.quote}&rdquo;
                            </p>
                            <p className="text-sm font-medium text-teal">— {cs.testimonial.role}</p>
                        </div>
                    )}

                    {/* Key Insight */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-navy mb-4">Key Insight</h2>
                        <div className="teal-border-left">
                            <p className="text-warm-gray leading-relaxed italic">{cs.keyInsight}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-6 border-t border-gray-200">
                        <h3 className="text-xl font-bold text-navy mb-3">Ready to see your own score?</h3>
                        <p className="text-warm-gray mb-6">Start with a free EXACT Audit and find out where your brand stands in AI search.</p>
                        <Link href="/contact" className="btn-primary">
                            Get Your Free Audit
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
