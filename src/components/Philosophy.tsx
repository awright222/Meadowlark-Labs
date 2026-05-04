export default function Philosophy() {
  return (
    <section className="px-6 py-32 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto">
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
            We don&rsquo;t take on everything. We take on the right things.
            Small team, direct communication, no overhead.
          </p>

          <p
            className="text-sm leading-relaxed mt-8"
            style={{ color: "var(--muted)" }}
          >
            Every product we ship is something we built because it solved a real
            problem. When we work with clients, that same standard applies.
          </p>
        </div>
      </div>
    </section>
  );
}
