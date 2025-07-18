// GROWTH EQUITY PARTNER: ServicesStackSection transformado para modelo híbrido cash + equity
"use client"

import { useState } from "react";

/**
 * Sección servicios con modelo híbrido: Cash services + Equity partnerships
 * Enfoque: Flexibilidad de pagos y alineación de intereses
 */
export const ServicesStackSection = () => {
  const [activeTab, setActiveTab] = useState<'cash' | 'equity' | 'hybrid'>('hybrid');

  const hybridModels = {
    cash: {
      title: "Servicios Cash",
      subtitle: "Modelo Tradicional Mejorado",
      description: "Nuestro stack de 5 servicios integrados con pagos mensuales y garantías de ROI.",
      priceRange: "$5K - $15K/mes",
      commitment: "3-6 meses",
      benefits: [
        "Stack completo integrado",
        "Garantía ROI 3x o reembolso",
        "Setup en 14 días",
        "Reporting semanal"
      ],
      bestFor: "Negocios con cash flow estable que buscan growth predecible",
      icon: "�"
    },
    equity: {
      title: "Partnership Equity",
      subtitle: "Inversión + Servicios",
      description: "Invertimos en tu empresa (5-15% equity) y escalamos con nuestro stack completo sin costos mensuales.",
      priceRange: "5-15% equity",
      commitment: "18-36 meses",
      benefits: [
        "Cero pagos mensuales",
        "Inversión inicial en efectivo",
        "Partnership a largo plazo",
        "Skin-in-the-game total"
      ],
      bestFor: "Startups y empresas con gran potencial que buscan socios estratégicos",
      icon: "🤝"
    },
    hybrid: {
      title: "Modelo Híbrido",
      subtitle: "Lo Mejor de Ambos Mundos",
      description: "Combina equity minoritario (3-8%) con servicios reducidos para máxima flexibilidad.",
      priceRange: "3-8% equity + $2K-5K/mes",
      commitment: "12-24 meses",
      benefits: [
        "Menores costos mensuales",
        "Partnership parcial",
        "Flexibilidad financiera",
        "Interests semi-alineados"
      ],
      bestFor: "Empresas que quieren partnership pero mantener control total",
      icon: "⚖️"
    }
  };

  const services = {
    ads: {
      title: "Ads + Growth Hacking",
      subtitle: "Adquisición Escalable",
      description: "Meta/Google Ads + Growth Hacking para adquisición masiva de clientes cualificados.",
      equityValue: "Incrementa valuación 2-5x",
      cashROI: "+400% ROI promedio",
      icon: "📈"
    },
    outreach: {
      title: "Outreach + Sales Automation", 
      subtitle: "Pipeline Predecible",
      description: "Agentes IA + Sales automation para generar pipeline constante y predecible.",
      equityValue: "Revenue predecible = mayor valuación",
      cashROI: "25% tasa cierre",
      icon: "🎯"
    },
    content: {
      title: "Content + SEO Authority",
      subtitle: "Organic Moat",
      description: "Content strategy + SEO para crear ventaja competitiva sostenible.",
      equityValue: "Organic moat aumenta múltiplos exit",
      cashROI: "80% menor CAC",
      icon: "📝"
    },
    automation: {
      title: "AI + Automation",
      subtitle: "Eficiencia Exponencial", 
      description: "Workflows inteligentes + agentes IA para automatizar todo el customer journey.",
      equityValue: "Escalabilidad = múltiplos más altos",
      cashROI: "10x eficiencia operativa",
      icon: "🤖"
    },
    copywriting: {
      title: "Copy + Conversion",
      subtitle: "Mensajes Que Venden",
      description: "Copy psychology-driven para landing pages, emails y ads que realmente convierten.",
      equityValue: "Higher conversion = más revenue",
      cashROI: "+85% tasa conversión",
      icon: "✍️"
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-[var(--equity-gold)]/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header: Hybrid Model Introduction */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[var(--equity-gold)]/10 text-[var(--equity-blue)] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-[var(--equity-gold)]/20">
            <span className="w-2 h-2 bg-[var(--equity-green)] rounded-full animate-pulse"></span>
            🔄 MODELO HÍBRIDO ÚNICO
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="text-[var(--equity-blue)]">Elige Tu Modelo:</span><br />
            <span className="equity-gradient-text">Cash, Equity o Híbrido</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            <strong>Flexibilidad total</strong>: Servicios tradicionales, partnership equity o modelo híbrido. 
            <span className="text-[var(--equity-green)] font-semibold">Tú decides cómo trabajar con nosotros.</span>
          </p>
        </div>

        {/* Model Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(['cash', 'equity', 'hybrid'] as const).map((model) => (
            <button
              key={model}
              onClick={() => setActiveTab(model)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === model
                  ? 'bg-[var(--equity-gold)] text-[var(--equity-blue)] shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {hybridModels[model].icon} {hybridModels[model].title}
            </button>
          ))}
        </div>

        {/* Active Model Details */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20 border border-[var(--equity-gold)]/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center lg:text-left">{hybridModels[activeTab].icon}</div>
              <h3 className="text-4xl font-bold text-[var(--equity-blue)] mb-4">
                {hybridModels[activeTab].title}
              </h3>
              <p className="text-xl text-[var(--equity-green)] font-semibold mb-6">
                {hybridModels[activeTab].subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {hybridModels[activeTab].description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-[var(--equity-gold)]/10 rounded-2xl">
                  <div className="text-2xl font-bold text-[var(--equity-blue)]">
                    {hybridModels[activeTab].priceRange}
                  </div>
                  <div className="text-sm text-gray-600">Inversión</div>
                </div>
                <div className="text-center p-4 bg-[var(--equity-blue)]/10 rounded-2xl">
                  <div className="text-2xl font-bold text-[var(--equity-blue)]">
                    {hybridModels[activeTab].commitment}
                  </div>
                  <div className="text-sm text-gray-600">Commitment</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-[var(--equity-blue)] mb-6">Beneficios Clave:</h4>
              <ul className="space-y-4 mb-8">
                {hybridModels[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[var(--equity-green)] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </span>
                    <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[var(--equity-gold)]/10 p-6 rounded-2xl border border-[var(--equity-gold)]/30">
                <h5 className="font-bold text-[var(--equity-blue)] mb-2">Ideal Para:</h5>
                <p className="text-gray-700">{hybridModels[activeTab].bestFor}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Stack */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--equity-blue)] mb-6">
            Nuestro Stack de 5 Servicios Integrados
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Los mismos servicios world-class, diferentes modelos de partnership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, service]) => (
            <div key={key} className="equity-deal-card equity-card-hover">
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h4 className="text-xl font-bold text-[var(--equity-blue)] mb-2 text-center">
                {service.title}
              </h4>
              <p className="text-[var(--equity-green)] font-semibold mb-4 text-center">
                {service.subtitle}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-[var(--equity-blue)]/10 rounded-xl">
                  <div className="text-sm font-bold text-[var(--equity-blue)]">Cash ROI</div>
                  <div className="text-xs text-gray-600">{service.cashROI}</div>
                </div>
                <div className="text-center p-3 bg-[var(--equity-gold)]/10 rounded-xl">
                  <div className="text-sm font-bold text-[var(--equity-gold)]">Equity Value</div>
                  <div className="text-xs text-gray-600">{service.equityValue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[var(--equity-blue)] via-[var(--equity-green)] to-[var(--equity-gold)] p-12 rounded-3xl text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Elegir Tu Modelo de Partnership?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Hablemos sobre cuál modelo se adapta mejor a tu situación y objetivos
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-[var(--equity-blue)] font-bold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                🤝 Evaluar Equity Partnership
              </button>
              <button className="bg-white/20 text-white border-2 border-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-[var(--equity-blue)] transition-all duration-300">
                💰 Ver Servicios Cash
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
