"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BunTop, CheeseSlice, BaconStrip, OnionRings,
  LettuceLayer, PattyLayer, SauceLayer, CheddarLayer, BunBottom,
} from "./BurgerLayers";

gsap.registerPlugin(ScrollTrigger);

const LAYERS = [
  { id: "bun-top",    Component: BunTop,       w: 260, label: "Pão Brioche",          color: "#E8A040", finalY: -190 },
  { id: "provolone",  Component: CheeseSlice,  w: 260, label: "Provolone Derretido",  color: "#F9D030", finalY: -120 },
  { id: "bacon",      Component: BaconStrip,   w: 240, label: "Bacon Fatiado",        color: "#C0392B", finalY: -75  },
  { id: "onion",      Component: OnionRings,   w: 260, label: "Cebola Caramelizada",  color: "#A855F7", finalY: -42  },
  { id: "lettuce",    Component: LettuceLayer, w: 265, label: "Rúcula Fresca",        color: "#4ADE80", finalY: -16  },
  { id: "patty",      Component: PattyLayer,   w: 255, label: "Hambúrguer 180g",      color: "#D97706", finalY: 0    },
  { id: "sauce",      Component: SauceLayer,   w: 252, label: "Molho Especial",       color: "#E74C3C", finalY: 20   },
  { id: "cheddar",    Component: CheddarLayer, w: 260, label: "Cheddar Cremoso",      color: "#F59E0B", finalY: 45   },
  { id: "bun-bottom", Component: BunBottom,    w: 262, label: "Pão Brioche",          color: "#C4722A", finalY: 80   },
];

export default function BurgerDisassembly() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layerRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const labelsRef  = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      // Layers fly apart
      LAYERS.forEach((layer, i) => {
        const el = layerRefs.current[i];
        if (!el) return;
        tl.to(el, { y: layer.finalY, duration: 1, ease: "power2.out" }, 0);
      });

      // Glow expands
      tl.to(glowRef.current, { opacity: 0.6, scale: 1.4, duration: 1 }, 0);

      // Labels fade in
      tl.to(labelsRef.current,  { opacity: 1, y: 0, duration: 0.4 }, 0.55);
      tl.to(taglineRef.current, { opacity: 1, y: 0, duration: 0.4 }, 0.75);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        height: "170vh",
        background: "radial-gradient(ellipse 100% 70% at 50% 50%, #1F0E04 0%, #0F0B07 65%)",
      }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Burger + labels side by side */}
        <div className="flex items-center gap-16">

          {/* Burger layers */}
          <div className="relative flex items-center justify-center" style={{ width: 300, height: 480 }}>
            {/* Glow */}
            <div
              ref={glowRef}
              className="absolute inset-0 rounded-full pointer-events-none opacity-30 scale-100"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(232,137,12,0.35) 0%, transparent 70%)",
              }}
            />

            {/* Layers stacked at center, each with absolute pos */}
            <div className="relative w-full h-full">
              {LAYERS.map((layer, i) => {
                const { Component, w, id } = layer;
                // Initial stacked position (each layer slightly below center)
                const topBase = 220 + (i - 4) * 6;
                return (
                  <div
                    key={id}
                    ref={(el) => { layerRefs.current[i] = el; }}
                    className="absolute"
                    style={{
                      width: w,
                      top: topBase,
                      left: "50%",
                      transform: "translateX(-50%)",
                      willChange: "transform",
                    }}
                  >
                    <Component />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ingredient labels — appear on scroll */}
          <div
            ref={labelsRef}
            className="flex flex-col gap-3 opacity-0 translate-y-4"
          >
            {LAYERS.map((layer) => (
              <div key={layer.id} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: layer.color }} />
                <span className="text-sm text-muted font-medium tracking-wide">{layer.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline bottom */}
        <div
          ref={taglineRef}
          className="absolute bottom-16 text-center opacity-0 translate-y-4"
        >
          <p className="font-display tracking-[3px] leading-none text-cream"
            style={{ fontSize: "clamp(18px,2.8vw,36px)" }}>
            CADA CAMADA. CADA DETALHE.
          </p>
          <p className="font-display tracking-[3px] leading-none text-amber"
            style={{ fontSize: "clamp(18px,2.8vw,36px)" }}>
            ARTESANAL DE RESPEITO.
          </p>
        </div>
      </div>
    </div>
  );
}
