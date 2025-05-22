/**
 * Guía de Uso: Componentes Container y Section
 * 
 * Esta guía explica el uso correcto de los componentes Container y Section
 * para evitar redundancias y problemas de márgenes excesivos.
 */

// 1. USO CORRECTO: Section con Container interno (predeterminado)
// ---------------------------------------------------------
// Esta es la forma recomendada para la mayoría de los casos
// Section ya incluye un Container por defecto

<Section id="mi-seccion" variant="primary">
  <Heading>Mi título</Heading>
  <Text>Mi contenido</Text>
</Section>

// 2. USO CORRECTO: Section sin Container (para contenido de ancho completo)
// ---------------------------------------------------------
// Útil para elementos que necesitan extenderse al 100% del ancho

<Section id="mi-seccion-full" container={false}>
  <div className="w-full bg-blue-500">
    Contenido de ancho completo
  </div>
</Section>

// 3. USO CORRECTO: Container independiente
// ---------------------------------------------------------
// Solo cuando necesites un contenedor fuera de una Section

<Container>
  <div>Contenido centralizado</div>
</Container>

// 4. USO INCORRECTO: Redundancia de contenedores
// ---------------------------------------------------------
// Esto causa márgenes excesivos y debe evitarse

/* EVITAR ESTO ❌ */
<Section id="redundante">
  <Container> {/* ¡Redundante! Section ya incluye un Container */}
    <div>Contenido</div>
  </Container>
</Section>

/* EVITAR ESTO ❌ */
<Section id="redundante-2">
  <div className="container mx-auto"> {/* ¡Redundante! */}
    <div>Contenido</div>
  </div>
</Section>

// 5. RECOMENDACIONES PARA COMPONENTES PERSONALIZADOS
// ---------------------------------------------------------
// Al crear componentes como carruseles o tarjetas

// ✅ Bien: Componente que se adapta al contenedor padre
export const MiCarrusel = ({ items }) => (
  <div className="w-full"> {/* Sin márgenes adicionales */}
    {items.map(item => (
      <div key={item.id}>{item.content}</div>
    ))}
  </div>
);

// ❌ Mal: Componente que añade contenedores redundantes
export const MiCarruselIncorrecto = ({ items }) => (
  <div className="container mx-auto"> {/* Problemático cuando se usa dentro de Section */}
    {items.map(item => (
      <div key={item.id}>{item.content}</div>
    ))}
  </div>
);