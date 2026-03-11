import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

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
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://miarenai.com" },
    { name: "Services", url: "https://miarenai.com/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.3} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// AREAS OF FOCUS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            How We <span className="text-teal">Study</span> AI Visibility
          </h1>
          <p className="mt-6 text-warm-gray text-lg leading-relaxed">
            AI search systems are building entity models of every organization.
            They crawl, cross-reference, and synthesize information from hundreds
            of sources to decide who to name in their responses. We study how
            those systems make citation decisions and help organizations
            understand where they stand.
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

      {/* ============================================= */}
      {/* AI Visibility Audit                           */}
      {/* ============================================= */}
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
                A structured diagnostic that analyzes how AI systems currently
                interpret, reference, and cite your organization. We query
                ChatGPT, Perplexity, Google AI Overviews, and Copilot with the
                questions your audience actually asks, then evaluate the
                results against three diagnostic signals.
              </p>
              <p className="text-sm font-mono text-teal mb-4">THREE DIAGNOSTIC SIGNALS</p>
              <div className="space-y-4">
                {[
                  {
                    signal: "Can AI Find You?",
                    desc: "Whether your content is structured, crawlable, and machine-readable. Evaluates schema markup, heading hierarchy, content architecture, and technical infrastructure that determines if AI systems can parse and interpret your organization.",
                  },
                  {
                    signal: "Can AI Trust You?",
                    desc: "Whether AI systems encounter consistent brand identity, description, and positioning across every platform they cross-reference. Evaluates entity consistency and cross-platform presence across directories, LinkedIn, review sites, and your website.",
                  },
                  {
                    signal: "Can AI Quote You?",
                    desc: "Whether independent, trusted sources reference your organization in ways that give AI systems confidence to cite you. Evaluates third-party authority signals, earned media, and external validation.",
                  },
                ].map((item) => (
                  <div key={item.signal}>
                    <p className="text-sm font-semibold text-white">{item.signal}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <p className="text-xs font-mono tracking-wider text-teal uppercase mb-4">
                WHAT THE DIAGNOSTIC REVEALS
              </p>
              <ul className="space-y-3">
                {[
                  "How AI systems currently interpret your organization",
                  "Where information gaps or inconsistencies undermine AI confidence",
                  "Which competitors AI systems cite instead of you, and why",
                  "Signal-level assessment across all three diagnostic dimensions",
                  "Strategic visibility recommendations based on diagnostic findings",
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

      {/* ============================================= */}
      {/* AI Visibility Strategy                        */}
      {/* ============================================= */}
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
                  "AI system interpretation analysis across major platforms",
                  "Knowledge architecture recommendations for AI ingestion",
                  "Entity alignment strategy across distributed sources",
                  "Authority signal development and citation pathway analysis",
                  "Generative search visibility strategy by platform behavior",
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
                A research-informed strategic analysis built on your diagnostic
                results. We map how AI systems currently construct knowledge about
                your category, identify where your organization is absent or
                misrepresented, and design the knowledge architecture needed to
                change how AI systems interpret you.
              </p>
              <p className="text-warm-gray leading-relaxed mt-4">
                This is not a content calendar or an execution plan. It is a
                strategic assessment of how to structure your organization&apos;s
                information for AI systems that are deciding who to cite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* AI Information Architecture                   */}
      {/* ============================================= */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.15} color="0, 212, 170" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// CONCEPT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              AI Information{" "}
              <span className="text-teal">Architecture</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5 text-gray-400 leading-relaxed">
            <p>
              Traditional SEO focused on ranking individual web pages in a list of
              links. AI search systems work differently. They interpret
              organizations through distributed information across many sources:
              websites, directories, news articles, review platforms, social
              profiles, structured data, and more.
            </p>
            <p>
              AI Information Architecture is the practice of structuring
              organizational knowledge so AI systems can correctly interpret,
              reference, and recommend an organization. It considers how
              information is distributed, whether it is consistent, whether
              independent sources validate it, and whether it is technically
              readable by AI crawlers.
            </p>
            <p>
              This is the layer between what your organization publishes and what
              AI systems understand about you. When done well, AI systems form
              an accurate, confident model of who you are and what you do. When
              neglected, AI either ignores you or misrepresents you.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                label: "Traditional SEO",
                desc: "Rank pages in a list of links",
                muted: true,
              },
              {
                label: "GEO",
                desc: "Optimize for AI-generated answers",
                muted: false,
              },
              {
                label: "AI Information Architecture",
                desc: "Structure how AI systems understand your organization",
                muted: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`border rounded-xl p-5 text-center ${item.muted
                  ? "border-white/10 opacity-50"
                  : "border-teal/30 bg-teal/5"
                  }`}
              >
                <p className={`text-sm font-bold mb-1 ${item.muted ? "text-gray-500" : "text-teal"}`}>
                  {item.label}
                </p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* Research & Insights                           */}
      {/* ============================================= */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.15} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// RESEARCH & INSIGHTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
              Studying How Organizations Appear in AI Search
            </h2>
            <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
              Miaren AI studies the emerging information layer between
              organizations and the AI systems that interpret them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                topic: "How AI assistants choose which organizations to recommend",
                detail:
                  "Analyzing the citation selection process across ChatGPT, Perplexity, Google AI Overviews, and Copilot to understand what signals drive AI recommendations.",
              },
              {
                topic: "Visibility patterns across generative search platforms",
                detail:
                  "Each AI system retrieves and synthesizes information differently. We study platform-specific citation behaviors and how they diverge from traditional search.",
              },
              {
                topic: "AI discoverability for nonprofits and mission-driven organizations",
                detail:
                  "How organizations without large marketing budgets can structure their information for AI visibility through strategic information architecture.",
              },
              {
                topic: "Information architecture for generative search systems",
                detail:
                  "How distributed organizational knowledge is structured to be correctly interpreted by AI systems that synthesize from multiple sources.",
              },
            ].map((item) => (
              <div key={item.topic} className="glass-card p-6">
                <h3 className="text-base font-bold text-navy mb-2">
                  {item.topic}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/research"
              className="text-teal font-medium hover:underline"
            >
              Explore our research →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* Expert Briefings                              */}
      {/* ============================================= */}
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
                  "How AI search systems construct knowledge and select citations",
                  "The three diagnostic signals that determine AI visibility",
                  "How to evaluate your organization's current AI presence",
                  "Strategic considerations for AI information architecture",
                  "Ongoing assessment criteria and monitoring frameworks",
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
              AI search systems currently say about your organization.
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
