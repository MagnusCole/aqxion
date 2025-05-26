import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { PainPointSection } from "@/sections/PainPointSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { FAQSection } from "@/sections/FAQSection";
import { UrgencySection } from "@/sections/UrgencySection";
import { ContactFormSection } from "@/sections/ContactFormSection";
import { FooterSectionSimple } from "@/sections/FooterSectionSimple";

export default function Home() {  
  // Enlaces del footer
  const footerLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por qué elegirnos', href: '#solucion' },
    { label: 'Preguntas frecuentes', href: '#preguntas' },
    { label: 'Contacto', href: '#contacto' },
  ];

  // Texto de descargo del footer
  const footerDisclaimer = 'Resultados pueden variar según el tipo de negocio, mercado local y la implementación de estrategias. Los testimonios reflejan experiencias reales de nuestros clientes. Ofrecemos garantía de satisfacción de 90 días o te devolvemos el 100% de tu inversión.';

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PainPointSection />
      <SolutionSection />
      <ServicesSection />
      <FAQSection />
      <ContactFormSection />
      <UrgencySection />      <FooterSectionSimple 
        links={footerLinks}
        disclaimer={footerDisclaimer}
        copyright={`© ${new Date().getFullYear()} MarketingPro. Todos los derechos reservados.`}
      />
    </>
  );
}
