"use client";

import dynamic from "next/dynamic";

const BurgerCanvas = dynamic(() => import("./BurgerCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 90% 70% at 55% 60%, #291407 0%, #0F0B07 68%)",
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-8 items-center pt-24 pb-16">

        {/* Copy */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 border border-amber/20 bg-amber/8 rounded-full px-4 py-1.5 mb-7">
            <span className="text-[10px] font-bold tracking-[3px] uppercase text-amber">📍 Iporã do Oeste · SC</span>
          </div>

          <h1
            className="font-display leading-[0.88] tracking-wide text-cream mb-5"
            style={{ fontSize: "clamp(64px, 9.5vw, 128px)" }}
          >
            ARMAZÉM<br />
            <span className="text-amber">BAR &amp;</span><br />
            BURGUER
          </h1>

          <p className="text-muted leading-relaxed max-w-sm mb-8 text-[15px]">
            <span className="text-cream font-semibold">Artesanal de respeito.</span> Pão brioche,
            carnes selecionadas e combinações únicas desde 2019 em Iporã do Oeste.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://app.anota.ai/m/MVq8UyWqw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber2 text-bg font-extrabold text-[13px] tracking-[2px] uppercase px-6 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,137,12,0.35)]"
            >
              🍔 Fazer Pedido
            </a>
            <a
              href="#hamburgueres"
              className="inline-flex items-center gap-2 border border-cream/15 text-cream hover:border-amber/50 hover:text-amber font-bold text-[13px] tracking-[2px] uppercase px-6 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Ver Cardápio
            </a>
          </div>

          <div className="flex gap-10 mt-10 pt-8 border-t border-cream/6">
            {[
              { num: "12+",  label: "Burgers" },
              { num: "4",    label: "Tamanhos de Pizza" },
              { num: "2019", label: "Fundado em" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-4xl text-amber leading-none">{num}</p>
                <p className="text-[10px] text-muted font-bold tracking-[2px] uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Burger */}
        <div className="flex items-center justify-center">
          <BurgerCanvas />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/50 text-[9px] tracking-[3px] uppercase animate-bounce">
        <span>scroll</span>
        <div className="w-3.5 h-3.5 border-r border-b border-muted/40 rotate-45" />
      </div>
    </section>
  );
}
