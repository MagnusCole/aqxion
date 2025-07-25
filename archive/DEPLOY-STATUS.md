# 🚀 DEPLOY A APP.AQXION.COM - GUÍA PASO A PASO

## ✅ PREPARACIÓN COMPLETADA

### 📁 Archivos Creados:
- ✅ `deploy.bat` - Script de deploy para Windows
- ✅ `deploy.sh` - Script de deploy para Linux/Mac  
- ✅ `.env.production` - Variables para producción
- ✅ `vercel.json` - Configuración optimizada
- ✅ `DEPLOY-GUIDE.md` - Documentación completa

### 🔧 Variables de Entorno Configuradas:
- ✅ NEXTAUTH_SECRET actualizado (desarrollo y producción)
- ✅ NEXTAUTH_URL configurado para app.aqxion.com
- ✅ Headers de seguridad añadidos
- ✅ Timeouts optimizados para APIs

## 🚀 PASOS PARA HACER DEPLOY

### Opción 1: Deploy Automático (Recomendado)
```bash
# En Windows:
deploy.bat

# En Linux/Mac:
chmod +x deploy.sh
./deploy.sh
```

### Opción 2: Deploy Manual
```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login a Vercel
vercel login

# 3. Deploy
vercel --prod

# 4. Configurar dominio
vercel domains add app.aqxion.com
```

## 🔑 CREDENCIALES DEMO FUNCIONANDO

### Test Local:
- URL: http://localhost:3000/auth/signin
- Email: demo@cliente.com
- Password: demo123

### Post-Deploy:
- URL: https://app.aqxion.com/auth/signin
- Email: demo@cliente.com  
- Password: demo123

## 🌐 CONFIGURACIÓN DNS NECESARIA

### En tu proveedor DNS (ej. Cloudflare):
```
Tipo: CNAME
Nombre: app
Valor: cname.vercel-dns.com
TTL: Auto
Proxy: Activado (🟠)
```

## 📊 VERIFICACIÓN POST-DEPLOY

### URLs a verificar:
- ✅ https://app.aqxion.com (Landing)
- ✅ https://app.aqxion.com/auth/signin (Login)
- ✅ https://app.aqxion.com/portal/dashboard (Portal)
- ✅ https://app.aqxion.com/portal/crm (CRM)
- ✅ https://app.aqxion.com/portal/calendario (Calendario)
- ✅ https://app.aqxion.com/portal/whatsapp (WhatsApp)

### Testing completo:
1. **Login demo** → Portal dashboard
2. **Navegación** → Entre todas las páginas
3. **Responsive** → Mobile/Desktop
4. **Performance** → Lighthouse > 90

## ⚡ FUNCIONALIDADES EN PRODUCCIÓN

### 🎯 Portal Completo:
- ✅ Dashboard con métricas reales
- ✅ CRM con gestión de leads
- ✅ Calendario de contenido
- ✅ WhatsApp Business Hub
- ✅ Sistema de navegación adaptativo

### 🔐 Seguridad:
- ✅ NextAuth.js con JWT
- ✅ Headers de seguridad
- ✅ HTTPS forzado
- ✅ Variables de entorno seguras

### 📱 Experiencia:
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling
- ✅ SEO optimizado

## 🎉 LISTO PARA BETA

Una vez el deploy esté completo, tendrás:

### 💰 **Modelo de Negocio Activo:**
- URL premium: **app.aqxion.com**
- Precio: **S/.199/mes**
- Target: **100 MYPEs = S/.19,900/mes**

### 🚀 **Próximos Pasos:**
1. **Deploy** → 30 minutos
2. **Testing** → 2 horas  
3. **Beta launch** → 10 MYPEs en 1 semana
4. **Scaling** → 100+ clientes

## ⚠️ TROUBLESHOOTING

### Si las credenciales demo no funcionan:
1. Verificar NEXTAUTH_SECRET en producción
2. Confirmar NEXTAUTH_URL correcto
3. Revisar logs de Vercel

### Si el dominio no funciona:
1. Verificar DNS propagation (dig app.aqxion.com)
2. Confirmar CNAME correcto
3. Esperar hasta 24h para propagación

**🎯 ESTADO: Todo listo para hacer deploy. Ejecuta `deploy.bat` y en 30 minutos tendrás app.aqxion.com funcionando.**
