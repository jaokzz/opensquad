"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function CTAFinal() {
  return (
    <section className="relative py-16 bg-surface overflow-hidden">
      {/* Strong glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-green-brand/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-green-brand/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-green-brand mb-6">
            — Pronta(o) pra começar?
          </p>
          <h2 className="display-lg font-display font-light text-zinc-50 max-w-3xl mx-auto leading-tight">
            A próxima peça que você vai amar
            <br />
            está a{" "}
            <span className="italic text-green-brand">uma mensagem de distância.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-zinc-400 text-sm leading-relaxed max-w-md"
        >
          Viu algo que gostou? Manda mensagem, a gente responde na hora com
          disponibilidade, tamanhos e tudo que você precisar saber.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ring inline-flex items-center gap-2.5 rounded-full bg-green-brand px-8 py-4 font-sans text-sm font-bold tracking-widest uppercase text-zinc-950 hover:bg-green-light transition-colors duration-300"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Falar no WhatsApp
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
          <a
            href="https://www.instagram.com/ld_aurafit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-zinc-700 px-8 py-4 font-sans text-sm font-medium tracking-widest uppercase text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-colors duration-300"
          >
            <Instagram size={16} strokeWidth={1.5} />
            Instagram
          </a>
        </motion.div>

        {/* Divider logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 opacity-10"
        >
          <img src="/aurafitlogo-branca.svg" alt="" aria-hidden className="h-40 w-auto object-contain block" draggable={false} />
        </motion.div>
      </div>
    </section>
  );
}
