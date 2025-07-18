'use client';

import { useState, useEffect } from 'react';
import { useNetworkStatus } from '@/hooks/usePWA';

interface AppStatusNotificationProps {
  className?: string;
}

export function AppStatusNotification({ className = '' }: AppStatusNotificationProps) {
  const { isOnline, connectionType, saveData } = useNetworkStatus();
  const [showNotification, setShowNotification] = useState(false);
  const [lastOnlineStatus, setLastOnlineStatus] = useState(true);

  useEffect(() => {
    // Mostrar notificación cuando cambia el estado de conectividad
    if (lastOnlineStatus !== isOnline) {
      setShowNotification(true);
      setLastOnlineStatus(isOnline);
      
      // Ocultar notificación después de 5 segundos
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOnline, lastOnlineStatus]);

  if (!showNotification) return null;

  const getConnectionIcon = () => {
    if (!isOnline) return '📡';
    if (connectionType === 'slow-2g' || connectionType === '2g') return '🐌';
    if (connectionType === '3g') return '📶';
    if (connectionType === '4g') return '📱';
    return '🚀';
  };

  const getConnectionText = () => {
    if (!isOnline) return 'Sin conexión - Modo offline activado';
    if (saveData) return `Conexión ${connectionType} - Modo ahorro de datos`;
    return `Conexión ${connectionType} - Todo funciona perfectamente`;
  };

  const getNotificationStyle = () => {
    if (!isOnline) return 'bg-red-500 text-white';
    if (connectionType === 'slow-2g' || connectionType === '2g') return 'bg-yellow-500 text-black';
    return 'bg-green-500 text-white';
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transition-all duration-300 transform ${getNotificationStyle()} ${className}`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl" role="img" aria-label="Estado de conexión">
          {getConnectionIcon()}
        </span>
        <div className="flex-1">
          <p className="text-sm font-medium">{getConnectionText()}</p>
          {!isOnline && (
            <p className="text-xs mt-1 opacity-90">
              Los contenidos guardados están disponibles
            </p>
          )}
        </div>
        <button
          onClick={() => setShowNotification(false)}
          className="text-lg opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Cerrar notificación"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// Componente para mostrar el estado de la PWA en el footer
export function PWAStatus() {
  const { isOnline, connectionType, saveData, isLowEndDevice } = useNetworkStatus();

  return (
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <span className="flex items-center gap-1">
        <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
        {isOnline ? 'Online' : 'Offline'}
      </span>
      {isOnline && (
        <>
          <span>•</span>
          <span>{connectionType.toUpperCase()}</span>
          {saveData && (
            <>
              <span>•</span>
              <span>💾 Ahorro</span>
            </>
          )}
          {isLowEndDevice && (
            <>
              <span>•</span>
              <span>⚡ Optimizado</span>
            </>
          )}
        </>
      )}
    </div>
  );
}
