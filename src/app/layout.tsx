import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
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
  title: "Meadowlark Labs — Alex Wright, Freelance Software Developer",
  verification: { google: "H2e_Ip5ozeSd72uGz7BVE1T6v5FZld-XPp5OVqHpQqw" },
  description:
    "Alex Wright is a freelance software developer and founder of Meadowlark Labs. He builds custom web applications, internal tools, and client software for businesses.",
  openGraph: {
    title: "Meadowlark Labs — Alex Wright, Freelance Software Developer",
    description:
      "Alex Wright is a freelance software developer and founder of Meadowlark Labs. He builds custom web applications, internal tools, and client software for businesses.",
    url: "https://meadowlark-labs.com",
    siteName: "Meadowlark Labs",
    locale: "en_US",
    type: "website",
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
              url: "https://meadowlark-labs.com",
              jobTitle: "Freelance Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Meadowlark Labs",
                url: "https://meadowlark-labs.com",
              },
              description:
                "Alex Wright is a freelance software developer who builds custom web applications, internal tools, and client software for businesses.",
              knowsAbout: [
                "Web Development",
                "Software Development",
                "Custom Web Applications",
                "Internal Tools",
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
        {children}
      </body>
    </html>
  );
}
