import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas of Focus | AI Visibility Diagnostics & Strategy | Miaren AI",
  description:
    "AI visibility diagnostics, information architecture strategy, and generative search analysis. Research-based advisory by Mia Cheraghian, PhD.",
  alternates: {
    canonical: "https://miarenai.com/services",
  },
  openGraph: {
    title: "Areas of Focus | Miaren AI",
    description:
      "AI visibility diagnostics, information architecture strategy, and generative search analysis.",
    images: [
      {
        url: "https://miarenai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miaren AI - Areas of Focus",
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

      {/* Hero */}
      <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.3} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// AREAS OF FOCUS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            How We <span className="text-teal">Think About</span> AI Visibility
          </h1>
          <p className="mt-6 text-warm-gray text-lg leading-relaxed">
            AI search engines are building entity models of every brand and
            organization. The knowledge structures they form today will compound.
            Our work focuses on understanding how those systems evaluate, select,
            and cite sources, and applying that understanding strategically.
          </p>
          <p className="mt-4 text-warm-gray text-sm leading-relaxed">
            Based on the{" "}
            <Link
              href="/methodology"
              className="text-teal hover:underline"
            >
              three-signal diagnostic methodology
            </Link>{" "}
            developed by Mia Cheraghian, PhD.
          </p>
        </div>
      </section>

      {/* Service 1: AI Visibility Diagnostic */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block bg-teal text-navy text-xs font-bold px-3 py-1 rounded mb-4">
                DIAGNOSTIC
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Visibility Audit
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A structured diagnostic of how AI search engines currently
                perceive, reference, and cite your organization. We analyze
                your presence across ChatGPT, Perplexity, Google AI Overviews,
                and Copilot against the{" "}
                <Link
                  href="/methodology"
                  className="text-teal hover:underline"
                >
                  three diagnostic signals
                </Link>
                : findability, trust, and authority.
              </p>
              <p className="text-sm font-mono text-teal mb-4">WHAT THIS REVEALS</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether AI engines can parse your content. Whether they
                encounter consistent information across platforms. Whether
                independent sources validate your expertise. The diagnostic
                produces a signal-level assessment, not a checklist.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <p className="text-xs font-mono tracking-wider text-teal uppercase mb-4">
                AREAS OF ANALYSIS
              </p>
              <ul className="space-y-3">
                {[
                  "AI knowledge graph representation and entity recognition",
                  "Cross-platform information consistency analysis",
                  "Structured data readiness for AI ingestion",
                  "Third-party authority signal assessment",
                  "Competitive citation landscape mapping",
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
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                >
                  Request a Diagnostic →
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
                STRATEGIC ANALYSIS
              </p>
              <ul className="space-y-3">
                {[
                  "AI information architecture recommendations",
                  "Knowledge infrastructure design for AI ingestion",
                  "Entity consistency and cross-platform alignment plan",
                  "Authority signal development strategy",
                  "Platform-specific citation behavior analysis",
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
                  IMPACT TIMELINE
                </p>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Information architecture changes typically reflect in AI
                  systems within 4-8 weeks. Authority signal development
                  operates on a 3-6 month horizon and produces the most
                  durable results.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://calendly.com/c2018-mia/chat-with-mia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark w-full justify-center"
                >
                  Schedule a Conversation →
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block border border-gray-300 text-warm-gray text-xs font-medium px-3 py-1 rounded mb-4">
                STRATEGY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                AI Visibility Strategy
              </h2>
              <p className="text-warm-gray leading-relaxed">
                A research-informed strategic analysis built on your
                diagnostic results. We map how AI systems currently construct
                knowledge about your category, identify where your
                organization is absent or misrepresented, and design the
                information architecture needed to shift that.
              </p>
              <p className="text-warm-gray leading-relaxed mt-4">
                This is not a content calendar or an execution plan. It is a
                strategic assessment of how to structure your organization&apos;s
                knowledge for AI systems that are deciding who to cite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Expert Briefings */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block border border-teal/40 text-teal text-xs font-medium px-3 py-1 rounded mb-4">
                FOR TEAMS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Expert Briefings
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Structured briefings for leadership and technical teams who need
                to understand how AI search systems evaluate and cite sources.
                Grounded in the{" "}
                <Link
                  href="/methodology"
                  className="text-teal hover:underline"
                >
                  three-signal methodology
                </Link>{" "}
                and current research on generative search behavior.
              </p>
              <p className="text-sm font-mono text-teal mb-3">DESIGNED FOR</p>
              <div className="flex flex-wrap gap-2">
                {["Executive Leadership", "Marketing & Communications", "Technical Teams"].map(
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
                BRIEFING COVERS
              </p>
              <ul className="space-y-3">
                {[
                  "How AI search engines construct knowledge and select citations",
                  "The three diagnostic signals that determine AI visibility",
                  "How to evaluate your organization's current AI presence",
                  "Strategic considerations for AI information architecture",
                  "Ongoing monitoring frameworks and assessment criteria",
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
              <div className="mt-6">
                <a
                  href="https://calendly.com/c2018-mia/chat-with-mia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Request a Briefing →
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
              Not sure where to start?
            </h2>
            <p className="mt-3 text-warm-gray">
              Start with a conversation. We&apos;ll help you understand what
              AI search engines currently say about your organization.
            </p>
            <div className="mt-6">
              <a
                href="https://calendly.com/c2018-mia/chat-with-mia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schedule a Conversation →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
