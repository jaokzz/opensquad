"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const PHOTOS = [
  {
    src: "/ld_aurafit_1779030451_3899111291418704600_75045595205.jpg",
    alt: "Modelos Aura Fit — conjunto preto",
    col: "col-span-2 row-span-2",
  },
  {
    src: "/ld_aurafit_1781052957_3916078481204069505_75045595205.jpg",
    alt: "Conjunto magenta Aura Fit",
    col: "col-span-1 row-span-1",
  },
  {
    src: "/ld_aurafit_1781302698_3918173461360071746_75045595205.jpg",
    alt: "Vestido tênis branco Aura Fit",
    col: "col-span-1 row-span-1",
  },
  {
    src: "/ld_aurafit_1781655378_3921131954715167008_75045595205.jpg",
    alt: "Conjunto bege Aura Fit",
    col: "col-span-1 row-span-1",
  },
  {
    src: "/ld_aurafit_1781655414_3921132257434695854_75045595205.jpg",
    alt: "Look preto cargo Aura Fit",
    col: "col-span-1 row-span-1",
  },
];

export default function ShowcaseScroll() {
  return (
    <section className="bg-bg overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-2 mb-3">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-green-brand">
              — Lookbook
            </p>
            <h2 className="display-md font-display font-light text-zinc-50">
              Peças que definem{" "}
              <span className="italic text-green-brand">presença.</span>
            </h2>
            <p className="font-sans text-zinc-400 text-xs max-w-xs leading-relaxed px-2">
              Cada peça pensada pra você se sentir poderosa em qualquer movimento.
            </p>
          </div>
        }
      >
        {/* Grid de fotos dentro do card 3D */}
        <div className="h-full w-full grid grid-cols-3 grid-rows-2 gap-1.5 p-1.5">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className={`${photo.col} relative overflow-hidden rounded-xl`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover object-top"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
