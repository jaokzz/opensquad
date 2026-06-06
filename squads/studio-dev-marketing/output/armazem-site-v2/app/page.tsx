import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BurgerDisassemblyClient from "@/components/BurgerDisassemblyClient";
import Destaques from "@/components/Destaques";
import Hamburgueres from "@/components/Hamburgueres";
import Pizzas from "@/components/Pizzas";
import Porcoes from "@/components/Porcoes";
import Drinks from "@/components/Drinks";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";

const Divider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BurgerDisassemblyClient />
        <Divider />
        <Destaques />
        <Divider />
        <Hamburgueres />
        <Divider />
        <Pizzas />
        <Divider />
        <Porcoes />
        <Divider />
        <Drinks />
        <Divider />
        <Sobre />
      </main>
      <Footer />
    </>
  );
}
