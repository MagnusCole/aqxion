# 🌐 CONFIGURACIÓN DE SUBDOMINIO app.aqxion.com

## 📋 Pasos para Configurar en Vercel

### 1. **Acceder al Dashboard de Vercel:**
- Ve a: https://vercel.com/magnuscoles-projects/aqxion
- Busca la sección "Domains" o "Custom Domains"

### 2. **Agregar Dominio Custom:**
```
Domain: app.aqxion.com
```

### 3. **Configurar DNS (en tu proveedor DNS):**

#### Si usas Cloudflare:
```
Tipo: CNAME
Nombre: app
Valor: cname.vercel-dns.com
TTL: Auto
Proxy Status: DNS only (gris) - IMPORTANTE
```

#### Si usas otro proveedor DNS:
```
Tipo: CNAME
Nombre: app
Valor: cname.vercel-dns.com
TTL: 300 (5 minutos)
```

## 🔧 Variables de Entorno para Producción

### En Vercel Dashboard > Settings > Environment Variables:

```env
NEXTAUTH_URL=https://app.aqxion.com
NEXTAUTH_SECRET=aqx_prod_secret_2025_ultra_secure_xyz789abc123def456
NODE_ENV=production

# Opcional - Si tienes Google OAuth:
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret

# URLs públicas (ya existentes):
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxyXFlpt_bTk-JRdd66UKg3ZK7iSwboB56QiZbB6zRLbE82-SE3CLeSGhN0iVPPzwt2/exec
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/luis-aqxion/30min
NOTIFICATION_EMAIL=deal@aqxion.com
NEXT_PUBLIC_GTM_ID=GTM-TGD5LDTN
```

## ⚡ Comando CLI Alternativo (si tienes Vercel CLI):

```bash
# 1. Login a Vercel
vercel login

# 2. Agregar dominio
vercel domains add app.aqxion.com --project=aqxion

# 3. Configurar variables de entorno
vercel env add NEXTAUTH_URL production
# Valor: https://app.aqxion.com

vercel env add NEXTAUTH_SECRET production
# Valor: aqx_prod_secret_2025_ultra_secure_xyz789abc123def456
```

## 🚦 Verificación Post-Deploy

### 1. URLs a probar:
- ✅ https://app.aqxion.com
- ✅ https://app.aqxion.com/auth/signin
- ✅ https://app.aqxion.com/portal/dashboard
- ✅ https://app.aqxion.com/portal/crm
- ✅ https://app.aqxion.com/portal/calendario
- ✅ https://app.aqxion.com/portal/whatsapp

### 2. Credenciales Demo:
- Email: demo@cliente.com
- Password: demo123

### 3. Funcionalidades:
- ✅ Login funcionando
- ✅ Navegación completa visible
- ✅ Todas las páginas cargando
- ✅ Datos demo mostrándose

## 🎯 Resultado Esperado

**Una vez configurado:**
- 🌐 **URL Premium**: https://app.aqxion.com
- 💼 **Portal Completo**: CRM + Calendario + WhatsApp  
- 🔑 **Demo Funcional**: Listo para mostrar a clientes
- 💰 **Modelo S/.199/mes**: Justificado con funcionalidades premium

## ⚠️ Troubleshooting

### Si el dominio no resuelve:
1. Verificar configuración DNS (puede tardar hasta 24h)
2. Usar `nslookup app.aqxion.com` para verificar

### Si hay errores 500:
1. Verificar variables de entorno en Vercel
2. Revisar logs en Vercel Dashboard > Functions

### Si las credenciales demo no funcionan:
1. Verificar NEXTAUTH_SECRET en producción
2. Confirmar NEXTAUTH_URL = https://app.aqxion.com

---

**🎉 Una vez completado, tendrás app.aqxion.com funcionando con el portal completo!**
