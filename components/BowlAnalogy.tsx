"use client";

import { useState } from "react";
import Image from "next/image";

type Zone = "steam" | "bowl" | "food" | null;

export default function BowlAnalogy() {
    const [activeZone, setActiveZone] = useState<Zone>(null);

    const handleZone = (zone: Zone) => {
        setActiveZone((prev) => (prev === zone ? null : zone));
    };

    const zoneActive = (zone: Zone) => activeZone === zone;

    return (
        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">
            {/* LEFT: Bowl Illustration (40%) */}
            <div className="md:col-span-2 relative flex items-center justify-center">
                <div className="relative w-full max-w-xs mx-auto">
                    {/* Bowl image */}
                    <Image
                        src="/bowl-illustration.png"
                        alt="Premium bowl of food — visual analogy for AI visibility signals"
                        width={400}
                        height={400}
                        className="rounded-2xl w-full h-auto"
                        priority
                    />

                    {/* Interactive overlay zones */}
                    <div className="absolute inset-0">
                        {/* Steam zone (top 25%) */}
                        <button
                            className={`absolute top-0 left-[10%] right-[10%] h-[25%] rounded-t-2xl cursor-pointer transition-all duration-300 ${zoneActive("steam")
                                    ? "bg-teal/15 ring-2 ring-teal/40"
                                    : "hover:bg-teal/10"
                                }`}
                            onMouseEnter={() => setActiveZone("steam")}
                            onMouseLeave={() => setActiveZone(null)}
                            onClick={() => handleZone("steam")}
                            aria-label="Steam zone — The Presentation"
                        />
                        {/* Bowl rim zone (25-55%) */}
                        <button
                            className={`absolute top-[25%] left-[5%] right-[5%] h-[30%] cursor-pointer transition-all duration-300 ${zoneActive("bowl")
                                    ? "bg-teal/15 ring-2 ring-teal/40"
                                    : "hover:bg-teal/10"
                                }`}
                            onMouseEnter={() => setActiveZone("bowl")}
                            onMouseLeave={() => setActiveZone(null)}
                            onClick={() => handleZone("bowl")}
                            aria-label="Bowl zone — Technical Infrastructure"
                        />
                        {/* Food zone (55-90%) */}
                        <button
                            className={`absolute top-[55%] left-[10%] right-[10%] h-[35%] rounded-b-2xl cursor-pointer transition-all duration-300 ${zoneActive("food")
                                    ? "bg-teal/15 ring-2 ring-teal/40"
                                    : "hover:bg-teal/10"
                                }`}
                            onMouseEnter={() => setActiveZone("food")}
                            onMouseLeave={() => setActiveZone(null)}
                            onClick={() => handleZone("food")}
                            aria-label="Food zone — Content Structure"
                        />
                    </div>

                    {/* Connector dots (visible on desktop) */}
                    <div className="hidden md:block">
                        <div
                            className={`absolute top-[12%] right-[-8px] w-[6px] h-[6px] rounded-full transition-all duration-300 ${zoneActive("steam") ? "bg-teal scale-150" : "bg-teal/60"
                                }`}
                        />
                        <div
                            className={`absolute top-[40%] right-[-8px] w-[6px] h-[6px] rounded-full transition-all duration-300 ${zoneActive("bowl") ? "bg-teal scale-150" : "bg-teal/60"
                                }`}
                        />
                        <div
                            className={`absolute top-[72%] right-[-8px] w-[6px] h-[6px] rounded-full transition-all duration-300 ${zoneActive("food") ? "bg-teal scale-150" : "bg-teal/60"
                                }`}
                        />
                    </div>
                </div>

                {/* SVG connector lines (desktop only) */}
                <svg
                    className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
                    style={{ overflow: "visible" }}
                >
                    {/* Steam → Card 1 */}
                    <line
                        x1="42%"
                        y1="12%"
                        x2="100%"
                        y2="5%"
                        stroke={zoneActive("steam") ? "#00D4AA" : "rgba(0,212,170,0.3)"}
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="transition-all duration-300"
                    />
                    {/* Bowl → Card 2 */}
                    <line
                        x1="42%"
                        y1="40%"
                        x2="100%"
                        y2="25%"
                        stroke={zoneActive("bowl") ? "#00D4AA" : "rgba(0,212,170,0.3)"}
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="transition-all duration-300"
                    />
                    {/* Food → Card 3 */}
                    <line
                        x1="42%"
                        y1="72%"
                        x2="100%"
                        y2="45%"
                        stroke={zoneActive("food") ? "#00D4AA" : "rgba(0,212,170,0.3)"}
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="transition-all duration-300"
                    />
                </svg>
            </div>

            {/* RIGHT: Cards (60%) */}
            <div className="md:col-span-3 space-y-4">
                {/* --- Cards 1-3: The Bowl --- */}

                {/* Card 1: The Presentation */}
                <div
                    className={`bg-[#141E30] border-l-[3px] border-teal rounded-xl p-5 transition-all duration-300 ${zoneActive("steam")
                            ? "shadow-[0_0_20px_rgba(0,212,170,0.2)] ring-1 ring-teal/30"
                            : ""
                        }`}
                    onMouseEnter={() => setActiveZone("steam")}
                    onMouseLeave={() => setActiveZone(null)}
                >
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-teal font-bold">The Presentation</h3>
                        <span className="text-[11px] bg-[#3A4A5C] text-white px-2 py-0.5 rounded-full shrink-0 ml-3">
                            For humans
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The plating, the garnish, the smell. This is what attracts human
                        visitors. AI doesn&apos;t care how pretty your site is. A human eats
                        with their eyes. AI eats with a spoon.
                    </p>
                </div>

                {/* Card 2: The Bowl */}
                <div
                    className={`bg-[#141E30] border-l-[3px] border-teal rounded-xl p-5 transition-all duration-300 ${zoneActive("bowl")
                            ? "shadow-[0_0_20px_rgba(0,212,170,0.2)] ring-1 ring-teal/30"
                            : ""
                        }`}
                    onMouseEnter={() => setActiveZone("bowl")}
                    onMouseLeave={() => setActiveZone(null)}
                >
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-teal font-bold">The Bowl</h3>
                        <a
                            href="#signal-t"
                            className="text-[11px] border border-teal/40 text-teal px-2 py-0.5 rounded-full shrink-0 ml-3 hover:bg-teal/10 transition-colors"
                        >
                            Technical Infrastructure
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The server, code, schema markup, and site speed. This is your
                        technical infrastructure. Without a solid bowl, the food falls apart.
                        If AI crawlers can&apos;t read your site, nothing else matters.
                    </p>
                </div>

                {/* Card 3: What's Inside */}
                <div
                    className={`bg-[#141E30] border-l-[3px] border-teal rounded-xl p-5 transition-all duration-300 ${zoneActive("food")
                            ? "shadow-[0_0_20px_rgba(0,212,170,0.2)] ring-1 ring-teal/30"
                            : ""
                        }`}
                    onMouseEnter={() => setActiveZone("food")}
                    onMouseLeave={() => setActiveZone(null)}
                >
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-teal font-bold">What&apos;s Inside</h3>
                        <a
                            href="#signal-c"
                            className="text-[11px] border border-teal/40 text-teal px-2 py-0.5 rounded-full shrink-0 ml-3 hover:bg-teal/10 transition-colors"
                        >
                            Content Structure
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The actual content — answers, structured information, substance.
                        This is your content structure. It&apos;s what AI engines
                        &ldquo;eat&rdquo; and decide to cite. A beautiful bowl with nothing
                        inside? AI skips right past it.
                    </p>
                </div>

                {/* --- Divider --- */}
                <div className="flex items-center gap-4 py-3">
                    <div className="flex-1 h-px bg-white/10" />
                    <p className="text-sm text-gray-500 italic whitespace-nowrap">
                        And beyond the bowl&hellip;
                    </p>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* --- Cards 4-6: The Restaurant --- */}

                {/* Card 4: The Name on Every Sign */}
                <div className="bg-[#141E30] border-l-[3px] border-teal rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                            <svg
                                className="w-5 h-5 text-teal shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                />
                            </svg>
                            <h3 className="text-teal font-bold">
                                The Name on Every Sign
                            </h3>
                        </div>
                        <a
                            href="#signal-e"
                            className="text-[11px] border border-teal/40 text-teal px-2 py-0.5 rounded-full shrink-0 ml-3 hover:bg-teal/10 transition-colors"
                        >
                            Entity Consistency
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        If the sign outside says one thing, Google Maps says another, and
                        Yelp says something else, the food critic doesn&apos;t know which is
                        real. This is entity consistency — same name, same description,
                        everywhere.
                    </p>
                </div>

                {/* Card 5: In Every Food Guide */}
                <div className="bg-[#141E30] border-l-[3px] border-teal rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                            <svg
                                className="w-5 h-5 text-teal shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                />
                            </svg>
                            <h3 className="text-teal font-bold">
                                In Every Food Guide
                            </h3>
                        </div>
                        <a
                            href="#signal-x"
                            className="text-[11px] border border-teal/40 text-teal px-2 py-0.5 rounded-full shrink-0 ml-3 hover:bg-teal/10 transition-colors"
                        >
                            Cross-Platform Presence
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A restaurant that only exists on its own website is invisible. The
                        food critic checks Yelp, Google, Instagram, local blogs. This is
                        cross-platform presence — the more places that mention you, the more
                        confident the critic is.
                    </p>
                </div>

                {/* Card 6: Others Recommending You */}
                <div className="bg-[#141E30] border-l-[3px] border-teal rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                            <svg
                                className="w-5 h-5 text-teal shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0m5.54 0a7.468 7.468 0 01-.982 3.172M12 9.728a6.003 6.003 0 01-2.48-5.228m2.48 5.228a7.468 7.468 0 00.981 3.172"
                                />
                            </svg>
                            <h3 className="text-teal font-bold">
                                Others Recommending You
                            </h3>
                        </div>
                        <a
                            href="#signal-a"
                            className="text-[11px] border border-teal/40 text-teal px-2 py-0.5 rounded-full shrink-0 ml-3 hover:bg-teal/10 transition-colors"
                        >
                            Authority Signals
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The food critic doesn&apos;t trust the restaurant&apos;s own
                        marketing. They ask: who else says this place is good? News articles,
                        reviews, partnerships. These are authority signals — third-party
                        validation is everything.
                    </p>
                </div>
            </div>
        </div>
    );
}
