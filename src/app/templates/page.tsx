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
      title: 'Emails que funcionan',
      description: 'Qué escribir para contactar clientes potenciales y que te respondan. Incluye ejemplos y seguimientos.',
      icon: '🎯'
    },
    {
      slug: 'roi-calculator',
      title: 'Calcula si vale la pena',
      description: 'Saber si tu marketing realmente te está dando dinero o solo te está costando.',
      icon: '📊'
    },
    {
      slug: 'whatsapp-scripts',
      title: 'Mensajes para WhatsApp',
      description: 'Qué escribir para vender por WhatsApp sin sonar raro o agresivo.',
      icon: '📱'
    },
    {
      slug: 'ia-workflows',
      title: 'IA que hace el trabajo',
      description: 'Cómo configurar ChatGPT para que haga tareas de marketing por ti.',
      icon: '🔄'
    },
    {
      slug: 'plan-90-dias',
      title: 'Plan para 3 meses',
      description: 'Qué hacer cada mes para hacer crecer tu negocio sin perderte.',
      icon: '📈'
    },
    {
      slug: 'seo-checklist',
      title: 'Lista para SEO',
      description: 'Qué revisar en tu web para que Google te encuentre más fácil.',
      icon: '🎯'
    }
  ];

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-blueTrust mb-4 text-center">
        Herramientas que puedes usar ya
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Templates, scripts y herramientas listas para tu negocio. 
        Todo gratis y probado en negocios reales.
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
              Usar esto →
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-blueTrust mb-4">
          ¿Quieres más?
        </h2>
        <p className="text-gray-600 mb-6">
          También tenemos guías paso a paso para implementar estas herramientas.
        </p>
        <Link 
          href="/blog"
          className="bg-blueTrust text-white py-3 px-6 rounded-md hover:bg-greenValue transition-colors"
        >
          Ver las guías
        </Link>
      </div>
    </div>
  );
}
