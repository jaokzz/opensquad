import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Armazém Bar e Burguer — Iporã do Oeste",
  description:
    "Burger artesanal de respeito. Pão brioche, carnes selecionadas e combinações únicas desde 2019 em Iporã do Oeste · SC.",
  openGraph: {
    title: "Armazém Bar e Burguer",
    description: "Artesanal de respeito desde 2019",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${plusJakarta.variable}`}
    >
      <body className="min-h-full bg-bg text-cream antialiased">{children}</body>
    </html>
  );
}
