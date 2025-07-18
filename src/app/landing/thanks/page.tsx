import type { Metadata } from "next";
import { ThanksHeroSection } from "./components/ThanksHeroSection";
import { ThanksOfferSection } from "./components/ThanksOfferSection";
import { ThanksGuaranteeSection } from "./components/ThanksGuaranteeSection";
import { LandingFooter } from "../components/LandingFooter";
import { CookieBanner } from "@/components/composables/marketing/CookieBanner";

export const metadata: Metadata = {
  title: "¡Application Recibida! Tu Equity Partnership está en Evaluación | AQXION",
  description: "Tu application está siendo evaluada por nuestro team. Respuesta inicial en 48-72 horas para due diligence confidencial.",
  openGraph: {
    title: "¡Application Recibida! Equity Partnership en Evaluación | AQXION",
    description: "Evaluamos tu empresa para equity partnership. Respuesta en 48-72h.",
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
