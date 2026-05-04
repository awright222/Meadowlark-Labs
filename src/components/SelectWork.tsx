const services = [
  {
    title: "Broken site repair",
    description:
      "Something isn't working and you need someone who can diagnose it quickly and fix it correctly.",
  },
  {
    title: "Ecommerce optimization",
    description:
      "Conversion problems, checkout friction, performance issues — measurable improvements, not guesswork.",
  },
  {
    title: "SEO structure",
    description:
      "Technical SEO, site architecture, and content structure built the right way from the ground up.",
  },
];

export default function SelectWork() {
  return (
    <section
      className="px-6 py-32 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Client work
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-4xl sm:text-5xl font-light leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "var(--foreground)",
              }}
            >
              Select work,
              <br />
              select clients.
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              We take on a small number of client projects each year. Availability
              is limited and the work has to be the right fit. If it is, we move
              quickly and deliver something that lasts.
            </p>
          </div>

          <div className="flex flex-col gap-0 border-t" style={{ borderColor: "var(--border)" }}>
            {services.map((s) => (
              <div
                key={s.title}
                className="py-7 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <h3
                  className="text-lg font-light mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "var(--foreground)",
                  }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
