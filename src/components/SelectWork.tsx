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
            I help founders
            <br />
            build from scratch.
          </h2>
          <p
            className="text-sm leading-relaxed max-w-lg"
            style={{ color: "var(--muted)" }}
          >
            A few times a year I work directly with founders and teams to bring
            an idea to life — from nothing to a real, working product. Not
            patching someone else&rsquo;s code. Starting clean, thinking clearly,
            and building something worth using. It has to be the right idea and
            the right person. If it is, I move fast.
          </p>
        </div>
      </div>
    </section>
  );
}
