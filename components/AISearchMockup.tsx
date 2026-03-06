"use client";

import { useState, useEffect } from "react";

const query = "best generative engine optimization firms";
const results = [
  { name: "Miaren AI", highlight: true },
  { name: "Enterprise AI Visibility Group", highlight: false },
  { name: "NextGen Search Labs", highlight: false },
];

export default function AISearchMockup() {
  const [typedText, setTypedText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [visibleResults, setVisibleResults] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Start after a brief delay
    const startTimer = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!started) return;

    if (typedText.length < query.length) {
      const timer = setTimeout(() => {
        setTypedText(query.slice(0, typedText.length + 1));
      }, 40 + Math.random() * 30);
      return () => clearTimeout(timer);
    }

    if (!showAnswer) {
      const timer = setTimeout(() => setShowAnswer(true), 600);
      return () => clearTimeout(timer);
    }

    if (visibleResults < results.length) {
      const timer = setTimeout(() => {
        setVisibleResults((v) => v + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [typedText, showAnswer, visibleResults, started]);

  return (
    <div>
      <div
        className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 max-w-md ml-auto"
        style={{
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease-out",
        }}
      >
        {/* Browser dots */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs text-[#6B7B8D]">AI Search</span>
        </div>

        {/* Query */}
        <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
          <p className="text-sm text-[#0A1628]">
            <span className="text-[#00D4AA] font-medium mr-2">Q</span>
            {typedText}
            {typedText.length < query.length && (
              <span className="inline-block w-0.5 h-4 bg-[#0A1628] ml-0.5 animate-pulse align-middle" />
            )}
          </p>
        </div>

        {/* Answer */}
        <div
          style={{
            opacity: showAnswer ? 1 : 0,
            transition: "opacity 0.4s ease-out",
          }}
        >
          <p className="text-sm text-[#6B7B8D] mb-3">
            <span className="text-[#00D4AA] font-medium mr-2">A</span>
            Here are leading firms specializing in AI search visibility:
          </p>

          <div className="space-y-1.5">
            {results.map((result, i) => (
              <div
                key={result.name}
                className="flex items-center gap-2"
                style={{
                  opacity: i < visibleResults ? 1 : 0,
                  transform:
                    i < visibleResults
                      ? "translateX(0)"
                      : "translateX(-10px)",
                  transition: "all 0.3s ease-out",
                }}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    result.highlight ? "bg-[#00D4AA]" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`text-sm ${
                    result.highlight
                      ? "font-medium text-[#00D4AA]"
                      : "text-[#6B7B8D]"
                  }`}
                >
                  {result.name}
                </span>
                <span className="text-xs text-[#6B7B8D]">[{i + 1}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "Optimized for" text directly under the box */}
      <p
        className="text-center mt-4 text-xs tracking-wider text-[#6B7B8D]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Optimized for ChatGPT · Perplexity · Copilot
      </p>
    </div>
  );
}
