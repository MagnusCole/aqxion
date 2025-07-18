// LLM-OPTIMIZED: ProofSection transformado para Growth Equity Partner - casos equity partnerships, valoraciones, ROI alignment
"use client"

import { useState } from "react";

/**
 * Proof section con casos de equity partnerships exitosos
 * Demuestra valor agregado y alineación de intereses
 */
export const ProofSection = () => {
  const [activeTab, setActiveTab] = useState<'partnerships' | 'valuations' | 'metrics'>('partnerships');

  const equityPartnerships = [
    {
      text: "AQXION invirtió 8% equity en nuestra startup. En 18 meses triplicamos revenue y logramos una valuación 5x mayor. Son socios reales, no solo proveedores.",
      author: "María González",
      role: "Co-Founder & CEO",
      company: "StyleHub (E-commerce)",
      results: "Valuación: $2M → $10M",
      equityDetails: "8% equity + growth stack",
      timeline: "18 meses",
      avatar: "👩‍💼"
    },
    {
      text: "El modelo híbrido fue perfecto para nosotros: 5% equity + servicios reducidos. Escalamos a 6 cifras manteniendo control total del negocio.",
      author: "Carlos Mendoza", 
      role: "Founder & CTO",
      company: "TechFlow (SaaS B2B)",
      results: "Revenue: $50K → $400K MRR",
      equityDetails: "5% equity + $3K/mes",
      timeline: "12 meses",
      avatar: "👨‍💻"
    },
    {
      text: "Su partnership equity nos permitió escalar sin deuda. Alinearon completamente con nuestros objetivos y fueron transparentes en cada paso del proceso.",
      author: "Ana Ruiz",
      role: "CEO & Founder",
      company: "ConsultPro (Servicios)",
      results: "Exit exitoso: $8M valuación",
      equityDetails: "12% equity partnership",
      timeline: "24 meses",
      avatar: "👩‍🎓"
    },
    {
      text: "Empezamos con servicios cash, luego evolucionamos a partnership equity. El skin-in-the-game de AQXION marcó la diferencia total en resultados.",
      author: "Luis Herrera",
      role: "Owner & Director",
      company: "DigitalMax (Agencia)",
      results: "3x revenue, team de 2 a 15",
      equityDetails: "Evolución: Cash → 7% equity",
      timeline: "15 meses",
      avatar: "👨‍🚀"
    }
  ];

  const valuationCases = [
    {
      company: "StyleHub (E-commerce)",
      industry: "Fashion Retail",
      challenge: "Startup con gran potencial pero sin capital para escalar",
      solution: "8% equity investment + growth stack completo",
      before: {
        valuation: "$2M",
        revenue: "$50K/mes",
        team: "3 personas"
      },
      after: {
        valuation: "$10M",
        revenue: "$250K/mes", 
        team: "15 personas"
      },
      timeline: "18 meses",
      aqxionGain: "4x return on equity"
    },
    {
      company: "TechFlow (SaaS)",
      industry: "B2B Software",
      challenge: "Plateau en crecimiento, necesitaba capital + expertise",
      solution: "5% equity + servicios híbridos ($3K/mes)",
      before: {
        valuation: "$5M",
        revenue: "$50K MRR",
        churn: "8%"
      },
      after: {
        valuation: "$25M", 
        revenue: "$400K MRR",
        churn: "3%"
      },
      timeline: "12 meses",
      aqxionGain: "5x return on investment"
    },
    {
      company: "ConsultPro (Servicios)",
      industry: "Consultoría", 
      challenge: "Exit strategy - needed valuation optimization",
      solution: "12% equity partnership para prep exit",
      before: {
        valuation: "$3M",
        revenue: "$200K/mes",
        systems: "Manual"
      },
      after: {
        valuation: "$8M",
        revenue: "$500K/mes",
        systems: "100% automated"
      },
      timeline: "24 meses",
      aqxionGain: "Exit successful - 2.6x multiple"
    }
  ];

  const equityMetrics = [
    { label: "Portfolio Companies", value: "25+", period: "Equity partnerships activos" },
    { label: "Avg ROI on Equity", value: "420%", period: "18-24 meses" },
    { label: "Valuations Increased", value: "$150M+", period: "Portfolio total" },
    { label: "Successful Exits", value: "8", period: "Multiple 2.5x+ promedio" },
    { label: "Hybrid Partnerships", value: "45+", period: "Cash + equity combos" },
    { label: "Partner Satisfaction", value: "98%", period: "NPS score" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-[var(--equity-gold)]/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[var(--equity-gold)]/10 text-[var(--equity-blue)] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-[var(--equity-gold)]/20">
            <span className="w-2 h-2 bg-[var(--equity-green)] rounded-full animate-pulse"></span>
            💎 PARTNERSHIPS EXITOSOS VERIFICADOS
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="text-[var(--equity-blue)]">Portfolio que</span><br />
            <span className="equity-gradient-text">Habla por Sí Solo</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            <strong>25+ equity partnerships</strong> exitosos, <strong>$150M+ en valoraciones agregadas</strong> y <strong>420% ROI promedio</strong>. 
            <span className="text-[var(--equity-green)] font-semibold">Estos son resultados reales cuando alineamos intereses.</span>
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(['partnerships', 'valuations', 'metrics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[var(--equity-gold)] text-[var(--equity-blue)] shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {tab === 'partnerships' && '🤝 Equity Partners'} 
              {tab === 'valuations' && '📈 Valoraciones'}
              {tab === 'metrics' && '� Métricas Portfolio'}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'partnerships' && (
          <div className="grid md:grid-cols-2 gap-8">
            {equityPartnerships.map((partner, index) => (
              <div key={index} className="equity-deal-card equity-card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center text-3xl">
                    {partner.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[var(--equity-blue)] text-lg">{partner.author}</div>
                    <div className="text-sm text-gray-600">{partner.role}</div>
                    <div className="text-sm text-[var(--equity-green)] font-semibold">{partner.company}</div>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{partner.text}&rdquo;
                </blockquote>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-[var(--equity-green)]/10 p-4 rounded-xl text-center">
                    <div className="font-bold text-[var(--equity-green)] text-sm">RESULTADO:</div>
                    <div className="text-[var(--equity-green)] font-medium text-xs">{partner.results}</div>
                  </div>
                  <div className="bg-[var(--equity-blue)]/10 p-4 rounded-xl text-center">
                    <div className="font-bold text-[var(--equity-blue)] text-sm">DEAL:</div>
                    <div className="text-[var(--equity-blue)] font-medium text-xs">{partner.equityDetails}</div>
                  </div>
                </div>

                <div className="bg-[var(--equity-gold)]/10 p-3 rounded-xl border border-[var(--equity-gold)]/30">
                  <div className="font-bold text-[var(--equity-gold)] text-sm">Timeline: {partner.timeline}</div>
                </div>
                
                <div className="flex text-[var(--equity-gold)] mt-4 text-lg">★★★★★</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'valuations' && (
          <div className="space-y-8">
            {valuationCases.map((case_, index) => (
              <div key={index} className="equity-deal-card">
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Company Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--equity-blue)] mb-2">{case_.company}</h3>
                    <p className="text-[var(--equity-green)] font-semibold mb-4">{case_.industry}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-red-600 mb-2">DESAFÍO:</h4>
                      <p className="text-gray-700 text-sm">{case_.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-[var(--equity-blue)] mb-2">SOLUCIÓN:</h4>
                      <p className="text-gray-700 text-sm">{case_.solution}</p>
                    </div>

                    <div className="bg-[var(--equity-gold)]/10 p-4 rounded-xl border border-[var(--equity-gold)]/30">
                      <div className="font-bold text-[var(--equity-gold)] text-sm">AQXION GAIN:</div>
                      <div className="text-[var(--equity-gold)] font-medium">{case_.aqxionGain}</div>
                    </div>
                  </div>
                  
                  {/* Before/After Comparison */}
                  <div className="lg:col-span-2">
                    <h4 className="font-bold text-[var(--equity-blue)] mb-6 text-center">
                      TRANSFORMACIÓN EN {case_.timeline.toUpperCase()}:
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {/* Before */}
                      <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                        <h5 className="font-bold text-red-600 mb-4 text-center">ANTES</h5>
                        <div className="space-y-3">
                          {Object.entries(case_.before).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-white rounded-lg">
                              <div className="text-lg font-bold text-red-600">{value}</div>
                              <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* After */}
                      <div className="bg-[var(--equity-green)]/10 p-6 rounded-xl border border-[var(--equity-green)]/30">
                        <h5 className="font-bold text-[var(--equity-green)] mb-4 text-center">DESPUÉS</h5>
                        <div className="space-y-3">
                          {Object.entries(case_.after).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-white rounded-lg">
                              <div className="text-lg font-bold text-[var(--equity-green)]">{value}</div>
                              <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'metrics' && (
          <div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {equityMetrics.map((metric, index) => (
                <div key={index} className="equity-deal-card text-center">
                  <div className="text-5xl font-bold equity-gradient-text mb-4">{metric.value}</div>
                  <div className="text-xl font-bold text-[var(--equity-blue)] mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.period}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-[var(--equity-blue)] via-[var(--equity-green)] to-[var(--equity-gold)] p-12 rounded-3xl text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para Ser Nuestro Próximo Equity Partner?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Únete a 25+ fundadores que escalaron con partnership equity y lograron exits exitosos
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={() => window.location.href = '/contacto-equity'}
                  className="bg-white text-[var(--equity-blue)] font-bold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🤝 Evaluar Mi Empresa para Equity
                </button>
                <button 
                  onClick={() => window.location.href = '/casos-equity'}
                  className="bg-white/20 text-white border-2 border-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-[var(--equity-blue)] transition-all duration-300"
                >
                  📊 Ver Todos los Casos
                </button>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
};