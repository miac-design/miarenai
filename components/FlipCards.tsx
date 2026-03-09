"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── Card Data ─── */

interface CardData {
    frontTitle: string;
    frontText: string;
    backLetter: string;
    backLabel: string;
    backText: string;
    signalId: string;
    tagLabel: string;
}

const cards: CardData[] = [
    {
        frontTitle: "The Bowl",
        frontText: "Without a solid bowl, the food falls apart.",
        backLetter: "T",
        backLabel: "T — Technical Infrastructure",
        backText:
            "Server, code, schema markup, site speed. If AI crawlers can't read your site, nothing else matters. This is the plumbing that holds everything together.",
        signalId: "signal-t",
        tagLabel: "Technical Infrastructure",
    },
    {
        frontTitle: "What's Inside",
        frontText:
            "The actual food. The substance. The reason anyone comes back.",
        backLetter: "C",
        backLabel: "C — Content Structure",
        backText:
            "Answers, structured information, Q&A content. This is what AI engines 'eat' and decide to cite. A beautiful bowl with nothing inside? AI skips right past it.",
        signalId: "signal-c",
        tagLabel: "Content Structure",
    },
    {
        frontTitle: "The Name on Every Sign",
        frontText:
            "Same name on the door, on Google Maps, on Yelp. No confusion.",
        backLetter: "E",
        backLabel: "E — Entity Consistency",
        backText:
            "Your brand information must be identical everywhere AI looks. If LinkedIn says one thing and your website says another, AI loses confidence in citing you.",
        signalId: "signal-e",
        tagLabel: "Entity Consistency",
    },
    {
        frontTitle: "In Every Food Guide",
        frontText: "A restaurant nobody lists is a restaurant nobody finds.",
        backLetter: "X",
        backLabel: "X — Cross-Platform Presence",
        backText:
            "AI cross-references LinkedIn, directories, news articles, event platforms. If you only exist on your own website, you're missing the signals that build AI confidence.",
        signalId: "signal-x",
        tagLabel: "Cross-Platform Presence",
    },
    {
        frontTitle: "Others Recommending You",
        frontText: "The critic asks: who else says this place is good?",
        backLetter: "A",
        backLabel: "A — Authority Signals",
        backText:
            "Third-party validation from trusted sources. News articles, reviews, partnerships. The hardest signal to build. The most durable once you have it.",
        signalId: "signal-a",
        tagLabel: "Authority Signals",
    },
];

/* ─── Icons (inline SVG, monoline, consistent 2px stroke) ─── */

function BowlIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Bowl body */}
            <path d="M12 32c0 14 10 22 24 22s24-8 24-22" />
            {/* Bowl rim */}
            <path d="M8 32h56" />
            {/* Steam wisps */}
            <path d="M30 24c0-4 4-6 2-10" />
            <path d="M36 22c0-4 4-6 2-10" />
            <path d="M42 24c0-4 4-6 2-10" />
        </svg>
    );
}

function UtensilsIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Fork */}
            <path d="M22 12v14" />
            <path d="M18 12v8c0 3.3 1.8 6 4 6s4-2.7 4-6v-8" />
            <path d="M22 26v22" />
            {/* Knife */}
            <path d="M50 12v36" />
            <path d="M50 12c-6 0-8 6-8 12s2 8 8 8" />
        </svg>
    );
}

function StorefrontIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Building */}
            <rect x="16" y="28" width="40" height="28" rx="2" />
            {/* Awning */}
            <path d="M12 28l4-12h40l4 12" />
            {/* Door */}
            <rect x="30" y="42" width="12" height="14" />
            {/* Sign */}
            <line x1="22" y1="34" x2="28" y2="34" />
            <line x1="22" y1="37" x2="26" y2="37" />
            {/* Map pin (small, to the right) */}
            <circle cx="56" cy="18" r="4" />
            <path d="M56 22l0 4" />
        </svg>
    );
}

function BookOpenIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Left page */}
            <path d="M36 20c-6-4-14-4-18-2v30c4-2 12-2 18 2" />
            {/* Right page */}
            <path d="M36 20c6-4 14-4 18-2v30c-4-2-12-2-18 2" />
            {/* Spine */}
            <line x1="36" y1="20" x2="36" y2="50" />
            {/* Text lines left */}
            <line x1="24" y1="28" x2="30" y2="28" />
            <line x1="24" y1="32" x2="32" y2="32" />
            <line x1="24" y1="36" x2="30" y2="36" />
            {/* Text lines right */}
            <line x1="42" y1="28" x2="48" y2="28" />
            <line x1="40" y1="32" x2="48" y2="32" />
            <line x1="42" y1="36" x2="48" y2="36" />
        </svg>
    );
}

function StarBubbleIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Speech bubble */}
            <path d="M20 16h32a4 4 0 014 4v20a4 4 0 01-4 4H38l-6 8-2-8h-10a4 4 0 01-4-4V20a4 4 0 014-4z" />
            {/* Star inside */}
            <path d="M36 24l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6L31.1 39l.9-5.3-4-3.9 5.5-.8z" />
        </svg>
    );
}

const iconComponents = [BowlIcon, UtensilsIcon, StorefrontIcon, BookOpenIcon, StarBubbleIcon];

/* ─── Flip Card Component ─── */

function FlipCard({
    card,
    index,
    visible,
    autoFlipped,
}: {
    card: CardData;
    index: number;
    visible: boolean;
    autoFlipped: boolean;
}) {
    const [tapped, setTapped] = useState(false);
    const Icon = iconComponents[index];

    const isFlipped = autoFlipped || tapped;

    return (
        <div
            className={`flip-card ${visible ? "flip-card-visible" : ""} ${isFlipped ? "flip-card-flipped" : ""}`}
            style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
            onClick={() => setTapped((t) => !t)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setTapped((t) => !t);
                }
            }}
            aria-label={`${card.frontTitle}: ${card.backLabel}`}
        >
            <div className="flip-card-inner">
                {/* ══════ FRONT ══════ */}
                <div className="flip-card-front">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <Icon />
                    </div>
                    <div className="text-center flex-1 flex flex-col">
                        <h3 className="text-teal font-bold text-lg mb-2">
                            {card.frontTitle}
                        </h3>
                        <p className="text-[#9BA3AF] text-sm leading-relaxed">
                            {card.frontText}
                        </p>
                    </div>
                    <div className="mt-auto pt-3">
                        <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                            <p className="text-[11px] text-gray-500 md:hidden tap-indicator">
                                Tap to flip →
                            </p>
                            <p className="text-[11px] text-gray-500 hidden md:block">
                                Hover to flip
                            </p>
                            <svg
                                className="w-4 h-4 text-teal/40"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* ══════ BACK ══════ */}
                <div className="flip-card-back">
                    {/* Watermark letter */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
                        <span className="text-[140px] font-black text-[#0A1628] opacity-[0.12] leading-none">
                            {card.backLetter}
                        </span>
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                                {card.backLabel}
                            </h3>
                            <p className="text-[#0A1628]/75 text-sm leading-relaxed">
                                {card.backText}
                            </p>
                        </div>
                        <a
                            href={`#${card.signalId}`}
                            className="self-start mt-4 text-[11px] font-semibold border-2 border-[#0A1628]/30 text-[#0A1628] px-3 py-1 rounded-full hover:bg-[#0A1628]/10 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {card.tagLabel} ↑
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Grid with Intersection Observer ─── */

export default function FlipCards() {
    const gridRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [autoFlipStates, setAutoFlipStates] = useState<boolean[]>(
        cards.map(() => false)
    );
    const hasTriggered = useRef(false);

    const triggerAutoFlip = useCallback(() => {
        if (hasTriggered.current) return;
        hasTriggered.current = true;

        // Stagger flip each card
        cards.forEach((_, i) => {
            // Flip to back
            setTimeout(() => {
                setAutoFlipStates((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                });
            }, 1000 + i * 500);

            // Flip back to front after 2s
            setTimeout(() => {
                setAutoFlipStates((prev) => {
                    const next = [...prev];
                    next[i] = false;
                    return next;
                });
            }, 3000 + i * 500);
        });
    }, []);

    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    triggerAutoFlip();
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [triggerAutoFlip]);

    return (
        <div
            ref={gridRef}
            className="flex flex-wrap justify-center gap-5 md:gap-6 max-w-[960px] mx-auto"
        >
            {cards.map((card, i) => (
                <FlipCard
                    key={card.signalId}
                    card={card}
                    index={i}
                    visible={visible}
                    autoFlipped={autoFlipStates[i]}
                />
            ))}
        </div>
    );
}
