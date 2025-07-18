// GROWTH EQUITY PARTNER: Página dedicada a equity partnerships
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equity Partnership - AQXION: Invertimos en Tu Éxito para Ganar Juntos',
  description: 'Modelo único: Adquirimos equity en tu empresa (5-15%) y escalamos con nuestro stack completo. Cero costos mensuales, skin-in-the-game total. Partnership real, growth garantizado.',
  keywords: 'equity partnership, inversión equity, socios estratégicos, growth equity, partnership cash equity, invertir startup',
  openGraph: {
    title: 'Equity Partnership - AQXION: Invertimos en Tu Éxito',
    description: 'Modelo único: Adquirimos equity y escalamos sin costos mensuales. Partnership real con skin-in-the-game.',
    type: 'website',
    locale: 'es_ES',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://aqxion.com/equity-partnership',
  },
};

// Components para la página de equity
const EquityHeroSection = () => (
  <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--equity-blue)]/10 via-white to-[var(--equity-gold)]/10 min-h-screen flex items-center">
    <div className="container mx-auto px-6 max-w-6xl text-center">
      <div className="inline-flex items-center gap-2 bg-[var(--equity-gold)]/10 text-[var(--equity-blue)] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-[var(--equity-gold)]/20">
        <span className="w-2 h-2 bg-[var(--equity-green)] rounded-full animate-pulse"></span>
        🤝 EQUITY PARTNERSHIP MODEL
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
        <span className="equity-gradient-text">Invertimos Equity</span><br />
        en Tu <span className="text-[var(--equity-blue)]">Éxito</span><br />
        <span className="text-2xl md:text-4xl text-[var(--equity-green)] font-semibold">Para Ganar Juntos</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-5xl mx-auto">
        <strong className="text-[var(--equity-blue)]">Modelo revolucionario</strong>: Adquirimos 5-15% equity en tu empresa 
        y escalamos con nuestro stack completo. <span className="text-[var(--equity-gold)] font-bold">Cero costos mensuales, 
        skin-in-the-game total.</span>
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
        <div className="equity-card-hover p-8 rounded-2xl text-center">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="font-bold text-[var(--equity-blue)] mb-3">Inversión + Servicios</h3>
          <p className="text-gray-600">Aporte inicial en efectivo + stack completo de growth</p>
        </div>
        <div className="equity-card-hover p-8 rounded-2xl text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="font-bold text-[var(--equity-green)] mb-3">Interests Alineados</h3>
          <p className="text-gray-600">Solo ganamos cuando tu empresa crece y tiene éxito</p>
        </div>
        <div className="equity-card-hover p-8 rounded-2xl text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="font-bold text-[var(--equity-gold)] mb-3">Exit Strategy</h3>
          <p className="text-gray-600">Partnership a largo plazo con foco en exit o buyback</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="btn-equity-primary text-xl px-10 py-5">
          🤝 Evaluar Mi Empresa para Equity
        </button>
        <button className="btn-equity-secondary text-xl px-10 py-5">
          📊 Ver Casos de Equity Success
        </button>
      </div>
    </div>
  </section>
);

const EquityProcessSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--equity-blue)] mb-6">
          Proceso de Equity Partnership
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Proceso transparente y profesional para evaluar el fit y estructurar el partnership
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          {
            step: "01",
            title: "Evaluación Inicial",
            description: "Análisis de negocio, mercado, potencial de growth y fit estratégico",
            duration: "1-2 semanas",
            icon: "🔍"
          },
          {
            step: "02", 
            title: "Due Diligence",
            description: "Revisión financiera, legal, operacional y análisis de oportunidades",
            duration: "2-3 semanas",
            icon: "📋"
          },
          {
            step: "03",
            title: "Términos & Estructura",
            description: "Negociación de equity %, aporte inicial, términos y governance",
            duration: "1-2 semanas",
            icon: "🤝"
          },
          {
            step: "04",
            title: "Ejecución & Growth",
            description: "Implementación del stack, growth acelerado y milestone tracking",
            duration: "Ongoing",
            icon: "🚀"
          }
        ].map((phase, index) => (
          <div key={index} className="relative">
            <div className="equity-deal-card text-center p-8">
              <div className="text-5xl mb-4">{phase.icon}</div>
              <div className="text-[var(--equity-gold)] font-bold text-2xl mb-2">{phase.step}</div>
              <h3 className="text-xl font-bold text-[var(--equity-blue)] mb-4">{phase.title}</h3>
              <p className="text-gray-600 mb-4">{phase.description}</p>
              <div className="text-sm text-[var(--equity-green)] font-medium">{phase.duration}</div>
            </div>
            {index < 3 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[var(--equity-gold)] z-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EquityCriteriaSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[var(--equity-blue)] mb-8">
            ¿Tu Empresa Califica para Equity Partnership?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Buscamos empresas con potencial de crecimiento exponencial y founders ambiciosos
          </p>

          <div className="space-y-6">
            {[
              { criteria: "Revenue: $50K+ MRR o $500K+ anuales", status: "required", icon: "💰" },
              { criteria: "Growth Rate: 15%+ month-over-month", status: "preferred", icon: "📈" },
              { criteria: "Market Size: $100M+ TAM verificable", status: "required", icon: "🎯" },
              { criteria: "Founder Commitment: Full-time dedication", status: "required", icon: "🤝" },
              { criteria: "Tech/Digital: Scalable business model", status: "preferred", icon: "💻" },
              { criteria: "Team: 2+ personas key team", status: "flexible", icon: "👥" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{item.criteria}</p>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    item.status === 'required' ? 'bg-red-100 text-red-700' :
                    item.status === 'preferred' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--equity-gold)]/10 p-8 rounded-3xl border border-[var(--equity-gold)]/20">
          <h3 className="text-2xl font-bold text-[var(--equity-blue)] mb-6">
            Equity Partnership Calculator
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Revenue</label>
              <input type="text" placeholder="$50,000" className="w-full p-3 border border-gray-300 rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Growth Rate (%)</label>
              <input type="text" placeholder="20%" className="w-full p-3 border border-gray-300 rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <select className="w-full p-3 border border-gray-300 rounded-xl">
                <option>SaaS/Tech</option>
                <option>E-commerce</option>
                <option>Services</option>
                <option>Other</option>
              </select>
            </div>
            <button className="btn-equity-primary w-full mt-6">
              📊 Calculate Equity Potential
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function EquityPartnershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <EquityHeroSection />
      <EquityProcessSection />
      <EquityCriteriaSection />
    </main>
  );
}
