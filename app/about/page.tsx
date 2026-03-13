import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";

export const metadata: Metadata = {
  title: "About Miaren AI | Founded by Mia Cheraghian, PhD",
  description:
    "Miaren AI studies how organizations become discoverable and recommended in AI-powered search systems. Founded by Mia Cheraghian, PhD, with a background in UX research and market research.",
  alternates: {
    canonical: "https://miarenai.com/about",
  },
  openGraph: {
    title: "About Miaren AI | Founded by Mia Cheraghian, PhD",
    description:
      "Studying how AI-powered search systems interpret and recommend organizations. Founded by Mia Cheraghian, PhD.",
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
  jobTitle: "Founder",
  worksFor: { "@type": "Organization", name: "Miaren AI" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Texas Tech University",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "PhD, Tourism, Hospitality & Retail Management",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "AI Visibility Researcher",
  },
  mainEntityOfPage: "https://miarenai.com/about",
  knowsAbout: [
    "Generative Engine Optimization",
    "AI Visibility",
    "AI Search Optimization",
    "GEO",
    "AI visibility methodology",
  ],
  description:
    "PhD researcher and founder of Miaren AI. Studies how AI-powered search systems interpret, reference, and recommend organizations. Background in UX research and market research.",
  sameAs: ["https://www.linkedin.com/in/mia-cheraghian/"],
  url: "https://miarenai.com/about",
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
      <section className="relative bg-soft-white pt-12 pb-12 md:pt-20 md:pb-20 overflow-hidden">
        <NodeNetwork opacity={0.25} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// THE COMPANY</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            About <span className="text-teal">Miaren AI</span>
          </h1>

          <div className="space-y-5 text-warm-gray text-lg leading-relaxed">
            <p>
              AI is changing how organizations are discovered. When someone asks
              ChatGPT, Perplexity, or Google AI Overviews for a recommendation,
              those systems are making citation decisions based on how well they
              understand each organization. Most organizations have no visibility
              into that process.
            </p>
            <p>
              The name Miaren combines Mia + Ren (renaissance) + AI. It means
              AI Renaissance. We founded Miaren AI to study this emerging
              information layer: how AI systems retrieve, interpret, and
              reference organizations across the internet.
            </p>
            <p>
              Our work focuses on{" "}
              <Link
                href="/geo-vs-seo"
                className="text-teal hover:underline"
              >
                Generative Engine Optimization
              </Link>{" "}
              — understanding the signals that AI systems evaluate when deciding
              who to cite. We apply research-based analysis to help organizations
              understand their AI visibility and how to improve it.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-down bg-navy" />

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
              priority
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
              I study how organizations become discoverable and trusted in
              AI-powered search systems like ChatGPT, Perplexity, and Google AI
              Overviews. My work focuses on AI visibility, generative search,
              and information architecture for AI systems.
            </p>
            <p>
              Drawing on a background in UX research and market research, I
              analyze how AI assistants interpret and reference organizations
              across the internet. My doctoral research at Texas Tech University
              explored how emerging technology shapes user behavior — specifically,
              how smart glasses can reduce travel hesitation for people with
              disabilities. That lens of studying how people find and interpret
              information carries directly into how I approach AI search systems.
            </p>
            <p>
              As a Senior Researcher at Rackspace Technology, I apply research
              methodologies to understand AI systems at scale. As Director of
              Strategic Partnerships & Marketing at{" "}
              <a
                href="https://austinaihub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                Austin AI Hub
              </a>
              , I work to connect underserved communities to AI opportunities.
              Through Miaren AI, I developed the{" "}
              <Link
                href="/methodology"
                className="text-teal hover:underline"
              >
                three-signal diagnostic methodology
              </Link>{" "}
              for understanding how AI systems decide who to cite.
            </p>
            <p>
              This is an emerging field. I don&apos;t claim decades of expertise
              in it — nobody can. What I bring is a research-driven approach
              to understanding a new information layer that is forming right now.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-up bg-soft-white" />

      {/* ============================================= */}
      {/* Section 3: Credentials                        */}
      {/* ============================================= */}
      <section className="relative py-12 md:py-16 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.15} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// CREDENTIALS</p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "PhD, Texas Tech University (Tourism, Hospitality & Retail Management)",
              "Senior Researcher, Rackspace Technology",
              "Director of Strategic Partnerships & Marketing, Austin AI Hub (501(c)(3) nonprofit)",
              "Creator of the three-signal diagnostic methodology for AI visibility",
              "Background in UX research and market research methods",
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

      <div className="section-divider-down bg-navy" />

      {/* ============================================= */}
      {/* Section 3b: Publications & Research            */}
      {/* ============================================= */}
      <section className="relative bg-navy py-12 md:py-16 overflow-hidden">
        <NodeNetwork opacity={0.15} color="0, 212, 170" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="section-label mb-6">// PUBLICATIONS & RESEARCH</p>

          {/* Dissertation */}
          <div className="bg-white/5 border border-teal/30 rounded-xl p-5 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-navy bg-teal rounded px-2 py-0.5">DISSERTATION</span>
              <span className="text-xs text-gray-400">2022</span>
            </div>
            <p className="text-base text-white font-medium mb-1">
              Making Tourism Accessible Through Wearable Technology
            </p>
            <p className="text-xs text-gray-400 mb-2">
              Texas Tech University. Quantitative research on using smart glasses to make travel experiences accessible for people with travel hesitation and disabilities.
            </p>
            <a
              href="https://ttu-ir.tdl.org/items/5ce7d88a-66ff-481f-86ee-627a474cad61"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal text-xs font-medium hover:underline"
            >
              View Research →
            </a>
          </div>

          {/* Book Chapter */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-navy bg-teal rounded px-2 py-0.5">BOOK CHAPTER</span>
              <span className="text-xs text-gray-400">2025</span>
            </div>
            <p className="text-base text-white font-medium mb-1">
              Ethical AI Storytelling in Volunteer Tourism: Code Meets Compassion
            </p>
            <p className="text-xs text-gray-400 mb-2">
              Published in peer-reviewed academic volume by IGI Global. Research conducted at Texas Tech University.
            </p>
            <a
              href="https://www.igi-global.com/chapter/ethical-ai-storytelling-in-volunteer-tourism/395307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal text-xs font-medium hover:underline"
            >
              Read on IGI Global →
            </a>
          </div>

          {/* Journal Papers */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-teal">JOURNAL</span>
                <span className="text-xs text-gray-400">2026 · Under Review</span>
              </div>
              <p className="text-sm text-white font-medium mb-1">
                Wearing Your Destination: Smart Glasses for Accessible Tourism
              </p>
              <p className="text-xs text-gray-400">
                Journal of Quality Assurance in Hospitality &amp; Tourism. Revised submission.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-teal">JOURNAL</span>
                <span className="text-xs text-gray-400">2026 · Under Review</span>
              </div>
              <p className="text-sm text-white font-medium mb-1">
                AI-Generated Review Summaries and Decision Making
              </p>
              <p className="text-xs text-gray-400">
                Journal of Hospitality and Tourism Technology.
              </p>
            </div>
          </div>

          {/* Conference Presentations */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-white bg-teal/80 rounded px-2 py-0.5">CONFERENCE POSTER</span>
                <span className="text-xs text-gray-400">2019</span>
              </div>
              <p className="text-sm text-white font-medium mb-1">
                Smart Airbnb: The Importance of Smart Technology and Its Effect on Booking Intention
              </p>
              <p className="text-xs text-gray-400">
                Graduate Conference of Hospitality &amp; Tourism Management, Las Vegas.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-white bg-teal/80 rounded px-2 py-0.5">CONFERENCE PAPER</span>
                <span className="text-xs text-gray-400">2020</span>
              </div>
              <p className="text-sm text-white font-medium mb-1">
                Negative Online Reviews of Hotel Green Practices and Consumer Purchase Intention
              </p>
              <p className="text-xs text-gray-400">
                25th Annual Graduate Education &amp; Graduate Student Research Conference, Las Vegas.
              </p>
            </div>
          </div>

          {/* Peer Reviewer */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-xs font-mono text-teal mb-2">PEER REVIEWER</p>
            <p className="text-sm text-white font-medium mb-1">
              Academic peer reviewer
            </p>
            <p className="text-xs text-gray-400">
              Reviews research manuscripts in hospitality, technology adoption, and user experience.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-up bg-soft-white" />

      {/* ============================================= */}
      {/* Section 3c: Featured & Affiliated              */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">// AFFILIATED WITH</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                name: "Texas Tech University",
                role: "PhD, Doctoral Researcher",
                type: "R1 Research Institution",
              },
              {
                name: "Rackspace Technology",
                role: "Senior Researcher",
                type: "Enterprise Technology",
              },
              {
                name: "Austin AI Hub",
                role: "Director, Strategic Partnerships",
                type: "501(c)(3) Nonprofit",
              },
            ].map((org) => (
              <div key={org.name} className="glass-card p-5 text-center">
                <p className="text-sm font-bold text-navy">{org.name}</p>
                <p className="text-xs text-teal mt-1">{org.role}</p>
                <p className="text-xs text-warm-gray mt-0.5">{org.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider-down bg-navy" />

      {/* ============================================= */}
      {/* Section 4: CTA                                */}
      {/* ============================================= */}
      <section className="relative bg-navy py-12 md:py-16 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Interested in working together?
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
