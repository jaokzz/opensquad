const porcoes = [
  { name: "Filé Mignon Acebolado",         desc: "Queijo coalho · ovo de codorna · azeitona · pão",              price: "R$100" },
  { name: "Fritas com Costela Desfiada",   desc: "400g batata · 135g costela · molho gorgonzola",               price: "R$59"  },
  { name: "Batata Frita c/ Cheddar",       desc: "Cheddar cremoso + bacon fatiado. Clássico.",                  price: "R$45"  },
  { name: "Frango à Passarinho",           desc: "Na brasa, temperado na medida certa",                         price: "R$45"  },
  { name: "Polenta Especial",              desc: "Polenta frita · salame · queijo coalho",                      price: "R$38"  },
  { name: "Combo Caipira",                 desc: "200g polenta · frango acebolado · batata · maionese",         price: "R$70"  },
  { name: "Bolinho de Mandioca",           desc: "Recheio de carne curada · mostarda e mel",                   price: "R$30"  },
  { name: "Anéis de Cebola",              desc: "12 unidades",                                                  price: "R$16"  },
];

export default function Porcoes() {
  return (
    <section id="porcoes" className="bg-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-amber text-[11px] font-bold tracking-[4px] uppercase mb-3">Para Compartilhar</p>
        <h2 className="font-display leading-none tracking-wide mb-4"
          style={{ fontSize: "clamp(42px,6vw,80px)" }}>
          PORÇÕES<br /><span className="text-amber">&amp; ENTRADAS</span>
        </h2>
        <p className="text-muted text-base leading-relaxed max-w-lg mb-14">
          Entrada enquanto o burger chega, ou porção pra chamar o pessoal.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {porcoes.map((p) => (
            <div
              key={p.name}
              className="flex justify-between items-center gap-4 p-5 rounded-xl bg-bg2 border border-amber/6 hover:border-amber/20 transition-all duration-200"
            >
              <div>
                <p className="font-semibold text-[15px] mb-1">{p.name}</p>
                <p className="text-muted text-[12px]">{p.desc}</p>
              </div>
              <p className="font-display text-2xl text-amber flex-shrink-0">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
