import type { Metadata } from 'next'
import { Cairo, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE = 'https://n8n-automation.io'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'FlowStack AI — أتمتة أعمالك بدون كود | n8n Arabic',
    template: '%s — FlowStack AI',
  },
  description:
    'حلول n8n جاهزة، بوتات واتساب بالذكاء الاصطناعي، وأنظمة أتمتة للأعمال العربية. تحميل workflows مجاناً.',
  keywords: 'n8n, أتمتة, واتساب بوت, workflow, automation arabic, n8n arabic, whatsapp bot, n8n tutorial',
  authors: [{ name: 'Mostafa — FlowStack AI', url: BASE }],
  openGraph: {
    title: 'FlowStack AI — أتمتة أعمالك بدون كود',
    description: 'حلول n8n جاهزة للأعمال العربية. تحميل مجاناً.',
    url: BASE,
    siteName: 'FlowStack AI',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlowStack AI — أتمتة أعمالك بدون كود',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowStack AI — أتمتة أعمالك بدون كود',
    description: 'حلول n8n جاهزة للأعمال العربية.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0F] text-white font-cairo antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
