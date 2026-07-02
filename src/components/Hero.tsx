"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center"
      style={{ paddingTop: "var(--navbar-h)" }}
    >
      <div className="max-w-7xl mx-auto w-full py-32 px-6">
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
    </section>
  );
}
