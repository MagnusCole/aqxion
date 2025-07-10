import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/composables/navigation/Header";
import { CookieBanner } from "@/components/composables/marketing/CookieBanner";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/analytics/GoogleTagManager";
import { AnalyticsWrapper } from "@/components/analytics/AnalyticsWrapper";
import Link from "next/link";
import Image from "next/image";
import { FooterSectionSimple } from "@/sections/FooterSectionSimple";

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
    { label: 'Contacto', href: '/contacto' },
    { label: 'Términos y Privacidad', href: '/terminos-privacidad' }
  ];

export const metadata: Metadata = {
  title: "AQXION",
  description: "Crecimiento de negocios y soluciones de adquisición.",
  openGraph: {
    title: "AQXION",
    description: "Crecimiento de negocios y soluciones de adquisición.",
    url: "https://aqxion.com",
    siteName: "AQXION",
    type: "website",
  },
};

// Logo component using the file from /public
const Logo = () => (
  <Link href="/" className="flex items-center">
    <div className="flex items-center gap-3">
      <Image 
        src="/assets/logo/aqxion_logo.svg" 
        alt="AQXION" 
        width={250} 
        height={250} 
        priority
        className="w-8 h-auto sm:w-10 md:w-12"
      />
      <span className="text-lg sm:text-xl md:text-2xl">
        <span className="font-bold">AQXION</span>.com
      </span>
    </div>
  </Link>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      data-theme="light" // This will be dynamically managed later if needed
    >
      <head>
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {/* Critical CSS for production - fix for Vercel deployment */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-bg-primary: #FFFFFF;
              --color-bg-secondary: #F8F9FB;
              --color-text-primary: #1A1F36;
              --color-text-secondary: #3C4257;
              --color-accent-main: #007AFF;
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
          `
        }} />
      </head>
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased font-sans min-h-screen flex flex-col">
        {gtmId && <GoogleTagManagerNoScript gtmId={gtmId} />}
        <AnalyticsWrapper>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:z-50 focus:bg-black focus:text-white"
          >
            Saltar al contenido principal
          </a>        <Header logo={<Logo />} />
          <main id="main" className="flex-grow">
            {children}
          </main>
        <FooterSectionSimple 
          links={footerLinks}
          copyright={`© ${new Date().getFullYear()} AQXION. Todos los derechos reservados.`}
        />
          <CookieBanner />
        </AnalyticsWrapper>
      </body>
    </html>
  );
}