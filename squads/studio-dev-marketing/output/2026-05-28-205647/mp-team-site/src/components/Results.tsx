'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { loadGsap } from '@/lib/gsap'

const QUOTE =
  'Você só precisa continuar e continuar. Encontrar o seu 80%. Mais vale um 80% feito sempre, do que 100% feito por um mês.'

const VIEWS = [
  { src: '/images/result-side.png',  alt: 'Antes e depois — vista lateral',  label: 'Vista lateral'  },
  { src: '/images/result-front.png', alt: 'Antes e depois — vista frontal', label: 'Vista frontal' },
]

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      const { gsap } = await loadGsap()

      ctx = gsap.context(() => {
        gsap.fromTo('.result-view',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: '.results-photos', start: 'top 78%', toggleActions: 'play none none none' } }
        )
        gsap.fromTo('.result-quote',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: '.result-quote', start: 'top 80%', toggleActions: 'play none none none' } }
        )
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} id="resultados" className="py-32 lg:py-40"
      style={{ background: '#050505' }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span style={{ height: 1, width: 32, background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5))' }} />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#A855F7' }}>Transformações reais</span>
            <span style={{ height: 1, width: 32, background: 'linear-gradient(90deg, rgba(168,85,247,0.5), transparent)' }} />
          </div>
          <h2 className="font-black text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            O resultado que você{' '}
            <span style={{ background: 'linear-gradient(120deg, #C084FC, #A855F7 40%, #7C3AED)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              pode ter.
            </span>
          </h2>
          <p className="mt-4 text-[15px]" style={{ color: '#7A7A8C' }}>
            Dezembro 2022 → Janeiro 2023 → Dezembro 2023
          </p>
        </div>

        <div className="results-photos grid md:grid-cols-2 gap-6 mb-16">
          {VIEWS.map(({ src, alt, label }) => (
            <div key={label} className="result-view opacity-0">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#3A3A4A' }}>{label}</p>
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ background: '#0D0D1A' }}>
                <Image src={src} alt={alt} width={1200} height={800} className="w-full h-auto" quality={90} />
              </div>
            </div>
          ))}
        </div>

        <div className="result-quote opacity-0 max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-8 lg:p-12"
            style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)' }}>
            <Quote size={28} className="mb-6" style={{ color: 'rgba(168,85,247,0.35)' }} strokeWidth={1} />
            <blockquote className="font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(20px, 2.8vw, 34px)' }}>
              {QUOTE}
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 relative" style={{ background: '#1a1a2e' }}>
                <Image src="/images/pietra1.png" alt="Pietra" fill className="object-cover object-top" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-white">Pietra Giehl</p>
                <p className="text-[11px]" style={{ color: '#7A7A8C' }}>Personal Trainer · MP Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
