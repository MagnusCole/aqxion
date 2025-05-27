import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { PainPointSection } from "@/sections/PainPointSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { FAQSection } from "@/sections/FAQSection";
import { ContactFormSection } from "@/sections/ContactFormSection";
import { FooterSectionSimple } from "@/sections/FooterSectionSimple";

export default function Home() {  
  // Enlaces del footer
  const footerLinks = [
    { label: 'Inicio', href: '#' },
    { label: "El problema", href: "#problema" },
    { label: 'Por qué elegirnos', href: '#servicios' },
    { label: 'Preguntas frecuentes', href: '#preguntas' },
    { label: 'Contacto', href: '#contacto' },
  ];
  // Texto de descargo del footer
  const footerDisclaimer = 'Los resultados pueden variar según cada negocio y su implementación. Ofrecemos consulta gratuita para evaluar tu situación específica.';

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PainPointSection />
      <SolutionSection />
      <FAQSection />
      <ContactFormSection />      <FooterSectionSimple 
        links={footerLinks}
        disclaimer={footerDisclaimer}
        copyright={`© ${new Date().getFullYear()} MarketingPro. Todos los derechos reservados.`}
      />
    </>
  );
}
