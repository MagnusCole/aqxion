# 🧱 AQXION — STYLE GUIDE (v1.0)

**Última actualización:** 2025-05-14  
**Autor:** MAGNUS_DEV369  
**Propósito:** Estandarizar y consolidar la identidad visual, funcional y estructural de AQXION como firma de adquisiciones institucional.

---

## 🎨 PALETA DE COLORES

| Nombre           | Token CSS                 | Hex       | Uso                     |
|------------------|---------------------------|-----------|--------------------------|
| Fondo base       | `--color-bg`              | `#0A0A0A` | Fondo general (dark)    |
| Texto principal  | `--color-text`            | `#F8F8F8` | Texto en dark mode      |
| Acento oro       | `--color-accent` / `--color-gold` | `#C9A96D` | Resaltado institucional |
| Texto secundario | `--color-muted`           | `#888888` | Labels, párrafos suaves |
| Fondo footer     | `--color-footer`          | `#111111` | Footer, secciones fondo |

---

## ✍️ TIPOGRAFÍA

- Primaria: `Geist`, sans-serif
- Tamaño base: `16px`
- Jerarquías:
  - `.heading-hero` → `text-4xl md:text-5xl font-light tracking-tight`
  - `.heading-section` → `text-3xl md:text-4xl font-medium`
  - `.paragraph-lead` → `text-base md:text-lg text-muted`

---

## 📦 COMPONENTES

### Botones

| Clase        | Descripción                         |
|--------------|--------------------------------------|
| `.btn-primary` | Fondo oro, texto blanco             |
| `.btn-outline` | Borde blanco, fondo transparente    |
| `.btn-gold`    | Borde oro, texto oro, hover oro     |

### Tarjetas

```html
<div class="card">Contenido</div>
```

`.card` aplica `bg-white`, `rounded-lg`, `p-6`, `shadow-base`

---

## 📐 UTILITIES

| Clase            | Función                          |
|------------------|----------------------------------|
| `.section`       | Padding top/bottom estándar (`6rem`) |
| `.section-lg`    | Padding extendido (`8rem`)       |
| `.container`     | Máximo ancho + padding horizontal |
| `.label`         | Texto en mayúsculas, gris        |

---

## 🧠 BASE STYLES

**Ubicación:** `base.css`  
Aplica a: `html`, `body`, `a`, `strong`, `header a`, `footer a`

- Todos los `<a>` tienen `hover: underline` y `opacity 0.85`
- `header a` → texto blanco, hover oro
- `footer a` → texto blanco fijo, sin outline cuadrado

---

## 🔐 DECISIONES FIJAS

- Solo `font-sans` para navegación, headings, contenido
- Se usa `rem` y `var(--token)` para todo spacing
- No hay outline dorado visual en ningún link

---

## 🧪 TESTS RECOMENDADOS

1. Legibilidad en fondos oscuros
2. Mobile navigation CTA visible
3. Hover feedback en header, footer y botón principal
4. Coherencia visual total entre secciones

---

## ✅ ARCHIVOS CLAVE

- `tokens.css` → Definición de variables
- `base.css` → Reset + estilo global
- `components.css` → Botones, tarjetas, nav links móviles
- `utilities.css` → Layouts, tipografía, helpers

---

## 🚀 VERSIÓN SIGUIENTE

- Detectar light mode y aplicar `data-theme`
- Animaciones sutiles (`Framer Motion`)
- Preparar sección pública de manifesto / careers / inversión
