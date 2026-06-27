"use client";

import { LogoCloud } from "@/components/ui/logo-cloud-3";

const BRANDS = [
  { src: "/logos-vendidas/runmore.png",      alt: "Run More" },
  { src: "/logos-vendidas/live!.png",        alt: "Live!" },
  { src: "/logos-vendidas/lupo.png",         alt: "Lupo" },
  { src: "/brands/olympikus.svg",            alt: "Olympikus" },
  { src: "/brands/iduna.svg",               alt: "Iduna" },
  { src: "/brands/allshape.svg",            alt: "AllShape" },
  { src: "/brands/rosaimperial.svg",        alt: "Rosa Imperial" },
];

export default function BrandLogos() {
  return (
    <section className="relative py-10 bg-bg border-b border-zinc-800/60">
      <div className="max-w-xl mx-auto px-6 mb-5 text-center">
        <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600">
          Marcas que trabalhamos
        </p>
      </div>
      <LogoCloud logos={BRANDS} />
    </section>
  );
}
