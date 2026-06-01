'use client'

import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { WA_MENSAL, WA_TRIMESTRAL } from '@/lib/constants'
import { loadGsap } from '@/lib/gsap'

const PLANS = [
  {
    name: 'Mensal',
    badge: null,
    desc: 'Ideal para começar e sentir a metodologia na prática.',
    features: [
      'Anamnese completa inicial',
      'Plano de treino personalizado',
      'Plano nutricional sem extremismos',
      'Suporte via WhatsApp',
      'Revisão mensal do plano',
    ],
    cta: 'Quero o plano mensal',
    link: WA_MENSAL,
    highlight: false,
  },
  {
    name: 'Trimestral',
    badge: 'Mais popular',
    desc: 'Para resultado consistente com acompanhamento mais próximo.',
    features: [
      'Tudo do plano mensal',
      'Avaliação corporal periódica',
      'Ajustes mensais de treino e nutrição',
      'Suporte prioritário via WhatsApp',
      'Acesso à comunidade MP Team',
      'Melhor custo-benefício',
    ],
    cta: 'Quero o plano trimestral',
    link: WA_TRIMESTRAL,
    highlight: true,
  },
]

export default function Plans() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await loadGsap()
      gsap.fromTo('.plan-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.18, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 76%', once: true } }
      )
    }
    init()
  }, [])

  return (
    <section ref={ref} id="planos" className="py-32 lg:py-40"
      style={{ background: '#080810' }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5))' }} />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#A855F7' }}>Planos</span>
            <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.5), transparent)' }} />
          </div>
          <h2 className="font-black text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
            Escolha seu{' '}
            <span style={{
              background: 'linear-gradient(120deg, #C084FC, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>plano</span>
          </h2>
          <p className="mt-4 text-[15px]" style={{ color: '#7A7A8C' }}>Valores informados diretamente via WhatsApp.</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {PLANS.map((p) => (
            <div key={p.name}
              className={`plan-card opacity-0 flex flex-col rounded-3xl overflow-hidden plan-card-interact ${p.highlight ? 'plan-card-glow' : 'plan-card-base-hover'}`}
              style={{
                background: p.highlight
                  ? 'linear-gradient(155deg, rgba(124,58,237,0.13) 0%, rgba(168,85,247,0.06) 60%, rgba(10,10,26,0.95) 100%)'
                  : '#0D0D1A',
                border: p.highlight
                  ? '2px solid rgba(124,58,237,0.55)'
                  : '1px solid rgba(255,255,255,0.07)',
              }}>

              {p.badge && (
                <div className="py-3 text-center text-[12px] font-black tracking-[0.18em] uppercase text-white"
                  style={{ background: 'linear-gradient(90deg, #5B21B6, #7C3AED, #A855F7, #7C3AED, #5B21B6)', backgroundSize: '300% 100%', animation: 'gradientFlow 4s ease infinite' }}>
                  ✦ {p.badge} ✦
                </div>
              )}

              <div className="flex flex-col flex-1 p-11">

                {/* Plan name — animated gradient via globals.css */}
                <h3 className={`font-black text-4xl mb-3 leading-none ${p.highlight ? 'plan-name-highlight' : 'plan-name-base'}`}>
                  {p.name}
                </h3>
                <p className="text-[15px] mb-10 leading-relaxed" style={{ color: '#5A5A72' }}>{p.desc}</p>

                {/* Price */}
                <div className="mb-10 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-black text-5xl tracking-tight" style={{ color: '#F0F0FF' }}>Consulte</p>
                  <p className="text-[13px] mt-2" style={{ color: '#3A3A52' }}>Valor via WhatsApp</p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-10">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-5"
                    style={{ color: p.highlight ? '#9333EA' : '#6D28D9' }}>
                    O que está incluso
                  </p>
                  <ul className="space-y-4">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-4 text-[15px]" style={{ color: '#CACADE' }}>
                        <span className="flex-shrink-0 flex items-center justify-center rounded-full"
                          style={{
                            width: 26,
                            height: 26,
                            background: p.highlight
                              ? 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(124,58,237,0.1))'
                              : 'rgba(124,58,237,0.1)',
                            border: p.highlight
                              ? '1.5px solid rgba(168,85,247,0.45)'
                              : '1.5px solid rgba(124,58,237,0.3)',
                          }}>
                          <Check size={14} style={{ color: p.highlight ? '#C084FC' : '#8B5CF6' }} strokeWidth={3} />
                        </span>
                        <span className="leading-snug font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA button */}
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className={`block text-center font-bold text-[15px] py-5 rounded-2xl active:scale-[0.97] ${!p.highlight ? 'plan-cta-base' : ''}`}
                  style={p.highlight
                    ? {
                        background: 'linear-gradient(135deg, #5B21B6, #7C3AED, #A855F7)',
                        color: 'white',
                        boxShadow: '0 4px 32px rgba(124,58,237,0.4)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      }
                    : {
                        background: 'rgba(124,58,237,0.08)',
                        border: '1.5px solid rgba(124,58,237,0.3)',
                        color: '#C084FC',
                      }
                  }>
                  {p.cta}
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
