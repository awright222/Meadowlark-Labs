"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          &copy; {year} Meadowlark Labs LLC
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="text-xs transition-colors duration-150"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-xs transition-colors duration-150"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
