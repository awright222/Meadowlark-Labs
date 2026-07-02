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
            From idea to
            <br />
            production.
          </h2>
          <p
            className="text-sm leading-relaxed max-w-lg mb-5"
            style={{ color: "var(--muted)" }}
          >
            Some projects need a few thoughtful improvements. Others are better
            rebuilt from the ground up.
          </p>
          <p
            className="text-sm leading-relaxed max-w-lg"
            style={{ color: "var(--muted)" }}
          >
            I enjoy taking an idea from an early conversation through design,
            development, deployment, and long-term iteration. The goal
            isn&rsquo;t simply to launch software—it&rsquo;s to build something
            reliable, intuitive, and worth coming back to.
          </p>
        </div>
      </div>
    </section>
  );
}
