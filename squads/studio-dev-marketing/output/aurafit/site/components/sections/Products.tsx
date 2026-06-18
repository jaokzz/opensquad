"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getProductWhatsAppLink } from "@/lib/whatsapp";

const PRODUCTS = [
  {
    id: "leggings",
    name: "Leggings AuraFit",
    tag: "Mais vendido",
    desc: "Compressão progressiva, cintura alta e tecido que não fica transparente. Para todas as formas.",
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=90&fit=crop",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/5] lg:h-full",
    textSize: "text-3xl",
  },
  {
    id: "tops",
    name: "Tops & Blusas",
    tag: "Feminino",
    desc: "Do sutiã esportivo ao cropped — suporte e estilo sem escolher um.",
    img: "https://images.unsplash.com/photo-1571945190478-dc1245d96e48?w=600&q=85&fit=crop",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    textSize: "text-2xl",
  },
  {
    id: "conjuntos",
    name: "Conjuntos Femininos",
    tag: "Combo",
    desc: "Top + legging combinados. Sai pronta do vestiário.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=85&fit=crop",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
    textSize: "text-2xl",
  },
  {
    id: "masculino",
    name: "Linha Masculina AuraFit",
    tag: "Masculino",
    desc: "Shorts e camisetas dry-fit que não limitam seu treino nem seu estilo.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=85&fit=crop",
    span: "lg:col-span-3",
    aspect: "aspect-[16/6]",
    textSize: "text-3xl",
  },
];

function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`${product.span} group`}
    >
      <a
        href={getProductWhatsAppLink(product.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {/* Double-bezel outer */}
        <div className="h-full rounded-[2rem] p-[5px] border border-white/[0.06] bg-white/[0.015] transition-all duration-500 group-hover:border-green-brand/25 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]">
          {/* Inner core */}
          <div className={`relative rounded-[1.6rem] overflow-hidden bg-zinc-900 ${product.aspect} shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]`}>
            <img
              src={product.img}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center rounded-full bg-green-brand/15 border border-green-brand/30 px-3 py-1 font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-green-brand">
                {product.tag}
              </span>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-9 h-9 rounded-full bg-green-brand flex items-center justify-center shadow-lg">
                <ArrowUpRight size={16} className="text-zinc-950" strokeWidth={2.5} />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className={`font-display font-light ${product.textSize} text-zinc-50 leading-tight mb-1`}>
                {product.name}
              </p>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                {product.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-widest uppercase text-green-brand group-hover:gap-2.5 transition-all duration-200">
                Ver no WhatsApp <ArrowUpRight size={12} strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="produtos" className="relative py-28 bg-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-green-brand mb-4">
            — Coleção
          </p>
          <h2 className="display-lg font-display font-light text-zinc-50 max-w-lg">
            Cada peça, um{" "}
            <span className="italic text-green-brand">propósito.</span>
          </h2>
          <p className="font-sans text-zinc-400 text-sm mt-4 max-w-md leading-relaxed">
            Clique em qualquer produto para falar direto no WhatsApp e garantir o seu.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-auto">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
