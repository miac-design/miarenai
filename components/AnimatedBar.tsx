"use client";

interface AnimatedBarProps {
  /** Percentage width (0-100) */
  percentage: number;
  isInView: boolean;
  /** Delay in ms before animation starts */
  delay?: number;
  color?: string;
  height?: string;
}

export default function AnimatedBar({
  percentage,
  isInView,
  delay = 0,
  color = "var(--teal)",
  height = "h-2.5",
}: AnimatedBarProps) {
  return (
    <div className={`w-full ${height} bg-white/10 rounded-full overflow-hidden`}>
      <div
        className="h-full rounded-full transition-all ease-out"
        style={{
          width: isInView ? `${percentage}%` : "0%",
          backgroundColor: color,
          transitionDuration: "1.5s",
          transitionDelay: `${delay}ms`,
          boxShadow: isInView
            ? `0 0 12px ${color}40, 0 0 4px ${color}60`
            : "none",
        }}
      />
    </div>
  );
}
