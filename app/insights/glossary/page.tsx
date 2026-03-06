import type { Metadata } from "next";
import GlossarySearch from "@/components/GlossarySearch";
import NodeNetwork from "@/components/NodeNetwork";
import { glossaryTerms } from "@/lib/glossary-data";
import { getGlossarySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GEO Glossary — The Language of AI Visibility",
  description:
    "50+ Generative Engine Optimization terms defined. From GEO fundamentals to technical implementation. Your reference guide to how AI-powered search works. Maintained by Mia Cheraghian, PhD.",
  alternates: {
    canonical: "https://miarenai.com/insights/glossary",
  },
  openGraph: {
    title: "GEO Glossary — Miaren AI",
    description: "50+ terms defined, from GEO fundamentals to technical implementation.",
  },
};

export default function GlossaryPage() {
  const glossarySchema = getGlossarySchema(
    glossaryTerms.map((t) => ({ term: t.term, definition: t.definition }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
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

          {/* EXACT Framework callout */}
          <div className="teal-border-left bg-teal-light/50 rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-navy mb-2">The EXACT Framework</h2>
            <p className="text-sm text-warm-gray mb-4">Miaren AI&apos;s proprietary methodology for assessing and improving AI visibility.</p>
            <div className="space-y-2">
              {[
                { letter: "E", name: "Entity Consistency" },
                { letter: "X", name: "Cross-Platform Presence" },
                { letter: "A", name: "Authority Signals" },
                { letter: "C", name: "Content Structure" },
                { letter: "T", name: "Technical Infrastructure" },
              ].map((s) => (
                <div key={s.letter} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-teal text-navy text-xs font-bold flex items-center justify-center">{s.letter}</span>
                  <span className="text-sm font-medium text-navy">{s.letter} = {s.name}</span>
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
