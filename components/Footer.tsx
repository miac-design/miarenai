import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white">MIAREN</span>
              <span className="text-xs font-normal text-teal border border-teal/40 rounded px-1.5 py-0.5">AI</span>
            </Link>
            <p className="mt-3 text-sm italic text-warm-gray">Be found where it matters next.</p>
          </div>
          <div className="flex gap-16">
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="block text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link href="/insights" className="block text-sm text-gray-400 hover:text-white transition-colors">Insights</Link>
              <Link href="/insights/glossary" className="block text-sm text-gray-400 hover:text-white transition-colors">GEO Glossary</Link>
              <Link href="/faq" className="block text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="space-y-2.5">
              <a href="https://www.linkedin.com/company/miaren-ai/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:hello@miarenai.com" className="block text-sm text-gray-400 hover:text-white transition-colors">hello@miarenai.com</a>
              <a href="https://calendly.com/c2018-mia/chat-with-mia" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">Book a Call</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Miaren AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
