"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

const caseStudies = [
  {
    id: "1",
    company: "TechFlow SaaS",
    industry: "Software/SaaS",
    location: "Mexico City, Mexico",
    challenge: "$45K MRR, struggling to scale beyond $100K",
    solution: "8% equity partnership + full growth stack implementation",
    partnership: "8% equity stake",
    result: "$480K MRR in 18 months",
    valuationGrowth: "From $1.2M to $12M valuation",
    timePeriod: "18 meses",
    testimonial: "AQXION no solo nos ayudó a crecer, se convirtieron en verdaderos socios. Su skin-in-the-game hizo toda la diferencia.",
    client: "Carlos Mendez",
    position: "CEO & Founder",
    metrics: [
      { label: "MRR", before: "$45K", after: "$480K", increase: "+967%" },
      { label: "Valuación", before: "$1.2M", after: "$12M", increase: "+900%" },
      { label: "Team Size", before: "8", after: "35", increase: "+337%" },
      { label: "Customer LTV", before: "$2.4K", after: "$8.7K", increase: "+263%" }
    ],
    equityDetails: {
      stake: "8%",
      investmentValue: "$96K equivalent services",
      currentValue: "$960K",
      roi: "10x return on equity investment"
    }
  },
  {
    id: "2",
    company: "EcoLogistics Pro",
    industry: "Supply Chain/Logistics", 
    location: "Guadalajara, Mexico",
    challenge: "$80K monthly revenue, manual processes, limited market reach",
    solution: "12% equity partnership + automation + market expansion",
    partnership: "12% equity stake",
    result: "$650K monthly revenue",
    valuationGrowth: "From $2.1M to $18M valuation",
    timePeriod: "14 meses",
    testimonial: "With AQXION as equity partners, we didn't just grow - we became industry leaders. Their commitment as partners vs vendors was game-changing.",
    client: "Ana Gutierrez",
    position: "CEO & Co-founder",
    metrics: [
      { label: "Revenue", before: "$80K", after: "$650K", increase: "+713%" },
      { label: "Valuación", before: "$2.1M", after: "$18M", increase: "+757%" },
      { label: "Market Share", before: "2%", after: "23%", increase: "+1050%" },
      { label: "Automation", before: "15%", after: "89%", increase: "+493%" }
    ],
    equityDetails: {
      stake: "12%",
      investmentValue: "$252K equivalent services",
      currentValue: "$2.16M",
      roi: "8.6x return on equity investment"
    }
  },
  {
    id: "3",
    company: "HealthTech Innovate",
    industry: "HealthTech/Telemedicine",
    location: "Monterrey, Mexico",
    challenge: "$120K ARR, regulatory challenges, slow user acquisition",
    solution: "6% equity partnership + compliance + growth acceleration",
    partnership: "6% equity stake",
    result: "$1.2M ARR",
    valuationGrowth: "From $3.5M to $28M valuation",
    timePeriod: "16 meses",
    testimonial: "AQXION understood our HealthTech challenges. As equity partners, they were invested in solving regulatory and growth hurdles together.",
    client: "Dr. Roberto Silva",
    position: "Founder & CMO",
    metrics: [
      { label: "ARR", before: "$120K", after: "$1.2M", increase: "+900%" },
      { label: "Valuación", before: "$3.5M", after: "$28M", increase: "+700%" },
      { label: "Users", before: "2.4K", after: "45K", increase: "+1775%" },
      { label: "Compliance Score", before: "68%", after: "98%", increase: "+44%" }
    ],
    equityDetails: {
      stake: "6%",
      investmentValue: "$210K equivalent services",
      currentValue: "$1.68M",
      roi: "8x return on equity investment"
    }
  }
];

export default function CaseStudiesPage() {
  const [activeCase, setActiveCase] = useState(0);
  const currentCase = caseStudies[activeCase];

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--equity-gold)]/10 to-[var(--equity-blue)]/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Heading level="h1" className="text-4xl md:text-6xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
              Equity Partnership{" "}
              <span className="bg-gradient-to-r from-[var(--equity-gold)] to-[var(--equity-blue)] bg-clip-text text-transparent">
                Success Stories
              </span>
            </Heading>
            <Text className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Real results from companies where we have skin-in-the-game. 
              When we invest equity, success is truly shared.
            </Text>
            
            <div className="mt-8 bg-white/70 border border-[var(--color-border)] p-4 rounded-lg max-w-2xl mx-auto">
              <Text className="text-sm text-gray-600">
                💰 <strong>Portfolio performance:</strong> Average 8.2x return on equity investments in 12-18 months
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--equity-gold)' }}>8.2x</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Avg ROI on Equity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--equity-blue)' }}>$58M</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Portfolio Valuation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--auto-green)' }}>14</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--equity-gold)' }}>18 meses</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Avg Exit Timeline</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center space-x-3 mb-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === activeCase ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {currentCase.company}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    {currentCase.industry} • {currentCase.location}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-red-600 mb-3">
                    Desafío Inicial
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{currentCase.challenge}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    Stack Implementado
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{currentCase.solution}</p>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {currentCase.metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                        {metric.label}
                      </div>
                      <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--color-text-tertiary)' }}>{metric.before}</span>
                        <span className="mx-2">→</span>
                        <span className="font-bold" style={{ color: 'var(--color-text-primary)' }}>{metric.after}</span>
                      </div>
                      <div className="text-green-600 font-semibold text-sm">
                        {metric.increase}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {currentCase.result}
                    </div>
                    <div style={{ color: 'var(--color-text-secondary)' }} className="font-medium">
                      en {currentCase.timePeriod}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 lg:p-12 flex items-center">
                <div className="text-center">
                  <blockquote className="text-xl italic mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                    &ldquo;{currentCase.testimonial}&rdquo;
                  </blockquote>
                  <cite className="text-lg font-semibold not-italic" style={{ color: 'var(--color-text-primary)' }}>
                    {currentCase.client}
                  </cite>
                  <div style={{ color: 'var(--color-text-secondary)' }}>{currentCase.position}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Heading level="h2" className="text-3xl font-bold text-white mb-6">
            ¿Listo para Resultados Como Estos?
          </Heading>
          <Text className="text-xl text-white/90 mb-8">
            Únete a dueños que escalaron con nuestro stack integral
          </Text>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contacto?type=diagnostico">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50"
              >
                Ver Diagnóstico Gratuito
              </Button>
            </Link>
            <Link href="/case-studies-pdf" target="_blank">
              <Button
                variant="secondary" 
                size="lg"
                className="bg-white/10 text-white border-white/20"
              >
                Descargar Casos PDF
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
