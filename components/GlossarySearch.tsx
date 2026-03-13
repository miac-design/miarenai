"use client";

import { useState, useMemo } from "react";
import {
  GlossaryTerm,
  alphabet,
  getTermsByLetter,
} from "@/lib/glossary-data";

interface GlossarySearchProps {
  terms: GlossaryTerm[];
}

const categoryColors: Record<string, string> = {
  "Core GEO": "bg-teal/10 text-teal",
  "AI Platforms": "bg-navy/10 text-navy",
  Strategy: "bg-navy/10 text-navy",
  Measurement: "bg-coral/10 text-coral",
  Technical: "bg-teal/10 text-teal",
  "SEO Bridge": "bg-warm-gray/10 text-warm-gray",
};

export default function GlossarySearch({ terms }: GlossarySearchProps) {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const grouped = useMemo(() => getTermsByLetter(), []);

  const filteredGrouped = useMemo(() => {
    if (!search && !activeLetter) return grouped;

    const lowerSearch = search.toLowerCase();
    const result: Record<string, GlossaryTerm[]> = {};

    for (const [letter, letterTerms] of Object.entries(grouped)) {
      if (activeLetter && letter !== activeLetter) continue;

      const filtered = letterTerms.filter(
        (t) =>
          t.term.toLowerCase().includes(lowerSearch) ||
          t.definition.toLowerCase().includes(lowerSearch)
      );
      if (filtered.length > 0) result[letter] = filtered;
    }

    return result;
  }, [grouped, search, activeLetter]);

  const availableLetters = useMemo(
    () => new Set(Object.keys(grouped)),
    [grouped]
  );

  return (
    <div>
      {/* Alphabet bar */}
      <div className="flex flex-wrap gap-1 mb-6">
        {alphabet.map((letter) => {
          const available = availableLetters.has(letter);
          const isActive = activeLetter === letter;
          return (
            <button
              key={letter}
              onClick={() =>
                setActiveLetter(isActive ? null : available ? letter : null)
              }
              disabled={!available}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 ${
                isActive
                  ? "bg-teal text-navy font-bold"
                  : available
                  ? "text-navy hover:bg-gray-100"
                  : "text-gray-300 cursor-default"
              }`}
            >
              {letter}
            </button>
          );
        })}

        {/* Search */}
        <div className="ml-auto relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-gray"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveLetter(null);
            }}
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 w-full sm:w-48 transition-all"
          />
        </div>
      </div>

      {/* Terms */}
      <div className="space-y-12">
        {Object.entries(filteredGrouped)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([letter, letterTerms]) => (
            <div key={letter} id={`letter-${letter}`}>
              <h2 className="text-4xl font-bold text-navy mb-6">{letter}</h2>
              <div className="space-y-8">
                {letterTerms.map((term) => (
                  <div
                    key={term.term}
                    className="border-b border-gray-100 pb-8 last:border-0"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-navy">
                        {term.term}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          categoryColors[term.category] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {term.category}
                      </span>
                    </div>
                    <p className="text-warm-gray leading-relaxed">
                      {term.definition}
                    </p>
                    {term.insight && (
                      <p className="mt-3 text-teal text-sm italic">
                        → {term.insight}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {Object.keys(filteredGrouped).length === 0 && (
        <p className="text-center text-warm-gray py-12">
          No terms found matching your search.
        </p>
      )}
    </div>
  );
}
