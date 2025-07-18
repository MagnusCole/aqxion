'use client';

import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Servicios y Resultados
  {
    id: 'resultados-tiempo',
    question: '¿En cuánto tiempo veo resultados con el sistema de AQXION?',
    answer: 'Nuestro sistema está diseñado para generar resultados rápidos. Los primeros leads llegan en las primeras 2-3 semanas. El crecimiento sostenido y la optimización completa del embudo se consolida entre los 60-90 días. Cada negocio es único, pero nuestros clientes ven incrementos del 200-400% en leads cualificados en los primeros 3 meses.',
    category: 'Resultados'
  },
  {
    id: 'diferencia-competencia',
    question: '¿Qué nos diferencia de otras agencias de marketing?',
    answer: 'Somos la única agencia que integra 5 sistemas de crecimiento en uno: Publicidad inteligente + Outreach automatizado + Contenido estratégico + IA personalizada + Copy persuasivo. Mientras otras agencias se enfocan en uno o dos canales, nosotros creamos un ecosistema completo que multiplica resultados y reduce dependencias.',
    category: 'Servicios'
  },
  {
    id: 'inversion-retorno',
    question: '¿Cuál es el retorno de inversión que puedo esperar?',
    answer: 'Nuestros clientes típicamente recuperan su inversión en los primeros 60 días y logran un ROI de 4:1 a 8:1 en los primeros 6 meses. Con el sistema completo implementado, muchos negocios ven crecimientos del 300-500% en ingresos anuales. Ofrecemos garantía de resultados en todos nuestros planes.',
    category: 'Resultados'
  },
  
  // Proceso y Metodología
  {
    id: 'como-funciona-proceso',
    question: '¿Cómo funciona exactamente el proceso de implementación?',
    answer: 'Fase 1 (Semana 1-2): Auditoría completa y configuración de sistemas base. Fase 2 (Semana 3-6): Lanzamiento de campañas y automatizaciones. Fase 3 (Mes 2-3): Optimización basada en datos y escalamiento. Tienes acceso a un dashboard en tiempo real y reportes semanales con métricas específicas.',
    category: 'Proceso'
  },
  {
    id: 'tiempo-dedicacion',
    question: '¿Cuánto tiempo necesito dedicar como dueño del negocio?',
    answer: 'Solo 2-3 horas por semana una vez implementado el sistema. Al inicio necesitarás 1-2 horas semanales para reuniones de estrategia y feedback. El 95% del trabajo lo hace nuestro equipo y los sistemas automatizados. Tu enfoque debe estar en cerrar las oportunidades que generamos.',
    category: 'Proceso'
  },
  {
    id: 'funciona-mi-industria',
    question: '¿Funciona para mi industria específica?',
    answer: 'Nuestro sistema se adapta a cualquier negocio B2B o B2C que venda servicios o productos de ticket medio-alto (+$500). Hemos tenido éxito en: salud, legal, construcción, consultoría, software, e-commerce, educación, inmobiliario. Si vendes soluciones que resuelven problemas reales, nuestro sistema funciona.',
    category: 'Servicios'
  },
  
  // Tecnología e IA
  {
    id: 'ia-personalizada',
    question: '¿Cómo funciona la IA personalizada para mi negocio?',
    answer: 'Entrenamos modelos específicos con el conocimiento de tu industria, tu propuesta de valor y el lenguaje de tus clientes ideales. La IA optimiza campañas, personaliza mensajes, identifica oportunidades de venta y automatiza seguimientos. Es como tener un experto en marketing trabajando 24/7 exclusivamente para tu negocio.',
    category: 'Tecnología'
  },
  {
    id: 'integracion-sistemas',
    question: '¿Se integra con mis sistemas actuales (CRM, herramientas, etc.)?',
    answer: 'Sí, nos integramos con más de 200+ herramientas: HubSpot, Salesforce, Pipedrive, Calendly, Zoom, WhatsApp Business, redes sociales, y prácticamente cualquier sistema que uses. Si usas algo específico, lo integramos. El objetivo es potenciar lo que ya tienes, no reemplazarlo.',
    category: 'Tecnología'
  },
  
  // Precios y Planes
  {
    id: 'precio-inversion',
    question: '¿Cuánto cuesta implementar el sistema completo?',
    answer: 'Tenemos 3 niveles: Growth Starter ($3,500/mes) para negocios que inician, Growth Pro ($6,500/mes) el más popular para empresas establecidas, y Growth Enterprise ($12,000/mes) para organizaciones que buscan dominar su mercado. Incluye configuración, gestión completa y garantía de resultados.',
    category: 'Precios'
  },
  {
    id: 'contratos-permanencia',
    question: '¿Hay contratos largos o permanencia mínima?',
    answer: 'Trabajamos con compromisos de 6 meses para asegurar la implementación completa del sistema. Después del período inicial, puedes continuar mes a mes. La mayoría de nuestros clientes renuevan porque ven el crecimiento que logran, pero no los forzamos a quedarse.',
    category: 'Precios'
  },
  
  // Soporte y Garantías
  {
    id: 'garantia-resultados',
    question: '¿Ofrecen algún tipo de garantía?',
    answer: 'Sí. Garantizamos incrementar tus leads cualificados en al menos 200% en los primeros 90 días, o devolvemos el 100% de tu inversión. También garantizamos respuesta en menos de 4 horas a cualquier consulta y disponibilidad 24/7 para emergencias.',
    category: 'Garantías'
  },
  {
    id: 'soporte-equipo',
    question: '¿Qué tipo de soporte y acompañamiento recibo?',
    answer: 'Tienes un Growth Manager dedicado, acceso directo a nuestro equipo de especialistas, reuniones estratégicas semanales los primeros 2 meses y después quincenales. Plus: acceso a nuestra comunidad privada de clientes, recursos exclusivos y formación continua.',
    category: 'Soporte'
  }
];

const categories = ['Todos', 'Resultados', 'Servicios', 'Proceso', 'Tecnología', 'Precios', 'Garantías', 'Soporte'];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const filteredFAQs = activeCategory === 'Todos' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedItems(filteredFAQs.map(faq => faq.id));
  };

  const collapseAll = () => {
    setExpandedItems([]);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Heading size="xl" className="text-gray-900 mb-6">
            Preguntas Frecuentes
          </Heading>
          <Text size="lg" className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Encuentra respuestas claras sobre cómo nuestro sistema de crecimiento automatizado 
            puede transformar tu negocio y generar resultados medibles.
          </Text>
          <div className="flex justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.open('https://calendar.app.google/your-calendar-link', '_blank')}
            >
              Agenda una Consulta Gratuita
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/your-whatsapp', '_blank')}
            >
              Hablar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Filtros y Controles */}
          <div className="mb-12">
            {/* Filtros de Categoría */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                  <span className="ml-2 text-sm opacity-75">
                    ({category === 'Todos' 
                      ? faqData.length 
                      : faqData.filter(faq => faq.category === category).length
                    })
                  </span>
                </button>
              ))}
            </div>
            
            {/* Controles de Expansión */}
            <div className="flex justify-center gap-4">
              <button
                onClick={expandAll}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Expandir Todo
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={collapseAll}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Colapsar Todo
              </button>
            </div>
          </div>

          {/* Lista de FAQs */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {faq.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        #{index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        expandedItems.includes(faq.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {expandedItems.includes(faq.id) && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <Text className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </Text>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <Heading size="lg" className="text-gray-900 mb-4">
              ¿No encontraste tu respuesta?
            </Heading>
            <Text className="text-gray-600 mb-6">
              Nuestro equipo está disponible para resolver cualquier duda específica sobre tu negocio 
              y cómo nuestro sistema puede generar resultados en tu industria.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.open('https://calendar.app.google/your-calendar-link', '_blank')}
              >
                Agendar Consulta Estratégica
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('mailto:contacto@aqxion.com', '_blank')}
              >
                Enviar Pregunta por Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
