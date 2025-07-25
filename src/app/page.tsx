import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { LandingPage } from '@/components/page-components/home/LandingPage';

export default async function HomePage() {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  // Si estamos en app.aqxion.com, redirigir al login
  if (host.includes('app.aqxion.com')) {
    redirect('/auth/signin');
  }

  // Para www.aqxion.com o aqxion.com, mostrar la landing page
  return <LandingPage />;
}
