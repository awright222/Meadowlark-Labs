import Image from "next/image";

// Screenshots are captures of each live, public product page (see public/products).
const products = [
  {
    name: "DealForge",
    category: "Deal analysis",
    description:
      "Underwrite real estate and business deals with cap rate, DSCR, IRR and cash-flow analysis, and get a clear invest-or-pass verdict.",
    href: "https://dealforgehq.com",
    domain: "dealforgehq.com",
    image: "/products/dealforge.webp",
    alt: "DealForge sample analysis of a laundromat acquisition, showing an investment score of 89 out of 100, a Strong Buy verdict and a score breakdown.",
  },
  {
    name: "BuildGrade",
    category: "Cost estimating",
    description:
      "Interactive cost calculators for garages, shops, metal buildings and commercial projects. Adjust size, type and finish to see the estimate change.",
    href: "https://www.usebuildgrade.com/",
    domain: "usebuildgrade.com",
    image: "/products/buildgrade.webp",
    alt: "BuildGrade garage cost calculator with size, building type and finish inputs beside an estimated project cost range for a 24 by 24 foot garage.",
  },
  {
    name: "YardCalc",
    category: "Material calculators",
    description:
      "Free calculators and project guides for gravel, mulch, concrete, topsoil and more, with results in cubic yards, tons and estimated cost.",
    href: "https://yardcalcapp.com/",
    domain: "yardcalcapp.com",
    image: "/products/yardcalc.webp",
    alt: "YardCalc gravel calculator for a 20 by 15 foot area at 3 inches deep, showing 2.78 cubic yards, 3.75 tons and an estimated cost range.",
  },
  {
    name: "OppMap",
    category: "Market screening",
    description:
      "Screen commercial real estate opportunities in any U.S. market, scored on demand, supply, cost and risk using public data signals.",
    href: "https://www.oppmap.com/",
    domain: "oppmap.com",
    image: "/products/oppmap.webp",
    alt: "OppMap market screening results for Bozeman, Montana, showing a warehouse opportunity scored 70 with key signals, risks and a map of nearby competitors.",
  },
];

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M1 11L11 1M11 1H4M11 1v7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="work" className="theme-dark py-24 sm:py-32">
      <div className="site-container">
        <div className="flex items-center gap-4 mb-10 sm:mb-12">
          <span className="block w-8 h-0.5 bg-accent" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
            Work
          </span>
        </div>

        <div className="max-w-2xl mb-14 sm:mb-20">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-[-0.01em] text-foreground mb-6">
            Products I&rsquo;ve built.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-muted">
            Four software products I designed and built myself. Each one is
            live and does real work, so you can open any of them and try it.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 lg:gap-x-10">
          {products.map((p) => (
            <li key={p.name} className="flex">
              <article className="group relative flex w-full flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-surface transition-colors duration-200 group-hover:border-accent/60">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1280px) 560px, (min-width: 768px) 45vw, 100vw"
                    className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col pt-6">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent">
                      {p.category}
                    </p>
                    <p className="flex items-center gap-2 text-xs text-muted">
                      <span
                        className="block h-1.5 w-1.5 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      Live
                    </p>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-normal leading-tight text-foreground mb-3">
                    {p.name}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted max-w-lg mb-6">
                    {p.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stretched-link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      Visit {p.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                      <ExternalIcon />
                    </a>
                    <span className="text-xs text-muted" aria-hidden="true">
                      {p.domain}
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
