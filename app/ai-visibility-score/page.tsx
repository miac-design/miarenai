import type { Metadata } from "next";
import NodeNetwork from "@/components/NodeNetwork";
import SelfCheckTool from "@/components/SelfCheckTool";
import { selfCheckQuestions, signalLabels } from "@/lib/self-check-data";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Visibility Score | How Visible Is Your Brand to AI?",
  description:
    "Answer 10 questions to estimate your brand's AI visibility across the three diagnostic signals: findability, trust, and authority. Free assessment by Miaren AI.",
  alternates: {
    canonical: "https://miarenai.com/ai-visibility-score",
  },
  openGraph: {
    title: "AI Visibility Score | Miaren AI",
    description:
      "Answer 10 questions to estimate how visible your brand is to AI search engines like ChatGPT, Perplexity, and Google AI Overviews.",
    url: "https://miarenai.com/ai-visibility-score",
    images: [
      {
        url: "https://miarenai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Visibility Score | Miaren AI",
      },
    ],
  },
};

function getSelfCheckSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: "AI Visibility Score",
    description:
      "A 10-question assessment tool that estimates how visible your brand is to AI-powered search engines. Evaluates three diagnostic signals: findability, trust, and authority.",
    url: "https://miarenai.com/ai-visibility-score",
    about: {
      "@type": "Thing",
      name: "Generative Engine Optimization",
      alternateName: "GEO",
    },
    author: {
      "@type": "Person",
      name: "Mia Cheraghian",
      url: "https://miarenai.com/about",
      jobTitle: "Founder, Miaren AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Miaren AI",
      url: "https://miarenai.com",
    },
    educationalLevel: "beginner",
    numberOfQuestions: selfCheckQuestions.length,
    datePublished: "2026-03-12",
    inLanguage: "en-US",
  };
}

function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I check my AI visibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the Miaren AI Visibility Score tool to answer 10 yes/no questions about your brand's presence across three diagnostic signals: Can AI find you (schema markup, content structure, crawler access), Can AI trust you (entity consistency, directory listings, Google Business Profile), and Can AI quote you (AI search mentions, third-party citations, original research). The tool gives you an instant score estimate. For a full diagnostic, a professional AI Visibility Audit tests 25+ real queries across ChatGPT, Perplexity, Gemini, and Copilot.",
        },
      },
      {
        "@type": "Question",
        name: "What is a good AI visibility score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI visibility score above 75% indicates a strong foundation where your brand likely appears in AI search responses. Scores between 40-74% mean you have some signals in place but gaps limiting AI citations. Below 40% means AI engines likely have low confidence in your entity and a structured approach across all three signals (findability, trust, authority) is recommended.",
        },
      },
      {
        "@type": "Question",
        name: "What are the three signals for AI visibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `The three diagnostic signals are: ${Object.values(signalLabels)
            .map((s) => `${s.title} — ${s.description}`)
            .join(" ")} This framework was developed by Mia Cheraghian, PhD, founder of Miaren AI.`,
        },
      },
    ],
  };
}

export default function SelfCheckPage() {
  const quizSchema = getSelfCheckSchema();
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://miarenai.com" },
    { name: "AI Visibility Score", url: "https://miarenai.com/ai-visibility-score" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-soft-white pt-16 pb-14 md:pt-28 md:pb-20 overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-teal/8 border border-teal/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-teal uppercase">
              Free Tool
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-5 tracking-tight">
            How visible is your brand to{" "}
            <span className="text-gradient">AI search?</span>
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed max-w-2xl">
            Answer 10 questions to get an instant estimate of your AI visibility
            across the{" "}
            <a href="/methodology" className="text-teal hover:underline">
              three diagnostic signals
            </a>
            . Takes about 2 minutes.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="relative bg-navy py-16 md:py-20 overflow-hidden">
        <NodeNetwork opacity={0.15} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <SelfCheckTool />
        </div>
      </section>

      {/* What This Measures */}
      <section className="relative bg-soft-white py-16 md:py-20 overflow-hidden">
        <NodeNetwork opacity={0.15} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-3">// WHAT THIS MEASURES</p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 tracking-tight">
            The three signals AI engines evaluate
          </h2>
          <div className="space-y-4">
            {(["find", "trust", "quote"] as const).map((signal, i) => {
              const label = signalLabels[signal];
              const count = selfCheckQuestions.filter(
                (q) => q.signal === signal
              ).length;
              return (
                <div key={signal} className="flex items-start gap-4 glass-card p-5">
                  <span className="w-8 h-8 rounded-full bg-teal text-navy text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-navy">{label.title}</p>
                    <p className="text-sm text-warm-gray mt-1">
                      {label.description}
                    </p>
                    <p className="text-xs text-warm-gray mt-1 font-mono">
                      {count} questions in this signal
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-warm-gray mt-6">
            This tool provides a directional estimate. For a comprehensive
            analysis with real AI query testing, see our{" "}
            <a href="/services" className="text-teal hover:underline">
              AI Visibility Audit
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
