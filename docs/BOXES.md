Sistema de Diseño de Cajas para Secciones de AQXION
Fecha y Hora de Creación: 01:35 AM -05, Sábado 17 de Mayo de 2025

1. Introducción
Este documento define el sistema de diseño para las cajas (boxes) utilizadas dentro de las secciones de la página web de AQXION, una empresa líder en la adquisición de negocios en LATAM. Implementado con Node.js 15 y Tailwind CSS v3, este sistema crea grupos visualmente distintos de información y componentes relacionados, alineándose con las mejores prácticas de diseño web moderno. El enfoque asegura una experiencia profesional, clara y adaptable que refuerce la autoridad de AQXION ante su audiencia de dueños de negocios en LATAM.
El propósito de esta guía es proporcionar a desarrolladores y diseñadores un marco para implementar cajas de manera consistente, optimizando la legibilidad y la estructura en todas las plataformas.

2. Principios de Diseño de Cajas
2.1 Definición
Una caja es un contenedor que agrupa información y componentes lógicamente relacionados, utilizando un borde visible o un color de fondo para separarlos del resto de la interfaz. Puede incluir un título introductorio para mayor claridad.

Estilo Visual: Utilice bordes redondeados con clases como rounded-lg en Tailwind.
Implementación: Construya con un contenedor div y clases como border o bg-gray-100.

2.2 Mejores Prácticas

Tamaño Relativo: Mantenga las cajas relativamente pequeñas en comparación con la vista contenedora (ej. max-w-md o max-w-lg) para evitar que dominen el diseño y afecten otros contenidos.
Agrupación Interna: Use p-4 para padding y flex o grid para alinear contenido dentro de la caja, evitando anidar múltiples cajas que puedan sobrecargar la interfaz.

2.3 Contenido

Título Opcional: Incluya un título breve si ayuda a aclarar el contenido (ej. What We Do), usando text-lg font-bold.
Estilo de Título: Aplique capitalización de frase (sentence case) y evite puntuación final, a menos que sea un panel de configuración (ej. "Settings:").
Accesibilidad: Asegure compatibilidad con VoiceOver asignando un aria-label o título descriptivo.


3. Implementación Técnica

Estructura Base: Use un div con clases como border border-gray-300 bg-white p-4 rounded-lg shadow-sm.
Tamaño y Espaciado: Aplique max-w-md mx-auto para limitar el ancho y m-4 para márgenes externos.
Título: Agregue un h2 con text-lg font-bold text-gray-900 mb-2 dentro de la caja.
Contenido: Organice con flex flex-col gap-2 o grid grid-cols-1 gap-4.
Node.js: Renderice dinámicamente con un servidor Express (ej. res.render('section', { title: 'What We Do' });).
Responsividad: Use sm:max-w-lg md:max-w-xl para adaptarse a diferentes tamaños de pantalla.


4. Beneficios del Sistema de Cajas

Claridad Visual: Las cajas separan contenido relacionado, mejorando la navegación.
Adaptabilidad: Tailwind asegura un diseño responsivo en todos los dispositivos.
Profesionalismo: El estilo minimalista refuerza la identidad de AQXION.
Accesibilidad: Títulos y espaciado facilitan el uso con lectores de pantalla.


5. Conclusión
Este sistema de diseño de cajas para las secciones de AQXION, basado en Node.js 15 y Tailwind CSS v3, proporciona una estructura visual clara y adaptable. Al seguir estas guías, AQXION asegura una experiencia web profesional y consistente que resuena con su audiencia en LATAM.
