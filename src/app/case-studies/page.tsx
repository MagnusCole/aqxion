"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

const caseStudies = [
  {
    id: "1",
    company: "MedLegal Consultores",
    industry: "Servicios Legales",
    location: "Madrid, España",
    challenge: "Solo 12 leads/mes de baja calidad, 8% tasa de cierre",
    solution: "Stack completo: Ads + Outreach + Contenido + IA + Copy",
    revenue: "$340K nuevos ingresos",
    timePeriod: "4 meses",
    testimonial: "En 4 meses pasamos de sobrevivir a ser la consultora legal más reconocida de Madrid.",
    client: "Elena Rodriguez",
    position: "Socia Fundadora",
    metrics: [
      { label: "Leads", before: "12", after: "95", increase: "+692%" },
      { label: "Cierre", before: "8%", after: "34%", increase: "+325%" },
      { label: "ROI", before: "2.1x", after: "8.7x", increase: "+314%" }
    ]
  },
  {
    id: "2",
    company: "Dr. Salinas Estética",
    industry: "Clínica Estética", 
    location: "Barcelona, España",
    challenge: "25 consultas/mes, sin diferenciación",
    solution: "Stack integrado: Ads + Outreach + Contenido + IA + Copy",
    revenue: "$580K nuevos ingresos",
    timePeriod: "3 meses",
    testimonial: "En 3 meses nos convertimos en la clínica #1 de Barcelona en consultas.",
    client: "Dr. Carlos Salinas",
    position: "Director Médico",
    metrics: [
      { label: "Consultas", before: "25", after: "180", increase: "+620%" },
      { label: "Conversión", before: "15%", after: "42%", increase: "+180%" },
      { label: "ROI", before: "1.8x", after: "11.2x", increase: "+522%" }
    ]
  }
];

export default function CaseStudiesPage() {
  const [activeCase, setActiveCase] = useState(0);
  const currentCase = caseStudies[activeCase];

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Heading level="h1" className="text-4xl md:text-6xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
              Casos de Éxito{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Verificados
              </span>
            </Heading>
            <Text className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Resultados reales de dueños que escalaron con nuestro stack de crecimiento
            </Text>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary-500)' }}>+650%</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Leads Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-secondary-500)' }}>35%</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Tasa Cierre</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--auto-green)' }}>9.6x</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>ROI Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary-500)' }}>$3.2M</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Ingresos Nuevos</div>
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
                      {currentCase.revenue}
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
