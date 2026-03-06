import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";

export const metadata: Metadata = {
  title: "About",
  description:
    "Miaren AI was founded by Mia Cheraghian, PhD — researcher, AI strategist, and creator of the EXACT Framework. One mission: making technology work for everyone.",
  alternates: {
    canonical: "https://miarenai.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-soft-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <NodeNetwork opacity={0.25} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Your brand&apos;s AI renaissance{" "}
            <span className="text-teal">starts here.</span>
          </h1>
          <p className="mt-5 text-warm-gray text-lg max-w-xl">
            AI is fundamentally reshaping how businesses are discovered,
            evaluated, and chosen. The companies that understand this shift
            early will define their industries for the next decade.
          </p>
        </div>
      </section>

      {/* Founder */}
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
                <p className="text-xs font-mono tracking-wider text-teal uppercase">Founder</p>
                <h2 className="text-2xl font-bold text-navy">Mia (Mahboubeh) Cheraghian</h2>
                <p className="text-sm text-warm-gray">Founder, Miaren AI</p>
              </div>
            </div>

            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Mia combines PhD-level research with applied AI strategy to help
                organizations adapt to structural shifts in digital discovery
                and competitive positioning.
              </p>
              <p>
                She noticed a critical gap: most companies had no idea how they
                appeared, or didn&apos;t appear, in AI-generated search results.
                Miaren AI was founded to bridge that gap.
              </p>
              <p>
                Actively involved with Austin AI Hub, Mia contributes to the
                growing community of AI practitioners and researchers shaping
                the future of AI-driven discovery.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["PhD, Texas Tech University", "Dir. of Partnerships & Marketing, Austin AI Hub", "Peer Reviewer", "30+ Brand Audits"].map((tag) => (
                <span key={tag} className="text-xs border border-teal/30 text-teal rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Three Chapters */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="section-label mb-3">// MY STORY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            One mission. Three <span className="text-teal">chapters.</span>
          </h2>
          <p className="text-warm-gray leading-relaxed max-w-3xl mb-10">
            It started with my doctoral research, using AI and smart glasses to
            make travel accessible for people who face barriers, including
            those with disabilities. Now, as AI reshapes how businesses are
            discovered, I&apos;m making sure small businesses and underserved
            communities aren&apos;t invisible to AI systems. Because when AI
            decides who gets recommended, the stakes aren&apos;t just commercial.
            They&apos;re about who gets a seat at the table.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { chapter: "Chapter 1", title: "PhD Research", focus: "Removing barriers", description: "Using smart glasses and AI to make travel accessible for people with travel hesitation, including people with disabilities. Research focused on removing barriers to experience through technology." },
              { chapter: "Chapter 2", title: "Austin AI Hub", focus: "Underserved communities", description: "Bringing AI education and accessibility to underserved communities in Austin. Building bridges between emerging technology and the people most often left out of the conversation." },
              { chapter: "Chapter 3", title: "Miaren AI", focus: "Businesses left behind", description: "Making GEO and AI visibility accessible to small businesses and underrepresented voices who can't compete with big tech. Because when AI decides who gets recommended, the stakes aren't just commercial." },
            ].map((ch) => (
              <div key={ch.chapter} className="glass-card p-7">
                <p className="text-xs font-mono tracking-wider text-teal uppercase mb-3">{ch.chapter}</p>
                <h3 className="text-lg font-bold text-navy mb-1">{ch.title}</h3>
                <p className="text-xs font-mono text-teal mb-3">Focus: {ch.focus}</p>
                <p className="text-sm text-warm-gray leading-relaxed">{ch.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-warm-gray italic text-center">
            The thread that ties it together: making technology work for everyone, not just those with resources.
          </p>
        </div>
      </section>

      {/* Name Etymology */}
      <section className="py-16 md:py-20 bg-soft-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-3">// THE NAME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">MIA + REN + AI</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-bold text-navy">MIA</p>
              <p className="text-sm text-warm-gray mt-2">The founder</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">REN</p>
              <p className="text-sm text-warm-gray mt-2">Renaissance, rebirth</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal">AI</p>
              <p className="text-sm text-warm-gray mt-2">The technology reshaping every industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-20 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.15} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">What guides us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Research First", description: "Every recommendation is backed by data. We measure before we advise." },
              { title: "Radical Clarity", description: "No jargon, no buzzwords. If we can't explain it simply, we don't understand it well enough." },
              { title: "Future-Facing", description: "Preparing for where the AI landscape is heading, not just where it is today." },
              { title: "Builder's Mentality", description: "We create frameworks and capability. We build independence, not dependency." },
              { title: "Visible Integrity", description: "We practice what we preach. Our own brand is optimized for AI visibility." },
            ].map((value) => (
              <div key={value.title} className="glass-card p-6">
                <h3 className="text-base font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-soft-white">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-teal-light border border-teal/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Ready to work together?</h2>
            <p className="mt-3 text-warm-gray">Let&apos;s discuss how GEO can transform your brand&apos;s AI visibility.</p>
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
