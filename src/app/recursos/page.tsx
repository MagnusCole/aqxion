import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Resource {
  slug: string;
  title: string;
  description: string;
  urgency: 'urgente' | 'crecimiento' | 'automatizar';
  icon: string;
  actionText: string;
}

function getResources(): Resource[] {
  const recursosDir = path.join(process.cwd(), 'recursos');
  if (!fs.existsSync(recursosDir)) return [];
  
  const files = fs.readdirSync(recursosDir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const slug = file.replace('.md', '');
    const title = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/Template|Scripts/g, '')
      .trim();

    // Categorización por urgencia mejorada
    let urgency: 'urgente' | 'crecimiento' | 'automatizar' = 'crecimiento';
    let icon = '📋';
    let description = 'Recurso listo para implementar';
    let actionText = 'Ver Recurso';

    if (slug.includes('outreach') || slug.includes('email') || slug.includes('scripts')) {
      urgency = 'urgente';
      icon = '🚨';
      description = 'Implementa HOY para conseguir clientes inmediatamente';
      actionText = 'Usar Ahora';
    } else if (slug.includes('pilots') || slug.includes('equity') || slug.includes('partnership')) {
      urgency = 'crecimiento';
      icon = '📈';
      description = 'Para escalar tu negocio de forma inteligente';
      actionText = 'Ver Estrategia';
    } else if (slug.includes('automation') || slug.includes('workflows') || slug.includes('sistemas')) {
      urgency = 'automatizar';
      icon = '🤖';
      description = 'Ahorra tiempo automatizando procesos repetitivos';
      actionText = 'Automatizar';
    }

    return { slug, title, description, urgency, icon, actionText };
  });
}

export default function RecursosPage() {
  const resources = getResources();
  
  const urgentResources = resources.filter(r => r.urgency === 'urgente');
  const growthResources = resources.filter(r => r.urgency === 'crecimiento');
  const automateResources = resources.filter(r => r.urgency === 'automatizar');

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Ultra-Optimizado */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container-padding">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full mb-8 shadow-sm border border-green-200">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-800 font-semibold">Recursos Probados y Listos</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-8 tracking-tight leading-tight">
              Recursos para
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                tu Negocio
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-neutral-600 mb-12 font-medium max-w-4xl mx-auto leading-relaxed">
              <strong>Copy-paste-implementa.</strong>
              <br />
              <span className="text-green-600">Templates, scripts y herramientas listas para usar HOY.</span>
            </p>

            {/* Quick Action Guide */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200 max-w-3xl mx-auto mb-12">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">¿Por dónde empezar?</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl mb-2">🚨</div>
                  <div className="font-semibold text-red-800">¿Necesitas clientes YA?</div>
                  <div className="text-red-600">Usa recursos URGENTES</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="font-semibold text-blue-800">¿Ya tienes clientes?</div>
                  <div className="text-blue-600">Ve a CRECIMIENTO</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="font-semibold text-green-800">¿Falta tiempo?</div>
                  <div className="text-green-600">Revisa AUTOMATIZAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources by Urgency - Mejoradas */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            
            {/* URGENTE - Necesitas clientes YA */}
            {urgentResources.length > 0 && (
              <div className="mb-20">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-3xl mb-8 shadow-2xl">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-4xl mr-4">🚨</div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-2">
                        URGENTE - Necesitas Clientes YA
                      </h2>
                      <p className="text-xl text-red-100">
                        <strong>Implementa HOY</strong> si tu negocio necesita clientes inmediatamente
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center bg-white/10 p-4 rounded-xl">
                    <div className="text-sm font-semibold">⏱️ Tiempo de implementación: 1-2 horas</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {urgentResources.map((resource) => (
                    <Link 
                      key={resource.slug} 
                      href={`/recursos/${resource.slug}`}
                      className="group bg-white border-3 border-red-200 rounded-2xl p-8 hover:shadow-2xl hover:border-red-300 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Urgency indicator */}
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        URGENTE
                      </div>
                      
                      <div className="flex items-start gap-6">
                        <div className="text-5xl">{resource.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                            {resource.title}
                          </h3>
                          <p className="text-neutral-600 mb-6 leading-relaxed">
                            {resource.description}
                          </p>
                          <div className="flex items-center text-red-600 font-bold group-hover:text-red-700 transition-colors duration-200">
                            <span>{resource.actionText}</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CRECIMIENTO - Para expandir */}
            {growthResources.length > 0 && (
              <div className="mb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-3xl mb-8 shadow-2xl">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-4xl mr-4">📈</div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-2">
                        CRECIMIENTO - Para Expandir
                      </h2>
                      <p className="text-xl text-blue-100">
                        Cuando ya tienes clientes y quieres <strong>escalar inteligentemente</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center bg-white/10 p-4 rounded-xl">
                    <div className="text-sm font-semibold">📊 Para negocios que ya facturan +$5K/mes</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {growthResources.map((resource) => (
                    <Link 
                      key={resource.slug} 
                      href={`/recursos/${resource.slug}`}
                      className="group bg-white border-3 border-blue-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Growth indicator */}
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        CRECIMIENTO
                      </div>
                      
                      <div className="flex items-start gap-6">
                        <div className="text-5xl">{resource.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                            {resource.title}
                          </h3>
                          <p className="text-neutral-600 mb-6 leading-relaxed">
                            {resource.description}
                          </p>
                          <div className="flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors duration-200">
                            <span>{resource.actionText}</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* AUTOMATIZAR - Optimiza tiempo */}
            {automateResources.length > 0 && (
              <div className="mb-20">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-3xl mb-8 shadow-2xl">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-4xl mr-4">🤖</div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-2">
                        AUTOMATIZAR - Optimiza Tiempo
                      </h2>
                      <p className="text-xl text-green-100">
                        <strong>Trabaja menos, gana más.</strong> Automatiza procesos repetitivos
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center bg-white/10 p-4 rounded-xl">
                    <div className="text-sm font-semibold">⏰ Ahorra 10-20 horas por semana</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {automateResources.map((resource) => (
                    <Link 
                      key={resource.slug} 
                      href={`/recursos/${resource.slug}`}
                      className="group bg-white border-3 border-green-200 rounded-2xl p-8 hover:shadow-2xl hover:border-green-300 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Automation indicator */}
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        AUTOMATIZAR
                      </div>
                      
                      <div className="flex items-start gap-6">
                        <div className="text-5xl">{resource.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                            {resource.title}
                          </h3>
                          <p className="text-neutral-600 mb-6 leading-relaxed">
                            {resource.description}
                          </p>
                          <div className="flex items-center text-green-600 font-bold group-hover:text-green-700 transition-colors duration-200">
                            <span>{resource.actionText}</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA de ayuda mejorado */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-12 rounded-3xl text-center shadow-2xl">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                ¿Necesitas que lo implementemos por ti?
              </h3>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Si prefieres que nosotros manejemos la implementación mientras tú te enfocas en dirigir tu negocio, podemos ayudarte con consultoría personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Ver Nuestras Guías Completas
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
                
                <a 
                  href="mailto:hola@aqxion.com" 
                  className="inline-flex items-center justify-center bg-white text-neutral-900 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg"
                >
                  Consultoría Personalizada
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
