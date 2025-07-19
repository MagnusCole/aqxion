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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 section-padding">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Guía no encontrada
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Esta guía no está disponible.
            </p>
            <a 
              href="/guias" 
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
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
      {/* Hero Clean & Simple */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-green-50/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Simple Status Badge */}
            <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              ✅ Guía Lista
            </div>
            
            {/* Clean Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {title}
            </h1>
            
            {/* Simple Subtitle */}
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Guía step-by-step implementable hoy mismo
            </p>
            
            {/* Back Navigation at Top */}
            <a 
              href="/guias" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
            >
              ← Volver a guías
            </a>
          </div>
        </div>
      </section>
      
      {/* Content Section - Clean & Focused */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose lg:prose-lg prose-slate">
            <div 
              dangerouslySetInnerHTML={{ __html: html }} 
              className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-800 [&>h2]:mb-6 [&>h2]:mt-12 first:[&>h2]:mt-0 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-700 [&>h3]:mb-4 [&>h3]:mt-8 [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:text-slate-600 [&>ol]:text-slate-600 [&>blockquote]:border-l-4 [&>blockquote]:border-green-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-700"
            />
            
            {/* CTA Integrado - Siguiendo la vibe */}
            <div className="not-prose bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-2 border-green-200 rounded-2xl p-8 my-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  ¿Listo para dejar de perder clientes por errores evitables?
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  <strong>Especializados en negocios locales que necesitan resultados reales.</strong><br />
                  Primera auditoría sin costo para identificar exactamente qué está fallando.
                </p>
                
                <a 
                  href="https://calendly.com/aqxion/auditoria-gratuita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Agenda tu auditoría gratuita aquí →
                </a>
                
                <p className="text-slate-500 text-sm mt-6">
                  20-30 minutos. Revisamos tu negocio y te decimos exactamente qué cambiar para conseguir más clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
