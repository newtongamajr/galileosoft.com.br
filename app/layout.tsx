import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import Navbar from '@/components/Navbar';
import FloatingButton from '@/components/FloatingButton';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ToasterProvider from '@/components/ToasterProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GalileoSoft - Soluções em Gestão Empresarial e Tecnologia',
    template: '%s | GalileoSoft'
  },
  description: 'Transforme sua gestão com tecnologia de ponta. CRM, ERP, PDV e sistemas personalizados para impulsionar seu negócio. Parceiros Ploomes e CPlug.',
  keywords: ['gestão empresarial', 'CRM', 'ERP', 'PDV', 'Ploomes', 'CPlug', 'software gestão', 'tecnologia empresarial', 'Maringá', 'Paraná'],
  authors: [{ name: 'GalileoSoft' }],
  creator: 'GalileoSoft',
  publisher: 'GalileoSoft',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://galileosoft.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GalileoSoft - Soluções em Gestão Empresarial',
    description: 'Transforme sua gestão com tecnologia de ponta',
    url: 'https://galileosoft.com.br',
    siteName: 'GalileoSoft',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GalileoSoft - Soluções em Gestão Empresarial',
    description: 'Transforme sua gestão com tecnologia de ponta',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="pt">
      <body className={`scroll-smooth ${inter.className}`}>
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
        <FloatingButton />
        <Suspense>
          {process.env?.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id=
              {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        </Suspense>
      </body>
    </html>
  )
}
