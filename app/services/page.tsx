import type { Metadata } from "next";
import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GEO Services — AI Visibility Audits, Blueprints & Workshops",
  description: "GEO services that get your brand found in AI search. The EXACT Audit, GEO Blueprint, and GEO Workshop — bounded, high-impact engagements backed by PhD research.",
  openGraph: {
    title: "GEO Services — Miaren AI",
    description: "Bounded, high-impact GEO engagements. The EXACT Audit, GEO Blueprint, and GEO Workshop.",
  },
};

export default function ServicesPage() {
  const serviceSchema = getServiceSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero */}
      <section className="relative bg-soft-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <NodeNetwork opacity={0.3} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">// GEO SERVICES</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Visible. Citable. <span className="text-teal">Recommendable.</span>
          </h1>
          <p className="mt-5 text-warm-gray text-lg max-w-xl">
            GEO services that get your brand found in AI search. Because traditional SEO alone is no longer enough.
          </p>
        </div>
      </section>

      {/* Differentiator */}
      <section className="relative bg-navy py-14 md:py-18 overflow-hidden">
        <NodeNetwork opacity={0.2} color="0, 212, 170" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="teal-border-left mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              The GEO field is full of consultants. There are no researchers. <span className="text-teal">Until now.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="section-label mb-2 !text-warm-gray">// THE PROBLEM</p>
              <h3 className="text-xl font-bold text-gray-400 mb-3">What everyone else is selling</h3>
              <p className="text-gray-500 leading-relaxed">Most GEO advice comes from agencies running content sprints and calling it strategy. They observe what works, write 40 articles about it, and charge you for the guesswork. There&apos;s no methodology behind it: just volume.</p>
            </div>
            <div>
              <p className="section-label mb-2">// THE DIFFERENCE</p>
              <h3 className="text-xl font-bold text-white mb-3">What Miaren AI brings</h3>
              <p className="text-gray-400 leading-relaxed">Mia Cheraghian is a PhD researcher studying how AI reshapes discovery for underserved communities. The EXACT Framework, Miaren AI&apos;s proprietary audit methodology, wasn&apos;t built from blog posts. It was built from research. When you work with Miaren AI, you get a diagnosis, not a deliverable.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs font-mono tracking-wider text-warm-gray uppercase">
            <span>PhD Researcher</span><span className="text-teal">·</span>
            <span>EXACT Framework Creator</span><span className="text-teal">·</span>
            <span>Austin AI Hub</span><span className="text-teal">·</span>
            <span>Rackspace Technology</span>
          </div>
        </div>
      </section>

      {/* Problem Cards with SVG icons */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">// THE PROBLEM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Why traditional SEO isn&apos;t enough</h2>
          <p className="text-warm-gray text-lg mb-10 max-w-2xl">AI engines don&apos;t just crawl and rank. They synthesize. The rules of visibility have fundamentally changed.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "AI synthesizes, not ranks", description: "AI engines pull answers from multiple sources. Ranking #1 on Google doesn't guarantee you'll be cited.", icon: <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
              { title: "Different authority signals", description: "The trust signals that drive AI recommendations are fundamentally different from traditional search ranking factors.", icon: <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
              { title: "Machine readability matters", description: "Your content must be structured for AI parsing, not just human readers. Schema markup, Q&A formats, and clear hierarchy are essential.", icon: <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> },
              { title: "Third-party validation is critical", description: "Entity consistency and citations from independent, trusted sources matter more than ever for AI citability.", icon: <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg> },
            ].map((card) => (
              <div key={card.title} className="glass-card p-7 border-l-4 border-teal/30">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-warm-gray leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers — aligned CTAs */}
      <section className="relative py-16 md:py-24 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.15} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">What you get</h2>
            <p className="mt-3 text-warm-gray text-lg">Bounded, high-impact engagements. No retainers. You get the expertise, and your team walks away equipped.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Audit */}
            <div className="glass-card p-7 border-2 border-teal/30 flex flex-col">
              <span className="inline-block bg-teal text-navy text-xs font-bold px-3 py-1 rounded mb-4 self-start">START HERE</span>
              <h3 className="text-xl font-bold text-navy mb-1">The EXACT Audit</h3>
              <p className="text-sm text-warm-gray italic mb-3">Know exactly where you stand in AI search.</p>
              <p className="text-sm text-warm-gray leading-relaxed mb-5">Your brand scored across every major AI platform using the proprietary EXACT Framework. We identify where you&apos;re visible, where you&apos;re invisible, and what your competitors are doing better.</p>
              <p className="text-xs font-mono tracking-wider text-navy uppercase mb-3">WHAT YOU GET</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["Full EXACT Framework diagnostic across 4 AI platforms", "AI Visibility Score with competitive benchmarking", "Gap analysis across all 5 signals", "Prioritized fix list with quick wins flagged", "Executive summary with strategic recommendations"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy"><svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Delivered in 5–7 business days
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center mt-auto">Get Your Audit →</Link>
            </div>
            {/* Blueprint */}
            <div className="glass-card p-7 flex flex-col">
              <span className="inline-block border border-gray-300 text-warm-gray text-xs font-medium px-3 py-1 rounded mb-4 self-start">MOST COMPREHENSIVE</span>
              <h3 className="text-xl font-bold text-navy mb-1">The GEO Blueprint</h3>
              <p className="text-sm text-warm-gray italic mb-3">Your custom roadmap to AI visibility.</p>
              <p className="text-sm text-warm-gray leading-relaxed mb-5">Built from your audit results. A complete strategy document your team or agency can execute. No guesswork, no generic advice.</p>
              <p className="text-xs font-mono tracking-wider text-navy uppercase mb-3">WHAT YOU GET</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["Custom content restructuring plan for AI readability", "Structured data (Schema.org) implementation roadmap", "Entity consistency audit and fix plan", "Authority-building priority list with specific tactics"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy"><svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Delivered in 2–3 weeks
              </div>
              <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="btn-dark w-full justify-center mt-auto">Book a Consultation →</a>
            </div>
            {/* Workshop */}
            <div className="glass-card p-7 flex flex-col">
              <span className="inline-block border border-gray-300 text-warm-gray text-xs font-medium px-3 py-1 rounded mb-4 self-start">FOR TEAMS</span>
              <h3 className="text-xl font-bold text-navy mb-1">The GEO Workshop</h3>
              <p className="text-sm text-warm-gray italic mb-3">Train your team to own AI visibility.</p>
              <p className="text-sm text-warm-gray leading-relaxed mb-5">A live, hands-on training session. Your team learns to run AI visibility audits, monitor citations, interpret results, and iterate.</p>
              <p className="text-xs font-mono tracking-wider text-navy uppercase mb-3">WHAT YOU GET</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["Live half-day training session (virtual or in-person)", "Full audit walkthrough using your actual brand", "Monitoring toolkit and templates your team keeps", "Recorded session for future onboarding"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy"><svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-teal mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Half-day session + 30 days support
              </div>
              <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="btn-dark w-full justify-center mt-auto">Schedule a Workshop →</a>
            </div>
          </div>
          <p className="text-center mt-8 text-warm-gray">
            Not sure which is right for you?{" "}
            <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="text-teal font-medium hover:underline">Start with a free 30-minute call →</a>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">How we work</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your brand, audience, and competitive landscape." },
              { num: "02", title: "Audit", desc: "Testing visibility across major AI platforms with proprietary methodology." },
              { num: "03", title: "Strategy", desc: "Research-backed roadmap tailored to your industry and goals." },
              { num: "04", title: "Implementation", desc: "Guidance and support through every optimization." },
            ].map((step) => (
              <div key={step.num}>
                <p className="text-3xl font-bold text-teal mb-2">{step.num}</p>
                <h3 className="text-lg font-bold text-navy mb-1">{step.title}</h3>
                <p className="text-sm text-warm-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-20 bg-soft-white overflow-hidden">
        <NodeNetwork opacity={0.2} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
            GEO isn&apos;t replacing SEO. It&apos;s the layer you&apos;re <span className="text-teal">missing on top of it.</span>
          </h2>
          <p className="mt-5 text-warm-gray text-lg">The brands that move now will own the AI search landscape.</p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary text-lg !px-8 !py-4">Get Your Free Audit →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
