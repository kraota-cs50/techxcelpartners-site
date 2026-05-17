"use client";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 4);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e) {
      if (!open) return;
      const t = e.target;
      if (panelRef.current && !panelRef.current.contains(t) && !btnRef.current?.contains(t)) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md bg-[color:var(--background)]/70 border-b transition-colors duration-200 ${
        scrolled ? "border-[color:var(--border)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center" aria-label="TechXcel Partners — home">
            <span className="font-sans text-lg font-semibold leading-none tracking-tight">
              <span className="text-[color:var(--text-primary)]">TechXcel</span>{" "}
              <span className="text-[color:var(--accent)]">Partners</span>
            </span>
          </a>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* mobile toggle */}
          <button
            ref={btnRef}
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/40"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu-panel"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-5 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        id="mobile-menu-panel"
        ref={panelRef}
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-72" : "max-h-0"}`}
      >
        <nav className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 pb-6">
          <div className="flex flex-col gap-1 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 px-3 rounded text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-white/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
