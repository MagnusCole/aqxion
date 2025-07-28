/**
 * CalendlyEmbed - Componente optimizado para embeb               <h3 className="text-lg font-medium text-gray-500 mb-2">
            📅 Julio 2025
          </h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            Por favor completa el formulario antes de seleccionar tu horario.
          </p>h3 className="text-lg font-medium text-gray-500 mb-2">
            📅 Julio 2025
          </h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            Por favor completa el formulario antes de seleccionar tu horario.
          </p>endly
 * Carga lazy para mejor performance de RAM
 */

import React, { useState, useCallback } from 'react';

interface CalendlyEmbedProps {
  isVisible: boolean;
  userName?: string;
  userEmail?: string;
  userPhone?: string;
}

/**
 * Iframe de Calendly con carga optimizada y parámetros pre-rellenados
 */
export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = React.memo(({ 
  isVisible, 
  userName = '',
  userEmail = '',
  userPhone = ''
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Construir URL de Calendly con parámetros pre-rellenados
  const calendlyUrl = React.useMemo(() => {
    // URL de tu Calendly personalizada para AQXION
    const baseUrl = 'https://calendly.com/luis-noriega-myperu/sesion-estrategica-mype'; 
    const params = new URLSearchParams();
    
    if (userName) params.set('name', userName);
    if (userEmail) params.set('email', userEmail);
    if (userPhone) params.set('phone', userPhone);
    
    // Configuración para embebido
    params.set('embed_domain', window.location.hostname);
    params.set('embed_type', 'Inline');
    
    return `${baseUrl}?${params.toString()}`;
  }, [userName, userEmail, userPhone]);

  if (!isVisible) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-400 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-500 mb-2">
            � July 2025
          </h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            Please fill out the form before choosing your time slot.
          </p>
          
          {/* Calendar preview */}
          <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-300">
              <div className="text-center py-2 font-medium">DOM</div>
              <div className="text-center py-2 font-medium">LUN</div>
              <div className="text-center py-2 font-medium">MAR</div>
              <div className="text-center py-2 font-medium">MIE</div>
              <div className="text-center py-2 font-medium">JUE</div>
              <div className="text-center py-2 font-medium">VIE</div>
              <div className="text-center py-2 font-medium">SAB</div>
              
              {Array.from({ length: 14 }, (_, i) => (
                <div key={i} className="aspect-square flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-100 rounded text-xs text-gray-300 flex items-center justify-center">
                    {i < 14 ? i + 1 : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full relative bg-white">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Cargando...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={calendlyUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={handleLoad}
        className="w-full h-full"
        title="Calendly - Agendar sesión"
        loading="lazy"
      />
    </div>
  );
});

CalendlyEmbed.displayName = 'CalendlyEmbed';
