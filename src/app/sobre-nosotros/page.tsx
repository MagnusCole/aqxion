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
      position: 'CEO & Fundador',
      specialty: 'Estrategia de Crecimiento',
      experience: '12+ años',
      description: 'Especialista en transformación digital para PyMEs. Ha liderado más de 300 proyectos de crecimiento.',
      image: '/assets/team/carlos.jpg'
    },
    {
      name: 'María González',
      position: 'Directora de Marketing',
      specialty: 'Automatización & IA',
      experience: '8+ años',
      description: 'Experta en sistemas de automatización que han generado más de $50M en ingresos para clientes.',
      image: '/assets/team/maria.jpg'
    },
    {
      name: 'Luis Hernández',
      position: 'Director Técnico',
      specialty: 'Integración de Sistemas',
      experience: '10+ años',
      description: 'Arquitecto de soluciones tecnológicas que conectan todos los sistemas de crecimiento.',
      image: '/assets/team/luis.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Heading size="xl" className="text-gray-900 mb-6">
            Somos AQXION
          </Heading>
          <Text size="lg" className="text-gray-600 mb-8 max-w-3xl mx-auto">
            La única agencia que integra 5 sistemas de crecimiento en uno para multiplicar 
            los ingresos de negocios ambiciosos con tecnología de vanguardia.
          </Text>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">300+</div>
              <div>Clientes Transformados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">$50M+</div>
              <div>Ingresos Generados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">5 años</div>
              <div>Liderando el Mercado</div>
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
              { id: 'mision', label: 'Nuestra Misión', icon: '🎯' },
              { id: 'metodologia', label: 'Metodología', icon: '⚡' },
              { id: 'diferencia', label: 'Nuestra Diferencia', icon: '🚀' },
              { id: 'valores', label: 'Valores', icon: '💎' }
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
                <div className="bg-blue-50 rounded-2xl p-8">
                  <Heading size="lg" className="text-gray-900 mb-6">
                    🎯 Transformamos Negocios Ambiciosos en Máquinas de Crecimiento
                  </Heading>
                  <Text className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Nuestra misión es democratizar el acceso a tecnologías de crecimiento de nivel enterprise 
                    para que cualquier negocio pueda competir y ganar en el mercado digital.
                  </Text>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg border">
                      <div className="text-2xl mb-3">🔥</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Resultados Garantizados</h4>
                      <Text size="sm" className="text-gray-600">
                        No cobramos si no cumplimos los KPIs acordados en los primeros 90 días.
                      </Text>
                    </div>
                    <div className="bg-white p-6 rounded-lg border">
                      <div className="text-2xl mb-3">🤖</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tecnología de Vanguardia</h4>
                      <Text size="sm" className="text-gray-600">
                        IA personalizada y automatización que trabaja 24/7 por tu negocio.
                      </Text>
                    </div>
                    <div className="bg-white p-6 rounded-lg border">
                      <div className="text-2xl mb-3">📈</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Crecimiento Sostenible</h4>
                      <Text size="sm" className="text-gray-600">
                        Sistemas que escalan contigo sin requerir más recursos humanos.
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
                    ⚡ El Sistema AQXION: 5 Pilares Integrados
                  </Heading>
                  <Text className="text-gray-600">
                    Mientras otros ofrecen servicios aislados, nosotros integramos todo en un ecosistema de crecimiento.
                  </Text>
                </div>
                
                <div className="grid gap-6">
                  {[
                    {
                      number: '01',
                      title: 'Publicidad Inteligente',
                      description: 'Campañas que se optimizan automáticamente usando IA y datos en tiempo real.',
                      results: 'Reducción del 60% en costo por lead'
                    },
                    {
                      number: '02', 
                      title: 'Outreach Automatizado',
                      description: 'Secuencias de prospección multicanal personalizadas para cada lead.',
                      results: '400% más respuestas vs. métodos tradicionales'
                    },
                    {
                      number: '03',
                      title: 'Contenido Estratégico',
                      description: 'Content factory que produce piezas relevantes basadas en insights de audiencia.',
                      results: '300% más engagement orgánico'
                    },
                    {
                      number: '04',
                      title: 'IA Personalizada',
                      description: 'Modelos entrenados específicamente para tu industria y propuesta de valor.',
                      results: '250% mejora en tasas de conversión'
                    },
                    {
                      number: '05',
                      title: 'Copy Persuasivo',
                      description: 'Textos optimizados psicológicamente para cada etapa del customer journey.',
                      results: '180% más ventas cerradas'
                    }
                  ].map((pilar) => (
                    <div key={pilar.number} className="bg-gray-50 rounded-lg p-6 flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-lg p-3 font-bold text-lg min-w-[60px] text-center">
                        {pilar.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{pilar.title}</h4>
                        <Text className="text-gray-600 mb-2">{pilar.description}</Text>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium inline-block">
                          ✅ {pilar.results}
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
                        <h4 className="font-semibold text-red-800 mb-2">❌ Freelancers</h4>
                        <ul className="text-sm text-red-600 space-y-1">
                          <li>• Sin garantías</li>
                          <li>• Conocimiento limitado</li>
                          <li>• No escalable</li>
                          <li>• Dependes de una persona</li>
                        </ul>
                      </div>
                    </div>

                    {/* Agencias Tradicionales */}
                    <div className="text-center">
                      <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Agencias Tradicionales</h4>
                        <ul className="text-sm text-yellow-600 space-y-1">
                          <li>• Servicios fragmentados</li>
                          <li>• Procesos manuales</li>
                          <li>• Sin integración real</li>
                          <li>• Resultados inconsistentes</li>
                        </ul>
                      </div>
                    </div>

                    {/* AQXION */}
                    <div className="text-center">
                      <div className="bg-green-100 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-green-800 mb-2">✅ AQXION</h4>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Garantía de resultados</li>
                          <li>• 5 sistemas integrados</li>
                          <li>• Automatización total</li>
                          <li>• Equipo especializado</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center bg-blue-600 text-white p-6 rounded-lg">
                    <Text className="font-semibold">
                      🏆 Resultado: Nuestros clientes ven 3-5x mejores resultados que con agencias tradicionales
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
                    💎 Nuestros Valores Fundamentales
                  </Heading>
                  <Text className="text-gray-600">
                    Los principios que guían cada decisión y cada estrategia que implementamos.
                  </Text>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: '🎯',
                      title: 'Resultados Primero',
                      description: 'Cada estrategia debe generar ROI medible. Sin excepciones.',
                      example: 'Garantizamos 200% más leads en 90 días o devolvemos tu inversión.'
                    },
                    {
                      icon: '🔍',
                      title: 'Transparencia Total',
                      description: 'Acceso completo a métricas, procesos y resultados en tiempo real.',
                      example: 'Dashboard 24/7 con todos los KPIs y análisis detallados.'
                    },
                    {
                      icon: '🚀',
                      title: 'Innovación Constante',
                      description: 'Siempre implementamos las últimas tecnologías probadas.',
                      example: 'IA personalizada que evoluciona con tu negocio automáticamente.'
                    },
                    {
                      icon: '🤝',
                      title: 'Partnership Verdadero',
                      description: 'Tu éxito es nuestro éxito. Crecemos juntos a largo plazo.',
                      example: 'Reuniones estratégicas regulares y ajustes basados en feedback.'
                    }
                  ].map((valor) => (
                    <div key={valor.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <Heading size="lg" className="text-gray-900 mb-4">
              El Equipo Detrás de los Resultados
            </Heading>
            <Text className="text-gray-600 max-w-2xl mx-auto">
              Especialistas certificados con experiencia comprobada en hacer crecer negocios 
              de todos los tamaños y sectores.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-500">👤</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                <div className="text-blue-600 font-medium mb-2">{member.position}</div>
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <Heading size="lg" className="mb-4">
              ¿Listo para Transformar tu Negocio?
            </Heading>
            <Text className="mb-6 opacity-90">
              Únete a los cientos de empresarios que ya están multiplicando sus ingresos 
              con nuestro sistema de crecimiento automatizado.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('https://calendar.app.google/your-calendar-link', '_blank')}
              >
                Agendar Consulta Estratégica
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://wa.me/your-whatsapp', '_blank')}
              >
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
