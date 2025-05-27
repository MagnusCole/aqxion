import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { PainPointSection } from "@/sections/PainPointSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { CTASection } from "@/sections/CTASection";
import { FooterSectionSimple } from "@/sections/FooterSectionSimple";

export default function Home() {
  // Enlaces del footer
  const footerLinks = [
    { label: 'Inicio', href: '/' },
    { label: "Tu problema", href: "#problema" },
    { label: 'Por qué elegirnos', href: '#servicios' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' }
  ];
return (
    <>
      <HeroSection />
      <ProblemSection />
      <PainPointSection />
      <SolutionSection />
      <CTASection />
      <FooterSectionSimple 
        links={footerLinks}
        copyright={`© ${new Date().getFullYear()} AQXION. Todos los derechos reservados.`}
      />
    </>
  );
}
