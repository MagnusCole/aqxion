import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  return files.map(file => ({ slug: file.replace('.md', '') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace('-2025', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${title} | Guía Gratis AQXION`,
    description: `Guía práctica: ${title}. Implementación paso-a-paso, resultados reales, sin teorías.`,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  
  // Format title better
  const title = slug
    .replace('-2025', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\b\w+\b/g, (word) => {
      const replacements: { [key: string]: string } = {
        'Seo': 'SEO',
        'Ia': 'IA', 
        'Roi': 'ROI',
        'Pymes': 'PYMEs',
        'Whatsapp': 'WhatsApp'
      };
      return replacements[word] || word;
    });
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-white section-padding">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Guía no encontrada
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Esta guía no está disponible.
            </p>
            <a href="/guias" className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
              ← Ver Todas las Guías
            </a>
          </div>
        </div>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const html = marked(content);

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Hero empathy-focused, problem-solving vibe */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-green-50/30 section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Badge de implementación práctica - status green (ready) */}
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full mb-6 font-semibold">
              <span className="mr-2 text-lg">✅</span>
              Guía Lista para Implementar
            </div>
            
            {/* H1 siguiendo pattern problem-focused del homepage */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                {title}
              </span>
            </h1>
            
            {/* Benefit-focused subtitle siguiendo la vibe */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">Guía step-by-step implementable hoy mismo.</strong>
              <br />Sin teorías, solo estrategias probadas para PYMEs como la tuya.
            </p>
            
            {/* Meta info con styling mejorado */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm mb-8">
              <span className="flex items-center bg-white px-4 py-2 rounded-xl border border-neutral-200">
                <span className="mr-2">📅</span>
                Actualizado {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}
              </span>
              <span className="flex items-center bg-white px-4 py-2 rounded-xl border border-neutral-200">
                <span className="mr-2">⏱️</span>
                8-12 min lectura
              </span>
              <span className="flex items-center bg-white px-4 py-2 rounded-xl border border-neutral-200">
                <span className="mr-2">✅</span>
                Implementable hoy
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal siguiendo vibe calm + professional */}
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="prose lg:prose-xl text-slate-700 max-w-4xl mx-auto">
          <div 
            dangerouslySetInnerHTML={{ __html: html }} 
            className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-800 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-800 [&>h3]:mb-4 [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:text-slate-600 [&>ol]:text-slate-600"
          />
          
          {/* Tips para Implementar - empowerment focused */}
          <section className="mt-16 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="mr-3">🚀</span>
              Cómo Implementar Esta Guía Hoy
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Paso 1: Empieza Simple</h4>
                    <p className="text-slate-600 text-sm">Elige el primer paso más fácil de la guía y hazlo hoy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⏰</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Paso 2: Dedica Tiempo</h4>
                    <p className="text-slate-600 text-sm">15-30 minutos diarios son suficientes para ver resultados</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Paso 3: Mide Resultados</h4>
                    <p className="text-slate-600 text-sm">Revisa avances cada semana y ajusta según sea necesario</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🎯</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Paso 4: Mantén Foco</h4>
                    <p className="text-slate-600 text-sm">Domina 1-2 tácticas antes de agregar más</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* CTA Navigation - problem-solving focused */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              ¿Necesitas Más Estrategias Como Esta?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tenemos 41 guías más organizadas por los problemas reales que enfrentas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-200 group">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Ver Todas las Guías
              </h3>
              <p className="text-slate-600 mb-4">
                41 guías organizadas por problemas específicos de PYMEs
              </p>
              <a 
                href="/guias" 
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
              >
                Explorar guías
                <span className="ml-2">→</span>
              </a>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Recursos y Templates
              </h3>
              <p className="text-slate-600 mb-4">
                Herramientas listas para acelerar tu implementación
              </p>
              <a 
                href="/recursos" 
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Ver recursos
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Back Navigation - simple and clear */}
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="/guias" 
            className="inline-flex items-center justify-center bg-white text-slate-700 border border-neutral-200 px-8 py-4 text-lg font-semibold rounded-xl hover:border-green-200 hover:shadow-md transition-all duration-200"
          >
            ← Volver a todas las guías
          </a>
        </div>
      </div>
    </article>
  );
}
