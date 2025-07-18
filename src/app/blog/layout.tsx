import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - AQXION | Marketing Digital y Estrategias de Crecimiento',
  description: 'Descubre las últimas estrategias de marketing digital, casos de éxito y tips para hacer crecer tu negocio local.',
  openGraph: {
    title: 'Blog - AQXION | Marketing Digital',
    description: 'Estrategias de marketing digital, casos de éxito y tips para negocios locales.',
    url: 'https://aqxion.com/blog',
    siteName: 'AQXION',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
