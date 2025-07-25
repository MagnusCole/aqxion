-- ==========================================
-- CREAR PERFIL PARA LUIS@AQXION.COM
-- Ejecutar DESPUÉS del setup_complete.sql
-- ==========================================

-- Insertar perfil para el usuario luis@aqxion.com
-- NOTA: Reemplaza 'USER_UUID_AQUI' con el UUID real del usuario desde auth.users

INSERT INTO user_profiles (
  id, 
  email, 
  business_name, 
  industry, 
  phone, 
  lima_district
) 
SELECT 
  id,
  'luis@aqxion.com',
  'AQXION - Presencia Digital',
  'tecnologia',
  '+51 999 000 000',
  'Miraflores'
FROM auth.users 
WHERE email = 'luis@aqxion.com'
ON CONFLICT (id) DO UPDATE SET
  business_name = EXCLUDED.business_name,
  industry = EXCLUDED.industry,
  phone = EXCLUDED.phone,
  lima_district = EXCLUDED.lima_district,
  updated_at = NOW();

-- Generar tareas iniciales automáticamente
DO $$
DECLARE
  v_user_id UUID;
BEGIN
  -- Obtener el user_id
  SELECT id INTO v_user_id FROM auth.users WHERE email = 'luis@aqxion.com';
  
  IF v_user_id IS NOT NULL THEN
    -- Insertar algunas tareas de ejemplo
    INSERT INTO tasks (user_id, title, description, category, priority, status) VALUES
      (v_user_id, 'Configuración inicial completada', 'Portal AQXION configurado correctamente', 'setup', 'high', 'completed'),
      (v_user_id, 'Revisar métricas del dashboard', 'Verificar que todas las métricas se muestren correctamente', 'optimization', 'medium', 'pending'),
      (v_user_id, 'Probar sistema de leads', 'Crear leads de prueba y verificar funcionalidad', 'setup', 'medium', 'pending');
  END IF;
END $$;
