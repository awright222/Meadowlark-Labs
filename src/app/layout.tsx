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
  title: "Meadowlark Labs",
  description:
    "Meadowlark Labs is a small product studio. We ship focused web applications and take on a handful of client projects each year.",
  openGraph: {
    title: "Meadowlark Labs",
    description:
      "Meadowlark Labs is a small product studio. We ship focused web applications and take on a handful of client projects each year.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
