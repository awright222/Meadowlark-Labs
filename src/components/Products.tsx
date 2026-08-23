"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
};

const products = [
  {
    name: "DealForge",
    tagline: "Analyze real estate and business investments with professional-grade underwriting tools.",
    status: "Live",
    href: "https://dealforgehq.com",
  },
  {
    name: "BuildGrade",
    tagline: "Construction cost calculators and planning tools for homeowners, builders, and developers.",
    status: "Live",
    href: "https://www.usebuildgrade.com/",
  },
  {
    name: "YardCalc",
    tagline: "Material calculators and practical guides for landscaping and outdoor projects.",
    status: "Live",
    href: "https://yardcalcapp.com/",
  },
  {
    name: "OppMap",
    tagline: "Research market opportunities using infrastructure, growth, and demographic signals.",
    status: "Live",
    href: "https://www.oppmap.com/",
  },
];

export default function Products() {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Products
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl font-light mb-16"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "var(--foreground)",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.05 }}
        >
          Products
        </motion.h2>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ backgroundColor: "var(--border)" }}
        >
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 transition-colors duration-200"
              style={{ backgroundColor: "var(--background)" }}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -2, backgroundColor: "var(--surface)" }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="text-2xl font-light"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "var(--foreground)",
                  }}
                >
                  {p.name}
                </h3>
                <span
                  className="text-xs tracking-wide px-2 py-1 border mt-1"
                  style={{
                    color:
                      p.status === "Live"
                        ? "var(--accent)"
                        : "var(--muted)",
                    borderColor:
                      p.status === "Live"
                        ? "var(--accent)"
                        : "var(--border)",
                  }}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                {p.tagline}
              </p>
              <span
                className="text-xs tracking-[0.15em] uppercase transition-colors duration-150 flex items-center gap-2"
                style={{ color: "var(--muted)" }}
              >
                Visit
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                >
                  <path
                    d="M1 11L11 1M11 1H4M11 1v7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
