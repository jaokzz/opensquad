"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Como comprar", href: "#como-comprar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* ── Floating pill nav ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-5 py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "bg-zinc-950/60 backdrop-blur-md border border-zinc-800/60"
        }`}
        style={{ width: "min(720px, calc(100vw - 2rem))" }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-semibold text-lg tracking-widest text-zinc-50 uppercase shrink-0"
        >
          Aura Fit
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-5 flex-1 justify-center">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="font-sans text-xs font-medium tracking-widest uppercase text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-brand text-zinc-950 font-sans text-xs font-bold tracking-widest uppercase rounded-full px-4 py-2 hover:bg-green-light transition-colors duration-200 shrink-0"
        >
          <MessageCircle size={12} strokeWidth={2.5} />
          WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto md:hidden text-zinc-300 hover:text-zinc-50 transition-colors"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollTo(l.href)}
                className="font-display text-5xl font-light italic text-zinc-50 hover:text-green-brand transition-colors duration-200"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-3 bg-green-brand text-zinc-950 font-sans font-bold tracking-widest uppercase rounded-full px-8 py-4 text-sm"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              Falar no WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
