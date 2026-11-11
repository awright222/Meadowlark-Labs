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
      id="about"
      className="py-24 sm:py-32 border-t border-border bg-surface"
    >
      <div className="site-container">
        <motion.div className="flex items-center gap-4 mb-10 sm:mb-12" {...inView()}>
          <span className="block w-8 h-0.5 bg-accent" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="max-w-lg">
            <motion.h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.01em] text-foreground mb-8"
              {...inView(0.08)}
            >
              I&rsquo;m Alex Wright, founder of Meadowlark Labs.
            </motion.h2>
            <motion.p
              className="text-base leading-relaxed text-muted mb-5"
              {...inView(0.16)}
            >
              Before moving into software development, I spent six years in
              real estate. Working with buyers, investors, and builders showed
              me how difficult it can be to make informed decisions when
              information is scattered across spreadsheets and disconnected
              tools.
            </motion.p>
            <motion.p
              className="text-base leading-relaxed text-muted mb-5"
              {...inView(0.22)}
            >
              So I started building small tools to answer the questions I kept
              running into. Those tools grew into the products above, and they
              shaped how I work: software should be clear, simple, and
              genuinely useful to the people who rely on it.
            </motion.p>
            <motion.p
              className="text-base leading-relaxed text-muted"
              {...inView(0.28)}
            >
              I also take on client projects, from websites to custom
              applications and business tools. If you have a problem worth
              solving, I&rsquo;d be glad to hear about it.
            </motion.p>
          </div>

          <motion.div
            className="relative aspect-[3/4] w-full max-w-sm overflow-hidden md:justify-self-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/AlexWright.jpg"
              alt="Alex Wright"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
