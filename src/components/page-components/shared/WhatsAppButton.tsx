'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const phoneNumber = '+51999888777';
  const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre el Sistema MyPerú para mi MYPE 🇵🇪');

  // Auto-mostrar tooltip después de un tiempo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Auto-ocultar después de 4 segundos
      setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    }, 5000); // Mostrar después de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulso sutil solo al hover */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        
        {/* Icono de chat */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />

        {/* Indicador de estado "en línea" - muy sutil */}
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
      </motion.button>

      {/* Tooltip mejorado y menos distractor */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.9 }}
        animate={{ 
          opacity: showTooltip ? 1 : 0, 
          x: showTooltip ? 0 : 10,
          scale: showTooltip ? 1 : 0.9
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`fixed bottom-4 right-16 sm:bottom-6 sm:right-20 z-40 bg-white border border-gray-200 rounded-xl shadow-lg p-3 max-w-xs ${
          showTooltip ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div>
            <div className="font-medium text-gray-900 text-sm">Chat en Vivo</div>
            <div className="text-gray-600 text-xs">¡Hablemos de tu MYPE! 🇵🇪</div>
          </div>
        </div>
        
        {/* Flecha apuntando al botón */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-white"></div>
      </motion.div>
    </>
  );
}
