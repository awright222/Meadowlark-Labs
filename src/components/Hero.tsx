"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

const draw = (delay = 0, duration = 0.9) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: {
    pathLength: { duration, delay, ease: "easeInOut" as const },
    opacity: { duration: 0.15, delay },
  },
});

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center"
      style={{ paddingTop: "var(--navbar-h)" }}
    >
      <div className="max-w-7xl mx-auto w-full py-32 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

        {/* Left: text */}
        <div>
          <motion.p
            className="text-xs tracking-[0.2em] uppercase mb-8"
            style={{ color: "var(--accent)" }}
            {...fadeUp(0.1)}
          >
            Meadowlark Labs
          </motion.p>

          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-light leading-[1.05] mb-10"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--foreground)",
            }}
            {...fadeUp(0.2)}
          >
            Software for
            <br />
            real-world
            <br />
            decisions.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg max-w-lg leading-relaxed mb-6"
            style={{ color: "var(--muted)" }}
            {...fadeUp(0.35)}
          >
            I build practical software for people making important decisions.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg max-w-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
            {...fadeUp(0.42)}
          >
            Most of my time is spent building products through Meadowlark Labs.
            Alongside that, I partner with businesses to design and build custom
            software, websites, and tools.
          </motion.p>

          <motion.div className="mt-16 flex items-center gap-3" {...fadeUp(0.5)}>
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--border)" }}
            />
            <a
              href="#work"
              className="text-xs tracking-[0.15em] uppercase transition-colors duration-150"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              View My Work
            </a>
          </motion.div>

          <motion.div className="mt-12 flex flex-wrap gap-x-6 gap-y-2" {...fadeUp(0.58)}>
            {["DealForge", "BuildGrade", "YardCalc", "OppMap"].map((name) => (
              <span
                key={name}
                className="text-xs tracking-[0.12em] uppercase"
                style={{ color: "#2e2e2e" }}
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: self-drawing geometric wireframe */}
        <div className="hidden lg:flex items-center justify-end pr-8" aria-hidden="true">
          <svg
            viewBox="0 0 480 520"
            fill="none"
            className="w-full max-w-sm xl:max-w-md"
          >
            {/* Outermost frame */}
            <motion.path
              d="M 14,14 L 466,14 L 466,506 L 14,506 Z"
              stroke="#363636"
              strokeWidth="1"
              {...draw(0.4, 1.4)}
            />
            {/* Second frame */}
            <motion.path
              d="M 58,56 L 422,56 L 422,458 L 58,458 Z"
              stroke="#2e2e2e"
              strokeWidth="1"
              {...draw(0.85, 1.1)}
            />
            {/* Inner frame */}
            <motion.path
              d="M 106,106 L 374,106 L 374,400 L 106,400 Z"
              stroke="#282828"
              strokeWidth="1"
              {...draw(1.2, 0.9)}
            />
            {/* Top card — left */}
            <motion.path
              d="M 128,128 L 228,128 L 228,192 L 128,192 Z"
              stroke="#262626"
              strokeWidth="0.75"
              {...draw(1.55, 0.55)}
            />
            {/* Top card — right */}
            <motion.path
              d="M 248,128 L 352,128 L 352,192 L 248,192 Z"
              stroke="#262626"
              strokeWidth="0.75"
              {...draw(1.68, 0.55)}
            />
            {/* Data rows */}
            <motion.path
              d="M 128,230 L 352,230"
              stroke="#222222"
              strokeWidth="0.75"
              {...draw(1.95, 0.4)}
            />
            <motion.path
              d="M 128,256 L 312,256"
              stroke="#222222"
              strokeWidth="0.75"
              {...draw(2.05, 0.38)}
            />
            <motion.path
              d="M 128,282 L 330,282"
              stroke="#222222"
              strokeWidth="0.75"
              {...draw(2.14, 0.38)}
            />
            <motion.path
              d="M 128,308 L 288,308"
              stroke="#222222"
              strokeWidth="0.75"
              {...draw(2.22, 0.35)}
            />
            {/* Bottom stat bars */}
            <motion.path
              d="M 128,352 L 218,352 L 218,376 L 128,376 Z"
              stroke="#252525"
              strokeWidth="0.75"
              {...draw(2.4, 0.45)}
            />
            <motion.path
              d="M 238,352 L 352,352 L 352,376 L 238,376 Z"
              stroke="#252525"
              strokeWidth="0.75"
              {...draw(2.5, 0.45)}
            />
          </svg>
        </div>

      </div>
    </section>
  );
}
