"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MENU, type MenuCategory, type MenuItem, CARDAPIO_URL } from "@/lib/menu";

gsap.registerPlugin(ScrollTrigger);

const TAG_STYLES: Record<string, string> = {
  "mais-pedido": "bg-amber text-bg",
  destaque: "bg-red/90 text-cream",
  novo: "bg-wood text-cream",
};

const TAG_LABELS: Record<string, string> = {
  "mais-pedido": "Mais pedido",
  destaque: "Destaque",
  novo: "Novo",
};

function PriceTag({ price }: { price: number }) {
  return (
    <span className="font-jakarta text-amber font-600 text-base whitespace-nowrap">
      R${price.toFixed(2).replace(".", ",")}
    </span>
  );
}

function Card({ item }: { item: MenuItem }) {
  return (
    <div className="menu-card bg-bg-card p-5 flex flex-col gap-2 cursor-default">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-jakarta font-600 text-cream text-base leading-snug">{item.name}</h4>
        {item.tag && (
          <span className={`flex-shrink-0 text-[10px] font-jakarta font-700 tracking-widest uppercase px-2 py-0.5 ${TAG_STYLES[item.tag]}`}>
            {TAG_LABELS[item.tag]}
          </span>
        )}
      </div>
      {item.description && (
        <p className="font-jakarta text-cream/45 text-sm leading-relaxed">{item.description}</p>
      )}
      <div className="mt-auto pt-3 border-t border-white/5">
        <PriceTag price={item.price} />
      </div>
    </div>
  );
}

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("burgers");

  const activeCategory = MENU.find((c) => c.id === activeTab) as MenuCategory;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // animate cards on tab change
  useEffect(() => {
    gsap.fromTo(
      ".menu-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }
    );
  }, [activeTab]);

  return (
    <section ref={sectionRef} id="cardapio" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <p className="section-label">Cardápio</p>
          <h2 className="bebas text-[clamp(3rem,7vw,5rem)] text-cream leading-none tracking-wide">
            O QUE TEMOS <span className="text-amber">PRA VOCÊ</span>
          </h2>
          <div className="divider-amber" />
        </div>

        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto no-scrollbar mb-10 pb-1">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 font-jakarta text-sm tracking-widest uppercase transition-all duration-200 border-b-2 ${
                activeTab === cat.id
                  ? "border-amber text-amber bg-bg-card"
                  : "border-transparent text-cream/40 hover:text-cream/70 hover:bg-bg-card/50"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {activeCategory?.items.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>

        {/* Full menu CTA */}
        <div className="mt-12 text-center">
          <p className="font-jakarta text-cream/30 text-sm mb-5">
            Cardápio completo com imagens e adicionais no app
          </p>
          <a
            href={CARDAPIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            Ver cardápio completo →
          </a>
        </div>
      </div>
    </section>
  );
}
