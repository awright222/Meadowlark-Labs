export default function Philosophy() {
  return (
    <section className="py-32 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px" style={{ backgroundColor: "var(--border)" }} />
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              Working Together
            </span>
          </div>

          <p
            className="text-2xl sm:text-3xl font-light leading-[1.4] mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--foreground)",
            }}
          >
            Building software that solves real problems.
          </p>

          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "var(--muted)" }}
          >
            Most of my time is spent building and growing my own products, so
            I only take on a handful of client projects each year.
          </p>

          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: "var(--muted)" }}
          >
            The best projects usually start with a real problem—not just a
            request for a website. Whether it&rsquo;s improving an existing
            product, building a custom application, or launching something
            entirely new, I enjoy figuring out the simplest way to solve it.
          </p>

          <p
            className="text-xs tracking-[0.15em] uppercase mb-4"
            style={{ color: "var(--muted)" }}
          >
            Projects I typically take on
          </p>

          <ul className="flex flex-col gap-2">
            {[
              "SaaS products & MVPs",
              "Shopify, WordPress & CMS customizations",
              "Next.js & React applications",
              "Internal business tools",
              "Calculators & interactive web tools",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <div className="w-4 h-px flex-shrink-0" style={{ backgroundColor: "var(--border)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
