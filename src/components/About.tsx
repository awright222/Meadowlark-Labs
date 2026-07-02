"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

export default function About() {
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
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="max-w-md">
            <motion.p
              className="text-2xl sm:text-3xl font-light leading-[1.4] mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "var(--foreground)",
              }}
              {...inView(0.08)}
            >
              I&rsquo;m Alex Wright, founder of Meadowlark Labs.
            </motion.p>
            <motion.p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
              {...inView(0.16)}
            >
              Before building software full time, I worked in real estate, where
              I saw firsthand how often important decisions were made with
              incomplete information or clunky tools. Today I build products
              that make those decisions a little clearer.
            </motion.p>
          </div>

          <motion.div
            className="relative aspect-[3/4] w-full max-w-sm overflow-hidden"
            style={{ borderColor: "var(--border)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/AlexWright.png"
              alt="Alex Wright"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
