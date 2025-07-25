'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Para desarrollo - limpiar localStorage al cargar la página (comenta esta línea en producción)
    // localStorage.removeItem('cookies-accepted'); // Siempre mostrar para testing
    
    // Verificar si ya se aceptaron las cookies
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    // Mostrar si no se ha decidido
    if (cookiesAccepted !== 'true') {
      // Mostrar el banner después de 2 segundos
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookies-accepted', 'false');
    setIsVisible(false);
  };

  // Para testing - forzar que aparezca si no hay preferencia guardada
  const resetCookiePreference = () => {
    localStorage.removeItem('cookies-accepted');
    setIsVisible(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-8 left-8 z-40 max-w-sm"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-4 space-y-3">
            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <Cookie className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Cookies y Privacidad</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="ml-auto p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Contenido */}
            <div className="space-y-3">
              <p className="text-xs text-gray-600 leading-relaxed">
                Usamos cookies para mejorar tu experiencia y analizar el tráfico. 
                {!showDetails && (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-red-600 hover:text-red-700 ml-1 underline"
                  >
                    Ver detalles
                  </button>
                )}
              </p>

              {/* Detalles expandibles */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Esenciales (requeridas)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Analytics (mejorar sitio)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Marketing (personalización)</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Botones de acción */}
              <div className="flex gap-2 pt-1">
                <motion.button
                  onClick={handleAccept}
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs py-2 px-3 rounded-lg transition-all duration-200 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Aceptar
                </motion.button>
                <motion.button
                  onClick={handleReject}
                  className="text-gray-600 hover:text-gray-800 text-xs py-2 px-3 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Rechazar
                </motion.button>
                {!showDetails && (
                  <motion.button
                    onClick={() => setShowDetails(true)}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Settings className="w-3 h-3" />
                  </motion.button>
                )}
              </div>

              {/* Link de privacidad */}
              <div className="text-center">
                <a 
                  href="/terminos" 
                  className="text-xs text-gray-500 hover:text-red-600 transition-colors underline"
                >
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
