export default function Footer() {
  return (
    <footer className="bg-bg border-t border-amber/10 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display text-3xl tracking-widest text-amber">Armazém</span>

        <p className="text-muted text-[13px] text-center">
          © 2024 Armazém Bar e Burguer · Iporã do Oeste · SC
        </p>

        <div className="flex gap-6">
          {[
            { href: "https://instagram.com/armazemburgers", label: "Instagram" },
            { href: "https://wa.me/554991815140",           label: "WhatsApp"  },
            { href: "https://app.anota.ai/m/MVq8UyWqw",     label: "Cardápio"  },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-amber text-[13px] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
