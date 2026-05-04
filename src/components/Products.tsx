"use client";

const products = [
  {
    name: "DealForge",
    tagline: "Analyze real estate and business deals in minutes.",
    status: "Live",
    href: "https://dealforgehq.com",
  },
  {
    name: "BuildGrade",
    tagline: "Estimate construction costs with realistic inputs.",
    status: "Live",
    href: "https://buildgrade.io",
  },
  {
    name: "YardCalc",
    tagline: "Fast material calculators for outdoor projects.",
    status: "Live",
    href: "https://yardcalc.app",
  },
  {
    name: "OppMap",
    tagline: "Screen real estate opportunities by market signals.",
    status: "Beta",
    href: "https://oppmap.io",
  },
];

export default function Products() {
  return (
    <section id="work" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
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
        </div>

        <h2
          className="text-4xl sm:text-5xl font-light mb-16"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "var(--foreground)",
          }}
        >
          What we&rsquo;ve built
        </h2>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ backgroundColor: "var(--border)" }}
        >
          {products.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 transition-colors duration-200"
              style={{ backgroundColor: "var(--background)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--surface)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--background)")
              }
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
