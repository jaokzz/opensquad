"use client";

import { useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WA_CTA } from "@/lib/links";
import { loadGsap } from "@/lib/gsap";

export default function CTAFinal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    (async () => {
      const { gsap } = await loadGsap();
      gsap.fromTo(
        ".cta-block",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 76%",
            once: true,
          },
        }
      );
    })();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 lg:py-40 overflow-hidden"
      style={{ background: "#080810" }}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div
          className="cta-block opacity-0 relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          {/* Ambient radial */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 65%)",
            }}
          />

          <div className="relative z-10">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#A855F7",
              }}
            >
              Pronto para começar?
            </span>

            <h2
              className="font-black text-white leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
            >
              Seu físico{" "}
              <span
                style={{
                  background:
                    "linear-gradient(120deg, #C084FC, #A855F7 40%, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                acima da média
              </span>
              <br />
              começa agora.
            </h2>

            <p
              className="text-[16px]"
              style={{
                color: "#7A7A8C",
                maxWidth: "480px",
                margin: "0 auto 3rem",
              }}
            >
              Centenas de mulheres já mudaram o corpo sem abrir mão da vida.
              Sem dieta absurda. Sem academia todos os dias. Você é a próxima.
            </p>

            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-bold text-[15px] px-10 py-5 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                boxShadow: "0 0 48px rgba(124,58,237,0.4)",
              }}
            >
              <MessageCircle size={20} strokeWidth={2} />
              Falar com a Pietra agora
            </a>

            <p className="mt-5 text-[12px]" style={{ color: "#3A3A4A" }}>
              Resposta em até 24h · Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
