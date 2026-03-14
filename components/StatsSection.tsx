"use client";

import { useInView } from "./useInView";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedBar from "./AnimatedBar";

const stats = [
  {
    value: 527,
    suffix: "%",
    label: "Growth in AI-referred website sessions",
    source: "Previsible / Search Engine Land, 2025",
    barPercent: 95,
    delay: 0,
  },
  {
    value: 30,
    prefix: "~",
    suffix: "%",
    label: "Decline in traditional click-through rates",
    source: "BrightEdge, 2024-2025",
    barPercent: 60,
    delay: 200,
  },
  {
    value: 12,
    suffix: "%",
    label: "Of AI-cited URLs also rank in Google's top 10",
    source: "Ahrefs, 2025",
    barPercent: 24,
    delay: 400,
  },
];

export default function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl p-7 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transitionDelay: `${stat.delay}ms`,
          }}
        >
          <p className="text-4xl md:text-5xl font-bold text-teal mb-4 tabular-nums">
            <AnimatedCounter
              end={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              isInView={isInView}
              duration={2000}
            />
          </p>

          <AnimatedBar
            percentage={stat.barPercent}
            isInView={isInView}
            delay={stat.delay + 400}
          />

          <p className="text-sm text-gray-400 mt-4">
            {stat.label}
          </p>
          <p className="text-xs text-warm-gray mt-1 font-mono">
            {stat.source}
          </p>
        </div>
      ))}
    </div>
  );
}
