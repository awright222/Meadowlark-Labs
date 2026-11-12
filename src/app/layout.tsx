import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  verification: { google: "H2e_Ip5ozeSd72uGz7BVE1T6v5FZld-XPp5OVqHpQqw" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alex Wright",
              url: SITE_URL,
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",
                name: SITE_NAME,
                url: SITE_URL,
                description: SITE_DESCRIPTION,
              },
              description: `Alex Wright is the founder of ${SITE_NAME}, an independent software studio that builds websites, custom web applications, and practical business tools for clients, and develops its own software products.`,
              knowsAbout: [
                "Website development",
                "Custom web applications",
                "Internal business tools",
                "Calculators and interactive tools",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cody",
                addressRegion: "WY",
                addressCountry: "US",
              },
            }),
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
