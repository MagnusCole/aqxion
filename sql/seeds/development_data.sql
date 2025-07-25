-- ==========================================
-- DATOS INICIALES AQXION (DESARROLLO)
-- Fecha: 2025-07-25
-- Descripción: Seeds para testing y desarrollo
-- ==========================================

-- NOTA: Estos datos son solo para desarrollo/testing
-- NO ejecutar en producción

-- 1. SEED: Distritos de Lima (para dropdown)
INSERT INTO public.lima_districts (name) VALUES
('Miraflores'),
('San Isidro'),
('Surco'),
('La Molina'),
('San Borja'),
('Barranco'),
('Chorrillos'),
('Magdalena'),
('Pueblo Libre'),
('Jesús María'),
('Lince'),
('Breña'),
('Cercado de Lima'),
('Rímac'),
('San Martín de Porres'),
('Los Olivos'),
('Independencia'),
('Comas'),
('Puente Piedra'),
('Ancón'),
('Santa Rosa'),
('Villa El Salvador'),
('Villa María del Triunfo'),
('San Juan de Miraflores'),
('Santiago de Surco'),
('Ate'),
('Santa Anita'),
('El Agustino'),
('San Luis'),
('La Victoria'),
('San Miguel'),
('Callao'),
('Bellavista'),
('Carmen de la Legua'),
('La Perla'),
('La Punta'),
('Ventanilla')
ON CONFLICT DO NOTHING;

-- 2. SEED: Industrias (para validación)
-- Ya definidas en el CHECK constraint, pero aquí para referencia:
/*
Industrias disponibles:
- restaurante
- retail  
- servicios
- salud
- educacion
- tecnologia
- construccion
- turismo
- inmobiliaria
- otro
*/

-- 3. SEED: Usuarios de prueba (desarrollo)
-- NOTA: Solo para desarrollo local, usar emails ficticios

DO $$
DECLARE
  test_user_id UUID;
BEGIN
  -- Usuario de prueba 1: Restaurante
  test_user_id := gen_random_uuid();
  
  -- Simular inserción en auth.users (esto normalmente lo hace Supabase Auth)
  -- En desarrollo, puedes crear estos usuarios manualmente en el dashboard de Supabase
  
  INSERT INTO user_profiles (
    id, 
    email, 
    business_name, 
    industry, 
    phone, 
    lima_district,
    whatsapp_number
  ) VALUES (
    test_user_id,
    'test-restaurant@example.com',
    'Restaurante El Sabor Limeño',
    'restaurante',
    '+51 999 888 777',
    'Miraflores',
    '+51 999 888 777'
  );
  
  -- Leads de ejemplo para el restaurante
  INSERT INTO leads (user_id, name, email, phone, source, status, estimated_value, notes) VALUES
    (test_user_id, 'María González', 'maria@email.com', '+51 999 111 222', 'website', 'converted', 150.00, 'Mesa para evento familiar'),
    (test_user_id, 'Carlos Ruiz', 'carlos@email.com', '+51 999 333 444', 'whatsapp', 'contacted', 80.00, 'Consulta por almuerzo ejecutivo'),
    (test_user_id, 'Ana Torres', 'ana@email.com', '+51 999 555 666', 'google_business', 'new', 200.00, 'Reserva para cena romántica'),
    (test_user_id, 'Roberto Silva', NULL, '+51 999 777 888', 'whatsapp', 'qualified', 120.00, 'Evento corporativo pequeño'),
    (test_user_id, 'Elena Vargas', 'elena@email.com', NULL, 'instagram', 'lost', 90.00, 'No respondió después de cotización');
  
  -- Tareas de ejemplo
  INSERT INTO tasks (user_id, title, description, category, status, priority) VALUES
    (test_user_id, 'Configurar perfil de negocio', 'Completar información del restaurante', 'setup', 'completed', 'high'),
    (test_user_id, 'Subir fotos del menú', 'Agregar fotos atractivas de platos principales', 'marketing', 'in_progress', 'medium'),
    (test_user_id, 'Configurar WhatsApp Business', 'Activar catálogo y mensajes automáticos', 'setup', 'pending', 'high');
    
END $$;

-- 4. SEED: Datos de prueba adicionales
DO $$
DECLARE
  test_user_id_2 UUID;
BEGIN
  -- Usuario de prueba 2: Servicios de salud
  test_user_id_2 := gen_random_uuid();
  
  INSERT INTO user_profiles (
    id, 
    email, 
    business_name, 
    industry, 
    phone, 
    lima_district,
    website_url
  ) VALUES (
    test_user_id_2,
    'test-dental@example.com',
    'Clínica Dental Sonrisas',
    'salud',
    '+51 999 000 111',
    'San Isidro',
    'https://clinicasonrisas.com'
  );
  
  -- Leads para la clínica dental
  INSERT INTO leads (user_id, name, email, phone, source, status, estimated_value, notes) VALUES
    (test_user_id_2, 'Pedro Mendoza', 'pedro@email.com', '+51 999 222 333', 'website', 'converted', 800.00, 'Limpieza dental y blanqueamiento'),
    (test_user_id_2, 'Lucia Fernández', 'lucia@email.com', '+51 999 444 555', 'google_business', 'contacted', 1200.00, 'Consulta por ortodoncia'),
    (test_user_id_2, 'Diego Castro', NULL, '+51 999 666 777', 'whatsapp', 'new', 600.00, 'Dolor de muela - urgencia'),
    (test_user_id_2, 'Carmen López', 'carmen@email.com', '+51 999 888 999', 'referral', 'qualified', 2000.00, 'Implante dental completo');
    
  -- Métricas de ejemplo (última semana)
  INSERT INTO metrics (
    user_id, 
    period_type, 
    period_start, 
    period_end,
    leads_generated,
    leads_converted,
    revenue_generated,
    website_visits,
    whatsapp_chats
  ) VALUES (
    test_user_id_2,
    'weekly',
    DATE_TRUNC('week', CURRENT_DATE - INTERVAL '7 days')::DATE,
    (DATE_TRUNC('week', CURRENT_DATE - INTERVAL '7 days') + INTERVAL '6 days')::DATE,
    8,
    2,
    1400.00,
    45,
    12
  );
    
END $$;

-- 5. SEED: Contenido programado de ejemplo
INSERT INTO content_calendar (
  user_id, 
  title, 
  content_type, 
  platform, 
  content,
  scheduled_date,
  status
) 
SELECT 
  up.id,
  'Promoción especial de fin de semana',
  'social_media',
  'instagram',
  '¡Este fin de semana oferta especial! Menciona este post y obtén 20% de descuento. #PromoEspecial #Lima',
  NOW() + INTERVAL '2 days',
  'scheduled'
FROM user_profiles up
WHERE up.email = 'test-restaurant@example.com'
LIMIT 1;

-- 6. SEED: Ticket de soporte de ejemplo
INSERT INTO support_tickets (
  user_id,
  subject,
  message,
  priority,
  status
)
SELECT 
  up.id,
  'Consulta sobre configuración de WhatsApp',
  'Hola, tengo problemas para configurar los mensajes automáticos en WhatsApp Business. ¿Podrían ayudarme?',
  'normal',
  'open'
FROM user_profiles up
WHERE up.email = 'test-restaurant@example.com'
LIMIT 1;
