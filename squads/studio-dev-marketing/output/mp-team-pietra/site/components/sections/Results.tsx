"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { loadGsap } from "@/lib/gsap";

const PHOTOS = [
  {
    src: "/images/pietra-result-side.png",
    alt: "Antes e depois — vista lateral",
    label: "Vista lateral",
  },
  {
    src: "/images/pietra-result-front.png",
    alt: "Antes e depois — vista frontal",
    label: "Vista frontal",
  },
];

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    (async () => {
      const { gsap } = await loadGsap();
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".result-view",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".results-photos",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".result-quote",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".result-quote",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }, sectionRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resultados"
      className="py-32 lg:py-40"
      style={{ background: "#050505" }}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              style={{
                height: 1,
                width: 32,
                background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5))",
              }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.22em] uppercase"
              style={{ color: "#A855F7" }}
            >
              Transformações reais
            </span>
            <span
              style={{
                height: 1,
                width: 32,
                background: "linear-gradient(90deg, rgba(168,85,247,0.5), transparent)",
              }}
            />
          </div>
          <h2
            className="font-black text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            O resultado que você{" "}
            <span
              style={{
                background: "linear-gradient(120deg, #C084FC, #A855F7 40%, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pode ter.
            </span>
          </h2>
          <p className="mt-4 text-[15px]" style={{ color: "#7A7A8C" }}>
            Dezembro 2022 → Janeiro 2023 → Dezembro 2023
          </p>
        </div>

        {/* Photos grid */}
        <div className="results-photos grid md:grid-cols-2 gap-6 mb-16">
          {PHOTOS.map(({ src, alt, label }) => (
            <div key={label} className="result-view opacity-0">
              <p
                className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
                style={{ color: "#3A3A4A" }}
              >
                {label}
              </p>
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ background: "#0D0D1A", aspectRatio: "4/5" }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial de aluna */}
        <div className="result-quote opacity-0 max-w-3xl mx-auto">
          <div
            className="relative rounded-3xl p-8 lg:p-12"
            style={{
              background: "rgba(124,58,237,0.07)",
              border: "1px solid rgba(124,58,237,0.15)",
            }}
          >
            <Quote
              size={28}
              className="mb-6"
              style={{ color: "rgba(168,85,247,0.35)" }}
              strokeWidth={1}
            />
            <blockquote
              className="font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(20px, 2.8vw, 34px)" }}
            >
              Em 2 meses perdi 6kg sem cortar nada do que eu amo. Minha vida
              mudou — e o mais impressionante é que eu não sofri pra isso.
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black text-white text-[15px]"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                J
              </div>
              <div>
                <p className="text-[13px] font-bold text-white">Juliana M.</p>
                <p className="text-[11px]" style={{ color: "#7A7A8C" }}>
                  Aluna · 2 meses de consultoria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
