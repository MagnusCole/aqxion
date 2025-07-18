import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - AQXION | Respuestas sobre Marketing Digital',
  description: 'Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de marketing digital y crecimiento automatizado.',
  openGraph: {
    title: 'FAQ - AQXION | Preguntas Frecuentes',
    description: 'Respuestas claras sobre marketing digital, automatización y crecimiento empresarial.',
    url: 'https://aqxion.com/faq',
    siteName: 'AQXION',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
