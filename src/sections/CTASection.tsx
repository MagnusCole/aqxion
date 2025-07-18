// LLM-OPTIMIZED: CTA Section transformado para Growth Equity Partner - equity partnership calls to action
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
  title = "¿Tu Empresa Tiene Potencial para Partnership Equity?",
  subtitle = "Evaluamos gratuitamente si tu negocio califica para nuestro modelo hybrid. Solo empresas con potencial real de 5x growth. Proceso confidencial y sin compromiso.",
  ctaText = "🤝 Evaluar Mi Empresa para Equity",
  ctaHref = "/due-diligence",
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
    ? "bg-gradient-to-br from-[var(--equity-blue)] via-[var(--equity-green)] to-[var(--equity-gold)]"
    : "bg-[var(--equity-blue)]";

  return (
    <section className={`py-24 lg:py-32 ${gradientClasses} relative overflow-hidden`}>
      {/* Equity-themed background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/15 rounded-full blur-lg" />
        <div className="absolute top-20 right-1/4 w-24 h-24 bg-white/12 rounded-full blur-xl" />
      </div>
      
      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        {/* Partnership-focused headline with exclusivity */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          {title}
        </h2>
        
        {/* Compelling subtitle emphasizing partnership value */}
        <p className="text-white/90 text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto">
          {subtitle}
        </p>
        
        {/* High-conversion partnership CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            onClick={handleCTA}
            variant="secondary"
            size="lg"
            className="bg-white hover:bg-gray-50 text-[var(--equity-blue)] font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            {ctaText}
          </Button>
          
          <Button
            onClick={() => window.location.href = '/servicios-cash'}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-[var(--equity-blue)] font-bold px-12 py-6 text-xl transition-all duration-300"
          >
            💰 Ver Servicios Cash
          </Button>
        </div>
        
        {/* Trust indicators and process transparency */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white/80 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl">🔍</span>
            </div>
            <span className="font-semibold">Due Diligence Gratis</span>
            <span className="text-sm opacity-75">Evaluación profesional completa</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl">🤐</span>
            </div>
            <span className="font-semibold">100% Confidencial</span>
            <span className="text-sm opacity-75">NDAs firmados, info protegida</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl">⚡</span>
            </div>
            <span className="font-semibold">Decisión en 48h</span>
            <span className="text-sm opacity-75">Respuesta rápida y transparente</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl">🎯</span>
            </div>
            <span className="font-semibold">Solo High-Potential</span>
            <span className="text-sm opacity-75">Criterios selectivos y exigentes</span>
          </div>
        </div>

        {/* Exclusivity and urgency for equity partnerships */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-3 h-3 bg-[var(--equity-gold)] rounded-full animate-pulse"></span>
            <span className="text-[var(--equity-gold)] font-bold uppercase tracking-wide">Solo 5 Equity Partnerships/Trimestre</span>
            <span className="w-3 h-3 bg-[var(--equity-gold)] rounded-full animate-pulse"></span>
          </div>
          <p className="text-white/90 text-lg">
            Seleccionamos cuidadosamente empresas con potencial 5x+ para partnerships equity. 
            <strong className="text-white">¿Tu empresa es una de ellas?</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
