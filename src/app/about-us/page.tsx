import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nosotros - AQXION',
  description: 'Conoce nuestra misión y los 10 mandamientos de crecimiento inevitable que ayudan a negocios locales a conseguir más clientes y crecer de forma sostenible.'
};export default function AboutUsPage() {  const mandamientos = [    {      numero: "01",      titulo: "Que te vean todos los días",
      descripcion: "Si nadie sabe que existes, nadie compra. Publica, escribe, habla, sal a buscar. Todos los días alguien nuevo debe encontrarte."
    },
    {
      numero: "02",
      titulo: "No dejes que se vayan sin saber qué sigue",
      descripcion: "Cada persona que te conoce debe tener claro qué paso dar. Ver y desaparecer no sirve. Ofreces algo o haces seguimiento."
    },
    {
      numero: "03",
      titulo: "Primero vende, después decora",
      descripcion: "Tu logo no paga las cuentas. Si algo no convierte, no importa qué tan bonito se vea. Primero asegúrate de que alguien pague."
    },
    {
      numero: "04",
      titulo: "Haz seguimiento hasta que te compren o te bloqueen",
      descripcion: "&ldquo;No respondió&rdquo; no es lo mismo que &ldquo;no quiere&rdquo;. La mayoría compra después del tercer intento. Sé constante sin ser pesado."
    },
    {
      numero: "05",
      titulo: "Cuida a los que ya te pagaron",
      descripcion: "Venderle a alguien nuevo cuesta más que ayudar otra vez al que ya confió en ti. Haz que vuelvan, recomienden y crezcan contigo."
    },
    {
      numero: "06",
      titulo: "Haz primero lo que menos ganas te da",
      descripcion: "Lo que más retorno trae suele ser lo que más evitas: llamadas, cobros, revisar procesos. Hazlo al comienzo del día. Sin pensar."
    },
    {
      numero: "07",
      titulo: "Decide y ejecuta el mismo día",
      descripcion: "Reuniones sin acción matan negocios. No pospongas. Si decidiste algo hoy, se hace hoy."
    },
    {
      numero: "08",
      titulo: "Si funciona, escríbelo y repítelo",
      descripcion: "No dependas de la memoria o de una persona estrella. Todo lo que convierte se convierte en sistema. Así se escala."
    },
    {
      numero: "09",
      titulo: "Cada acción debe generar tráfico, conversión o retención",
      descripcion: "Si no suma en esas tres, es distracción. Revisa lo que haces y córtalo si no ayuda a vender ni retener."
    },
    {
      numero: "10",
      titulo: "Hazlo simple o no lo hagas",
      descripcion: "Los negocios no fallan por falta de ideas, fallan por exceso de complejidad. Todo lo que hagas debe poder explicarse en una frase. Si no, algo está mal."
    }
  ];

  return (
    <div className="min-h-screen bg-white">      {/* Hero + Misión Section - Diseño moderno SaaS sin redundancias */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Misión optimizada como foco principal */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-8">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
              Ayudamos a negocios locales a conseguir más clientes
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto font-medium">
              Crecer sin enredos y tener un negocio que te dé tranquilidad, tiempo y estabilidad
            </p>
            
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>
          
          {/* Contenido de la misión sin caja, más limpio */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">El problema que resolvemos</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sabemos lo difícil que es vender bien cuando no sabes por dónde empezar, o cuando ya estás cansado de probar cosas que no funcionan.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra solución</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hacemos sistemas simples que sí funcionan. Nada raro. Solo cosas que puedes usar de verdad y que te dan resultados.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 md:p-12 text-center shadow-xl mb-12">
              <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed">
                Que puedas pagar tranquilo tus cuentas, tener más tiempo para tu familia y sentir que tu negocio ya no te consume, sino que trabaja para ti.
              </p>
            </div>

            {/* CTA principal */}
            <div className="text-center">
              <a 
                href="#mandamientos" 
                className="inline-flex items-center justify-center px-12 py-6 bg-blue-600 text-white font-bold text-xl rounded-2xl hover:bg-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                Descubre los 10 mandamientos de crecimiento
                <svg className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>{/* Los 10 Mandamientos Section */}
      <section id="mandamientos" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Los 10 mandamientos de crecimiento inevitable
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Principios fundamentales que transforman negocios locales en máquinas de crecimiento sostenible.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {mandamientos.map((mandamiento, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {mandamiento.numero}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                      {mandamiento.titulo}
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: mandamiento.descripcion }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Aplica estos mandamientos y convierte tu negocio en una máquina de generar clientes y resultados predecibles.
            </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contacto" 
                className="group inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto"
              >
                Habla con nosotros
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
                <Link 
                href="/blog" 
                className="group inline-flex items-center justify-center px-10 py-5 bg-transparent text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200 w-full sm:w-auto"
              >
                Ver casos de éxito
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Negocios transformados</div>
              </div>
              <div className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">3x</div>
                <div className="text-blue-100">Crecimiento promedio</div>
              </div>
              <div className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">90%</div>
                <div className="text-blue-100">Tasa de éxito</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
