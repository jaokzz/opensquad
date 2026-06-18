import Navbar    from "@/components/Navbar";
import Hero      from "@/components/Hero";
import Marquee   from "@/components/Marquee";
import Professor from "@/components/Professor";
import Menu      from "@/components/Menu";
import Gallery   from "@/components/Gallery";
import About     from "@/components/About";
import Location  from "@/components/Location";
import Footer    from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Professor />
        <Menu />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
    </>
  );
}
