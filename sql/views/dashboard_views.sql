-- ==========================================
-- VISTAS AQXION PARA DASHBOARDS
-- Fecha: 2025-07-25
-- Descripción: Vistas optimizadas para consultas frecuentes
-- ==========================================

-- 1. VISTA: Dashboard principal del usuario
CREATE OR REPLACE VIEW user_dashboard AS
SELECT 
  up.id AS user_id,
  up.email,
  up.business_name,
  up.industry,
  
  -- Estadísticas de leads (últimos 30 días)
  (
    SELECT COUNT(*) 
    FROM leads l 
    WHERE l.user_id = up.id 
    AND l.created_at >= CURRENT_DATE - INTERVAL '30 days'
  ) AS leads_last_30_days,
  
  (
    SELECT COUNT(*) 
    FROM leads l 
    WHERE l.user_id = up.id 
    AND l.status = 'converted'
    AND l.converted_at >= CURRENT_DATE - INTERVAL '30 days'
  ) AS conversions_last_30_days,
  
  -- ROI del último mes
  (
    SELECT 
      CASE 
        WHEN SUM(estimated_value) > 0 THEN
          ROUND(((SUM(estimated_value) - 1500) / 1500) * 100, 2)
        ELSE -100
      END
    FROM leads l
    WHERE l.user_id = up.id 
    AND l.status = 'converted'
    AND l.converted_at >= CURRENT_DATE - INTERVAL '30 days'
  ) AS roi_percentage,
  
  -- Tareas pendientes
  (
    SELECT COUNT(*) 
    FROM tasks t 
    WHERE t.user_id = up.id 
    AND t.status IN ('pending', 'in_progress')
  ) AS pending_tasks,
  
  -- Tickets de soporte abiertos
  (
    SELECT COUNT(*) 
    FROM support_tickets st 
    WHERE st.user_id = up.id 
    AND st.status IN ('open', 'in_progress')
  ) AS open_tickets

FROM user_profiles up;

-- 2. VISTA: Analytics por fuente de leads
CREATE OR REPLACE VIEW leads_by_source AS
SELECT 
  l.user_id,
  l.source,
  COUNT(*) AS total_leads,
  COUNT(*) FILTER (WHERE l.status = 'converted') AS converted_leads,
  CASE 
    WHEN COUNT(*) > 0 THEN 
      ROUND((COUNT(*) FILTER (WHERE l.status = 'converted')::DECIMAL / COUNT(*)) * 100, 2)
    ELSE 0
  END AS conversion_rate,
  COALESCE(SUM(l.estimated_value) FILTER (WHERE l.status = 'converted'), 0) AS total_revenue,
  DATE_TRUNC('month', l.created_at) AS month_year
FROM leads l
WHERE l.created_at >= CURRENT_DATE - INTERVAL '12 months'
GROUP BY l.user_id, l.source, DATE_TRUNC('month', l.created_at);

-- 3. VISTA: Progreso del plan 90 días
CREATE OR REPLACE VIEW onboarding_progress AS
SELECT 
  t.user_id,
  t.category,
  COUNT(*) AS total_tasks,
  COUNT(*) FILTER (WHERE t.status = 'completed') AS completed_tasks,
  COUNT(*) FILTER (WHERE t.status IN ('pending', 'in_progress')) AS pending_tasks,
  ROUND((COUNT(*) FILTER (WHERE t.status = 'completed')::DECIMAL / COUNT(*)) * 100, 2) AS completion_percentage,
  
  -- Tareas vencidas
  COUNT(*) FILTER (
    WHERE t.status IN ('pending', 'in_progress') 
    AND t.due_date < CURRENT_DATE
  ) AS overdue_tasks
  
FROM tasks t
GROUP BY t.user_id, t.category;

-- 4. VISTA: Métricas semanales trend
CREATE OR REPLACE VIEW weekly_metrics_trend AS
SELECT 
  m.user_id,
  m.period_start,
  m.leads_generated,
  m.leads_converted,
  m.revenue_generated,
  
  -- Comparación con semana anterior
  LAG(m.leads_generated) OVER (
    PARTITION BY m.user_id 
    ORDER BY m.period_start
  ) AS prev_week_leads,
  
  LAG(m.revenue_generated) OVER (
    PARTITION BY m.user_id 
    ORDER BY m.period_start
  ) AS prev_week_revenue,
  
  -- Cálculo de crecimiento porcentual
  CASE 
    WHEN LAG(m.leads_generated) OVER (PARTITION BY m.user_id ORDER BY m.period_start) > 0 THEN
      ROUND(((m.leads_generated - LAG(m.leads_generated) OVER (PARTITION BY m.user_id ORDER BY m.period_start))::DECIMAL / 
             LAG(m.leads_generated) OVER (PARTITION BY m.user_id ORDER BY m.period_start)) * 100, 2)
    ELSE NULL
  END AS leads_growth_percentage

FROM metrics m
WHERE m.period_type = 'weekly'
ORDER BY m.user_id, m.period_start DESC;

-- 5. VISTA: Calendario de contenido próximo
CREATE OR REPLACE VIEW upcoming_content AS
SELECT 
  cc.user_id,
  cc.title,
  cc.content_type,
  cc.platform,
  cc.scheduled_date,
  cc.status,
  
  -- Días hasta publicación
  EXTRACT(DAY FROM cc.scheduled_date - NOW()) AS days_until_publish,
  
  -- Categorización de urgencia
  CASE 
    WHEN cc.scheduled_date <= NOW() + INTERVAL '1 day' THEN 'urgent'
    WHEN cc.scheduled_date <= NOW() + INTERVAL '3 days' THEN 'soon'
    WHEN cc.scheduled_date <= NOW() + INTERVAL '7 days' THEN 'upcoming'
    ELSE 'planned'
  END AS urgency

FROM content_calendar cc
WHERE 
  cc.scheduled_date >= NOW()
  AND cc.status IN ('draft', 'scheduled')
ORDER BY cc.user_id, cc.scheduled_date;

-- 6. VISTA: Support tickets overview (para admins)
CREATE OR REPLACE VIEW support_overview AS
SELECT 
  st.id,
  st.user_id,
  up.email AS user_email,
  up.business_name,
  st.subject,
  st.priority,
  st.status,
  st.created_at,
  
  -- Tiempo transcurrido
  EXTRACT(HOUR FROM NOW() - st.created_at) AS hours_open,
  
  -- SLA compliance (24h para normal, 4h para urgent)
  CASE 
    WHEN st.priority = 'urgent' AND EXTRACT(HOUR FROM NOW() - st.created_at) > 4 THEN 'SLA_BREACH'
    WHEN st.priority IN ('high', 'normal') AND EXTRACT(HOUR FROM NOW() - st.created_at) > 24 THEN 'SLA_BREACH'
    ELSE 'SLA_OK'
  END AS sla_status

FROM support_tickets st
JOIN user_profiles up ON st.user_id = up.id
WHERE st.status IN ('open', 'in_progress')
ORDER BY 
  CASE st.priority 
    WHEN 'urgent' THEN 1 
    WHEN 'high' THEN 2 
    WHEN 'normal' THEN 3 
    ELSE 4 
  END,
  st.created_at;

-- 7. VISTA: Análisis por industria (para insights)
CREATE OR REPLACE VIEW industry_analytics AS
SELECT 
  up.industry,
  COUNT(DISTINCT up.id) AS total_users,
  
  -- Promedio de leads por usuario
  ROUND(AVG(
    (SELECT COUNT(*) FROM leads l WHERE l.user_id = up.id)
  ), 2) AS avg_leads_per_user,
  
  -- Tasa de conversión promedio por industria
  ROUND(AVG(
    CASE 
      WHEN (SELECT COUNT(*) FROM leads l WHERE l.user_id = up.id) > 0 THEN
        (SELECT COUNT(*) FILTER (WHERE status = 'converted') FROM leads l WHERE l.user_id = up.id)::DECIMAL /
        (SELECT COUNT(*) FROM leads l WHERE l.user_id = up.id) * 100
      ELSE 0
    END
  ), 2) AS avg_conversion_rate,
  
  -- Revenue promedio
  ROUND(AVG(
    (SELECT COALESCE(SUM(estimated_value), 0) FROM leads l WHERE l.user_id = up.id AND l.status = 'converted')
  ), 2) AS avg_revenue_per_user

FROM user_profiles up
WHERE up.industry IS NOT NULL
GROUP BY up.industry
HAVING COUNT(DISTINCT up.id) >= 3 -- Solo mostrar industrias con al menos 3 usuarios
ORDER BY avg_revenue_per_user DESC;
