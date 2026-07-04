"use client";

import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

export default function SelectWork() {
  return (
    <section
      className="py-32 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="flex items-center gap-4 mb-16" {...inView()}>
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Ground Up
          </span>
        </motion.div>

        <div className="max-w-2xl">
          <motion.h2
            className="text-4xl sm:text-5xl font-light leading-[1.1] mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--foreground)",
            }}
            {...inView(0.08)}
          >
            From problem
            <br />
            to product.
          </motion.h2>
          <motion.p
            className="text-sm leading-relaxed max-w-lg mb-5"
            style={{ color: "var(--muted)" }}
            {...inView(0.14)}
          >
            Some projects need thoughtful improvements. Others are better
            rebuilt from the ground up. Either way, my focus is the same:
            understand the problem, keep the solution simple, and build
            something that&rsquo;s dependable long after launch.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
