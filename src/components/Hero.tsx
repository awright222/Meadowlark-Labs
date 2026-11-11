"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

const draw = (delay = 0, duration = 0.9) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: {
    pathLength: { duration, delay, ease: "easeInOut" as const },
    opacity: { duration: 0.15, delay },
  },
});

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="btn-arrow"
    >
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const line = (delay: number, duration: number) =>
    reduceMotion ? {} : draw(delay, duration);

  return (
    <section
      className="lg:min-h-screen flex flex-col justify-center"
      style={{ paddingTop: "var(--navbar-h)" }}
    >
      <div className="site-container py-16 sm:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: text */}
        <div className="lg:col-span-7">
          <motion.div className="flex items-center gap-3 mb-8" {...fadeUp(0.05)}>
            <span className="block w-8 h-0.5 bg-accent" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted">
              Independent software studio
            </p>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal leading-[1.04] tracking-[-0.01em] text-foreground mb-8"
            {...fadeUp(0.15)}
          >
            Software built
            <br />
            to solve
            <br />
            real problems.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg leading-relaxed max-w-xl text-muted"
            {...fadeUp(0.28)}
          >
            I build websites, custom web applications, and practical software
            tools for businesses. Through Meadowlark Labs, I also develop my own
            products and bring the same thoughtful approach to every project.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            {...fadeUp(0.4)}
          >
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a project
              <Arrow />
            </a>
            <a href="#work" className="btn btn-secondary btn-lg">
              Explore my work
            </a>
          </motion.div>
        </div>

        {/* Right: restrained decorative composition */}
        <motion.div
          className="hidden lg:flex lg:col-span-5 justify-end"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
        </motion.div>
      </div>
    </section>
  );
}
