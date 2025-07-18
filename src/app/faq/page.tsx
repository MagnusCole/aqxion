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
  // Equity Partnership Basics
  {
    id: 'que-es-equity-partnership',
    question: '¿Qué es exactamente un equity partnership con AQXION?',
    answer: 'Un equity partnership significa que invertimos una participación minoritaria (5-15%) en tu empresa a cambio de implementar nuestro sistema completo de growth. Nos convertimos en socios reales con skin-in-the-game: nuestro éxito depende directamente del crecimiento de tu negocio. Aportamos capital, expertise y sistemas, no solo servicios.',
    category: 'Equity Basics'
  },
  {
    id: 'diferencia-cash-vs-equity',
    question: '¿Cuál es la diferencia entre servicios cash vs equity partnership?',
    answer: 'Cash Services ($5K-15K/mes): Pagas fee mensual, recibos servicios premium, sin equity involved. Equity Partnership: Invertimos 5-15% stake + implementamos sistemas sin cash upfront. Hybrid Model: 3-8% equity + $2K-5K/mes reducido. Con equity partnerships tenemos incentivos alineados para tu crecimiento a largo plazo.',
    category: 'Equity Basics'
  },
  {
    id: 'por-que-solo-5-partnerships',
    question: '¿Por qué solo 5 equity partnerships por trimestre?',
    answer: 'Due diligence intenso: Cada empresa requiere 2-3 semanas de análisis profundo. Atención dedicada: Como equity partners, cada empresa recibe recursos full-stack del team completo. Skin-in-the-game real: Seleccionamos solo empresas donde vemos potencial de 5x+ growth. Calidad > cantidad siempre.',
    category: 'Process'
  },
  {
    id: 'criterios-seleccion',
    question: '¿Qué criterios usan para seleccionar equity partners?',
    answer: 'Revenue: Mínimo $10K/mes en ingresos recurrentes. Growth potential: Empresas con potencial de 3x-10x growth en 12-24 meses. Market size: Mercados grandes con demanda probada. Team quality: Founders comprometidos y ejecutores. Tech readiness: Disposición a implementar sistemas avanzados y automatización.',
    category: 'Equity Basics'
  },
  
  // Due Diligence & Process
  {
    id: 'proceso-due-diligence',
    question: '¿Cómo funciona el proceso de due diligence?',
    answer: 'Semana 1: Application review + initial call para evaluar fit. Semana 2: Financial review, market analysis, competitive research. Semana 3: Technical audit, systems review, growth plan development. Decision: Mutual go/no-go + term sheet negotiation. Todo bajo NDA estricto y confidencialidad garantizada.',
    category: 'Process'
  },
  {
    id: 'tiempo-implementacion',
    question: '¿Cuánto tiempo toma implementar el growth system como equity partner?',
    answer: 'Mes 1: Systems setup + initial campaign launch. Mes 2-3: Optimization + scaling basado en data. Mes 4-6: Full automation + advanced strategies. Como equity partners, tenemos incentivos alineados para acelerar resultados y maximizar growth long-term.',
    category: 'Process'
  },
  {
    id: 'nivel-involucramiento',
    question: '¿Qué nivel de involvement tienen como equity partners?',
    answer: 'Strategic: Monthly board-level reviews + growth strategy. Operational: Weekly execution reviews + optimization. Tactical: Daily campaign management + lead nurturing. Technical: Full system ownership + continuous optimization. Somos active partners, no passive investors.',
    category: 'Process'
  },
  
  // Financial & Legal
  {
    id: 'valuacion-empresa',
    question: '¿Cómo determinan la valuación de mi empresa?',
    answer: 'Múltiples métodos: Revenue multiples (industria específicos), asset valuation, market comparables, future cash flow projections. Due diligence incluye financial audit + market analysis. Trabajamos con valuadores third-party independientes para ensure fairness. Transparencia total en el proceso.',
    category: 'Financial'
  },
  {
    id: 'estructura-legal',
    question: '¿Cómo funciona la estructura legal del equity partnership?',
    answer: 'Minority stake: Siempre mantienes control mayoritario (85%+ ownership). Legal docs: SHA (Shareholder Agreement), subscription agreements, board rights. Rights: Información rights, anti-dilution protection, exit rights. Todo documentado por law firms especializados en equity investments.',
    category: 'Legal'
  },
  {
    id: 'exit-estrategias',
    question: '¿Qué pasa si quiero comprar de vuelta el equity o hacer exit?',
    answer: 'Buy-back options: Right of first refusal si quieres recomprar nuestra participación. Exit scenarios: Si vendes la empresa, participamos proporcionalmente. IPO/acquisition: Derechos de tag-along y drag-along. Time horizon: Pensamos en partnerships de 3-7 años minimum.',
    category: 'Legal'
  },
  
  // Results & Performance
  {
    id: 'resultados-equity-partners',
    question: '¿Qué resultados han logrado con equity partnerships anteriores?',
    answer: 'Portfolio companies promedio: 4.2x revenue growth en 18 meses. Success cases: E-commerce de $50K a $400K/mes en 14 meses. SaaS de $80K a $500K/mes en 20 meses. Professional services de $30K a $180K/mes en 12 meses. Skin-in-the-game = resultados superiores vs. cash clients.',
    category: 'Results'
  },
  {
    id: 'garantias-equity',
    question: '¿Ofrecen garantías en equity partnerships?',
    answer: 'Performance commitments: Minimum 3x revenue growth en 24 meses o re-estructuramos terms. Systems guarantee: Full automation + lead generation system funcionando en 90 días. Support guarantee: Monthly strategic reviews + 24/7 operational support. Shared risk = shared success.',
    category: 'Results'
  },
  {
    id: 'metricas-tracking',
    question: '¿Cómo trackean y reportan el performance como equity partners?',
    answer: 'Monthly investor reports: Revenue, growth metrics, KPIs by channel. Real-time dashboard: Leads, conversions, revenue, LTV/CAC. Quarterly board meetings: Strategic review + planning next phase. Annual planning: Budget, targets, growth initiatives. Transparencia total en performance.',
    category: 'Results'
  },
  
  // Technology & Implementation
  {
    id: 'sistemas-tecnologicos',
    question: '¿Qué sistemas tecnológicos implementan como equity partners?',
    answer: 'Full growth stack: CRM + automation + lead generation + content systems. AI/ML: Predictive analytics, lead scoring, content optimization. Integrations: 200+ tools compatibility, custom APIs si necesario. Owned systems: Mantenemos ownership de tech stack para consistency y optimization.',
    category: 'Technology'
  },
  {
    id: 'data-ownership',
    question: '¿Quién mantiene ownership de los datos y systems?',
    answer: 'Your data: 100% ownership de customer data, business data, intellectual property. Shared systems: Co-ownership de marketing systems + automation workflows. AQXION IP: Mantenemos ownership de nuestros proprietary systems + methodologies. Clear separation definida en legal docs.',
    category: 'Technology'
  }
];

const categories = ['Todos', 'Equity Basics', 'Process', 'Financial', 'Legal', 'Results', 'Technology'];

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
      <section className="bg-gradient-to-br from-[var(--equity-gold)]/10 to-[var(--equity-blue)]/10 py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Heading size="xl" className="text-gray-900 mb-6">
            Equity Partnership FAQ
          </Heading>
          <Text size="lg" className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre equity partnerships con AQXION. 
            Desde due diligence hasta estructura legal, transparencia total.
          </Text>
          <div className="flex justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-[var(--equity-gold)] text-black hover:opacity-90"
              onClick={() => window.location.href = '/contacto'}
            >
              Apply for Partnership
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/your-whatsapp', '_blank')}
            >
              WhatsApp Directo
            </Button>
          </div>
          
          <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg max-w-3xl mx-auto">
            <Text className="text-yellow-800 text-sm">
              ⚠️ Disclaimer: Solo 5 equity partnerships por trimestre. Applications sujetas a due diligence. 
              Información confidencial bajo NDA.
            </Text>
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
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        faq.category === 'Equity Basics' ? 'bg-[var(--equity-gold)]/20 text-[var(--equity-gold)]' :
                        faq.category === 'Process' ? 'bg-[var(--equity-blue)]/20 text-[var(--equity-blue)]' :
                        faq.category === 'Financial' ? 'bg-green-100 text-green-700' :
                        faq.category === 'Legal' ? 'bg-purple-100 text-purple-700' :
                        faq.category === 'Results' ? 'bg-orange-100 text-orange-700' :
                        faq.category === 'Technology' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
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
          <div className="mt-16 text-center bg-gradient-to-r from-[var(--equity-gold)]/10 to-[var(--equity-blue)]/10 rounded-2xl p-8 border border-[var(--color-border)]">
            <Heading size="lg" className="text-gray-900 mb-4">
              ¿Listo para aplicar a Equity Partnership?
            </Heading>
            <Text className="text-gray-600 mb-6">
              Solo 5 partnerships por trimestre. Application confidencial y gratuito. 
              Invertimos en empresas con potencial 5x+ growth para escalar juntos.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-[var(--equity-gold)] text-black hover:opacity-90"
                onClick={() => window.location.href = '/contacto'}
              >
                Submit Application
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('mailto:partnerships@aqxion.com', '_blank')}
              >
                Contacto Directo
              </Button>
            </div>
            
            <div className="mt-6 bg-white/50 p-4 rounded-lg">
              <Text className="text-sm text-gray-600">
                💡 <strong>Due diligence típico:</strong> 2-3 semanas · <strong>Respuesta inicial:</strong> 48-72h · <strong>Confidencialidad:</strong> Garantizada bajo NDA
              </Text>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
