import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mpteam.vercel.app'),
  title: 'MP Team — Consultoria Online com Pietra Giehl',
  description: 'Alcance um físico acima da média sem extremismos. Consultoria personalizada com plano de treino, acompanhamento periódico e plano nutricional sem restrições absurdas.',
  keywords: 'personal trainer online, consultoria fitness, plano de treino, nutrição sem extremismos, MP Team, Pietra Giehl',
  icons: {
    icon: '/images/logompprime.svg',
    shortcut: '/images/logompprime.svg',
  },
  openGraph: {
    title: 'MP Team — Consultoria Online com Pietra Giehl',
    description: 'Alcance um físico acima da média sem abrir mão das comidas que você ama.',
    type: 'website',
    url: 'https://mpteam.com.br',
    images: [
      {
        url: '/images/pietra1.png',
        width: 1200,
        height: 630,
        alt: 'MP Team — Consultoria com Pietra Giehl',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
