import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import AiSearchDemo from "@/components/AiSearchDemo";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.35} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-xs font-mono tracking-wider text-teal uppercase">
                  AI Visibility Research & Strategy
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                Be Found Where It{" "}
                <span className="text-teal">Matters Next.</span>
              </h1>

              <p className="mt-5 text-warm-gray text-lg leading-relaxed max-w-lg">
                People are no longer just searching Google. They are asking AI
                systems like ChatGPT, Perplexity, and Copilot for recommendations.
              </p>
              <p className="mt-3 text-warm-gray text-lg leading-relaxed max-w-lg">
                Miaren AI helps organizations become visible, trusted, and
                recommendable in AI-powered search.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://calendly.com/c2018-mia/chat-with-mia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Schedule a Conversation
                  <svg
                    className="w-4 h-4"
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
                <Link href="/services" className="btn-secondary">
                  Explore Areas of Focus
                </Link>
              </div>
            </div>

            <AiSearchDemo />
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.25} color="0, 212, 170" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// THE SHIFT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              AI search is growing. Traditional search is declining.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-xl p-7 text-center">
              <p className="text-4xl md:text-5xl font-bold text-teal">527%</p>
              <p className="text-sm text-gray-400 mt-2">
                Growth in AI-referred website sessions
              </p>
              <p className="text-xs text-warm-gray mt-1 font-mono">
                Previsible / Search Engine Land, 2025
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7 text-center">
              <p className="text-4xl md:text-5xl font-bold text-teal">~30%</p>
              <p className="text-sm text-gray-400 mt-2">
                Decline in traditional click-through rates
              </p>
              <p className="text-xs text-warm-gray mt-1 font-mono">
                BrightEdge, 2024-2025
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7 text-center">
              <p className="text-4xl md:text-5xl font-bold text-teal">12%</p>
              <p className="text-sm text-gray-400 mt-2">
                Of AI-cited URLs also rank in Google&apos;s top 10
              </p>
              <p className="text-xs text-warm-gray mt-1 font-mono">
                Ahrefs, 2025
              </p>
            </div>
          </div>

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
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services"
              className="glass-card p-7 border-t-4 border-teal/30 hover:border-teal transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                AI Visibility Audit
              </h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                Find out what AI says about your brand today. A complete
                assessment across ChatGPT, Perplexity, Google AI Overviews, and
                Copilot.
              </p>
            </Link>

            <Link
              href="/services"
              className="glass-card p-7 border-t-4 border-teal/30 hover:border-teal transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                AI Visibility Strategy
              </h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                Build the signals that make AI cite you. A custom roadmap
                covering entity consistency, content restructuring, and
                authority building.
              </p>
            </Link>

            <Link
              href="/services"
              className="glass-card p-7 border-t-4 border-teal/30 hover:border-teal transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                GEO Workshops
              </h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                Train your team on AI search visibility. Research-informed sessions
                covering the AI visibility methodology, diagnostic analysis, and ongoing
                strategy.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Three-Signal Methodology Preview */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">OUR METHODOLOGY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Three <span className="text-teal">Diagnostic Signals</span>
            </h2>
            <p className="mt-3 text-warm-gray">
              Three signals. One methodology. Complete clarity.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
            {[
              { num: "1", name: "Can AI find you?" },
              { num: "2", name: "Can AI trust you?" },
              { num: "3", name: "Can AI quote you?" },
            ].map((signal) => (
              <div key={signal.num} className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[rgba(20,30,48,0.8)] text-teal flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-2">
                  {signal.num}
                </div>
                <p className="text-xs text-gray-400 leading-tight">
                  {signal.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs font-mono tracking-wider text-warm-gray uppercase mb-6">
              Research and methodology by Mia Cheraghian, PhD
            </p>
            <Link
              href="/methodology"
              className="text-teal font-medium hover:underline"
            >
              Learn more about the methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Who This Is For */}
      <section className="py-16 md:py-20 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">// WHO THIS IS FOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Is this for you?
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed">
            We work with brands and organizations who are invisible to AI
            search. If your competitors are being recommended by ChatGPT and
            you&apos;re not, the methodology reveals why and what to change.
          </p>
          <div className="mt-8">
            <Link href="/faq" className="text-teal font-medium hover:underline">
              Have questions? Check our FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Explore how AI sees{" "}
            <span className="text-teal">your brand.</span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg">
            Learn where your brand stands in AI search and what the
            three diagnostic signals reveal.
          </p>
          <div className="mt-8">
            <a
              href="https://calendly.com/c2018-mia/chat-with-mia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg !px-8 !py-4"
            >
              Schedule a Conversation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
