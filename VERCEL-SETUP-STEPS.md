# 🎯 PASOS ESPECÍFICOS PARA CONFIGURAR app.aqxion.com

## 1. 🌐 En Vercel Dashboard

### Ir a Configuración de Dominios:
1. **Abrir**: https://vercel.com/magnuscoles-projects/aqxion
2. **Clic en**: "Settings" (en la barra superior)
3. **Clic en**: "Domains" (en el menú lateral)

### Agregar Nuevo Dominio:
4. **Clic en**: "Add Domain" o "Add"
5. **Escribir**: `app.aqxion.com`
6. **Clic en**: "Add"

## 2. 📋 Configurar DNS

### Vercel te mostrará las instrucciones DNS:
```
Tipo: CNAME
Nombre: app
Valor: cname.vercel-dns.com
```

### En tu proveedor DNS (ej. Cloudflare, GoDaddy, etc.):
1. **Ir a**: Panel de DNS de aqxion.com
2. **Agregar registro**:
   - **Tipo**: CNAME
   - **Nombre**: app
   - **Destino**: cname.vercel-dns.com
   - **TTL**: Auto o 300 segundos

## 3. ⚙️ Variables de Entorno

### En Vercel Dashboard > Settings > Environment Variables:

**Agregar estas variables para Production:**

```env
NEXTAUTH_URL
Valor: https://app.aqxion.com

NEXTAUTH_SECRET
Valor: aqx_prod_secret_2025_ultra_secure_xyz789abc123def456

NODE_ENV
Valor: production
```

### ¿Cómo agregar variables?
1. **Clic en**: "Environment Variables"
2. **Para cada variable**:
   - Name: `NEXTAUTH_URL`
   - Value: `https://app.aqxion.com`
   - Environment: Seleccionar **"Production"**
   - **Clic en**: "Save"

## 4. 🚀 Verificar Deploy

### Después de configurar DNS (puede tardar 5-30 minutos):
- ✅ https://app.aqxion.com
- ✅ https://app.aqxion.com/auth/signin
- ✅ https://app.aqxion.com/portal/dashboard

### Credenciales Demo:
- **Email**: demo@cliente.com
- **Password**: demo123

## 🎯 Resultado Final

**Tendrás dos URLs funcionando:**
- **www.aqxion.com** → Landing page para atraer clientes
- **app.aqxion.com** → Portal premium para clientes (S/.199/mes)

---

**🚀 Comenzar con el Paso 1: Ir a Vercel Dashboard y agregar dominio**
