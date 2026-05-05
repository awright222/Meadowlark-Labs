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
      </div>
    </footer>
  );
}
