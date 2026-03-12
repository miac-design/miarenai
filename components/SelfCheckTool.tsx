"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  selfCheckQuestions,
  signalLabels,
  type Signal,
} from "@/lib/self-check-data";

type Answer = "yes" | "no" | "unsure";

/* ─── Progress Bar ─── */
function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-mono text-gray-400">
          Question {Math.min(current + 1, total)} of {total}
        </p>
        <p className="text-xs font-mono text-teal">{pct}%</p>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div
          className="h-2 rounded-full bg-teal transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      {/* Signal dots */}
      <div className="flex items-center gap-4 mt-3">
        {(["find", "trust", "quote"] as Signal[]).map((signal) => {
          const qs = selfCheckQuestions.filter((q) => q.signal === signal);
          const firstIndex = selfCheckQuestions.findIndex((q) => q.signal === signal);
          const lastIndex = firstIndex + qs.length - 1;
          const isActive = current >= firstIndex && current <= lastIndex;
          const isDone = current > lastIndex;
          return (
            <div key={signal} className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isDone ? "bg-teal" : isActive ? "bg-teal animate-pulse" : "bg-white/20"
                }`}
              />
              <span
                className={`text-xs font-mono transition-colors ${
                  isActive ? "text-teal" : isDone ? "text-teal/60" : "text-gray-600"
                }`}
              >
                {signalLabels[signal].title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Signal Gauge (results) ─── */
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

/* ─── Main Component ─── */
export default function SelfCheckTool() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [step, setStep] = useState(0); // 0..9 = questions, 10 = results
  const totalQuestions = selfCheckQuestions.length;
  const isResults = step >= totalQuestions;

  const handleAnswer = useCallback(
    (answer: Answer) => {
      const q = selfCheckQuestions[step];
      setAnswers((prev) => ({ ...prev, [q.id]: answer }));
      // Auto-advance after a brief moment
      setTimeout(() => {
        setStep((s) => s + 1);
      }, 300);
    },
    [step]
  );

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const handleReset = () => {
    setAnswers({});
    setStep(0);
  };

  const getSignalScore = (signal: Signal) => {
    const qs = selfCheckQuestions.filter((q) => q.signal === signal);
    const yesCount = qs.filter((q) => answers[q.id] === "yes").length;
    return { score: yesCount, total: qs.length };
  };

  const totalScore = Object.values(answers).filter((a) => a === "yes").length;
  const totalPct = Math.round((totalScore / totalQuestions) * 100);
  const unsureCount = Object.values(answers).filter((a) => a === "unsure").length;

  const weakestSignal = (["find", "trust", "quote"] as Signal[]).reduce(
    (weakest, signal) => {
      const { score, total } = getSignalScore(signal);
      const pct = total > 0 ? score / total : 0;
      const wPct = weakest.total > 0 ? weakest.score / weakest.total : 0;
      return pct < wPct ? { signal, score, total } : weakest;
    },
    { signal: "find" as Signal, score: Infinity, total: 1 }
  );

  /* ─── Results View ─── */
  if (isResults) {
    return (
      <div>
        {/* Overall Score */}
        <div className="text-center mb-10">
          <p className="text-xs font-mono text-teal mb-3">YOUR AI VISIBILITY ESTIMATE</p>
          <p
            className="text-7xl md:text-8xl font-bold"
            style={{
              color:
                totalPct >= 75 ? "#00d4aa" : totalPct >= 50 ? "#f0ad4e" : "#e74c3c",
            }}
          >
            {totalPct}%
          </p>
          <p className="text-sm text-gray-400 mt-3">
            {totalScore} of {totalQuestions} signals present
            {unsureCount > 0 && (
              <span className="text-amber-400"> · {unsureCount} uncertain</span>
            )}
          </p>
        </div>

        {/* Signal Breakdown */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {(["find", "trust", "quote"] as Signal[]).map((signal) => {
            const { score, total } = getSignalScore(signal);
            return <SignalGauge key={signal} signal={signal} score={score} total={total} />;
          })}
        </div>

        {/* Personalized Summary */}
        <div className="bg-white/5 border border-teal/30 rounded-xl p-6 mb-8">
          <p className="text-xs font-mono text-teal mb-2">YOUR BIGGEST GAP</p>
          <p className="text-lg font-bold text-white mb-2">
            {signalLabels[weakestSignal.signal].title}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            {signalLabels[weakestSignal.signal].description} This is the most impactful area
            to address first. Our{" "}
            <Link href="/methodology" className="text-teal hover:underline">
              three-signal diagnostic methodology
            </Link>{" "}
            provides a structured framework for closing this gap.
          </p>
        </div>

        {/* Question Review */}
        <div className="border border-white/10 rounded-xl p-5 mb-8">
          <p className="text-xs font-mono text-teal mb-4">YOUR ANSWERS</p>
          <div className="space-y-3">
            {selfCheckQuestions.map((q, i) => {
              const a = answers[q.id];
              return (
                <div key={q.id} className="flex items-start gap-3">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                      a === "yes"
                        ? "bg-teal/20 text-teal"
                        : a === "unsure"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {a === "yes" ? "✓" : a === "unsure" ? "?" : "✗"}
                  </span>
                  <div className="flex-1">
                    <p className="text-xs text-white">
                      <span className="text-gray-500">{i + 1}.</span> {q.question}
                    </p>
                    {(a === "no" || a === "unsure") && (
                      <p className="text-xs text-gray-500 mt-1">
                        {a === "unsure" && (
                          <span className="text-amber-400/80">If you&apos;re not sure, it likely isn&apos;t in place yet. </span>
                        )}
                        {q.explanation}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interpretation */}
        <div className="border border-white/10 rounded-xl p-5 mb-8">
          <p className="text-xs font-mono text-teal mb-2">HOW TO READ THIS</p>
          <div className="space-y-2 text-xs text-gray-400">
            <p>
              <span className="font-bold" style={{ color: "#00d4aa" }}>75-100%</span>{" "}
              — Strong foundation. Your brand likely appears in AI search responses.
            </p>
            <p>
              <span className="font-bold" style={{ color: "#f0ad4e" }}>40-74%</span>{" "}
              — Developing. Gaps exist that limit AI citation. Targeted fixes can help.
            </p>
            <p>
              <span className="font-bold" style={{ color: "#e74c3c" }}>0-39%</span>{" "}
              — Needs attention. AI engines likely have low confidence in your entity.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white font-bold text-lg mb-2">Want the full picture?</p>
          <p className="text-sm text-gray-400 mb-6">
            This self-check gives you a directional estimate. A full{" "}
            <Link href="/services" className="text-teal hover:underline">
              AI Visibility Audit
            </Link>{" "}
            tests 25+ real queries across ChatGPT, Perplexity, Gemini, and Copilot.
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
          <div className="mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-gray-400 hover:text-teal transition-colors underline"
            >
              Take the assessment again
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Question View (one at a time) ─── */
  const currentQ = selfCheckQuestions[step];
  const currentAnswer = answers[currentQ.id] ?? null;
  const label = signalLabels[currentQ.signal];

  return (
    <div>
      <ProgressBar current={step} total={totalQuestions} />

      {/* Question Card */}
      <div className="min-h-[280px] flex flex-col justify-center">
        <p className="text-xs font-mono text-teal mb-3">
          {label.name}: {label.title}
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">
          {currentQ.question}
        </h2>
        {currentQ.hint && (
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xl">
            {currentQ.hint}
          </p>
        )}

        {/* Answer Buttons */}
        <div className="flex flex-wrap gap-3">
          {([
            { value: "yes" as Answer, label: "Yes", activeClass: "bg-teal text-navy", icon: "✓" },
            { value: "no" as Answer, label: "No", activeClass: "bg-red-500/80 text-white", icon: "✗" },
            { value: "unsure" as Answer, label: "I'm not sure", activeClass: "bg-amber-500/70 text-white", icon: "?" },
          ]).map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleAnswer(opt.value)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                currentAnswer === opt.value
                  ? opt.activeClass
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
              aria-pressed={currentAnswer === opt.value}
            >
              <span className="mr-2">{opt.icon}</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0}
          className={`text-sm font-medium transition-colors ${
            step === 0 ? "text-gray-600 cursor-not-allowed" : "text-gray-400 hover:text-white"
          }`}
        >
          ← Back
        </button>
        <p className="text-xs text-gray-500">
          {step + 1} / {totalQuestions}
        </p>
        {currentAnswer && step < totalQuestions - 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="text-sm font-medium text-teal hover:text-teal/80 transition-colors"
          >
            Next →
          </button>
        )}
        {currentAnswer && step === totalQuestions - 1 && (
          <button
            type="button"
            onClick={() => setStep(totalQuestions)}
            className="px-6 py-2 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal/90 transition-colors"
          >
            See My Score →
          </button>
        )}
        {!currentAnswer && (
          <span className="text-xs text-gray-600">Select an answer</span>
        )}
      </div>
    </div>
  );
}
