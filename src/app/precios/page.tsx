import type { Metadata } from "next";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

export const metadata: Metadata = {
  title: "Precios Stack de Crecimiento | AQXION - Agencia de Crecimiento Automatizado",
  description: "Packages de crecimiento desde $3,500/mes. Stack completo: Ads + Outreach + Contenido + IA + Copy. ROI promedio 8x garantizado.",
  keywords: "precios agencia crecimiento, packages marketing automatizado, stack completo ads outreach",
  openGraph: {
    title: "Packages de Crecimiento - Stack Completo desde $3,500/mes",
    description: "Stack integrado: Ads + Outreach + Contenido + IA + Copy. ROI 8x garantizado.",
    url: "https://aqxion.com/precios",
  },
};

export default function PreciosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white">
            <span className="mr-2">💰</span>
            Packages de Crecimiento
          </div>
          <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stack Completo de{" "}
            <span className="text-yellow-300">Crecimiento</span>
          </Heading>
          
          <Text size="xl" className="text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ads + Outreach + Contenido + IA + Copy trabajando juntos para escalar tu negocio. 
            ROI promedio 8x garantizado.
          </Text>

          {/* Quick ROI Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-300">8x ROI</div>
              <div className="text-white/80 text-sm">Promedio Clientes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-300">60 días</div>
              <div className="text-white/80 text-sm">Recuperar Inversión</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-300">+650%</div>
              <div className="text-white/80 text-sm">Leads Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Heading level="h2" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Packages de Crecimiento Automatizado
            </Heading>
            <Text size="lg" className="text-gray-600 max-w-3xl mx-auto">
              Cada package incluye el stack completo trabajando en sinergia para maximizar resultados. 
              Sin servicios aislados - solo crecimiento integral.
            </Text>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Package Growth Starter */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <Heading level="h3" className="text-2xl font-bold text-gray-900 mb-2">
                  Growth Starter
                </Heading>
                <Text className="text-gray-600 mb-6">
                  Stack completo para dueños que inician escalamiento
                </Text>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    $3,500
                  </span>
                  <span className="text-gray-600 font-medium">/mes</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  + $1,500 setup único
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Stack Incluido:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Ads Automatizados:</strong> Google + Meta optimizados por IA
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Outreach Básico:</strong> Email + LinkedIn prospects
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Contenido Autoridad:</strong> 8 posts/mes + blog semanal
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>IA Personalización:</strong> Seguimiento y scoring leads
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Copy Persuasivo:</strong> Páginas + emails + ads copy
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-1">Expectativa Resultados:</div>
                  <div className="text-sm text-gray-600">60-120 leads/mes • ROI 4-6x • 90 días</div>
                </div>
              </div>

              <Button variant="outline" size="lg" className="w-full">
                Comenzar Growth Starter
              </Button>
            </div>

            {/* Package Growth Pro - Popular */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-primary p-8 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </span>
              </div>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <Heading level="h3" className="text-2xl font-bold text-gray-900 mb-2">
                  Growth Pro
                </Heading>
                <Text className="text-gray-600 mb-6">
                  Stack completo optimizado para escalamiento acelerado
                </Text>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    $6,500
                  </span>
                  <span className="text-gray-600 font-medium">/mes</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  + $2,500 setup único
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Stack Completo Plus:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Ads Premium:</strong> 3 plataformas + retargeting avanzado
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Outreach Pro:</strong> Email + LinkedIn + WhatsApp + SMS
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Contenido Premium:</strong> 15 posts/mes + 2 blogs + videos
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>IA Avanzada:</strong> Predicción + automatización + analytics
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Copy Elite:</strong> Funnel completo + A/B testing
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Bonus:</strong> Growth Manager dedicado + soporte 24/7
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="mb-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-1">Expectativa Resultados:</div>
                  <div className="text-sm text-gray-600">200-400 leads/mes • ROI 6-10x • 60 días</div>
                </div>
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Escalar con Growth Pro
              </Button>
            </div>

            {/* Package Growth Enterprise */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👑</span>
                </div>
                <Heading level="h3" className="text-2xl font-bold text-gray-900 mb-2">
                  Growth Enterprise
                </Heading>
                <Text className="text-gray-600 mb-6">
                  Stack completo + custom workflows para dominancia total
                </Text>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-accent">
                    $12,000
                  </span>
                  <span className="text-gray-600 font-medium">/mes</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  + $5,000 setup único
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Stack Enterprise:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Ads Enterprise:</strong> Todas las plataformas + custom audiences
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Outreach Enterprise:</strong> Omnicanal + partnerships
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Contenido Enterprise:</strong> 25+ posts + 4 blogs + podcast
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>IA Custom:</strong> Workflows personalizados + API integrations
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>Copy Elite Plus:</strong> Múltiples funnels + split testing
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text size="sm" className="text-gray-700">
                      <strong>VIP:</strong> C-Level access + quarterly estrategia + garantías
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="mb-8 p-4 bg-accent/5 rounded-xl border border-accent/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent mb-1">Expectativa Resultados:</div>
                  <div className="text-sm text-gray-600">500+ leads/mes • ROI 10-15x • 45 días</div>
                </div>
              </div>

              <Button variant="outline" size="lg" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                Dominancia Total
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </Heading>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">¿Por qué no servicios individuales?</h3>
              <p className="text-gray-600 text-sm">El stack funciona en sinergia. Ads sin contenido = desperdicio. Outreach sin copy = baja conversión. Solo ofrecemos lo que sabemos que funciona: el stack completo.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">¿Garantizan resultados?</h3>
              <p className="text-gray-600 text-sm">Sí. Si no alcanzas ROI 4x en 90 días (Growth Starter) trabajamos gratis hasta lograrlo. Nuestro promedio es 8x en 60 días.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">¿Qué incluye el setup único?</h3>
              <p className="text-gray-600 text-sm">Auditoría completa, configuración stack, buyer personas, workflows IA, integraciones, training equipo y launch en 14 días.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">¿Puedo cambiar de package?</h3>
              <p className="text-gray-600 text-sm">Sí, 100% flexible. Puedes escalar o reducir con 30 días de aviso. La mayoría escala en 3-6 meses por resultados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Heading level="h2" className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Escalar con el Stack Completo?
          </Heading>
          <Text size="lg" className="text-white/90 mb-8">
            Diagnóstico gratuito de 60 minutos para identificar tu mejor package y potencial ROI. 
            Sin compromiso, solo claridad total.
          </Text>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Button 
              size="lg"
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg font-bold shadow-2xl"
            >
              📞 Agendar Diagnóstico Gratuito
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              📊 Ver Case Studies Completos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/80">
            <div className="flex items-center justify-center gap-2">
              <span>⚡</span>
              <span>Setup en 14 días</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🎯</span>
              <span>ROI garantizado</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🔒</span>
              <span>Sin permanencia</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
