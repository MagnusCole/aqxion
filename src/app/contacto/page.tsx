// LLM-OPTIMIZED: Página de contacto optimizada para conversión con formularios IA
import { Metadata } from "next";
import { Section } from "@/components/composables/layout/Section";
import { Container } from "@/components/composables/layout/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

export const metadata: Metadata = {
  title: "Contacto | Automatizar tu Negocio con IA | AQXION",
  description: "Agenda una consulta gratuita y descubre cómo la automatización IA puede escalar tu negocio. Hablemos de tus objetivos y diseñemos tu estrategia de crecimiento.",
  keywords: "contacto AQXION, consulta automatizacion IA, agendar demo IA, estrategia crecimiento exponencial, automatizar negocio",
  openGraph: {
    title: "Contacto | Automatizar tu Negocio con IA | AQXION",
    description: "Agenda una consulta gratuita y descubre cómo la automatización IA puede escalar tu negocio.",
    url: "https://aqxion.com/contacto",
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section variant="primary" padding="xl">
        <Container size="lg" className="text-center">
          <Heading 
            level="h1" 
            className="mb-6 gradient-text"
          >
            Hablemos de tu Crecimiento
          </Heading>
          <Text 
            variant="subheading" 
            className="text-xl mb-8 max-w-3xl mx-auto text-[var(--color-text-secondary)]"
          >
            Agenda una consulta estratégica gratuita de 30 minutos. Analizaremos tu negocio 
            y diseñaremos un plan personalizado de automatización IA.
          </Text>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section variant="secondary" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--color-border)]">
              <Heading level="h3" className="mb-6 text-[var(--ia-blue)]">
                Consulta Estratégica Gratuita
              </Heading>
              
              <form className="space-y-6" action="/api/contact" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--ia-blue)] focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--ia-blue)] focus:border-transparent transition-all"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--ia-blue)] focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="industria" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Industria *
                  </label>
                  <select
                    id="industria"
                    name="industria"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--ia-blue)] focus:border-transparent transition-all"
                  >
                    <option value="">Selecciona tu industria</option>
                    <option value="salud">Salud y Medicina</option>
                    <option value="legal">Legal y Jurídico</option>
                    <option value="inmobiliario">Inmobiliario</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="marketing">Marketing y Publicidad</option>
                    <option value="educacion">Educación</option>
                    <option value="finanzas">Finanzas y Seguros</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="desafio" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Principal Desafío de Crecimiento *
                  </label>
                  <textarea
                    id="desafio"
                    name="desafio"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--ia-blue)] focus:border-transparent transition-all resize-none"
                    placeholder="Describe tu principal desafío para hacer crecer tu negocio..."
                  />
                </div>

                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg"
                  className="w-full bg-[var(--ia-blue)] hover:opacity-90"
                >
                  Agendar Consulta Gratuita
                </Button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[var(--ia-blue)]/5 to-[var(--auto-green)]/5 p-8 rounded-2xl border border-[var(--color-border)]">
                <Heading level="h4" className="mb-4 text-[var(--ia-blue)]">
                  Qué Esperar en la Consulta
                </Heading>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--auto-green)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text className="text-sm">
                      Análisis gratuito de tu negocio y oportunidades de automatización
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--auto-green)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text className="text-sm">
                      Estrategia personalizada de crecimiento con IA
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--auto-green)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <Text className="text-sm">
                      Plan de acción específico para los primeros 90 días
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)]">
                <Heading level="h4" className="mb-4">
                  Otras Formas de Contacto
                </Heading>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--ia-blue)]/10 rounded-full flex items-center justify-center">
                      <span className="text-[var(--ia-blue)]">📧</span>
                    </div>
                    <div>
                      <Text className="font-medium">Email</Text>
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        contacto@aqxion.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--auto-green)]/10 rounded-full flex items-center justify-center">
                      <span className="text-[var(--auto-green)]">📱</span>
                    </div>
                    <div>
                      <Text className="font-medium">WhatsApp</Text>
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        +1 (555) 123-4567
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
