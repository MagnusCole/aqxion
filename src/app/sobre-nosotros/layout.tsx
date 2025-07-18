import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - AQXION | Expertos en Crecimiento Automatizado',
  description: 'Conoce al equipo de especialistas en marketing digital que ha ayudado a cientos de negocios a multiplicar sus ingresos con sistemas automatizados.',
  openGraph: {
    title: 'Sobre Nosotros - AQXION | Expertos en Crecimiento',
    description: 'Equipo de especialistas en marketing digital y crecimiento automatizado.',
    url: 'https://aqxion.com/sobre-nosotros',
    siteName: 'AQXION',
    type: 'website',
  },
};

export default function SobreNosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
