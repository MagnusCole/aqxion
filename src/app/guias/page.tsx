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
    <div className="min-h-screen bg-white">
      
      {/* Hero Mejorado */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-padding">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full mb-8 shadow-sm border border-primary-200">
              <span className="text-primary-600 font-semibold">📚 41 Guías Gratuitas Disponibles</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-8 tracking-tight leading-tight">
              Guías para Hacer Crecer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                tu PYME
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-neutral-600 mb-12 font-medium max-w-4xl mx-auto leading-relaxed">
              <strong>Step-by-step. Probadas. Gratis.</strong>
              <br />
              <span className="text-primary-600">Implementa hoy, ve resultados en 30 días.</span>
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
                <div className="text-2xl font-black text-primary-600">41</div>
                <div className="text-sm text-neutral-600">Guías</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
                <div className="text-2xl font-black text-green-600">100%</div>
                <div className="text-sm text-neutral-600">Gratis</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
                <div className="text-2xl font-black text-blue-600">30</div>
                <div className="text-sm text-neutral-600">Días</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Based Categories Mejoradas */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            
            {Object.entries(problemGroups).map(([problem, categoryGuides]) => (
              categoryGuides.length > 0 && (
                <div key={problem} className="mb-20">
                  
                  {/* Category Header Mejorado */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                      {problem}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto rounded-full"></div>
                  </div>
                  
                  {/* Guides Grid Optimizado */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {categoryGuides.slice(0, 6).map((guide) => (
                      <Link 
                        key={guide.slug} 
                        href={`/guias/${guide.slug}`}
                        className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary-300 hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Category Badge */}
                        <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                          {guide.category}
                        </div>
                        
                        <h3 className="font-bold text-neutral-900 mb-4 leading-tight text-xl group-hover:text-primary-600 transition-colors duration-200">
                          {guide.title}
                        </h3>
                        
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                          {guide.excerpt}
                        </p>
                        
                        <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-200">
                          <span>Leer guía</span>
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Ver más button */}
                  {categoryGuides.length > 6 && (
                    <div className="text-center">
                      <button className="inline-flex items-center bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                        Ver todas las guías de esta categoría
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )
            ))}

            {/* CTA Final Mejorado */}
            <div className="mt-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white p-12 rounded-3xl text-center shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                ¿Necesitas implementar esto YA?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Si quieres saltarte el DIY y que nosotros implementemos estas estrategias por ti, tenemos recursos listos para usar.
              </p>
              <Link 
                href="/recursos" 
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Ver Recursos Listos para Usar
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
