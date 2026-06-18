"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHOTOS = [
  { src: "/images/img-horizontal-5hamburguer.png", alt: "Burgers do Armazém", span: "col-span-2" },
  { src: "/images/img-ambiente-interno.png",         alt: "Ambiente interno", span: "" },
  { src: "/images/img-exterior.png",                 alt: "Fachada do Armazém", span: "" },
  { src: "/images/armazemburgers_1754431615_3692762494712826326_15273070239.jpg", alt: "Prato especial", span: "" },
  { src: "/images/armazemburgers_1755012105_3697632001192836844_15273070239.jpg", alt: "Burger artesanal", span: "" },
  { src: "/images/armazemburgers_1762984677_3764510777349837198_15273070239.jpg", alt: "Destaque da casa", span: "col-span-2" },
  { src: "/images/armazemburgers_1769556302_3819636309552399572_15273070239.jpg", alt: "Preparo", span: "" },
  { src: "/images/armazemburgers_1769556302_3819636332268794283_15273070239.jpg", alt: "Detalhe", span: "" },
];

const WEBPS = [
  "/images/armazemburgers_1692312490_3171669507294397679_15273070239.webp",
  "/images/armazemburgers_1716341301_3373237783781224268_15273070239.webp",
  "/images/armazemburgers_1716341301_3373237783789672269_15273070239.webp",
  "/images/armazemburgers_1716341301_3373237783789737001_15273070239.webp",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children || [], {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(".gallery-item", {
        scale: 0.92, opacity: 0, duration: 0.8, stagger: 0.06, ease: "power2.out",
        scrollTrigger: { trigger: ".gallery-grid", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section ref={sectionRef} id="galeria" className="py-24 md:py-36 bg-bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <p className="section-label">Galeria</p>
          <h2 className="bebas text-[clamp(3rem,7vw,5rem)] text-cream leading-none tracking-wide">
            MOMENTOS <span className="text-amber">QUE FICAM</span>
          </h2>
          <div className="divider-amber" />
        </div>

        {/* Main grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-2">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden cursor-pointer group ${photo.span} aspect-square`}
              onClick={() => setLightbox(photo.src)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/15 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 border border-cream/60 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Webp strip */}
        <div className="mt-2 grid grid-cols-4 gap-2">
          {WEBPS.map((src, i) => (
            <div
              key={i}
              className="gallery-item relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(src)}
            >
              <Image
                src={src}
                alt={`Armazém ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/15 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/60 hover:text-cream text-sm tracking-widest uppercase font-jakarta"
            onClick={() => setLightbox(null)}
          >
            ✕ Fechar
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Foto ampliada"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
