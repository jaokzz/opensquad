'use client'

import { useEffect, useRef, useState } from 'react'
import { loadGsap } from '@/lib/gsap'

const STATS = [
  { value: 4500, label: 'Seguidoras',             suffix: '+',   fixed: false },
  { value: 100,  label: 'Transformações',          suffix: '+',   fixed: false },
  { value: 0,    label: 'Sem limite de distância', suffix: '',    fixed: true  },
]

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let v = 0
    const step = value / (1400 / 16)
    const t = setInterval(() => {
      v += step
      if (v >= value) { setN(value); clearInterval(t) } else setN(Math.floor(v))
    }, 16)
    return () => clearInterval(t)
  }, [active, value])
  const disp = value >= 1000 ? (n / 1000).toFixed(1).replace('.0', '') + 'K' : String(n)
  return <>{disp}{suffix}</>
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await loadGsap()
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true,
            onEnter: () => setActive(true) } }
      )
    }
    init()
  }, [])

  return (
    <div ref={ref} style={{ background: '#050505', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-3 divide-x" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          {STATS.map((s) => (
            <div key={s.label} className="stat-item opacity-0 text-center px-6 py-2">
              <div className="font-black tabular-nums text-white"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.025em' }}>
                {s.fixed
                  ? <span style={{ background: 'linear-gradient(120deg, #C084FC, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>∞</span>
                  : <Counter value={s.value} suffix={s.suffix} active={active} />
                }
              </div>
              <div className="text-[10px] font-bold tracking-[0.18em] uppercase mt-1"
                style={{ color: '#3A3A4A' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
