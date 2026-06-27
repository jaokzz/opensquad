"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, Package } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const STEPS = [
  {
    n: "01",
    Icon: Search,
    title: "Escolha sua peça",
    desc: "Navegue pelos produtos aqui no site e escolha o que combina com o seu estilo e treino.",
  },
  {
    n: "02",
    Icon: MessageCircle,
    title: "Fale no WhatsApp",
    desc: "Clique em qualquer produto e você vai direto pro nosso WhatsApp com a mensagem pronta.",
  },
  {
    n: "03",
    Icon: Package,
    title: "Confirme e garanta",
    desc: "A gente responde com disponibilidade, tamanhos e valores. É só confirmar e a peça é sua.",
  },
];

export default function HowToBuy() {
  return (
    <section id="como-comprar" className="relative py-16 bg-surface overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-brand/5 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-xl"
        >
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-green-brand mb-4">
            — Como comprar
          </p>
          <h2 className="display-lg font-display font-light text-zinc-50 leading-tight">
            Simples assim,{" "}
            <span className="italic text-green-brand">do jeito certo.</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.2rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px">
            <div className="h-full bg-gradient-to-r from-green-brand/40 via-green-brand/60 to-green-brand/40" />
          </div>

          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start lg:items-center text-left lg:text-center gap-6"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-green-brand/20 blur-lg scale-150" />
                <div className="relative w-[6.5rem] h-[6.5rem] rounded-full p-[3px] bg-gradient-to-b from-green-brand/40 to-green-brand/10">
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                    <step.Icon size={28} className="text-green-brand" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-green-brand flex items-center justify-center">
                  <span className="font-sans text-[10px] font-bold text-zinc-950">{step.n}</span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-medium text-2xl text-zinc-50 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-xs lg:mx-auto">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-16"
        >
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ring inline-flex items-center gap-2.5 rounded-full bg-green-brand px-8 py-4 font-sans text-sm font-bold tracking-widest uppercase text-zinc-950 hover:bg-green-light transition-colors duration-300"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
