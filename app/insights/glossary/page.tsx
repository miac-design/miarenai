import type { Metadata } from "next";
import GlossarySearch from "@/components/GlossarySearch";
import NodeNetwork from "@/components/NodeNetwork";
import { glossaryTerms } from "@/lib/glossary-data";
import { getGlossarySchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GEO Glossary | The Language of AI Visibility",
  description:
    "50+ Generative Engine Optimization terms defined. From GEO fundamentals to technical implementation. Your reference guide to how AI-powered search works. Maintained by Mia Cheraghian, PhD.",
  alternates: {
    canonical: "https://miarenai.com/insights/glossary",
  },
  openGraph: {
    title: "GEO Glossary | Miaren AI",
    description: "50+ terms defined, from GEO fundamentals to technical implementation.",
    images: [{ url: "https://miarenai.com/og-image.png", width: 1200, height: 630, alt: "Miaren AI | Be found where it matters next." }],
  },
};

export default function GlossaryPage() {
  const glossarySchema = getGlossarySchema(
    glossaryTerms.map((t) => ({ term: t.term, definition: t.definition }))
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://miarenai.com" },
    { name: "Insights", url: "https://miarenai.com/insights" },
    { name: "Glossary", url: "https://miarenai.com/insights/glossary" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative bg-soft-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-teal-light border border-teal/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span className="text-xs font-mono tracking-wider text-teal uppercase">Glossary</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-3">
              The language of AI visibility.
            </h1>
            <p className="text-warm-gray text-lg max-w-2xl">
              50+ terms defined, from GEO fundamentals to technical implementation. Whether you&apos;re a marketer, founder, or agency, this is your reference guide to how AI-powered search works.
            </p>
            <p className="mt-3 text-sm text-warm-gray">Last updated March 2026 · Maintained by Mia Cheraghian, PhD</p>
          </div>

          {/* Three-Signal Methodology callout */}
          <div className="teal-border-left bg-teal-light/50 rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-navy mb-2">Three-Signal Diagnostic Methodology</h2>
            <p className="text-sm text-warm-gray mb-4">Miaren AI&apos;s proprietary framework for evaluating AI visibility. Three diagnostic signals that determine whether AI engines cite your brand.</p>
            <div className="space-y-3">
              {[
                { num: "1", name: "Can AI find you?", desc: "Content structure, schema markup, and technical infrastructure that make you machine-readable." },
                { num: "2", name: "Can AI trust you?", desc: "Entity consistency and cross-platform presence that build AI confidence." },
                { num: "3", name: "Can AI quote you?", desc: "Third-party authority signals that give AI engines confidence to cite you." },
              ].map((s) => (
                <div key={s.num} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-teal text-navy text-xs font-bold flex items-center justify-center shrink-0">{s.num}</span>
                  <div>
                    <span className="text-sm font-bold text-navy">{s.name}</span>
                    <p className="text-xs text-warm-gray mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <GlossarySearch terms={glossaryTerms} />
        </div>
      </section>
    </>
  );
}
