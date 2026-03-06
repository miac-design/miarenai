import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import NodeNetwork from "@/components/NodeNetwork";
import { faqItems } from "@/lib/faq-data";
import { getFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Clear answers about GEO, AI search visibility, the EXACT Framework, and how Miaren AI works.",
  alternates: {
    canonical: "https://miarenai.com/faq",
  },
};

export default function FaqPage() {
  const faqSchema = getFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative bg-soft-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-3">// FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
            Frequently Asked <span className="text-teal">Questions</span>
          </h1>
          <p className="text-warm-gray text-lg mb-10">Clear answers about GEO, AI search visibility, and how we work.</p>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-14 bg-soft-white">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-teal-light border border-teal/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Still have questions?</h2>
            <p className="mt-3 text-warm-gray">Let&apos;s talk about your brand&apos;s AI visibility, no strings attached.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">Get Your Free Audit →</Link>
              <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="btn-secondary">Book a Call →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
