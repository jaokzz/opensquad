'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Target, Heart, Zap, ArrowRight } from 'lucide-react'
import { WA_GERAL } from '@/lib/constants'
import { loadGsap } from '@/lib/gsap'

const BADGES = [
  { Icon: Target, label: 'Método validado',  sub: 'Testado em centenas de alunas' },
  { Icon: Heart,  label: 'Suporte real',      sub: 'Você nunca estará sozinha' },
  { Icon: Zap,    label: 'Resultados reais',  sub: 'Visíveis em menos de 30 dias' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      const { gsap } = await loadGsap()

      ctx = gsap.context(() => {
        gsap.fromTo('.about-img',
          { clipPath: 'inset(55% 4% 0% 4% round 24px)', scale: 1.04 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 24px)', scale: 1,
            duration: 1.1, ease: 'power3.inOut',
            scrollTrigger: {
              trigger: '.about-img',
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          }
        )

        gsap.fromTo('.about-word',
          { opacity: 0, y: 18 },
          {
            opacity: 1, y: 0,
            stagger: 0.04, duration: 0.45, ease: 'power2.out',
            scrollTrigger: {
              trigger: '.about-h2',
              start: 'top 76%',
              toggleActions: 'play none none none',
            },
          }
        )

        gsap.fromTo('.about-badge',
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0,
            stagger: 0.1, duration: 0.55, ease: 'power3.out',
            scrollTrigger: {
              trigger: '.about-badges',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )

        gsap.to('.about-img', {
          y: -35,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end:   'bottom top',
            scrub: 2,
          },
        })
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  const headline = 'Pietra Giehl, sua treinadora e amiga.'

  return (
    <section ref={sectionRef} id="sobre" className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: '#050505' }}>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.3), transparent)' }} />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Image — foto diferente da Hero ── */}
          <div className="relative">
            <div className="about-img relative rounded-3xl overflow-hidden"
              style={{ clipPath: 'inset(55% 4% 0% 4% round 24px)', aspectRatio: '4/5' }}>
              <Image
                src="/images/pietraRoupAcad.png"
                alt="Pietra Giehl na academia"
                fill
                className="object-cover object-top"
                quality={90}
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/5"
                style={{ background: 'linear-gradient(to top, #050505, transparent)' }} />
              <div className="absolute bottom-6 left-5 right-5 rounded-2xl px-5 py-4"
                style={{ background: 'rgba(13,13,26,0.9)', backdropFilter: 'blur(12px)',
                         border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="font-bold text-white text-[14px]">@pietragiehl_</p>
                <p className="text-[11px] mt-0.5" style={{ color: '#7A7A8C' }}>4.5K seguidoras · Instagram</p>
              </div>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, #7C3AED, transparent)' }} />
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#A855F7' }}>
                Quem é
              </span>
            </div>

            <h2 className="about-h2 font-black text-white leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}>
              {headline.split(' ').map((w, i) => (
                <span key={i} className="about-word inline-block mr-[0.2em] opacity-0">{w}</span>
              ))}
            </h2>

            <div className="space-y-4 leading-relaxed" style={{ fontSize: 'clamp(14px, 1.25vw, 17px)', color: '#7A7A8C' }}>
              <p>
                Sou uma mulher que viveu na pele a transformação que hoje ajudo outras a alcançarem.
                Já estive ali, fazendo malabarismos na academia, achando que precisava sofrer
                absurdamente pra ter resultado. <span className="text-white font-medium">Hoje sei que não precisa.</span>
              </p>
              <p>
                Há mais de 4 anos atendo mulheres do Brasil inteiro — algumas a mais de 3.000km
                de distância — provando que com método, suporte e consistência os resultados
                aparecem. Sem extremismos.
              </p>
            </div>

            {/* Badges — contraste corrigido: #7A7A8C em vez de #3A3A4A */}
            <div className="about-badges grid grid-cols-3 gap-3 pt-2">
              {BADGES.map(({ Icon, label, sub }) => (
                <div key={label}
                  className="about-badge opacity-0 flex flex-col items-center text-center p-4 rounded-2xl gap-2"
                  style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)' }}>
                  <Icon size={20} style={{ color: '#A855F7' }} strokeWidth={1.5} />
                  <p className="text-[11px] font-bold tracking-wide uppercase" style={{ color: '#C084FC' }}>{label}</p>
                  <p className="text-[10px] leading-snug" style={{ color: '#7A7A8C' }}>{sub}</p>
                </div>
              ))}
            </div>

            <a href={WA_GERAL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:gap-2 font-semibold text-[13px] transition-all duration-300 hover:text-[#C084FC]"
              style={{ color: '#A855F7' }}>
              Falar diretamente com a Pietra
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
