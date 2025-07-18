// LLM-OPTIMIZED: Layout metadata for case studies focused on Automated Growth Agency results
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito Verificados | AQXION - Agencia de Crecimiento Automatizado",
  description: "Descubre cómo dueños escalaron con nuestro stack: Ads + Outreach + Contenido + IA + Copy. ROI promedio 9.6x, +650% leads. Resultados reales verificados.",
  keywords: "casos exito agencia crecimiento, resultados automatizacion, ROI ads outreach, escalado negocios leads",
  openGraph: {
    title: "De 0 a 100+ Leads/Mes: Casos de Éxito Verificados",
    description: "Casos reales: ROI 9.6x, +650% leads promedio con stack integral de crecimiento automatizado.",
    url: "https://aqxion.com/case-studies",
    type: "website",
  },
  twitter: {
    title: "Casos de Éxito Verificados - AQXION",
    description: "ROI 9.6x promedio con stack de crecimiento automatizado. Resultados reales verificados.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
