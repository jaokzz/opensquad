import { Instagram, MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60 py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-display font-semibold text-2xl tracking-widest text-zinc-50 uppercase">
              Aura Fit
            </span>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-xs">
              Moda fitness feminina e masculina. Energia que veste. Iporã do Oeste · SC.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.instagram.com/ld_aurafit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram AuraFit"
                className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-50 hover:border-zinc-600 transition-colors duration-200"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp AuraFit"
                className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-green-brand hover:border-green-brand/40 transition-colors duration-200"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Products nav */}
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-600 mb-5">
              Produtos
            </p>
            <ul className="flex flex-col gap-3">
              {["Leggings", "Tops & Blusas", "Conjuntos Femininos", "Linha Masculina"].map((p) => (
                <li key={p}>
                  <a
                    href="#produtos"
                    className="font-sans text-xs text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-600 mb-5">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-zinc-500 hover:text-green-brand transition-colors duration-200 flex items-center gap-2"
              >
                <MessageCircle size={13} strokeWidth={1.5} />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/ld_aurafit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-zinc-500 hover:text-zinc-200 transition-colors duration-200 flex items-center gap-2"
              >
                <Instagram size={13} strokeWidth={1.5} />
                @ld_aurafit
              </a>
              <p className="font-sans text-xs text-zinc-600 mt-1">
                Iporã do Oeste · SC · Brasil
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/60 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-sans text-[11px] text-zinc-700">
            © {year} Aura Fit — Todos os direitos reservados.
          </p>
          <p className="font-sans text-[11px] text-zinc-700">
            Iporã do Oeste · SC
          </p>
        </div>
      </div>
    </footer>
  );
}
