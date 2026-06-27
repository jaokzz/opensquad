import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollToTop from "@/components/ui/ScrollToTop";

const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), { ssr: false });
const WABFab = dynamic(() => import("@/components/ui/WABFab"), { ssr: false });
const BrandLogos = dynamic(() => import("@/components/sections/BrandLogos"), { ssr: false });
const ShowcaseScroll = dynamic(() => import("@/components/sections/ShowcaseScroll"), { ssr: false });
const Products = dynamic(() => import("@/components/sections/Products"), { ssr: false });
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

        <BrandLogos />
        <ShowcaseScroll />
        <Products />
        <CTAFinal />
        <Footer />
      </main>
    </>
  );
}
