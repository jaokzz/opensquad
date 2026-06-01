import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import FeaturesScroll from '@/components/FeaturesScroll'
import Results from '@/components/Results'
import Plans from '@/components/Plans'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <FeaturesScroll />
      <Results />
      <Plans />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
