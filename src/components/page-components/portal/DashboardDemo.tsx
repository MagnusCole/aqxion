'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, Badge, Button } from '@/components/ui';
import { 
  BarChart3, 
  Users, 
  MessageCircle, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Clock,
  Activity
} from 'lucide-react';

export const DashboardDemo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header honesto sin números falsos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="default" className="mb-4 text-lg px-6 py-2 bg-peru-red text-white">
            <Activity className="w-5 h-5 mr-2" />
            Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Así se vería <span className="text-peru-red">tu dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un ejemplo de cómo organizamos y presentamos la información de tu negocio. 
            Diseñado específicamente para MYPEs.
          </p>
        </motion.div>

        {/* Dashboard Visual Example */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Panel Principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Métricas Principales - Sin números reales */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <Card className="p-6 border-l-4 border-l-blue-500">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                    <span className="text-sm text-gray-500">Este mes</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">--</div>
                  <div className="text-sm text-gray-600">Clientes nuevos</div>
                  <div className="text-xs text-green-600 mt-2">Ejemplo de métrica</div>
                </CardContent>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-500">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                    <span className="text-sm text-gray-500">WhatsApp</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1">--</div>
                  <div className="text-sm text-gray-600">Conversaciones</div>
                  <div className="text-xs text-green-600 mt-2">Ejemplo de métrica</div>
                </CardContent>
              </Card>

              <Card className="p-6 border-l-4 border-l-yellow-500">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="w-8 h-8 text-yellow-600" />
                    <span className="text-sm text-gray-500">Rendimiento</span>
                  </div>
                  <div className="text-3xl font-bold text-yellow-600 mb-1">--%</div>
                  <div className="text-sm text-gray-600">Eficiencia</div>
                  <div className="text-xs text-green-600 mt-2">Ejemplo de métrica</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Área de Tareas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <h3 className="text-lg font-semibold">Panel de Control</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium">Sitio web configurado</p>
                          <p className="text-sm text-gray-600">Tu presencia digital está lista</p>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">Completado</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium">WhatsApp Business conectado</p>
                          <p className="text-sm text-gray-600">Los clientes pueden contactarte fácilmente</p>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-blue-100 text-blue-800">Activo</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-yellow-600" />
                        <div>
                          <p className="font-medium">Perfil de Google configurado</p>
                          <p className="text-sm text-gray-600">Apareces en búsquedas locales</p>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-yellow-100 text-yellow-800">En proceso</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Panel Lateral */}
          <div className="space-y-8">
            
            {/* Herramientas Disponibles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-peru-red" />
                    <h3 className="text-lg font-semibold">Herramientas Incluidas</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">Página web profesional</p>
                      <p className="text-xs text-gray-600">Tu negocio en línea</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">Integración WhatsApp</p>
                      <p className="text-xs text-gray-600">Contacto directo</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">Google My Business</p>
                      <p className="text-xs text-gray-600">Búsquedas locales</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">Dashboard de control</p>
                      <p className="text-xs text-gray-600">Maneja todo desde aquí</p>
                    </div>
                  </div>

                  <Button variant="secondary" size="sm" className="w-full mt-4">
                    Ver todas las funciones
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Soporte */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <h3 className="text-lg font-semibold">Soporte Personal</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <p className="font-medium text-sm">90 días de acompañamiento</p>
                      <p className="text-xs text-gray-600">Te ayudamos hasta que te sientas cómodo</p>
                      
                      <div className="mt-3 flex justify-center">
                        <Button size="sm" variant="secondary">
                          Contactar soporte
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gray-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">¿Te gustaría tener algo así?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Este es solo un ejemplo. Tu dashboard será personalizado según las necesidades específicas de tu negocio.
          </p>
          <Button className="bg-peru-red text-white px-8 py-3">
            Quiero mi dashboard personalizado
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
