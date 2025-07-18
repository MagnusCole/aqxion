'use client';

import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';

export default function SobreNosotrosPage() {
  const [activeTab, setActiveTab] = useState('mision');

  const teamMembers = [
    {
      name: 'Carlos Rodríguez',
      position: 'Managing Partner & Founder',
      specialty: 'Equity Partnerships & Growth Strategy',
      experience: '12+ años',
      description: 'Ex-director de M&A con $50M+ en transacciones equity. Especialista en scalear startups para exit exitoso.',
      image: '/assets/team/carlos.jpg'
    },
    {
      name: 'María González',
      position: 'Investment Director',
      specialty: 'Due Diligence & Valuation',
      experience: '8+ años',
      description: 'Ex-analista VC con track record en equity deals. Experta en optimizar unit economics para valorización.',
      image: '/assets/team/maria.jpg'
    },
    {
      name: 'Luis Hernández',
      position: 'Growth Execution Director',
      specialty: 'Stack Integration & Scaling',
      experience: '10+ años',
      description: 'Arquitecto del Growth Stack que ha escalado 25+ portfolio companies con equity partnership.',
      image: '/assets/team/luis.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Heading size="xl" className="text-gray-900 mb-6">
            Growth Equity Partner Hybrid
          </Heading>
          <Text size="lg" className="text-gray-600 mb-8 max-w-3xl mx-auto">
            El Growth Equity Partner en el mercado hispano que combina inversión en equity 
            con ejecución world-class. Adquirimos participación en tu empresa y escalamos juntos.
          </Text>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="text-center">
              <div className="text-2xl font-bold equity-gradient-text">25+</div>
              <div>Equity Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold equity-gradient-text">$150M+</div>
              <div>Valoraciones Agregadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold equity-gradient-text">420%</div>
              <div>ROI Equity Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'mision', label: 'Modelo Equity Hybrid', icon: '🎯' },
              { id: 'metodologia', label: 'Due Diligence Process', icon: '⚡' },
              { id: 'diferencia', label: 'Skin-in-the-Game', icon: '🚀' },
              { id: 'valores', label: 'Partnership Values', icon: '💎' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            
            {/* Misión */}
            {activeTab === 'mision' && (
              <div className="text-center space-y-8">
                <div className="equity-deal-card">
                  <Heading size="lg" className="text-gray-900 mb-6">
                    🎯 Invertimos en Tu Éxito Para Ganar Juntos
                  </Heading>
                  <Text className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Somos el Growth Equity Partner que combina inversión en equity con ejecución world-class. 
                    Adquirimos participación en empresas prometedoras y escalamos juntos con skin-in-the-game real.
                  </Text>
                  <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                    <Text className="text-yellow-800 font-medium">
                      ⚠️ Disclaimer: Resultados basados en proyecciones y casos históricos. 
                      El equity investment conlleva riesgos. Consulta legal requerida.
                    </Text>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg border border-yellow-200">
                      <div className="text-2xl mb-3">🤝</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Partnership Real</h4>
                      <Text size="sm" className="text-gray-600">
                        Adquirimos equity. Ganamos cuando tú ganas. Alineación total de intereses.
                      </Text>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-yellow-200">
                      <div className="text-2xl mb-3">💰</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hybrid Model</h4>
                      <Text size="sm" className="text-gray-600">
                        Cash + Equity o solo Equity. Flexible según tu stage y preferencias.
                      </Text>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-yellow-200">
                      <div className="text-2xl mb-3">📈</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Growth Exponencial</h4>
                      <Text size="sm" className="text-gray-600">
                        Potencial 3-5x valorización en 18-36 meses con ejecución premium.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Metodología */}
            {activeTab === 'metodologia' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Heading size="lg" className="text-gray-900 mb-4">
                    ⚡ Due Diligence Process: De Aplicación a Partnership
                  </Heading>
                  <Text className="text-gray-600">
                    Proceso transparente de evaluación y selección de equity partnerships. Solo 5 partnerships por trimestre.
                  </Text>
                </div>
                
                <div className="grid gap-6">
                  {[
                    {
                      phase: "Fase 1",
                      title: "Pre-Qualification",
                      description: "Análisis inicial de potencial: mercado, team, unit economics básicos.",
                      icon: "📋",
                      duration: "24 horas",
                      outcome: "Go/No-Go inicial"
                    },
                    {
                      phase: "Fase 2", 
                      title: "Deep Dive Call",
                      description: "Call estratégica para entender visión, objetivos, fit cultural y expectativas mutuas.",
                      icon: "🔍",
                      duration: "1-2 días",
                      outcome: "Due diligence completo"
                    },
                    {
                      phase: "Fase 3",
                      title: "Due Diligence Técnico",
                      description: "Análisis completo: financials, market size, competition, stack audit.",
                      icon: "📊",
                      duration: "1-24 semana",
                      outcome: "Partnership proposal"
                    },
                    {
                      phase: "Fase 4",
                      title: "Partnership Agreement",
                      description: "Estructura equity deal, legal documentation, growth roadmap y kick-off.",
                      icon: "🤝",
                      duration: "+1-24 semanas", 
                      outcome: "Equity partnership live"
                    }
                  ].map((step, index) => (
                    <div key={index} className="equity-deal-card flex items-start gap-4">
                      <div className="text-3xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-bold">
                            {step.phase}
                          </div>
                          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {step.duration}
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <Text className="text-gray-600 mb-2">{step.description}</Text>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium inline-block">
                          🎯 {step.outcome}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Diferencia */}
            {activeTab === 'diferencia' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Heading size="lg" className="text-gray-900 mb-4">
                    🚀 ¿Por Qué Elegir AQXION?
                  </Heading>
                  <Text className="text-gray-600">
                    Comparación directa con agencias tradicionales y freelancers.
                  </Text>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* Freelancers */}
                    <div className="text-center">
                      <div className="bg-red-100 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-red-800 mb-2">❌ Agencias Tradicionales</h4>
                        <ul className="text-sm text-red-600 space-y-1">
                          <li>• Cobran sin importar resultados</li>
                          <li>• Sin skin-in-the-game</li>
                          <li>• Servicios fragmentados</li>
                          <li>• Incentivos desalineados</li>
                        </ul>
                      </div>
                    </div>

                    {/* Agencias Tradicionales */}
                    <div className="text-center">
                      <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Equity Funds</h4>
                        <ul className="text-sm text-yellow-600 space-y-1">
                          <li>• Solo financial engineering</li>
                          <li>• Sin expertise operacional</li>
                          <li>• Hands-off approach</li>
                          <li>• Poca ejecución práctica</li>
                        </ul>
                      </div>
                    </div>

                    {/* AQXION */}
                    <div className="text-center">
                      <div className="bg-green-100 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-green-800 mb-2">✅ AQXION Equity Partner</h4>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Equity investment + ejecución</li>
                          <li>• Skin-in-the-game real</li>
                          <li>• Stack integrado completo</li>
                          <li>• Ganamos cuando tú ganas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center equity-deal-card">
                    <Text className="font-semibold">
                      🏆 Partnership equity con alineación real = growth exponencial sostenible
                    </Text>
                    <Text className="text-sm text-gray-600 mt-2">
                      * Resultados basados en proyecciones de portfolio histórico. Disclaimer legal aplica.
                    </Text>
                  </div>
                </div>
              </div>
            )}

            {/* Valores */}
            {activeTab === 'valores' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Heading size="lg" className="text-gray-900 mb-4">
                    💎 Partnership Values: Cómo Trabajamos Juntos
                  </Heading>
                  <Text className="text-gray-600">
                    Los principios que guían cada equity partnership y cada decisión estratégica.
                  </Text>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: '🎯',
                      title: 'Growth Primero',
                      description: 'Cada estrategia debe escalar valorización. Equity ROI medible siempre.',
                      example: 'Target 3-5x valorización en 18-36 meses con KPIs transparentes.'
                    },
                    {
                      icon: '🔍',
                      title: 'Transparencia Total',
                      description: 'Acceso completo a métricas, finances y roadmap de equity partnership.',
                      example: 'Dashboard 24/7 con valorización en tiempo real y exit readiness.'
                    },
                    {
                      icon: '🚀',
                      title: 'Under Promise Over Deliver',
                      description: 'Proyecciones conservadoras, pero diseñamos para superar expectativas.',
                      example: 'Prometemos potencial 3x, pero target interno es 5x+ con bonus features.'
                    },
                    {
                      icon: '🤝',
                      title: 'Skin-in-the-Game Real',
                      description: 'Partnership equity auténtico. Ganamos cuando tú ganas, perdemos cuando pierdes.',
                      example: 'Equity stake alineada con long-term vision y value creation mutua.'
                    }
                  ].map((valor) => (
                    <div key={valor.title} className="equity-deal-card hover:equity-card-hover transition-all">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{valor.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{valor.title}</h4>
                          <Text className="text-gray-600 mb-3">{valor.description}</Text>
                          <div className="bg-blue-50 border-l-4 border-blue-600 p-3">
                            <Text size="sm" className="text-blue-700 font-medium">
                              💡 {valor.example}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <Heading size="lg" className="text-gray-900 mb-4">
              El Team Detrás del Growth Equity Partner
            </Heading>
            <Text className="text-gray-600 max-w-2xl mx-auto">
              Partners con track record comprobado en equity investments, due diligence y scaling 
              de portfolio companies para exit exitoso.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="equity-deal-card text-center hover:equity-card-hover transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-200 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                <div className="equity-gradient-text font-medium mb-2">{member.position}</div>
                <div className="text-sm text-gray-500 mb-3">
                  {member.specialty} • {member.experience}
                </div>
                <Text size="sm" className="text-gray-600">
                  {member.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="equity-deal-card bg-gradient-to-r from-yellow-50 to-green-50 border-2 border-yellow-200">
            <Heading size="lg" className="mb-4">
              ¿Tu Empresa Tiene Potencial para Equity Partnership?
            </Heading>
            <Text className="mb-6 text-gray-600">
              Solo 5 equity partnerships por trimestre. Evaluación gratuita y confidencial 
              para empresas con potencial 5x+ growth.
            </Text>
            <div className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
              <Text size="sm" className="text-yellow-800">
                ⚠️ Disclaimer: Equity investment conlleva riesgos. Resultados basados en proyecciones. 
                Consulta legal requerida para partnership terms.
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.open('/contacto', '_self')}
                className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600"
              >
                🤝 Apply for Equity Partnership
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => window.open('/servicios', '_self')}
              >
                💰 Ver Servicios Cash
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
