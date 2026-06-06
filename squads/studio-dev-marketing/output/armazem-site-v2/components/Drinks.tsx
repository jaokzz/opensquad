const drinks = [
  { name: "🍋 Caipirinha Limão",     price: "R$20" },
  { name: "🍓 Caipirinha Morango",   price: "R$25" },
  { name: "🍹 Caipirinha Maracujá",  price: "R$23" },
  { name: "🥝 Caipirinha Kiwi",      price: "R$23" },
  { name: "🍷 Caipirinha Vinho",     price: "R$22" },
  { name: "🍺 Heineken / Corona",    price: "R$12" },
  { name: "🍺 Budweiser / Eisenbahn",price: "R$10" },
  { name: "⚡ Red Bull",             price: "R$18" },
  { name: "⚡ Monster",              price: "R$16" },
  { name: "🥤 Refri Lata 350ml",     price: "R$7"  },
  { name: "🥤 Refri 1,5L",           price: "R$17" },
  { name: "🧃 Suco de Polpa",        price: "R$12" },
];

export default function Drinks() {
  return (
    <section id="drinks" className="bg-bg2 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-amber text-[11px] font-bold tracking-[4px] uppercase mb-3">Bar Completo</p>
        <h2 className="font-display leading-none tracking-wide mb-4"
          style={{ fontSize: "clamp(42px,6vw,80px)" }}>
          DRINKS<br /><span className="text-amber">&amp; BEBIDAS</span>
        </h2>
        <p className="text-muted text-base leading-relaxed max-w-lg mb-14">
          Caipirinha, cerveja gelada, energético. Tem de tudo pra completar a noite.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {drinks.map((d) => (
            <div
              key={d.name}
              className="flex justify-between items-center px-5 py-4 bg-bg3 border border-amber/10 rounded-xl hover:border-amber/25 transition-colors"
            >
              <p className="font-semibold text-[14px]">{d.name}</p>
              <p className="font-display text-xl text-amber">{d.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
