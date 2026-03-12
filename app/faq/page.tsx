import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import NodeNetwork from "@/components/NodeNetwork";
import { faqItems } from "@/lib/faq-data";
import { getFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Visibility FAQ | Common Questions About GEO",
  description:
    "Frequently asked questions about AI visibility and Generative Engine Optimization. What is GEO? How does it differ from SEO? How long does it take to see results? Answered by Mia Cheraghian.",
  alternates: {
    canonical: "https://miarenai.com/faq",
  },
  openGraph: {
    title: "AI Visibility FAQ | Miaren AI",
    description:
      "Common questions about AI visibility and Generative Engine Optimization, answered directly.",
    images: [
      {
        url: "https://miarenai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miaren AI FAQ",
      },
    ],
  },
};

export default function FaqPage() {
  const faqSchema = getFaqSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative bg-soft-white pt-14 pb-16 md:pt-24 md:pb-28 overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-3">// FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
            Frequently Asked <span className="text-teal">Questions</span>
          </h1>
          <p className="text-warm-gray text-lg mb-10">
            Clear answers about{" "}
            <Link
              href="/geo-vs-seo"
              className="text-teal hover:underline"
            >
              GEO
            </Link>
            , AI search visibility, and how we work.
          </p>

          {/* SSR-rendered answers always in DOM for AI crawlers */}
          <div className="sr-only" aria-hidden="true">
            {faqItems.map((item, i) => (
              <div key={i}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <FaqAccordion items={faqItems} />

          <p className="text-center text-warm-gray text-sm mt-8">
            Want to learn more about the difference between GEO and SEO?{" "}
            <Link
              href="/geo-vs-seo"
              className="text-teal hover:underline"
            >
              Read our full GEO vs SEO guide →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-14 bg-soft-white">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-teal-light border border-teal/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Still have questions?
            </h2>
            <p className="mt-3 text-warm-gray">
              Let&apos;s talk about your brand&apos;s AI visibility, no strings
              attached.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary">
                Start a Conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
