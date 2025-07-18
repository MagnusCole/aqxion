// LLM-OPTIMIZED: Página de contacto optimizada para conversión con formularios IA
import { Metadata } from "next";
import { Section } from "@/components/composables/layout/Section";
import { Container } from "@/components/composables/layout/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

export const metadata: Metadata = {
  title: "Apply for Equity Partnership | AQXION - Growth Equity Partner",
  description: "Apply para equity partnership con AQXION. Invertimos en empresas prometedoras y escalamos juntos. Solo 5 partnerships por trimestre.",
  keywords: "equity partnership application, growth equity partner, apply partnership, socios inversores, equity investment",
  openGraph: {
    title: "Apply for Equity Partnership | AQXION - Growth Equity Partner",
    description: "Apply para equity partnership. Invertimos en tu éxito y escalamos juntos con skin-in-the-game real.",
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
            Apply for Equity Partnership
          </Heading>
          <Text 
            variant="subheading" 
            className="text-xl mb-8 max-w-3xl mx-auto text-[var(--color-text-secondary)]"
          >
            Solo 5 equity partnerships por trimestre. Apply confidencial y gratuito. 
            Invertimos en empresas con potencial 5x+ growth para escalar juntos.
          </Text>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg max-w-2xl mx-auto mb-8">
            <Text className="text-yellow-800 text-sm">
              ⚠️ Disclaimer: Equity partnerships sujetas a due diligence. Application no compromete a ninguna parte. 
              Confidencialidad garantizada.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Equity Partnership Application Section */}
      <Section variant="secondary" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Equity Application Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-[var(--color-border)]">
              <Heading level="h3" className="mb-6 text-[var(--equity-gold)]">
                Equity Partnership Application
              </Heading>
              
              <form className="space-y-8" action="/api/equity-application" method="POST">
                {/* Business Information */}
                <div className="space-y-6">
                  <Heading level="h4" className="text-lg text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-2">
                    Información del Negocio
                  </Heading>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Nombre de la Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                        placeholder="Tu empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Website (opcional)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                        placeholder="https://tuempresa.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                        placeholder="Nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Cargo en la Empresa *
                      </label>
                      <select
                        id="cargo"
                        name="cargo"
                        required
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                      >
                        <option value="">Selecciona tu cargo</option>
                        <option value="founder">Founder/CEO</option>
                        <option value="co-founder">Co-founder</option>
                        <option value="cto">CTO</option>
                        <option value="owner">Dueño/Propietario</option>
                        <option value="partner">Socio</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                        placeholder="email@empresa.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        WhatsApp/Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                        placeholder="+52 555 123 4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="industria" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Industry/Sector *
                    </label>
                    <select
                      id="industria"
                      name="industria"
                      required
                      className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona tu industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS/Tech</option>
                      <option value="healthcare">Salud/Medicina</option>
                      <option value="education">Educación</option>
                      <option value="real-estate">Bienes Raíces</option>
                      <option value="professional-services">Servicios Profesionales</option>
                      <option value="restaurant">Restaurantes/Food</option>
                      <option value="fitness">Fitness/Wellness</option>
                      <option value="beauty">Belleza/Estética</option>
                      <option value="automotive">Automotriz</option>
                      <option value="construction">Construcción</option>
                      <option value="consulting">Consultoría</option>
                      <option value="fintech">Fintech</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                {/* Business Metrics */}
                <div className="space-y-6">
                  <Heading level="h4" className="text-lg text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-2">
                    Métricas de Negocio (Confidencial)
                  </Heading>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="revenue" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Revenue Mensual Aprox. *
                      </label>
                      <select
                        id="revenue"
                        name="revenue"
                        required
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                      >
                        <option value="">Selecciona rango</option>
                        <option value="0-10k">$0 - $10K USD/mes</option>
                        <option value="10k-50k">$10K - $50K USD/mes</option>
                        <option value="50k-100k">$50K - $100K USD/mes</option>
                        <option value="100k-500k">$100K - $500K USD/mes</option>
                        <option value="500k+">$500K+ USD/mes</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="growth-rate" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                        Growth Rate YoY *
                      </label>
                      <select
                        id="growth-rate"
                        name="growth-rate"
                        required
                        className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                      >
                        <option value="">Selecciona crecimiento</option>
                        <option value="negative">Negativo/Decline</option>
                        <option value="0-20">0% - 20%</option>
                        <option value="20-50">20% - 50%</option>
                        <option value="50-100">50% - 100%</option>
                        <option value="100+">100%+ (High growth)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="stage" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Stage/Madurez del Negocio *
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      required
                      className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona stage</option>
                      <option value="pre-revenue">Pre-revenue/Validating</option>
                      <option value="early-stage">Early Stage (0-2 años)</option>
                      <option value="growth-stage">Growth Stage (2-5 años)</option>
                      <option value="established">Established (5+ años)</option>
                    </select>
                  </div>
                </div>

                {/* Partnership Interest */}
                <div className="space-y-6">
                  <Heading level="h4" className="text-lg text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-2">
                    Interés en Partnership
                  </Heading>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-4">
                      Tipo de Partnership Preferido *
                    </label>
                    <div className="space-y-4">
                      <label className="flex items-start space-x-3 p-4 border border-[var(--color-border)] rounded-lg hover:border-[var(--equity-gold)] transition-colors cursor-pointer">
                        <input type="radio" name="partnership-type" value="cash" className="mt-1" required />
                        <div>
                          <div className="font-medium text-[var(--color-text-primary)]">Cash Services ($5K-15K/mes)</div>
                          <div className="text-sm text-[var(--color-text-secondary)]">Sin equity. Solo servicios premium.</div>
                        </div>
                      </label>
                      <label className="flex items-start space-x-3 p-4 border border-[var(--color-border)] rounded-lg hover:border-[var(--equity-gold)] transition-colors cursor-pointer">
                        <input type="radio" name="partnership-type" value="equity" className="mt-1" required />
                        <div>
                          <div className="font-medium text-[var(--color-text-primary)]">Equity Partnership (5-15% stake)</div>
                          <div className="text-sm text-[var(--color-text-secondary)]">Sin cash upfront. Invertimos equity + servicios.</div>
                        </div>
                      </label>
                      <label className="flex items-start space-x-3 p-4 border border-[var(--color-border)] rounded-lg hover:border-[var(--equity-gold)] transition-colors cursor-pointer">
                        <input type="radio" name="partnership-type" value="hybrid" className="mt-1" required />
                        <div>
                          <div className="font-medium text-[var(--color-text-primary)]">Hybrid Model (3-8% + $2K-5K/mes)</div>
                          <div className="text-sm text-[var(--color-text-secondary)]">Combo equity + cash reducido.</div>
                        </div>
                      </label>
                      <label className="flex items-start space-x-3 p-4 border border-[var(--color-border)] rounded-lg hover:border-[var(--equity-gold)] transition-colors cursor-pointer">
                        <input type="radio" name="partnership-type" value="exploring" className="mt-1" required />
                        <div>
                          <div className="font-medium text-[var(--color-text-primary)]">Explorando Opciones</div>
                          <div className="text-sm text-[var(--color-text-secondary)]">Quiero entender las opciones disponibles.</div>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Principales Growth Challenges *
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all resize-none"
                      placeholder="Describe tus principales retos de crecimiento: lead generation, conversión, automatización, etc."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Growth Goals (6-12 meses)
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      rows={3}
                      className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all resize-none"
                      placeholder="¿Cuáles son tus objetivos específicos de crecimiento? Ej: 2x revenue, entrar a nuevo mercado, escalar team, etc."
                    ></textarea>
                  </div>
                </div>

                {/* Timeline & Legal */}
                <div className="space-y-6">
                  <Heading level="h4" className="text-lg text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-2">
                    Timeline & Legal
                  </Heading>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      ¿Cuándo te gustaría comenzar? *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--equity-gold)] focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona timeline</option>
                      <option value="asap">Lo antes posible (1-2 semanas)</option>
                      <option value="month">En el próximo mes</option>
                      <option value="quarter">En los próximos 2-3 meses</option>
                      <option value="exploring">Solo explorando por ahora</option>
                    </select>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" required />
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        Confirmo que tengo autoridad para negociar equity partnerships en nombre de mi empresa *
                      </Text>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" required />
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        Entiendo que este application está sujeto a due diligence y no compromete a ninguna parte *
                      </Text>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" required />
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        Acepto los términos de confidencialidad y privacy policy *
                      </Text>
                    </label>
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg"
                  className="w-full bg-[var(--equity-gold)] hover:opacity-90 text-black font-semibold"
                >
                  Submit Equity Application
                </Button>
                
                <Text className="text-sm text-[var(--color-text-secondary)] text-center">
                  Respuesta en 48-72 horas. Solo 5 partnerships por trimestre.
                </Text>
              </form>
            </div>

            {/* Partnership Info Panel */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[var(--equity-gold)]/10 to-[var(--equity-blue)]/10 p-6 rounded-2xl border border-[var(--color-border)]">
                <Heading level="h4" className="mb-4 text-[var(--equity-gold)]">
                  ¿Por qué Solo 5 Partnerships?
                </Heading>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--equity-gold)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">✓</span>
                    </div>
                    <Text className="text-sm">
                      <strong>Due Diligence Intenso:</strong> Analizamos cada empresa por 2-3 semanas antes de asociarnos
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--equity-gold)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">✓</span>
                    </div>
                    <Text className="text-sm">
                      <strong>Skin-in-the-Game:</strong> Cuando invertimos equity, nuestro éxito depende del tuyo
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--equity-gold)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">✓</span>
                    </div>
                    <Text className="text-sm">
                      <strong>Atención Full-Stack:</strong> Cada partner recibe recursos dedicados de todo nuestro team
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-border)]">
                <Heading level="h4" className="mb-4 text-[var(--equity-blue)]">
                  Proceso de Application
                </Heading>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[var(--equity-blue)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--equity-blue)] font-bold text-sm">1</span>
                    </div>
                    <div>
                      <Text className="font-medium">Submit Application</Text>
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        Completa el form (10-15 min). Información 100% confidencial.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[var(--equity-blue)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--equity-blue)] font-bold text-sm">2</span>
                    </div>
                    <div>
                      <Text className="font-medium">Initial Review (48-72h)</Text>
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        Evaluamos fit inicial y potencial de partnership.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[var(--equity-blue)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--equity-blue)] font-bold text-sm">3</span>
                    </div>
                    <div>
                      <Text className="font-medium">Strategy Call (45 min)</Text>
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        Deep dive en tu negocio, goals y modelo de partnership.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[var(--equity-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--equity-gold)] font-bold text-sm">4</span>
                    </div>
                    <div>
                      <Text className="font-medium">Partnership Decision</Text>
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        Mutual go/no-go. Si es go, diseñamos deal structure.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <Text className="text-yellow-800 text-sm font-medium mb-2">
                  💡 Disclaimer Legal
                </Text>
                <Text className="text-yellow-700 text-xs leading-relaxed">
                  Applications no comprometen a ninguna parte. Due diligence mutua requerida. 
                  Equity partnerships sujetas a legal documentation. Confidencialidad garantizada bajo NDA.
                </Text>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-border)]">
                <Heading level="h4" className="mb-4">
                  Contacto Directo
                </Heading>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--equity-blue)]/10 rounded-full flex items-center justify-center">
                      <span className="text-[var(--equity-blue)]">📧</span>
                    </div>
                    <div>
                      <Text className="font-medium">Partnerships</Text>
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        partnerships@aqxion.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--equity-gold)]/10 rounded-full flex items-center justify-center">
                      <span className="text-[var(--equity-gold)]">📱</span>
                    </div>
                    <div>
                      <Text className="font-medium">WhatsApp Directo</Text>
                      <Text className="text-sm text-[var(--color-text-secondary)]">
                        +1 (555) EQUITY-1
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
