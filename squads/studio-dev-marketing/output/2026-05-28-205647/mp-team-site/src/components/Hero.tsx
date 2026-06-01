'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { WA_GERAL } from '@/lib/constants'
import { loadGsap } from '@/lib/gsap'

const WORDS = ['Um', 'físico', 'acima', 'da', 'média.']

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      const { gsap } = await loadGsap()

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.15 })

        tl.fromTo('.h-eyebrow',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }
        )
        .fromTo('.h-word',
          { opacity: 0, y: 70, rotateX: -35 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.65, stagger: 0.07, ease: 'power3.out' },
          '-=0.25'
        )
        .fromTo('.h-accent',
          { opacity: 0, y: 40, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo('.h-sub',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo('.h-ctas',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo('.h-photo',
          { clipPath: 'inset(100% 0% 0% 0% round 28px)' },
          { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.0, ease: 'power4.inOut' },
          '-=0.85'
        )

        gsap.to('.h-headline', {
          y: -60,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
        gsap.to('.h-photo', {
          y: 50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        })
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="grain relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: '#050505', perspective: '1200px' }}
    >
      <div className="absolute top-[-25%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.09), transparent 65%)' }} />
      <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05), transparent 65%)' }} />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-20 items-center">

          <div>
            <div className="h-eyebrow opacity-0 flex items-center gap-3 mb-8">
              <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, #7C3AED, transparent)' }} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ color: '#A855F7' }}>Consultoria Fitness Premium</span>
            </div>

            <div className="h-headline mb-4" style={{ transformStyle: 'preserve-3d' }}>
              <h1 className="font-black leading-[0.91] tracking-[-0.03em] text-white"
                style={{ fontSize: 'clamp(58px, 8.5vw, 116px)' }}>
                {WORDS.map((w, i) => (
                  <span key={i} className="h-word inline-block mr-[0.18em] opacity-0"
                    style={{ transformOrigin: 'bottom center' }}>
                    {w}
                  </span>
                ))}
              </h1>

              <div style={{ fontSize: 'clamp(54px, 8vw, 110px)' }}>
                <span className="h-accent italic font-black opacity-0 inline-block"
                  style={{
                    background: 'linear-gradient(120deg, #C084FC, #A855F7 40%, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 0.93,
                    letterSpacing: '-0.03em',
                  }}>
                  sem extremismos.
                </span>
              </div>
            </div>

            <p className="h-sub opacity-0 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: '#7A7A8C', maxWidth: '480px' }}>
              Treino e alimentação pensados pra encaixar na sua rotina.
              Sem horas de cardio. Sem cortar as comidas que você mais gosta.
            </p>

            <div className="h-ctas opacity-0 flex flex-wrap gap-4 items-center">
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer"
                className="relative overflow-hidden group inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                         boxShadow: '0 0 32px rgba(124,58,237,0.35)',
                         fontSize: 'clamp(14px, 1.1vw, 15px)' }}>
                <span className="relative z-10">Falar com a Pietra</span>
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white/10 transition-transform duration-500 skew-x-[-12deg]" />
              </a>
              <a href="#sobre"
                className="inline-flex items-center gap-1.5 font-medium transition-colors duration-200 hover:text-[#F5F5FA]"
                style={{ fontSize: 'clamp(13px, 1vw, 14px)', color: '#7A7A8C' }}>
                Quero saber mais
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="h-photo relative rounded-[28px] overflow-hidden"
              style={{ clipPath: 'inset(100% 0% 0% 0% round 28px)', aspectRatio: '3/4' }}>
              <Image
                src="/images/pietra1.png"
                alt="Pietra Giehl — Personal Trainer"
                fill
                className="object-cover object-top"
                quality={90}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/5"
                style={{ background: 'linear-gradient(to top, #050505 0%, transparent 100%)' }} />
              <div className="absolute bottom-6 left-5 right-5 rounded-2xl px-5 py-4"
                style={{ background: 'rgba(13,13,26,0.85)', backdropFilter: 'blur(16px)',
                         border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="font-bold text-white text-[15px]">Pietra Fernandes Giehl</p>
                <p className="text-[12px] mt-0.5" style={{ color: '#7A7A8C' }}>
                  Personal Trainer · MP Prime Academia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold tracking-[0.28em] uppercase" style={{ color: '#3A3A4A' }}>
          Role para descobrir
        </span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.4), transparent)' }} />
      </div>
    </section>
  )
}
