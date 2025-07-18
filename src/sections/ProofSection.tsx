// LLM-OPTIMIZED: ProofSection for Automated Growth Agency - social proof, cases, authority
"use client"

import { useState } from "react";

/**
 * Proof section with testimonials, case studies, and ROI metrics
 * Builds trust and demonstrates growth results
 */
export const ProofSection = () => {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'cases' | 'metrics'>('testimonials');

  const testimonials = [
    {
      text: "Pasamos de 0 a 100 leads cualificados/mes en 3 meses. Su sistema de growth automatizado cambió nuestro negocio completamente.",
      author: "María González",
      role: "CEO, E-commerce Fashion",
      company: "StyleHub",
      results: "+300% leads, ROI 5x",
      avatar: "👩‍💼"
    },
    {
      text: "Con su outreach automatizado generamos 50+ demos/mes sin aumentar equipo. El ROI fue 400% en el primer trimestre.",
      author: "Carlos Mendoza",
      role: "Founder, SaaS B2B",
      company: "TechFlow",
      results: "50+ demos/mes, 400% ROI",
      avatar: "👨‍💻"
    },
    {
      text: "Su contenido orgánico nos posicionó #1 en Google para nuestras keywords principales. Ahora los clientes nos encuentran solos.",
      author: "Ana Ruiz",
      role: "Directora Marketing",
      company: "ConsultPro",
      results: "#1 Google, 80% menos costo/lead",
      avatar: "👩‍🎓"
    },
    {
      text: "Automatizamos todo el funnel de ventas y triplicamos conversiones. Su copy persuasivo convierte como loco.",
      author: "Luis Herrera",
      role: "Owner, Agencia Digital",
      company: "DigitalMax",
      results: "3x conversiones, funnel automatizado",
      avatar: "👨‍🚀"
    }
  ];

  const cases = [
    {
      client: "E-commerce Fashion",
      industry: "Retail Online",
      challenge: "Leads caros y baja conversión en ads",
      solution: "Stack completo: Ads + Outreach + Content + IA",
      results: {
        leads: "+300%",
        cost: "-60%",
        revenue: "+250%",
        roi: "5x"
      },
      timeline: "3 meses"
    },
    {
      client: "SaaS B2B",
      industry: "Software",
      challenge: "Outreach manual ineficiente",
      solution: "Automatización completa + IA personalizada",
      results: {
        demos: "50+/mes",
        response: "15%",
        sales: "+400%",
        time: "-20h/semana"
      },
      timeline: "2 meses"
    },
    {
      client: "Consultoría",
      industry: "Servicios Profesionales",
      challenge: "Sin visibilidad online ni leads orgánicos",
      solution: "Contenido SEO + Outreach + Automatización",
      results: {
        ranking: "#1 Google",
        organic: "+500%",
        qualified: "40+/mes",
        cost: "-80%"
      },
      timeline: "4 meses"
    }
  ];

  const metrics = [
    { label: "Leads Generados", value: "10,000+", period: "En 12 meses" },
    { label: "ROI Promedio", value: "450%", period: "Primer trimestre" },
    { label: "Clientes Satisfechos", value: "150+", period: "Y creciendo" },
    { label: "Conversión Promedio", value: "25%", period: "vs 3% industria" },
    { label: "Tiempo Ahorrado", value: "500h", period: "Por cliente/mes" },
    { label: "Crecimiento Revenue", value: "+280%", period: "Promedio anual" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--auto-green)]/10 text-[var(--auto-green)] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full animate-pulse"></span>
            RESULTADOS REALES VERIFICADOS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Casos de Éxito que <br />
            <span className="text-[var(--auto-green)]">Hablan por Sí Solos</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 150 dueños de negocio han transformado su growth con nuestro sistema automatizado. 
            Estos son sus resultados reales.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-[var(--ia-blue)] text-white shadow-md'
                  : 'text-gray-600 hover:text-[var(--ia-blue)]'
              }`}
            >
              💬 Testimoniales
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'cases'
                  ? 'bg-[var(--ia-blue)] text-white shadow-md'
                  : 'text-gray-600 hover:text-[var(--ia-blue)]'
              }`}
            >
              📊 Casos Detallados
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'metrics'
                  ? 'bg-[var(--ia-blue)] text-white shadow-md'
                  : 'text-gray-600 hover:text-[var(--ia-blue)]'
              }`}
            >
              📈 Métricas Globales
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'testimonials' && (
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[var(--ia-blue)]/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-[var(--ia-blue)]">{testimonial.company}</div>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                
                <div className="bg-[var(--auto-green)]/10 p-4 rounded-xl">
                  <div className="font-bold text-[var(--auto-green)] text-sm">RESULTADOS:</div>
                  <div className="text-[var(--auto-green)] font-medium">{testimonial.results}</div>
                </div>
                
                <div className="flex text-yellow-400 mt-4">★★★★★</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cases' && (
          <div className="space-y-8">
            {cases.map((case_, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{case_.client}</h3>
                    <p className="text-[var(--ia-blue)] font-medium mb-4">{case_.industry}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-red-600 mb-2">DESAFÍO:</h4>
                      <p className="text-gray-700">{case_.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-[var(--ia-blue)] mb-2">SOLUCIÓN:</h4>
                      <p className="text-gray-700">{case_.solution}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-bold text-[var(--auto-green)] mb-4">RESULTADOS EN {case_.timeline.toUpperCase()}:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(case_.results).map(([key, value]) => (
                        <div key={key} className="bg-[var(--auto-green)]/10 p-4 rounded-xl text-center">
                          <div className="text-2xl font-bold text-[var(--auto-green)]">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'metrics' && (
          <div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                  <div className="text-4xl font-bold text-[var(--auto-green)] mb-2">{metric.value}</div>
                  <div className="text-lg font-medium text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.period}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-[var(--ia-blue)] to-[var(--auto-green)] p-8 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                ¿Quieres Ser el Próximo Caso de Éxito?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Únete a 150+ dueños que ya automatizaron su growth y escalan sin límites
              </p>
              <button
                onClick={() => window.location.href = '/contacto'}
                className="bg-white text-[var(--ia-blue)] font-bold px-8 py-4 rounded-xl text-lg 
                         hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Quiero Mi Diagnóstico Gratis
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
