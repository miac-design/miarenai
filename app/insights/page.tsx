"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, categories, type BlogCategory } from "@/lib/blog-data";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<
    BlogCategory | "All"
  >("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <>
      <section className="bg-soft-white bg-node-network pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">// INSIGHTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-10">
            Research, frameworks, and field notes on{" "}
            <span className="text-teal">AI visibility.</span>
          </h1>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("All")}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeCategory === "All"
                  ? "bg-teal text-navy border-teal font-medium"
                  : "border-gray-200 text-warm-gray hover:border-gray-400"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-teal text-navy border-teal font-medium"
                    : "border-gray-200 text-warm-gray hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured + grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured article */}
            {activeCategory === "All" && featured && (
              <div className="md:col-span-2 bg-navy rounded-xl p-8 md:p-10 flex flex-col justify-end min-h-[320px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono bg-teal text-navy px-2.5 py-1 rounded">
                    {featured.category.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono bg-teal/20 text-teal px-2.5 py-1 rounded">
                    START HERE
                  </span>
                  <span className="text-xs text-gray-400 ml-auto font-mono">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {featured.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {featured.description}
                </p>
                <Link
                  href={`/insights/${featured.slug}`}
                  className="text-teal text-sm font-medium inline-flex items-center gap-1 hover:underline"
                >
                  Read article →
                </Link>
              </div>
            )}

            {/* Article cards */}
            {(activeCategory === "All" ? rest.slice(0, 1) : []).concat(
              activeCategory !== "All" ? filtered : rest.slice(1)
            ).map((post) => (
              <div key={post.slug} className="glass-card p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded ${
                      post.category === "GEO 101"
                        ? "bg-teal/10 text-teal"
                        : post.category === "Deep Dive"
                        ? "bg-navy/10 text-navy"
                        : post.category === "Research"
                        ? "bg-navy/10 text-navy"
                        : post.category === "How-To"
                        ? "bg-teal/10 text-teal"
                        : "bg-navy/10 text-navy"
                    }`}
                  >
                    {post.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-warm-gray font-mono ml-auto">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-warm-gray font-mono">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-4 flex-1">
                  {post.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="text-teal text-sm font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Want to check your AI visibility?
          </h2>
          <p className="mt-4 text-warm-gray text-lg">
            Get a research-backed audit of your brand&apos;s presence across AI
            search systems.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get Your Free Audit →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
