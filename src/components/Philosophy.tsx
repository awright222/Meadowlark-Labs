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
              How we work
            </span>
          </div>

          <p
            className="text-2xl sm:text-3xl font-light leading-[1.4]"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--foreground)",
            }}
          >
            Most of our time is spent building our own products.
          </p>

          <p
            className="text-sm leading-relaxed mt-8"
            style={{ color: "var(--muted)" }}
          >
            Occasionally we&rsquo;ll work with someone to fix something that&rsquo;s
            broken, improve an existing site, or build an idea from the ground up.
            We&rsquo;re not an agency — just builders who like working on things
            that are useful and well thought out.
          </p>
        </div>
      </div>
    </section>
  );
}
