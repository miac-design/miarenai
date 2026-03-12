import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white">MIAREN</span>
              <span className="text-xs font-normal text-teal border border-teal/40 rounded px-1.5 py-0.5">AI</span>
            </Link>
            <p className="mt-3 text-sm text-warm-gray leading-relaxed max-w-xs">
              AI visibility research and strategy. Studying how organizations become discoverable in AI-powered search.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/miaren-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="mailto:hello@miarenai.com"
                className="text-gray-500 hover:text-teal transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-teal mb-4">Navigate</h4>
            <div className="space-y-3">
              <Link href="/services" className="block text-sm text-gray-400 hover:text-white transition-colors">Expertise</Link>
              <Link href="/methodology" className="block text-sm text-gray-400 hover:text-white transition-colors">Methodology</Link>
              <Link href="/geo-vs-seo" className="block text-sm text-gray-400 hover:text-white transition-colors">GEO vs SEO</Link>
              <Link href="/geo-vs-seo" className="block text-sm text-gray-400 hover:text-white transition-colors">GEO vs SEO</Link>
              <Link href="/results" className="block text-sm text-gray-400 hover:text-white transition-colors">Case Studies</Link>
              <Link href="/about" className="block text-sm text-gray-400 hover:text-white transition-colors">About</Link>
            </div>
          </div>

          {/* Learn */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-teal mb-4">Learn</h4>
            <div className="space-y-3">
              <Link href="/research" className="block text-sm text-gray-400 hover:text-white transition-colors">Research</Link>
              <Link href="/insights" className="block text-sm text-gray-400 hover:text-white transition-colors">Insights</Link>
              <Link href="/insights/glossary" className="block text-sm text-gray-400 hover:text-white transition-colors">Glossary</Link>
              <Link href="/faq" className="block text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-teal mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/company/miaren-ai/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:hello@miarenai.com" className="block text-sm text-gray-400 hover:text-white transition-colors">hello@miarenai.com</a>
              <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">Book a Call</a>
              <Link href="/ai-visibility-score" className="block text-sm text-teal hover:text-white transition-colors font-medium">AI Visibility Score</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Miaren AI. All rights reserved.</p>
            <p className="text-xs text-gray-500">
              Research by Mia Cheraghian, PhD. Built on GEO research by Aggarwal et al. (2024).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
