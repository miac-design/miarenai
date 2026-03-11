"use client";

import { useState, useEffect } from "react";

const QUERY = "nonprofit organizations helping trafficking survivors";
const TYPING_SPEED = 55; // ms per character
const PAUSE_BEFORE_RESTART = 4000;
const PAUSE_AFTER_TYPING = 2500;

export default function AiSearchDemo() {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let charIndex = 0;
        let timeout: NodeJS.Timeout;

        function typeNext() {
            if (charIndex <= QUERY.length) {
                setDisplayText(QUERY.slice(0, charIndex));
                charIndex++;
                timeout = setTimeout(typeNext, TYPING_SPEED);
            } else {
                // Pause, then reset and restart
                timeout = setTimeout(() => {
                    charIndex = 0;
                    setDisplayText("");
                    timeout = setTimeout(typeNext, PAUSE_BEFORE_RESTART);
                }, PAUSE_AFTER_TYPING);
            }
        }

        timeout = setTimeout(typeNext, 1200); // initial delay

        return () => clearTimeout(timeout);
    }, []);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => setShowCursor((c) => !c), 530);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden lg:block w-full max-w-sm">
            {/* Window chrome */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <span className="ml-3 text-[10px] font-mono text-gray-400 tracking-wider uppercase">
                        AI Search
                    </span>
                </div>

                {/* Body */}
                <div className="px-5 py-5">
                    {/* Search input area */}
                    <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg
                                className="w-3.5 h-3.5 text-teal"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                                />
                            </svg>
                        </div>
                        <div className="flex-1 min-h-[3.5rem]">
                            <p className="text-sm text-navy leading-relaxed">
                                {displayText}
                                <span
                                    className={`inline-block w-[2px] h-[14px] bg-teal ml-[1px] align-text-bottom transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                            </p>
                        </div>
                    </div>

                    {/* Subtle footer */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal/40" />
                        <p className="text-[10px] text-gray-400 font-mono tracking-wide">
                            Searching across AI knowledge sources...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
