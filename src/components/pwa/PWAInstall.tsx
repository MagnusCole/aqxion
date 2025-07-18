// LLM-OPTIMIZED: PWA Install Prompt - Enhanced user experience for app installation
'use client';

import React, { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/**
 * 📱 PWA INSTALL COMPONENT
 * Smart install prompt that appears at optimal moments
 * Tracks user engagement and conversion
 */
export const PWAInstall: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIOSDevice);

    // Check if already installed
    const isInstalledPWA = window.matchMedia('(display-mode: standalone)').matches ||
                          (window.navigator as {standalone?: boolean}).standalone === true;
    setIsInstalled(isInstalledPWA);

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show install banner after user engagement
      setTimeout(() => {
        if (!isInstalledPWA) {
          setShowInstallBanner(true);
        }
      }, 30000); // Show after 30 seconds of engagement
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallBanner(false);
      setDeferredPrompt(null);
      
      // Track installation
      if (typeof window !== 'undefined' && (window as {gtag?: (..._args: unknown[]) => void}).gtag) {
        (window as unknown as {gtag: (..._args: unknown[]) => void}).gtag('event', 'pwa_install', {
          event_category: 'engagement',
          event_label: 'PWA App Installed'
        });
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Cleanup
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        // User accepted PWA install
      }
      
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    } catch (error) {
      console.error('Error showing install prompt:', error);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    
    // Track dismissal
    const gtag = (window as {gtag?: (..._args: unknown[]) => void}).gtag;
    if (typeof window !== 'undefined' && gtag) {
      gtag('event', 'pwa_install_dismissed', {
        event_category: 'engagement',
        event_label: 'PWA Install Banner Dismissed'
      });
    }
  };

  // Don't show if already installed
  if (isInstalled) return null;

  // iOS Install Instructions
  if (isIOS && showInstallBanner) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-white border border-neutral-200 rounded-lg shadow-lg p-4 z-50 max-w-sm mx-auto">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-neutral-900">
              Instalar AQXION
            </h3>
            <p className="text-xs text-neutral-600 mt-1">
              Toca <span className="inline-flex items-center mx-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
              </span> luego &ldquo;Añadir a pantalla de inicio&rdquo;
            </p>
          </div>
          
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-neutral-400 hover:text-neutral-600"
            aria-label="Cerrar banner de instalación"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Android/Desktop Install Prompt
  if (deferredPrompt && showInstallBanner) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-4 z-50 max-w-sm mx-auto">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-white">
              Instalar AQXION
            </h3>
            <p className="text-xs text-blue-100 mt-1">
              Acceso rápido, notificaciones y funcionalidad offline
            </p>
            
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleInstallClick}
                className="bg-white text-blue-600 px-3 py-1.5 rounded text-xs font-semibold hover:bg-blue-50 transition-colors"
              >
                Instalar
              </button>
              <button
                onClick={handleDismiss}
                className="bg-white/20 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-white/30 transition-colors"
              >
                Ahora no
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

/**
 * Service Worker Registration Component
 */
export const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          // SW registered successfully
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content available, show update notification
                  showUpdateNotification();
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('SW registration failed:', error);
        });
    }
  }, []);

  const showUpdateNotification = () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('AQXION Actualizado', {
          body: 'Nueva versión disponible. Recarga para obtener las últimas mejoras.',
          icon: '/assets/icons/icon-192x192.png',
          badge: '/assets/icons/badge-72x72.png',
          tag: 'app-update',
          requireInteraction: true
        });
      }
    }
  };

  return null;
};
