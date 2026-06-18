"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="relative py-28 bg-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-[2.5rem] p-[5px] border border-white/[0.06] bg-white/[0.015]">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=90&fit=crop"
                alt="Treino e estilo — AuraFit"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

              {/* Stat card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4 grid grid-cols-3 gap-4 text-center">
                  {[
                    { n: "4.5K+", l: "Seguidoras" },
                    { n: "100%", l: "Qualidade" },
                    { n: "SC", l: "Iporã do Oeste" },
                  ].map(({ n, l }) => (
                    <div key={l}>
                      <p className="font-display text-xl font-semibold text-zinc-50">{n}</p>
                      <p className="font-sans text-[10px] text-zinc-500 uppercase tracking-wider">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-7"
        >
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-green-brand">
            — Nossa história
          </p>
          <h2 className="display-md font-display font-light text-zinc-50 leading-tight">
            Nasceu em Iporã.<br />
            <span className="italic text-green-brand">Pra conquistar o mundo.</span>
          </h2>
          <div className="flex flex-col gap-4 font-sans text-zinc-400 text-sm leading-relaxed">
            <p>
              A Aura Fit surgiu de uma necessidade real: roupas fitness que realmente
              durassem, que não apertassem no lugar errado, que fossem bonitas fora da
              academia também — sem custar uma fortuna.
            </p>
            <p>
              De Iporã do Oeste para todo o Brasil, cada peça é pensada para mulheres
              e homens que levam a vida a sério — e o estilo junto. Tecidos de alta
              performance, costura reforçada, modelagem que abraça e liberta ao mesmo
              tempo.
            </p>
            <p className="text-zinc-300 font-medium">
              Isso é Aura Fit. Energia que veste.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { title: "Alta performance", desc: "Tecidos que respiram e comprimem com propósito." },
              { title: "Modelagem inclusiva", desc: "Do P ao GG, para todos os corpos." },
              { title: "Feminino & Masculino", desc: "Linhas completas para qualquer treino." },
              { title: "Entrega nacional", desc: "De Iporã do Oeste para o Brasil inteiro." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-1 p-4 rounded-2xl bg-surface border border-zinc-800/60">
                <span className="font-sans text-xs font-semibold text-green-brand tracking-wide">{title}</span>
                <span className="font-sans text-xs text-zinc-500 leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
