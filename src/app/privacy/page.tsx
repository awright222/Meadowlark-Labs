import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const description =
  "How Meadowlark Labs handles the information you share through the contact form.";

export const metadata: Metadata = {
  title: "Privacy Policy — Meadowlark Labs",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Meadowlark Labs",
    description,
    url: "/privacy",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Meadowlark Labs",
    description,
    images: ["/twitter-image.png"],
  },
};

export default function Privacy() {
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
          Privacy Policy
        </h1>
        <p className="text-xs mb-16" style={{ color: "var(--muted)" }}>
          Last updated November 11, 2026
        </p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              What we collect
            </h2>
            <p>
              When you submit the contact form on this site, we collect your
              name, email address, and the message you provide. To help limit
              repeated or automated submissions, the server temporarily holds
              your IP address, together with the time of your request, in
              short-lived memory. It is not written to a database and is not
              included in the message we receive. We do not otherwise collect
              personal information through this site, and we do not use cookies
              or tracking scripts.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              How it&rsquo;s used
            </h2>
            <p>
              The information you submit is used solely to respond to your
              inquiry. We do not store your message beyond what is delivered to
              our inbox, and we do not add you to any mailing lists.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Third-party services
            </h2>
            <p>
              This site is hosted on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Vercel
              </a>
              . Contact form submissions are sent via{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Resend
              </a>
              . Both services may process your data in accordance with their own
              privacy policies.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-normal mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Data sharing
            </h2>
            <p>
              We do not sell, rent, or share your personal information with any
              third parties for marketing purposes.
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
              Questions about this policy can be directed to{" "}
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
