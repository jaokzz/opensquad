import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollBar from "@/components/ui/ScrollBar";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aura Fit — Moda Fitness Feminina & Masculina | Iporã do Oeste · SC",
  description:
    "Energia que veste. Moda fitness feminina e masculina do treino ao lifestyle. Leggings, tops e conjuntos que modelam, abraçam e duram. Fale no WhatsApp.",
  keywords: ["moda fitness", "leggings", "conjunto fitness", "roupa academia", "Iporã do Oeste", "Aura Fit"],
  icons: {
    icon: "/aurafitlogo-branca.svg",
    apple: "/aurafitlogo-branca.svg",
  },
  openGraph: {
    title: "Aura Fit — Do treino à vida real.",
    description: "Moda fitness feminina & masculina. Energia que veste. Iporã do Oeste · SC.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Aura Fit",
    description: "Moda fitness feminina e masculina em Iporã do Oeste · SC.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Iporã do Oeste",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    sameAs: ["https://www.instagram.com/ld_aurafit"],
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration'in history)history.scrollRestoration='manual'` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="grain">
        <ScrollBar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
