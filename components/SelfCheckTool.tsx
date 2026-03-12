"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  selfCheckQuestions,
  signalLabels,
  type Signal,
  type CheckQuestion,
} from "@/lib/self-check-data";

type Answer = "yes" | "no" | null;

function SignalGauge({
  signal,
  score,
  total,
}: {
  signal: Signal;
  score: number;
  total: number;
}) {
  const pct = total > 0 ? (score / total) * 100 : 0;
  const label = signalLabels[signal];

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
      <p className="text-xs font-mono text-teal mb-1">{label.name}</p>
      <p className="text-sm font-bold text-white mb-3">{label.title}</p>
      <div className="w-full bg-white/10 rounded-full h-3 mb-2">
        <div
          className="h-3 rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            backgroundColor:
              pct >= 75 ? "#00d4aa" : pct >= 50 ? "#f0ad4e" : "#e74c3c",
          }}
        />
      </div>
      <p className="text-xs text-gray-400">
        {score} of {total} —{" "}
        {pct >= 75 ? "Strong" : pct >= 50 ? "Developing" : "Needs attention"}
      </p>
    </div>
  );
}

function QuestionCard({
  q,
  index,
  answer,
  onAnswer,
  showExplanation,
}: {
  q: CheckQuestion;
  index: number;
  answer: Answer;
  onAnswer: (id: string, a: Answer) => void;
  showExplanation: boolean;
}) {
  const label = signalLabels[q.signal];

  return (
    <div
      className={`border rounded-xl p-5 transition-colors ${
        answer !== null
          ? "bg-white/5 border-white/20"
          : "bg-white/[0.02] border-white/10"
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="w-7 h-7 rounded-full bg-teal/20 text-teal text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1">
          <p className="text-xs font-mono text-teal mb-1.5">
            {label.name}: {label.title}
          </p>
          <p className="text-sm text-white font-medium mb-3">{q.question}</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onAnswer(q.id, answer === "yes" ? null : "yes")}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                answer === "yes"
                  ? "bg-teal text-navy"
                  : "bg-white/10 text-gray-400 hover:bg-white/15"
              }`}
              aria-pressed={answer === "yes"}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => onAnswer(q.id, answer === "no" ? null : "no")}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                answer === "no"
                  ? "bg-red-500/80 text-white"
                  : "bg-white/10 text-gray-400 hover:bg-white/15"
              }`}
              aria-pressed={answer === "no"}
            >
              No
            </button>
          </div>
          {showExplanation && answer === "no" && (
            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
              {q.explanation}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SelfCheckTool() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = useCallback((id: string, a: Answer) => {
    setAnswers((prev) => {
      const next = { ...prev };
      if (a === null) {
        delete next[id];
      } else {
        next[id] = a;
      }
      return next;
    });
  }, []);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = selfCheckQuestions.length;
  const allAnswered = answeredCount === totalQuestions;

  const getSignalScore = (signal: Signal) => {
    const qs = selfCheckQuestions.filter((q) => q.signal === signal);
    const yesCount = qs.filter((q) => answers[q.id] === "yes").length;
    return { score: yesCount, total: qs.length };
  };

  const totalScore =
    Object.values(answers).filter((a) => a === "yes").length;
  const totalPct = Math.round((totalScore / totalQuestions) * 100);

  const weakestSignal = (["find", "trust", "quote"] as Signal[]).reduce(
    (weakest, signal) => {
      const { score, total } = getSignalScore(signal);
      const pct = total > 0 ? score / total : 0;
      const wPct =
        weakest.total > 0 ? weakest.score / weakest.total : 0;
      return pct < wPct ? { signal, score, total } : weakest;
    },
    { signal: "find" as Signal, score: Infinity, total: 1 }
  );

  const handleShowResults = () => {
    setShowResults(true);
    setTimeout(() => {
      document.getElementById("self-check-results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Questions */}
      <div className="space-y-4">
        {selfCheckQuestions.map((q, i) => (
          <QuestionCard
            key={q.id}
            q={q}
            index={i}
            answer={answers[q.id] ?? null}
            onAnswer={handleAnswer}
            showExplanation={showResults}
          />
        ))}
      </div>

      {/* Progress + Submit */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400 mb-4">
          {answeredCount} of {totalQuestions} questions answered
        </p>
        {!showResults ? (
          <button
            type="button"
            onClick={handleShowResults}
            disabled={!allAnswered}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-base transition-colors ${
              allAnswered
                ? "bg-teal text-navy hover:bg-teal/90 cursor-pointer"
                : "bg-white/10 text-gray-500 cursor-not-allowed"
            }`}
          >
            See My AI Visibility Score
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-gray-400 hover:text-teal transition-colors underline"
          >
            Reset and try again
          </button>
        )}
      </div>

      {/* Results */}
      {showResults && (
        <div id="self-check-results" className="mt-12">
          {/* Overall Score */}
          <div className="text-center mb-8">
            <p className="text-xs font-mono text-teal mb-2">YOUR AI VISIBILITY ESTIMATE</p>
            <p
              className="text-6xl md:text-7xl font-bold"
              style={{
                color:
                  totalPct >= 75
                    ? "#00d4aa"
                    : totalPct >= 50
                    ? "#f0ad4e"
                    : "#e74c3c",
              }}
            >
              {totalPct}%
            </p>
            <p className="text-sm text-gray-400 mt-2">
              {totalScore} of {totalQuestions} signals present
            </p>
          </div>

          {/* Signal Breakdown */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {(["find", "trust", "quote"] as Signal[]).map((signal) => {
              const { score, total } = getSignalScore(signal);
              return (
                <SignalGauge
                  key={signal}
                  signal={signal}
                  score={score}
                  total={total}
                />
              );
            })}
          </div>

          {/* Personalized Summary */}
          <div className="bg-white/5 border border-teal/30 rounded-xl p-6 mb-8">
            <p className="text-xs font-mono text-teal mb-2">YOUR BIGGEST GAP</p>
            <p className="text-lg font-bold text-white mb-2">
              {signalLabels[weakestSignal.signal].title}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {signalLabels[weakestSignal.signal].description}{" "}
              This is the most impactful area to address first. Our{" "}
              <Link
                href="/methodology"
                className="text-teal hover:underline"
              >
                three-signal diagnostic methodology
              </Link>{" "}
              provides a structured framework for closing this gap.
            </p>
          </div>

          {/* Interpretation Note */}
          <div className="border border-white/10 rounded-xl p-5 mb-8">
            <p className="text-xs font-mono text-teal mb-2">HOW TO READ THIS</p>
            <div className="space-y-2 text-xs text-gray-400">
              <p>
                <span className="font-bold" style={{ color: "#00d4aa" }}>75-100%</span>{" "}
                — Strong foundation. Your brand likely appears in AI search responses. Focus on maintaining and expanding.
              </p>
              <p>
                <span className="font-bold" style={{ color: "#f0ad4e" }}>40-74%</span>{" "}
                — Developing. You have some signals in place but gaps that limit AI citation. Targeted fixes can make a significant difference.
              </p>
              <p>
                <span className="font-bold" style={{ color: "#e74c3c" }}>0-39%</span>{" "}
                — Needs attention. AI engines likely have low confidence in your entity. A structured approach to all three signals is recommended.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-white font-bold text-lg mb-2">
              Want the full picture?
            </p>
            <p className="text-sm text-gray-400 mb-6">
              This self-check gives you a directional estimate. A full{" "}
              <Link href="/services" className="text-teal hover:underline">
                AI Visibility Audit
              </Link>{" "}
              tests 25+ real queries across ChatGPT, Perplexity, Gemini, and Copilot with a detailed diagnostic report.
            </p>
            <a
              href="https://calendly.com/c2018-mia/chat-with-mia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base !px-8 !py-3"
            >
              Get a Full AI Visibility Diagnostic
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
