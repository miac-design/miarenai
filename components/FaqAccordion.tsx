"use client";

import { useState } from "react";

interface FaqAccordionProps {
  items: { question: string; answer: string }[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-base font-medium text-navy pr-4">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-warm-gray shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
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
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-5 text-warm-gray leading-relaxed text-sm">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
