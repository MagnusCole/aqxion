-- ==========================================
-- AUDITORÍA COMPLETA DE BASE DE DATOS AQXION
-- Ejecutar este script en Supabase SQL Editor
-- ==========================================

-- 1. VERIFICAR TABLAS EXISTENTES
SELECT 
  schemaname,
  tablename,
  tableowner,
  hasindexes,
  hasrules,
  hastriggers
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY tablename;

-- 2. VERIFICAR COLUMNAS DE CADA TABLA
SELECT 
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_schema = 'public'
ORDER BY table_name, ordinal_position;

-- 3. VERIFICAR CONSTRAINTS (FOREIGN KEYS, CHECKS, etc.)
SELECT 
  tc.table_name,
  tc.constraint_name,
  tc.constraint_type,
  kcu.column_name,
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints tc
LEFT JOIN information_schema.key_column_usage kcu
  ON tc.constraint_name = kcu.constraint_name
  AND tc.table_schema = kcu.table_schema
LEFT JOIN information_schema.constraint_column_usage ccu
  ON ccu.constraint_name = tc.constraint_name
  AND ccu.table_schema = tc.table_schema
WHERE tc.table_schema = 'public'
ORDER BY tc.table_name, tc.constraint_type;

-- 4. VERIFICAR POLÍTICAS RLS
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- 5. VERIFICAR RLS HABILITADO
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY tablename;

-- 6. VERIFICAR ÍNDICES
SELECT 
  schemaname,
  tablename,
  indexname,
  indexdef
FROM pg_indexes
WHERE schemaname = 'public'
ORDER BY tablename, indexname;

-- 7. VERIFICAR FUNCIONES PERSONALIZADAS
SELECT 
  routine_name,
  routine_type,
  data_type as return_type,
  routine_definition
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_type = 'FUNCTION'
ORDER BY routine_name;

-- 8. VERIFICAR TRIGGERS
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table,
  action_statement,
  action_timing
FROM information_schema.triggers
WHERE trigger_schema = 'public'
ORDER BY event_object_table, trigger_name;

-- 9. VERIFICAR USUARIOS EXISTENTES EN auth.users
SELECT 
  id,
  email,
  created_at,
  email_confirmed_at,
  last_sign_in_at
FROM auth.users
ORDER BY created_at DESC;

-- 10. VERIFICAR SUPER ADMINS
SELECT 
  email,
  created_at
FROM super_admins
ORDER BY created_at;

-- 11. VERIFICAR user_profiles
SELECT 
  up.email,
  up.business_name,
  up.industry,
  up.lima_district,
  up.created_at,
  u.email_confirmed_at
FROM user_profiles up
LEFT JOIN auth.users u ON up.id = u.id
ORDER BY up.created_at DESC;

-- 12. CONTAR REGISTROS EN CADA TABLA
SELECT 
  'user_profiles' as tabla,
  COUNT(*) as total_registros
FROM user_profiles
UNION ALL
SELECT 
  'leads' as tabla,
  COUNT(*) as total_registros
FROM leads
UNION ALL
SELECT 
  'metrics' as tabla,
  COUNT(*) as total_registros
FROM metrics
UNION ALL
SELECT 
  'tasks' as tabla,
  COUNT(*) as total_registros
FROM tasks
UNION ALL
SELECT 
  'support_tickets' as tabla,
  COUNT(*) as total_registros
FROM support_tickets;

-- 13. VERIFICAR INTEGRIDAD REFERENCIAL
-- Usuarios sin perfil
SELECT 
  u.id,
  u.email,
  'Sin perfil en user_profiles' as issue
FROM auth.users u
LEFT JOIN user_profiles up ON u.id = up.id
WHERE up.id IS NULL;

-- Perfiles sin usuario en auth
SELECT 
  up.id,
  up.email,
  'Perfil sin usuario en auth.users' as issue
FROM user_profiles up
LEFT JOIN auth.users u ON up.id = u.id
WHERE u.id IS NULL;

-- 14. VERIFICAR PERMISOS Y ACCESOS
-- Probar si el usuario actual puede acceder a las tablas
SELECT 
  'user_profiles' as tabla,
  CASE 
    WHEN COUNT(*) >= 0 THEN 'Acceso OK'
    ELSE 'Sin acceso'
  END as resultado
FROM user_profiles
UNION ALL
SELECT 
  'leads' as tabla,
  CASE 
    WHEN COUNT(*) >= 0 THEN 'Acceso OK'
    ELSE 'Sin acceso'
  END as resultado
FROM leads
UNION ALL
SELECT 
  'super_admins' as tabla,
  CASE 
    WHEN COUNT(*) >= 0 THEN 'Acceso OK'
    ELSE 'Sin acceso'
  END as resultado
FROM super_admins;

-- 15. ESTADO GENERAL DEL SISTEMA
SELECT 
  'Database Status' as component,
  'Connected' as status,
  NOW() as timestamp
UNION ALL
SELECT 
  'RLS Security' as component,
  CASE 
    WHEN COUNT(*) > 0 THEN 'Enabled on ' || COUNT(*) || ' tables'
    ELSE 'Not configured'
  END as status,
  NOW() as timestamp
FROM pg_tables 
WHERE schemaname = 'public' AND rowsecurity = true
UNION ALL
SELECT 
  'Policies Count' as component,
  COUNT(*)::text || ' policies active' as status,
  NOW() as timestamp
FROM pg_policies
WHERE schemaname = 'public';
