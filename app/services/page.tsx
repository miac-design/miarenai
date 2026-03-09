import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Visibility Services — GEO Audits, Strategy & Workshops",
  description:
    "Miaren AI offers AI visibility audits, GEO strategy, and B2B workshops. Using the proprietary EXACT Framework to make your brand citable in ChatGPT, Perplexity, and Google AI Overviews.",
  alternates: {
    canonical: "https://miarenai.com/services",
  },
  openGraph: {
    title: "AI Visibility Services | Miaren AI",
    description:
      "AI visibility audits, GEO strategy, and B2B workshops using the EXACT Framework.",
    images: [
      {
        url: "https://miarenai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miaren AI Services",
      },
    ],
  },
};

export default function ServicesPage() {
  const serviceSchema = getServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero / Intro */}
      <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.3} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// SERVICES</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            AI Visibility <span className="text-teal">Services</span>
          </h1>
          <p className="mt-6 text-warm-gray text-lg leading-relaxed">
            AI engines are forming their understanding of your brand right now.
            The entity relationships and authority signals being established
            today will compound. We help you get it right.
          </p>
        </div>
      </section>

      {/* Service 1: AI Visibility Audit */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block bg-teal text-navy text-xs font-bold px-3 py-1 rounded mb-4">
                START HERE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Visibility Audit
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A comprehensive assessment of your brand&apos;s visibility
                across AI search platforms using the{" "}
                <Link
                  href="/exact-framework"
                  className="text-teal hover:underline"
                >
                  EXACT Framework
                </Link>
                . Find out what AI currently says about you, where the gaps are,
                and what to fix first.
              </p>
              <p className="text-sm font-mono text-teal mb-4">HOW IT WORKS</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We audit your brand across ChatGPT, Perplexity, Google AI
                Overviews, and Copilot, then score you against the 5 EXACT
                signals: Entity Consistency, Cross-Platform Presence, Authority
                Signals, Content Structure, and Technical Infrastructure.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <p className="text-xs font-mono tracking-wider text-teal uppercase mb-4">
                WHAT YOU GET
              </p>
              <ul className="space-y-3">
                {[
                  "Full EXACT Framework diagnostic across 4 AI platforms",
                  "AI Visibility Score with competitive benchmarking",
                  "Gap analysis across all 5 signals",
                  "Prioritized fix list with quick wins flagged",
                  "Executive summary with strategic recommendations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-teal shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mt-6">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Delivered in 5-7 business days
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                >
                  Book Your Audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: AI Visibility Strategy */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="glass-card p-7 order-2 md:order-1">
              <p className="text-xs font-mono tracking-wider text-teal uppercase mb-4">
                WHAT YOU GET
              </p>
              <ul className="space-y-3">
                {[
                  "Custom content restructuring plan for AI readability",
                  "Structured data (Schema.org) implementation roadmap",
                  "Entity consistency audit and fix plan",
                  "Authority-building priority list with specific tactics",
                  "Platform-specific optimization recommendations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-navy"
                  >
                    <svg
                      className="w-4 h-4 text-teal shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-teal/5 border border-teal/20 rounded-lg">
                <p className="text-xs font-mono text-teal uppercase mb-2">
                  TIMELINE CONTEXT
                </p>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Entity consistency fixes show impact in 2-4 weeks. Structured
                  data improvements in 4-8 weeks. Authority building takes 3-6+
                  months but is the most durable.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://calendly.com/c2018-mia/chat-with-mia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark w-full justify-center"
                >
                  Build Your Strategy →
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block border border-gray-300 text-warm-gray text-xs font-medium px-3 py-1 rounded mb-4">
                MOST COMPREHENSIVE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                AI Visibility Strategy
              </h2>
              <p className="text-warm-gray leading-relaxed">
                A custom{" "}
                <Link
                  href="/geo-vs-seo"
                  className="text-teal hover:underline"
                >
                  GEO
                </Link>{" "}
                strategy built on your audit results. A prioritized roadmap
                covering entity consistency fixes, content restructuring,
                authority building, and technical implementation. No guesswork,
                no generic advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: B2B GEO Workshops */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block border border-teal/40 text-teal text-xs font-medium px-3 py-1 rounded mb-4">
                FOR TEAMS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                B2B GEO Workshops
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Expert-led training sessions for teams who need to understand AI
                visibility. Your team learns how AI engines decide who to cite,
                the{" "}
                <Link
                  href="/exact-framework"
                  className="text-teal hover:underline"
                >
                  EXACT Framework
                </Link>
                , how to audit your own visibility, and what ongoing strategy
                looks like.
              </p>
              <p className="text-sm font-mono text-teal mb-3">WHO IT&apos;S FOR</p>
              <div className="flex flex-wrap gap-2">
                {["Marketing Teams", "SEO Agencies", "Executive Leadership"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-teal/30 text-teal rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <p className="text-xs font-mono tracking-wider text-teal uppercase mb-4">
                YOUR TEAM LEARNS
              </p>
              <ul className="space-y-3">
                {[
                  "How AI engines decide who to cite",
                  "The EXACT Framework for AI visibility auditing",
                  "How to audit your own brand's AI visibility",
                  "Ongoing strategy for maintaining citations",
                  "Monitoring tools and templates your team keeps",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-teal shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mt-6">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Half-day session + 30 days implementation support
              </div>
              <div className="mt-6">
                <a
                  href="https://calendly.com/c2018-mia/chat-with-mia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Schedule a Workshop →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-soft-white">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-teal-light border border-teal/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-warm-gray">
              Start with a conversation. We&apos;ll help you figure out what
              makes sense for your brand.
            </p>
            <div className="mt-6">
              <a
                href="https://calendly.com/c2018-mia/chat-with-mia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Free 30-Minute Call →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
