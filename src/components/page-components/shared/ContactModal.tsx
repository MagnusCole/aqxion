'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Clock, Check, ArrowRight } from 'lucide-react';
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
  { value: 'otro', label: '🏢 Otro tipo de negocio', popular: false }
];

const problemasComunes = [
  { value: 'pocos-clientes', label: '😔 Muy pocos clientes' },
  { value: 'ingresos-impredecibles', label: '📉 Ingresos impredecibles' },
  { value: 'invisible-online', label: '👻 Invisible en internet' },
  { value: 'no-tiempo-marketing', label: '⏰ Sin tiempo para marketing' },
  { value: 'competencia-fuerte', label: '🥊 Mucha competencia' },
  { value: 'no-se-donde-empezar', label: '🤷‍♂️ No sé por dónde empezar' }
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simular análisis personalizado
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // En producción, aquí enviarías los datos a tu backend/CRM
      console.log('Nuevo lead MYPE:', {
        nombre: data.nombre,
        email: data.email,
        tipoNegocio: data.tipoNegocio,
        ubicacion: data.ubicacion,
        principalProblema: data.principalProblema,
        mensaje: data.mensaje,
        timestamp: new Date().toISOString(),
        source: 'contacto-web-mype'
      });
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        reset();
        setIsSubmitted(false);
        setCurrentStep(1);
      }, 4000);
      
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    reset();
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          {/* Backdrop con blur premium */}
          <motion.div
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: 'blur(20px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-black/20"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
            >
              {/* Header minimalista */}
              <div className="relative px-8 pt-8 pb-6 bg-gradient-to-b from-gray-50/50 to-white">
                {/* Close Button - estilo Apple */}
                <motion.button
                  onClick={handleClose}
                  whileHover={{ scale: 1.1, backgroundColor: '#f3f4f6' }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </motion.button>

                {/* Logo pequeño */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 1536 1536" fill="none" className="text-white">
                      <path d="M 748.5 315.449219 C 700.5 398.101562 595.5 577.648438 587.101562 591.300781 C 584.699219 595.351562 582.300781 598.5 581.851562 598.5 C 581.101562 598.5 560.398438 564.300781 545.25 538.050781 L 541.199219 531 L 442.949219 531 C 364.949219 531 344.851562 531.449219 345.449219 532.800781 C 345.75 533.851562 376.949219 586.050781 414.75 648.75 L 483.300781 762.75 L 480.148438 768.75 C 478.351562 772.050781 445.050781 828 405.898438 893.25 L 334.949219 1011.75 L 616.949219 1013.25 L 644.851562 1059 C 689.851562 1132.648438 715.800781 1175.398438 742.949219 1220.699219 C 763.5 1255.050781 768.75 1262.851562 770.25 1261.199219 C 771.300781 1260.148438 782.851562 1241.398438 796.199219 1219.5 C 809.398438 1197.601562 829.050781 1165.199219 839.851562 1147.5 C 850.648438 1129.800781 873.449219 1092.148438 890.398438 1063.800781 L 921.449219 1012.5 L 1062.300781 1012.5 C 1139.699219 1012.5 1203 1012.199219 1203 1011.75 C 1203 1010.550781 1188.148438 985.648438 1117.199219 867.148438 C 1079.699219 804.75 1055.101562 762.300781 1055.851562 761.25 C 1056.601562 760.5 1070.851562 737.101562 1087.5 709.5 C 1104.300781 681.898438 1135.351562 630.449219 1156.648438 595.050781 L 1195.5 531 L 997.800781 531 L 977.851562 564.75 C 966.75 583.351562 957.300781 598.5 956.851562 598.5 C 956.398438 598.5 949.5 587.550781 941.699219 574.050781 C 933.898438 560.699219 909.449219 519 887.398438 481.5 C 865.351562 444 830.25 384.148438 809.699219 348.75 C 789 313.199219 771.300781 283.5 770.398438 282.449219 C 769.199219 281.101562 763.648438 289.5 748.5 315.449219 Z M 791.398438 496.199219 C 803.101562 515.699219 822.898438 549.300781 835.5 570.75 C 848.101562 592.199219 873.148438 634.351562 891 664.5 C 923.550781 719.25 960.75 782.101562 1016.101562 875.550781 C 1032.300781 903 1045.5 925.800781 1045.5 926.25 C 1045.5 926.699219 1027.800781 927 1006.199219 927 L 966.75 927 L 947.25 894.300781 C 936.601562 876.449219 917.398438 843.898438 904.5 822 C 891.601562 800.101562 865.949219 756.601562 847.351562 725.25 C 828.898438 693.898438 803.851562 651.601562 792 631.199219 C 780 610.800781 769.949219 594 769.5 594.148438 C 769.050781 594.148438 761.699219 606 753.148438 620.699219 C 731.550781 657.601562 708.75 696.300781 676.5 750.75 C 661.351562 776.25 639.300781 813.75 627.300781 834 C 615.449219 854.25 598.050781 883.351562 588.449219 898.800781 L 571.199219 927 L 531.449219 927 C 509.699219 927 492.148438 926.550781 492.449219 925.800781 C 492.75 925.199219 508.5 898.800781 527.550781 867 C 546.601562 835.199219 573 790.648438 586.5 768 C 618.601562 713.851562 672.300781 623.550781 714 553.5 C 732.449219 522.601562 752.398438 489 758.101562 478.949219 C 763.949219 468.898438 769.050781 460.648438 769.5 460.648438 C 769.949219 460.5 779.851562 476.550781 791.398438 496.199219 Z M 831.75 864 C 853.949219 900.601562 867.300781 924 866.699219 925.351562 C 864.75 930.898438 769.949219 1084.050781 769.199219 1083.300781 C 768 1082.101562 762 1072.5 718.5 1001.25 C 675.300781 930.601562 671.699219 924.300781 672.300781 922.949219 C 673.800781 920.398438 765.449219 767.101562 767.550781 763.800781 C 769.5 760.5 770.550781 762 794.550781 802.050781 C 808.199219 825 825 852.898438 831.75 864 Z M 831.75 864" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Título limpio */}
                <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  Hablemos de tu negocio
                </h2>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Cuéntanos sobre tu MYPE y te ayudaremos a conseguir más clientes
                </p>
              </div>

              {/* Form Content */}
              <div className="px-8 pb-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">¡Mensaje recibido!</h3>
                      <p className="text-gray-600 text-sm">
                        Gracias por tu interés. Te contactaremos pronto para conversar sobre tu Plan MYPE.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      {/* Nombre */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ¿Cómo te llamas?
                        </label>
                        <input
                          {...register('nombre', { required: 'Tu nombre es necesario' })}
                          type="text"
                          placeholder="Ej: María González"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        />
                        {errors.nombre && (
                          <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tu email
                        </label>
                        <input
                          {...register('email', { 
                            required: 'Email es necesario',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Email inválido'
                            }
                          })}
                          type="email"
                          placeholder="ej: maria@gmail.com"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Negocio */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ¿Qué tipo de negocio tienes?
                        </label>
                        <input
                          {...register('tipoNegocio', { required: 'Cuéntanos sobre tu negocio' })}
                          type="text"
                          placeholder="Ej: Clínica dental, Restaurant, Peluquería..."
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        />
                        {errors.tipoNegocio && (
                          <p className="text-red-500 text-xs mt-1">{errors.tipoNegocio.message}</p>
                        )}
                      </div>

                      {/* Trust signals sutiles */}
                      <div className="flex items-center gap-4 py-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>100% seguro</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>Respuesta en 2 horas</span>
                        </div>
                      </div>

                      {/* Submit Button - estilo Apple */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            Enviar información
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>

                      {/* Footer subtle */}
                      <p className="text-xs text-gray-500 text-center pt-2">
                        Te contactaremos en máximo 24 horas para conversar sobre tu proyecto
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
