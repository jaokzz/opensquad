const burgers = [
  { flag: "🇧🇷", country: "Brasil",         name: "Rio",          price: "R$28", ingredients: "Pão Australiano · Queijo Prato · Tomate · Alface · Maionese da Casa",                             highlight: false },
  { flag: "🇳🇴", country: "Noruega",        name: "Oslo",         price: "R$30", ingredients: "Pão Australiano · Cheddar · Cebola Caramelizada · Rúcula · Molho Tártaro",                       highlight: false },
  { flag: "🇩🇪", country: "Alemanha",       name: "Berlin",       price: "R$33", ingredients: "Pão Australiano · Queijo Prato · Calabresa · Tomate · Cebola Roxa · Pepino · Alface",           highlight: false },
  { flag: "🇯🇵", country: "Japão",          name: "Tókio",        price: "R$36", ingredients: "Pão Brioche · Molho Gorgonzola · Bacon em Cubos · Rúcula · Maionese",                           highlight: false },
  { flag: "🇺🇸", country: "Estados Unidos", name: "Denver",       price: "R$32", ingredients: "Pão Brioche · Cheddar · Coleslaw · Cebola Roxa · Rúcula · Barbecue",                           highlight: false },
  { flag: "🇷🇺", country: "Rússia",         name: "Moscou",       price: "R$36", ingredients: "Pão Brioche · Queijo Prato · Cebola Caramelizada · Bacon · Rúcula · Ketchup de Bacon · Chimichurri", highlight: true  },
  { flag: "🇮🇹", country: "Itália",         name: "Arturo",       price: "R$36", ingredients: "Pão Australiano · Molho BBQ Bourbon · Bacon · Cebola Roxa · Cheddar · Doritos",                highlight: false },
  { flag: "🏆", country: "O Mais Pedido",  name: "Professor",    price: "R$45", ingredients: "Pão Brioche · 180g · Batata Frita · Provolone · Bacon · BBQ Sriracha · Calabresa · Rúcula",     highlight: true  },
  { flag: "🇨🇴", country: "Colômbia",       name: "Bogota",       price: "R$40", ingredients: "Pão Brioche · Provolone · Costela Desfiada · Rúcula · Barbecue",                                highlight: false },
  { flag: "🇰🇪", country: "Quênia",         name: "Naioróbi",     price: "R$38", ingredients: "Pão Brioche · Requeijão · Rúcula · Bacon em Cubo · Cebola Crispy · Barbecue",                  highlight: false },
  { flag: "🇸🇪", country: "Suécia",         name: "Estocolmo",    price: "R$38", ingredients: "Pão Brioche · Provolone · Bacon Fatiado · Anel de Cebola · Geleia de Abacaxi com Pimenta",      highlight: false },
  { flag: "👶", country: "Kids",           name: "Burguer Kids", price: "R$25", ingredients: "Pão Brioche · 150g · Queijo Prato · Ruffles",                                                    highlight: false },
];

export default function Hamburgueres() {
  return (
    <section id="hamburgueres" className="bg-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <p className="text-amber text-[10px] font-bold tracking-[4px] uppercase mb-3">
            Hambúrguer&apos;s
          </p>
          <h2
            className="font-display leading-none tracking-wide text-cream"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            CIDADES <span className="text-amber">DO MUNDO</span>
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-md mt-4">
            12 combinações únicas com nomes de cidades ao redor do globo. Cada um com personalidade própria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
          {burgers.map((b) => (
            <div
              key={b.name}
              className={`group flex gap-4 items-start p-5 rounded-xl border transition-all duration-200 cursor-pointer
                ${b.highlight
                  ? "bg-bg2 border-amber/25"
                  : "bg-bg2 border-cream/4 hover:border-cream/12 hover:bg-bg3"
                }`}
            >
              <div className="flex-1 min-w-0">
                <p className={`text-[9px] font-bold tracking-[3px] uppercase mb-1 ${b.highlight ? "text-amber" : "text-muted/70"}`}>
                  {b.flag} {b.country}
                </p>
                <p className="font-display text-[22px] tracking-wide text-cream leading-none mb-1.5">{b.name}</p>
                <p className="text-muted text-[11px] leading-relaxed">{b.ingredients}</p>
              </div>
              <p className="font-display text-[22px] text-amber flex-shrink-0">{b.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
