export default function SelectWork() {
  return (
    <section
      className="py-32 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Ground Up
          </span>
        </div>

        <div className="max-w-2xl">
          <h2
            className="text-4xl sm:text-5xl font-light leading-[1.1] mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--foreground)",
            }}
          >
            Building from
            <br />
            scratch.
          </h2>
          <p
            className="text-sm leading-relaxed max-w-lg"
            style={{ color: "var(--muted)" }}
          >
            The projects we enjoy most are the ones that start simple — an idea,
            a rough direction, and room to think through it properly. That might
            mean rebuilding something that isn&rsquo;t working, or starting fresh
            and getting it right from the beginning. Either way, the goal is the
            same: build something clean, useful, and actually worth using.
          </p>
        </div>
      </div>
    </section>
  );
}
