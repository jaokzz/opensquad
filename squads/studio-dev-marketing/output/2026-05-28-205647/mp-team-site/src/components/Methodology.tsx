'use client'

import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    icon: '📋',
    title: 'Anamnese completa',
    desc: 'Entendemos sua rotina, histórico, objetivos e preferências alimentares. Nenhum plano genérico aqui.',
    color: 'border-orange/30 hover:border-orange/60',
    accent: 'text-orange',
  },
  {
    number: '02',
    icon: '🏋️',
    title: 'Plano de treino individual',
    desc: 'Montado especificamente para você: seu nível, disponibilidade e objetivos. Revisado periodicamente.',
    color: 'border-purple/30 hover:border-purple/60',
    accent: 'text-purple',
  },
  {
    number: '03',
    icon: '🍽️',
    title: 'Nutrição sem extremismos',
    desc: 'Plano alimentar que cabe na sua vida. Você não vai cortar pizza, churrasco ou o que te faz feliz.',
    color: 'border-orange/30 hover:border-orange/60',
    accent: 'text-orange',
  },
  {
    number: '04',
    icon: '📊',
    title: 'Acompanhamento periódico',
    desc: 'Avaliações regulares, ajustes no plano e suporte direto. Você nunca fica no escuro.',
    color: 'border-purple/30 hover:border-purple/60',
    accent: 'text-purple',
  },
]

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 lg:py-32 bg-bg-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-orange tracking-widest uppercase">Como funciona</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,52px)] leading-tight text-cream">
            Do zero ao{' '}
            <span className="gradient-text">resultado real</span>
          </h2>
          <p className="mt-4 text-cream/50 max-w-xl mx-auto text-lg leading-relaxed">
            Um processo simples, personalizado e sem jargões complicados.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative bg-bg-card border ${s.color} rounded-3xl p-8 transition-colors duration-300 overflow-hidden group`}
            >
              {/* Large number bg */}
              <span className="absolute top-4 right-6 font-display font-black text-[80px] leading-none text-cream/[0.03] select-none group-hover:text-cream/[0.05] transition-colors">
                {s.number}
              </span>

              <div className="relative">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="font-display font-bold text-xl text-cream mb-3">{s.title}</h3>
                <p className="text-cream/50 font-body leading-relaxed">{s.desc}</p>
              </div>

              {/* Step number pill */}
              <div className={`absolute bottom-6 right-6 font-display font-bold text-xs ${s.accent} bg-bg-subtle border border-border rounded-full px-3 py-1`}>
                Passo {s.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
