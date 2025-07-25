-- ==========================================
-- ÍNDICES DE RENDIMIENTO AQXION
-- Fecha: 2025-07-25
-- Descripción: Índices optimizados para queries frecuentes
-- ==========================================

-- 1. ÍNDICES PARA user_profiles
-- Búsqueda por email (login frecuente)
CREATE INDEX IF NOT EXISTS idx_user_profiles_email 
ON user_profiles (email);

-- Búsqueda por industria (analytics por nicho)
CREATE INDEX IF NOT EXISTS idx_user_profiles_industry 
ON user_profiles (industry);

-- Búsqueda por distrito de Lima (geo-targeting)
CREATE INDEX IF NOT EXISTS idx_user_profiles_lima_district 
ON user_profiles (lima_district);

-- 2. ÍNDICES PARA leads
-- Búsqueda por usuario y fecha (dashboard principal)
CREATE INDEX IF NOT EXISTS idx_leads_user_created 
ON leads (user_id, created_at DESC);

-- Búsqueda por status (pipeline de ventas)
CREATE INDEX IF NOT EXISTS idx_leads_user_status 
ON leads (user_id, status);

-- Búsqueda por fuente (analytics de canales)
CREATE INDEX IF NOT EXISTS idx_leads_user_source 
ON leads (user_id, source);

-- Filtro por fecha de conversión (métricas ROI)
CREATE INDEX IF NOT EXISTS idx_leads_converted_at 
ON leads (user_id, converted_at) 
WHERE converted_at IS NOT NULL;

-- 3. ÍNDICES PARA metrics
-- Búsqueda por usuario y período (dashboards)
CREATE INDEX IF NOT EXISTS idx_metrics_user_period 
ON metrics (user_id, period_type, period_start DESC);

-- Búsqueda única para evitar duplicados
CREATE UNIQUE INDEX IF NOT EXISTS idx_metrics_unique_period 
ON metrics (user_id, period_type, period_start);

-- 4. ÍNDICES PARA tasks
-- Búsqueda por usuario y estado (panel de tareas)
CREATE INDEX IF NOT EXISTS idx_tasks_user_status 
ON tasks (user_id, status);

-- Búsqueda por fecha de vencimiento (recordatorios)
CREATE INDEX IF NOT EXISTS idx_tasks_user_due_date 
ON tasks (user_id, due_date) 
WHERE status != 'completed';

-- Búsqueda por categoría (organización)
CREATE INDEX IF NOT EXISTS idx_tasks_user_category 
ON tasks (user_id, category);

-- 5. ÍNDICES PARA support_tickets
-- Búsqueda por usuario y estado (soporte)
CREATE INDEX IF NOT EXISTS idx_support_user_status 
ON support_tickets (user_id, status);

-- Búsqueda por fecha de creación (orden cronológico)
CREATE INDEX IF NOT EXISTS idx_support_created 
ON support_tickets (created_at DESC);

-- Búsqueda por prioridad para admins
CREATE INDEX IF NOT EXISTS idx_support_priority_status 
ON support_tickets (priority, status) 
WHERE status IN ('open', 'in_progress');

-- 6. ÍNDICES PARA content_calendar
-- Búsqueda por usuario y fecha programada
CREATE INDEX IF NOT EXISTS idx_content_user_scheduled 
ON content_calendar (user_id, scheduled_date);

-- Búsqueda por tipo y plataforma (analytics)
CREATE INDEX IF NOT EXISTS idx_content_type_platform 
ON content_calendar (user_id, content_type, platform);

-- Búsqueda por estado (gestión de contenido)
CREATE INDEX IF NOT EXISTS idx_content_user_status 
ON content_calendar (user_id, status);

-- 7. ÍNDICES COMPUESTOS AVANZADOS
-- Para el dashboard principal: métricas + leads recientes
CREATE INDEX IF NOT EXISTS idx_dashboard_overview 
ON leads (user_id, status, created_at DESC) 
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';

-- Para analytics: leads por fuente y período
CREATE INDEX IF NOT EXISTS idx_analytics_source_period 
ON leads (user_id, source, created_at) 
WHERE created_at >= CURRENT_DATE - INTERVAL '90 days';

-- 8. ÍNDICES DE TEXTO PARA BÚSQUEDA
-- Búsqueda fuzzy en nombres de leads
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX IF NOT EXISTS idx_leads_name_fuzzy 
ON leads USING GIN (name gin_trgm_ops);

-- Búsqueda en notas de leads
CREATE INDEX IF NOT EXISTS idx_leads_notes_fuzzy 
ON leads USING GIN (notes gin_trgm_ops) 
WHERE notes IS NOT NULL;
