"use client";

import { useState } from "react";
import Link from "next/link";

const signals = [
  {
    letter: "E",
    name: "Entity Consistency",
    description:
      "Your brand information must be identical everywhere AI looks: website, LinkedIn, directories, review sites. Inconsistency kills AI confidence in citing you.",
    insight: "Where most brands fail first.",
  },
  {
    letter: "X",
    name: "Cross-Platform Presence",
    description:
      "AI engines cross-reference LinkedIn, review sites, news articles, industry directories, and more. If you only exist on your own domain, you're missing critical signals.",
    insight: "Your website alone isn't enough.",
  },
  {
    letter: "A",
    name: "Authority Signals",
    description:
      "Third-party validation from trusted sources — earned media, review sites, expert citations, high-authority backlinks. If only your own website says you're great, AI engines aren't convinced.",
    insight: "The hardest signal to build. The biggest payoff.",
  },
  {
    letter: "C",
    name: "Content Structure",
    description:
      "Content must be structured for AI parsing: clear headings, Q&A formats, direct answers, and statistical claims with sources. Marketing copy full of buzzwords doesn't translate.",
    insight: "Structure beats length every time.",
  },
  {
    letter: "T",
    name: "Technical Infrastructure",
    description:
      "Schema.org markup in JSON-LD format that explicitly tells AI engines what your content is about. Without it, AI must infer meaning from unstructured text.",
    insight: "The technical backbone that makes everything else work.",
  },
];

export default function ExactFramework() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-navy py-20 md:py-28 bg-node-network-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-4">OUR METHODOLOGY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The <span className="text-teal">EXACT</span> Framework
          </h2>
          <p className="mt-3 text-warm-gray">
            Five signals. One audit. Complete clarity.
          </p>
        </div>

        {/* Letter selector */}
        <div className="flex justify-center gap-3 mb-10">
          {signals.map((signal, i) => (
            <button
              key={signal.letter}
              onClick={() => setActive(i)}
              className={`exact-letter ${
                i === active ? "exact-letter-active" : "exact-letter-inactive"
              }`}
              aria-label={`${signal.letter} — ${signal.name}`}
            >
              {signal.letter}
            </button>
          ))}
        </div>

        {/* Active signal display */}
        <div className="bg-navy-light/60 border border-white/10 rounded-xl p-8 md:p-10">
          <p className="text-xs font-mono tracking-wider text-teal mb-4">
            SIGNAL {active + 1} OF 5
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            {signals[active].name}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            {signals[active].description}
          </p>
          <div className="teal-border-left">
            <p className="text-teal text-sm italic">
              {signals[active].insight}
            </p>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {signals.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-teal" : "w-1.5 bg-white/30"
              }`}
              aria-label={`Signal ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="btn-primary">
            See how your brand scores
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

