"use client";

import { MessageCircle, ClipboardCheck, Rocket } from "lucide-react";
import { WA_GERAL } from "@/lib/links";

const STEPS = [
  {
    n: "01",
    Icon: MessageCircle,
    title: "Você manda uma mensagem",
    desc: "Sem formulários. Sem burocracia. Só você e a Pietra no WhatsApp — ela responde em minutos.",
  },
  {
    n: "02",
    Icon: ClipboardCheck,
    title: "Pietra entende tudo sobre você",
    desc: "Rotina, objetivo, alimentação, limitações. O plano é feito do zero para o seu corpo e a sua vida.",
  },
  {
    n: "03",
    Icon: Rocket,
    title: "Seu plano chega em até 48h",
    desc: "Treino + nutrição prontos para começar. Com suporte aberto no WhatsApp desde o primeiro dia.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-36" style={{ background: "#050505" }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5))" }} />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "#A855F7" }}>
              Como funciona
            </span>
            <span className="h-px w-8" style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.5), transparent)" }} />
          </div>
          <h2
            className="font-black text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Do primeiro contato ao{" "}
            <span style={{
              background: "linear-gradient(120deg, #C084FC, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              resultado real.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
          {STEPS.map(({ n, Icon, title, desc }, idx) => (
            <div key={n} className="flex-1 relative">
              {/* Arrow between cards — desktop only */}
              {idx < STEPS.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full"
                  style={{ background: "#050505" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div
                className="h-full flex flex-col gap-4 p-6 lg:p-7 rounded-2xl"
                style={{
                  background: "#0D0D1A",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(124,58,237,0.12)",
                      border: "1px solid rgba(124,58,237,0.25)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#A855F7" }} strokeWidth={1.5} />
                  </div>
                  <span
                    className="font-black text-[28px] leading-none tabular-nums"
                    style={{ color: "rgba(124,58,237,0.15)", letterSpacing: "-0.04em" }}
                  >
                    {n}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-white text-[15px] leading-snug mb-1.5">
                    {title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#6A6A80" }}>
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-white font-bold text-[14px] px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              boxShadow: "0 0 28px rgba(124,58,237,0.3)",
            }}
          >
            <MessageCircle size={17} strokeWidth={2} />
            Começar agora no WhatsApp
          </a>
          <p className="mt-2.5 text-[11px]" style={{ color: "#3A3A4A" }}>
            Resposta em minutos · Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
