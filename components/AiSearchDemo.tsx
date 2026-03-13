"use client";

import { useState, useEffect } from "react";

const QUERY = "nonprofit organizations helping trafficking survivors";
const TYPING_SPEED = 55;
const PAUSE_BEFORE_RESTART = 4000;
const PAUSE_AFTER_TYPING = 2500;

export default function AiSearchDemo() {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let charIndex = 0;
        let timeout: NodeJS.Timeout;

        function typeNext() {
            if (charIndex <= QUERY.length) {
                setIsTyping(true);
                setDisplayText(QUERY.slice(0, charIndex));
                charIndex++;
                timeout = setTimeout(typeNext, TYPING_SPEED);
            } else {
                setIsTyping(false);
                timeout = setTimeout(() => {
                    charIndex = 0;
                    setDisplayText("");
                    timeout = setTimeout(typeNext, PAUSE_BEFORE_RESTART);
                }, PAUSE_AFTER_TYPING);
            }
        }

        timeout = setTimeout(typeNext, 1200);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setShowCursor((c) => !c), 530);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden lg:block w-full max-w-sm shrink-0">
            <div className="bg-white rounded-2xl shadow-2xl shadow-navy/8 border border-gray-200/50 overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-teal/5">
                {/* Title bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-gray-50/80 to-gray-50/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-3 text-[10px] font-mono text-gray-400 tracking-wider uppercase">
                        AI Search
                    </span>
                </div>

                {/* Body */}
                <div className="px-5 py-5">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal/15 to-teal/5 flex items-center justify-center shrink-0 mt-0.5">
                            <svg
                                className="w-4 h-4 text-teal"
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
                                    className={`inline-block w-[2px] h-[14px] bg-teal ml-[1px] align-text-bottom transition-opacity duration-100 ${
                                        showCursor ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                            isTyping ? "bg-teal" : "bg-teal/30"
                        }`} />
                        <p className="text-[10px] text-gray-400 font-mono tracking-wide">
                            {isTyping
                                ? "Searching across AI knowledge sources..."
                                : "Ready to search"
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
