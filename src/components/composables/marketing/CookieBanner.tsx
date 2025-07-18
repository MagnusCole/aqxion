"use client";

import React, { useState, useEffect } from 'react';
import { acceptCookies as acceptCookiesAction, rejectCookies as rejectCookiesAction, getCookieConsent } from '../../../lib/cookies';
import { trackEvent } from '@/lib/analytics';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya dio su consentimiento sobre las cookies
    const consent = getCookieConsent();
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    acceptCookiesAction();
    setShowBanner(false);
    trackEvent('cookie_consent', 'Privacy', 'accepted');
  };

  const handleRejectCookies = () => {
    rejectCookiesAction();
    setShowBanner(false);
    trackEvent('cookie_consent', 'Privacy', 'rejected');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">            <p className="text-sm text-gray-700">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. 
              Al hacer clic en &quot;Aceptar&quot;, acepta el uso de cookies de acuerdo con nuestra{' '}
              <a 
                href="/terminos-privacidad" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Política de Privacidad
              </a>.
            </p>
          </div>          <div className="flex gap-3">
            <button
              aria-label="Rechazar el uso de cookies no esenciales"
              onClick={handleRejectCookies}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Rechazar
            </button>
            <button
              aria-label="Aceptar el uso de cookies para mejorar la experiencia"
              onClick={handleAcceptCookies}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Aceptar cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
