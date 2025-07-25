# Estructura SQL AQXION

Esta carpeta contiene toda la estructura de base de datos para el proyecto AQXION, organizada siguiendo las mejores prácticas de calidad mundial para PostgreSQL/Supabase.

## 📋 Estructura de Carpetas

```
sql/
├── migrations/          # Scripts de cambios de schema (versionados)
├── seeds/              # Datos iniciales para desarrollo/testing
├── functions/          # Funciones PL/pgSQL y triggers
├── policies/           # Políticas de Row Level Security (RLS)
├── views/              # Vistas para dashboards y consultas complejas
├── indexes/            # Índices para optimización de performance
└── README.md           # Esta documentación
```

## 🚀 Cómo Usar

### 1. Orden de Ejecución

Para configurar la base de datos desde cero, ejecuta los scripts en este orden:

1. **Migraciones** (cambios de schema):
   ```sql
   -- Ejecutar en orden numérico
   \i migrations/001_initial_schema.sql
   ```

2. **Políticas de Seguridad** (RLS):
   ```sql
   \i policies/rls_policies.sql
   ```

3. **Índices de Performance**:
   ```sql
   \i indexes/performance_indexes.sql
   ```

4. **Funciones y Triggers**:
   ```sql
   \i functions/business_functions.sql
   ```

5. **Vistas de Dashboard**:
   ```sql
   \i views/dashboard_views.sql
   ```

6. **Datos de Desarrollo** (solo en dev/staging):
   ```sql
   \i seeds/development_data.sql
   ```

### 2. Con Supabase CLI

Si usas Supabase CLI local:

```bash
# Aplicar todas las migraciones
supabase db push

# O ejecutar archivos individuales
supabase db shell < sql/migrations/001_initial_schema.sql
```

### 3. En Supabase Dashboard

1. Ve a SQL Editor en tu proyecto Supabase
2. Copia y pega el contenido de cada archivo
3. Ejecuta en el orden especificado arriba

## 📊 Estructura de Datos

### Tablas Principales

- **`user_profiles`**: Perfiles de usuarios MYPE con información de negocio
- **`leads`**: Leads generados para cada usuario con tracking de conversión
- **`metrics`**: Métricas semanales/mensuales de performance
- **`tasks`**: Tareas del plan de 90 días de onboarding
- **`support_tickets`**: Sistema de tickets para soporte personalizado
- **`content_calendar`**: Calendario de contenido para marketing

### Características de Seguridad

- **Row Level Security (RLS)** habilitado en todas las tablas
- Usuarios solo pueden ver/editar sus propios datos
- Super admins tienen acceso completo para soporte
- Políticas granulares por tipo de operación (SELECT, INSERT, UPDATE, DELETE)

### Optimizaciones de Performance

- Índices optimizados para consultas frecuentes del dashboard
- Índices compuestos para analytics complejos
- Extensión `pg_trgm` para búsqueda fuzzy
- Vistas pre-calculadas para dashboards

## 🔧 Funciones Disponibles

### `calculate_user_roi(user_id, period_days)`
Calcula ROI de un usuario en un período específico.

```sql
SELECT * FROM calculate_user_roi('user-uuid', 30);
```

### `update_weekly_metrics(user_id)`
Actualiza métricas semanales automáticamente.

```sql
SELECT update_weekly_metrics('user-uuid');
```

### `generate_onboarding_tasks(user_id)`
Genera tareas automáticas del plan 90 días para nuevos usuarios.

```sql
SELECT generate_onboarding_tasks('user-uuid');
```

### `search_leads(user_id, search_term)`
Búsqueda fuzzy en leads con scoring de similitud.

```sql
SELECT * FROM search_leads('user-uuid', 'maria');
```

## 📈 Vistas de Dashboard

### `user_dashboard`
Resumen ejecutivo para el dashboard principal de cada usuario.

### `leads_by_source`
Analytics de leads por canal de adquisición.

### `onboarding_progress`
Progreso del plan de 90 días por categoría.

### `weekly_metrics_trend`
Tendencias semanales con comparación periodo anterior.

### `upcoming_content`
Calendario de contenido próximo a publicar.

### `support_overview`
Vista para admins con SLA compliance.

### `industry_analytics`
Benchmarks por industria para insights.

## 🛡️ Seguridad

### Row Level Security (RLS)

Todas las tablas tienen RLS habilitado con políticas que garantizan:

- Usuarios ven solo SUS datos
- Super admins tienen acceso de soporte
- Operaciones autorizadas por autenticación Supabase

### Validaciones

- Constraints en industrias permitidas
- Validación de estados de leads y tareas
- Checks de integridad referencial

## 🧪 Testing

### Datos de Desarrollo

El archivo `seeds/development_data.sql` incluye:

- 2 usuarios de prueba (restaurante y clínica dental)
- Leads de ejemplo con diferentes estados
- Tareas del plan 90 días
- Métricas históricas
- Contenido programado
- Tickets de soporte

**⚠️ IMPORTANTE**: Los seeds son solo para desarrollo. NO ejecutar en producción.

## 🔄 Mantenimiento

### Convenciones de Naming

- **Tablas**: `snake_case` singular (ej. `user_profile`)
- **Columnas**: `snake_case` (ej. `business_name`)
- **Índices**: `idx_tabla_columnas` (ej. `idx_leads_user_status`)
- **Funciones**: `verbo_sustantivo` (ej. `calculate_user_roi`)

### Migraciones

Para cambios futuros:

1. Crear nuevo archivo: `002_descripcion_cambio.sql`
2. Incluir tanto UP como DOWN scripts
3. Documentar cambios en comentarios
4. Probar en desarrollo antes de producción

### Backups

Para respaldos manuales:

```bash
# Backup completo
pg_dump -h db.supabase.co -U postgres -d nombre_db > backup.sql

# Backup solo estructura
pg_dump -h db.supabase.co -U postgres -d nombre_db --schema-only > schema.sql
```

## 📝 Logs y Monitoring

### Performance Monitoring

Consultas útiles para monitoreo:

```sql
-- Consultas lentas
SELECT query, mean_time, calls 
FROM pg_stat_statements 
ORDER BY mean_time DESC;

-- Uso de índices
SELECT indexrelname, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes;
```

### Auditoría

Las tablas incluyen:
- `created_at`: Timestamp de creación
- `updated_at`: Timestamp de última actualización (auto-actualizado)
- Triggers para mantener consistencia

## 🆘 Troubleshooting

### Problemas Comunes

1. **RLS niega acceso**: Verificar que el usuario esté autenticado con Supabase
2. **Función no encontrada**: Ejecutar `functions/business_functions.sql`
3. **Performance lenta**: Verificar que los índices estén creados
4. **Datos de prueba**: Solo usar seeds en desarrollo

### Contacto

Para problemas con la estructura de BD, revisar:
1. Logs de Supabase Dashboard
2. Variables de entorno de conexión
3. Permisos de usuario en PostgreSQL

---

**Última actualización**: 25 de julio de 2025
**Versión de PostgreSQL**: 15+
**Compatible con**: Supabase, PostgreSQL estándar
