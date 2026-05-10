import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Lab — Meadowlark",
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
