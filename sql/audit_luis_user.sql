-- ==========================================
-- AUDITORÍA ESPECÍFICA USUARIO LUIS@AQXION.COM
-- Ejecutar después del audit_database.sql
-- ==========================================

-- 1. VERIFICAR USUARIO EN AUTH.USERS
SELECT 
  'auth.users' as tabla,
  id,
  email,
  email_confirmed_at,
  created_at,
  last_sign_in_at,
  CASE 
    WHEN email_confirmed_at IS NOT NULL THEN 'Email confirmado'
    ELSE 'Email NO confirmado'
  END as estado_email
FROM auth.users 
WHERE email = 'luis@aqxion.com';

-- 2. VERIFICAR SUPER ADMIN STATUS
SELECT 
  'super_admins' as tabla,
  email,
  created_at,
  'Es super admin' as status
FROM super_admins 
WHERE email = 'luis@aqxion.com'
UNION ALL
SELECT 
  'super_admins' as tabla,
  'luis@aqxion.com' as email,
  NULL as created_at,
  'NO es super admin' as status
WHERE NOT EXISTS (
  SELECT 1 FROM super_admins WHERE email = 'luis@aqxion.com'
);

-- 3. VERIFICAR PERFIL DE USUARIO
SELECT 
  'user_profiles' as tabla,
  up.email,
  up.business_name,
  up.industry,
  up.lima_district,
  up.phone,
  up.created_at,
  CASE 
    WHEN up.business_name IS NOT NULL THEN 'Perfil completo'
    ELSE 'Perfil incompleto'
  END as estado_perfil
FROM user_profiles up
WHERE up.email = 'luis@aqxion.com'
UNION ALL
SELECT 
  'user_profiles' as tabla,
  'luis@aqxion.com' as email,
  NULL as business_name,
  NULL as industry,
  NULL as lima_district,
  NULL as phone,
  NULL as created_at,
  'Sin perfil creado' as estado_perfil
WHERE NOT EXISTS (
  SELECT 1 FROM user_profiles WHERE email = 'luis@aqxion.com'
);

-- 4. VERIFICAR RELACIÓN ENTRE AUTH.USERS Y USER_PROFILES
SELECT 
  u.email as auth_email,
  up.email as profile_email,
  u.id as auth_id,
  up.id as profile_id,
  CASE 
    WHEN u.id = up.id THEN 'IDs coinciden correctamente'
    WHEN u.id IS NULL THEN 'Usuario no existe en auth.users'
    WHEN up.id IS NULL THEN 'Perfil no existe en user_profiles'
    ELSE 'IDs NO coinciden - ERROR CRÍTICO'
  END as estado_relacion
FROM auth.users u
FULL OUTER JOIN user_profiles up ON u.id = up.id
WHERE u.email = 'luis@aqxion.com' OR up.email = 'luis@aqxion.com';

-- 5. VERIFICAR POLÍTICAS RLS PARA ESTE USUARIO
-- Simular acceso como luis@aqxion.com
DO $$
DECLARE
  luis_id UUID;
  can_access_profiles BOOLEAN := FALSE;
  can_access_super_admin BOOLEAN := FALSE;
BEGIN
  -- Obtener ID del usuario
  SELECT id INTO luis_id FROM auth.users WHERE email = 'luis@aqxion.com';
  
  IF luis_id IS NOT NULL THEN
    -- Verificar acceso a user_profiles
    BEGIN
      PERFORM 1 FROM user_profiles WHERE id = luis_id;
      can_access_profiles := TRUE;
    EXCEPTION WHEN OTHERS THEN
      can_access_profiles := FALSE;
    END;
    
    -- Verificar acceso como super admin
    BEGIN
      PERFORM 1 FROM super_admins WHERE email = 'luis@aqxion.com';
      can_access_super_admin := TRUE;
    EXCEPTION WHEN OTHERS THEN
      can_access_super_admin := FALSE;
    END;
    
    -- Mostrar resultados
    RAISE NOTICE 'Usuario ID: %', luis_id;
    RAISE NOTICE 'Puede acceder a user_profiles: %', can_access_profiles;
    RAISE NOTICE 'Es super admin: %', can_access_super_admin;
  ELSE
    RAISE NOTICE 'Usuario luis@aqxion.com NO encontrado en auth.users';
  END IF;
END $$;

-- 6. VERIFICAR DATOS ASOCIADOS (leads, tasks, etc.)
SELECT 
  'leads' as tabla,
  COUNT(*) as total_registros,
  COUNT(*) FILTER (WHERE status = 'converted') as convertidos,
  SUM(estimated_value) FILTER (WHERE status = 'converted') as revenue_total
FROM leads l
JOIN auth.users u ON l.user_id = u.id
WHERE u.email = 'luis@aqxion.com'
UNION ALL
SELECT 
  'tasks' as tabla,
  COUNT(*) as total_registros,
  COUNT(*) FILTER (WHERE status = 'completed') as completadas,
  NULL as revenue_total
FROM tasks t
JOIN auth.users u ON t.user_id = u.id
WHERE u.email = 'luis@aqxion.com'
UNION ALL
SELECT 
  'support_tickets' as tabla,
  COUNT(*) as total_registros,
  COUNT(*) FILTER (WHERE status = 'resolved') as resueltos,
  NULL as revenue_total
FROM support_tickets st
JOIN auth.users u ON st.user_id = u.id
WHERE u.email = 'luis@aqxion.com';

-- 7. DIAGNÓSTICO FINAL
SELECT 
  'DIAGNÓSTICO FINAL' as seccion,
  CASE 
    WHEN EXISTS (SELECT 1 FROM auth.users WHERE email = 'luis@aqxion.com')
         AND EXISTS (SELECT 1 FROM super_admins WHERE email = 'luis@aqxion.com')
         AND EXISTS (SELECT 1 FROM user_profiles WHERE email = 'luis@aqxion.com')
    THEN '✅ TODO CONFIGURADO CORRECTAMENTE'
    
    WHEN NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'luis@aqxion.com')
    THEN '❌ USUARIO NO EXISTE EN AUTH.USERS'
    
    WHEN NOT EXISTS (SELECT 1 FROM super_admins WHERE email = 'luis@aqxion.com')
    THEN '⚠️ USUARIO NO ES SUPER ADMIN'
    
    WHEN NOT EXISTS (SELECT 1 FROM user_profiles WHERE email = 'luis@aqxion.com')
    THEN '⚠️ USUARIO NO TIENE PERFIL'
    
    ELSE '❓ ESTADO INCIERTO - REVISAR MANUALMENTE'
  END as estado,
  NOW() as fecha_auditoria;
