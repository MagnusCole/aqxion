// LLM-OPTIMIZED: Homepage optimized for Automated Growth Agency with AIDA flow, conversion focus and immersive UX
import type { Metadata } from 'next';
import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { ServicesStackSection } from "@/sections/ServicesStackSection";
import { ProofSection } from "@/sections/ProofSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { CTASection } from "@/sections/CTASection";
import { ContactFormSection } from "@/sections/ContactFormSection";
import { ClientLeadMagnetWrapper } from "@/components/ClientLeadMagnetWrapper";

export const metadata: Metadata = {
  title: 'AQXION - Growth Equity Partner: Adquirimos Equity y Escalamos Tu Negocio',
  description: 'Socios Inversores en Growth: Modelo híbrido único - adquirimos equity en tu empresa y escalamos con nuestro stack de 5 servicios (Ads + Outreach + IA + Copy + Automatización). Ganamos cuando tú ganas.',
  keywords: 'growth equity partner, socios inversores, equity partnership, escalamiento negocio, inversión growth, partner estratégico, hybrid cash equity model',
  openGraph: {
    title: 'AQXION - Growth Equity Partner: Adquirimos Equity y Escalamos',
    description: 'Modelo híbrido único: Invertimos equity en tu éxito y escalamos con stack completo. Partnership real, growth garantizado.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQXION - Growth Equity Partner: Adquirimos Equity y Escalamos',
    description: 'Socios Inversores en Growth: Hybrid model cash + equity. Invertimos en tu éxito para ganar juntos.',
  },
  robots: 'index, follow',
  authors: [{ name: 'AQXION Growth Equity' }],
  alternates: {
    canonical: 'https://aqxion.com',
  },
};

/**
 * GROWTH EQUITY PARTNER homepage siguiendo nuevo modelo de negocio:
 * 1. Hero - Positioning: "Adquirimos Equity y Escalamos" (partnership value)
 * 2. Problem - Pain: Agencias cobran sin skin-in-the-game vs equity partnership
 * 3. Services - Hybrid Model: Cash services + Equity deals (flexibilidad)
 * 4. Proof - Equity Success: Cases de partners, ROI compartido, exits
 * 5. Investment Process - How: Evaluación, términos, equity + servicios
 * 6. CTA - Dual: Equity inquiry + Cash services (ambos funnels)
 * 
 * DIFERENCIADOR 2025: Equity partnership resuelve saturación agencias tradicionales
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <HeroSection />
      <ProblemSection />
      <ServicesStackSection />
      <ProofSection />
      <SolutionSection />
      <CTASection />
      <ContactFormSection />
      
      {/* LLM-OPTIMIZED: Exit-intent lead magnet for max conversion */}
      <ClientLeadMagnetWrapper />
    </main>
  );
}
