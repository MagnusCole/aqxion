'use client';

import { useState, useEffect } from 'react';

interface NetworkConnection {
  effectiveType?: string;
  saveData?: boolean;
  addEventListener?: (_type: string, _listener: () => void) => void;
  removeEventListener?: (_type: string, _listener: () => void) => void;
}

interface ExtendedNavigator extends Navigator {
  connection?: NetworkConnection;
  mozConnection?: NetworkConnection;
  webkitConnection?: NetworkConnection;
  deviceMemory?: number;
  standalone?: boolean;
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface NetworkStatus {
  isOnline: boolean;
  connectionType: string;
  saveData: boolean;
  isLowEndDevice: boolean;
}

export function useNetworkStatus(): NetworkStatus {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isOnline: true,
    connectionType: 'unknown',
    saveData: false,
    isLowEndDevice: false
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      const extendedNav = navigator as ExtendedNavigator;
      const connection = extendedNav.connection || 
                        extendedNav.mozConnection || 
                        extendedNav.webkitConnection;
      
      const isLowEndDevice = () => {
        // Detectar dispositivos de gama baja basado en memoria y cores
        const memory = extendedNav.deviceMemory || 4;
        const cores = navigator.hardwareConcurrency || 4;
        return memory <= 2 || cores <= 2;
      };

      setNetworkStatus({
        isOnline: navigator.onLine,
        connectionType: connection?.effectiveType || 'unknown',
        saveData: connection?.saveData || false,
        isLowEndDevice: isLowEndDevice()
      });
    };

    // Actualizar estado inicial
    updateNetworkStatus();

    // Escuchar cambios de conectividad
    const handleOnline = () => updateNetworkStatus();
    const handleOffline = () => updateNetworkStatus();
    const handleConnectionChange = () => updateNetworkStatus();

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Escuchar cambios en la conexión si está disponible
    const extendedNav = navigator as ExtendedNavigator;
    const connection = extendedNav.connection;
    if (connection && connection.addEventListener) {
      connection.addEventListener('change', handleConnectionChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (connection && connection.removeEventListener) {
        connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, []);

  return networkStatus;
}

// Hook para manejar la instalación de PWA
export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Verificar si ya está instalado
    const extendedNav = navigator as ExtendedNavigator;
    if (window.matchMedia('(display-mode: standalone)').matches || 
        extendedNav.standalone === true) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installPWA = async () => {
    if (!deferredPrompt) return false;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        setIsInstallable(false);
        setDeferredPrompt(null);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error al instalar PWA:', error);
      return false;
    }
  };

  return {
    isInstallable,
    isInstalled,
    installPWA
  };
}
