import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { faqItems } from "@/lib/faq-data";
import { getFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Clear answers about GEO, AI search visibility, the EXACT Framework, and how Miaren AI works. Frequently asked questions about Generative Engine Optimization.",
};

export default function FaqPage() {
  const faqSchema = getFaqSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-soft-white bg-node-network pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Frequently Asked{" "}
            <span className="text-teal">Questions</span>
          </h1>
          <p className="text-warm-gray text-lg mb-14">
            Clear answers about GEO, AI search visibility, and how we work.
          </p>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-soft-white bg-node-network">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-teal-light border border-teal/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Still have questions?
            </h2>
            <p className="mt-3 text-warm-gray">
              Let&apos;s talk about your brand&apos;s AI visibility, no strings attached.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Get Your Free Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
