"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  BunTop, CheeseSlice, BaconStrip, OnionRings,
  LettuceLayer, PattyLayer, SauceLayer, CheddarLayer, BunBottom,
} from "./BurgerLayers";

const LAYERS = [
  { id: "bun-top",    Component: BunTop,       w: 260 },
  { id: "provolone",  Component: CheeseSlice,  w: 260 },
  { id: "bacon",      Component: BaconStrip,   w: 240 },
  { id: "onion",      Component: OnionRings,   w: 260 },
  { id: "lettuce",    Component: LettuceLayer, w: 265 },
  { id: "patty",      Component: PattyLayer,   w: 255 },
  { id: "sauce",      Component: SauceLayer,   w: 252 },
  { id: "cheddar",    Component: CheddarLayer, w: 260 },
  { id: "bun-bottom", Component: BunBottom,    w: 262 },
];

export default function BurgerCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          y: -20 + i * 5,
          opacity: 0,
          duration: 0.6,
          delay: 0.2 + i * 0.07,
          ease: "back.out(1.4)",
        });
      });

      // Subtle floating animation
      gsap.to(containerRef.current, {
        y: -8,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{ width: 300, height: 340 }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 40% at 50% 80%, rgba(232,137,12,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Layer stack */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0" style={{ paddingTop: 10 }}>
        {LAYERS.map((layer, i) => {
          const { Component, w, id } = layer;
          return (
            <div
              key={id}
              ref={(el) => { layerRefs.current[i] = el; }}
              style={{ width: w, marginTop: i === 0 ? 0 : -4 }}
            >
              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
}
