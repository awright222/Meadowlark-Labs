"use client";

import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

export default function Philosophy() {
  return (
    <section className="py-32 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <motion.div className="flex items-center gap-4 mb-16" {...inView()}>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--border)" }} />
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              Working Together
            </span>
          </motion.div>

          <motion.p
            className="text-2xl sm:text-3xl font-light leading-[1.4] mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--foreground)",
            }}
            {...inView(0.08)}
          >
            Building software that solves real problems.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "var(--muted)" }}
            {...inView(0.14)}
          >
            Most of my time is spent building and growing my own products, so
            I only take on a handful of client projects each year.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed mb-10"
            style={{ color: "var(--muted)" }}
            {...inView(0.18)}
          >
            The best projects usually start with a real problem&mdash;not just a
            request for a website. Whether it&rsquo;s improving an existing
            product, building a custom application, or building something
            entirely new, I enjoy figuring out the simplest way to solve it.
          </motion.p>

          <motion.p
            className="text-xs tracking-[0.15em] uppercase mb-4"
            style={{ color: "var(--muted)" }}
            {...inView(0.22)}
          >
            Projects I typically take on
          </motion.p>

          <motion.ul
            className="flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.26 } },
            }}
          >
            {[
              "SaaS products & MVPs",
              "Shopify, WordPress & CMS customizations",
              "Next.js & React applications",
              "Internal business tools",
              "Calculators & interactive web tools",
            ].map((item) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 text-sm"
                style={{ color: "var(--muted)" }}
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
              >
                <div className="w-4 h-px flex-shrink-0" style={{ backgroundColor: "var(--border)" }} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
