'use client';

import BusinessSetup from '@/components/portal/setup/BusinessSetup';
import { useRouter } from 'next/navigation';

export default function BusinessSetupPage() {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/portal/dashboard');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <BusinessSetup 
      onComplete={handleComplete}
      onBack={handleBack}
    />
  );
}
