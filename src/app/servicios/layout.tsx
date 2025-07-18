// LLM-OPTIMIZED: Metadata layout for servicios page
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack de Crecimiento Automatizado | Servicios AQXION",
  description: "Stack integrado de 5 servicios: Ads automáticos + Outreach directo + Contenido orgánico + IA personalizada + Copy persuasivo. Resultados multiplicados para dueños de negocio.",
  keywords: "stack crecimiento automatizado, servicios growth agency, ads outreach contenido IA copywriting, agencia marketing integral",
  openGraph: {
    title: "Stack de Crecimiento Automatizado | Servicios AQXION",
    description: "Stack integrado que multiplica resultados: 5x ROI, 73% cierre, +50 leads/mes. Todo funciona junto.",
    url: "https://aqxion.com/servicios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack de Crecimiento Automatizado | Servicios AQXION",
    description: "Stack integrado que multiplica resultados: 5x ROI, 73% cierre, +50 leads/mes. Todo funciona junto.",
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
