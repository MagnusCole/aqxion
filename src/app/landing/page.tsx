import type { Metadata } from "next";
import { LandingHeroSection } from "./components/LandingHeroSection";
import { LandingValueProposition } from "./components/LandingValueProposition";
{/*import { LandingSocialProof } from "./components/LandingSocialProof";
import { LandingSecondaryCTA } from "./components/LandingSecondaryCTA";/>*/}
import { LandingFooter } from "./components/LandingFooter";
import { MobileStickyCallToAction } from "./components/MobileStickyCallToAction";
import { CookieBanner } from "@/components/composables/marketing/CookieBanner";

export const metadata: Metadata = {
  title: "Apply for Equity Partnership | Evaluate Your Business for Growth Investment | AQXION",
  description: "Descubre si tu empresa califica para nuestro equity partnership. Solo 5 partnerships por trimestre. Application confidencial y gratuito.",
  openGraph: {
    title: "Apply for Equity Partnership | AQXION Growth Partners",
    description: "Invertimos equity en empresas prometedoras y escalamos juntos. Due diligence confidencial en 48-72h.",
    url: "https://aqxion.com/landing",
    siteName: "AQXION",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LandingPage() {
  return (
    <>
      {/* Critical CSS y Performance optimizations se manejan en globals.css */}
      <main className="landing-page min-h-screen bg-white">
        {/* Above the Fold - Hero + Form */}
        <LandingHeroSection />
        
        {/* Below the Fold - Value Props */}
        <LandingValueProposition />
        
        {/* Social Proof 
        <LandingSocialProof />*/}
        
        {/* Secondary CTA 
        <LandingSecondaryCTA />*/}
        
        {/* Minimal Footer */}
        <LandingFooter />
      </main>      {/* Cookie Banner - Integración existente */}
      <CookieBanner />

      {/* Sticky Mobile CTA */}
      <MobileStickyCallToAction />

      {/* Conversion Tracking Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Conversion tracking functions
            window.landingPageTracking = {
              trackFormView: function() {
                // Facebook Pixel event
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'ViewContent', {
                    content_name: 'Landing Page Form',
                    content_category: 'Lead Generation'
                  });
                }
                // Google Analytics event
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'view_form', {
                    'event_category': 'engagement',
                    'event_label': 'landing_page_form'
                  });
                }
              },
              trackFormSubmit: function() {
                // Facebook Pixel lead event
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'Lead');
                }
                // Google Analytics conversion
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'generate_lead', {
                    'event_category': 'conversion',
                    'event_label': 'landing_page_lead'
                  });
                }
              }
            };
          `,
        }}
      />
    </>
  );
}
