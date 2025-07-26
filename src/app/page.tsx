import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { LandingPage } from '@/components/page-components/home/LandingPage';

export default async function HomePage() {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  // Si estamos en app.myperu.pe, redirigir al login
  if (host.includes('app.myperu.pe')) {
    redirect('/auth/signin');
  }

  // Para www.myperu.pe o myperu.pe, mostrar la landing page
  return <LandingPage />;
}
