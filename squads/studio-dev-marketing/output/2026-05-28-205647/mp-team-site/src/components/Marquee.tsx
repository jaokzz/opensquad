'use client'

import { useEffect, useRef } from 'react'
import { loadGsap } from '@/lib/gsap'

const ITEMS = [
  'sem extremismos',
  'treino personalizado',
  'resultado real',
  'alimentação sem restrições',
  'acompanhamento real',
  'físico acima da média',
  'suporte humano',
  'constância acima de perfeição',
]

export default function Marquee() {
  const t1 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await loadGsap()
      gsap.to(t1.current, {
        x: '-50%',
        duration: 140,
        ease: 'none',
        repeat: -1,
      })
    }
    init()
  }, [])

  const renderItems = () =>
    [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
      <span key={i} className="inline-flex items-center gap-5 flex-shrink-0 px-5">
        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/30">
          {item}
        </span>
        <span className="w-1 h-1 rounded-full flex-shrink-0"
          style={{ background: 'rgba(124,58,237,0.4)' }} />
      </span>
    ))

  return (
    <div className="overflow-hidden select-none py-4"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', background: '#050505' }}>
      <div className="flex">
        <div ref={t1} className="flex whitespace-nowrap">
          {renderItems()}
        </div>
      </div>
    </div>
  )
}
