# Tipografía Oficial de AQXION

## Implementación Técnica

Este documento describe la implementación técnica de la tipografía oficial y el sistema de colores para AQXION, basado en las especificaciones proporcionadas.

### Fuentes Implementadas

#### 1. Tipografía Principal (Montserrat)
- **Pesos importados**: Bold (700), SemiBold (600)
- **Uso**: Títulos, encabezados, CTAs y elementos destacados
- **Variable CSS**: `--font-primary`
- **Componentes**: `HeadingHero`, `HeadingSection`, `CTAText`, `MetricText`

#### 2. Tipografía Secundaria (Inter)
- **Pesos importados**: Regular (400), Medium (500)
- **Uso**: Cuerpos de texto, subtítulos, descripciones
- **Variable CSS**: `--font-secondary`
- **Componentes**: `Subheading`, `BodyText`

### Componentes de Tipografía

1. **HeadingHero**
   - Montserrat Bold 36px
   - Interlineado: 1.2
   - Color: `--color-text-primary` (#1A2B3C)
   - Uso: Títulos principales como "We Acquire Businesses in LATAM"

2. **HeadingSection**
   - Montserrat Bold 24px
   - Interlineado: 1.2
   - Color: `--color-text-primary` (#1A2B3C)
   - Uso: Títulos de secciones como "What We Do", "Track Record"

3. **Subheading**
   - Inter Medium 18px
   - Interlineado: 1.3
   - Color: `--color-text-secondary` (#4A5D70)
   - Uso: Subtítulos como "We buy, improve, and grow..."

4. **BodyText**
   - Inter Regular 16px
   - Interlineado: 1.5
   - Color: `--color-text-secondary` (#4A5D70)
   - Uso: Cuerpos de texto y descripciones

5. **CTAText**
   - Montserrat SemiBold 16px
   - Interlineado: 1.2
   - Uso: Botones y llamadas a la acción

6. **MetricText**
   - Montserrat SemiBold 20px
   - Interlineado: 1.2
   - Color: `--color-accent-secondary` (#F56565)
   - Uso: Métricas destacadas como "35% Growth"

### Componentes de Botones

1. **Button**
   - Variante Primary: Fondo `--color-accent-cta` (#3182CE), texto blanco, hover #2B6CB0
   - Variante Secondary: Borde `--color-accent-main` (#2A5298), texto azul, hover fondo `--color-bg-secondary`
   - Tipografía: Montserrat SemiBold 16px
   - Uso: Botones generales y CTAs

2. **CTAButton**
   - Especialización de Button con variante primary
   - Uso: Botones destacados como "Sell Your Business"

3. **ButtonOutlineGold**
   - Borde `--color-accent-tertiary` (#B38B4C), texto dorado, hover fondo dorado
   - Tipografía: Montserrat SemiBold 16px
   - Uso: Elementos premium

## Aplicación en las Secciones

### Hero
```jsx
<div className="bg-bg-primary">
  <HeadingHero>We Acquire Businesses in LATAM</HeadingHero>
  <Subheading>We buy, improve, and grow...</Subheading>
  <CTAButton>Sell Your Business</CTAButton>
</div>
```

### What We Do
```jsx
<div className="bg-bg-secondary">
  <HeadingSection>What We Do</HeadingSection>
  <BodyText>Descripción...</BodyText>
  <MetricText>Pasos destacados</MetricText>
</div>
```

### Track Record
```jsx
<div className="bg-bg-primary">
  <HeadingSection>Track Record</HeadingSection>
  <MetricText>35% Growth</MetricText>
  <BodyText>Detalles...</BodyText>
</div>
```

### Business Criteria
```jsx
<div className="bg-bg-secondary">
  <HeadingSection>Business Criteria</HeadingSection>
  <Subheading>Criterios...</Subheading>
  <span className="text-accent-alert font-primary text-[16px] font-semibold">No califica</span>
</div>
```

### Contact/CTA
```jsx
<div className="bg-bg-primary">
  <HeadingSection>Contact Us</HeadingSection>
  <form>
    <input className="text-text-placeholder" placeholder="Your Name" />
    <CTAButton>Send</CTAButton>
  </form>
</div>
```

## Integración con Tailwind CSS

Para utilizar estas variables en clases de Tailwind, se han definido las siguientes clases personalizadas:

- `bg-bg-primary`: Fondo principal (#F5F7FA)
- `bg-bg-secondary`: Fondo secundario (#E6EAF0)
- `bg-bg-card`: Fondo de tarjetas (#FFFFFF)
- `text-text-primary`: Texto principal (#1A2B3C)
- `text-text-secondary`: Texto secundario (#4A5D70)
- `text-text-placeholder`: Texto placeholder (#A3B1C0)
- `text-text-link`: Texto de enlaces (#2A5298)
- `text-accent-main`: Acento principal (#2A5298)
- `text-accent-cta`: Acento CTA (#3182CE)
- `text-accent-secondary`: Acento secundario (#F56565)
- `text-accent-tertiary`: Acento terciario (#B38B4C)
- `text-accent-alert`: Acento de alerta (#9B2C2C)
- `font-primary`: Fuente Montserrat
- `font-secondary`: Fuente Inter

## Modo Oscuro

Se ha implementado un tema oscuro que ajusta automáticamente los colores cuando se activa el atributo `data-theme="dark"` en el elemento HTML. Los colores del modo oscuro son:

- Fondo principal: #1A2B3C
- Fondo secundario: #2D3748
- Texto principal: #E2E8F0
- Acentos ajustados para mantener el contraste y la accesibilidad