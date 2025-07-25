-- ==========================================
-- AUDITORÍA COMPLETA DE BASE DE DATOS AQXION
-- Ejecutar en SQL Editor de Supabase Dashboard
-- ==========================================

-- ⚡ REPORTE DE AUDITORÍA
SELECT '========================================' as "AUDITORÍA AQXION";
SELECT 'Fecha: ' || CURRENT_TIMESTAMP as "TIMESTAMP";
SELECT '========================================' as "SEPARADOR";

-- 📊 1. VERIFICAR TABLAS EXISTENTES
SELECT '1. VERIFICACIÓN DE TABLAS' as "SECCIÓN";
SELECT 
  schemaname,
  tablename,
  CASE 
    WHEN tablename IN ('user_profiles', 'leads', 'metrics', 'tasks', 'support_tickets') 
    THEN '✅ REQUERIDA'
    WHEN tablename IN ('super_admins', 'users')
    THEN '✅ EXISTENTE'
    ELSE '❓ ADICIONAL'
  END as status
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY tablename;

-- 🔒 2. VERIFICAR ROW LEVEL SECURITY
SELECT '2. VERIFICACIÓN RLS (ROW LEVEL SECURITY)' as "SECCIÓN";
SELECT 
  schemaname,
  tablename,
  CASE 
    WHEN rowsecurity THEN '✅ RLS HABILITADO'
    ELSE '❌ RLS DESHABILITADO'
  END as rls_status
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY tablename;

-- 👤 3. VERIFICAR USUARIO LUIS@AQXION.COM
SELECT '3. VERIFICACIÓN USUARIO PRINCIPAL' as "SECCIÓN";

-- Verificar en auth.users
SELECT 
  'auth.users' as tabla,
  COUNT(*) as total_usuarios,
  COUNT(*) FILTER (WHERE email = 'luis@aqxion.com') as luis_existe
FROM auth.users;

-- Verificar en super_admins
SELECT 
  'super_admins' as tabla,
  COUNT(*) as total_super_admins,
  COUNT(*) FILTER (WHERE email = 'luis@aqxion.com') as luis_es_super_admin
FROM super_admins;

-- Verificar en user_profiles
SELECT 
  'user_profiles' as tabla,
  COUNT(*) as total_perfiles,
  COUNT(*) FILTER (WHERE email = 'luis@aqxion.com') as luis_tiene_perfil
FROM user_profiles;

-- 📈 4. CONTEO DE DATOS POR TABLA
SELECT '4. CONTEO DE DATOS' as "SECCIÓN";

SELECT 'user_profiles' as tabla, COUNT(*) as registros FROM user_profiles
UNION ALL
SELECT 'leads' as tabla, COUNT(*) as registros FROM leads
UNION ALL
SELECT 'metrics' as tabla, COUNT(*) as registros FROM metrics
UNION ALL
SELECT 'tasks' as tabla, COUNT(*) as registros FROM tasks
UNION ALL
SELECT 'support_tickets' as tabla, COUNT(*) as registros FROM support_tickets
ORDER BY tabla;

-- 🔍 5. VERIFICAR POLÍTICAS RLS
SELECT '5. VERIFICACIÓN POLÍTICAS RLS' as "SECCIÓN";
SELECT 
  schemaname,
  tablename,
  policyname,
  CASE 
    WHEN cmd = 'ALL' THEN '✅ TODAS LAS OPERACIONES'
    WHEN cmd = 'SELECT' THEN '📖 SOLO LECTURA'
    WHEN cmd = 'INSERT' THEN '➕ SOLO INSERCIÓN'
    WHEN cmd = 'UPDATE' THEN '✏️ SOLO ACTUALIZACIÓN'
    WHEN cmd = 'DELETE' THEN '🗑️ SOLO ELIMINACIÓN'
  END as operaciones_permitidas
FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- 📊 6. VERIFICAR ÍNDICES
SELECT '6. VERIFICACIÓN ÍNDICES' as "SECCIÓN";
SELECT 
  schemaname,
  tablename,
  indexname,
  CASE 
    WHEN indexname LIKE 'idx_%' THEN '✅ ÍNDICE PERSONALIZADO'
    WHEN indexname LIKE '%_pkey' THEN '🔑 CLAVE PRIMARIA'
    WHEN indexname LIKE '%_key' THEN '🔒 CLAVE ÚNICA'
    ELSE '❓ OTRO ÍNDICE'
  END as tipo_indice
FROM pg_indexes 
WHERE schemaname = 'public'
ORDER BY tablename, indexname;

-- 🔧 7. VERIFICAR FUNCIONES
SELECT '7. VERIFICACIÓN FUNCIONES' as "SECCIÓN";
SELECT 
  routine_name as nombre_funcion,
  routine_type as tipo,
  CASE 
    WHEN routine_name LIKE 'calculate_%' THEN '📊 FUNCIÓN DE CÁLCULO'
    WHEN routine_name LIKE 'update_%' THEN '🔄 FUNCIÓN DE ACTUALIZACIÓN'
    WHEN routine_name LIKE 'generate_%' THEN '⚡ FUNCIÓN GENERADORA'
    ELSE '❓ OTRA FUNCIÓN'
  END as categoria
FROM information_schema.routines 
WHERE routine_schema = 'public'
AND routine_name NOT LIKE 'pg_%'
ORDER BY routine_name;

-- 🎯 8. VERIFICAR TRIGGERS
SELECT '8. VERIFICACIÓN TRIGGERS' as "SECCIÓN";
SELECT 
  trigger_name,
  event_object_table as tabla,
  action_timing as momento,
  event_manipulation as evento
FROM information_schema.triggers
WHERE trigger_schema = 'public'
ORDER BY event_object_table, trigger_name;

-- ⚠️ 9. PROBLEMAS POTENCIALES
SELECT '9. DIAGNÓSTICO DE PROBLEMAS' as "SECCIÓN";

-- Verificar tablas sin RLS
SELECT 
  '❌ TABLA SIN RLS: ' || tablename as problema
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('user_profiles', 'leads', 'metrics', 'tasks', 'support_tickets')
AND NOT rowsecurity;

-- 📋 10. RESUMEN EJECUTIVO
SELECT '10. RESUMEN EJECUTIVO' as "SECCIÓN";
SELECT 
  '📊 Total de tablas públicas: ' || COUNT(*) as resumen
FROM pg_tables WHERE schemaname = 'public'
UNION ALL
SELECT 
  '🔒 Tablas con RLS habilitado: ' || COUNT(*)
FROM pg_tables WHERE schemaname = 'public' AND rowsecurity = true
UNION ALL
SELECT 
  '👤 Total usuarios en auth: ' || COUNT(*)
FROM auth.users
UNION ALL
SELECT 
  '⭐ Total super admins: ' || COUNT(*)
FROM super_admins
UNION ALL
SELECT 
  '📝 Total perfiles creados: ' || COUNT(*)
FROM user_profiles;

SELECT '========================================' as "FIN AUDITORÍA";
SELECT 'Auditoría completada exitosamente ✅' as "ESTADO";
