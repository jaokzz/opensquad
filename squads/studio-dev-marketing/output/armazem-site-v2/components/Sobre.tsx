export default function Sobre() {
  return (
    <section id="sobre" className="bg-bg3 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-amber text-[10px] font-bold tracking-[4px] uppercase mb-3">
            Sobre o Armazém
          </p>
          <h2
            className="font-display leading-none tracking-wide text-cream mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 68px)" }}
          >
            ARTESANAL<br />DE <span className="text-amber">RESPEITO</span><br />DESDE 2019
          </h2>
          <p className="text-muted text-[15px] leading-relaxed mb-4">
            Nascemos em Iporã do Oeste–SC em 2019 com uma missão simples: servir burger e pizza artesanal de verdade. Cada ingrediente escolhido, cada molho feito na casa.
          </p>
          <p className="text-muted text-[15px] leading-relaxed">
            Terça a domingo a partir das 18h, o Armazém abre as portas pra você, a família e os amigos.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            {[
              { icon: "📍", label: "Localização",  value: "Iporã do Oeste · SC · Brasil" },
              { icon: "🕣", label: "Horário",       value: "Terça a Domingo · 18h às 22h" },
              { icon: "📦", label: "Delivery",      value: "Sem pedido mínimo" },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 px-5 py-4 bg-bg2 border border-cream/5 rounded-xl"
              >
                <span className="text-xl">{icon}</span>
                <div>
                  <p className="text-[9px] font-bold tracking-[2px] uppercase text-amber">{label}</p>
                  <p className="text-cream font-semibold text-[14px] mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://app.anota.ai/m/MVq8UyWqw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-amber hover:bg-amber2 text-bg font-extrabold text-[13px] tracking-[2px] uppercase py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,137,12,0.3)]"
          >
            🍔 Fazer Pedido Online
          </a>

          <a
            href="https://wa.me/554991815140"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-extrabold text-[13px] tracking-[2px] uppercase py-4 rounded-xl transition-all hover:-translate-y-0.5"
          >
            📱 WhatsApp: (49) 9181-5140
          </a>
        </div>
      </div>
    </section>
  );
}
