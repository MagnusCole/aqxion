-- ==========================================
-- AUDITORÍA RÁPIDA - EJECUTAR EN SUPABASE
-- ==========================================

-- PASO 1: ¿Qué tablas existen?
SELECT 'TABLAS EXISTENTES' as audit_step;
SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;

-- PASO 2: ¿Existe el usuario luis@aqxion.com?
SELECT 'VERIFICACIÓN USUARIO LUIS' as audit_step;
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM auth.users WHERE email = 'luis@aqxion.com') 
    THEN '✅ EXISTE en auth.users'
    ELSE '❌ NO EXISTE en auth.users'
  END as auth_users_status;

-- PASO 3: ¿Está en super_admins?
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM super_admins WHERE email = 'luis@aqxion.com') 
    THEN '✅ ES SUPER ADMIN'
    ELSE '❌ NO ES SUPER ADMIN'
  END as super_admin_status;

-- PASO 4: ¿Tiene perfil de usuario?
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM user_profiles WHERE email = 'luis@aqxion.com') 
    THEN '✅ TIENE PERFIL'
    ELSE '❌ NO TIENE PERFIL'
  END as user_profile_status;

-- PASO 5: Mostrar información del usuario si existe
SELECT 'DATOS DEL USUARIO' as audit_step;
SELECT 
  au.id,
  au.email,
  au.created_at as auth_created_at,
  up.business_name,
  up.industry,
  up.created_at as profile_created_at
FROM auth.users au
LEFT JOIN user_profiles up ON au.id = up.id
WHERE au.email = 'luis@aqxion.com';

-- PASO 6: ¿Están habilitadas las políticas RLS?
SELECT 'POLÍTICAS RLS' as audit_step;
SELECT 
  tablename,
  CASE 
    WHEN rowsecurity THEN '✅ RLS HABILITADO'
    ELSE '❌ RLS DESHABILITADO'
  END as rls_status
FROM pg_tables 
WHERE schemaname = 'public'
  AND tablename IN ('user_profiles', 'leads', 'metrics', 'tasks', 'support_tickets')
ORDER BY tablename;

-- PASO 7: Contar registros
SELECT 'CONTEO DE REGISTROS' as audit_step;
SELECT 
  'super_admins' as tabla,
  COUNT(*) as total
FROM super_admins
UNION ALL
SELECT 'user_profiles', COUNT(*) FROM user_profiles
UNION ALL  
SELECT 'leads', COUNT(*) FROM leads
UNION ALL
SELECT 'tasks', COUNT(*) FROM tasks
UNION ALL
SELECT 'support_tickets', COUNT(*) FROM support_tickets;

-- RESULTADO FINAL
SELECT 'RESUMEN FINAL' as audit_step;
SELECT 
  'Database Status' as component,
  CASE 
    WHEN EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'user_profiles' AND schemaname = 'public')
    THEN '✅ TABLAS CREADAS'
    ELSE '❌ FALTAN TABLAS'
  END as status
UNION ALL
SELECT 
  'Luis User Status',
  CASE 
    WHEN EXISTS (SELECT 1 FROM auth.users WHERE email = 'luis@aqxion.com')
         AND EXISTS (SELECT 1 FROM super_admins WHERE email = 'luis@aqxion.com')
         AND EXISTS (SELECT 1 FROM user_profiles WHERE email = 'luis@aqxion.com')
    THEN '✅ TODO CONFIGURADO'
    ELSE '❌ FALTA CONFIGURACIÓN'
  END
UNION ALL
SELECT 
  'Security (RLS)',
  CASE 
    WHEN (SELECT COUNT(*) FROM pg_tables WHERE schemaname = 'public' AND rowsecurity = true) >= 5
    THEN '✅ RLS CONFIGURADO'
    ELSE '❌ RLS INCOMPLETO'
  END;
