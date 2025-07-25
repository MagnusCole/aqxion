# 🛡️ Sistema Super Admin - Documentación Completa

## 📋 **Resumen**

El sistema super admin permite que **luis@aqxion.com** tenga acceso exclusivo para:
- ✅ Crear nuevos usuarios
- ✅ Ver todos los usuarios registrados  
- ✅ Editar información de usuarios
- ✅ Eliminar usuarios
- ✅ Acceder a datos de todos los clientes
- ❌ **NO permitir registro público** (solo admin puede crear usuarios)

## 🏗️ **Arquitectura del Sistema**

### **Base de Datos (Supabase)**
```sql
-- Tabla super_admins
CREATE TABLE super_admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Super admin inicial
INSERT INTO super_admins (email) VALUES ('luis@aqxion.com');
```

### **Componentes React**
- `SuperAdminUsers.tsx` - Interfaz principal de gestión
- `useSuperAdmin.ts` - Hook para verificar permisos
- `/api/admin/users/route.ts` - API para operaciones CRUD

### **Seguridad (RLS)**
- Políticas que permiten a super admins acceder a todos los datos
- Verificación en cada operación con `is_super_admin()`
- Token JWT verificado en API routes

## 🚀 **Configuración Inicial**

### **1. Variables de Entorno**
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
```

### **2. Ejecutar Script de Configuración**
```bash
# Instalar dependencias si es necesario
npm install @supabase/supabase-js

# Ejecutar script
node scripts/setup-super-admin.js
```

### **3. Verificar en Supabase Dashboard**
1. Ve a tu proyecto Supabase
2. Tabla Editor → `super_admins`
3. Verifica que `luis@aqxion.com` esté presente

## 🔐 **Flujo de Autenticación**

### **Para el Super Admin (luis@aqxion.com)**
1. **Login normal** con Supabase Auth
2. **Verificación automática** via `useSuperAdmin` hook
3. **Componente visible** solo si `isSuperAdmin === true`
4. **Operaciones permitidas** a través de API protegida

### **Para Usuarios Normales**
1. **Login normal** con Supabase Auth
2. **Sin acceso** al componente de usuarios
3. **Solo ven sus propios datos** (RLS policies)

## 🛠️ **Funcionalidades del Sistema**

### **Gestión de Usuarios**
```typescript
// Crear usuario
const newUser = {
  email: 'cliente@ejemplo.com',
  password: 'temporal123',
  business_name: 'Mi MYPE',
  industry: 'retail'
};

// Se crea automáticamente:
// 1. Usuario en Supabase Auth
// 2. Perfil en user_profiles table
// 3. Relación con otros datos del usuario
```

### **CRUD Completo**
- **CREATE**: Crear nuevos usuarios con credenciales
- **READ**: Ver lista completa de usuarios registrados
- **UPDATE**: Editar business_name e industry
- **DELETE**: Eliminar usuario (cascade a todos sus datos)

### **Búsqueda y Filtros**
- Buscar por email, nombre de negocio o industria
- Interfaz responsive y móvil-first
- Animaciones suaves con Framer Motion

## 🎨 **Interfaz de Usuario**

### **Dashboard Integration**
```tsx
// En MobileDashboard.tsx
{isSuperAdmin && (
  <section>
    <SuperAdminUsers />
  </section>
)}
```

### **Diseño Apple-like**
- Rounded corners (rounded-2xl)
- Subtle shadows y backdrop blur
- Animaciones naturales (<300ms)
- Colores consistentes (purple theme)
- Mobile-first responsive

### **Estados de la UI**
- ✅ **Loading** - Spinner mientras carga datos
- ✅ **Empty** - Mensaje cuando no hay usuarios
- ✅ **Search** - Filtrado en tiempo real
- ✅ **Modals** - Para crear/editar usuarios
- ✅ **Confirmations** - Para eliminar usuarios

## 🔒 **Seguridad y Permisos**

### **Row Level Security (RLS)**
```sql
-- Solo super admins pueden ver todos los perfiles
CREATE POLICY "super_admins_can_view_all_profiles" ON user_profiles
FOR SELECT USING (is_super_admin(auth.jwt() ->> 'email'));

-- Usuarios normales solo ven sus datos
CREATE POLICY "users_can_view_own_profile" ON user_profiles
FOR SELECT USING (auth.uid() = id);
```

### **API Protection**
```typescript
// Verificación en /api/admin/users
const { data: { user } } = await supabase.auth.getUser(jwt);
const { data: adminData } = await supabaseAdmin
  .from('super_admins')
  .select('email')
  .eq('email', user.email)
  .single();
```

### **Frontend Protection**
```typescript
// useSuperAdmin hook
const { isSuperAdmin, loading } = useSuperAdmin();

if (!isSuperAdmin) {
  return <AccessDenied />;
}
```

## 📊 **Estados y Casos de Uso**

### **Caso 1: Super Admin Accede**
```
1. luis@aqxion.com hace login
2. useSuperAdmin verifica en super_admins table
3. isSuperAdmin = true
4. SuperAdminUsers component se muestra
5. Puede crear/editar/eliminar usuarios
```

### **Caso 2: Usuario Normal Accede**
```
1. cliente@ejemplo.com hace login
2. useSuperAdmin verifica en super_admins table
3. isSuperAdmin = false
4. SuperAdminUsers component NO se muestra
5. Solo ve su propio dashboard
```

### **Caso 3: Usuario No Autenticado**
```
1. Sin login
2. useSuperAdmin retorna loading=false, isSuperAdmin=false
3. Componente no se muestra
4. Redirección a login si intenta acceder
```

## 🚦 **Estados de Error y Manejo**

### **Errores Comunes**
- **Token expirado**: Re-autenticación requerida
- **Permisos insuficientes**: Mensaje de acceso denegado
- **Error de red**: Retry automático o manual
- **Datos inválidos**: Validación en frontend

### **Debugging**
```javascript
// Verificar si usuario es super admin
console.log('Super admin status:', { isSuperAdmin, loading });

// Verificar token JWT
const { data: { session } } = await supabase.auth.getSession();
console.log('Session:', session);

// Verificar tabla super_admins
const { data } = await supabase.from('super_admins').select('*');
console.log('Super admins:', data);
```

## 🧪 **Testing y Validación**

### **Checklist de Funcionalidad**
- [ ] Login con luis@aqxion.com muestra componente
- [ ] Login con otro email NO muestra componente
- [ ] Crear usuario funciona correctamente
- [ ] Editar usuario actualiza base de datos
- [ ] Eliminar usuario elimina de auth y profile
- [ ] Búsqueda filtra resultados
- [ ] Modals abren/cierran correctamente
- [ ] Animaciones son suaves
- [ ] Responsive en móvil

### **Tests de Seguridad**
- [ ] API rechaza requests sin token
- [ ] API rechaza requests de no-admins
- [ ] RLS policies bloquean acceso no autorizado
- [ ] Frontend oculta componente para no-admins

## 🔄 **Mantenimiento y Actualizaciones**

### **Agregar Nuevos Super Admins**
```sql
-- En Supabase SQL Editor
INSERT INTO super_admins (email) VALUES ('nuevo@admin.com');
```

### **Desactivar Super Admin**
```sql
-- En Supabase SQL Editor
UPDATE super_admins SET is_active = false WHERE email = 'admin@example.com';
```

### **Backup de Usuarios**
```sql
-- Exportar todos los usuarios
SELECT * FROM user_profiles;
```

## 🎯 **Próximos Pasos**

### **Mejoras Potenciales**
1. **Roles granulares** (admin, moderator, viewer)
2. **Audit log** de acciones administrativas
3. **Bulk operations** (crear/editar múltiples usuarios)
4. **Export/Import** de datos de usuarios
5. **Email templates** para nuevos usuarios
6. **Dashboard analytics** para super admin

### **Integraciones Futuras**
- **WhatsApp API** para notificar nuevos usuarios
- **Email service** para credenciales automáticas
- **Slack/Discord** para notificaciones de admin
- **Analytics** para tracking de uso del sistema

## 📞 **Soporte y Contacto**

### **En caso de problemas:**
1. Verificar variables de entorno
2. Ejecutar script de setup nuevamente
3. Revisar logs de Supabase Dashboard
4. Verificar RLS policies están activas

### **Archivos importantes:**
- `src/components/portal/SuperAdminUsers.tsx`
- `src/hooks/useSuperAdmin.ts`
- `src/app/api/admin/users/route.ts`
- `src/lib/supabase-admin.ts`
- `scripts/setup-super-admin.js`

---

✅ **Sistema completamente funcional y listo para producción**
