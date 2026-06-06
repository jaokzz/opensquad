const cards = [
  {
    badge: "Mais Pedido",
    emoji: "🏆",
    name: "Professor",
    desc: "Pão Brioche · 180g · batata frita · provolone · bacon · BBQ sriracha · calabresa.",
    price: "R$ 45",
    accent: true,
  },
  {
    badge: "Top Venda",
    emoji: "🔥",
    name: "Moscou",
    desc: "Pão Brioche · queijo prato · cebola caramelizada · bacon fatiado · rúcula · chimichurri.",
    price: "R$ 36",
    accent: false,
  },
  {
    badge: null,
    emoji: "⭐",
    name: "Rio",
    desc: "Pão Australiano · hambúrguer · queijo prato · tomate · alface · maionese da casa.",
    price: "R$ 28",
    accent: false,
  },
  {
    badge: "Para Grupos",
    emoji: "🍕",
    name: "Pizza Gigante",
    desc: "4 sabores · 16 fatias. Artesanal com massa na hora. A escolha certa para compartilhar.",
    price: "R$ 99",
    accent: false,
  },
];

export default function Destaques() {
  return (
    <section id="destaques" className="bg-bg2 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <p className="text-amber text-[10px] font-bold tracking-[4px] uppercase mb-3">
            Os mais pedidos
          </p>
          <h2
            className="font-display leading-none tracking-wide text-cream"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            FAVORITOS <span className="text-amber">DA CASA</span>
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-md mt-4">
            Provados e aprovados toda semana em Iporã do Oeste.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <div
              key={c.name}
              className={`relative group flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden
                ${c.accent
                  ? "bg-bg3 border-amber/30 shadow-[0_0_40px_-10px_rgba(232,137,12,0.2)]"
                  : "bg-bg3 border-cream/5 hover:border-amber/25 hover:shadow-[0_16px_48px_-12px_rgba(232,137,12,0.12)]"
                }`}
            >
              {/* accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber/80 to-transparent ${c.accent ? "opacity-100" : "opacity-0 group-hover:opacity-60"} transition-opacity`} />

              {c.badge && (
                <span className="absolute top-4 right-4 bg-amber text-bg text-[8px] font-extrabold tracking-[2px] uppercase px-2.5 py-1 rounded-full">
                  {c.badge}
                </span>
              )}

              <span className="text-3xl mb-4">{c.emoji}</span>
              <p className="font-display text-[28px] tracking-wide text-cream mb-2 leading-none">{c.name}</p>
              <p className="text-muted text-[12px] leading-relaxed mb-5 flex-1">{c.desc}</p>
              <p className="font-display text-[28px] text-amber leading-none">{c.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
