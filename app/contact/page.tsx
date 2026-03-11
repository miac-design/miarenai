import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import NodeNetwork from "@/components/NodeNetwork";

export const metadata: Metadata = {
  title: "Start a Conversation | Miaren AI",
  description:
    "Interested in understanding how AI search engines perceive your brand? Schedule a conversation to explore the methodology.",
  alternates: {
    canonical: "https://miarenai.com/contact",
  },
  openGraph: {
    title: "Start a Conversation | Miaren AI",
    description:
      "Schedule a conversation to explore how AI search engines perceive your brand.",
    images: [
      {
        url: "https://miarenai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Miaren AI",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-navy py-12 md:py-16 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">GET IN TOUCH</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Let&apos;s Talk About Your AI Visibility
          </h1>
          <p className="mt-4 text-warm-gray text-lg">
            Not sure if AI mentions your brand? Start with a conversation.
            We&apos;ll show you what AI currently says about you and where the
            gaps are.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-soft-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <div className="glass-card p-7">
                <div className="inline-flex items-center gap-2 border border-teal/30 rounded-full px-4 py-1.5 mb-5">
                  <span className="text-xs font-mono tracking-wider text-teal uppercase">
                    Conversation Request
                  </span>
                </div>
                <h2 className="text-xl font-bold text-navy mb-2">
                  Start a conversation
                </h2>
                <p className="text-sm text-warm-gray mb-6">
                  Interested in understanding how AI search engines perceive your brand?
                  Tell us a little about your organization.
                </p>
                <ContactForm />
              </div>
            </div>
            <div className="md:col-span-2 space-y-5">
              <div className="bg-navy rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Image
                    src="/mia-cheraghian.png"
                    alt="Mia Cheraghian, Founder of Miaren AI"
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12 shrink-0"
                  />
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;I&apos;ve analyzed organizations across every industry. Most
                    score below 20% on AI visibility and they had no idea.
                    That&apos;s what this methodology reveals.&rdquo;
                  </p>
                </div>
                <p className="text-xs text-warm-gray">
                  / Mia Cheraghian, Founder
                </p>
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300">
                      hello@miarenai.com
                    </span>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/miaren-ai/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:opacity-80"
                  >
                    <svg
                      className="w-4 h-4 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300">
                      Mia Cheraghian
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300">
                      Based in Austin, Texas
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-teal"
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
                    <span className="text-sm text-gray-300">
                      Typical response: within 48 hours
                    </span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-navy mb-2">
                  Prefer to talk first?
                </h3>
                <p className="text-sm text-warm-gray mb-4">
                  Schedule a 30-minute call. We&apos;ll explore your AI
                  visibility together.
                </p>
                <a
                  href="https://calendly.com/c2018-mia/chat-with-mia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-teal text-teal text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal hover:text-navy transition-colors w-full justify-center"
                >
                  Book a 30-minute call →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
