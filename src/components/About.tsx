import Image from "next/image";

export default function About() {
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
            About
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="max-w-md">
            <p
              className="text-2xl sm:text-3xl font-light leading-[1.4] mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "var(--foreground)",
              }}
            >
              I&rsquo;m Alex Wright, founder of Meadowlark Labs.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Before building software full time, I worked in real estate, where
              I saw firsthand how often important decisions were made with
              incomplete information or clunky tools. Today I build products
              that make those decisions a little clearer.
            </p>
          </div>

          <div className="relative aspect-square w-full max-w-sm md:max-w-full overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <Image
              src="/AlexWright.png"
              alt="Alex Wright"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
