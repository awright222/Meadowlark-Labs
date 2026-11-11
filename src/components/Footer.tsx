"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="site-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          &copy; {year} Meadowlark Labs LLC
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="link-muted text-xs"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="link-muted text-xs"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
