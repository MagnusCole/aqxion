import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const recursosDir = path.join(process.cwd(), 'recursos');
  if (!fs.existsSync(recursosDir)) {
    return [];
  }
  const files = fs.readdirSync(recursosDir).filter(f => f.endsWith('.md'));
  return files.map(file => ({ slug: file.replace('.md', '') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${title} | Recurso Gratuito AQXION`,
    description: `Recurso listo para usar: ${title}. Descarga gratis, implementa hoy, obtén resultados.`,
  };
}

export default async function RecursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'recursos', `${slug}.md`);
  
  // Generar título más natural desde slug
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\b\w+\b/g, (word) => {
      const replacements: { [key: string]: string } = {
        'Template': 'Template:',
        'Calculadora': 'Calculadora:',
        'Script': 'Scripts de',
        'Checklist': 'Checklist:',
        'Workflow': 'Workflow:'
      };
      return replacements[word] || word;
    });
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">😔</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Recurso no Encontrado
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Este recurso no está disponible o ha sido movido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/recursos" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Ver Todos los Recursos
              </a>
              <a 
                href="/" 
                className="inline-flex items-center justify-center bg-white text-slate-700 border border-neutral-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-200 transition-colors duration-200"
              >
                Volver al Inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const html = marked(content);

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero siguiendo vibe: urgency-focused, action-oriented */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Badge de recurso listo - status blue (resources) */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full mb-6 font-semibold">
              <span className="mr-2 text-lg">⚡</span>
              Recurso Listo para Descargar
            </div>
            
            {/* H1 siguiendo pattern urgency-focused */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                {title}
              </span>
            </h1>
            
            {/* Benefit-focused subtitle siguiendo la vibe */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">Herramienta lista para usar ahora mismo.</strong>
              <br />Descarga, personaliza según tu negocio, y obtén resultados inmediatos.
            </p>
            
            {/* Meta info con styling mejorado */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm mb-8">
              <span className="flex items-center bg-white px-4 py-2 rounded-xl border border-neutral-200">
                <span className="mr-2">�</span>
                Descarga Gratuita
              </span>
              <span className="flex items-center bg-white px-4 py-2 rounded-xl border border-neutral-200">
                <span className="mr-2">⚡</span>
                Implementación Inmediata
              </span>
              <span className="flex items-center bg-white px-4 py-2 rounded-xl border border-neutral-200">
                <span className="mr-2">✅</span>
                Sin Registro Requerido
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
              className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-800 [&>h2]:mb-6 [&>h2]:mt-12 first:[&>h2]:mt-0 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-700 [&>h3]:mb-4 [&>h3]:mt-8 [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:text-slate-600 [&>ol]:text-slate-600 [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-700"
            />
            
            {/* CTA Integrado - Siguiendo la vibe */}
            <div className="not-prose bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-8 my-12">
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
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Agenda tu auditoría gratuita aquí →
                </a>
                
                <p className="text-slate-500 text-sm mt-6">
                  20-30 minutos. Revisamos tu negocio y te decimos exactamente qué cambiar para conseguir más clientes.
                </p>
              </div>
            </div>
            
            {/* Download CTA - Simple y directo */}
            <div className="not-prose bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-4">📥</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Descargar Este Recurso
                </h3>
                <p className="text-slate-600 mb-6">
                  Recurso listo para personalizar y usar en tu negocio
                </p>
                <a 
                  href={`/recursos/downloads/${slug}.pdf`}
                  className="inline-flex items-center bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200"
                  download
                >
                  📄 Descargar Gratis
                </a>
              </div>
            </div>
          
          {/* CTA de descarga - urgency focused */}
          <section className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
            <div className="text-center">
              <div className="text-4xl mb-4">📥</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Descarga Este Recurso Ahora
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                100% gratuito, sin registro, sin trucos. Solo herramientas que funcionan para PYMEs como la tuya.
              </p>
              <button className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:scale-105">
                <span className="mr-2">⬇️</span>
                Descargar Ahora (Gratis)
              </button>
            </div>
          </section>
          
          {/* Personalización tips - empowerment focused */}
          <section className="mt-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="mr-3">🎯</span>
              Cómo Personalizar para Tu Negocio
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📝</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Adapta el Contenido</h4>
                    <p className="text-slate-600 text-sm">Personaliza textos, colores y datos según tu industria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🎨</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Usa Tu Marca</h4>
                    <p className="text-slate-600 text-sm">Añade tu logo, colores corporativos y información de contacto</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Mide Resultados</h4>
                    <p className="text-slate-600 text-sm">Define métricas clave antes de implementar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🔄</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Itera y Mejora</h4>
                    <p className="text-slate-600 text-sm">Ajusta según los resultados que obtengas</p>
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
              ¿Necesitas Más Herramientas Como Esta?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tenemos templates, calculadoras y herramientas para cada problema de tu PYME
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Más Recursos Listos
              </h3>
              <p className="text-slate-600 mb-4">
                Templates, calculadoras y herramientas para acelerar tu crecimiento
              </p>
              <a 
                href="/recursos" 
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Ver todos los recursos
                <span className="ml-2">→</span>
              </a>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-200 group">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Guías de Implementación
              </h3>
              <p className="text-slate-600 mb-4">
                Step-by-step detallado para sacar el máximo de cada recurso
              </p>
              <a 
                href="/guias" 
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
              >
                Ver guías completas
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Back Navigation - simple and clear */}
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="/recursos" 
            className="inline-flex items-center justify-center bg-white text-slate-700 border border-neutral-200 px-8 py-4 text-lg font-semibold rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-200"
          >
            ← Volver a todos los recursos
          </a>
        </div>
      </div>

      {/* Soft CTA Section - Following the vibe */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              ¿Necesitas Personalizarlo para tu Negocio?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              <strong className="text-white">Cada recurso es adaptable.</strong>
              <br />Si necesitas ayuda personalizándolo, conversemos sin compromiso.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Email Option */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Consulta por Correo
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Para adaptaciones sencillas
                </p>
                <a 
                  href="mailto:hola@aqxion.com?subject=Ayuda con recurso: {title}"
                  className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Escribir Consulta
                </a>
              </div>

              {/* Calendar Option */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Sesión de 15 Min
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Personalización completa
                </p>
                <a 
                  href="https://calendly.com/aqxion/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                >
                  Agendar Sesión
                </a>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm mt-8">
              <strong>Sin costos adicionales.</strong> Quiero que uses estos recursos y obtengas resultados reales.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
