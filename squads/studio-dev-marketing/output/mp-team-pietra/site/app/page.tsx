import Navbar from "@/components/ui/Navbar";
import MarqueeBanner from "@/components/ui/Marquee";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Methodology from "@/components/sections/Methodology";
import HowItWorks from "@/components/sections/HowItWorks";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <Hero />
      <StatsBar />
      <MarqueeBanner />
      <About />
      <Methodology />
      <HowItWorks />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
