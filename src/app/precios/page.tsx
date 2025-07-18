import type { Metadata } from "next";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

export const metadata: Metadata = {
  title: "Modelo Híbrido Equity + Cash | AQXION - Growth Equity Partner",
  description: "Modelo único híbrido: Cash Services, Equity Partnership o Hybrid. Invertimos en tu éxito para ganar juntos. Partnership desde 5-15% equity.",
  keywords: "growth equity partner, modelo híbrido cash equity, equity partnership, socios inversores, investment partnership",
  openGraph: {
    title: "Modelo Híbrido: Cash + Equity Partnership | AQXION",
    description: "Primer Growth Equity Partner con modelo híbrido. Cash + Equity. Invertimos equity, escalamos juntos.",
    url: "https://aqxion.com/precios",
  },
};

export default function PreciosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-yellow-500 via-blue-600 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white">
            <span className="mr-2">🤝</span>
            Growth Equity Partnership
          </div>
          <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Modelo Híbrido{" "}
            <span className="text-yellow-300">Cash + Equity</span>
          </Heading>
          
          <Text size="xl" className="text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            El primer Growth Equity Partner con modelo híbrido. Invertimos equity en tu éxito y escalamos 
            con stack completo. Ganamos cuando tú ganas.
          </Text>

          {/* Disclaimer */}
          <div className="bg-yellow-50/20 p-4 rounded-lg mb-8 border border-yellow-300/30">
            <Text className="text-yellow-100 text-sm">
              ⚠️ Disclaimer: Equity partnerships sujetas a due diligence. Resultados basados en proyecciones 
              históricas. Consulta legal requerida para estructuración.
            </Text>
          </div>

          {/* Quick Partnership Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-300">420% ROI</div>
              <div className="text-white/80 text-sm">Equity Promedio</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-300">36 meses</div>
              <div className="text-white/80 text-sm">Exit Preparation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-300">25+</div>
              <div className="text-white/80 text-sm">Portfolio Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Heading level="h2" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              3 Modelos de Partnership Disponibles
            </Heading>
            <Text size="lg" className="max-w-3xl mx-auto text-gray-600">
              Flexible según tu stage, preferencias y potencial de growth. Solo 5 partnerships equity por trimestre.
            </Text>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cash Services Model */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <Heading level="h3" className="text-2xl font-bold mb-2 text-gray-900">
                  Cash Services
                </Heading>
                <Text className="mb-6 text-gray-600">
                  Modelo tradicional para empresas que prefieren pago mensual fijo
                </Text>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-blue-600">
                    $5K-15K
                  </span>
                  <span className="font-medium text-gray-600">/mes</span>
                </div>
                <div className="text-sm mt-2 text-gray-500">
                  Según scope y servicios
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900">Incluye Stack Completo:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      Ads inteligentes (Google + Meta)
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      Outreach automatizado multicanal
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      Contenido & SEO estratégico
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      IA personalizada & automatización
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      Copywriting persuasivo & optimización
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <Text className="text-sm text-gray-700 font-medium">
                  ✅ Ideal para: Empresas que prefieren predictibilidad en cash flow
                </Text>
              </div>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Ver Cash Services →
              </Button>
            </div>

            {/* Equity Partnership Model - FEATURED */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-yellow-500 p-8 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  RECOMENDADO
                </span>
              </div>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <Heading level="h3" className="text-2xl font-bold mb-2 text-gray-900">
                  Equity Partnership
                </Heading>
                <Text className="mb-6 text-gray-600">
                  Invertimos en tu éxito con equity stake. Skin-in-the-game real
                </Text>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-yellow-600">
                    5-15%
                  </span>
                  <span className="font-medium text-gray-600">equity</span>
                </div>
                <div className="text-sm mt-2 text-gray-500">
                  + Stack completo incluido
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900">Partnership Incluye:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Stack Completo Premium</strong> sin costo mensual
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">💰</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Investment directo</strong> en growth & scaling
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">🎯</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Partnership estratégico</strong> a largo plazo
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">📈</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Exit preparation</strong> para valorización 3-5x
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">🚀</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Due diligence</strong> + legal support incluido
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 mb-6 border border-yellow-200">
                <Text className="text-sm text-yellow-800 font-medium">
                  🎯 Ideal para: Startups/scale-ups con potencial 5x+ growth
                </Text>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white"
              >
                Apply for Partnership →
              </Button>
            </div>

            {/* Hybrid Model */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-green-400 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <Heading level="h3" className="text-2xl font-bold mb-2 text-gray-900">
                  Hybrid Model
                </Heading>
                <Text className="mb-6 text-gray-600">
                  Lo mejor de ambos mundos: Cash reducido + Equity stake
                </Text>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-green-600">
                    3-8%
                  </span>
                  <span className="font-medium text-gray-600">+ $2K-5K/mes</span>
                </div>
                <div className="text-sm mt-2 text-gray-500">
                  Equity + cash flow híbrido
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900">Hybrid Incluye:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Cash flow reducido</strong> vs modelo tradicional
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Equity upside</strong> para growth exponencial
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Partnership balance</strong> riesgo-beneficio
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Flexibility</strong> en estructura de deal
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      <strong>Stack Premium</strong> con prioridad de recursos
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
                <Text className="text-sm text-green-800 font-medium">
                  ⚖️ Ideal para: Empresas que buscan balance entre cash y equity
                </Text>
              </div>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-green-500 text-green-600 hover:bg-green-50"
              >
                Explorar Hybrid →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold mb-4 text-gray-900">
              Proceso de Equity Partnership
            </Heading>
            <Text className="text-gray-600 max-w-2xl mx-auto">
              Transparente, rápido y designed para generar confianza mutua desde día 1.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">1. Application</h3>
              <p className="text-sm text-gray-600">Form inicial con información básica de la empresa y objetivos</p>
              <div className="text-xs text-gray-500 mt-2">24 horas</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">2. Due Diligence</h3>
              <p className="text-sm text-gray-600">Análisis completo: finances, market, team, unit economics</p>
              <div className="text-xs text-gray-500 mt-2">1 semana</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">3. Proposal</h3>
              <p className="text-sm text-gray-600">Estructura de partnership personalizada + growth roadmap</p>
              <div className="text-xs text-gray-500 mt-2">3-5 días</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">4. Partnership</h3>
              <p className="text-sm text-gray-600">Legal documentation + kick-off con stack implementation</p>
              <div className="text-xs text-gray-500 mt-2">2 semanas</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold mb-4 text-gray-900">
              Preguntas Frecuentes sobre Equity Partnership
            </Heading>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2 text-gray-900">¿Qué % de equity típicamente toman?</h3>
              <p className="text-sm text-gray-600">Depende del stage y potencial. Típicamente 5-15% con estructura vesting. Siempre negociable según aporte mutuo esperado.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2 text-gray-900">¿Cómo valúan la empresa?</h3>
              <p className="text-sm text-gray-600">Múltiples métodos: DCF, comparables, revenue multiple. Siempre conservadores en valorization para under-promise over-deliver.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2 text-gray-900">¿Qué legal structure usan?</h3>
              <p className="text-sm text-gray-600">Preferred shares con liquidation preference. Tag-along, drag-along. Board seat opcional. Todo documented por legal tier 1.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2 text-gray-900">¿Cuándo pueden hacer exit?</h3>
              <p className="text-sm text-gray-600">Cláusula tag-along permite exit conjunto. También compra-back option después 36 meses a fair market value. Sin lock-in perpetuo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-yellow-500 via-blue-600 to-green-500">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Heading level="h2" className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo Para Partnership Equity?
          </Heading>
          <Text size="lg" className="text-white/90 mb-8">
            Solo 5 partnerships por trimestre. Application gratuita y confidencial. 
            Sin compromiso hasta estructura final acordada.
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-4 text-xl font-bold shadow-2xl"
            >
              Apply for Equity Partnership →
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              Ver Cash Services Primero
            </Button>
          </div>

          {/* Trust & Urgency */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <Text className="text-white/90 text-lg mb-4">
              <strong>Exclusivo:</strong> Solo empresas con potencial 5x+ growth calificar para equity partnership.
            </Text>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                Due diligence confidencial
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                Sin fees hasta partnership final
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                Legal tier 1 incluido
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
