import Image from "next/image";

// Server-rendered: all copy is in the HTML and fully visible without JavaScript.
// The only motion is the CSS `.reveal` slide (see globals.css), which never hides content.
export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 border-t border-border bg-surface"
    >
      <div className="site-container">
        <div className="reveal flex items-center gap-4 mb-10 sm:mb-12">
          <span className="block w-8 h-0.5 bg-accent" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="max-w-lg">
            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.01em] text-foreground mb-8">
              I&rsquo;m Alex Wright, founder of Meadowlark Labs.
            </h2>
            <p className="reveal text-base leading-relaxed text-muted mb-5">
              Before moving into software development, I spent six years in
              real estate. Working with buyers, investors, and builders showed
              me how difficult it can be to make informed decisions when
              information is scattered across spreadsheets and disconnected
              tools.
            </p>
            <p className="reveal text-base leading-relaxed text-muted mb-5">
              So I started building small tools to answer the questions I kept
              running into. Those tools grew into the products above, and they
              shaped how I work: software should be clear, simple, and
              genuinely useful to the people who rely on it.
            </p>
            <p className="reveal text-base leading-relaxed text-muted">
              I also take on client projects, from websites to custom
              applications and business tools. If you have a problem worth
              solving, I&rsquo;d be glad to hear about it.
            </p>
          </div>

          <div className="reveal relative aspect-[3/4] w-full max-w-sm overflow-hidden md:justify-self-end">
            <Image
              src="/AlexWright.jpg"
              alt="Alex Wright"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
