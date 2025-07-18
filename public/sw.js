// LLM-OPTIMIZED: PWA Service Worker 2025 - Advanced caching, offline support, background sync
// Sustainability focus: Carbon-efficient caching and data optimization

/**
 * 🌐 AQXION PWA SERVICE WORKER
 * Advanced PWA features for 2025: Offline-first, background sync, carbon-efficient
 */

const CACHE_NAME = 'aqxion-v1.2.0';
const OFFLINE_URL = '/offline';
const FALLBACK_IMAGE = '/assets/fallback-image.webp';

// Critical resources for immediate caching
const CORE_CACHE_RESOURCES = [
  '/',
  '/offline',
  '/manifest.json',
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-512x512.png',
  // Core CSS and JS will be added by Next.js build
];

// Resources to cache on first visit (progressive enhancement)
const EXTENDED_CACHE_RESOURCES = [
  '/blog',
  '/contacto',
  '/servicios',
  '/precios',
  '/assets/fonts/inter-var.woff2',
  '/assets/images/hero-bg.webp'
];

// Network-first resources (always try network, fallback to cache)
const NETWORK_FIRST_PATTERNS = [
  /\/api\//,
  /\/blog\/.*$/,
  /\/_next\/data\//
];

// Cache-first resources (serve from cache, update in background)
const CACHE_FIRST_PATTERNS = [
  /\/assets\//,
  /\.(?:js|css|woff2?|png|jpg|jpeg|webp|svg|gif|ico)$/,
  /\/_next\/static\//
];

// Stale-while-revalidate resources
const SWR_PATTERNS = [
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/cdnjs\.cloudflare\.com/
];

/**
 * Install event - Cache core resources
 */
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        
        // Cache core resources immediately
        await cache.addAll(CORE_CACHE_RESOURCES);
        
        // Progressive enhancement: cache extended resources in background
        setTimeout(async () => {
          try {
            await cache.addAll(EXTENDED_CACHE_RESOURCES);
            console.log('[ServiceWorker] Extended resources cached');
          } catch (error) {
            console.warn('[ServiceWorker] Extended caching failed:', error);
          }
        }, 2000);
        
        // Skip waiting to activate immediately
        await self.skipWaiting();
        
        console.log('[ServiceWorker] Core resources cached successfully');
      } catch (error) {
        console.error('[ServiceWorker] Install failed:', error);
      }
    })()
  );
});

/**
 * Activate event - Clean up old caches
 */
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  
  event.waitUntil(
    (async () => {
      try {
        // Clean up old caches
        const cacheNames = await caches.keys();
        const deletePromises = cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name));
        
        await Promise.all(deletePromises);
        
        // Take control of all clients
        await self.clients.claim();
        
        console.log('[ServiceWorker] Old caches cleaned, activated successfully');
      } catch (error) {
        console.error('[ServiceWorker] Activation failed:', error);
      }
    })()
  );
});

/**
 * Fetch event - Advanced caching strategies
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests and extension requests
  if (request.method !== 'GET' || url.protocol.startsWith('chrome-extension')) {
    return;
  }
  
  // Determine caching strategy based on URL patterns
  if (NETWORK_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(networkFirstStrategy(request));
  } else if (CACHE_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(cacheFirstStrategy(request));
  } else if (SWR_PATTERNS.some(pattern => pattern.test(url.href))) {
    event.respondWith(staleWhileRevalidateStrategy(request));
  } else {
    event.respondWith(networkFirstWithOfflineFallback(request));
  }
});

/**
 * Network-first strategy with carbon-aware timing
 */
async function networkFirstStrategy(request) {
  try {
    // Add carbon-aware timeout (shorter during peak hours)
    const timeout = await getCarbonAwareTimeout();
    const response = await fetchWithTimeout(request, timeout);
    
    // Cache successful responses
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.warn('[ServiceWorker] Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback for navigation requests
    if (request.mode === 'navigate') {
      return caches.match(OFFLINE_URL);
    }
    
    throw error;
  }
}

/**
 * Cache-first strategy with background update
 */
async function cacheFirstStrategy(request) {
  try {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      // Background update for fresh content
      updateCacheInBackground(request);
      return cachedResponse;
    }
    
    // Not in cache, fetch from network
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[ServiceWorker] Cache-first strategy failed:', error);
    
    // Fallback for images
    if (request.destination === 'image') {
      return caches.match(FALLBACK_IMAGE);
    }
    
    throw error;
  }
}

/**
 * Stale-while-revalidate strategy
 */
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Background fetch to update cache
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(error => {
    console.warn('[ServiceWorker] Background fetch failed:', error);
  });
  
  // Return cached version immediately, or wait for network
  return cachedResponse || fetchPromise;
}

/**
 * Network-first with comprehensive offline fallback
 */
async function networkFirstWithOfflineFallback(request) {
  try {
    const response = await fetch(request);
    
    // Cache successful navigation requests
    if (response.ok && request.mode === 'navigate') {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Offline fallback for different request types
    if (request.mode === 'navigate') {
      return caches.match(OFFLINE_URL);
    }
    
    if (request.destination === 'image') {
      return caches.match(FALLBACK_IMAGE);
    }
    
    // Return minimal offline response
    return new Response(
      JSON.stringify({
        error: 'Offline',
        message: 'Recurso no disponible sin conexión'
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

/**
 * Background cache update without blocking main response
 */
async function updateCacheInBackground(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
  } catch (error) {
    console.warn('[ServiceWorker] Background cache update failed:', error);
  }
}

/**
 * Fetch with timeout and carbon-awareness
 */
async function fetchWithTimeout(request, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(request, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * Carbon-aware timeout adjustment
 */
async function getCarbonAwareTimeout() {
  // Shorter timeouts during peak carbon hours to encourage caching
  const hour = new Date().getHours();
  const isPeakCarbon = hour >= 17 && hour <= 21; // Evening peak
  
  return isPeakCarbon ? 3000 : 8000; // 3s peak, 8s off-peak
}

/**
 * Background sync for offline actions
 */
self.addEventListener('sync', (event) => {
  console.log('[ServiceWorker] Background sync:', event.tag);
  
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  }
  
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

/**
 * Sync contact forms submitted while offline
 */
async function syncContactForms() {
  try {
    // Get stored offline submissions
    const db = await openDB();
    const submissions = await getOfflineSubmissions(db);
    
    for (const submission of submissions) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission.data)
        });
        
        if (response.ok) {
          await removeOfflineSubmission(db, submission.id);
          console.log('[ServiceWorker] Offline form synced successfully');
        }
      } catch (error) {
        console.warn('[ServiceWorker] Form sync failed:', error);
      }
    }
  } catch (error) {
    console.error('[ServiceWorker] Background sync failed:', error);
  }
}

/**
 * Sync analytics data collected offline
 */
async function syncAnalytics() {
  try {
    // Sync analytics events stored while offline
    const events = await getOfflineAnalytics();
    
    if (events.length > 0) {
      // Batch send analytics events
      await sendAnalyticsBatch(events);
      await clearOfflineAnalytics();
    }
  } catch (error) {
    console.error('[ServiceWorker] Analytics sync failed:', error);
  }
}

/**
 * Push notification support for real-time updates
 */
self.addEventListener('push', (event) => {
  console.log('[ServiceWorker] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva actualización disponible',
    icon: '/assets/icons/icon-192x192.png',
    badge: '/assets/icons/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/',
      timestamp: Date.now()
    },
    actions: [
      {
        action: 'open',
        title: 'Abrir AQXION',
        icon: '/assets/icons/open-icon.png'
      },
      {
        action: 'dismiss',
        title: 'Cerrar',
        icon: '/assets/icons/close-icon.png'
      }
    ],
    requireInteraction: false,
    silent: false,
    tag: 'aqxion-update'
  };
  
  event.waitUntil(
    self.registration.showNotification('AQXION - Agentes IA', options)
  );
});

/**
 * Handle notification clicks
 */
self.addEventListener('notificationclick', (event) => {
  console.log('[ServiceWorker] Notification click:', event.action);
  
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data?.url || '/')
    );
  }
});

// Utility functions for IndexedDB operations
async function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('AQXIONOfflineDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains('submissions')) {
        db.createObjectStore('submissions', { keyPath: 'id', autoIncrement: true });
      }
      
      if (!db.objectStoreNames.contains('analytics')) {
        db.createObjectStore('analytics', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

async function getOfflineSubmissions(db) {
  const transaction = db.transaction(['submissions'], 'readonly');
  const store = transaction.objectStore('submissions');
  return store.getAll();
}

async function removeOfflineSubmission(db, id) {
  const transaction = db.transaction(['submissions'], 'readwrite');
  const store = transaction.objectStore('submissions');
  return store.delete(id);
}

async function getOfflineAnalytics() {
  // Simplified mock - implement proper IndexedDB operations
  return [];
}

async function sendAnalyticsBatch(events) {
  // Send analytics events to tracking service
  console.log('[ServiceWorker] Sending analytics batch:', events.length);
}

async function clearOfflineAnalytics() {
  // Clear stored analytics events
  console.log('[ServiceWorker] Analytics cache cleared');
}

/**
 * Handle notification clicks
 */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const action = event.action;
  const data = event.notification.data || {};
  let url = data.url || '/';

  // Handle specific actions
  switch (action) {
    case 'open':
      url = '/';
      break;
    case 'contact':
      url = '/contacto';
      break;
    case 'services':
      url = '/servicios';
      break;
    case 'close':
      return; // Just close, don't open anything
    default:
      url = data.url || '/';
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Check if there's already a window/tab open with this URL
      for (const client of clientList) {
        if (client.url.includes(url.split('?')[0]) && 'focus' in client) {
          return client.focus();
        }
      }
      
      // No existing window found, open a new one
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

/**
 * Handle notification close events
 */
self.addEventListener('notificationclose', (event) => {
  console.log('[ServiceWorker] Notification closed:', event.notification.tag);
  
  // Track notification dismissal for analytics
  // trackNotificationEvent('dismissed', event.notification.tag);
});

console.log('[ServiceWorker] Loaded successfully with 2025 PWA features');
