"use client";

import { useState } from "react";

interface FaqAccordionProps {
  items: { question: string; answer: string }[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`glass-card overflow-hidden transition-all duration-300 ${
              isOpen ? "border-teal/20 shadow-md shadow-teal/5" : ""
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-teal/3 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-navy pr-4">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-teal shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 text-warm-gray leading-relaxed text-sm">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
