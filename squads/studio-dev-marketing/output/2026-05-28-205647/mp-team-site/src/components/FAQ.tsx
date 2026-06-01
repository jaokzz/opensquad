'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'

const FAQS = [
  { q: 'Preciso ter experiência na academia?',
    a: 'Não. A consultoria é feita para qualquer nível. Montamos o plano de acordo com onde você está agora.' },
  { q: 'Vou precisar cortar as comidas que eu amo?',
    a: 'De jeito nenhum. Pizza, churrasco, docinho — tudo tem espaço quando a abordagem é inteligente. Extremismo não gera resultado duradouro.' },
  { q: 'Como funciona o acompanhamento?',
    a: 'Você tem contato direto com a Pietra via WhatsApp. Revisões periódicas do plano e avaliações regulares para ajustar o que for necessário.' },
  { q: 'Em quanto tempo vejo resultado?',
    a: 'A maioria nota diferença nas primeiras 3-4 semanas. Resultados visíveis no espelho em 6-8 semanas com o protocolo correto.' },
  { q: 'Consigo treinar em casa?',
    a: 'Funciona nos dois casos. Montamos o plano para o ambiente que você tem disponível — academia, casa, ou os dois.' },
  { q: 'O que está incluso no plano nutricional?',
    a: 'Planejamento alimentar personalizado com foco no seu objetivo, nas suas preferências e na sua rotina. Sem alimentos proibidos.' },
]

function Item({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      borderRadius: open ? '16px' : '0',
      background: open ? 'rgba(124,58,237,0.06)' : 'transparent',
      transition: 'background 0.2s, border-radius 0.2s',
    }}>
      <button onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left">
        <span className="font-semibold text-white text-[14px] md:text-[15px] leading-snug">{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.22 }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: open ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
                   border: '1px solid ' + (open ? 'rgba(124,58,237,0.35)' : 'rgba(255,255,255,0.08)') }}>
          <Plus size={13} style={{ color: open ? '#A855F7' : '#7A7A8C' }} strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden px-5 pb-5 text-[14px] leading-relaxed"
            style={{ color: '#7A7A8C' }}>
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 lg:py-40" style={{ background: '#050505' }}>
      <div className="max-w-2xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5))' }} />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#A855F7' }}>Dúvidas</span>
            <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.5), transparent)' }} />
          </div>
          <h2 className="font-black text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}>
            Perguntas{' '}
            <span style={{ background: 'linear-gradient(120deg, #C084FC, #7C3AED)', WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>frequentes</span>
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.06)', background: '#0D0D1A' }}>
          {FAQS.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} open={open === i} toggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
