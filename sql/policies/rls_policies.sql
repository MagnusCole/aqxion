-- ==========================================
-- MIGRATION 002: Políticas RLS de Seguridad
-- Fecha: 2025-07-25
-- Descripción: Implementa Row Level Security para todas las tablas
-- ==========================================

-- 1. POLÍTICAS PARA user_profiles
-- Los usuarios pueden ver y editar solo su propio perfil
CREATE POLICY "Users can view own profile" 
ON user_profiles FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
ON user_profiles FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
ON user_profiles FOR INSERT 
WITH CHECK (auth.uid() = id);

-- 2. POLÍTICAS PARA leads
-- Los usuarios pueden gestionar solo sus propios leads
CREATE POLICY "Users can view own leads" 
ON leads FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own leads" 
ON leads FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own leads" 
ON leads FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own leads" 
ON leads FOR DELETE 
USING (auth.uid() = user_id);

-- 3. POLÍTICAS PARA metrics
-- Los usuarios pueden ver solo sus propias métricas
CREATE POLICY "Users can view own metrics" 
ON metrics FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update own metrics" 
ON metrics FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own metrics" 
ON metrics FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- 4. POLÍTICAS PARA tasks
-- Los usuarios pueden gestionar solo sus propias tareas
CREATE POLICY "Users can view own tasks" 
ON tasks FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tasks" 
ON tasks FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks" 
ON tasks FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasks" 
ON tasks FOR DELETE 
USING (auth.uid() = user_id);

-- 5. POLÍTICAS PARA support_tickets
-- Los usuarios pueden ver y crear solo sus propios tickets
CREATE POLICY "Users can view own tickets" 
ON support_tickets FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tickets" 
ON support_tickets FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tickets" 
ON support_tickets FOR UPDATE 
USING (auth.uid() = user_id);

-- 6. POLÍTICAS PARA content_calendar
-- Los usuarios pueden gestionar solo su propio contenido
CREATE POLICY "Users can view own content" 
ON content_calendar FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own content" 
ON content_calendar FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own content" 
ON content_calendar FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own content" 
ON content_calendar FOR DELETE 
USING (auth.uid() = user_id);

-- 7. POLÍTICAS PARA SUPER ADMINS
-- Los super admins pueden acceder a todo
CREATE POLICY "Super admins have full access to user_profiles" 
ON user_profiles FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM super_admins 
    WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
  )
);

CREATE POLICY "Super admins have full access to leads" 
ON leads FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM super_admins 
    WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
  )
);

CREATE POLICY "Super admins have full access to metrics" 
ON metrics FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM super_admins 
    WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
  )
);

CREATE POLICY "Super admins have full access to tasks" 
ON tasks FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM super_admins 
    WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
  )
);

CREATE POLICY "Super admins have full access to support_tickets" 
ON support_tickets FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM super_admins 
    WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
  )
);

CREATE POLICY "Super admins have full access to content_calendar" 
ON content_calendar FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM super_admins 
    WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
  )
);
