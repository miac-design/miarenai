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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.25} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// ABOUT</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            About <span className="text-teal">Miaren AI</span>
          </h1>
        </div>
      </section>

      {/* Section 1: Mia Cheraghian */}
      <section className="py-12 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/mia-cheraghian.png"
                alt="Mia Cheraghian, Founder of Miaren AI"
                width={72}
                height={72}
                className="rounded-full object-cover w-18 h-18"
              />
              <div>
                <p className="text-xs font-mono tracking-wider text-teal uppercase">
                  Founder &amp; CEO
                </p>
                <h2 className="text-2xl font-bold text-navy">
                  Mia Cheraghian
                </h2>
                <p className="text-sm text-warm-gray">
                  (Mahboubeh Cheraghian)
                </p>
              </div>
            </div>

            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Mia combines PhD-level research rigor with applied AI strategy.
                As a PhD candidate at Texas Tech University (Tourism,
                Hospitality &amp; Retail Management), Senior Researcher at
                Rackspace Technology, and Director of Strategic Partnerships
                &amp; Marketing at{" "}
                <a
                  href="https://austinaihub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  Austin AI Hub
                </a>{" "}
                (501(c)(3) nonprofit), she operates at the intersection of
                academic research, enterprise technology, and community
                education.
              </p>
              <p>
                She noticed a critical gap: most companies had no idea how they
                appeared, or didn&apos;t appear, in AI-generated search results.
                Miaren AI was founded to bridge that gap. The{" "}
                <Link
                  href="/exact-framework"
                  className="text-teal hover:underline"
                >
                  EXACT Framework
                </Link>{" "}
                is the result of applying PhD research methodology to the
                practical problem of AI visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Name */}
      <section className="py-16 md:py-20 bg-soft-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-3">// THE NAME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
            MIA + REN + AI
          </h2>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-2xl font-bold text-navy">MIA</p>
              <p className="text-sm text-warm-gray mt-2">The founder</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">REN</p>
              <p className="text-sm text-warm-gray mt-2">
                Renaissance, rebirth
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal">AI</p>
              <p className="text-sm text-warm-gray mt-2">
                The technology reshaping every industry
              </p>
            </div>
          </div>
          <p className="text-warm-gray leading-relaxed max-w-xl mx-auto">
            Miaren means AI Renaissance. Because AI is transforming how every
            business is discovered, evaluated, and chosen.
          </p>
        </div>
      </section>

      {/* Section 3: The Mission */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">THE MISSION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why this exists
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Most businesses have zero AI search strategy. They&apos;re invisible
            to the 300M+ people using ChatGPT every week. We combine PhD research
            with practical strategy to fix that.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Learn more about{" "}
            <Link
              href="/geo-vs-seo"
              className="text-teal font-medium hover:underline"
            >
              how GEO differs from SEO
            </Link>{" "}
            and why it matters.
          </p>
        </div>
      </section>

      {/* Section 4: Credentials */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.15} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-3">// CREDENTIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Background
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "PhD Candidate, Texas Tech University",
              "Senior Researcher, Rackspace Technology",
              "Director, Austin AI Hub (501(c)(3))",
              "Google AI Certified",
              "Creator of the EXACT Framework",
              "Published researcher and peer reviewer",
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

      {/* CTA */}
      <section className="py-16 bg-soft-white">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-teal-light border border-teal/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Ready to work together?
            </h2>
            <p className="mt-3 text-warm-gray">
              See what AI currently says about your brand.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Your Free Audit →
              </Link>
              <a
                href="https://calendly.com/c2018-mia/chat-with-mia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book a Call →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
