"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointerDown(e: PointerEvent) {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 768px)");
    function onBreakpoint(e: MediaQueryListEvent) {
      if (e.matches) setMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
    >
      <div
        className="site-container flex items-center justify-between"
        style={{ height: "var(--navbar-h)" }}
      >
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 -ml-2">
          <Image
            src="/logo.png"
            alt=""
            width={56}
            height={56}
            className="object-contain"
            priority
          />
          <span className="text-sm font-medium tracking-wide text-foreground">
            Meadowlark Labs
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-muted text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-md">
            Start a project
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden -mr-2 p-2 text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M1 4h16M1 9h16M1 14h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden border-t border-border bg-background"
        >
          <div className="site-container py-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 text-base text-foreground border-b border-border"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary btn-lg mt-5"
              onClick={() => setMenuOpen(false)}
            >
              Start a project
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
