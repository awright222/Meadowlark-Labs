"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        height: "var(--navbar-h)",
        borderColor: "var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="w-full px-8 h-full flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logowhite.png"
            alt="Meadowlark Labs"
            width={64}
            height={64}
            className="object-contain"
          />
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: "var(--foreground)" }}
          >
            Meadowlark Labs
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          <Link
            href="#work"
            className="text-sm transition-colors duration-150"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--foreground)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-sm transition-colors duration-150"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--foreground)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden p-2"
          style={{ color: "var(--muted)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1l16 16M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 4h16M1 9h16M1 14h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--background)",
          }}
        >
          <Link
            href="#work"
            className="text-sm"
            style={{ color: "var(--muted)" }}
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-sm"
            style={{ color: "var(--muted)" }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
