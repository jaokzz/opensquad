"use client";

const ITEMS = [
  "HAMBÚRGUER ARTESANAL",
  "PIZZA DE RESPEITO",
  "BAR",
  "AMBIENTE ÚNICO",
  "DESDE 2019",
  "IPORÃ DO OESTE · SC",
  "TERÇA A DOMINGO",
  "18H ÀS 22H",
];

const Diamond = () => (
  <span className="inline-block w-1.5 h-1.5 bg-amber rotate-45 mx-5 flex-shrink-0" />
);

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-bg-card py-4 select-none">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-card to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-card to-transparent z-10 pointer-events-none" />

      {/* Track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="bebas text-base tracking-widest text-cream/50 hover:text-amber transition-colors cursor-default">
              {item}
            </span>
            <Diamond />
          </span>
        ))}
      </div>
    </div>
  );
}
