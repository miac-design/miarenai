"use client";

import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import AiSearchDemo from "@/components/AiSearchDemo";
import ScrollReveal from "@/components/ScrollReveal";
import StatsSection from "@/components/StatsSection";
import SignalsPreview from "@/components/SignalsPreview";

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    text: "You rank well on Google — but AI doesn't mention you",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    text: "ChatGPT recommends your competitors instead of you",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    text: "Your website looks great — but AI can't parse it",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    text: "You don't know where you stand in AI search at all",
  },
];

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Three-Signal Diagnostic",
    description: "A proprietary PhD-led assessment evaluating entity verification, RAG alignment, and citation authority across ChatGPT, Perplexity, Google AI Overviews, and Copilot.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Knowledge Architecture",
    description: "We construct semantic hierarchies, structured data schemas, and entity graphs that align your organization's information architecture with AI retrieval patterns.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Executive Intelligence Briefings",
    description: "Research seminars for leadership on RAG pipeline mechanics, entity disambiguation, and the citation dynamics that determine organizational visibility in synthetic search.",
  },
];

export default function HomeContent() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.35} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <ScrollReveal direction="up" delay={0} duration={600}>
                <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span className="text-xs font-mono tracking-wider text-teal uppercase">
                    PhD-Led AI Visibility Research
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100} duration={700}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                  Protect Your Brand Integrity{" "}
                  <span className="text-teal">in Synthetic Search.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200} duration={700}>
                <p className="mt-5 text-warm-gray text-lg leading-relaxed max-w-lg">
                  When someone asks ChatGPT or Perplexity for a recommendation
                  in your industry, AI decides who to name — and who to skip.
                  Most organizations have no visibility into that process.
                </p>
                <p className="mt-3 text-warm-gray text-lg leading-relaxed max-w-lg">
                  Miaren AI helps you understand how AI search sees your brand
                  and what to do about it. PhD-led research, not guesswork.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300} duration={700}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href="https://calendly.com/c2018-mia/chat-with-mia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group"
                  >
                    Schedule a Conversation
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <Link href="/services" className="btn-secondary group">
                    View Expertise
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="left" delay={400} duration={800}>
              <AiSearchDemo />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2: The Shift — Stats with animated bars */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.25} color="0, 212, 170" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <p className="section-label mb-3">// THE SHIFT</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                AI search is growing. Traditional search is declining.
              </h2>
            </div>
          </ScrollReveal>

          <StatsSection />

          <ScrollReveal direction="up" delay={600}>
            <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
              Being great at SEO does not mean AI will mention you. These are
              different systems with different rules.{" "}
              <Link
                href="/geo-vs-seo"
                className="text-teal font-medium hover:underline"
              >
                Learn how GEO differs from SEO →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Strategic Pillars */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="section-label mb-3">// EXPERTISE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Strategic Pillars
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} direction="up" delay={i * 150}>
                <Link
                  href="/services"
                  className="glass-card p-7 border-t-4 border-teal/30 hover:border-teal transition-all duration-300 group hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-1 block h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 group-hover:scale-110 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-teal mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Three-Signal Methodology Preview */}
      <SignalsPreview />

      {/* Section 5: When This Matters — Pain Points */}
      <section className="py-16 md:py-20 bg-soft-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="section-label mb-3">// DIAGNOSTIC INDICATORS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                When This Matters
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200/80 bg-white/60 backdrop-blur-sm hover:border-teal/30 hover:bg-teal/[0.02] transition-all duration-300 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center group-hover:bg-teal/10 group-hover:text-teal transition-colors duration-300">
                    {point.icon}
                  </div>
                  <p className="text-navy font-medium leading-snug pt-1.5">
                    {point.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={500}>
            <div className="text-center mt-10">
              <p className="text-warm-gray mb-4">
                The diagnostic tells you exactly where the gap is and what to fix first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-visibility-score" className="btn-primary group">
                  Take the Free Assessment
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/faq" className="text-teal font-medium hover:underline inline-flex items-center gap-1 justify-center py-3">
                  Have questions? Check our FAQ →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Evaluate your{" "}
              <span className="text-teal">citation integrity.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto">
              Request a diagnostic assessment to identify where your
              organization&apos;s entity signals, knowledge architecture, and
              citation authority stand.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <div className="mt-10">
              <a
                href="https://calendly.com/c2018-mia/chat-with-mia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg !px-10 !py-4 group"
              >
                Schedule a Conversation
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
