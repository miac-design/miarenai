import type { Metadata } from "next";
import NodeNetwork from "@/components/NodeNetwork";
import InsightsGrid from "@/components/InsightsGrid";
import Link from "next/link";
import { getCollectionPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights | GEO Research & AI Visibility Articles",
  description:
    "Research, frameworks, and field notes on AI visibility. Expert articles on Generative Engine Optimization from Mia Cheraghian, PhD and founder of Miaren AI.",
  alternates: {
    canonical: "https://miarenai.com/insights",
  },
  openGraph: {
    title: "Insights | Miaren AI",
    description: "Research, frameworks, and field notes on AI visibility by Mia Cheraghian, PhD.",
    images: [{ url: "https://miarenai.com/og-image.png", width: 1200, height: 630, alt: "Miaren AI | Be found where it matters next." }],
  },
};

export default function InsightsPage() {
  const collectionSchema = getCollectionPageSchema({
    title: "Insights | GEO Research & AI Visibility Articles",
    description: "Research, frameworks, and field notes on AI visibility. Expert articles on Generative Engine Optimization from Mia Cheraghian, PhD.",
    url: "https://miarenai.com/insights",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://miarenai.com" },
    { name: "Insights", url: "https://miarenai.com/insights" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative bg-soft-white pt-16 pb-20 md:pt-28 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.25} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">// INSIGHTS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-10 tracking-tight">
            Research, frameworks, and field notes on{" "}
            <span className="text-gradient">AI visibility.</span>
          </h1>
          <InsightsGrid />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">Want to check your AI visibility?</h2>
          <p className="mt-3 text-warm-gray text-lg">Get a research-backed audit of your brand&apos;s presence across AI search systems.</p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Connect →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
