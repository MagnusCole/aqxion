'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface FloatingChatProps {
  onOpenContact?: () => void;
}

export function FloatingChat({ onOpenContact }: FloatingChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Crear el elemento de audio programáticamente
    audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBT6S4vbGciMDKIDA7+CQRA0PVKzm7aZTEgxOqeXtrVwmCCN9zPLem0YRJHzNrd14PRl0sDp5ZQoHKIzZ/+qaTxcQV73y9aJbFQo');
    
    return () => {
      if (audioRef.current) {
        audioRef.current.remove();
      }
    };
  }, []);

  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Fallback si el audio no puede reproducirse
        console.log('Audio could not be played');
      });
    }
  };

  const handleToggle = () => {
    if (!isOpen) {
      playNotificationSound();
      setHasNewMessage(false);
    }
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    playNotificationSound();
    window.open('https://wa.me/51999999999?text=Hola! Me interesa el Plan MYPE de S/.1,500 para mi presencia digital completa', '_blank');
    setIsOpen(false);
  };

  const handleContactFormClick = () => {
    playNotificationSound();
    if (onOpenContact) {
      onOpenContact();
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", bounce: 0.5, duration: 0.8 }}
      >
        {/* Notification Badge */}
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center z-10 shadow-lg"
            >
              1
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Chat Button */}
        <motion.button
          onClick={handleToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center overflow-hidden"
        >
          {/* Pulse Animation */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-green-400 rounded-full"
          />
          
          {/* Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Chat Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
              className="absolute bottom-20 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <h3 className="font-semibold text-sm">¡Hola! 👋</h3>
                <p className="text-xs opacity-90 mt-1">
                  ¿Te ayudamos con tu presencia digital?
                </p>
              </div>

              {/* Options */}
              <div className="p-4 space-y-3">
                {/* WhatsApp Option */}
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-green-900 text-sm">WhatsApp</p>
                      <p className="text-xs text-green-700">Respuesta inmediata</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.button>

                {/* Contact Form Option */}
                <motion.button
                  onClick={handleContactFormClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900 text-sm">Plan MYPE</p>
                      <p className="text-xs text-gray-600">S/.1,500 • Sin fricción</p>
                    </div>
                  </div>
                </motion.button>

                {/* Trust Signal */}
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center">
                    ⚡ Respuesta en 2 horas • 🔒 100% seguro
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
