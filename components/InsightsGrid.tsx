"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, categories, type BlogCategory } from "@/lib/blog-data";

export default function InsightsGrid() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);
  const featured = blogPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => setActiveCategory("All")}
          className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${activeCategory === "All" ? "bg-teal text-navy border-teal font-medium" : "border-gray-200 text-warm-gray hover:border-gray-400"}`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${activeCategory === cat ? "bg-teal text-navy border-teal font-medium" : "border-gray-200 text-warm-gray hover:border-gray-400"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Featured */}
        {activeCategory === "All" && featured && (
          <article className="md:col-span-2 bg-navy rounded-xl p-8 flex flex-col justify-end min-h-[280px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono bg-teal text-navy px-2.5 py-1 rounded">{featured.category.toUpperCase()}</span>
              <span className="text-xs font-mono bg-teal/20 text-teal px-2.5 py-1 rounded">START HERE</span>
              <span className="text-xs text-gray-400 ml-auto font-mono">
                {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              <span className="text-xs text-gray-400 font-mono">{featured.readTime}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{featured.title}</h2>
            <p className="text-gray-400 leading-relaxed mb-5">{featured.description}</p>
            <Link href={`/insights/${featured.slug}`} className="text-teal text-sm font-medium inline-flex items-center gap-1 hover:underline">
              Read article →
            </Link>
          </article>
        )}

        {(() => {
          const posts = activeCategory === "All"
            ? [rest.slice(0, 1), rest.slice(1)].flat()
            : filtered;
          return posts.map((post, i) => {
            // Make last orphan card span 2 cols if odd count and in 3-col grid
            const isLastOrphan = i === posts.length - 1 && posts.length % 3 === 1;
            return (
              <article key={post.slug} className={`glass-card p-6 flex flex-col ${isLastOrphan ? "md:col-span-2" : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded ${post.category === "GEO 101" || post.category === "How-To" ? "bg-teal/10 text-teal" : "bg-navy/10 text-navy"}`}>
                    {post.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-warm-gray font-mono ml-auto">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="text-xs text-warm-gray font-mono">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{post.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-4 flex-1">{post.description}</p>
                <div className="border-t border-gray-100 pt-3">
                  <Link href={`/insights/${post.slug}`} className="text-teal text-sm font-medium inline-flex items-center gap-1 hover:underline">
                    Read more →
                  </Link>
                </div>
              </article>
            );
          });
        })()}
      </div>
    </>
  );
}
