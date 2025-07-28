/**
 * CalendlyWidget - Widget flotante de Calendly para auto-open
 * Replica el comportamiento exacto de la imagen de referencia
 */

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CalendlyWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

/**
 * Widget flotante de Calendly que aparece en la esquina inferior derecha
 * Idéntico al mostrado en la imagen de referencia
 */
export const CalendlyWidget: React.FC<CalendlyWidgetProps> = React.memo(({ 
  isOpen, 
  onClose,
  calendlyUrl = "https://calendly.com/alexhormozi/acq-scaling-workshop"
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // Cargar script de Calendly si no está cargado
      if (!window.Calendly) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);
        
        script.onload = () => {
          initializeCalendly();
        };
      } else {
        initializeCalendly();
      }
    }

    function initializeCalendly() {
      if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: widgetRef.current,
          prefill: {},
          utm: {}
        });
      }
    }
  }, [isOpen, calendlyUrl]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Widget Container - Tamaño exacto como en la imagen */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          aria-label="Cerrar calendario"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Calendly Widget Container */}
        <div 
          ref={widgetRef}
          className="w-[380px] h-[600px]"
          style={{ minHeight: '600px' }}
        />
      </div>

      {/* Backdrop para cerrar al hacer clic fuera */}
      <div 
        className="fixed inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
});

CalendlyWidget.displayName = 'CalendlyWidget';

// Declare global Calendly type
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        prefill?: Record<string, any>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        utm?: Record<string, any>;
      }) => void;
    };
  }
}
