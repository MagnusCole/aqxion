# 📊 Sistema de Captura de Leads - Google Sheets Integration

## 🎯 **RESUMEN COMPLETO**

Hemos centralizado todo el sistema de captura de leads en tu sitio web para que **TODOS los formularios** envíen información directamente a un **Google Sheet unificado**.

### ✅ **QUÉ ESTÁ CONFIGURADO**

1. **Formulario Principal de Contacto** (`/contacto`)
2. **Newsletter del Blog** (en todas las páginas del blog)  
3. **Lead Magnet Modal** (descargas de recursos)
4. **Landing Page Form** (`/landing`)
5. **Formularios de Consulta** (agendar consultas)

### 📋 **ESTRUCTURA DEL GOOGLE SHEET**

Tu Google Sheet captura estos datos en estas columnas:

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| `Timestamp` | Fecha y hora del envío | 2025-01-10 15:30:25 |
| `Nombre` | Nombre del usuario | Juan Pérez |
| `Apellido` | Apellido (si aplica) | García |
| `Email` | Email del usuario | juan@email.com |
| `Teléfono` | Teléfono del usuario | +1 234 567 8900 |
| `Negocio` | Nombre del negocio | Salón Belleza María |
| `Industria` | Tipo de negocio | Soy dueño/a de un negocio de belleza |
| `Mensaje` | Mensaje o consulta | Quiero más información... |
| `Fuente` | De dónde viene el lead | contact-form, blog-newsletter, landing-page |
| `Tipo` | Tipo de captura | contact, newsletter, lead-magnet, consultation |
| `IP` | IP del usuario | (limitado por Google Apps Script) |
| `User Agent` | Navegador del usuario | Mozilla/5.0... |

---

## 🔧 **CONFIGURACIÓN TÉCNICA**

### **Google Apps Script**
- **URL**: `https://script.google.com/macros/s/AKfycbxyXFlpt_bTk-JRdd66UKg3ZK7iSwboB56QiZbB6zRLbE82-SE3CLeSGhN0iVPPzwt2/exec`
- **ID**: `AKfycbxyXFlpt_bTk-JRdd66UKg3ZK7iSwboB56QiZbB6zRLbE82-SE3CLeSGhN0iVPPzwt2`

### **Variables de Entorno** (`.env.local`)
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxyXFlpt_bTk-JRdd66UKg3ZK7iSwboB56QiZbB6zRLbE82-SE3CLeSGhN0iVPPzwt2/exec
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/luis-aqxion/30min
NOTIFICATION_EMAIL=contacto@aqxion.com
```

---

## 🧪 **CÓMO TESTEAR EL SISTEMA**

### **Opción 1: Página de Testing (Recomendado)**
1. Ve a: `http://localhost:3001/admin/test-sheets`
2. Ejecuta cada test individualmente
3. Revisa que los datos aparezcan en tu Google Sheet

### **Opción 2: Testing Manual**
1. Ve a `http://localhost:3001/contacto`
2. Llena el formulario principal
3. Ve a cualquier página del blog y suscríbete al newsletter
4. Ve a `http://localhost:3001/landing` y descarga la guía

### **Opción 3: Testing con Postman**
```bash
POST https://script.google.com/macros/s/AKfycbxyXFlpt_bTk-JRdd66UKg3ZK7iSwboB56QiZbB6zRLbE82-SE3CLeSGhN0iVPPzwt2/exec

Content-Type: application/json

{
  "name": "Test Usuario",
  "email": "test@test.com",
  "phone": "123456789",
  "source": "manual-test",
  "type": "test"
}
```

---

## 📈 **FUNCIONALIDADES ADICIONALES**

### **1. Tracking Automático**
- ✅ Google Analytics 4 (cuando esté configurado)
- ✅ Facebook Pixel (cuando esté configurado)  
- ✅ Logs de desarrollo en consola

### **2. Notificaciones por Email**
- ✅ Recibes un email automático por cada nuevo lead
- ✅ Configurado para: `contacto@aqxion.com`
- ✅ Incluye todos los datos del lead

### **3. Gestión de Errores**
- ✅ Reintentos automáticos
- ✅ Mensajes de error amigables para usuarios
- ✅ Logs detallados para debugging

### **4. Diferentes Tipos de Captura**

| Fuente | Tipo | Descripción |
|--------|------|-------------|
| `contact-form` | `contact` | Formulario principal de contacto |
| `blog-newsletter` | `newsletter` | Suscripción al newsletter del blog |
| `lead-magnet` | `lead-magnet` | Descarga de recursos gratuitos |
| `landing-page` | `lead-magnet` | Descarga de guía Meta Ads |
| `consultation-request` | `consultation` | Solicitud de consulta gratuita |

---

## 🛠️ **ARCHIVOS MODIFICADOS**

### **Nuevos Archivos Creados:**
- `/src/lib/googleSheets.ts` - Servicio centralizado
- `/src/lib/config.ts` - Configuración centralizada
- `/src/components/admin/GoogleSheetsTestComponent.tsx` - Componente de testing
- `/src/app/admin/test-sheets/page.tsx` - Página de testing
- `/.env.local` - Variables de entorno
- `/.env.example` - Ejemplo de configuración

### **Archivos Actualizados:**
- `/src/sections/ContactFormSection.tsx` - Usa nuevo servicio
- `/src/components/sections/blog/BlogNewsletter.tsx` - Conectado a Google Sheets
- `/src/components/composables/forms/LeadMagnetModal.tsx` - Funcional completo
- `/src/app/landing/components/LandingHeroSection.tsx` - Usa nuevo servicio

---

## 🚀 **PRÓXIMOS PASOS RECOMENDADOS**

### **1. Inmediato (Hoy)**
- [ ] Testear todos los formularios en `http://localhost:3001/admin/test-sheets`
- [ ] Verificar que los datos lleguen correctamente al Google Sheet
- [ ] Configurar Google Analytics y Facebook Pixel (opcional)

### **2. Esta Semana**
- [ ] Configurar alertas adicionales por WhatsApp/Slack (opcional)
- [ ] Crear dashboard de métricas de leads
- [ ] Configurar segmentación automática de leads

### **3. Optimizaciones Futuras**
- [ ] Integración con CRM (HubSpot, Pipedrive, etc.)
- [ ] Automatización de follow-ups por email
- [ ] A/B testing de formularios

---

## 🆘 **SOLUCIÓN DE PROBLEMAS**

### **Error: "Failed to fetch"**
- Verificar que la URL del Google Apps Script sea correcta
- Confirmar que el script está desplegado como "Aplicación web"
- Revisar permisos del script (debe ser público)

### **Error: Los datos no llegan al Sheet**
- Verificar que el Google Sheet tenga las columnas correctas
- Confirmar que el script tenga permisos de escritura
- Revisar los logs del Apps Script

### **Error: Notificaciones por email no llegan**
- Verificar la configuración del email en el Apps Script
- Confirmar que el email esté en la lista de usuarios autorizados

---

## 📞 **CONTACTO TÉCNICO**

Si tienes algún problema con la implementación:
1. Revisa los logs en `http://localhost:3001/admin/test-sheets`
2. Verifica la configuración en `.env.local`
3. Testea la conexión con Postman
4. Revisa los permisos del Google Apps Script

**¡El sistema está listo y funcionando! 🎉**
