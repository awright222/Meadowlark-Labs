"use client";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center"
      style={{ paddingTop: "var(--navbar-h)" }}
    >
      <div className="max-w-7xl mx-auto w-full py-32 px-6">
        <p
          className="text-xs tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--accent)" }}
        >
          Meadowlark Labs
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-light leading-[1.05] mb-10"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "var(--foreground)",
          }}
        >
          Software for
          <br />
          real-world
          <br />
          decisions.
        </h1>

        <p
          className="text-base sm:text-lg max-w-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Meadowlark Labs is where we build and run a set of web applications.
          Every now and then, we also help bring other ideas to life.
        </p>

        <div className="mt-16 flex items-center gap-3">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <a
            href="#work"
            className="text-xs tracking-[0.15em] uppercase transition-colors duration-150"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--foreground)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            View work
          </a>
        </div>
      </div>
    </section>
  );
}
