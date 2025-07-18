// LLM-OPTIMIZED: Layout optimized for IA theme with strict TS and performance
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/composables/navigation/Header";
import { CookieBanner } from "@/components/composables/marketing/CookieBanner";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/analytics/GoogleTagManager";
import { AnalyticsWrapper } from "@/components/analytics/AnalyticsWrapper";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
import Link from "next/link";
import Image from "next/image";
import { FooterSectionSimple } from "@/sections/FooterSectionSimple";
import { PWAInstall } from "@/components/pwa/PWAInstall";
import { AppStatusNotification } from "@/components/pwa/AppStatusNotification";

// Import PWA service worker registration
import "@/lib/sw-register";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const footerLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios & Modelos', href: '/servicios' },
  { label: 'Portfolio & Casos', href: '/case-studies' },
  { label: 'Modelo Hybrid', href: '/precios' },
  { label: 'Apply Partnership', href: '/contacto' },
  { label: 'Equity Insights', href: '/blog' },
  { label: 'Legal & Disclaimers', href: '/terminos-privacidad' }
];

export const metadata: Metadata = {
  title: "AQXION - Growth Equity Partner: Adquirimos Equity y Escalamos Tu Negocio",
  description: "Growth Equity Partner único: Adquirimos equity en empresas prometedoras e invertimos en su crecimiento con servicios world-class. Modelo híbrido cash + equity. Ganamos cuando tú ganas.",
  keywords: "growth equity partner, socios inversores, equity partnership, híbrido cash equity, escalamiento negocio, inversión growth, partner estratégico",
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1d4ed8" }
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AQXION - Growth Equity Partner",
    startupImage: [
      {
        url: "/assets/icons/icon-512x512.png",
        media: "(device-width: 768px) and (device-height: 1024px)"
      }
    ]
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false
  },
  openGraph: {
    title: "AQXION - Growth Equity Partner: Adquirimos Equity y Escalamos Tu Negocio",
    description: "Growth Equity Partner único: Modelo híbrido cash + equity. Invertimos en tu éxito y escalamos con stack completo. Partnership real, growth garantizado.",
    url: "https://aqxion.com",
    siteName: "AQXION - Growth Equity Partner",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/assets/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "AQXION - Agentes IA para automatización empresarial"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AQXION - Agencia de Crecimiento Automatizado: Leads y Ventas Escala",
    description: "Tu Agencia de Crecimiento Automatizado: Genera Leads, Cierra Ventas y Escala Sin Complicaciones. Ads + Outreach + IA + Contenido = Resultados Medibles.",
    images: ["/assets/og/twitter-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "application-name": "AQXION",
    "msapplication-TileColor": "#2563eb",
    "msapplication-TileImage": "/assets/icons/icon-144x144.png",
    "msapplication-config": "/browserconfig.xml"
  }
};

// IA-themed logo component with enhanced accessibility
const Logo = () => (
  <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200" aria-label="AQXION - Volver al inicio">
    <div className="flex items-center gap-3">
      <Image 
        src="/assets/logo/aqxion_logo.svg" 
        alt="AQXION Logo - Automatización IA" 
        width={250} 
        height={250} 
        priority
        className="w-8 h-auto sm:w-10 md:w-12"
      />
      <span className="text-lg sm:text-xl md:text-2xl">
        <span className="font-bold text-[var(--ia-blue)]">AQXION</span><span className="text-[var(--color-text-secondary)]">.com</span>
      </span>
    </div>
  </Link>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  
  // Debug para verificar GTM ID en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.warn('GTM ID Debug:', { 
      gtmId, 
      env: process.env.NEXT_PUBLIC_GTM_ID,
      nodeEnv: process.env.NODE_ENV 
    });
  }
  
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      data-theme="light" // This will be dynamically managed later if needed
    >
      <head>
        {/* Siempre cargar GTM, usar fallback si es necesario */}
        <GoogleTagManager gtmId={gtmId || 'GTM-TGD5LDTN'} />
        {/* IA-optimized critical CSS with performance enhancements */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-bg-primary: #FFFFFF;
              --color-bg-secondary: #F8F9FB;
              --color-text-primary: #1A1F36;
              --color-text-secondary: #3C4257;
              --ia-blue: #007AFF;
              --auto-green: #34D399;
              --color-accent-cta: #FF6B35;
              --color-border: #E3E8EF;
            }
            body {
              font-family: var(--font-sans, ui-sans-serif, system-ui, sans-serif);
              background-color: var(--color-bg-primary);
              color: var(--color-text-primary);
              margin: 0;
              padding: 0;
              line-height: 1.6;
            }
            * {
              box-sizing: border-box;
            }
            /* Performance optimization for IA-themed gradients */
            .gradient-ia {
              background: linear-gradient(135deg, var(--ia-blue) 0%, var(--auto-green) 100%);
              will-change: transform;
            }
          `
        }} />
      </head>
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased font-sans min-h-screen flex flex-col">
        <GoogleTagManagerNoScript gtmId={gtmId || 'GTM-TGD5LDTN'} />
        <AnalyticsWrapper>
          <WebVitalsReporter />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:z-50 focus:bg-[var(--ia-blue)] focus:text-white focus:rounded-br-md focus:font-medium"
          >
            Saltar al contenido principal
          </a>
          <Header logo={<Logo />} />
          <main id="main" className="flex-grow">
            {children}
          </main>
        <FooterSectionSimple 
          links={footerLinks}
          copyright={`© ${new Date().getFullYear()} AQXION. Todos los derechos reservados.`}
        />
          <CookieBanner />
          <PWAInstall />
          <AppStatusNotification />
        </AnalyticsWrapper>
      </body>
    </html>
  );
}