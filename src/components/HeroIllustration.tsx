"use client";

import { motion, useReducedMotion } from "framer-motion";

const draw = (delay = 0, duration = 0.9) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: {
    pathLength: { duration, delay, ease: "easeInOut" as const },
    opacity: { duration: 0.15, delay },
  },
});

// Decorative hero composition. The card itself is plain HTML; only the line
// drawing needs JavaScript.
export default function HeroIllustration() {
  const reduceMotion = useReducedMotion();
  // Reduced motion: still reach the final state, just without the draw-in.
  const line = (delay: number, duration: number) =>
    reduceMotion
      ? { ...draw(0, 0), transition: { duration: 0 } }
      : draw(delay, duration);

  return (
    <div
      className="hero-fade hidden lg:flex lg:col-span-5 justify-end"
      style={{ "--delay": "0.3s" } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="w-full max-w-md bg-surface border border-border shadow-[var(--shadow-soft)] p-6">
        <svg viewBox="0 0 400 440" fill="none" className="w-full h-auto">
          <motion.path
            d="M 12,12 H 388 V 428 H 12 Z"
            className="stroke-border-strong"
            strokeWidth="1"
            {...line(0.4, 1.3)}
          />
          <motion.path
            d="M 44,44 H 356 V 396 H 44 Z"
            className="stroke-border"
            strokeWidth="1"
            {...line(0.8, 1.1)}
          />
          <motion.path
            d="M 68,68 H 180 V 132 H 68 Z"
            className="stroke-border-strong"
            strokeWidth="1"
            {...line(1.2, 0.6)}
          />
          <motion.path
            d="M 200,68 H 332 V 132 H 200 Z"
            className="stroke-accent fill-accent-soft"
            strokeWidth="1.25"
            {...line(1.35, 0.6)}
          />
          {[172, 198, 224, 250].map((y, i) => (
            <motion.path
              key={y}
              d={`M 68,${y} H ${[332, 284, 308, 244][i]}`}
              className="stroke-border-strong"
              strokeWidth="1"
              {...line(1.7 + i * 0.1, 0.4)}
            />
          ))}
          <motion.path
            d="M 68,300 H 176 V 344 H 68 Z"
            className="stroke-border"
            strokeWidth="1"
            {...line(2.1, 0.45)}
          />
          <motion.path
            d="M 196,300 H 332 V 344 H 196 Z"
            className="stroke-border"
            strokeWidth="1"
            {...line(2.2, 0.45)}
          />
        </svg>
      </div>
    </div>
  );
}
