'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Clock, Check, ArrowRight, Heart, Users, TrendingUp, Coffee, MapPin, Lightbulb } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nombre: string;
  email: string;
  tipoNegocio: string;
  ubicacion: string;
  principalProblema: string;
  mensaje?: string;
}

const tiposNegocio = [
  { value: 'clinica-dental', label: '🦷 Clínica Dental', popular: true },
  { value: 'salon-belleza', label: '💅 Salón de Belleza', popular: true },
  { value: 'consultorio-medico', label: '👨‍⚕️ Consultorio Médico', popular: false },
  { value: 'abogado', label: '⚖️ Bufete Legal', popular: false },
  { value: 'restaurante', label: '🍽️ Restaurante', popular: true },
  { value: 'gym-fitness', label: '💪 Gimnasio/Fitness', popular: false },
  { value: 'academia', label: '📚 Academia/Instituto', popular: false },
  { value: 'taller-mecanico', label: '🔧 Taller Mecánico', popular: false },
  { value: 'otro', label: '🏢 Otro tipo de negocio', popular: false }
];

const problemasComunes = [
  { 
    value: 'pocos-clientes', 
    label: '😔 Muy pocos clientes',
    description: 'Mi negocio depende del boca a boca y no llegan suficientes clientes'
  },
  { 
    value: 'ingresos-impredecibles', 
    label: '📉 Ingresos impredecibles',
    description: 'Algunos meses están bien, otros apenas para cubrir gastos'
  },
  { 
    value: 'invisible-online', 
    label: '👻 Invisible en internet',
    description: 'Cuando buscan mi servicio en Google, no aparezco'
  },
  { 
    value: 'no-tiempo-marketing', 
    label: '⏰ Sin tiempo para marketing',
    description: 'Estoy ocupado atendiendo clientes y no tengo tiempo para promocionarme'
  },
  { 
    value: 'competencia-fuerte', 
    label: '🥊 Mucha competencia',
    description: 'Hay muchos negocios como el mío y no sé cómo destacar'
  },
  { 
    value: 'no-se-donde-empezar', 
    label: '🤷‍♂️ No sé por dónde empezar',
    description: 'Sé que necesito presencia digital pero no tengo idea de cómo hacerlo'
  }
];

export function ContactModalMagico({ isOpen, onClose }: ContactModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simular análisis personalizado
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // En producción, aquí enviarías los datos a tu backend/CRM
      console.log('🎯 Nuevo lead MYPE:', {
        nombre: data.nombre,
        email: data.email,
        tipoNegocio: data.tipoNegocio,
        ubicacion: data.ubicacion,
        principalProblema: data.principalProblema,
        mensaje: data.mensaje,
        timestamp: new Date().toISOString(),
        source: 'contacto-web-mype-magico',
        planInteresado: 'Plan MYPE S/.1,500'
      });
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        reset();
        setIsSubmitted(false);
        setCurrentStep(1);
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const selectedTipoNegocio = watch('tipoNegocio');
  const selectedProblema = watch('principalProblema');
  const selectedNombre = watch('nombre');

  const getPersonalizedMessage = () => {
    if (!selectedNombre) return '';
    
    const nombreCorto = selectedNombre.split(' ')[0];
    const negocioSeleccionado = tiposNegocio.find(t => t.value === selectedTipoNegocio);
    
    if (negocioSeleccionado) {
      const mensajes: { [key: string]: string } = {
        'clinica-dental': `${nombreCorto}, sabemos que conseguir pacientes de confianza es lo más importante para una clínica dental. Te ayudaremos a aparecer cuando busquen "dentista cerca de mí".`,
        'salon-belleza': `${nombreCorto}, en el mundo de la belleza, la confianza es todo. Te ayudaremos a mostrar tu trabajo y atraer clientas que valoren tu talento.`,
        'restaurante': `${nombreCorto}, sabemos que un restaurante exitoso necesita clientes constantes. Te ayudaremos a llenar tu local con comensales felices.`,
        'consultorio-medico': `${nombreCorto}, conseguir pacientes de calidad que confíen en tu experiencia médica es fundamental. Te ayudaremos con eso.`,
        'abogado': `${nombreCorto}, en el mundo legal, la reputación y confianza son todo. Te ayudaremos a destacar entre otros abogados.`
      };
      
      return mensajes[selectedTipoNegocio] || `${nombreCorto}, entendemos los desafíos únicos de tu negocio. Te ayudaremos a conseguir más clientes de forma consistente.`;
    }
    
    return '';
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop con blur mágico */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        >
          
          {/* Header mágico */}
          <div className="relative bg-gradient-to-br from-red-50 via-white to-amber-50 p-8 border-b">
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full hover:bg-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              {!isSubmitted ? (
                <>
                  <div className="flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-red-500 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      Tu MYPE merece más clientes
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
                    {currentStep === 1 && "Conozcámonos un poco. Queremos entender tu negocio para ayudarte mejor."}
                    {currentStep === 2 && "Perfecto. Ahora cuéntanos sobre tu negocio específico."}
                    {currentStep === 3 && "Casi terminamos. Esto nos ayudará a crear la estrategia perfecta para ti."}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center justify-center mt-6 space-x-3">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-300 ${
                            step < currentStep 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : step === currentStep
                              ? 'bg-red-500 border-red-500 text-white'
                              : 'border-gray-300 text-gray-400'
                          }`}
                        >
                          {step < currentStep ? <Check className="w-5 h-5" /> : step}
                        </div>
                        {step < 3 && (
                          <div className={`w-12 h-1 mx-2 rounded-full transition-all duration-300 ${
                            step < currentStep ? 'bg-green-300' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    ¡Perfecto! Ya estamos trabajando para ti
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Te contactaremos en las próximas <strong>4 horas</strong> con un análisis personalizado de tu negocio y un plan específico para conseguir más clientes.
                  </p>
                  <div className="mt-6 p-4 bg-amber-50 rounded-2xl">
                    <p className="text-amber-800 text-sm">
                      💡 <strong>Mientras tanto:</strong> Prepara algunas fotos de tu negocio, te pediremos algunas para tu nuevo sitio web.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Form content */}
          {!isSubmitted && (
            <div className="p-8 overflow-y-auto max-h-[60vh]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Step 1: Información personal */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <Users className="w-16 h-16 text-red-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        Hola, soy Luis de AQXION
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ayudo a pequeños negocios en Lima a conseguir clientes de forma consistente. 
                        Solo necesito conocerte un poco para personalizar tu experiencia.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          ¿Cómo te llamas? *
                        </label>
                        <input
                          type="text"
                          placeholder="Tu nombre completo"
                          className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder-gray-400 text-lg"
                          {...register('nombre', { required: 'Tu nombre es importante para nosotros' })}
                        />
                        {errors.nombre && (
                          <p className="text-red-500 text-sm mt-2">{errors.nombre.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Tu WhatsApp o email *
                        </label>
                        <input
                          type="email"
                          placeholder="nombre@gmail.com"
                          className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder-gray-400 text-lg"
                          {...register('email', { 
                            required: 'Necesitamos tu contacto para enviarte el análisis',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Por favor ingresa un email válido'
                            }
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <MapPin className="w-4 h-4 inline mr-2 text-red-500" />
                        ¿En qué distrito de Lima está tu negocio?
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Miraflores, San Isidro, Villa El Salvador..."
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder-gray-400 text-lg"
                        {...register('ubicacion')}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        💡 Esto nos ayuda a entender tu mercado local y competencia
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Tipo de negocio */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <TrendingUp className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {selectedNombre ? `Perfecto ${selectedNombre.split(' ')[0]}, ` : ''}cuéntanos sobre tu negocio
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Cada tipo de negocio tiene estrategias diferentes. Esto nos ayuda a diseñar 
                        el plan perfecto para conseguir exactamente el tipo de clientes que necesitas.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        ¿Qué tipo de negocio tienes? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tiposNegocio.map((tipo) => (
                          <label
                            key={tipo.value}
                            className={`relative flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all hover:shadow-lg transform hover:scale-105 ${
                              selectedTipoNegocio === tipo.value
                                ? 'border-red-500 bg-red-50 shadow-md'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              value={tipo.value}
                              className="sr-only"
                              {...register('tipoNegocio', { required: 'Selecciona el tipo de negocio' })}
                            />
                            <span className="flex-1 text-base font-medium text-gray-900">
                              {tipo.label}
                            </span>
                            {tipo.popular && (
                              <span className="ml-3 px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">
                                Popular
                              </span>
                            )}
                            {selectedTipoNegocio === tipo.value && (
                              <motion.div
                                layoutId="selected-business"
                                className="absolute inset-0 border-2 border-red-500 rounded-2xl"
                              />
                            )}
                          </label>
                        ))}
                      </div>
                      {errors.tipoNegocio && (
                        <p className="text-red-500 text-sm mt-3">{errors.tipoNegocio.message}</p>
                      )}
                    </div>

                    {/* Mensaje personalizado */}
                    {getPersonalizedMessage() && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-400"
                      >
                        <p className="text-blue-800 text-sm leading-relaxed">
                          {getPersonalizedMessage()}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 3: Problema principal */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <Coffee className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        Última pregunta: ¿Cuál es tu mayor desafío?
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Entender tu situación actual nos permite crear la estrategia más efectiva. 
                        Sé honesto, aquí no hay respuestas incorrectas.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        ¿Con cuál de estos problemas te identificas más? *
                      </label>
                      <div className="space-y-3">
                        {problemasComunes.map((problema) => (
                          <label
                            key={problema.value}
                            className={`flex items-start p-5 border-2 rounded-2xl cursor-pointer transition-all hover:shadow-lg ${
                              selectedProblema === problema.value
                                ? 'border-red-500 bg-red-50 shadow-md'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              value={problema.value}
                              className="sr-only"
                              {...register('principalProblema', { required: 'Selecciona tu principal desafío' })}
                            />
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <span className="text-lg font-medium text-gray-900">
                                  {problema.label}
                                </span>
                                {selectedProblema === problema.value && (
                                  <Check className="w-5 h-5 text-red-500 ml-auto" />
                                )}
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {problema.description}
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.principalProblema && (
                        <p className="text-red-500 text-sm mt-3">{errors.principalProblema.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <Lightbulb className="w-4 h-4 inline mr-2 text-amber-500" />
                        ¿Algo más que quieras contarnos? (opcional)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Ej: He intentado publicidad en Facebook pero no funcionó, o necesito resultados urgentes porque mi alquiler subió..."
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                        {...register('mensaje')}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        💡 Cualquier contexto adicional nos ayuda a personalizar mejor tu estrategia
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Navigation buttons */}
                <div className="flex items-center justify-between pt-8 border-t">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 text-gray-600 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                      Anterior
                    </button>
                  )}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className={`px-8 py-4 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all flex items-center font-medium text-lg ${
                        currentStep === 1 ? 'w-full justify-center' : 'ml-auto'
                      }`}
                    >
                      Continuar
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-2xl hover:from-red-700 hover:to-amber-700 transition-all flex items-center disabled:opacity-50 shadow-lg font-medium text-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                          />
                          Creando tu plan personalizado...
                        </>
                      ) : (
                        <>
                          Recibir mi Plan MYPE personalizado
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>

              </form>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t">
                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center">
                    <Shield className="w-5 h-5 text-green-500 mb-2" />
                    <span className="font-medium">100% Confidencial</span>
                    <span className="text-xs text-gray-500">Tu información está segura</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-5 h-5 text-blue-500 mb-2" />
                    <span className="font-medium">Respuesta en 4h</span>
                    <span className="text-xs text-gray-500">Máximo en horario laboral</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Heart className="w-5 h-5 text-red-500 mb-2" />
                    <span className="font-medium">Sin compromiso</span>
                    <span className="text-xs text-gray-500">Solo queremos ayudarte</span>
                  </div>
                </div>
                
                <div className="text-center mt-6 p-4 bg-gray-50 rounded-2xl">
                  <p className="text-sm text-gray-600">
                    <strong>Garantía:</strong> Si después de conversar decides que no es para ti, 
                    respetamos tu decisión sin insistir. Somos honestos con lo que podemos lograr.
                  </p>
                </div>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
