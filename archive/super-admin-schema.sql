-- SQL adicional para sistema de super admin
-- Ejecuta esto en el SQL Editor de Supabase

-- Tabla para definir super admins
CREATE TABLE IF NOT EXISTS super_admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insertar tu email como super admin
INSERT INTO super_admins (email) VALUES ('luis@aqxion.com') ON CONFLICT (email) DO NOTHING;

-- Función para verificar si un usuario es super admin
CREATE OR REPLACE FUNCTION is_super_admin(user_email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM super_admins WHERE email = user_email
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Política para que super admins puedan ver todos los perfiles
CREATE POLICY "Super admins can view all profiles" ON user_profiles
  FOR SELECT USING (
    is_super_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
  );

-- Política para que super admins puedan crear/editar perfiles
CREATE POLICY "Super admins can manage all profiles" ON user_profiles
  FOR ALL USING (
    is_super_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
  );

-- Políticas similares para todas las tablas (para acceso de super admin)
CREATE POLICY "Super admins can view all contacts" ON contacts
  FOR SELECT USING (
    is_super_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
  );

CREATE POLICY "Super admins can view all events" ON calendar_events
  FOR SELECT USING (
    is_super_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
  );

CREATE POLICY "Super admins can view all tasks" ON tasks
  FOR SELECT USING (
    is_super_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
  );

CREATE POLICY "Super admins can view all activities" ON activities
  FOR SELECT USING (
    is_super_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
  );

CREATE POLICY "Super admins can view all metrics" ON metrics
  FOR SELECT USING (
    is_super_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
  );
