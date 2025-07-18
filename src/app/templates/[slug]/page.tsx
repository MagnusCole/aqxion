import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export async function generateStaticParams() {
  const templatesDir = path.join(process.cwd(), 'templates');
  if (!fs.existsSync(templatesDir)) {
    return [];
  }
  const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.md'));
  return files.map(file => ({ slug: file.replace('.md', '') }));
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'templates', `${slug}.md`);
  
  // Generar título desde slug
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Template no encontrado</h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, este template no está disponible en este momento.
          </p>
          <a href="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Volver al Inicio
          </a>
        </div>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const html = marked(content);

  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blueTrust mb-4">
            {title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600">
            <span>📁 Template Gratis</span>
            <span>⚡ Implementación Inmediata</span>
            <span>🎯 Value-First</span>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-3xl mx-auto">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }} 
          />
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-greenValue/10 rounded-lg border border-greenValue/20">
          <h3 className="text-2xl font-bold text-blueTrust mb-4">¿Te Sirve Este Template?</h3>
          <p className="text-gray-700 mb-4">
            Si implementas este template y necesitas personalización o ayuda para escalarlo, 
            podemos trabajar juntos en equity (no fees upfront).
          </p>
          <a 
            href="/#pilots" 
            className="inline-block bg-goldCTA text-white px-6 py-3 rounded-md font-semibold hover:bg-greenValue transition-colors mr-4"
          >
            Ver Pilots Disponibles
          </a>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Nota:</strong> Templates diseñados para implementación inmediata. 
              Personaliza según tu industria y contexto específico.
            </p>
            <div className="flex justify-between">
              <a href="/" className="text-greenValue hover:text-blueTrust transition-colors">
                ← Volver al Inicio
              </a>
              <a href="/blog" className="text-greenValue hover:text-blueTrust transition-colors">
                Ver Guías →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
