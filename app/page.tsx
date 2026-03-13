import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import AiSearchDemo from "@/components/AiSearchDemo";
import { getWebSiteSchema } from "@/lib/schema";

export default function HomePage() {
  const websiteSchema = getWebSiteSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Section 1: Hero */}
      <section className="relative bg-soft-white pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden">
        <NodeNetwork opacity={0.35} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-12 lg:gap-20">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-teal/8 border border-teal/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="text-xs font-mono tracking-wider text-teal uppercase">
                  PhD-Led AI Visibility Research
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight">
                Protect Your Brand Integrity{" "}
                <span className="text-gradient">in Synthetic Search.</span>
              </h1>

              <p className="mt-6 text-warm-gray text-lg leading-relaxed max-w-lg">
                When someone asks ChatGPT or Perplexity for a recommendation
                in your industry, AI decides who to name — and who to skip.
                Most organizations have no visibility into that process.
              </p>
              <p className="mt-3 text-warm-gray text-lg leading-relaxed max-w-lg">
                Miaren AI helps you understand how AI search sees your brand
                and what to do about it. PhD-led research, not guesswork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-9">
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
                  View Expertise →
                </Link>
              </div>
            </div>

            <AiSearchDemo />
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <NodeNetwork opacity={0.25} color="0, 212, 170" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// THE SHIFT</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              AI search is growing. Traditional search is declining.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { stat: "527%", label: "Growth in AI-referred website sessions", source: "Previsible / Search Engine Land, 2025" },
              { stat: "~30%", label: "Decline in traditional click-through rates", source: "BrightEdge, 2024-2025" },
              { stat: "12%", label: "Of AI-cited URLs also rank in Google's top 10", source: "Ahrefs, 2025" },
            ].map((item) => (
              <div
                key={item.stat}
                className="glass-card-dark p-8 text-center group"
              >
                <p className="text-4xl md:text-5xl font-bold stat-number">
                  {item.stat}
                </p>
                <p className="text-sm text-gray-400 mt-3">
                  {item.label}
                </p>
                <p className="text-xs text-warm-gray mt-2 font-mono">
                  {item.source}
                </p>
              </div>
            ))}
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
      <section className="relative py-20 md:py-28 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// EXPERTISE</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
              Strategic Pillars
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                ),
                title: "Three-Signal Diagnostic",
                desc: "A proprietary PhD-led assessment evaluating entity verification, RAG alignment, and citation authority across ChatGPT, Perplexity, Google AI Overviews, and Copilot.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                ),
                title: "Knowledge Architecture",
                desc: "We construct semantic hierarchies, structured data schemas, and entity graphs that align your organization's information architecture with AI retrieval patterns.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                ),
                title: "Executive Intelligence Briefings",
                desc: "Research seminars for leadership on RAG pipeline mechanics, entity disambiguation, and the citation dynamics that determine organizational visibility in synthetic search.",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href="/services"
                className="glass-card p-8 border-t-4 border-teal/20 hover:border-teal group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Three-Signal Methodology Preview */}
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">OUR METHODOLOGY</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Three <span className="text-gradient">Diagnostic Signals</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              A proprietary diagnostic framework developed through PhD research.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
            {[
              { num: "1", name: "Can AI find you?" },
              { num: "2", name: "Can AI trust you?" },
              { num: "3", name: "Can AI quote you?" },
            ].map((signal) => (
              <div key={signal.num} className="text-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 text-teal flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 group-hover:border-teal/40 group-hover:bg-teal/5 transition-all">
                  {signal.num}
                </div>
                <p className="text-sm text-gray-400 leading-tight font-medium">
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
      <section className="py-20 md:py-24 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">// DIAGNOSTIC INDICATORS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 tracking-tight">
            When This Matters
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed">
            You rank well on Google but AI doesn&apos;t mention you. You have
            a strong brand but ChatGPT recommends your competitors. Your website
            looks great but AI can&apos;t parse it. The diagnostic tells you
            exactly where the gap is and what to fix first.
          </p>
          <div className="mt-8">
            <Link href="/faq" className="text-teal font-medium hover:underline">
              Have questions? Check our FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Evaluate your{" "}
            <span className="text-gradient">citation integrity.</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
            Request a diagnostic assessment to identify where your
            organization&apos;s entity signals, knowledge architecture, and
            citation authority stand.
          </p>
          <div className="mt-10">
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
