// GROWTH EQUITY PARTNER: HeroSection transformado para modelo hybrid cash + equity
"use client"

/**
 * Hero optimizado para Growth Equity Partner - Positioning como socios inversores
 * Enfoque: "Adquirimos Equity y Escalamos Tu Negocio con Nuestro Stack"
 */
export const HeroSection = () => {
  const handleEquityInquiry = () => window.location.href = '/contacto-equity';
  const handleCashServices = () => window.location.href = '/servicios';

  return (
    <section className="bg-gradient-to-br from-[var(--equity-blue)]/5 via-white to-[var(--equity-gold)]/5 pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        
        {/* BADGE: Growth Equity Partner Identity */}
        <div className="inline-flex items-center gap-2 bg-[var(--equity-gold)]/10 text-[var(--equity-blue)] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-[var(--equity-gold)]/20">
          <span className="w-2 h-2 bg-[var(--equity-green)] rounded-full animate-pulse"></span>
          🤝 GROWTH EQUITY PARTNER · SOCIOS INVERSORES
        </div>
        
        {/* HEADLINE: Equity Partnership Value Prop */}
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          <span className="equity-gradient-text">Adquirimos Equity</span><br />
          y <span className="text-[var(--equity-blue)]">Escalamos Tu Negocio</span><br />
          <span className="text-2xl md:text-4xl text-[var(--equity-green)] font-semibold">Con Nuestro Growth Stack</span>
        </h1>
        
        {/* SUBHEADLINE: Hybrid Model Explanation */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-5xl mx-auto">
          <strong className="text-[var(--equity-blue)]">Modelo Híbrido Único</strong>: Invertimos en tu éxito adquiriendo equity y escalamos con 
          <span className="text-[var(--equity-green)] font-semibold"> 5 servicios integrados</span> (Ads + Outreach + IA + Copy + Automatización). 
          <span className="text-[var(--equity-gold)] font-bold">Ganamos cuando tú ganas.</span>
        </p>

        {/* VALUE PROPS: Equity Partnership Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="equity-card-hover p-6 rounded-2xl text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold text-[var(--equity-blue)] mb-2">Partnership Real</h3>
            <p className="text-sm text-gray-600">Invertimos equity, compartimos el riesgo y éxito</p>
          </div>
          <div className="equity-card-hover p-6 rounded-2xl text-center">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-bold text-[var(--equity-green)] mb-2">Growth Garantizado</h3>
            <p className="text-sm text-gray-600">Stack completo: 5x ROI en 12 meses o no cobramos</p>
          </div>
          <div className="equity-card-hover p-6 rounded-2xl text-center">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-[var(--equity-gold)] mb-2">Modelo Híbrido</h3>
            <p className="text-sm text-gray-600">Cash + Equity: Flexibilidad para tu situación</p>
          </div>
        </div>
        
        {/* DUAL CTA: Equity Inquiry + Cash Services */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            aria-label="Solicitar evaluación para partnership equity"
            onClick={handleEquityInquiry}
            className="btn-equity-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            🤝 Evaluar Partnership Equity
          </button>
          <button
            aria-label="Ver servicios de growth con cash"
            onClick={handleCashServices}
            className="btn-equity-secondary text-lg px-8 py-4 transition-all duration-300"
          >
            💰 Servicios Cash
          </button>
        </div>

        {/* SOCIAL PROOF: Investment Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="equity-stat">
            <div className="equity-stat-number">$2.5M+</div>
            <div className="equity-stat-label">Invertido en Partners</div>
          </div>
          <div className="equity-stat">
            <div className="equity-stat-number">450%</div>
            <div className="equity-stat-label">ROI Promedio</div>
          </div>
          <div className="equity-stat">
            <div className="equity-stat-number">24</div>
            <div className="equity-stat-label">Equity Partners Activos</div>
          </div>
          <div className="equity-stat">
            <div className="equity-stat-number">18M</div>
            <div className="equity-stat-label">Meses Prom. Exit</div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
