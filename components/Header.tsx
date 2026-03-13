"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/services", label: "Expertise" },
  { href: "/methodology", label: "Methodology" },
  { href: "/research", label: "Research" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-soft-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/40"
          : "bg-soft-white/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0 group">
          <span className="text-xl font-bold tracking-tight text-navy transition-colors">
            MIAREN
          </span>
          <span className="text-sm font-bold text-navy bg-teal rounded-md px-1.5 py-0.5 transition-shadow group-hover:shadow-md group-hover:shadow-teal/20">
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
              className={`text-sm font-medium transition-colors relative ${
                isActive(item.href)
                  ? "text-navy after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-teal after:rounded-full"
                  : "text-warm-gray hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/ai-visibility-score"
            className="text-sm font-medium text-teal border border-teal/40 rounded-full px-4 py-2 hover:bg-teal hover:text-navy transition-all hover:shadow-md hover:shadow-teal/15"
          >
            AI Visibility Score
          </Link>
          <Link href="/contact" className="btn-primary text-sm !py-2 !px-5">
            Connect
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
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
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "text-teal bg-teal/5"
                  : "text-navy hover:bg-gray-50"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <Link
              href="/ai-visibility-score"
              className="block text-sm font-medium text-teal border border-teal/40 rounded-xl px-4 py-2.5 text-center hover:bg-teal hover:text-navy transition-all"
              onClick={() => setMobileOpen(false)}
            >
              AI Visibility Score
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm !py-2.5 w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
