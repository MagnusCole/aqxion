import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Template {
  slug: string;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

export default function TemplatesPage() {
  const templatesDirectory = path.join(process.cwd(), 'templates');
  
  const templates: Template[] = [
    {
      slug: 'outreach-automatizado-sistema-completo-2025',
      title: 'Emails que Funcionan',
      description: 'Scripts completos para contactar clientes potenciales y conseguir reuniones. Incluye ejemplos probados y secuencias de seguimiento.',
      icon: '🎯',
      benefit: 'Ahorra 5+ horas por email'
    },
    {
      slug: 'roi-calculator',
      title: 'Calculadora de ROI',
      description: 'Herramienta simple para saber exactamente si tu marketing te está dando dinero o solo gastando presupuesto.',
      icon: '📊',
      benefit: 'Claridad financiera en 5 minutos'
    },
    {
      slug: 'whatsapp-scripts',
      title: 'Scripts para WhatsApp',
      description: 'Mensajes probados para vender por WhatsApp sin sonar agresivo, raro o como bot. Incluye objeciones comunes.',
      icon: '📱',
      benefit: 'Conversiones 3x mejores'
    },
    {
      slug: 'ia-workflows',
      title: 'Workflows de IA',
      description: 'Configuraciones step-by-step de ChatGPT y herramientas de IA para automatizar marketing, contenido y seguimiento.',
      icon: '🔄',
      benefit: 'Automático 24/7'
    },
    {
      slug: 'plan-90-dias',
      title: 'Plan de 90 Días',
      description: 'Roadmap mes a mes para hacer crecer tu negocio de forma ordenada, sin perderte en mil tareas sin rumbo.',
      icon: '📈',
      benefit: 'Crecimiento estructurado'
    },
    {
      slug: 'seo-checklist',
      title: 'Checklist SEO Completo',
      description: 'Lista de verificación detallada para que Google encuentre tu web fácilmente y aparezcas en primeros resultados.',
      icon: '🎯',
      benefit: 'Visibilidad orgánica'
    }
  ];

  return (
    <main className="section-padding bg-neutral-50 min-h-screen">
      <div className="container">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-calm-700 mb-6 sm:mb-8 tracking-tight">
            Herramientas que Puedes Usar Ya
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-600 max-w-4xl mx-auto text-breathable">
            Templates, scripts y herramientas probadas en negocios reales. 
            Todo listo para implementar en tu PYME hoy mismo.
          </p>
        </div>
        
        <ul className="tools-grid">
          {templates.map((template) => (
            <li key={template.slug}>
              <div className="text-5xl sm:text-6xl mb-6">{template.icon}</div>
              <h3 className="text-xl sm:text-2xl text-calm-700 font-semibold mb-3">
                {template.title}
              </h3>
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 text-breathable">
                {template.description}
              </p>
              <span className="text-lg sm:text-xl flex items-center mt-4 mb-6 text-primary-600 font-medium">
                <span className="emoji-icon">✅</span>
                {template.benefit}
              </span>
              <Link 
                href={`/templates/${template.slug}`}
                className="inline-block bg-primary-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors duration-200 hover:shadow-md"
              >
                Usar Esto →
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-white card-padding rounded-xl border border-neutral-200 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-calm-700 mb-6 tracking-tight">
              ¿Quieres las Guías Completas?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 text-breathable max-w-3xl mx-auto">
              También tenemos guías paso a paso de cómo implementar estas herramientas 
              para conseguir los mejores resultados en tu negocio.
            </p>
            <Link 
              href="/blog"
              className="inline-block bg-calm-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-calm-700 transition-colors duration-200 hover:shadow-md"
            >
              Ver las Guías Step-by-Step
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/" className="text-xl text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}
