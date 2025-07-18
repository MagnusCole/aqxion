// LLM-OPTIMIZED: Smart popup lead magnet with exit-intent and behavior triggers
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/atoms/Button';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';

interface LeadMagnetPopupProps {
  trigger?: 'time' | 'scroll' | 'exit' | 'manual';
  delay?: number;
  scrollPercent?: number;
  onClose?: () => void;
  onSubmit?: (_email: string, _source: string) => void;
}

export const LeadMagnetPopup: React.FC<LeadMagnetPopupProps> = ({
  trigger = 'time',
  delay = 30000, // 30 seconds default
  scrollPercent = 70,
  onClose,
  onSubmit,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Exit intent detection
  useEffect(() => {
    if (trigger !== 'exit' || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [trigger, hasShown]);

  // Time-based trigger
  useEffect(() => {
    if (trigger !== 'time' || hasShown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasShown(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [trigger, delay, hasShown]);

  // Scroll-based trigger
  useEffect(() => {
    if (trigger !== 'scroll' || hasShown) return;

    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrolled >= scrollPercent && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trigger, scrollPercent, hasShown]);

  // Manual trigger
  useEffect(() => {
    if (trigger === 'manual' && !hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  }, [trigger, hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitted(true);
    onSubmit?.(email, trigger);

    // Track conversion
    if (typeof window !== 'undefined') {
      window.gtag?.('event', 'lead_magnet_conversion', {
        event_category: 'lead_generation',
        event_label: `popup_${trigger}`,
        value: 1
      });
    }

    // Auto-close after success
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto p-8 animate-in zoom-in-50 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          // Success State
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <Heading level="h2" className="text-xl font-bold mb-4 text-green-600">
              ¡Descarga en Camino!
            </Heading>
            <Text className="text-gray-600 mb-4">
              Te enviamos el Growth Stack Checklist a tu email en los próximos 2 minutos.
            </Text>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <Text className="text-green-800 font-medium text-sm">
                📧 Revisa tu bandeja de entrada (y spam) <br />
                💡 Implementa las estrategias hoy mismo <br />
                🚀 Ve resultados en 30 días o menos
              </Text>
            </div>
          </div>
        ) : (
          // Lead Capture Form
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                DESCARGA GRATUITA
              </div>
              
              <Heading level="h2" className="text-xl font-bold mb-3">
                Growth Stack Checklist
              </Heading>
              
              <Text className="text-gray-600 text-sm leading-relaxed">
                La guía exacta que usan nuestros clientes para generar <strong>50+ leads/mes</strong> en 30 días.
              </Text>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              {[
                { icon: '✅', text: 'Checklist paso a paso de implementación' },
                { icon: '🎯', text: 'Templates de ads que convierten 15%+' },
                { icon: '📧', text: 'Secuencias de outreach probadas' },
                { icon: '🤖', text: 'Setup de IA para automatización' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <Text className="text-sm text-gray-700">{item.text}</Text>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
              <Text className="text-blue-800 text-sm text-center">
                <strong>2,847 dueños de negocio</strong> ya implementaron este checklist
              </Text>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="tu-email@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center font-medium"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                variant="success" 
                size="lg" 
                fullWidth
                className="text-lg font-bold"
              >
                Descargar Checklist GRATIS →
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-4 text-center">
              <Text className="text-xs text-gray-500">
                🔒 Sin spam. Solo contenido valioso. <br />
                📱 Descarga instantánea en tu email.
              </Text>
            </div>

            {/* Urgency */}
            <div className="mt-4 bg-orange-50 border border-orange-200 p-3 rounded-lg">
              <Text className="text-orange-800 text-sm text-center font-medium">
                ⚡ Oferta limitada: Solo los primeros 100 esta semana
              </Text>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Hook for easy popup management
export const useLeadMagnetPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const showPopup = () => setIsVisible(true);
  const hidePopup = () => setIsVisible(false);
  
  return {
    isVisible,
    showPopup,
    hidePopup,
    LeadMagnetPopup: (props: Omit<LeadMagnetPopupProps, 'onClose'>) => (
      <LeadMagnetPopup 
        {...props} 
        onClose={hidePopup}
      />
    ),
  };
};
