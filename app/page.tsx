import Link from "next/link";
import ExactFramework from "@/components/ExactFramework";
import AISearchMockup from "@/components/AISearchMockup";
import NodeNetwork from "@/components/NodeNetwork";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-soft-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <NodeNetwork opacity={0.35} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-light border border-teal/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-xs font-mono tracking-wider text-teal uppercase">
                  Generative Engine Optimization
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                Be found where it{" "}
                <span className="text-teal">matters next.</span>
              </h1>

              <p className="mt-5 text-warm-gray text-lg leading-relaxed max-w-lg">
                Your customers stopped Googling. They&apos;re asking ChatGPT, Perplexity, and
                Copilot. Miaren AI makes your brand visible, citable, and
                recommendable in AI-powered search.
              </p>

              {/* Stats */}
              <div className="flex gap-8 mt-8">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-teal">527%</p>
                  <p className="text-sm text-warm-gray mt-1">Growth in AI-referred traffic</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-teal">21%</p>
                  <p className="text-sm text-warm-gray mt-1">Drop in traditional search</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-teal">88%</p>
                  <p className="text-sm text-warm-gray mt-1">Top Google results invisible to AI</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
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

            {/* AI Search Mockup with typing animation */}
            <div className="hidden md:block">
              <AISearchMockup />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.25} color="0, 212, 170" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// THE PROBLEM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why traditional SEO isn&apos;t enough
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              {
                title: "AI synthesizes, not ranks",
                description: "Ranking #1 doesn't guarantee citation. AI pulls from multiple sources.",
                icon: (
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Different authority signals",
                description: "Trust signals for AI are fundamentally different from traditional ranking.",
                icon: (
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Machine readability matters",
                description: "Content must be structured for AI. Schema, Q&A, hierarchy essential.",
                icon: (
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
              },
              {
                title: "Third-party validation is critical",
                description: "Entity consistency and citations from independent, trusted sources matter more than ever.",
                icon: (
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-6 border-t-2 border-teal">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXACT Framework */}
      <ExactFramework />

      {/* Services Preview */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">How Miaren AI Can Help</h2>
            <p className="mt-3 text-warm-gray">Choose your starting point.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* EXACT Audit */}
            <div className="glass-card p-7 border-2 border-teal/30 flex flex-col">
              <span className="inline-block bg-teal text-navy text-xs font-bold px-3 py-1 rounded mb-4 self-start">START HERE</span>
              <h3 className="text-xl font-bold text-navy mb-1">The EXACT Audit</h3>
              <p className="text-sm text-warm-gray italic mb-4">Most popular starting point</p>
              <p className="text-sm text-warm-gray mb-5">Know exactly where you stand in AI search.</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["EXACT diagnostic across all 5 signals", "AI Visibility Score", "Gap analysis vs. competitors", "Prioritized fix list"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                5–7 business days
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center mt-auto">
                Start with an Audit →
              </Link>
            </div>

            {/* GEO Blueprint */}
            <div className="glass-card p-7 flex flex-col">
              <span className="inline-block border border-gray-300 text-warm-gray text-xs font-medium px-3 py-1 rounded mb-4 self-start">MOST COMPREHENSIVE</span>
              <h3 className="text-xl font-bold text-navy mb-1">The GEO Blueprint</h3>
              <p className="text-sm text-warm-gray italic mb-4">Your custom roadmap.</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["Content optimization plan", "Structured data roadmap", "Entity consistency fixes", "Authority building priorities"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                2–3 weeks
              </div>
              <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="btn-dark w-full justify-center mt-auto">
                Book a Consultation →
              </a>
            </div>

            {/* GEO Workshop */}
            <div className="glass-card p-7 flex flex-col">
              <span className="inline-block border border-gray-300 text-warm-gray text-xs font-medium px-3 py-1 rounded mb-4 self-start">FOR TEAMS</span>
              <h3 className="text-xl font-bold text-navy mb-1">The GEO Workshop</h3>
              <p className="text-sm text-warm-gray italic mb-4">Train your team to own it.</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["Half-day intensive session", "Live brand audit", "GEO toolkit & templates", "30-day implementation support"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Half-day + 30 days
              </div>
              <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="btn-dark w-full justify-center mt-auto">
                Schedule a Workshop →
              </a>
            </div>
          </div>

          <p className="text-center mt-8 text-warm-gray">
            Not sure where to start?{" "}
            <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="text-teal font-medium hover:underline">
              Book a free 30-minute call →
            </a>
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-teal mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl italic text-navy leading-relaxed">
            &ldquo;We had no idea our competitors were being cited by ChatGPT while we
            were invisible. The EXACT Audit showed us exactly what to fix.&rdquo;
          </blockquote>
          <p className="mt-5 text-xs font-mono tracking-wider text-warm-gray uppercase">
            — B2B Technology Company, Austin TX
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Your competitors might already be winning a search game you didn&apos;t
            know was being played.
          </h2>
          <p className="mt-5 text-warm-gray text-lg">
            The audit takes 5–7 days. The insights last forever.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary text-lg !px-8 !py-4">
              Get Your Free Audit →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
