// CookieBanner optimizado
'use client';
import React from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
  className?: string;
}

const COOKIE_CONSENT_KEY = 'aqxion-cookie-consent';

export const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline, className = '' }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!hasConsent) {
        setTimeout(() => setIsVisible(true), 2000);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
    onDecline?.();
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-4 right-4 md:left-4 md:right-auto md:max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-4 transition-all duration-300 z-50`}>
      <div className='flex items-start gap-3'>
        <Cookie className='w-5 h-5 text-peru-red flex-shrink-0 mt-0.5' />
        <div className='flex-1'>
          <p className='text-sm text-gray-700 mb-3'>
            Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.
            <a href="/privacidad" className="text-peru-red hover:underline ml-1">Ver política de privacidad</a>.
          </p>
          <div className='flex gap-2'>
            <button
              onClick={handleAccept}
              className='px-4 py-2 bg-peru-red text-white text-sm font-medium rounded-lg hover:bg-red-700 active:scale-95 transition-all duration-150'
            >
              Aceptar
            </button>
            <button
              onClick={handleDecline}
              className='px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 active:scale-95 transition-all duration-150'
            >
              Rechazar
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className='text-gray-400 hover:text-gray-600 transition-colors'
        >
          <X className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
};
