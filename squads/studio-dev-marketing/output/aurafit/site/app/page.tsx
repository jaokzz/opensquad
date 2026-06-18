import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollToTop from "@/components/ui/ScrollToTop";

const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), { ssr: false });
const WABFab = dynamic(() => import("@/components/ui/WABFab"), { ssr: false });
const Products = dynamic(() => import("@/components/sections/Products"), { ssr: false });
const HowToBuy = dynamic(() => import("@/components/sections/HowToBuy"), { ssr: false });
const BrandStory = dynamic(() => import("@/components/sections/BrandStory"), { ssr: false });
const CTAFinal = dynamic(() => import("@/components/sections/CTAFinal"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <ScrollToTop />
      <WABFab />

      <main className="relative bg-bg text-zinc-100">

        <Hero />

        {/* Marquee ticker */}
        <div className="overflow-hidden border-y border-zinc-800/60 py-4 bg-surface/60">
          <div className="ticker flex gap-0 whitespace-nowrap">
            {[...Array(2)].map((_, rep) => (
              <span key={rep} className="flex items-center gap-0 shrink-0">
                <span className="font-display italic text-xl text-green-brand px-8">energia que veste</span>
                <span className="text-zinc-700 px-4">✦</span>
                <span className="font-display italic text-xl text-zinc-200 px-8">leggings que modelam</span>
                <span className="text-zinc-700 px-4">✦</span>
                <span className="font-display italic text-xl text-green-brand px-8">tecidos que abraçam</span>
                <span className="text-zinc-700 px-4">✦</span>
                <span className="font-display italic text-xl text-zinc-200 px-8">do treino ao lifestyle</span>
                <span className="text-zinc-700 px-4">✦</span>
                <span className="font-display italic text-xl text-green-brand px-8">feminino & masculino</span>
                <span className="text-zinc-700 px-4">✦</span>
                <span className="font-display italic text-xl text-zinc-200 px-8">iporã do oeste · sc</span>
                <span className="text-zinc-700 px-4">✦</span>
              </span>
            ))}
          </div>
        </div>

        <Products />
        <HowToBuy />
        <BrandStory />
        <CTAFinal />
        <Footer />
      </main>
    </>
  );
}
