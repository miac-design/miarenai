import type { Metadata } from "next";
import GlossarySearch from "@/components/GlossarySearch";
import { glossaryTerms } from "@/lib/glossary-data";

export const metadata: Metadata = {
  title: "GEO Glossary",
  description:
    "The language of AI visibility. 50+ terms defined, from GEO fundamentals to technical implementation. Your reference guide to how AI-powered search works.",
};

export default function GlossaryPage() {
  return (
    <section className="bg-soft-white bg-node-network pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-light border border-teal/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-xs font-mono tracking-wider text-teal uppercase">
              Glossary
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-4">
            The language of AI visibility.
          </h1>
          <p className="text-warm-gray text-lg max-w-2xl">
            50+ terms defined, from GEO fundamentals to technical
            implementation. Whether you&apos;re a marketer, founder, or agency,
            this is your reference guide to how AI-powered search works.
          </p>
          <p className="mt-3 text-sm text-warm-gray">
            Last updated March 2026 · Maintained by Mia Cheraghian
          </p>
        </div>

        {/* EXACT Framework callout */}
        <div className="teal-border-left bg-teal-light/50 rounded-r-xl p-6 mb-14">
          <h2 className="text-lg font-bold text-navy mb-2">
            The EXACT Framework
          </h2>
          <p className="text-sm text-warm-gray mb-4">
            Miaren AI&apos;s proprietary methodology for assessing and improving
            AI visibility.
          </p>
          <div className="space-y-2">
            {[
              { letter: "E", name: "Entity Consistency" },
              { letter: "X", name: "Cross-Platform Presence" },
              { letter: "A", name: "Authority Signals" },
              { letter: "C", name: "Content Structure" },
              { letter: "T", name: "Technical Infrastructure" },
            ].map((s) => (
              <div key={s.letter} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-teal text-navy text-xs font-bold flex items-center justify-center">
                  {s.letter}
                </span>
                <span className="text-sm font-medium text-navy">
                  {s.letter} = {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <GlossarySearch terms={glossaryTerms} />
      </div>
    </section>
  );
}
