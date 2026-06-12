import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mpteam.com.br"),
  title: "MP Team — Consultoria Online com Pietra Giehl",
  description:
    "Alcance um físico acima da média sem extremismos. Consultoria personalizada com plano de treino, acompanhamento periódico e plano nutricional sem restrições absurdas.",
  keywords:
    "personal trainer online, consultoria fitness, plano de treino, nutrição sem extremismos, MP Team, Pietra Giehl",
  openGraph: {
    title: "MP Team — Consultoria Online com Pietra Giehl",
    description:
      "Alcance um físico acima da média sem abrir mão das comidas que você ama.",
    url: "https://mpteam.com.br",
    images: [
      {
        url: "/images/pietra1.png",
        width: 1200,
        height: 630,
        alt: "MP Team — Consultoria com Pietra Giehl",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MP Team — Consultoria Online com Pietra Giehl",
    description:
      "Alcance um físico acima da média sem abrir mão das comidas que você ama.",
    images: [
      {
        url: "/images/pietra1.png",
        width: 1200,
        height: 630,
        alt: "MP Team — Consultoria com Pietra Giehl",
      },
    ],
  },
  icons: {
    icon: "/images/logompprime.svg",
    shortcut: "/images/logompprime.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
