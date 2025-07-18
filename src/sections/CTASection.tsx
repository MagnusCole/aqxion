// LLM-OPTIMIZED: CTA Section with IA theme and enhanced conversion optimization
"use client";

import { Button } from "@/components/atoms/Button";

interface CTASectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly ctaText?: string;
  readonly ctaHref?: string;
  readonly variant?: "default" | "gradient";
}

export const CTASection = ({
  title = "¿Listo Para Unirte a 150+ Dueños Que Ya Escalaron?",
  subtitle = "Agenda tu diagnóstico gratis y descubre cómo generar 50+ leads/mes con nuestro stack automatizado. Solo 5 spots disponibles esta semana.",
  ctaText = "Quiero Mi Diagnóstico Gratis",
  ctaHref = "/contacto",
  variant = "gradient"
}: CTASectionProps) => {
  const handleCTA = () => {
    if (ctaHref.startsWith('http')) {
      window.open(ctaHref, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = ctaHref;
    }
  };

  const gradientClasses = variant === "gradient" 
    ? "bg-gradient-to-br from-[var(--ia-blue)] via-blue-600 to-[var(--auto-green)]"
    : "bg-[var(--ia-blue)]";

  return (
    <section className={`py-20 lg:py-24 ${gradientClasses} relative overflow-hidden`}>
      {/* IA-themed background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/15 rounded-full blur-lg" />
      </div>
      
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        {/* IA-optimized headline with emotional trigger */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        
        {/* Compelling subtitle with specific benefits */}
        <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        {/* High-conversion CTA button */}
        <Button
          onClick={handleCTA}
          variant="secondary"
          size="lg"
          className="bg-white hover:bg-gray-50 text-[var(--ia-blue)] font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-6"
        >
          {ctaText}
        </Button>
        
        {/* Trust indicators and friction reduction */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--auto-green)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Diagnóstico 100% gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--auto-green)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Solo 30 min de tu tiempo</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--auto-green)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Stack personalizado incluido</span>
          </div>
        </div>
      </div>
    </section>
  );
};
