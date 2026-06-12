"use client";

import { Star } from "lucide-react";

const ROW1 = [
  { initial: "B", name: "Bianca S.", duration: "3 meses", result: "–8kg", quote: "Em 30 dias já tava colocando roupas que guardei há anos. Sem passar fome, sem loucura. A Pietra entende que a gente tem vida." },
  { initial: "C", name: "Carolina R.", duration: "2 meses", result: "–5kg", quote: "Nunca pensei que ia ter constância tão fácil. O suporte no WhatsApp faz toda a diferença — ela te pega pela mão de verdade." },
  { initial: "N", name: "Natália F.", duration: "6 meses", result: "–14kg", quote: "Perdi peso sem deixar de comer o que eu gostava. O chocolate não sumiu do mapa. Mudou minha vida." },
  { initial: "A", name: "Amanda L.", duration: "4 meses", result: "–9kg", quote: "Um suporte humano de verdade. Ela comemora cada pequena vitória junto comigo. Isso faz diferença absurda na constância." },
  { initial: "R", name: "Rafaela C.", duration: "3 meses", result: "–7kg", quote: "Achei que sem academia em casa seria impossível. Pietra montou tudo para o que eu tinha disponível. Funcionou demais." },
];

const ROW2 = [
  { initial: "J", name: "Juliana M.", duration: "2 meses", result: "–6kg", quote: "Em 2 meses perdi 6kg e não sofri pra isso. O treino é direto ao ponto — não preciso ficar 2h na academia." },
  { initial: "G", name: "Gabriela T.", duration: "5 meses", result: "–11kg", quote: "Tenho rotina super corrida e achei que seria impossível. Pietra adaptou tudo pro meu dia a dia. Resultado veio mesmo assim." },
  { initial: "M", name: "Mariana P.", duration: "3 meses", result: "–7kg", quote: "As correções de execução por vídeo fazem diferença absurda. Minha postura e meu rendimento melhoraram juntos." },
  { initial: "S", name: "Sara W.", duration: "6 meses", result: "–16kg", quote: "Consultoria online da Pietra é infinitamente melhor que qualquer personal presencial que já tive. Sério." },
  { initial: "L", name: "Larissa D.", duration: "2 meses", result: "–4kg", quote: "Comecei sem acreditar muito. Em 3 semanas já senti a diferença no espelho. Agora renovei pelo trimestral." },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mt-auto pt-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={11} className="fill-[#A855F7] text-[#A855F7]" />
      ))}
    </div>
  );
}

function Card({ initial, name, duration, result, quote }: (typeof ROW1)[0]) {
  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[300px] flex flex-col gap-3 p-5 rounded-2xl mx-2"
      style={{
        background: "#0D0D1A",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-black text-white text-[13px]"
          style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
        >
          {initial}
        </div>
        <div className="min-w-0">
          <p className="text-[12px] font-bold text-white leading-none">{name}</p>
          <p className="text-[10px] mt-0.5" style={{ color: "#5A5A72" }}>{duration}</p>
        </div>
        <span
          className="ml-auto flex-shrink-0 text-[11px] font-black px-2 py-0.5 rounded-full"
          style={{ background: "rgba(168,85,247,0.12)", color: "#C084FC", border: "1px solid rgba(168,85,247,0.2)" }}
        >
          {result}
        </span>
      </div>
      <p className="text-[13px] leading-relaxed" style={{ color: "#7A7A8C" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <Stars />
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: typeof ROW1; reverse: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex ${reverse ? "testimonial-track-reverse" : "testimonial-track"}`}>
        {doubled.map((t, i) => (
          <Card key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-24 lg:py-36 overflow-hidden"
      style={{ background: "#080810" }}
    >
      {/* Header */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5))" }} />
          <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "#A855F7" }}>
            Depoimentos
          </span>
          <span className="h-px w-8" style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.5), transparent)" }} />
        </div>
        <h2
          className="font-black text-white leading-tight tracking-tight"
          style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
        >
          O que as alunas{" "}
          <span style={{
            background: "linear-gradient(120deg, #C084FC, #7C3AED)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            dizem.
          </span>
        </h2>
        <p className="mt-3 text-[14px]" style={{ color: "#5A5A72" }}>
          Mulheres reais. Resultados reais. Sem extremismo.
        </p>
      </div>

      {/* Marquee rows with edge fade */}
      <div
        className="flex flex-col gap-4 py-2"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <MarqueeRow items={ROW1} reverse={false} />
        <MarqueeRow items={ROW2} reverse={true} />
      </div>
    </section>
  );
}
