"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_URL, CARDAPIO_URL } from "@/lib/menu";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set([logoRef.current, line1Ref.current, line2Ref.current, subRef.current, ctaRef.current, scrollRef.current], {
        opacity: 0,
        y: 40,
      });

      tl.to(logoRef.current, { opacity: 1, y: 0, duration: 1.2 }, 0.4)
        .to(line1Ref.current, { opacity: 1, y: 0, duration: 1 }, 0.9)
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 1 }, 1.05)
        .to(subRef.current,  { opacity: 1, y: 0, duration: 0.8 }, 1.3)
        .to(ctaRef.current,  { opacity: 1, y: 0, duration: 0.8 }, 1.5)
        .to(scrollRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.8);

      // parallax on scroll
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          y: "35%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // fade out content on scroll
      gsap.to(".hero-content", {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "30% top",
          end: "80% top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video / Image background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-[135%] object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/img-horizontal-5hamburguer.png"
      >
        <source src="/images/video-fazendo-pizza.mp4" type="video/mp4" />
        <source src="/images/armazemburgers_1764798110_3779721526661691819_15273070239.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/40" />

      {/* Ember glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-amber/10 to-transparent" />

      {/* Center content */}
      <div className="hero-content relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Logo */}
        <div ref={logoRef} className="mb-10">
          <Image
            src="/logos/logo-sem-fundo-escritaopreta.svg"
            alt="Armazém Bar e Burguer"
            width={260}
            height={130}
            className="invert brightness-110 drop-shadow-2xl"
            priority
          />
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <div ref={line1Ref}>
            <h1 className="bebas text-[clamp(4rem,12vw,9rem)] text-cream leading-none tracking-wider">
              BURGER &amp; PIZZA
            </h1>
          </div>
        </div>
        <div className="overflow-hidden mb-6">
          <div ref={line2Ref}>
            <h2 className="bebas text-[clamp(4rem,12vw,9rem)] text-amber leading-none tracking-wider">
              ARTESANAL
            </h2>
          </div>
        </div>

        {/* Sub */}
        <div ref={subRef} className="mb-10">
          <p className="font-jakarta text-cream/50 text-sm tracking-[0.4em] uppercase">
            Terça a Domingo&nbsp;&nbsp;·&nbsp;&nbsp;18h às 22h&nbsp;&nbsp;·&nbsp;&nbsp;Iporã do Oeste - SC
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="#cardapio" className="btn-primary text-sm">
            Ver Cardápio
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="font-jakarta text-cream/30 text-xs tracking-[0.35em] uppercase">Scroll</span>
        <div className="relative w-px h-16">
          <div className="absolute inset-0 bg-amber/20" />
          <div className="absolute top-0 w-full h-1/2 bg-amber animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { height: 0; top: 0; }
          50% { height: 100%; top: 0; }
          100% { height: 0; top: 100%; }
        }
      `}</style>
    </section>
  );
}
