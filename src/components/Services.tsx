const services = [
  {
    title: "Business websites",
    description:
      "Modern, responsive websites for businesses that need a professional online presence, from a new build to a refresh of the site you already have.",
    examples: [
      "Company and service-business sites",
      "Redesigns of existing websites",
      "Shopify, WordPress, and CMS updates",
    ],
  },
  {
    title: "Custom web applications",
    description:
      "Purpose-built applications, internal business tools, dashboards, and MVPs, designed around how your team actually works.",
    examples: [
      "Internal tools and dashboards",
      "MVPs for new product ideas",
      "Replacing spreadsheets with real software",
    ],
  },
  {
    title: "Calculators and interactive tools",
    description:
      "Interactive estimators, specialized calculators, and other tools that make a complicated process simple for your customers or your team.",
    examples: [
      "Cost and quote estimators",
      "Planning and material calculators",
      "Tools that live on your own website",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="site-container">
        <div className="flex items-center gap-4 mb-10 sm:mb-12">
          <span className="block w-8 h-0.5 bg-accent" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
            Services
          </span>
        </div>

        <div className="max-w-2xl mb-14 sm:mb-20">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-[-0.01em] text-foreground mb-6">
            Thoughtful software
            <br className="hidden sm:block" /> for your business.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-muted">
            Whether you need a professional website, a custom application, or a
            tool built around the way your business works, I can help bring it
            to life.
          </p>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <li key={s.title} className="flex">
              <article className="flex w-full flex-col border border-border bg-surface p-8 lg:p-10">
                <p
                  className="font-display text-lg text-muted mb-8"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-3xl font-normal leading-tight text-foreground mb-4">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-muted mb-8">
                  {s.description}
                </p>
                <ul className="mt-auto flex flex-col gap-3 border-t border-border pt-6 text-sm text-foreground">
                  {s.examples.map((e) => (
                    <li key={e} className="flex items-start gap-3">
                      <span
                        className="mt-[0.7em] block h-px w-4 shrink-0 bg-border-strong"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 [overflow-wrap:anywhere]">{e}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 sm:mt-20 flex flex-col gap-8 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-muted">
            Not sure what you need? Some projects call for thoughtful
            improvements to what you already have; others are better rebuilt
            from the ground up. Tell me about the problem and we&rsquo;ll figure
            out the simplest way to solve it.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg self-start md:self-auto">
            Start a project
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
          </a>
        </div>
      </div>
    </section>
  );
}
