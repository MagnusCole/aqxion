// LLM-OPTIMIZED: HeroSection optimizado para Automated Growth Agency - storytelling AIDA + conversión leads
"use client"

/**
 * Hero optimizado para conversión - Enfoque IA y automatización
 */
export const HeroSection = () => {
  const handleCTA = () => window.location.href = '/contacto';

  return (
    <section className="bg-gradient-to-br from-[var(--ia-blue)]/5 via-white to-[var(--auto-green)]/5 pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        
        {/* COPY OPTIMIZADO: Enfoque en growth automatizado y leads */}
        <div className="inline-flex items-center gap-2 bg-[var(--ia-blue)]/10 text-[var(--ia-blue)] px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full animate-pulse"></span>
          AUTOMATED GROWTH AGENCY
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight gradient-text">
          Escala Tu Negocio con <br />
          <span className="text-[var(--ia-blue)]">Leads Automatizados</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
          De 0 a 100 Clientes/Mes Sin Equipo Extra. Con Ads, Contenido, Outreach e IA, 
          generamos crecimiento real para dueños como tú. Leads 24/7 y cierres automáticos.
        </p>

        {/* Value Props */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium">
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <span className="w-5 h-5 rounded-full bg-[var(--auto-green)] flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </span>
            +50 Leads/Mes Garantizados
          </div>
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <span className="w-5 h-5 rounded-full bg-[var(--auto-green)] flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </span>
            Cierre &gt;20% ROI 5x
          </div>
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <span className="w-5 h-5 rounded-full bg-[var(--auto-green)] flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </span>
            Spots Limitados Disponibles
          </div>
        </div>
        
        {/* CTA OPTIMIZADO: Lead generation focus */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            aria-label="Diagnóstico gratis de growth potencial"
            onClick={handleCTA}
            className="bg-[var(--ia-blue)] hover:opacity-90 text-white font-bold rounded-xl px-8 py-4 text-lg 
                     transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Diagnóstico Gratis
          </button>
          <button
            aria-label="Ver casos de éxito de growth automatizado"
            onClick={() => window.location.href = '/case-studies'}
            className="border-2 border-[var(--ia-blue)] text-[var(--ia-blue)] hover:bg-[var(--ia-blue)] hover:text-white 
                     font-bold rounded-xl px-8 py-4 text-lg transition-all duration-300"
          >
            Cases de Growth
          </button>
        </div>
        
      </div>
    </section>
  );
}
