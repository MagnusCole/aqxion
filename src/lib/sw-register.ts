// PWA Service Worker Registration
// Este archivo se auto-ejecuta para registrar el service worker

'use client';

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  // Registrar service worker cuando la página esté completamente cargada
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      });

      // Service Worker registrado exitosamente
      if (process.env.NODE_ENV === 'development') {
        console.warn('Service Worker registrado exitosamente:', registration.scope);
      }

      // Escuchar actualizaciones del service worker
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Nueva versión de la app disponible, recarga para actualizar
              if (process.env.NODE_ENV === 'development') {
                console.warn('Nueva versión de la app disponible, recarga para actualizar');
              }
            }
          });
        }
      });
    } catch (error) {
      console.error('Error al registrar Service Worker:', error);
    }
  });

  // Manejar mensajes del service worker
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_UPDATED') {
      // Cache actualizado con nuevos recursos
      if (process.env.NODE_ENV === 'development') {
        console.warn('Cache actualizado con nuevos recursos');
      }
    }
  });
}
