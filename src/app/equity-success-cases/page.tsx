// GROWTH EQUITY PARTNER: Casos de éxito con equity partnerships
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casos de Éxito Equity Partnership - AQXION: Resultados Reales con Skin-in-the-Game',
  description: 'Descubre casos reales donde adquirimos equity y escalamos empresas 300-500%. ROI conjunto, exits exitosos y partnerships que funcionan.',
  keywords: 'casos equity partnership, resultados equity, exit strategy, growth partnership, equity success cases',
  openGraph: {
    title: 'Casos de Éxito Equity Partnership - AQXION',
    description: 'Casos reales donde equity partnership logró growth 300-500% y exits exitosos.',
    type: 'website',
    locale: 'es_ES',
  },
};

// Casos de éxito reales
const equitySuccessCases = [
  {
    company: "TechFlow SaaS",
    industry: "Software B2B",
    equityAcquired: "12%",
    initialInvestment: "$75K",
    timeline: "18 meses",
    results: {
      revenueGrowth: "380%",
      mrrBefore: "$30K",
      mrrAfter: "$144K",
      valuation: "$3.2M → $12.8M",
      exitMultiple: "4x"
    },
    challenge: "SaaS con product-market fit pero sin growth strategy ni sales automation",
    solution: "Stack completo: sales automation, inbound, customer success y growth loops",
    outcome: "Exit a strategic buyer por $12.8M después de 18 meses",
    founderQuote: "AQXION no solo invirtió dinero, invirtió su reputación. Eso cambia todo el juego.",
    icon: "💻",
    status: "Exited"
  },
  {
    company: "LocalMed Clinics",
    industry: "Healthcare",
    equityAcquired: "8%", 
    initialInvestment: "$50K",
    timeline: "24 meses",
    results: {
      revenueGrowth: "420%",
      mrrBefore: "$18K",
      mrrAfter: "$94K",
      valuation: "$800K → $4.2M",
      exitMultiple: "5.25x"
    },
    challenge: "Clínica local con demanda pero sin sistemas de patient acquisition escalables",
    solution: "Local SEO dominance, automation de booking, patient nurturing y referral loops",
    outcome: "Expanding a 3 nuevas ubicaciones, modelo replicable validado",
    founderQuote: "Pasamos de 'otro marketing agency' a tener un partner que realmente entiende nuestro negocio.",
    icon: "🏥",
    status: "Scaling"
  },
  {
    company: "EcoLogistics",
    industry: "Supply Chain",
    equityAcquired: "15%",
    initialInvestment: "$100K",
    timeline: "30 meses",
    results: {
      revenueGrowth: "290%",
      mrrBefore: "$45K",
      mrrAfter: "$175K",
      valuation: "$2.1M → $8.5M",
      exitMultiple: "4.05x"
    },
    challenge: "Logistics company con procesos manuales limitando growth y margins",
    solution: "Full automation stack, B2B sales system, operational efficiency y strategic partnerships",
    outcome: "Market leader regional, preparing para expansion nacional",
    founderQuote: "Tener equity partners significa que cada decisión la toman pensando en el éxito de largo plazo.",
    icon: "🚛",
    status: "Growth"
  }
];

const EquitySuccessHero = () => (
  <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--equity-green)]/10 via-white to-[var(--equity-blue)]/10">
    <div className="container mx-auto px-6 max-w-6xl text-center">
      <div className="inline-flex items-center gap-2 bg-[var(--equity-green)]/10 text-[var(--equity-blue)] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-[var(--equity-green)]/20">
        <span className="w-2 h-2 bg-[var(--equity-green)] rounded-full animate-pulse"></span>
        📈 RESULTADOS REALES CON EQUITY
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
        Casos de <span className="equity-gradient-text">Éxito Equity</span><br />
        <span className="text-[var(--equity-blue)]">Partnership</span>
      </h1>
      
      <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
        <strong className="text-[var(--equity-green)]">Resultados reales</strong> donde adquirimos equity 
        y escalamos empresas <span className="text-[var(--equity-gold)] font-bold">300-500%</span>. 
        ROI conjunto, exits exitosos y partnerships que funcionan.
      </p>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
        <div className="equity-stats-card">
          <div className="text-3xl font-bold text-[var(--equity-green)]">$26.5M</div>
          <div className="text-sm text-gray-600">Total Valuation Created</div>
        </div>
        <div className="equity-stats-card">
          <div className="text-3xl font-bold text-[var(--equity-blue)]">4.2x</div>
          <div className="text-sm text-gray-600">Average Exit Multiple</div>
        </div>
        <div className="equity-stats-card">
          <div className="text-3xl font-bold text-[var(--equity-gold)]">330%</div>
          <div className="text-sm text-gray-600">Average Revenue Growth</div>
        </div>
        <div className="equity-stats-card">
          <div className="text-3xl font-bold text-[var(--equity-green)]">21 meses</div>
          <div className="text-sm text-gray-600">Average Time to Exit</div>
        </div>
      </div>
    </div>
  </section>
);

interface CaseData {
  company: string;
  industry: string;
  equityAcquired: string;
  initialInvestment: string;
  timeline: string;
  results: {
    revenueGrowth: string;
    mrrBefore: string;
    mrrAfter: string;
    valuation: string;
    exitMultiple: string;
  };
  challenge: string;
  solution: string;
  outcome: string;
  founderQuote: string;
  icon: string;
  status: string;
}

const CaseStudyCard = ({ caseData }: { caseData: CaseData }) => (
  <div className="equity-deal-card mb-16 overflow-hidden">
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{caseData.icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--equity-blue)]">{caseData.company}</h3>
            <p className="text-[var(--equity-green)] font-medium">{caseData.industry}</p>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
          caseData.status === 'Exited' ? 'bg-green-100 text-green-700' :
          caseData.status === 'Scaling' ? 'bg-blue-100 text-blue-700' :
          'bg-yellow-100 text-yellow-700'
        }`}>
          {caseData.status}
        </div>
      </div>

      {/* Investment Details */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--equity-gold)]">{caseData.equityAcquired}</div>
          <div className="text-sm text-gray-600">Equity Acquired</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--equity-blue)]">{caseData.initialInvestment}</div>
          <div className="text-sm text-gray-600">Initial Investment</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--equity-green)]">{caseData.timeline}</div>
          <div className="text-sm text-gray-600">Timeline</div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-[var(--equity-green)]/10 rounded-xl">
          <div className="text-xl font-bold text-[var(--equity-green)]">{caseData.results.revenueGrowth}</div>
          <div className="text-xs text-gray-600">Revenue Growth</div>
        </div>
        <div className="text-center p-4 bg-[var(--equity-blue)]/10 rounded-xl">
          <div className="text-lg font-bold text-[var(--equity-blue)]">
            {caseData.results.mrrBefore} → {caseData.results.mrrAfter}
          </div>
          <div className="text-xs text-gray-600">MRR Evolution</div>
        </div>
        <div className="text-center p-4 bg-[var(--equity-gold)]/10 rounded-xl">
          <div className="text-lg font-bold text-[var(--equity-gold)]">{caseData.results.valuation}</div>
          <div className="text-xs text-gray-600">Valuation Growth</div>
        </div>
        <div className="text-center p-4 bg-green-100 rounded-xl">
          <div className="text-xl font-bold text-green-700">{caseData.results.exitMultiple}</div>
          <div className="text-xs text-gray-600">Exit Multiple</div>
        </div>
      </div>

      {/* Challenge, Solution, Outcome */}
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-[var(--equity-blue)] mb-2 flex items-center gap-2">
            🎯 Challenge
          </h4>
          <p className="text-gray-600">{caseData.challenge}</p>
        </div>
        <div>
          <h4 className="font-bold text-[var(--equity-green)] mb-2 flex items-center gap-2">
            🛠️ Equity Partnership Solution
          </h4>
          <p className="text-gray-600">{caseData.solution}</p>
        </div>
        <div>
          <h4 className="font-bold text-[var(--equity-gold)] mb-2 flex items-center gap-2">
            🚀 Outcome
          </h4>
          <p className="text-gray-600">{caseData.outcome}</p>
        </div>
      </div>

      {/* Founder Quote */}
      <div className="mt-8 p-6 bg-[var(--equity-blue)]/5 rounded-2xl border-l-4 border-[var(--equity-blue)]">
        <blockquote className="text-[var(--equity-blue)] italic text-lg font-medium">
          &ldquo;{caseData.founderQuote}&rdquo;
        </blockquote>
        <div className="text-sm text-gray-500 mt-2">— Founder, {caseData.company}</div>
      </div>
    </div>
  </div>
);

const EquityProcessComparison = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[var(--equity-blue)] mb-6">
          ¿Por Qué Equity Partnership Funciona?
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          La diferencia entre una agency tradicional y un equity partner real
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Traditional Agency */}
        <div className="p-8 bg-white rounded-3xl border-2 border-red-200">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-red-600">Traditional Agency</h3>
            <p className="text-red-500">Fee-only model</p>
          </div>
          <div className="space-y-4">
            {[
              "Cobra fees fijos sin importar resultados",
              "Incentivos no alineados con tu éxito",
              "Foco en horas facturadas vs outcomes",
              "Relationship transaccional y limitada",
              "No skin-in-the-game real",
              "Exit strategy: mantenerte pagando"
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <span className="text-gray-600">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Equity Partnership */}
        <div className="p-8 bg-gradient-to-br from-[var(--equity-green)]/10 to-[var(--equity-blue)]/10 rounded-3xl border-2 border-[var(--equity-green)]">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-[var(--equity-green)]">Equity Partnership</h3>
            <p className="text-[var(--equity-blue)]">Partnership model</p>
          </div>
          <div className="space-y-4">
            {[
              "Solo ganamos cuando tu empresa crece",
              "Incentivos 100% alineados con tu éxito", 
              "Foco en outcomes y valuation growth",
              "Partnership estratégico de largo plazo",
              "Skin-in-the-game total con equity",
              "Exit strategy: maximizar valuation"
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[var(--equity-green)] text-xl">✅</span>
                <span className="text-gray-600">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function EquitySuccessCasesPage() {
  return (
    <main className="min-h-screen bg-white">
      <EquitySuccessHero />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--equity-blue)] mb-6">
              Casos de Éxito Reales
            </h2>
            <p className="text-xl text-gray-600">
              Partnerships donde skin-in-the-game generó resultados extraordinarios
            </p>
          </div>
          
          {equitySuccessCases.map((caseData, index) => (
            <CaseStudyCard key={index} caseData={caseData} />
          ))}
        </div>
      </section>

      <EquityProcessComparison />
      
      <section className="py-24 bg-[var(--equity-blue)] text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">
            ¿Tu Empresa Está Lista para Equity Partnership?
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            Descubre si calificas para nuestro modelo de equity partnership
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[var(--equity-gold)] text-[var(--equity-blue)] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[var(--equity-gold)]/90 transition-all">
              🤝 Evaluar Mi Empresa
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-[var(--equity-blue)] transition-all">
              📞 Agendar Call Estratégica
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
