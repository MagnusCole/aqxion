-- ==========================================
-- FUNCIONES PL/pgSQL AQXION
-- Fecha: 2025-07-25
-- Descripción: Funciones para cálculos y automatizaciones
-- ==========================================

-- 1. FUNCIÓN: Calcular ROI de un usuario
CREATE OR REPLACE FUNCTION calculate_user_roi(
  p_user_id UUID,
  p_period_days INTEGER DEFAULT 30
)
RETURNS TABLE (
  total_leads INTEGER,
  converted_leads INTEGER,
  conversion_rate DECIMAL,
  total_revenue DECIMAL,
  roi_percentage DECIMAL
) 
LANGUAGE plpgsql
AS $$
DECLARE
  v_investment DECIMAL := 1500.00; -- Costo del plan AQXION
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*)::INTEGER AS total_leads,
    COUNT(*) FILTER (WHERE status = 'converted')::INTEGER AS converted_leads,
    CASE 
      WHEN COUNT(*) > 0 THEN 
        ROUND((COUNT(*) FILTER (WHERE status = 'converted')::DECIMAL / COUNT(*)) * 100, 2)
      ELSE 0::DECIMAL
    END AS conversion_rate,
    COALESCE(SUM(estimated_value) FILTER (WHERE status = 'converted'), 0) AS total_revenue,
    CASE 
      WHEN COALESCE(SUM(estimated_value) FILTER (WHERE status = 'converted'), 0) > 0 THEN
        ROUND(((COALESCE(SUM(estimated_value) FILTER (WHERE status = 'converted'), 0) - v_investment) / v_investment) * 100, 2)
      ELSE -100::DECIMAL
    END AS roi_percentage
  FROM leads 
  WHERE 
    user_id = p_user_id 
    AND created_at >= CURRENT_DATE - (p_period_days || ' days')::INTERVAL;
END;
$$;

-- 2. FUNCIÓN: Actualizar métricas automáticamente
CREATE OR REPLACE FUNCTION update_weekly_metrics(p_user_id UUID)
RETURNS VOID 
LANGUAGE plpgsql
AS $$
DECLARE
  v_week_start DATE := DATE_TRUNC('week', CURRENT_DATE)::DATE;
  v_week_end DATE := v_week_start + INTERVAL '6 days';
  v_leads_count INTEGER;
  v_converted_count INTEGER;
BEGIN
  -- Contar leads de la semana
  SELECT 
    COUNT(*),
    COUNT(*) FILTER (WHERE status = 'converted')
  INTO v_leads_count, v_converted_count
  FROM leads 
  WHERE 
    user_id = p_user_id 
    AND created_at::DATE BETWEEN v_week_start AND v_week_end;

  -- Insertar o actualizar métricas semanales
  INSERT INTO metrics (
    user_id, 
    period_type, 
    period_start, 
    period_end,
    leads_generated,
    leads_converted,
    revenue_generated
  ) 
  VALUES (
    p_user_id,
    'weekly',
    v_week_start,
    v_week_end,
    v_leads_count,
    v_converted_count,
    (
      SELECT COALESCE(SUM(estimated_value), 0) 
      FROM leads 
      WHERE 
        user_id = p_user_id 
        AND status = 'converted'
        AND converted_at::DATE BETWEEN v_week_start AND v_week_end
    )
  )
  ON CONFLICT (user_id, period_type, period_start) 
  DO UPDATE SET
    leads_generated = EXCLUDED.leads_generated,
    leads_converted = EXCLUDED.leads_converted,
    revenue_generated = EXCLUDED.revenue_generated,
    updated_at = NOW();
END;
$$;

-- 3. FUNCIÓN: Generar tareas automáticas del plan 90 días
CREATE OR REPLACE FUNCTION generate_onboarding_tasks(p_user_id UUID)
RETURNS VOID 
LANGUAGE plpgsql
AS $$
BEGIN
  -- Tareas Semana 1-2: Setup
  INSERT INTO tasks (user_id, title, description, category, priority, due_date)
  VALUES 
    (p_user_id, 'Configurar perfil de negocio', 'Completar información básica del negocio en el portal', 'setup', 'high', CURRENT_DATE + 2),
    (p_user_id, 'Revisar sitio web', 'Verificar que el sitio web refleje correctamente tu negocio', 'setup', 'high', CURRENT_DATE + 3),
    (p_user_id, 'Configurar WhatsApp Business', 'Activar y configurar WhatsApp Business con tu número', 'setup', 'high', CURRENT_DATE + 5),
    (p_user_id, 'Optimizar Google My Business', 'Verificar y completar perfil de Google My Business', 'setup', 'medium', CURRENT_DATE + 7);

  -- Tareas Semana 3-4: Marketing Inicial
  INSERT INTO tasks (user_id, title, description, category, priority, due_date)
  VALUES 
    (p_user_id, 'Crear primera campaña de contenido', 'Planificar 5 publicaciones para redes sociales', 'marketing', 'medium', CURRENT_DATE + 14),
    (p_user_id, 'Configurar seguimiento de leads', 'Establecer proceso para capturar y seguir leads', 'automation', 'medium', CURRENT_DATE + 16),
    (p_user_id, 'Optimizar para búsquedas locales', 'Mejorar SEO local para tu distrito en Lima', 'marketing', 'medium', CURRENT_DATE + 21);

  -- Tareas Mes 2: Automatización
  INSERT INTO tasks (user_id, title, description, category, priority, due_date)
  VALUES 
    (p_user_id, 'Automatizar respuestas WhatsApp', 'Configurar mensajes automáticos para consultas frecuentes', 'automation', 'medium', CURRENT_DATE + 35),
    (p_user_id, 'Crear sistema de seguimiento', 'Establecer recordatorios para seguimiento de leads', 'automation', 'medium', CURRENT_DATE + 42),
    (p_user_id, 'Analizar primeras métricas', 'Revisar ROI y ajustar estrategias según resultados', 'optimization', 'high', CURRENT_DATE + 49);

  -- Tareas Mes 3: Optimización
  INSERT INTO tasks (user_id, title, description, category, priority, due_date)
  VALUES 
    (p_user_id, 'Optimizar conversiones', 'Mejorar proceso de ventas basado en datos', 'optimization', 'high', CURRENT_DATE + 63),
    (p_user_id, 'Expandir estrategia digital', 'Evaluar nuevos canales de marketing digital', 'marketing', 'medium', CURRENT_DATE + 77),
    (p_user_id, 'Evaluación final 90 días', 'Revisar resultados completos y planificar siguientes pasos', 'optimization', 'high', CURRENT_DATE + 90);
END;
$$;

-- 4. FUNCIÓN: Búsqueda fuzzy de leads
CREATE OR REPLACE FUNCTION search_leads(
  p_user_id UUID,
  p_search_term TEXT
)
RETURNS TABLE (
  id UUID,
  name TEXT,
  email TEXT,
  phone TEXT,
  status TEXT,
  source TEXT,
  similarity REAL
) 
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    l.id,
    l.name,
    l.email,
    l.phone,
    l.status,
    l.source,
    SIMILARITY(l.name, p_search_term) AS similarity
  FROM leads l
  WHERE 
    l.user_id = p_user_id
    AND (
      l.name ILIKE '%' || p_search_term || '%'
      OR l.email ILIKE '%' || p_search_term || '%'
      OR l.phone ILIKE '%' || p_search_term || '%'
      OR SIMILARITY(l.name, p_search_term) > 0.3
    )
  ORDER BY similarity DESC, l.created_at DESC
  LIMIT 20;
END;
$$;

-- 5. FUNCIÓN: Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Aplicar trigger a todas las tablas que lo necesiten
CREATE TRIGGER update_user_profiles_updated_at 
  BEFORE UPDATE ON user_profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at 
  BEFORE UPDATE ON leads 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at 
  BEFORE UPDATE ON tasks 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_support_tickets_updated_at 
  BEFORE UPDATE ON support_tickets 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_calendar_updated_at 
  BEFORE UPDATE ON content_calendar 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
