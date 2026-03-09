import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";

export const metadata: Metadata = {
  title: "About Miaren AI | Founded by Mia Cheraghian | AI Visibility Consultancy",
  description:
    "Miaren AI was founded by Mia Cheraghian, a PhD researcher and AI strategist. The name means AI Renaissance. We help brands become visible in AI-powered search.",
  alternates: {
    canonical: "https://miarenai.com/about",
  },
  openGraph: {
    title: "About Miaren AI | Founded by Mia Cheraghian",
    description:
      "PhD researcher and AI strategist helping brands become visible in AI-powered search.",
    images: [
      {
        url: "https://miarenai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Miaren AI",
      },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mia Cheraghian",
  alternateName: "Mahboubeh Cheraghian",
  jobTitle: "Founder and CEO",
  worksFor: { "@type": "Organization", name: "Miaren AI" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Texas Tech University",
  },
  knowsAbout: [
    "Generative Engine Optimization",
    "AI Visibility",
    "AI Search",
    "GEO",
    "EXACT Framework",
  ],
  description:
    "PhD researcher, AI strategist, and founder of Miaren AI. Creator of the EXACT Framework for Generative Engine Optimization.",
  sameAs: ["https://www.linkedin.com/in/mia-cheraghian/"],
  url: "https://www.miarenai.com/about",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ============================================= */}
      {/* Section 1: About Miaren AI (The Company)     */}
      {/* ============================================= */}
      <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.25} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// THE COMPANY</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-8">
            About <span className="text-teal">Miaren AI</span>
          </h1>

          <div className="space-y-5 text-warm-gray text-lg leading-relaxed">
            <p>
              AI is reshaping how every business is discovered, evaluated, and
              chosen. Most aren&apos;t ready. Miaren AI exists to change that,
              starting with AI search visibility today and expanding as AI
              transforms more of how businesses operate tomorrow.
            </p>
            <p>
              The name Miaren combines Mia + Ren (renaissance) + AI. It means
              AI Renaissance. Because we believe AI isn&apos;t just changing
              search. It&apos;s changing how every business is found, evaluated,
              and chosen.
            </p>
            <p>
              Today, we specialize in{" "}
              <Link
                href="/geo-vs-seo"
                className="text-teal hover:underline"
              >
                Generative Engine Optimization
              </Link>{" "}
              , making brands visible, citable, and recommendable in AI-powered
              search engines like ChatGPT, Perplexity, and Google AI Overviews.
              Tomorrow, as AI reshapes more of how businesses operate, so will
              we.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* Section 2: Mia Cheraghian (The Founder)      */}
      {/* ============================================= */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// THE FOUNDER</p>

          <div className="flex items-center gap-5 mb-8">
            <Image
              src="/mia-cheraghian.png"
              alt="Mia Cheraghian, Founder of Miaren AI"
              width={88}
              height={88}
              className="rounded-full object-cover w-20 h-20 md:w-22 md:h-22 ring-2 ring-teal/30"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Mia Cheraghian
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                (Mahboubeh Cheraghian)
              </p>
              <p className="text-sm font-mono tracking-wider text-teal uppercase mt-1">
                Founder, Miaren AI
              </p>
            </div>
          </div>

          <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
            <p>
              PhD researcher at Texas Tech University, Senior Researcher at
              Rackspace Technology, and Director of Strategic Partnerships
              &amp; Marketing at{" "}
              <a
                href="https://austinaihub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                Austin AI Hub
              </a>
              . Creator of the{" "}
              <Link
                href="/exact-framework"
                className="text-teal hover:underline"
              >
                EXACT Framework
              </Link>{" "}
              for AI visibility auditing.
            </p>
            <p>
              My career is dedicated to democratizing access to emerging
              technology for populations traditionally left behind. My doctoral
              research explored how smart glasses can reduce travel hesitation,
              including for people with disabilities, by making travel
              experiences more accessible. Through Austin AI Hub, I connect
              underserved communities in Austin to AI opportunities. Through
              Miaren AI, I make AI visibility accessible to businesses that
              can&apos;t compete with enterprise players.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* Section 3: Credentials                        */}
      {/* ============================================= */}
      <section className="relative py-16 md:py-20 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.15} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-6">// CREDENTIALS</p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "PhD, Texas Tech University (Tourism, Hospitality & Retail Management)",
              "Senior Researcher, Rackspace Technology",
              "Director of Strategic Partnerships & Marketing, Austin AI Hub (501(c)(3) nonprofit)",
              "Creator of the EXACT Framework",
              "Published researcher and peer reviewer",
              "1 published book chapter, 2 journal papers under review, 2 conference presentations",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 glass-card"
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
                <p className="text-sm text-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* Section 4: CTA                                */}
      {/* ============================================= */}
      <section className="relative bg-navy py-16 md:py-20 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Want to work together?
          </h2>
          <div className="mt-8">
            <a
              href="https://calendly.com/c2018-mia/chat-with-mia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg !px-8 !py-4"
            >
              Book a Conversation
              <svg
                className="w-5 h-5"
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
        </div>
      </section>
    </>
  );
}
