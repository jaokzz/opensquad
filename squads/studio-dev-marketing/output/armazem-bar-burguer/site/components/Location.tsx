"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/menu";

gsap.registerPlugin(ScrollTrigger);

const HOURS = [
  { day: "Segunda", hours: "Fechado" },
  { day: "Terça",   hours: "18h – 22h", open: true },
  { day: "Quarta",  hours: "18h – 22h", open: true },
  { day: "Quinta",  hours: "18h – 22h", open: true },
  { day: "Sexta",   hours: "18h – 22h", open: true },
  { day: "Sábado",  hours: "18h – 22h", open: true },
  { day: "Domingo", hours: "18h – 22h", open: true },
];

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".loc-item", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="localizacao" className="py-24 md:py-36 bg-bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="loc-item mb-4">
          <p className="section-label">Onde estamos</p>
        </div>
        <h2 className="loc-item bebas text-[clamp(3rem,7vw,5rem)] text-cream leading-none tracking-wide mb-14">
          VENHA NOS <span className="text-amber">VISITAR</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Endereço */}
          <div className="loc-item border-t border-white/10 pt-8">
            <div className="w-10 h-10 border border-amber/40 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="font-jakarta text-xs text-cream/40 tracking-widest uppercase mb-3">Localização</p>
            <p className="font-jakarta text-cream/80 text-lg font-500 leading-snug">
              Iporã do Oeste<br />
              <span className="text-cream/50">Santa Catarina · Brasil</span>
            </p>
            <a
              href={`https://maps.google.com?q=Armazém+Bar+e+Burguer+Iporã+do+Oeste+SC`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-amber hover:text-amber-light font-jakarta text-sm tracking-widest uppercase transition-colors amber-underline"
            >
              Ver no mapa →
            </a>
          </div>

          {/* Horários */}
          <div className="loc-item border-t border-white/10 pt-8">
            <div className="w-10 h-10 border border-amber/40 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-jakarta text-xs text-cream/40 tracking-widest uppercase mb-3">Horários</p>
            <ul className="space-y-1.5">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between items-center">
                  <span className={`font-jakarta text-sm ${h.open ? "text-cream/70" : "text-cream/30"}`}>{h.day}</span>
                  <span className={`font-jakarta text-sm font-500 ${h.open ? "text-amber" : "text-cream/25"}`}>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="loc-item border-t border-white/10 pt-8">
            <div className="w-10 h-10 border border-amber/40 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="font-jakarta text-xs text-cream/40 tracking-widest uppercase mb-3">Contato & Delivery</p>
            <p className="font-jakarta text-cream/50 text-sm mb-5">
              Pedidos e informações diretamente pelo WhatsApp. Entregamos pra você!
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start text-xs py-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline self-start text-xs py-3"
              >
                @armazemburgers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
