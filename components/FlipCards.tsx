"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── Card Data ─── */

interface CardData {
    frontTitle: string;
    frontText: string;
    backLabel: string;
    backText: string;
    signalId: string;
    tagLabel: string;
}

const cards: CardData[] = [
    {
        frontTitle: "Clear Testimony",
        frontText:
            "A witness who gives clear, structured, direct answers gets heard. Mumble or ramble, and the investigator moves on to someone else.",
        backLabel: "Can AI find you?",
        backText:
            "Your content must be structured, crawlable, and readable by AI engines. Without structured data, clean heading hierarchy, and direct answers to real questions, AI doesn't know you exist. Lead with the answer. Be direct. Be parseable.",
        signalId: "signal-find",
        tagLabel: "Signal 1: Findability",
    },
    {
        frontTitle: "Consistent Story",
        frontText:
            "The investigator cross-references what you say with other sources. If your story changes depending on who asks, your credibility drops.",
        backLabel: "Can AI trust you?",
        backText:
            "Your brand information must be identical across every platform AI looks at. AI cross-references multiple sources to build confidence. If your description on LinkedIn says one thing and your website says another, AI loses confidence in citing you.",
        signalId: "signal-trust",
        tagLabel: "Signal 2: Trust",
    },
    {
        frontTitle: "Corroborating Sources",
        frontText:
            "The investigator doesn't take one witness at face value. They need independent sources confirming the same thing before they go on record.",
        backLabel: "Can AI quote you?",
        backText:
            "Third-party validation from trusted sources tells AI your brand is worth naming. If the only source saying you're great is your own website, that's weak. Independent publications, reviews, and references are what make AI confident enough to cite you.",
        signalId: "signal-quote",
        tagLabel: "Signal 3: Authority",
    },
];

/* ─── Icons (inline SVG, monoline, consistent 2px stroke) ─── */

function TestimonyIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Document/clipboard */}
            <rect x="20" y="14" width="32" height="44" rx="3" />
            {/* Clipboard clip */}
            <path d="M30 14v-2a6 6 0 0112 0v2" />
            {/* Text lines — structured, clear */}
            <line x1="28" y1="28" x2="44" y2="28" />
            <line x1="28" y1="34" x2="44" y2="34" />
            <line x1="28" y1="40" x2="38" y2="40" />
            {/* Checkmark */}
            <path d="M30 48l3 3 6-6" />
        </svg>
    );
}

function ConsistencyIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Three overlapping documents */}
            <rect x="24" y="10" width="28" height="36" rx="2" />
            <rect x="20" y="16" width="28" height="36" rx="2" />
            <rect x="16" y="22" width="28" height="36" rx="2" />
            {/* Lines on front doc */}
            <line x1="22" y1="32" x2="36" y2="32" />
            <line x1="22" y1="38" x2="36" y2="38" />
            <line x1="22" y1="44" x2="30" y2="44" />
            {/* Equals / match symbol */}
            <line x1="50" y1="38" x2="58" y2="38" />
            <line x1="50" y1="42" x2="58" y2="42" />
        </svg>
    );
}

function CorroborateIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Central node */}
            <circle cx="36" cy="36" r="6" />
            {/* Surrounding nodes */}
            <circle cx="18" cy="20" r="4" />
            <circle cx="54" cy="20" r="4" />
            <circle cx="18" cy="52" r="4" />
            <circle cx="54" cy="52" r="4" />
            <circle cx="36" cy="14" r="4" />
            {/* Connection lines */}
            <line x1="32" y1="31" x2="21" y2="23" />
            <line x1="40" y1="31" x2="51" y2="23" />
            <line x1="32" y1="41" x2="21" y2="49" />
            <line x1="40" y1="41" x2="51" y2="49" />
            <line x1="36" y1="30" x2="36" y2="18" />
        </svg>
    );
}

const iconComponents = [TestimonyIcon, ConsistencyIcon, CorroborateIcon];

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
            aria-label={`${card.frontTitle}: ${card.backLabel}. ${isFlipped ? "Showing details." : "Activate to see details."}`}
            aria-expanded={isFlipped}
        >
            <div className="flip-card-inner">
                {/* ══════ FRONT ══════ */}
                <div className="flip-card-front" aria-hidden={isFlipped}>
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
                <div className="flip-card-back" aria-hidden={!isFlipped}>
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
