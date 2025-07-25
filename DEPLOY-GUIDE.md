# 🚀 DEPLOY GUIDE: app.aqxion.com

## 📋 Checklist Pre-Deploy

### 1. Variables de Entorno para Producción

```env
# PRODUCTION - app.aqxion.com
NEXTAUTH_URL=https://app.aqxion.com
NEXTAUTH_SECRET=super_secure_secret_change_in_production_xyz789abc123

# Base de datos (PostgreSQL en producción)
DATABASE_URL="postgresql://username:password@host:5432/dbname"

# Google OAuth (opcional)
GOOGLE_CLIENT_ID=your_google_client_id_for_production
GOOGLE_CLIENT_SECRET=your_google_client_secret_for_production

# URLs públicas
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxyXFlpt_bTk-JRdd66UKg3ZK7iSwboB56QiZbB6zRLbE82-SE3CLeSGhN0iVPPzwt2/exec
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/luis-aqxion/30min
NOTIFICATION_EMAIL=deal@aqxion.com

# Analytics
NEXT_PUBLIC_GTM_ID=GTM-TGD5LDTN

NODE_ENV=production
```

## 🌐 Opciones de Deploy

### Opción 1: Vercel (Recomendado - Más Rápido)
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# 4. Configurar dominio custom
vercel domains add app.aqxion.com
```

### Opción 2: DigitalOcean App Platform
```bash
# 1. Push a GitHub
git add .
git commit -m "Production ready for app.aqxion.com"
git push origin main

# 2. Conectar repo en DigitalOcean
# 3. Configurar variables de entorno
# 4. Deploy automático
```

### Opción 3: Netlify
```bash
# 1. Build estático
npm run build
npm run export

# 2. Deploy carpeta out/
netlify deploy --prod --dir=out
```

## 🔧 Configuración DNS

### En tu proveedor DNS (ej. Cloudflare):
```
Tipo: CNAME
Nombre: app
Valor: cname.vercel-dns.com (si usas Vercel)
TTL: Auto
```

## 📊 Monitoreo Post-Deploy

### 1. Verificar URLs:
- https://app.aqxion.com
- https://app.aqxion.com/portal/dashboard
- https://app.aqxion.com/auth/signin

### 2. Testing Credenciales Demo:
- Email: demo@cliente.com
- Password: demo123

### 3. Performance:
- Lighthouse score > 90
- Core Web Vitals verdes
- HTTPS funcionando

## 🚨 Troubleshooting Común

### Error: "Invalid credentials"
- Verificar NEXTAUTH_SECRET en producción
- Confirmar NEXTAUTH_URL correcto

### Error: Database connection
- Verificar DATABASE_URL
- Ejecutar `npx prisma migrate deploy`

### Error: 404 en rutas
- Verificar build exitoso
- Confirmar App Router configurado
