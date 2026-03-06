import type { Metadata } from "next";
import NodeNetwork from "@/components/NodeNetwork";
import InsightsGrid from "@/components/InsightsGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — GEO Research & AI Visibility Articles",
  description:
    "Research, frameworks, and field notes on AI visibility. Expert articles on Generative Engine Optimization from Mia Cheraghian, PhD — founder of Miaren AI.",
  openGraph: {
    title: "Insights — Miaren AI",
    description: "Research, frameworks, and field notes on AI visibility by Mia Cheraghian, PhD.",
  },
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative bg-soft-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <NodeNetwork opacity={0.25} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">// INSIGHTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-8">
            Research, frameworks, and field notes on{" "}
            <span className="text-teal">AI visibility.</span>
          </h1>
          <InsightsGrid />
        </div>
      </section>

      <section className="py-14 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Want to check your AI visibility?</h2>
          <p className="mt-3 text-warm-gray text-lg">Get a research-backed audit of your brand&apos;s presence across AI search systems.</p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Get Your Free Audit →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
