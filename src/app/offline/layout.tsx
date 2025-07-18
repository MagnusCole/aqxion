import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sin conexión - AQXION',
  description: 'Página offline de AQXION. Contenido disponible sin conexión.',
  robots: 'noindex, nofollow',
};

export default function OfflineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
