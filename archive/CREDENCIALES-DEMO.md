# 🔐 Sistema de Credenciales Demo - AQXION

## 📋 Credenciales Demo

Para probar el sistema completo, tanto en desarrollo como en producción (Vercel), usa estas credenciales:

```
Email: demo@cliente.com
Password: demo123
```

## 🎯 Perfil del Usuario Demo

- **Nombre:** Juan Mendoza
- **Negocio:** Restaurante Sabor Limeño
- **Tipo:** Restaurante
- **Teléfono:** +51 999 123 456
- **Estado:** Cliente activo con 45% progreso

## ✅ ¿Cómo Funciona?

### En Desarrollo Local
1. Las credenciales están hardcodeadas en `src/lib/auth.ts`
2. No requiere base de datos para el usuario demo
3. Funciona inmediatamente sin setup adicional

### En Producción (Vercel)
1. Las mismas credenciales funcionan sin configuración extra
2. Se bypasa la autenticación de base de datos para el usuario demo
3. Retorna información mockeada del perfil de negocio

## 🛠️ Implementación Técnica

### Backend (src/lib/auth.ts)
```typescript
// Credenciales demo que funcionan en cualquier entorno
if (credentials.email === 'demo@cliente.com' && credentials.password === 'demo123') {
  return {
    id: 'demo-user-1',
    email: 'demo@cliente.com',
    name: 'Juan Mendoza',
    businessName: 'Restaurante Sabor Limeño',
    businessType: 'Restaurante',
    phone: '+51 999 123 456'
  }
}
```

### Frontend (src/app/auth/signin/page.tsx)
- Sección verde con credenciales visibles
- Botón "Usar Credenciales Demo" que auto-completa el formulario
- Indicador visual de "Acceso Demo Activo"

## 📊 Datos Demo en el Portal

El usuario demo tiene acceso completo a:

### 🏠 Dashboard
- Métricas realistas de negocio
- Progreso del programa (45%)
- Actividades recientes

### ⚙️ Setup
- Configuración de Google My Business
- Setup de Google Ads
- Configuración de Meta Ads

### 📅 Calendario
- Eventos de contenido programados
- Estadísticas de posts
- Sincronización con Google Calendar (simulada)

### 👥 CRM
- Lista de leads con datos realistas
- Estadísticas de conversión
- Descarga de datos (simulada)

### 💬 WhatsApp
- Mensajes automatizados
- Plantillas de respuesta
- Estadísticas de automatización

### 🎁 Recursos
- Bonos y herramientas
- Documentación
- Materiales descargables

### 🆘 Soporte
- Comunidad WhatsApp (127 miembros)
- Soporte personal (+51 999 123 456)
- Sistema de tickets

## 🚀 Para Clientes Reales

Para el onboarding de clientes reales:

1. **Registro normal** - Crean cuenta con email/password
2. **Autenticación con BD** - Se valida contra Prisma
3. **Datos reales** - Métricas conectadas con APIs reales
4. **Setup personalizado** - Configuración específica por cliente

## 🔧 Troubleshooting

### ❌ Si las credenciales demo no funcionan:

1. **Verificar el código:**
   ```bash
   # Buscar la implementación
   grep -r "demo@cliente.com" src/
   ```

2. **Logs de autenticación:**
   - En desarrollo: Check console.log en auth.ts
   - En producción: Check Vercel function logs

3. **Fallback:**
   - Si falla el demo, usar Google Auth como backup
   - Las APIs mock funcionan independientemente

### ✅ Verificación rápida:

1. Ir a `/auth/signin`
2. Ver sección verde "Acceso Demo Activo"
3. Click "Usar Credenciales Demo"
4. Submit form
5. Debe redirigir a `/portal/dashboard`

## 📝 Notas para Desarrollo

- Las credenciales demo están en **plaintext** por diseño
- Son **públicas** y **solo para demostración**
- No comprometen seguridad porque no acceden a datos reales
- Se mantienen **consistentes** entre todos los entornos

## 🎯 Próximos Pasos

1. **Monitorear uso** - Analytics de accesos demo
2. **Expandir datos** - Más contenido realista
3. **A/B Testing** - Diferentes versiones del demo
4. **Onboarding** - Guía interactiva para nuevos usuarios

---

*Última actualización: Enero 2025*
