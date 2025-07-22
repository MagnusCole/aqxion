'use client';

import { useState, useEffect } from 'react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: { [key: string]: any }) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if consent has been given
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      try {
        const savedConsent = JSON.parse(hasConsent);
        setConsent(savedConsent);
        
        // Apply saved consent immediately
        applyConsentSettings(savedConsent);
      } catch (error) {
        setShowBanner(true);
      }
    }

    // Listen for cookie reconfiguration requests
    const handleCookieReconfigure = () => {
      setShowBanner(true);
    };

    window.addEventListener('reconfigure-cookies', handleCookieReconfigure);
    return () => window.removeEventListener('reconfigure-cookies', handleCookieReconfigure);
  }, []);

  const applyConsentSettings = (consentSettings: CookieConsent) => {
    // Handle Google Analytics
    if (consentSettings.analytics && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    } else if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }

    // Handle marketing cookies
    if (consentSettings.marketing) {
      // Initialize marketing pixels/scripts here
      console.log('Marketing cookies enabled');
    } else {
      // Disable marketing cookies here
      console.log('Marketing cookies disabled');
    }
  };

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
    
    // Apply consent settings
    applyConsentSettings(newConsent);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false
    });
  };

  const saveCustom = () => {
    saveConsent(consent);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center sm:justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!showSettings ? (
          // Main banner
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🍪</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Respetamos tu Privacidad
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia, analizar el uso del sitio y 
                  personalizar contenido. <strong>Solo las cookies estrictamente necesarias 
                  están activadas por defecto.</strong>
                </p>
                
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-slate-700 mb-2">Tipos de cookies:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Necesarias:</strong> Funcionalidad básica del sitio (siempre activas)</li>
                    <li>• <strong>Analíticas:</strong> Mejoras en el rendimiento del sitio</li>
                    <li>• <strong>Marketing:</strong> Contenido personalizado y publicidad</li>
                  </ul>
                </div>

                <p className="text-xs text-slate-500 mb-4">
                  Puedes cambiar tus preferencias en cualquier momento. 
                  Lee nuestra <a href="/privacidad" className="text-green-600 hover:underline">Política de Privacidad</a> 
                  y <a href="/terminos" className="text-green-600 hover:underline">Términos de Servicio</a>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                onClick={acceptAll}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Aceptar Todo
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-300 transition-colors"
              >
                Solo Necesarias
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:border-slate-400 transition-colors"
              >
                Personalizar
              </button>
            </div>
          </div>
        ) : (
          // Settings panel
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setShowSettings(false)}
                className="text-slate-600 hover:text-slate-800"
              >
                ←
              </button>
              <h3 className="text-xl font-bold text-slate-800">
                Personalizar Cookies
              </h3>
            </div>

            <div className="space-y-4">
              {/* Necessary cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-700">Cookies Necesarias</h4>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Siempre Activas
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Esenciales para el funcionamiento básico del sitio web. Incluyen seguridad, 
                  navegación y funciones principales.
                </p>
              </div>

              {/* Analytics cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-700">Cookies Analíticas</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-slate-600">
                  Nos ayudan a entender cómo interactúas con nuestro sitio para mejorarlo. 
                  Los datos son anónimos y agregados.
                </p>
              </div>

              {/* Marketing cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-700">Cookies de Marketing</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) => setConsent({...consent, marketing: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-slate-600">
                  Utilizadas para personalizar anuncios y medir la efectividad de campañas publicitarias.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={saveCustom}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Guardar Preferencias
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-300 transition-colors"
              >
                Solo Necesarias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
