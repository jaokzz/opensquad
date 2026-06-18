import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armazém Bar e Burguer — Iporã do Oeste",
  description: "Burger & Pizza Artesanal de respeito. Terça a domingo, 18h às 22h. Iporã do Oeste - SC.",
  keywords: ["hamburgueria", "pizza artesanal", "bar", "Iporã do Oeste", "SC", "Armazém"],
  openGraph: {
    title: "Armazém Bar e Burguer",
    description: "Burger & Pizza Artesanal. Iporã do Oeste - SC",
    images: ["/images/img-horizontal-5hamburguer.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="grain bg-bg text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
