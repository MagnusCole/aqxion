-- ==========================================
-- AUDITORÍA SÚPER SIMPLE - SUPABASE WEB
-- Copiar y pegar en SQL Editor del Dashboard
-- ==========================================

-- 1. ¿Qué tablas tienes?
SELECT '=== TABLAS EXISTENTES ===' as info;
SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;

-- 2. ¿Existe luis@aqxion.com en auth?
SELECT '=== USUARIO LUIS EN AUTH ===' as info;
SELECT id, email, created_at FROM auth.users WHERE email = 'luis@aqxion.com';

-- 3. ¿Está en super_admins?
SELECT '=== SUPER ADMIN STATUS ===' as info;
SELECT * FROM super_admins WHERE email = 'luis@aqxion.com';

-- 4. ¿Tiene user_profile?
SELECT '=== USER PROFILE STATUS ===' as info;
SELECT * FROM user_profiles WHERE email = 'luis@aqxion.com';

-- 5. Resumen rápido
SELECT '=== RESUMEN FINAL ===' as info;
SELECT 
  'Tablas principales' as check_item,
  CASE 
    WHEN EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'user_profiles' AND schemaname = 'public')
    THEN '✅ user_profiles existe'
    ELSE '❌ user_profiles NO existe'
  END as status
UNION ALL
SELECT 
  'Usuario en auth',
  CASE 
    WHEN EXISTS (SELECT 1 FROM auth.users WHERE email = 'luis@aqxion.com')
    THEN '✅ luis@aqxion.com en auth'
    ELSE '❌ luis@aqxion.com NO en auth'
  END
UNION ALL
SELECT 
  'Super admin',
  CASE 
    WHEN EXISTS (SELECT 1 FROM super_admins WHERE email = 'luis@aqxion.com')
    THEN '✅ Es super admin'
    ELSE '❌ NO es super admin'
  END
UNION ALL
SELECT 
  'Profile completo',
  CASE 
    WHEN EXISTS (SELECT 1 FROM user_profiles WHERE email = 'luis@aqxion.com')
    THEN '✅ Tiene perfil'
    ELSE '❌ NO tiene perfil'
  END;
