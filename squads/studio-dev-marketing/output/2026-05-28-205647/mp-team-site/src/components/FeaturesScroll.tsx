'use client'

import { useEffect, useRef, useState } from 'react'
import { ClipboardList, Dumbbell, UtensilsCrossed, HeartHandshake } from 'lucide-react'
import { loadGsap } from '@/lib/gsap'

const FEATURES = [
  {
    n: '01',
    Icon: ClipboardList,
    title: 'Plano completamente seu.',
    desc: 'Nada de planilha genérica copiada da internet. Cada treino e cada refeição é pensado para você — seu corpo, sua rotina, seu objetivo. Começa com uma anamnese completa, não com um template.',
    tag: 'Individualização total',
  },
  {
    n: '02',
    Icon: UtensilsCrossed,
    title: 'Comida que você ama.',
    desc: 'Pizza. Churrasco. Docinho. Tudo tem espaço quando a abordagem é inteligente. Extremismo não é método — é desistência esperando acontecer. Nossa nutrição cabe na sua vida real.',
    tag: 'Nutrição sem extremismos',
  },
  {
    n: '03',
    Icon: Dumbbell,
    title: 'Treino direto ao ponto.',
    desc: 'Progressão de cargas, técnica correta e foco no que realmente funciona. Menos tempo na academia, mais resultado no espelho. Revisado e ajustado todo mês.',
    tag: 'Eficiência e progressão',
  },
  {
    n: '04',
    Icon: HeartHandshake,
    title: 'Suporte real, de verdade.',
    desc: 'WhatsApp aberto. Avaliações periódicas. Correção de execução por vídeo. Ajustes frequentes do plano. Você nunca fica sozinha sem saber o que fazer.',
    tag: 'Acompanhamento periódico',
  },
]

const N = FEATURES.length

// 130vh de scroll por transição = tempo confortável de leitura
// + 150vh ao final para o último card "pousar" e ser lido com calma
const SCROLL_PER_CARD = 130
const SECTION_VH = (N - 1) * SCROLL_PER_CARD + 150 // 540vh

export default function FeaturesScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const barRef     = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      const { gsap } = await loadGsap()

      ctx = gsap.context(() => {

        // ── Horizontal slide (direita → esquerda conforme scroll desce) ──
        gsap.to(trackRef.current, {
          // usa scrollWidth real do track para evitar divergência entre vw e innerWidth em desktop
          x: () => -(trackRef.current!.scrollWidth - trackRef.current!.scrollWidth / N),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            // animação termina (N-1)*SCROLL_PER_CARD vh abaixo do topo — o restante é "repouso" do último card
            end: () => `+=${(N - 1) * SCROLL_PER_CARD * window.innerHeight / 100}`,
            scrub: 1.5,           // lag de 1.5s → slide fluido com tempo extra de leitura
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const step = Math.min(N - 1, Math.round(self.progress * (N - 1)))
              setActiveStep(step)
            },
          },
        })

        // ── Barra de progresso cobre a sessão toda (inclui repouso do último card) ──
        gsap.to(barRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })

      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    /*
      overflow-x: clip → impede scroll horizontal no mobile sem quebrar o sticky
      (overflow: hidden quebraria position: sticky no filho)
    */
    <div
      ref={sectionRef}
      id="metodologia"
      style={{ height: `${SECTION_VH}vh`, position: 'relative', overflowX: 'clip' }}
    >

      {/* Sticky — fica fixo enquanto o outer rola */}
      <div
        className="sticky top-0"
        style={{ height: '100dvh', background: '#050505', overflow: 'hidden' }}
      >

        {/* Barra de progresso */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(124,58,237,0.1)', zIndex: 20 }}>
          <div
            ref={barRef}
            style={{ height: '100%', background: 'linear-gradient(90deg,#7C3AED,#A855F7)', transform: 'scaleX(0)', transformOrigin: 'left' }}
          />
        </div>

        {/* Label topo */}
        <div className="absolute top-7 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 pointer-events-none">
          <span style={{ height: 1, width: 28, background: 'rgba(168,85,247,0.4)' }} />
          <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#A855F7' }}>O método MP</span>
          <span style={{ height: 1, width: 28, background: 'rgba(168,85,247,0.4)' }} />
        </div>

        {/* ── Track horizontal — N cards lado a lado ── */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            width: `${N * 100}vw`,
            height: '100dvh',
            willChange: 'transform',
          }}
        >
          {FEATURES.map(({ n, Icon, title, desc, tag }) => (
            <div
              key={n}
              style={{
                position: 'relative',
                flexShrink: 0,
                width: '100vw',
                height: '100dvh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  width: '60vw', height: '60vw',
                  maxWidth: 500, maxHeight: 500,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(124,58,237,0.06), transparent 65%)',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%,-50%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Card content */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 1300,
                  margin: '0 auto',
                  padding: '0 24px',
                }}
                className="lg:px-16"
              >
                <div className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-8 lg:gap-20 items-center">

                  {/* Texto */}
                  <div>
                    {/* Número fantasma */}
                    <div
                      className="select-none font-black"
                      style={{
                        fontSize: 'clamp(64px, 14vw, 180px)',
                        color: 'rgba(124,58,237,0.07)',
                        letterSpacing: '-0.04em',
                        lineHeight: 1,
                        marginBottom: '-0.22em',
                      }}
                    >
                      {n}
                    </div>

                    <h2
                      className="font-black text-white tracking-tight leading-tight"
                      style={{ fontSize: 'clamp(28px, 4.5vw, 62px)', marginTop: '-0.15em' }}
                    >
                      {title}
                    </h2>

                    <p
                      className="leading-relaxed mt-5 mb-8"
                      style={{
                        fontSize: 'clamp(14px, 1.3vw, 18px)',
                        color: '#7A7A8C',
                        maxWidth: 540,
                      }}
                    >
                      {desc}
                    </p>

                    <div
                      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
                      style={{ border: '1px solid rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.08)' }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#A855F7', flexShrink: 0 }} />
                      <span className="text-[13px] font-semibold" style={{ color: '#C084FC' }}>{tag}</span>
                    </div>
                  </div>

                  {/* Ícone — só desktop */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div
                      style={{
                        width: 240, height: 240,
                        borderRadius: 24,
                        background: 'rgba(124,58,237,0.06)',
                        border: '1px solid rgba(124,58,237,0.14)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Icon size={80} style={{ color: 'rgba(168,85,247,0.4)' }} strokeWidth={0.9} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Rodapé do sticky: indicadores ── */}

        {/* Pills / dots */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {FEATURES.map((_, i) => (
            <div
              key={i}
              style={{
                height: 6,
                width: i === activeStep ? 24 : 6,
                borderRadius: 9999,
                background: i === activeStep ? '#A855F7' : 'rgba(124,58,237,0.22)',
                transition: 'width 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease',
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Contador "01 / 04" */}
        <div
          style={{ position: 'absolute', bottom: 30, right: 32 }}
          className="lg:right-16"
        >
          <span className="text-[11px] font-bold tabular-nums" style={{ color: 'rgba(168,85,247,0.5)' }}>
            {String(activeStep + 1).padStart(2, '0')}
            <span style={{ color: 'rgba(255,255,255,0.1)' }}> / {String(N).padStart(2, '0')}</span>
          </span>
        </div>

        {/* Hint "role para avançar" — só no primeiro card */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            left: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            opacity: activeStep === 0 ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}
          className="lg:left-16"
        >
          <span className="text-[10px] font-bold tracking-[0.16em] uppercase" style={{ color: 'rgba(124,58,237,0.4)' }}>
            Role para avançar
          </span>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5h12M8 1l4 4-4 4" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </div>
  )
}
