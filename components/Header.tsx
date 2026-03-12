"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/services", label: "Expertise" },
  { href: "/methodology", label: "Methodology" },
  { href: "/geo-vs-seo", label: "GEO vs SEO" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-soft-white/90 backdrop-blur-md border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="text-xl font-bold tracking-tight text-navy">
            MIAREN
          </span>
          <span className="text-sm font-bold text-navy bg-teal rounded px-1.5 py-0.5">
            AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors ${isActive(item.href)
                ? "text-navy"
                : "text-warm-gray hover:text-navy"
                }`}
            >
              {item.label}
            </Link>
          ))}

          <Link href="/contact" className="btn-primary text-sm !py-2 !px-5">
            Connect
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="block text-sm font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm !py-2 w-full justify-center" onClick={() => setMobileOpen(false)}>Connect</Link>
        </div>
      )}
    </header>
  );
}
