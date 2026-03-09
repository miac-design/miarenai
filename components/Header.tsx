"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors ${isActive("/services")
              ? "text-navy"
              : "text-warm-gray hover:text-navy"
              }`}
          >
            Services
          </Link>
          <Link
            href="/exact-framework"
            className={`text-sm font-medium transition-colors ${isActive("/exact-framework")
              ? "text-navy"
              : "text-warm-gray hover:text-navy"
              }`}
          >
            EXACT Framework
          </Link>
          <Link
            href="/geo-vs-seo"
            className={`text-sm font-medium transition-colors ${isActive("/geo-vs-seo")
              ? "text-navy"
              : "text-warm-gray hover:text-navy"
              }`}
          >
            GEO vs SEO
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${isActive("/about")
              ? "text-navy"
              : "text-warm-gray hover:text-navy"
              }`}
          >
            About
          </Link>
          <Link
            href="/faq"
            className={`text-sm font-medium transition-colors ${isActive("/faq")
              ? "text-navy"
              : "text-warm-gray hover:text-navy"
              }`}
          >
            FAQ
          </Link>

          <Link href="/contact" className="btn-primary text-sm !py-2 !px-5">
            Get Your Free Audit
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
          <Link href="/services" className="block text-sm font-medium text-navy" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/exact-framework" className="block text-sm font-medium text-navy" onClick={() => setMobileOpen(false)}>EXACT Framework</Link>
          <Link href="/geo-vs-seo" className="block text-sm font-medium text-navy" onClick={() => setMobileOpen(false)}>GEO vs SEO</Link>
          <Link href="/about" className="block text-sm font-medium text-navy" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/faq" className="block text-sm font-medium text-navy" onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link href="/contact" className="btn-primary text-sm !py-2 w-full justify-center" onClick={() => setMobileOpen(false)}>Get Your Free Audit</Link>
        </div>
      )}
    </header>
  );
}
