import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

function getGuides(): Guide[] {
  const contentDir = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const slug = file.replace('.md', '');
    const title = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/2025/, '- 2025')
      .replace(/\b\w+\b/g, (word) => {
        const replacements: { [key: string]: string } = {
          'Ia': 'IA', 'Roi': 'ROI', 'Seo': 'SEO', 'Whatsapp': 'WhatsApp',
          'Ads': 'Publicidad', 'Email': 'Email', 'Google': 'Google'
        };
        return replacements[word] || word;
      });

    // Categorizar automáticamente por palabras clave
    let category = 'General';
    let excerpt = 'Guía práctica paso-a-paso';

    if (slug.includes('clientes') || slug.includes('atraer') || slug.includes('leads')) {
      category = '🎯 Conseguir Clientes';
      excerpt = 'Estrategias probadas para atraer más clientes a tu negocio';
    } else if (slug.includes('ads') || slug.includes('publicidad') || slug.includes('google-maps') || slug.includes('seo')) {
      category = '📢 Marketing Digital';
      excerpt = 'Técnicas de marketing que generan resultados reales';
    } else if (slug.includes('automatiz') || slug.includes('ia-') || slug.includes('agentes-ia') || slug.includes('workflows')) {
      category = '🤖 Automatización';
      excerpt = 'Automatiza tu negocio y ahorra tiempo valioso';
    } else if (slug.includes('ventas') || slug.includes('conversion') || slug.includes('embudo')) {
      category = '💰 Aumentar Ventas';
      excerpt = 'Convierte más visitantes en clientes pagantes';
    } else if (slug.includes('retention') || slug.includes('promotores') || slug.includes('customer')) {
      category = '❤️ Fidelizar Clientes';
      excerpt = 'Mantén a tus clientes felices y que recomienden';
    }

    return { slug, title, excerpt, category };
  });
}

function organizeGuidesByProblem(guides: Guide[]) {
  const problems = {
    '🚨 ¿No tienes clientes?': guides.filter(g => g.category === '🎯 Conseguir Clientes'),
    '💸 ¿Gastas mucho en publicidad?': guides.filter(g => g.category === '📢 Marketing Digital'),
    '⏰ ¿Falta tiempo para todo?': guides.filter(g => g.category === '🤖 Automatización'),
    '📈 ¿Necesitas vender más?': guides.filter(g => g.category === '💰 Aumentar Ventas'),
    '🔄 ¿Pierdes clientes?': guides.filter(g => g.category === '❤️ Fidelizar Clientes'),
  };
  
  return problems;
}

export default function BlogPage() {
  const guides = getGuides();
  const problemGroups = organizeGuidesByProblem(guides);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      
      {/* Hero siguiendo la vibe: empathy-first, problem-focused */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-green-50/30">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Subtitle siguiendo el pattern de empathy */}
            <p className="text-lg text-slate-600 mb-6">
              41 Guías Step-by-Step 100% Gratuitas
            </p>
            
            {/* H1 problem-focused, siguiendo exact pattern homepage */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              ¿Tu PYME Necesita 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                Crecer Rápido?
              </span>
            </h1>
            
            {/* Benefit-focused subtitle siguiendo la vibe */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">Guías prácticas organizadas por problemas reales.</strong>
              <br />Sin teorías. Sin complicaciones. Implementables hoy mismo.
            </p>
          </div>
        </div>
      </section>

      {/* Problem-first organization siguiendo homepage structure */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Encuentra la Solución a Tu Problema
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Cada guía resuelve un problema específico de los dueños de PYMEs como tú
              </p>
            </div>
            
            {Object.entries(problemGroups).map(([problem, categoryGuides]) => (
              categoryGuides.length > 0 && (
                <div key={problem} className="mb-16">
                  
                  {/* Problem header con empathy */}
                  <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-calm-700 mb-4">
                      {problem}
                    </h2>
                    <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
                  </div>
                  
                  {/* Grid responsive con spacing escalable */}
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {categoryGuides.slice(0, 6).map((guide) => (
                      <li key={guide.slug}>
                        <Link 
                          href={`/guias/${guide.slug}`}
                          className="block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-200 group h-full"
                        >
                          <span className="text-lg font-semibold text-calm-700 group-hover:text-primary-600 transition-colors duration-200 leading-tight block mb-3">
                            {guide.title}
                          </span>
                          
                          <p className="text-neutral-600 mb-4 leading-relaxed text-sm">
                            {guide.excerpt}
                          </p>
                          
                          <span className="flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
                            <span className="emoji-icon text-primary-600">📖</span>
                            Leer guía completa
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Mostrar más si hay más guías */}
                  {categoryGuides.length > 6 && (
                    <div className="text-center">
                      <button className="inline-flex items-center bg-white text-neutral-700 border-2 border-neutral-200 hover:border-primary-200 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-md">
                        Ver todas en esta categoría
                        <span className="emoji-icon">👆</span>
                      </button>
                    </div>
                  )}
                </div>
              )
            ))}

            {/* CTA final empowerment-focused */}
            <div className="mt-20 bg-gradient-to-r from-calm-600 to-primary-600 text-white p-8 sm:p-12 rounded-2xl text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                ¿Necesitas Acelerar la Implementación?
              </h3>
              <p className="text-lg text-calm-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Si quieres <strong>templates listos</strong> y herramientas que aceleren tu implementación, 
                tenemos recursos preparados para ahorrarte tiempo.
              </p>
              <Link 
                href="/recursos" 
                className="inline-flex items-center justify-center bg-white text-calm-700 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Ver Recursos Listos
                <span className="emoji-icon">🚀</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
