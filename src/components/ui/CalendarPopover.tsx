/**
 * CalendarPopover - Ventanita promocional que aparece desde el botón
 * Muestra mensaje del fundador y CTA para abrir el modal completo
 */

import React from 'react';
import { ArrowRight, Calendar, X } from 'lucide-react';

interface CalendarPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleClick: () => void;
}

/**
 * Popover que aparece desde el botón de calendario
 * Contiene mensaje promocional del fundador y CTA
 */
export const CalendarPopover: React.FC<CalendarPopoverProps> = React.memo(({
  isOpen,
  onClose,
  onScheduleClick
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Popover - Positioned relative to button */}
      <div className="fixed bottom-20 right-6 z-50">
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80 transform transition-all duration-300 ease-out">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Cerrar"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>

          {/* Founder avatar and info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">LN</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Luis Noriega</h4>
              <p className="text-sm text-gray-500">Fundador MyPerú</p>
            </div>
          </div>

          {/* Message */}
          <div className="mb-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Listo para hacer crecer tu MYPE?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Únete a nuestro workshop exclusivo donde recibirás estrategias probadas 
              para escalar tu negocio peruano y acceder a nuevos mercados internacionales.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={onScheduleClick}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar sesión gratuita</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Trust indicator */}
          <p className="text-xs text-gray-400 text-center mt-3">
            Consultoría personalizada • Solo para MYPES peruanas
          </p>

          {/* Arrow pointing to button */}
          <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
        </div>
      </div>
    </>
  );
});

CalendarPopover.displayName = 'CalendarPopover';
