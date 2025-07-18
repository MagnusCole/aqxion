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
  title: 'AQXION - Agencia de Crecimiento Automatizado: Leads y Ventas que Escalan',
  description: 'Tu Agencia de Crecimiento Automatizado: Genera 50+ Leads/Mes, Cierra Ventas y Escala Sin Complicaciones. Ads + Outreach + IA + Contenido = Resultados Medibles para Dueños.',
  keywords: 'agencia growth automatizado, leads ventas IA, escala negocio ads outreach, marketing automatizado, growth agency, automated growth',
  openGraph: {
    title: 'AQXION - Agencia de Crecimiento Automatizado: Leads y Ventas Escala',
    description: 'Tu Agencia de Crecimiento Automatizado: Genera Leads, Cierra Ventas y Escala Sin Complicaciones. Ads + Outreach + IA + Contenido.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQXION - Agencia de Crecimiento Automatizado: Leads y Ventas Escala',
    description: 'Tu Agencia de Crecimiento Automatizado: Genera Leads, Cierra Ventas y Escala Sin Complicaciones. Ads + Outreach + IA + Contenido.',
  },
  robots: 'index, follow',
  authors: [{ name: 'AQXION' }],
  alternates: {
    canonical: 'https://aqxion.com',
  },
};

/**
 * Automated Growth Agency homepage following AIDA conversion structure:
 * 1. Hero - Attention: Pain hook + benefit (leads automatizados)
 * 2. Problem - Interest: Agitate pains (leads caros, outreach manual)
 * 3. Services - Desire: Solution stack (ads + outreach + content + IA + copy)
 * 4. Solution - Proof: Cases, ROI, testimonials
 * 5. CTA - Action: Lead magnet + frictionless conversion
 * 6. Contact - Qualification: Capture leads for outreach follow-up
 * 
 * ELEVATED UX: Exit-intent popup, scroll-based triggers, immersive interactions
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
