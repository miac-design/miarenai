"use client";

import { useState } from "react";

const signals = [
    {
        letter: "E",
        name: "Entity Consistency",
        description:
            "Your brand information must be identical across every platform AI looks at: website, LinkedIn, directories, review sites. AI engines cross-reference multiple sources to build confidence. If your description on LinkedIn says one thing and your website says another, AI has lower confidence and is less likely to cite you. Inconsistency kills AI confidence in citing you.",
    },
    {
        letter: "X",
        name: "Cross-Platform Presence",
        description:
            "Be visible across the platforms AI engines cross-reference. AI doesn't just look at your website. It cross-references LinkedIn, event platforms, news articles, industry directories, and more. If you only exist on your own domain, you're missing the signals that build AI confidence.",
    },
    {
        letter: "A",
        name: "Authority Signals",
        description:
            "Third-party validation from trusted sources tells AI your brand is credible. If the only source saying you're great is your own website, that's weak. If industry publications, review sites, and other trusted sources reference you, that's strong. This is the hardest signal to build and the most durable once you have it.",
    },
    {
        letter: "C",
        name: "Content Structure",
        description:
            "AI-readable content that directly answers questions. AI engines pull from content that provides clear, direct answers. Content with clear headings, Q&A format, and direct answers performs significantly better than marketing copy full of buzzwords. Lead with the answer.",
    },
    {
        letter: "T",
        name: "Technical Infrastructure",
        description:
            "Structured data (Schema.org markup) that helps AI engines parse your content. Without structured data, AI must infer meaning from unstructured text. With it, AI can directly parse your brand information, products, FAQs, and more. This is the behind-the-scenes plumbing that makes everything else work.",
    },
];

export default function ExactLetterAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            {/* Interactive letter buttons */}
            <div className="flex justify-center gap-3 md:gap-4 mb-10">
                {signals.map((signal, i) => (
                    <button
                        key={signal.letter}
                        onClick={() => setActiveIndex(i === activeIndex ? -1 : i)}
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold transition-all duration-300 cursor-pointer ${i === activeIndex
                            ? "bg-teal text-navy shadow-[0_10px_25px_rgba(0,212,170,0.35)] scale-110"
                            : "bg-[rgba(20,30,48,0.8)] text-warm-gray hover:bg-navy-light hover:text-white"
                            }`}
                        aria-label={`${signal.letter} — ${signal.name}`}
                        aria-expanded={i === activeIndex}
                    >
                        {signal.letter}
                    </button>
                ))}
            </div>

            {/* All content rendered in DOM for crawlers, visibility toggled for humans */}
            {signals.map((signal, i) => (
                <div
                    key={signal.letter}
                    id={`signal-${signal.letter.toLowerCase()}`}
                    className={`transition-all duration-500 overflow-hidden ${i === activeIndex
                        ? "max-h-[500px] opacity-100 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    // All content is in the DOM for crawlers regardless of visibility
                    aria-hidden={i !== activeIndex}
                >
                    <div className="bg-[rgba(20,30,48,0.6)] border border-white/10 rounded-xl p-7 md:p-9">
                        <p className="text-xs font-mono tracking-wider text-teal mb-3">
                            SIGNAL {i + 1} OF 5
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                            {signal.letter} &mdash; {signal.name}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            {signal.description}
                        </p>
                    </div>
                </div>
            ))}

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6">
                {signals.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex
                            ? "w-6 bg-teal"
                            : "w-1.5 bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Signal ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
