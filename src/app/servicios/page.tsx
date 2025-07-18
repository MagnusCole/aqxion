// LLM-OPTIMIZED: Servicios page optimized for Automated Growth Agency with tabs and conversion focus
"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

// Metadata will need to be handled separately as this is now a client component
const services = [
  {
    id: "ads",
    name: "Ads Automáticos",
    icon: "🎯",
    tagline: "Tráfico Pagado Cualificado 24/7",
    description: "Campañas de Google Ads y Meta optimizadas automáticamente con IA para generar leads cualificados mientras te enfocas en cerrar ventas.",
    benefits: [
      "ROI 5x promedio en primeros 90 días",
      "Optimización automática 24/7 con IA",
      "Leads cualificados desde día 1",
      "Setup completo en 48 horas",
      "Reportes transparentes en tiempo real"
    ],
    features: [
      "Google Ads + Meta Ads integrados",
      "Landing pages optimizadas incluidas",
      "Audiencias lookalike automáticas",
      "Retargeting inteligente con IA",
      "A/B testing automatizado"
    ],
    results: "150+ clientes generan 50+ leads/mes",
    price: "Desde $1,500/mes",
    cta: "Quiero Mis Ads Automatizados"
  },
  {
    id: "outreach",
    name: "Outreach Directo",
    icon: "📧",
    tagline: "Ventas Directas Automáticas",
    description: "Sistema de outreach automatizado que contacta, nutre y cierra prospectos calificados sin intervención manual.",
    benefits: [
      "15% response rate promedio garantizado",
      "200+ prospectos contactados por día",
      "Follow-ups automáticos inteligentes",
      "Personalización masiva con IA",
      "Integración completa con CRM"
    ],
    features: [
      "Prospecting automático con IA",
      "Secuencias de email personalizadas",
      "LinkedIn automation incluido",
      "SMS y WhatsApp integrados",
      "Lead scoring automático"
    ],
    results: "300+ deals cerrados mensualmente",
    price: "Desde $2,000/mes",
    cta: "Automatizar Mi Outreach"
  },
  {
    id: "content",
    name: "Contenido Orgánico",
    icon: "✍️",
    tagline: "Atracción Sostenible y Autoridad",
    description: "Estrategia completa de contenido que posiciona tu marca como autoridad y atrae clientes orgánicamente de forma consistente.",
    benefits: [
      "Contenido estratégico programado 30 días",
      "SEO optimizado para leads cualificados",
      "Posicionamiento como autoridad de industria",
      "Engagement 3x superior al promedio",
      "Tráfico orgánico creciente mensualmente"
    ],
    features: [
      "Blog posts optimizados para SEO",
      "Social media estratégico",
      "Lead magnets y recursos",
      "Email marketing automatizado",
      "Webinars y contenido premium"
    ],
    results: "1M+ impresiones orgánicas mensuales",
    price: "Desde $1,200/mes",
    cta: "Escalar Mi Contenido"
  },
  {
    id: "automation",
    name: "Automatización IA",
    icon: "🤖",
    tagline: "Inteligencia para Personalización",
    description: "Agentes IA que personalizan la experiencia de cada prospect, optimizan campañas en tiempo real y escalan sin límites.",
    benefits: [
      "Personalización 1:1 a escala masiva",
      "Optimización predictiva con machine learning",
      "Workflows que mejoran automáticamente",
      "Integración completa entre todos los canales",
      "Escalamiento ilimitado sin aumentar equipo"
    ],
    features: [
      "Chatbots IA conversacionales",
      "Scoring predictivo de leads",
      "Automatización cross-channel",
      "Optimization loops automáticos",
      "Reporting IA con insights"
    ],
    results: "500% mejora en eficiencia operativa",
    price: "Desde $2,500/mes",
    cta: "Implementar IA Completa"
  },
  {
    id: "copywriting",
    name: "Copywriting Persuasivo",
    icon: "📝",
    tagline: "Mensajes Que Convierten",
    description: "Copy estratégico que convierte prospectos en clientes usando psicología de ventas y testing continuo para maximizar conversión.",
    benefits: [
      "Conversión 3x superior vs copy genérico",
      "Mensajes optimizados para cada canal",
      "Testing A/B continuo y optimización",
      "Copy personalizado por industria",
      "Frameworks probados de alto impacto"
    ],
    features: [
      "Landing pages de alta conversión",
      "Email sequences que venden",
      "Ad copy optimizado para CTR",
      "Scripts de ventas probados",
      "Páginas de venta completas"
    ],
    results: "70% mejora en tasas de conversión",
    price: "Desde $1,000/mes",
    cta: "Optimizar Mi Copy"
  }
];

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState("ads");
  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[var(--ia-blue)] via-blue-600 to-[var(--auto-green)] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full animate-pulse"></span>
            STACK COMPLETO DE CRECIMIENTO
          </div>
          
          <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            5 Servicios Integrados = <span className="text-[var(--auto-green)]">Resultados Exponenciales</span>
          </Heading>
          
          <Text size="xl" className="text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            El único stack que necesitas para generar +50 leads/mes, cerrar {'>'} 20% y escalar sin aumentar equipo.
            <strong> Todo funciona junto, nada por separado.</strong>
          </Text>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-[var(--ia-blue)] hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl"
          >
            Ver Stack en Acción - Demo Gratis →
          </Button>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full"></span>
              150+ Clientes Activos
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full"></span>
              ROI 5x Promedio
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full"></span>
              Setup en 30 días
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Heading level="h2" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Stack Integrado de Crecimiento
            </Heading>
            <Text size="lg" className="text-gray-600 max-w-3xl mx-auto">
              Cada servicio potencia a los demás. Ads genera tráfico, outreach cierra ventas, contenido construye autoridad, 
              IA optimiza todo, copy convierte mejor. <strong>Resultados multiplicados, no sumados.</strong>
            </Text>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === service.id
                    ? 'bg-[var(--ia-blue)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.name}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Service Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{activeService.icon}</span>
                  <div>
                    <Heading level="h3" className="text-2xl font-bold text-gray-900">
                      {activeService.name}
                    </Heading>
                    <Text className="text-[var(--ia-blue)] font-medium">
                      {activeService.tagline}
                    </Text>
                  </div>
                </div>
                
                <Text className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {activeService.description}
                </Text>

                {/* Key Results */}
                <div className="bg-gradient-to-r from-[var(--auto-green)]/10 to-[var(--ia-blue)]/10 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[var(--auto-green)] text-2xl">📊</span>
                    <Text className="font-bold text-gray-900">Resultado Clave:</Text>
                  </div>
                  <Text className="text-lg font-semibold text-[var(--ia-blue)]">
                    {activeService.results}
                  </Text>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <Text className="text-sm text-gray-500">Inversión:</Text>
                    <Text className="text-2xl font-bold text-gray-900">{activeService.price}</Text>
                  </div>
                  <Button 
                    size="lg"
                    variant="primary"
                    className="px-8 py-4 text-lg font-semibold"
                  >
                    {activeService.cta} →
                  </Button>
                </div>
              </div>

              {/* Benefits & Features */}
              <div>
                {/* Benefits */}
                <div className="mb-8">
                  <Heading level="h4" className="text-lg font-bold text-gray-900 mb-4">
                    ✅ Beneficios Garantizados:
                  </Heading>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--auto-green)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <Text className="text-gray-700">{benefit}</Text>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <Heading level="h4" className="text-lg font-bold text-gray-900 mb-4">
                    🚀 Qué Incluye:
                  </Heading>
                  <ul className="space-y-3">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--ia-blue)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">⚡</span>
                        </div>
                        <Text className="text-gray-700">{feature}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Integration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Heading level="h2" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Por Qué el Stack Completo {'>'} Servicios Individuales
            </Heading>
            <Text size="lg" className="text-gray-600 max-w-3xl mx-auto">
              Otros ofrecen servicios por separado. Nosotros integramos todo para resultados exponenciales.
            </Text>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Traditional Approach */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">❌</span>
                <Heading level="h3" className="text-xl font-bold text-red-700">
                  Enfoque Tradicional (Por Separado)
                </Heading>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-red-700">Ads caros que no convierten (sin copy optimizado)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-red-700">Outreach genérico sin personalización IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-red-700">Contenido sin conexión con generación de leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-red-700">Múltiples proveedores = coordinación imposible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-red-700">Resultados limitados y ROI impredecible</span>
                </li>
              </ul>
            </div>

            {/* Our Integrated Approach */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">✅</span>
                <Heading level="h3" className="text-xl font-bold text-green-700">
                  Nuestro Stack Integrado
                </Heading>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-700">Ads optimizados con copy persuasivo = CTR 3x mayor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-700">Outreach personalizado con IA = 15% response rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-700">Contenido que nutre leads de ads = ciclo de venta -50%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-700">Un solo equipo coordinado = máxima eficiencia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-green-700">Resultados multiplicados: ROI 5x promedio</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Integration Flow */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <Heading level="h3" className="text-2xl font-bold text-center text-gray-900 mb-8">
              Cómo Funciona el Stack Integrado
            </Heading>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--ia-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <Text className="font-semibold text-gray-900 mb-2">Ads Atraen</Text>
                <Text className="text-sm text-gray-600">Tráfico cualificado con copy persuasivo</Text>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl text-[var(--auto-green)]">→</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--auto-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <Text className="font-semibold text-gray-900 mb-2">IA Personaliza</Text>
                <Text className="text-sm text-gray-600">Experiencia única para cada prospect</Text>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl text-[var(--auto-green)]">→</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <Text className="font-semibold text-gray-900 mb-2">Outreach Cierra</Text>
                <Text className="text-sm text-gray-600">Follow-up automático hasta el cierre</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Heading level="h2" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Resultados Comprobados del Stack Completo
            </Heading>
            <Text size="lg" className="text-gray-600">
              150+ negocios ya escalando con nuestro sistema integrado
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-[var(--ia-blue)]/10 to-[var(--auto-green)]/10 rounded-2xl">
              <div className="text-4xl font-bold text-[var(--ia-blue)] mb-2">5x</div>
              <Text className="font-semibold text-gray-900 mb-1">ROI Promedio</Text>
              <Text className="text-sm text-gray-600">vs 2x con servicios individuales</Text>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-[var(--auto-green)]/10 to-[var(--ia-blue)]/10 rounded-2xl">
              <div className="text-4xl font-bold text-[var(--auto-green)] mb-2">73%</div>
              <Text className="font-semibold text-gray-900 mb-1">Tasa de Cierre</Text>
              <Text className="text-sm text-gray-600">vs 35% promedio industria</Text>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-100 to-[var(--ia-blue)]/10 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">30</div>
              <Text className="font-semibold text-gray-900 mb-1">Días Setup</Text>
              <Text className="text-sm text-gray-600">Stack completo funcionando</Text>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center text-yellow-400 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <Text className="text-xl text-gray-700 italic mb-6">
                &ldquo;En 3 meses pasamos de 15 leads/mes a 80+ leads cualificados. El stack integrado es la diferencia - 
                no es solo más leads, son leads que cierran. ROI del 650% y subiendo.&rdquo;
              </Text>
              <div>
                <Text className="font-bold text-gray-900">Carlos Mendoza</Text>
                <Text className="text-gray-600">CEO, MendozaLegal - Derecho Corporativo</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[var(--ia-blue)] to-[var(--auto-green)]">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Heading level="h2" className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo Para Ver Tu Stack en Acción?
          </Heading>
          <Text size="lg" className="text-blue-100 mb-8">
            Agenda tu demo personalizado de 30 minutos. Te mostraremos exactamente cómo cada servicio 
            potenciará a los demás para multiplicar tus resultados.
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              variant="secondary" 
              className="bg-white text-[var(--ia-blue)] hover:bg-blue-50 px-12 py-4 text-xl font-bold shadow-2xl"
            >
              Agendar Demo del Stack →
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--ia-blue)] px-8 py-4 text-lg font-semibold"
            >
              Hablar con Especialista
            </Button>
          </div>

          {/* Urgency & Trust */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <Text className="text-blue-100 text-lg mb-4">
              <strong>Spots limitados:</strong> Solo trabajamos con 15 clientes nuevos por mes para garantizar resultados.
            </Text>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full"></span>
                Demo personalizado 100% gratis
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full"></span>
                Sin compromiso ni presión de venta
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--auto-green)] rounded-full"></span>
                Estrategia personalizada incluida
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
