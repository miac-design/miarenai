"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  source: string;
  /** 0-100: how full the bar should appear */
  barPercent: number;
  /** Color variant */
  variant?: "teal" | "coral" | "amber";
  delay?: number;
}

export default function AnimatedStat({
  value,
  label,
  source,
  barPercent,
  variant = "teal",
  delay = 0,
}: AnimatedStatProps) {
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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const colors = {
    teal: { bar: "bg-teal", glow: "shadow-[0_0_20px_rgba(0,212,170,0.3)]" },
    coral: { bar: "bg-coral", glow: "shadow-[0_0_20px_rgba(255,107,107,0.3)]" },
    amber: { bar: "bg-amber-400", glow: "shadow-[0_0_20px_rgba(251,191,36,0.3)]" },
  };

  const c = colors[variant];

  return (
    <div
      ref={ref}
      className="bg-white/5 border border-white/10 rounded-xl p-7 text-center"
    >
      <p className="text-4xl md:text-5xl font-bold text-teal">{value}</p>
      {/* Animated bar */}
      <div className="mt-4 mx-auto max-w-[180px] h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full ${c.bar} ${visible ? c.glow : ""}`}
          style={{
            width: visible ? `${barPercent}%` : "0%",
            transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          }}
        />
      </div>
      <p className="text-sm text-gray-400 mt-3">{label}</p>
      <p className="text-xs text-warm-gray mt-1 font-mono">{source}</p>
    </div>
  );
}
