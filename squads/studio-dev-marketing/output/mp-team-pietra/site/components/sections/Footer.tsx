import Image from "next/image";
import { WA_GERAL } from "@/lib/links";

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logompprime.svg"
            alt="MP Prime"
            width={100}
            height={34}
            className="h-8 w-auto object-contain"
            unoptimized
          />
        </a>

        <p className="text-[12px]" style={{ color: "#3A3A4A" }}>
          © 2026 MP Team — Todos os direitos reservados.
        </p>

        <a
          href={WA_GERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] font-semibold transition-colors duration-200 hover:text-white"
          style={{ color: "#7A7A8C" }}
        >
          Falar com a Pietra
        </a>
      </div>
    </footer>
  );
}
