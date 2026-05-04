export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-10 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          &copy; {year} Meadowlark Labs LLC
        </p>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Wyoming
        </p>
      </div>
    </footer>
  );
}
