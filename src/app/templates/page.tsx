import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Template {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export default function TemplatesPage() {
  const templatesDirectory = path.join(process.cwd(), 'templates');
  
  const templates: Template[] = [
    {
      slug: 'outreach-automatizado-sistema-completo-2025',
      title: 'Template Outreach Completo',
      description: 'Sistema completo para conseguir leads vía email frío que convierte. Incluye secuencias, seguimientos y scripts probados.',
      icon: '🎯'
    },
    {
      slug: 'roi-calculator',
      title: 'Calculadora ROI Marketing',
      description: 'Herramienta para calcular retorno real de tus inversiones en marketing digital y tradicional.',
      icon: '📊'
    },
    {
      slug: 'whatsapp-scripts',
      title: 'Scripts WhatsApp Ventas',
      description: 'Plantillas probadas para cerrar ventas vía WhatsApp Business. Incluye objeciones comunes.',
      icon: '📱'
    },
    {
      slug: 'ia-workflows',
      title: 'Workflows IA Automatizados',
      description: 'Automatizaciones listas para implementar con ChatGPT, Zapier y herramientas gratuitas.',
      icon: '🔄'
    },
    {
      slug: 'plan-90-dias',
      title: 'Plan Crecimiento 90 Días',
      description: 'Roadmap completo para escalar de 0 a 6 cifras en 3 meses. Incluye métricas y milestones.',
      icon: '📈'
    },
    {
      slug: 'seo-checklist',
      title: 'Checklist SEO Completo',
      description: 'Lista verificable para optimizar tu sitio web y aparecer en Google. SEO técnico y contenido.',
      icon: '🎯'
    }
  ];

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-blueTrust mb-4 text-center">
        Tools para Escalar Solo
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Herramientas, plantillas y recursos listos para usar en tu negocio. 
        Todo gratuito, accionable y probado en empresas reales.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.slug} className="p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{template.icon}</div>
            <h3 className="text-xl font-semibold text-greenValue mb-3">
              {template.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {template.description}
            </p>
            <Link 
              href={`/templates/${template.slug}`}
              className="inline-block bg-greenValue text-white py-2 px-4 rounded-md hover:bg-blueTrust transition-colors"
            >
              Usar Template →
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-blueTrust mb-4">
          ¿Necesitas Más Recursos?
        </h2>
        <p className="text-gray-600 mb-6">
          Explora nuestras guías paso a paso para implementar estas herramientas.
        </p>
        <Link 
          href="/blog"
          className="bg-blueTrust text-white py-3 px-6 rounded-md hover:bg-greenValue transition-colors"
        >
          Ver Todas las Guías
        </Link>
      </div>
    </div>
  );
}
