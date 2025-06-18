import type { Metadata } from "next";
import { ThanksHeroSection } from "./components/ThanksHeroSection";
import { ThanksOfferSection } from "./components/ThanksOfferSection";
import { ThanksGuaranteeSection } from "./components/ThanksGuaranteeSection";
import { LandingFooter } from "../components/LandingFooter";
import { CookieBanner } from "@/components/composables/marketing/CookieBanner";

export const metadata: Metadata = {
  title: "¡Guía Enviada! Acelera Tus Resultados con Una Consulta Gratuita | AQXION",
  description: "Tu guía está en camino. Agenda una consulta gratuita de 30 minutos para crear una estrategia personalizada para tu negocio.",
  openGraph: {
    title: "¡Guía Enviada! Acelera Tus Resultados | AQXION",
    description: "Agenda una consulta gratuita de 30 minutos para crear una estrategia personalizada.",
    url: "https://aqxion.com/landing/thanks",
    siteName: "AQXION",
    type: "website",
  },
  robots: {
    index: false, // No indexar thank you pages
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <>
      <main className="landing-page min-h-screen bg-white">
        {/* Hero - Confirmación */}
        <ThanksHeroSection />
        
        {/* Propuesta de Valor Extendida */}
        <ThanksOfferSection />
        
        {/* Garantías y Trust */}
        <ThanksGuaranteeSection />
        
        {/* Footer */}
        <LandingFooter />
      </main>

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Conversion Tracking for Thank You Page */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Thank you page tracking
            if (typeof window !== 'undefined') {
              // Track lead magnet download
              if (typeof fbq !== 'undefined') {
                fbq('track', 'CompleteRegistration', {
                  content_name: 'Meta Ads Guide Download',
                  content_category: 'Lead Magnet'
                });
              }
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with actual conversion ID
                  'event_category': 'lead_magnet',
                  'event_label': 'meta_ads_guide_download'
                });
              }
            }
          `,
        }}
      />
    </>
  );
}
