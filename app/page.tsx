import Link from "next/link";
import ExactFramework from "@/components/ExactFramework";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-soft-white bg-node-network pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-light border border-teal/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-xs font-mono tracking-wider text-teal uppercase">
                  Generative Engine Optimization
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                Be found where it{" "}
                <span className="text-teal">matters next.</span>
              </h1>

              <p className="mt-6 text-warm-gray text-lg leading-relaxed max-w-lg">
                Your customers stopped Googling. They&apos;re asking ChatGPT, Perplexity, and
                Copilot. Miaren AI makes your brand visible, citable, and
                recommendable in AI-powered search.
              </p>

              {/* Stats */}
              <div className="flex gap-10 mt-10">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-teal">527%</p>
                  <p className="text-sm text-warm-gray mt-1">
                    Growth in AI-referred traffic
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-teal">21%</p>
                  <p className="text-sm text-warm-gray mt-1">
                    Drop in traditional search
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-teal">88%</p>
                  <p className="text-sm text-warm-gray mt-1">
                    Top Google results invisible to AI
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <Link href="/contact" className="btn-primary">
                  Get Your Free Audit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* AI Search Mockup */}
            <div className="hidden md:block">
              <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 max-w-md ml-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-coral" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-warm-gray">AI Search</span>
                </div>

                <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
                  <p className="text-sm text-navy">
                    <span className="text-teal font-medium mr-2">Q</span>
                    best generative engine optimization firms
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-warm-gray mb-3">
                    <span className="text-teal font-medium mr-2">A</span>
                    Here are leading firms specializing in AI search visibility:
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal" />
                    <span className="text-sm font-medium text-teal">
                      Miaren AI
                    </span>
                    <span className="text-xs text-warm-gray">[1]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    <span className="text-sm text-warm-gray">
                      Enterprise AI Visibility Group
                    </span>
                    <span className="text-xs text-warm-gray">[2]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    <span className="text-sm text-warm-gray">
                      NextGen Search Labs
                    </span>
                    <span className="text-xs text-warm-gray">[3]</span>
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 text-xs font-mono text-warm-gray tracking-wider">
                Optimized for ChatGPT · Perplexity · Copilot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-navy py-20 md:py-28 bg-node-network-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-4">// THE PROBLEM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why traditional SEO isn&apos;t enough
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "AI synthesizes, not ranks",
                description:
                  "Ranking #1 doesn't guarantee citation. AI pulls from multiple sources.",
              },
              {
                title: "Different authority signals",
                description:
                  "Trust signals for AI are fundamentally different from traditional ranking.",
              },
              {
                title: "Machine readability matters",
                description:
                  "Content must be structured for AI. Schema, Q&A, hierarchy essential.",
              },
              {
                title: "Third-party validation is critical",
                description:
                  "Entity consistency and citations from independent, trusted sources matter more than ever.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 border-t-2 border-teal"
              >
                <h3 className="text-base font-bold text-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXACT Framework */}
      <ExactFramework />

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-soft-white bg-node-network">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              How Miaren AI Can Help
            </h2>
            <p className="mt-3 text-warm-gray">Choose your starting point.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* EXACT Audit */}
            <div className="glass-card p-8 border-2 border-teal/30 relative">
              <span className="inline-block bg-teal text-navy text-xs font-bold px-3 py-1 rounded mb-4">
                START HERE
              </span>
              <h3 className="text-xl font-bold text-navy mb-2">
                The EXACT Audit
              </h3>
              <p className="text-sm text-warm-gray italic mb-4">
                Most popular starting point
              </p>
              <p className="text-sm text-warm-gray mb-6">
                Know exactly where you stand in AI search.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "EXACT diagnostic across all 5 signals",
                  "AI Visibility Score",
                  "Gap analysis vs. competitors",
                  "Prioritized fix list",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                5–7 business days
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Start with an Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* GEO Blueprint */}
            <div className="glass-card p-8">
              <span className="inline-block border border-gray-300 text-warm-gray text-xs font-medium px-3 py-1 rounded mb-4">
                MOST COMPREHENSIVE
              </span>
              <h3 className="text-xl font-bold text-navy mb-2">
                The GEO Blueprint
              </h3>
              <p className="text-sm text-warm-gray italic mb-4">
                Your custom roadmap.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Content optimization plan",
                  "Structured data roadmap",
                  "Entity consistency fixes",
                  "Authority building priorities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                2–3 weeks
              </div>
              <Link href="/services" className="text-teal text-sm font-medium inline-flex items-center gap-1 hover:underline">
                See what&apos;s included
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
                Train your team to own it.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Half-day intensive session",
                  "Live brand audit",
                  "GEO toolkit & templates",
                  "30-day implementation support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Half-day + 30 days
              </div>
              <Link href="/services" className="text-teal text-sm font-medium inline-flex items-center gap-1 hover:underline">
                Learn about workshops
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <p className="text-center mt-10 text-warm-gray">
            Not sure where to start?{" "}
            <Link href="/contact" className="text-teal font-medium hover:underline">
              Book a free 30-minute call →
            </Link>
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-teal mx-auto mb-8" />
          <blockquote className="text-xl md:text-2xl italic text-navy leading-relaxed">
            &ldquo;We had no idea our competitors were being cited by ChatGPT while we
            were invisible. The EXACT Audit showed us exactly what to fix.&rdquo;
          </blockquote>
          <p className="mt-6 text-xs font-mono tracking-wider text-warm-gray uppercase">
            — B2B Technology Company, Austin TX
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20 md:py-28 bg-node-network-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Your competitors might already be winning a search game you didn&apos;t
            know was being played.
          </h2>
          <p className="mt-6 text-warm-gray text-lg">
            The audit takes 5–7 days. The insights last forever.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary text-lg !px-8 !py-4">
              Get Your Free Audit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
