"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star, Users, MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: i * 0.12, duration: 0.8, ease: EASE },
});

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["aura.", "força.", "beleza.", "essência.", "vida."],
    []
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-bg">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 10%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/50 to-zinc-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
      </div>

      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-green-brand/15 blur-[100px]" />
        <div className="blob-2 absolute bottom-10 right-0 w-[280px] h-[280px] rounded-full bg-green-brand/10 blur-[90px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between text-center px-5 pt-24 pb-10 min-h-[100dvh] max-w-lg mx-auto w-full">

        {/* TOPO — Logo */}
        <motion.div {...fadeUp(0)} className="flex flex-col items-center w-full">
          <img
            src="/aurafitlogo-branca.svg"
            alt="Aura Fit"
            className="h-24 sm:h-28 md:h-36 w-auto object-contain drop-shadow-[0_4px_24px_rgba(34,197,94,0.35)]"
            draggable={false}
          />
        </motion.div>

        {/* MEIO — Headline com texto animado */}
        <div className="flex flex-col items-center gap-4">
          <motion.h1
            {...fadeUp(1)}
            className="display-xl font-display font-light text-zinc-50 tracking-tight"
            style={{ lineHeight: 1 }}
          >
            {/* Linha 1 e 2 fixas */}
            <span className="block">Do treino</span>
            <span className="block italic text-green-brand">à sua</span>

            {/* Linha 3 — palavra ciclante */}
            <span className="relative flex justify-center overflow-hidden h-[1.1em]">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-light"
                  initial={{ opacity: 0, y: 80 }}
                  transition={{ type: "spring", stiffness: 60, damping: 14 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: titleNumber > index ? -80 : 80,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(2)} className="font-sans text-zinc-400 text-sm leading-relaxed max-w-[260px]">
            Peças femininas e masculinas para quem vive em movimento.
          </motion.p>
        </div>

        {/* BASE — Stats + CTAs */}
        <div className="flex flex-col items-center gap-5 w-full">

          <motion.div {...fadeUp(3)} className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { Icon: Star,   text: "4.5K+ seguidoras" },
              { Icon: MapPin, text: "Iporã do Oeste · SC" },
              { Icon: Users,  text: "Fem. & Masc." },
            ].map(({ Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 font-sans text-[11px] text-zinc-500">
                <Icon size={11} className="text-green-brand shrink-0" />
                {text}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(4)} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ring inline-flex items-center justify-center gap-2 rounded-full bg-green-brand px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-zinc-950 hover:bg-green-light transition-colors duration-300 w-full sm:w-auto"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              Falar no WhatsApp
            </a>
            <button
              onClick={() => document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-600 px-6 py-3.5 font-sans text-xs font-medium tracking-widest uppercase text-zinc-300 hover:border-zinc-400 hover:text-zinc-50 transition-colors duration-300 w-full sm:w-auto"
            >
              Ver produtos
              <ArrowRight size={13} strokeWidth={2} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-zinc-600">Rolar</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}
