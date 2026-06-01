'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { WA_GERAL } from '@/lib/constants'

const links = [
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Resultados',  href: '#resultados' },
  { label: 'Planos',      href: '#planos' },
  { label: 'FAQ',         href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

          <a href="#" className="flex items-center">
            <Image
              src="/images/logompprime.svg"
              alt="MP Prime"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
              unoptimized
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-[13px] font-medium text-[#7A7A8C] hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={WA_GERAL} target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)', boxShadow: '0 0 20px rgba(124,58,237,0.3)' }}>
              Começar agora
            </a>
            <button className="md:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-[#0D0D1A]/98 backdrop-blur-2xl border-b border-white/[0.06] px-6 py-8 flex flex-col gap-5 md:hidden"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-lg font-semibold text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href={WA_GERAL} target="_blank" rel="noopener noreferrer"
              className="mt-2 text-center text-white font-bold py-4 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>
              Começar agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
