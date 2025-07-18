'use client';

import { useState, useEffect } from 'react';

interface PushNotificationManagerProps {
  className?: string;
}

export function PushNotificationManager({ className = '' }: PushNotificationManagerProps) {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Verificar estado inicial de permisos
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }

    // Verificar suscripción existente
    checkExistingSubscription();
  }, []);

  const checkExistingSubscription = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const existingSubscription = await registration.pushManager.getSubscription();
        setSubscription(existingSubscription);
      } catch (error) {
        console.error('Error verificando suscripción:', error);
      }
    }
  };

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert('Este navegador no soporta notificaciones');
      return false;
    }

    if (permission === 'granted') {
      return true;
    }

    setIsLoading(true);
    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result === 'granted';
    } catch (error) {
      console.error('Error solicitando permisos:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const subscribeToPush = async () => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      alert('Las notificaciones push no están disponibles en este navegador');
      return;
    }

    setIsLoading(true);
    try {
      // Primero solicitar permisos
      const hasPermission = await requestPermission();
      if (!hasPermission) {
        return;
      }

      // Obtener service worker registration
      const registration = await navigator.serviceWorker.ready;

      // Crear suscripción
      const newSubscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          // En producción, usar tu VAPID public key real
          'BH7Q8gTXF5YKdXJKBw5QoSX9M8J8XrRJKJLK9Sx1M8J8XrRJKJLK9Sx1M8J8XrRJKJLK9Sx1'
        )
      });

      setSubscription(newSubscription);

      // Enviar suscripción al servidor
      const response = await fetch('/api/push-notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'subscribe',
          subscription: newSubscription.toJSON()
        })
      });

      if (response.ok) {
        // Mostrar notificación de bienvenida local
        new Notification('¡Notificaciones activadas! 🎉', {
          body: 'Ahora recibirás actualizaciones sobre nuevas funciones de IA',
          icon: '/assets/icons/icon-192x192.png',
          badge: '/assets/icons/icon-72x72.png'
        });
      }
    } catch (error) {
      console.error('Error suscribiendo a notificaciones:', error);
      alert('Error activando notificaciones. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const unsubscribeFromPush = async () => {
    if (!subscription) return;

    setIsLoading(true);
    try {
      // Cancelar suscripción en el navegador
      await subscription.unsubscribe();
      setSubscription(null);

      // Notificar al servidor
      await fetch('/api/push-notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'unsubscribe',
          subscription: subscription.toJSON()
        })
      });

    } catch (error) {
      console.error('Error cancelando suscripción:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Convertir VAPID key de base64 a Uint8Array
  function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  // No mostrar nada si no hay soporte
  if (!('Notification' in window) || !('serviceWorker' in navigator)) {
    return null;
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">🔔</span>
        <div>
          <h3 className="font-semibold text-gray-900">Notificaciones Inteligentes</h3>
          <p className="text-sm text-gray-600">
            Recibe alertas sobre nuevas funciones de IA y ofertas exclusivas
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {/* Estado actual */}
        <div className="flex items-center gap-2 text-sm">
          <span className={`w-2 h-2 rounded-full ${
            permission === 'granted' ? 'bg-green-400' : 
            permission === 'denied' ? 'bg-red-400' : 'bg-yellow-400'
          }`} />
          <span className="text-gray-600">
            Estado: {
              permission === 'granted' ? 'Activadas' :
              permission === 'denied' ? 'Bloqueadas' : 'Sin configurar'
            }
          </span>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2">
          {!subscription ? (
            <button
              onClick={subscribeToPush}
              disabled={isLoading || permission === 'denied'}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Activando...' : '🚀 Activar Notificaciones'}
            </button>
          ) : (
            <button
              onClick={unsubscribeFromPush}
              disabled={isLoading}
              className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 disabled:opacity-50 transition-colors"
            >
              {isLoading ? 'Desactivando...' : '❌ Desactivar'}
            </button>
          )}
        </div>

        {/* Beneficios */}
        {!subscription && permission !== 'denied' && (
          <div className="bg-blue-50 rounded-lg p-3 text-sm">
            <p className="font-medium text-blue-900 mb-1">💡 Beneficios:</p>
            <ul className="text-blue-800 space-y-1">
              <li>• Nuevas funciones de IA disponibles</li>
              <li>• Ofertas exclusivas para suscriptores</li>
              <li>• Tips de automatización semanales</li>
              <li>• Alertas de downtime del sistema</li>
            </ul>
          </div>
        )}

        {/* Instrucciones para navegadores bloqueados */}
        {permission === 'denied' && (
          <div className="bg-red-50 rounded-lg p-3 text-sm">
            <p className="font-medium text-red-900 mb-1">🚫 Notificaciones bloqueadas</p>
            <p className="text-red-800">
              Para activarlas, haz clic en el ícono de candado en la barra de direcciones
              y permite las notificaciones.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
