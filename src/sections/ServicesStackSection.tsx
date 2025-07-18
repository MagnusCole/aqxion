// LLM-OPTIMIZED: ServicesStackSection - Automated Growth Agency servicios integrados con benefits
"use client"

import { useState } from "react";

/**
 * Sección servicios como stack integral para growth automatizado
 * Enfoque: Beneficios para dueños + ROI + testimonials
 */
export const ServicesStackSection = () => {
  const [activeService, setActiveService] = useState<keyof typeof services>('ads');

  const services = {
    ads: {
      title: "Ads Inteligentes",
      subtitle: "Tráfico Pagado Cualificado",
      description: "Campañas en Meta y Google que atraen clientes listos para comprar. IA optimiza automáticamente para máximo ROI.",
      benefits: [
        "Leads cualificados 3x más baratos",
        "ROI promedio 400% en 60 días",
        "Optimización automática 24/7"
      ],
      roi: "+400% ROI",
      testimonial: "\"Pasamos de $2,000 a $15,000/mes en ventas con sus ads.\" - María, E-commerce",
      icon: "📈"
    },
    outreach: {
      title: "Outreach Automatizado",
      subtitle: "Ventas Directas en Piloto Automático",
      description: "Agentes IA contactan prospectos cualificados, nutren leads y cierran ventas mientras duermes.",
      benefits: [
        "300+ contactos cualificados/mes",
        "Tasa de respuesta 15% vs 2% industria",
        "Cierre automático 25% leads"
      ],
      roi: "25% Cierre",
      testimonial: "\"Nuestro outreach genera 50+ demos/mes sin equipo.\" - Carlos, SaaS",
      icon: "🎯"
    },
    content: {
      title: "Contenido Orgánico",
      subtitle: "Atracción Sostenible de Clientes",
      description: "Blog posts, redes sociales y SEO que posicionan tu marca como autoridad y atraen clientes orgánicos.",
      benefits: [
        "Tráfico orgánico +200% en 6 meses",
        "Costo por lead 80% menor vs ads",
        "Autoridad de marca establecida"
      ],
      roi: "80% Menos Costo",
      testimonial: "\"Aparecemos #1 en Google para nuestras keywords.\" - Ana, Consultoría",
      icon: "📚"
    },
    automation: {
      title: "IA & Automatización",
      subtitle: "Eficiencia 10x en Procesos",
      description: "Workflows inteligentes que automatizan seguimiento, cualificación y cierre para máxima eficiencia.",
      benefits: [
        "90% procesos automatizados",
        "Tiempo de equipo liberado 15h/semana",
        "Conversión leads +45% mejora"
      ],
      roi: "10x Eficiencia",
      testimonial: "\"Automatizamos todo el funnel, triplicamos conversiones.\" - Luis, Agencia",
      icon: "🤖"
    },
    copywriting: {
      title: "Copywriting Persuasivo",
      subtitle: "Mensajes Que Venden",
      description: "Copy basado en psicología de ventas que convierte visitantes en clientes usando fórmulas probadas.",
      benefits: [
        "Conversión landing pages +85%",
        "Emails con open rate 35% vs 20%",
        "Mensajes que conectan emocionalmente"
      ],
      roi: "+85% Conversión",
      testimonial: "\"Su copy duplicó nuestras ventas inmediatamente.\" - Pedro, Inmobiliaria",
      icon: "✍️"
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Problem-Solution */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            PROBLEMAS QUE RESOLVEMOS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Cansado de Leads Caros y <br />
            <span className="text-red-600">Cierres Manuales Tediosos?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            80% de dueños pierden 50% de oportunidades por procesos manuales. 
            Nosotros automatizamos todo el growth stack.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="font-bold text-red-700 mb-2">❌ Leads Caros en Ads</h3>
              <p className="text-sm text-red-600">Campañas que drenan presupuesto sin resultados claros</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="font-bold text-red-700 mb-2">❌ Outreach Manual Tedioso</h3>
              <p className="text-sm text-red-600">Equipo gastando horas en contactos sin conversión</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="font-bold text-red-700 mb-2">❌ Contenido Que No Convierte</h3>
              <p className="text-sm text-red-600">Blog y redes sin strategy clara ni leads</p>
            </div>
          </div>

          <div className="bg-[var(--auto-green)]/10 p-6 rounded-xl border border-[var(--auto-green)]/30">
            <h3 className="text-2xl font-bold text-[var(--auto-green)] mb-4">
              ✅ SOLUCIÓN: Stack Integral de Growth Automatizado
            </h3>
            <p className="text-lg text-gray-700">
              Ads + Outreach + Contenido + IA + Copy trabajando juntos para resultados medibles
            </p>
          </div>
        </div>

        {/* Services Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {(Object.entries(services) as Array<[keyof typeof services, typeof services[keyof typeof services]]>).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeService === key
                    ? 'bg-[var(--ia-blue)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {service.icon} {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-4">{services[activeService].icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {services[activeService].title}
              </h3>
              <p className="text-lg text-[var(--ia-blue)] font-medium mb-4">
                {services[activeService].subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              {/* ROI Highlight */}
              <div className="bg-[var(--auto-green)]/10 p-4 rounded-xl mb-6">
                <div className="text-2xl font-bold text-[var(--auto-green)]">
                  {services[activeService].roi}
                </div>
                <div className="text-sm text-gray-600">Resultado Promedio</div>
              </div>
            </div>

            <div>
              {/* Benefits */}
              <h4 className="text-xl font-bold text-gray-900 mb-4">Beneficios Clave:</h4>
              <ul className="space-y-3 mb-8">
                {services[activeService].benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--auto-green)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Testimonial */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="text-blue-700 italic mb-2">
                  {services[activeService].testimonial}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">★★★★★</div>
                  <span className="text-sm text-blue-600">Cliente Verificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--ia-blue)] to-[var(--auto-green)] p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo Para Tu Stack Completo de Growth?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Agenda consulta gratis y descubre cómo generar 50+ leads/mes con nuestro sistema integral
            </p>
            <button
              onClick={() => window.location.href = '/contacto'}
              className="bg-white text-[var(--ia-blue)] font-bold px-8 py-4 rounded-xl text-lg 
                       hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Consulta Estratégica Gratis
            </button>
            <p className="text-sm mt-4 opacity-75">
              Solo 5 spots disponibles esta semana. No compromiso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
