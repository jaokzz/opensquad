const pizzas = [
  { size: "Média",   info: "8 fatias · até 2 sabores",           price: "R$ 79",  highlight: false },
  { size: "Grande",  info: "12 fatias · até 3 sabores",           price: "R$ 89",  highlight: true  },
  { size: "Gigante", info: "16 fatias · até 4 sabores",           price: "R$ 99",  highlight: false },
  { size: "Treem",   info: "40 fatias · 4 sabores · Para grupos", price: "R$ 199", highlight: false },
];

export default function Pizzas() {
  return (
    <section id="pizzas" className="bg-bg2 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <p className="text-amber text-[10px] font-bold tracking-[4px] uppercase mb-3">
            Pizzas Artesanais
          </p>
          <h2
            className="font-display leading-none tracking-wide text-cream"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            MASSA <span className="text-amber">NA HORA</span>
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-md mt-4">
            Até 4 sabores na mesma pizza. Do tamanho certo pra cada ocasião.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pizzas.map((p) => (
            <div
              key={p.size}
              className={`flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 cursor-pointer
                ${p.highlight
                  ? "bg-bg3 border-amber/35 shadow-[0_0_50px_-10px_rgba(232,137,12,0.18)]"
                  : "bg-bg3 border-cream/5 hover:border-amber/20"
                }`}
            >
              <span className="text-5xl mb-5">🍕</span>
              <p className={`font-display text-[28px] tracking-wide leading-none mb-2 ${p.highlight ? "text-amber" : "text-cream"}`}>
                {p.size}
              </p>
              <p className="text-muted text-[12px] mb-6">{p.info}</p>
              <p className="font-display text-[36px] text-amber leading-none">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
