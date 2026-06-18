"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Users } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-bg">
      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-green-brand/20 blur-[120px]" />
        <div className="blob-2 absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full bg-green-brand/15 blur-[100px]" />
        <div className="blob-3 absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-green-dark/20 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-8 items-center">

        {/* Left: text column */}
        <div className="flex flex-col gap-7">

          <motion.div
            custom={0} variants={FADE_UP} initial="hidden" animate="show"
            className="flex items-center gap-2.5 w-fit"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-brand/30 bg-green-brand/8 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-brand animate-pulse" />
              <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-green-brand">
                Energia que veste
              </span>
            </span>
          </motion.div>

          <motion.h1
            custom={1} variants={FADE_UP} initial="hidden" animate="show"
            className="display-xl font-display font-light text-zinc-50 leading-[0.92] tracking-tight"
          >
            Do treino<br />
            <span className="italic text-green-brand">à vida</span><br />
            real.
          </motion.h1>

          <motion.p
            custom={2} variants={FADE_UP} initial="hidden" animate="show"
            className="font-sans text-zinc-400 text-base leading-relaxed max-w-md"
          >
            Moda fitness feminina e masculina que abraça cada forma, acompanha
            cada movimento e não para quando você para. Da academia à rua —
            a Aura Fit veste quem não tem tempo pra mediocridade.
          </motion.p>

          <motion.div
            custom={3} variants={FADE_UP} initial="hidden" animate="show"
            className="flex flex-wrap gap-3"
          >
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ring inline-flex items-center gap-2.5 rounded-full bg-green-brand px-7 py-3.5 font-sans text-sm font-bold tracking-widest uppercase text-zinc-950 hover:bg-green-light transition-colors duration-300"
            >
              Comprar agora
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <button
              onClick={() => document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-7 py-3.5 font-sans text-sm font-medium tracking-widest uppercase text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-colors duration-300"
            >
              Ver produtos
            </button>
          </motion.div>

          <motion.div
            custom={4} variants={FADE_UP} initial="hidden" animate="show"
            className="flex flex-wrap gap-4 pt-1"
          >
            {[
              { Icon: Star, text: "4.5K+ seguidoras" },
              { Icon: MapPin, text: "Iporã do Oeste · SC" },
              { Icon: Users, text: "Feminino & Masculino" },
            ].map(({ Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 font-sans text-xs text-zinc-500">
                <Icon size={13} className="text-green-brand shrink-0" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: image double-bezel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <div className="rounded-[2.5rem] p-1.5 border border-white/5 bg-white/[0.02]">
            <div className="relative rounded-[2rem] overflow-hidden bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]" style={{ aspectRatio: "3/4" }}>
              <img
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=90&fit=crop"
                alt="Atleta com moda fitness Aura Fit"
                className="ken-burns absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-brand/20 border border-green-brand/40 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-green-brand text-lg">A</span>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-zinc-50 tracking-wide">Aura Fit</p>
                    <p className="font-sans text-[11px] text-zinc-400">Iporã do Oeste · SC</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-brand/15 border border-green-brand/30 px-2.5 py-1 font-sans text-[10px] font-bold tracking-widest uppercase text-green-brand">
                      ● Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-zinc-600">Rolar</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}
