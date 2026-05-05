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
              How I work
            </span>
          </div>

          <p
            className="text-2xl sm:text-3xl font-light leading-[1.4]"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--foreground)",
            }}
          >
            Most of my time is spent building my own products.
          </p>

          <p
            className="text-sm leading-relaxed mt-8"
            style={{ color: "var(--muted)" }}
          >
            Occasionally, I&rsquo;ll work with someone to fix something that&rsquo;s
            broken, improve an existing site, or build an idea from the ground up.
            I&rsquo;m not an agency — just a builder who likes working on things
            that are useful and well thought out.
          </p>
        </div>
      </div>
    </section>
  );
}
