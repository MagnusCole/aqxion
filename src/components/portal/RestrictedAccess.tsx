'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { useUserProgress } from '@/hooks/useUserProgress';

interface RestrictedAccessProps {
  pageName: string;
  description: string;
  requiredSteps: string[];
}

const RestrictedAccess = ({ pageName, description, requiredSteps }: RestrictedAccessProps) => {
  const router = useRouter();
  const { progress } = useUserProgress();

  useEffect(() => {
    // Si el setup está completo, redirigir a la página solicitada
    if (progress.setupCompleted) {
      router.back();
    }
  }, [progress.setupCompleted, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Acceso Restringido
          </h1>
          
          <h2 className="text-lg font-medium text-blue-600 mb-4">
            {pageName}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            {description} Para acceder a esta funcionalidad, necesitas completar la configuración inicial.
          </p>

          {/* Required Steps */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-medium text-blue-900 mb-3">
              Pasos requeridos:
            </h3>
            <div className="space-y-2">
              {requiredSteps.map((step, index) => (
                <div key={index} className="flex items-center text-sm text-blue-800">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Tu progreso actual</span>
              <span className="font-medium">{progress.progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress.progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link
              href="/portal/setup"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Settings className="w-4 h-4" />
              Ir a Configuración
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <button
              onClick={() => router.push('/portal/dashboard')}
              className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Volver al Dashboard
            </button>
          </div>

          {/* Help */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              ¿Necesitas ayuda? Contáctanos en{' '}
              <Link href="/portal/soporte" className="text-blue-600 hover:underline">
                Soporte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictedAccess;
