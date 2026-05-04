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
            Occasional collaborations
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
            Sometimes I help
            <br />
            outside teams.
          </h2>
          <p
            className="text-sm leading-relaxed max-w-lg"
            style={{ color: "var(--muted)" }}
          >
            A small number of times each year, I work directly with founders or
            teams on web problems worth solving — broken sites, slow stores,
            structural issues that are costing real money. It has to be the right
            problem and the right person. If it is, I move fast.
          </p>
        </div>
      </div>
    </section>
  );
}
