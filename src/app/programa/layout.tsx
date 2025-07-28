import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Programa AQXION | 50 Clientes en 90 Días - Masterclass Gratuita",
  description: "Aprende cómo conseguir 50 clientes nuevos en 90 días sin gastar en publicidad. Masterclass exclusiva para dueños de MYPEs peruanas. Registro gratuito.",
  keywords: "conseguir clientes, mypes peru, masterclass gratuita, marketing sin publicidad, clientes nuevos, aqxion programa",
  openGraph: {
    title: "Programa AQXION | 50 Clientes en 90 Días",
    description: "Masterclass gratuita: Cómo conseguir 50 clientes nuevos en 90 días sin gastar en publicidad ni contratar vendedores.",
    type: "website",
    locale: "es_PE",
  },
};

export default function ProgramaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
