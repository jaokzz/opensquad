"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hamburgueres", label: "Hambúrgueres" },
  { href: "#pizzas",       label: "Pizzas"       },
  { href: "#porcoes",      label: "Porções"      },
  { href: "#drinks",       label: "Bar"          },
  { href: "#sobre",        label: "Contato"      },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-2xl border-b border-cream/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        <a href="#hero" className="font-display text-[28px] tracking-[4px] text-amber select-none">
          Armazém
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-muted hover:text-cream text-[11px] font-bold tracking-[2px] uppercase transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://app.anota.ai/m/MVq8UyWqw"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 bg-amber hover:bg-amber2 text-bg text-[11px] font-extrabold tracking-[2px] uppercase px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(232,137,12,0.3)]"
        >
          Fazer Pedido →
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-cream transition-all ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-cream transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-cream transition-all ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 bg-bg2 border border-cream/5 rounded-2xl px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-cream text-[13px] font-bold tracking-[2px] uppercase border-b border-cream/5 pb-4 last:border-0 last:pb-0"
            >
              {label}
            </a>
          ))}
          <a
            href="https://app.anota.ai/m/MVq8UyWqw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber text-bg text-[12px] font-extrabold tracking-[2px] uppercase py-3.5 rounded-xl text-center"
          >
            🍔 Fazer Pedido
          </a>
        </div>
      )}
    </nav>
  );
}
