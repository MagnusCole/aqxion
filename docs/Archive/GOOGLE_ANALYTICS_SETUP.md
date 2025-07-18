# Configuración de Google Analytics / Google Tag Manager

## ✅ Configuración Completada

### 🎯 Google Tag Manager Instalado
- **GTM ID**: `GTM-TGD5LDTN`
- **Instalación**: Script en `<head>` y noscript en `<body>`
- **Ubicación**: `src/components/analytics/GoogleTagManager.tsx`

### 📊 Tracking Implementado

#### Eventos Automáticos
- ✅ **Páginas vistas**: Tracking automático en cada cambio de ruta
- ✅ **Scroll depth**: 25%, 50%, 75%, 90%, 100%
- ✅ **Tiempo en página**: Cada 30 segundos
- ✅ **Cookies**: Aceptación/rechazo del banner

#### Eventos de Conversión
- ✅ **Formulario de contacto**: Envío exitoso
- ✅ **Clicks en Calendly**: Todos los botones de agendar cita
- ✅ **Clicks en email**: Enlaces mailto
- ✅ **Clicks en teléfono**: Enlaces tel (por implementar)
- ✅ **Clicks en WhatsApp**: Enlaces de WhatsApp (por implementar)

#### Eventos de Blog
- ✅ **Vista de posts**: Tracking automático
- ✅ **Descargas**: Lead magnets y recursos

### 📁 Archivos Creados/Modificados

```
src/
├── components/analytics/
│   ├── GoogleTagManager.tsx      # GTM script components
│   └── AnalyticsWrapper.tsx      # Wrapper con tracking automático
├── hooks/
│   ├── useAnalytics.tsx          # Hook para pageviews
│   └── useAdvancedAnalytics.tsx  # Hook para scroll/tiempo
├── lib/
│   ├── analytics.ts              # Funciones básicas de tracking
│   └── analytics-config.ts       # Configuración avanzada
└── app/
    └── layout.tsx                # GTM integrado en layout principal
```

## 🔧 Configuración en Google Tag Manager

### 1. Variables Recomendadas
Crear estas variables en GTM para un mejor tracking:

```javascript
// Variable: Page Path
{{Page Path}}

// Variable: Click Text
{{Click Text}}

// Variable: Form Classes
{{Form Classes}}

// Variable: Scroll Depth Threshold
{{Scroll Depth Threshold}}
```

### 2. Triggers Recomendados

#### Conversión - Formulario de Contacto
```javascript
Event Name: contact_form_submit
```

#### Conversión - Calendly
```javascript
Event Name: calendly_click
```

#### Engagement - Scroll Profundo
```javascript
Event Name: scroll_deep
Condition: scroll_depth >= 75
```

### 3. Tags de Google Analytics 4

#### Configuración Principal
```javascript
Tag Type: Google Analytics: GA4 Configuration
Measurement ID: G-XXXXXXXXXX (tu Google Analytics 4 ID)
```

#### Eventos de Conversión
```javascript
Tag Type: Google Analytics: GA4 Event
Event Name: {{Event Name}}
Parameters:
- event_category: {{Event Category}}
- event_label: {{Event Label}}
- value: {{Event Value}}
```

## 🔍 Verificación de Implementación

### 1. Herramientas de Desarrollo
```javascript
// En la consola del navegador
console.log(window.dataLayer);

// Debería mostrar eventos como:
// {event: "page_view", page_path: "/"}
// {event: "contact_form_submit", ...}
```

### 2. Google Tag Assistant
- Instalar extensión "Tag Assistant Legacy"
- Verificar que GTM esté cargando correctamente
- Confirmar que los eventos se disparan

### 3. Google Analytics 4 Real-time
- Ir a GA4 → Reports → Realtime
- Navegar por el sitio y verificar eventos en tiempo real

### 4. Google Tag Manager Preview
- Activar modo preview en GTM
- Probar todos los eventos de conversión

## 📈 Eventos Importantes para Conversiones

### Configurar como Conversiones en GA4:
1. `contact_form_submit` - Formulario principal
2. `calendly_click` - Agendamiento de citas
3. `email_click` - Contacto por email
4. `phone_click` - Contacto telefónico
5. `whatsapp_click` - Contacto por WhatsApp
6. `download_lead_magnet` - Descarga de recursos

## 🎯 Objetivos y Embudo de Conversión

### Macro Conversiones
1. **Formulario de contacto completado**
2. **Cita agendada via Calendly**
3. **Llamada telefónica**

### Micro Conversiones
1. **Scroll al 75% o más**
2. **Tiempo en página > 2 minutos**
3. **Visita a múltiples páginas**
4. **Descarga de lead magnet**

## 🔒 Privacidad y Cookies

- ✅ **Cookie banner implementado**
- ✅ **Tracking de consentimiento**
- ✅ **Enlaces a política de privacidad**

## 🚀 Próximos Pasos

1. **Configurar conversiones en GA4**
2. **Crear audiences para remarketing**
3. **Configurar Google Ads conversion tracking**
4. **Implementar Enhanced Ecommerce para servicios**
5. **Crear dashboards personalizados**

## 📞 Eventos Adicionales a Implementar

Si necesitas agregar más tracking, puedes usar estas funciones:

```typescript
import { trackEvent, trackConversion } from '@/lib/analytics';

// Evento personalizado
trackEvent('button_click', 'Navigation', 'Header CTA');

// Conversión con valor
trackConversion('service_inquiry', 297, {
  service_type: 'auditoria_completa',
  source: 'landing_page'
});
```

---

**Nota**: Recuerda configurar las conversiones en Google Analytics 4 y conectar con Google Ads si planeas hacer publicidad paga.
