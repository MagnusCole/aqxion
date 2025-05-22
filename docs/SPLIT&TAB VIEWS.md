Sistema de Diseño de Split Views y Tab Views para AQXION
Fecha y Hora de Creación: 02:00 AM -05, Sábado 17 de Mayo de 2025

1. Introducción
Este documento define el sistema de diseño para Split Views y Tab Views dentro de las secciones de la página web de AQXION, una empresa líder en la adquisición de negocios en LATAM. Implementado con Node.js 15 y Tailwind CSS v3, este sistema organiza y presenta contenido de manera clara y eficiente, asegurando adaptabilidad y profesionalismo en diversos dispositivos y contextos. El diseño refuerza la autoridad y confianza de AQXION, ofreciendo una experiencia de usuario intuitiva para dueños de negocios en LATAM.
El propósito de esta guía es proporcionar a desarrolladores y diseñadores un marco para implementar Split Views y Tab Views de manera consistente, optimizando la navegación y la interacción con el contenido en un entorno web moderno.

2. Split Views
2.1 Definición
Un Split View gestiona la presentación de múltiples paneles de contenido adyacentes, como una barra lateral, un lienzo principal y un inspector. Es ideal para navegar jerarquías de información, donde la selección en un panel primario muestra contenido en un panel secundario, y opcionalmente un panel terciario para detalles adicionales.

Uso Principal: Implemente Split Views para interfaces de barra lateral, como una lista de secciones (primario), contenido relacionado (secundario), y detalles específicos (terciario).

2.2 Mejores Prácticas

Entorno Regular: Use Split Views en entornos de escritorio (lg: y superiores en Tailwind), evitando su uso en entornos compactos como móviles en retrato (<md:) para prevenir recortes o envolturas de contenido.
Selección Persistente: Resalte la selección activa en cada panel con bg-gray-200 o border-l-2 border-gray-900 para clarificar la relación entre paneles.
Drag and Drop: Habilite la funcionalidad de arrastrar y soltar entre paneles usando eventos JavaScript (dragstart, drop), permitiendo mover contenido entre jerarquías.

2.3 Implementación Técnica

Estructura: Use flex o grid con lg:flex-row flex-col para organizar paneles (ej. w-1/4 para barra lateral, w-1/2 para contenido principal, w-1/4 para inspector).
Responsividad: Colapse a un solo panel en móviles con flex-col md:flex-row y oculte paneles secundarios con hidden md:block.
Node.js: Renderice dinámicamente paneles con Express (ej. res.render('split-view', { sidebarItems, content });).
Interacción: Use aria-selected y clases como bg-gray-200 para resaltar selecciones activas.


3. Tab Views
3.1 Definición
Un Tab View presenta múltiples paneles de contenido mutuamente exclusivos en la misma área, permitiendo a los usuarios alternar entre ellos mediante controles de pestañas etiquetados.

Uso Principal: Implemente Tab Views para mostrar áreas de contenido relacionadas, como diferentes categorías de información dentro de una sección.

3.2 Mejores Prácticas

Contenido Relacionado: Asegure que los paneles contengan contenido relacionado (ej. "Negocios", "Adquisiciones", "Resultados").
Independencia de Paneles: Garantice que los controles dentro de un panel afecten solo su contenido, usando data-tab y JavaScript para aislar interacciones.
Etiquetado Claro: Etiquete cada pestaña con nombres descriptivos (ej. "Negocios", "Resultados") usando sustantivos o frases cortas, con capitalización de título (capitalize).
Límite de Pestañas: No exceda seis pestañas (max-w-[6 tabs]); si hay más, considere un menú desplegable con select.
Evite Pop-ups: Use controles de pestañas directas (flex gap-2) en lugar de menús desplegables para una selección eficiente.

3.3 Anatomía

Posición: Coloque las pestañas en la parte superior (border-b) o inferior (border-t) del área de contenido.
Ocultar Controles: Si las pestañas se cambian programáticamente, oculte los controles con hidden y use un contenedor sin bordes (border-none).
Márgenes: Insete el Tab View con p-4 o mx-auto max-w-7xl para un diseño limpio y espacio para controles adicionales.

3.4 Implementación Técnica

Estructura: Use flex para pestañas (flex gap-2 border-b) y hidden para paneles no activos.
Interacción: Implemente un cambio de pestañas con JavaScript (ej. onclick para alternar hidden y block).
Node.js: Renderice dinámicamente pestañas y contenido con Express (ej. res.render('tab-view', { tabs: ['Negocios', 'Resultados'] });).
Accesibilidad: Agregue aria-label a cada pestaña y use aria-selected para resaltar la pestaña activa.


4. Beneficios del Sistema

Navegación Intuitiva: Split Views facilitan la exploración jerárquica; Tab Views organizan contenido relacionado.
Adaptabilidad: Tailwind asegura responsividad en todos los dispositivos.
Eficiencia: Clases predefinidas y Node.js optimizan el desarrollo.
Profesionalismo: Refleja la autoridad de AQXION en LATAM.


5. Conclusión
Este sistema de diseño de Split Views y Tab Views para AQXION, basado en Node.js 15 y Tailwind CSS v3, proporciona una estructura adaptable y profesional. Al seguir estas guías, AQXION asegura una experiencia web eficiente y consistente que resuena con su audiencia en LATAM.
