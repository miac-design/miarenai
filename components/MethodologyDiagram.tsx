"use client";

import { useEffect, useRef, useState } from "react";

const signals = [
  {
    num: "1",
    name: "Can AI find you?",
    subtitle: "Entity Verification",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: "2",
    name: "Can AI trust you?",
    subtitle: "RAG Alignment",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    num: "3",
    name: "Can AI quote you?",
    subtitle: "Citation Authority",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

export default function MethodologyDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-8">
      {/* Diagram: three nodes connected by lines */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {signals.map((signal, i) => (
          <div key={signal.num} className="flex items-center">
            {/* Signal node */}
            <div
              className={`relative flex flex-col items-center transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Circle with icon */}
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                visible
                  ? "bg-teal/20 border-2 border-teal shadow-[0_0_24px_rgba(0,212,170,0.2)]"
                  : "bg-white/5 border-2 border-white/10"
              }`}
                style={{ transitionDelay: `${i * 200 + 300}ms` }}
              >
                <div className="text-teal">{signal.icon}</div>
              </div>
              {/* Number badge */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                visible ? "bg-teal text-navy scale-100" : "bg-white/10 text-white/30 scale-75"
              }`}
                style={{ transitionDelay: `${i * 200 + 500}ms` }}
              >
                {signal.num}
              </div>
              {/* Label */}
              <p className="text-sm font-semibold text-white mt-3">{signal.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{signal.subtitle}</p>
            </div>

            {/* Connector line (not after last) */}
            {i < signals.length - 1 && (
              <div
                className={`hidden md:block mx-4 transition-all duration-700 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${i * 200 + 400}ms` }}
              >
                <div className="w-12 lg:w-20 h-px relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal/60 to-teal/20"
                    style={{
                      width: visible ? "100%" : "0%",
                      transition: `width 0.8s ease ${i * 200 + 500}ms`,
                      height: "1px",
                    }}
                  />
                  {/* Arrow dot */}
                  <div
                    className={`absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      visible ? "bg-teal scale-100" : "bg-transparent scale-0"
                    }`}
                    style={{ transitionDelay: `${i * 200 + 800}ms` }}
                  />
                </div>
              </div>
            )}

            {/* Mobile vertical connector */}
            {i < signals.length - 1 && (
              <div
                className={`md:hidden my-1 transition-all duration-700 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${i * 200 + 400}ms` }}
              >
                <div className="h-6 w-px mx-auto relative">
                  <div
                    className="absolute inset-x-0 top-0 bg-gradient-to-b from-teal/60 to-teal/20"
                    style={{
                      height: visible ? "100%" : "0%",
                      transition: `height 0.8s ease ${i * 200 + 500}ms`,
                      width: "1px",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Convergence arrow to "AI Citation" */}
      <div className="flex flex-col items-center mt-6">
        <div
          className={`h-8 w-px transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "900ms" }}
        >
          <div
            className="w-px bg-gradient-to-b from-teal/40 to-teal mx-auto"
            style={{
              height: visible ? "100%" : "0%",
              transition: "height 0.6s ease 1000ms",
            }}
          />
        </div>
        <div
          className={`flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-5 py-2 transition-all duration-500 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-teal uppercase">
            AI Citation
          </span>
        </div>
      </div>
    </div>
  );
}
