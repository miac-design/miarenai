"use client";

import { useState } from "react";
import Image from "next/image";

interface CardData {
    image: string;
    frontTitle: string;
    frontText: string;
    backLabel: string;
    backText: string;
    signalId: string;
}

const cards: CardData[] = [
    {
        image: "/card-bowl.png",
        frontTitle: "The Bowl",
        frontText: "Without a solid bowl, the food falls apart.",
        backLabel: "T: Technical Infrastructure",
        backText:
            "Server, code, schema markup, site speed. If AI crawlers can't read your site, nothing else matters. This is the plumbing that holds everything together.",
        signalId: "signal-t",
    },
    {
        image: "/card-food-inside.png",
        frontTitle: "What's Inside",
        frontText:
            "The actual food. The substance. The reason anyone comes back.",
        backLabel: "C: Content Structure",
        backText:
            "Answers, structured information, Q&A content. This is what AI engines 'eat' and decide to cite. A beautiful bowl with nothing inside? AI skips right past it.",
        signalId: "signal-c",
    },
    {
        image: "/card-signs.png",
        frontTitle: "The Name on Every Sign",
        frontText:
            "Same name on the door, on Google Maps, on Yelp. No confusion.",
        backLabel: "E: Entity Consistency",
        backText:
            "Your brand information must be identical everywhere AI looks. If LinkedIn says one thing and your website says another, AI loses confidence in citing you.",
        signalId: "signal-e",
    },
    {
        image: "/card-food-guides.png",
        frontTitle: "In Every Food Guide",
        frontText: "A restaurant nobody lists is a restaurant nobody finds.",
        backLabel: "X: Cross-Platform Presence",
        backText:
            "AI cross-references LinkedIn, directories, news articles, event platforms. If you only exist on your own website, you're missing the signals that build AI confidence.",
        signalId: "signal-x",
    },
    {
        image: "/card-critic.png",
        frontTitle: "Others Recommending You",
        frontText: 'The critic asks: who else says this place is good?',
        backLabel: "A: Authority Signals",
        backText:
            "Third-party validation from trusted sources. News articles, reviews, partnerships. The hardest signal to build. The most durable once you have it.",
        signalId: "signal-a",
    },
];

function FlipCard({ card }: { card: CardData }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="flip-card group"
            onClick={() => setFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFlipped((f) => !f);
                }
            }}
            aria-label={`${card.frontTitle}: ${card.backLabel}`}
        >
            <div className={`flip-card-inner ${flipped ? "flip-card-flipped" : ""}`}>
                {/* FRONT */}
                <div className="flip-card-front bg-[#141E30] rounded-xl overflow-hidden flex flex-col">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src={card.image}
                            alt={card.frontTitle}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-teal font-bold text-lg mb-2">
                                {card.frontTitle}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {card.frontText}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                            <p className="text-[11px] text-gray-500 md:hidden">
                                Tap to flip
                            </p>
                            <p className="text-[11px] text-gray-500 hidden md:block">
                                Hover to flip
                            </p>
                            <svg
                                className="w-4 h-4 text-teal/50 group-hover:text-teal transition-colors"
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

                {/* BACK */}
                <div className="flip-card-back rounded-xl overflow-hidden flex flex-col justify-center p-6"
                    style={{ background: "linear-gradient(135deg, #00D4AA 0%, #00B894 100%)" }}
                >
                    <a
                        href={`#${card.signalId}`}
                        className="inline-block mb-4 text-xs font-mono tracking-wider text-[#0A1628]/60 uppercase hover:text-[#0A1628] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        ↑ Jump to signal
                    </a>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-4">
                        {card.backLabel}
                    </h3>
                    <p className="text-[#0A1628]/80 text-sm leading-relaxed">
                        {card.backText}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FlipCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[960px] mx-auto">
            {cards.map((card) => (
                <FlipCard key={card.signalId} card={card} />
            ))}
        </div>
    );
}
