"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_URL } from "@/lib/menu";

gsap.registerPlugin(ScrollTrigger);

export default function Professor() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(contentRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // subtle parallax on the image
      gsap.to(imgRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="destaques"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* bg glow */}
      <div className="absolute inset-0 bg-ember-radial opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image side */}
        <div ref={imgRef} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/armazemburgers_1762984677_3764510777349837198_15273070239.jpg"
              alt="Professor — O Mais Pedido"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* amber corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 md:-right-10 bg-amber text-bg px-5 py-4 animate-glow-pulse">
            <p className="bebas text-3xl leading-none">R$45</p>
            <p className="font-jakarta text-xs font-600 tracking-widest uppercase mt-0.5">O mais pedido</p>
          </div>
        </div>

        {/* Content side */}
        <div ref={contentRef} className="flex flex-col">
          <p className="section-label">Destaque da casa</p>

          <h2 className="bebas text-[clamp(4rem,8vw,6rem)] text-cream leading-none tracking-wide mb-6">
            O PROFESSOR
          </h2>

          <div className="divider-amber" />

          <p className="font-jakarta text-cream/70 text-base leading-relaxed mb-8 max-w-md">
            Pão brioche · 180g de carne com bacon · Batata frita · Provolone · Bacon ·
            Molho barbecue com sriracha · Calabresa · Alface · Rúcula · Pepino ·
            Ketchup de bacon · Cebola roxa e cebola na chapa.
          </p>

          <p className="font-jakarta text-cream/40 text-sm italic mb-10">
            "O mais pedido. E agora você entende por quê."
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero esse agora
          </a>
        </div>
      </div>
    </section>
  );
}
