'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Volume2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function WhatsAppButton() {
  const [showAutoMessage, setShowAutoMessage] = useState(false);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const phoneNumber = '+51999888777';
  const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre el Sistema AQXION para mi MYPE 🇵🇪');

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('data:audio/wav;base64,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');

    // Trigger auto-open and sound after initial animation
    const timer = setTimeout(() => {
      if (!hasPlayedSound) {
        playNotificationSound();
        setShowAutoMessage(true);
        setHasPlayedSound(true);
        
        // Auto-hide message after 5 seconds
        setTimeout(() => {
          setShowAutoMessage(false);
        }, 5000);
      }
    }, 3000); // Wait 3 seconds after button appears

    return () => clearTimeout(timer);
  }, [hasPlayedSound]);

  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        // Handle audio play restrictions gracefully
      });
    }
  };

  const handleClick = () => {
    playNotificationSound();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulso animado más intenso */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Segundo pulso para efecto más llamativo */}
        <motion.div
          className="absolute inset-0 bg-green-300 rounded-full"
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Icono de WhatsApp */}
        <MessageCircle className="w-8 h-8 relative z-10" />
        
        {/* Sound indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-peru-red text-white rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: hasPlayedSound ? 0 : 1 }}
          transition={{ delay: 2.5, type: "spring" }}
        >
          <Volume2 className="w-3 h-3" />
        </motion.div>

        {/* Tooltip normal */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          ¡Conversemos por WhatsApp! 🇵🇪
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </motion.div>
      </motion.button>

      {/* Auto-message que aparece automáticamente */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.8 }}
        animate={{ 
          opacity: showAutoMessage ? 1 : 0, 
          x: showAutoMessage ? 0 : 20,
          scale: showAutoMessage ? 1 : 0.8
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`fixed bottom-24 right-6 z-40 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 max-w-xs ${showAutoMessage ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-gray-900 text-sm">AQXION</h4>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              ¡Hola! 👋 ¿Listo para transformar tu MYPE? 
              <br />
              <span className="text-peru-red font-medium">¡Puedes chatear ahora mismo!</span>
            </p>
            <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              En línea • Respuesta inmediata
            </div>
          </div>
        </div>
        
        {/* Flecha apuntando al botón */}
        <div className="absolute bottom-0 right-8 transform translate-y-1/2 w-0 h-0 border-t-8 border-t-white border-l-4 border-l-transparent border-r-4 border-r-transparent"></div>
      </motion.div>
    </>
  );
}
