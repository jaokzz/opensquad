"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "2019", label: "fundação" },
  { value: "12+", label: "burgers exclusivos" },
  { value: "4", label: "tamanhos de pizza" },
  { value: "6", label: "dias por semana" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: 60, opacity: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      gsap.from(contentRef.current?.children || [], {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      gsap.from(statsRef.current?.children || [], {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Content */}
        <div ref={contentRef} className="order-2 md:order-1 flex flex-col">
          <p className="section-label">Nossa história</p>
          <h2 className="bebas text-[clamp(3rem,6vw,4.5rem)] text-cream leading-none tracking-wide mb-6">
            UM BAR QUE<br />
            <span className="text-amber">LEVOU A SÉRIO</span>
          </h2>
          <div className="divider-amber" />
          <p className="font-jakarta text-cream/65 text-base leading-relaxed mb-6">
            Desde 2019, o Armazém Bar e Burguer se tornou referência em Iporã do Oeste
            pela qualidade dos burgers artesanais e das pizzas que saem do forno com
            sabor incomparável.
          </p>
          <p className="font-jakarta text-cream/65 text-base leading-relaxed">
            Aqui cada ingrediente é escolhido com cuidado. Da carne ao pão, da massa
            da pizza ao molho da casa — a gente leva pra você uma experiência completa.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6 mt-12">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-amber/30 pl-4">
                <p className="bebas text-4xl text-amber leading-none">{s.value}</p>
                <p className="font-jakarta text-cream/40 text-xs tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div ref={imgRef} className="order-1 md:order-2 relative">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/logos/ambiente-com-placa-logo.png"
              alt="Ambiente do Armazém Bar e Burguer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => {}}
            />
            {/* fallback */}
            <Image
              src="/images/img-ambiente-interno.png"
              alt="Ambiente interno"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
          </div>
          {/* Decorative lines */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-amber/30" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-amber/30" />
        </div>
      </div>
    </section>
  );
}
