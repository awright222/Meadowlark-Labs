import HeroIllustration from "@/components/HeroIllustration";

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="btn-arrow"
    >
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const delay = (s: number) => ({ "--delay": `${s}s` }) as React.CSSProperties;

// Server-rendered so the headline and copy are in the HTML and visible without
// JavaScript. Entrance motion is CSS-only (see .hero-* in globals.css).
export default function Hero() {
  return (
    <section
      className="lg:min-h-screen flex flex-col justify-center"
      style={{ paddingTop: "var(--navbar-h)" }}
    >
      <div className="site-container py-16 sm:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: text */}
        <div className="min-w-0 lg:col-span-7">
          <div
            className="hero-rise flex items-center gap-3 mb-8"
            style={delay(0.05)}
          >
            <span className="block w-8 h-0.5 shrink-0 bg-accent" aria-hidden="true" />
            <p className="min-w-0 text-xs font-medium tracking-[0.18em] uppercase text-muted [overflow-wrap:anywhere]">
              Independent software studio
            </p>
          </div>

          <h1
            className="hero-slide font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal leading-[1.04] tracking-[-0.01em] text-foreground mb-8"
            style={delay(0.15)}
          >
            Software built
            <br />
            to solve
            <br />
            real problems.
          </h1>

          <p
            className="hero-slide text-base sm:text-lg leading-relaxed max-w-xl text-muted"
            style={delay(0.28)}
          >
            I build websites, custom web applications, and practical software
            tools for businesses. Through Meadowlark Labs, I also develop my own
            products and bring the same thoughtful approach to every project.
          </p>

          <div
            className="hero-rise mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={delay(0.4)}
          >
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a project
              <Arrow />
            </a>
            <a href="#work" className="btn btn-secondary btn-lg">
              Explore my work
            </a>
          </div>
        </div>

        {/* Right: restrained decorative composition */}
        <HeroIllustration />
      </div>
    </section>
  );
}
