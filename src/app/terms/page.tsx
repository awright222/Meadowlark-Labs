import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Meadowlark Labs",
};

export default function Terms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-xs tracking-[0.15em] uppercase mb-16 inline-flex items-center gap-2 transition-colors duration-150"
          style={{ color: "var(--muted)" }}
        >
          ← Back
        </Link>

        <h1
          className="text-4xl sm:text-5xl font-light leading-[1.1] mt-8 mb-4"
          style={{ fontFamily: "var(--font-cormorant)", color: "var(--foreground)" }}
        >
          Terms of Use
        </h1>
        <p className="text-xs mb-16" style={{ color: "var(--muted)" }}>
          Last updated May 4, 2026
        </p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Use of this site
            </h2>
            <p>
              This site is provided for informational purposes. By using it, you
              agree to these terms. If you don&rsquo;t agree, please don&rsquo;t
              use the site.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              No warranties
            </h2>
            <p>
              This site and any tools or content linked from it are provided
              &ldquo;as is&rdquo; without warranty of any kind. We make no
              guarantees about accuracy, completeness, or fitness for a
              particular purpose.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Limitation of liability
            </h2>
            <p>
              Meadowlark Labs LLC is not liable for any damages arising from
              your use of this site or any products linked from it, including
              calculators, estimates, or analysis tools. Output from our tools
              is for informational purposes only and should not be relied upon
              as professional financial, legal, or construction advice.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Intellectual property
            </h2>
            <p>
              All content on this site is owned by Meadowlark Labs LLC unless
              otherwise noted. You may not reproduce or redistribute it without
              permission.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Changes
            </h2>
            <p>
              We may update these terms at any time. Continued use of the site
              after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Contact
            </h2>
            <p>
              Questions can be directed to{" "}
              <a
                href="mailto:alex@meadowlark-labs.com"
                className="underline underline-offset-2"
              >
                alex@meadowlark-labs.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
