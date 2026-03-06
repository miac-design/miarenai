import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GEO Services",
  description:
    "GEO services that get your brand found in AI search. The EXACT Audit, GEO Blueprint, and GEO Workshop — bounded, high-impact engagements backed by PhD research.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-soft-white bg-node-network pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">// GEO SERVICES</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Visible. Citable.{" "}
            <span className="text-teal">Recommendable.</span>
          </h1>
          <p className="mt-6 text-warm-gray text-lg max-w-xl">
            GEO services that get your brand found in AI search. Because
            traditional SEO alone is no longer enough.
          </p>
        </div>
      </section>

      {/* Differentiator */}
      <section className="bg-navy py-16 md:py-20 bg-node-network-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="teal-border-left mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              The GEO field is full of consultants. There are no researchers.{" "}
              <span className="text-teal">Until now.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="section-label mb-3 !text-warm-gray">// THE PROBLEM</p>
              <h3 className="text-xl font-bold text-gray-400 mb-4">
                What everyone else is selling
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Most GEO advice comes from agencies running content sprints and
                calling it strategy. They observe what works, write 40 articles
                about it, and charge you for the guesswork. There&apos;s no
                methodology behind it: just volume.
              </p>
            </div>
            <div>
              <p className="section-label mb-3">// THE DIFFERENCE</p>
              <h3 className="text-xl font-bold text-white mb-4">
                What Miaren AI brings
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Mia Cheraghian is a PhD researcher studying how AI reshapes
                discovery for underserved communities. The EXACT Framework,
                Miaren AI&apos;s proprietary audit methodology, wasn&apos;t built from
                blog posts. It was built from research. When you work with
                Miaren AI, you get a diagnosis, not a deliverable.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs font-mono tracking-wider text-warm-gray uppercase">
            <span>PhD Researcher</span>
            <span className="text-teal">·</span>
            <span>EXACT Framework Creator</span>
            <span className="text-teal">·</span>
            <span>Austin AI Hub</span>
            <span className="text-teal">·</span>
            <span>Rackspace Technology</span>
          </div>
        </div>
      </section>

      {/* Problem Cards */}
      <section className="py-20 md:py-28 bg-soft-white bg-node-network">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">// THE PROBLEM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why traditional SEO isn&apos;t enough
          </h2>
          <p className="text-warm-gray text-lg mb-14 max-w-2xl">
            AI engines don&apos;t just crawl and rank. They synthesize. The rules of
            visibility have fundamentally changed.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "⚡",
                title: "AI synthesizes, not ranks",
                description:
                  "AI engines pull answers from multiple sources. Ranking #1 on Google doesn't guarantee you'll be cited.",
              },
              {
                icon: "🛡️",
                title: "Different authority signals",
                description:
                  "The trust signals that drive AI recommendations are fundamentally different from traditional search ranking factors.",
              },
              {
                icon: "📐",
                title: "Machine readability matters",
                description:
                  "Your content must be structured for AI parsing, not just human readers. Schema markup, Q&A formats, and clear hierarchy are essential.",
              },
              {
                icon: "🔗",
                title: "Third-party validation is critical",
                description:
                  "Entity consistency and citations from independent, trusted sources matter more than ever for AI citability.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="glass-card p-8 border-l-4 border-teal/30"
              >
                <div className="text-2xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-warm-gray leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 md:py-28 bg-soft-white bg-node-network">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              What you get
            </h2>
            <p className="mt-3 text-warm-gray text-lg">
              Bounded, high-impact engagements. No retainers. You get the
              expertise, and your team walks away equipped.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* EXACT Audit */}
            <div className="glass-card p-8 border-2 border-teal/30">
              <span className="inline-block bg-teal text-navy text-xs font-bold px-3 py-1 rounded mb-4">
                START HERE
              </span>
              <h3 className="text-xl font-bold text-navy mb-2">
                The EXACT Audit
              </h3>
              <p className="text-sm text-warm-gray italic mb-4">
                Know exactly where you stand in AI search.
              </p>
              <p className="text-sm text-warm-gray leading-relaxed mb-6">
                Your brand scored across every major AI platform (ChatGPT,
                Perplexity, Gemini, Copilot) using the proprietary EXACT
                Framework. We identify where you&apos;re visible, where you&apos;re
                invisible, and what your competitors are doing better.
              </p>
              <p className="text-xs font-mono tracking-wider text-navy uppercase mb-4">
                WHAT YOU GET
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Full EXACT Framework diagnostic across 4 AI platforms",
                  "AI Visibility Score with competitive benchmarking",
                  "Gap analysis across all 5 signals",
                  "Prioritized fix list with quick wins flagged",
                  "Executive summary with strategic recommendations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Delivered in 5–7 business days
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Get Your Audit →
              </Link>
            </div>

            {/* GEO Blueprint */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-navy mb-2 mt-8">
                The GEO Blueprint
              </h3>
              <p className="text-sm text-warm-gray italic mb-4">
                Your custom roadmap to AI visibility.
              </p>
              <p className="text-sm text-warm-gray leading-relaxed mb-6">
                Built from your audit results. A complete strategy document your
                team or agency can execute. No guesswork, no generic advice.
                Specific to your brand, your industry, and your competitive
                landscape.
              </p>
              <p className="text-xs font-mono tracking-wider text-navy uppercase mb-4">
                WHAT YOU GET
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Custom content restructuring plan for AI readability",
                  "Structured data (Schema.org) implementation roadmap",
                  "Entity consistency audit and fix plan",
                  "Authority-building priority list with specific tactics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Delivered in 2–3 weeks
              </div>
              <Link href="/contact" className="btn-dark w-full justify-center">
                Book a Consultation →
              </Link>
            </div>

            {/* GEO Workshop */}
            <div className="glass-card p-8">
              <span className="inline-block border border-gray-300 text-warm-gray text-xs font-medium px-3 py-1 rounded mb-4">
                FOR TEAMS
              </span>
              <h3 className="text-xl font-bold text-navy mb-2">
                The GEO Workshop
              </h3>
              <p className="text-sm text-warm-gray italic mb-4">
                Train your team to own AI visibility.
              </p>
              <p className="text-sm text-warm-gray leading-relaxed mb-6">
                A live, hands-on training session. Your team learns to run AI
                visibility audits, monitor citations, interpret results, and
                iterate, so the knowledge lives in-house, not with a consultant.
              </p>
              <p className="text-xs font-mono tracking-wider text-navy uppercase mb-4">
                WHAT YOU GET
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Live half-day training session (virtual or in-person)",
                  "Full audit walkthrough using your actual brand",
                  "Monitoring toolkit and templates your team keeps",
                  "Recorded session for future onboarding",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Half-day session + 30 days support
              </div>
              <Link href="/contact" className="btn-dark w-full justify-center">
                Schedule a Workshop →
              </Link>
            </div>
          </div>

          <p className="text-center mt-10 text-warm-gray">
            Not sure which is right for you?{" "}
            <Link href="/contact" className="text-teal font-medium hover:underline">
              Start with a free 30-minute call →
            </Link>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-soft-white bg-node-network">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-4">// PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your brand, audience, and competitive landscape." },
              { num: "02", title: "Audit", desc: "Testing visibility across major AI platforms with proprietary methodology." },
              { num: "03", title: "Strategy", desc: "Research-backed roadmap tailored to your industry and goals." },
              { num: "04", title: "Implementation", desc: "Guidance and support through every optimization." },
            ].map((step) => (
              <div key={step.num}>
                <p className="text-3xl font-bold text-teal mb-3">{step.num}</p>
                <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-warm-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-soft-white bg-node-network">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
            GEO isn&apos;t replacing SEO. It&apos;s the layer you&apos;re{" "}
            <span className="text-teal">missing on top of it.</span>
          </h2>
          <p className="mt-6 text-warm-gray text-lg">
            The brands that move now will own the AI search landscape.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary text-lg !px-8 !py-4">
              Get Your Free Audit →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
