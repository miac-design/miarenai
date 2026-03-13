"use client";

import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import ScrollReveal from "@/components/ScrollReveal";
import { useInView } from "./useInView";

const signals = [
  {
    num: "01",
    question: "Can AI find you?",
    subtitle: "Entity Verification",
    description: "Does AI know your organization exists as a distinct, recognizable entity?",
    color: "#00D4AA",
  },
  {
    num: "02",
    question: "Can AI trust you?",
    subtitle: "RAG Alignment",
    description: "Is your information structured so AI retrieval systems can verify and use it?",
    color: "#00D4AA",
  },
  {
    num: "03",
    question: "Can AI quote you?",
    subtitle: "Citation Authority",
    description: "Does your content have the authority signals that make AI cite you as a source?",
    color: "#00D4AA",
  },
];

export default function SignalsPreview() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
      <NodeNetwork opacity={0.2} color="0, 212, 170" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// OUR METHODOLOGY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Three <span className="text-teal">Diagnostic Signals</span>
            </h2>
            <p className="mt-3 text-warm-gray max-w-lg mx-auto">
              A proprietary diagnostic framework developed through PhD research.
            </p>
          </div>
        </ScrollReveal>

        <div ref={ref} className="grid md:grid-cols-3 gap-5 mb-10">
          {signals.map((signal, i) => (
            <div
              key={signal.num}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-teal/30 transition-all duration-500 group hover:-translate-y-1"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 150}ms`,
                transitionDuration: "700ms",
                transitionProperty: "opacity, transform, border-color",
              }}
            >
              {/* Number badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono tracking-wider text-teal/60">{signal.num}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-teal/20 to-transparent" />
              </div>

              {/* Question */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal transition-colors duration-300">
                {signal.question}
              </h3>

              {/* Subtitle */}
              <p className="text-xs font-mono tracking-wider text-teal/70 uppercase mb-3">
                {signal.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {signal.description}
              </p>

              {/* Decorative glow on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Connecting line between cards */}
        <ScrollReveal direction="up" delay={500}>
          <div className="hidden md:flex items-center justify-center gap-2 mb-8 -mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal/30" />
            <div className="w-2 h-2 rounded-full bg-teal/40" />
            <div className="h-px w-16 bg-teal/30" />
            <div className="w-2 h-2 rounded-full bg-teal/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal/30" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={600}>
          <div className="text-center">
            <p className="text-xs font-mono tracking-wider text-warm-gray uppercase mb-6">
              Research and methodology by Mia Cheraghian, PhD
            </p>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-teal font-medium hover:underline group"
            >
              Learn more about the methodology
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
