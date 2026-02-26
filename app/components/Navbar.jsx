"use client";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
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
    <header className="sticky top-0 z-40 backdrop-blur border-b border-gray-700/60 bg-black/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/techxcel_mark.svg" alt="TechXcel Mark" className="h-8 w-8 shrink-0" />
            <span className="text-lg font-semibold leading-none tracking-tight">
              TechXcel <span className="text-yellow-400">Partners</span>
            </span>
          </a>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-blue-400">{l.label}</a>
            ))}
          </nav>

          {/* mobile toggle */}
          <button
            ref={btnRef}
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu-panel"
            onClick={() => setOpen(v => !v)}
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
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-64" : "max-h-0"}`}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-4">
          <div className="flex flex-col gap-3 rounded-lg border border-gray-700/60 bg-black/50 p-4">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2 px-2 rounded hover:bg-white/5" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}





