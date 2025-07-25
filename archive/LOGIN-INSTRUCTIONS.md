# 🔐 Cómo hacer Login como Super Admin

## 🚀 **Método Rápido - Crear cuenta manual**

### **Paso 1: Registrarte temporalmente**
1. Ve a: `http://localhost:3000/auth/signup`
2. Usar email: `luis@aqxion.com`
3. Usar password: `tu_password_segura`
4. Crear la cuenta

### **Paso 2: Configurar permisos de super admin**
Ejecuta este SQL en Supabase Dashboard → SQL Editor:

```sql
-- 1. Crear tabla super_admins
CREATE TABLE IF NOT EXISTS super_admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Agregar luis@aqxion.com como super admin
INSERT INTO super_admins (email) 
VALUES ('luis@aqxion.com')
ON CONFLICT (email) DO NOTHING;

-- 3. Crear función de verificación
CREATE OR REPLACE FUNCTION is_super_admin(check_email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM super_admins 
    WHERE email = check_email AND is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Configurar políticas RLS para super admin
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Super admins pueden ver todos los perfiles
CREATE POLICY IF NOT EXISTS "super_admins_can_view_all_profiles" ON user_profiles
FOR SELECT USING (is_super_admin(auth.jwt() ->> 'email'));

-- Super admins pueden insertar perfiles
CREATE POLICY IF NOT EXISTS "super_admins_can_insert_profiles" ON user_profiles  
FOR INSERT WITH CHECK (is_super_admin(auth.jwt() ->> 'email'));

-- Super admins pueden actualizar perfiles
CREATE POLICY IF NOT EXISTS "super_admins_can_update_profiles" ON user_profiles
FOR UPDATE USING (is_super_admin(auth.jwt() ->> 'email'));

-- Super admins pueden eliminar perfiles  
CREATE POLICY IF NOT EXISTS "super_admins_can_delete_profiles" ON user_profiles
FOR DELETE USING (is_super_admin(auth.jwt() ->> 'email'));

-- Usuarios normales solo ven su propio perfil
CREATE POLICY IF NOT EXISTS "users_can_view_own_profile" ON user_profiles
FOR SELECT USING (auth.uid() = id);

CREATE POLICY IF NOT EXISTS "users_can_update_own_profile" ON user_profiles  
FOR UPDATE USING (auth.uid() = id);
```

## 🔧 **Configuración de variables de entorno**

Crea/actualiza tu archivo `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_aqui

# NextAuth (si lo usas)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_secret_aqui
```

## 📱 **Cómo acceder después:**

1. **Inicia el servidor**: `npm run dev`
2. **Ve a login**: `http://localhost:3000/auth/signin`
3. **Credenciales**:
   - Email: `luis@aqxion.com`
   - Password: `[la que usaste al registrarte]`
4. **Ve al portal**: `http://localhost:3000/portal`
5. **Busca la sección**: "Gestión de Usuarios" (solo visible para ti)

## 🛡️ **Verificar que funciona:**

Después de hacer login, deberías ver:
- ✅ Dashboard normal
- ✅ Sección adicional "Gestión de Usuarios" 
- ✅ Botón para crear nuevos usuarios
- ✅ Lista de usuarios existentes

## 🚨 **Si no ves la sección de usuarios:**

1. Verifica que el SQL se ejecutó correctamente
2. Verifica que `luis@aqxion.com` esté en la tabla `super_admins`
3. Haz logout y login nuevamente
4. Revisa la consola del navegador para errores

## 🎯 **Una vez que funcione:**

Podrás crear usuarios para tus clientes desde la interfaz, sin que ellos tengan acceso al registro público.

---

**¿Todo listo? ¡Inicia con el registro manual y luego configuramos Supabase!** 🚀
