const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
          {/* Wordmark + tagline */}
          <div>
            <span className="font-sans text-lg font-semibold leading-none tracking-tight">
              <span className="text-[color:var(--text-primary)]">TechXcel</span>{" "}
              <span className="text-[color:var(--accent)]">Partners</span>
            </span>
            <p className="mt-2 text-xs sm:text-sm text-[color:var(--text-secondary)]">
              Product strategy, business analysis, and AI adoption.
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-[color:var(--border)] pt-6 text-center text-xs text-[color:var(--text-secondary)] md:text-left">
          © {year} TechXcel Partners. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
