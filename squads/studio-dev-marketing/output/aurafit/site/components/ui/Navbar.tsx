"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Instagram", href: "https://www.instagram.com/ld_aurafit" },
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
      {/* ── Header fixo full-width ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 h-16 transition-all duration-500 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo — esquerda */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Aura Fit — início"
          className="shrink-0 flex items-center self-center"
        >
          <img
            src="/aurafitlogo-branca.svg"
            alt="Aura Fit"
            className="h-10 w-auto object-contain block"
            draggable={false}
          />
        </button>

        {/* Links — centro (desktop) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((l) =>
            l.href.startsWith("http") ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-medium tracking-widest uppercase text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
              >
                {l.label}
              </a>
            ) : (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="font-sans text-xs font-medium tracking-widest uppercase text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
              >
                {l.label}
              </button>
            )
          )}
        </nav>

        {/* CTA + hamburger — direita */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-green-brand text-zinc-950 font-sans text-xs font-bold tracking-widest uppercase rounded-full px-5 py-2.5 hover:bg-green-light transition-colors duration-200"
          >
            <MessageCircle size={13} strokeWidth={2.5} />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-zinc-300 hover:text-zinc-50 transition-colors p-2.5"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
                onClick={() => {
                  if (l.href.startsWith("http")) {
                    setOpen(false);
                    window.open(l.href, "_blank", "noopener,noreferrer");
                  } else {
                    scrollTo(l.href);
                  }
                }}
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
