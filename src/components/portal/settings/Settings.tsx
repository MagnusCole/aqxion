'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Download, 
  Trash2,
  Settings as SettingsIcon,
  Save,
  AlertCircle
} from 'lucide-react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';
import { useAuth } from '@/contexts/AuthContext';

export default function Settings() {
  const { userData, updateBusinessInfo, formatDate } = useMYPEUserData();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [saving, setSaving] = useState(false);

  const tabs = [
    { id: 'profile', name: 'Perfil', icon: User },
    { id: 'notifications', name: 'Notificaciones', icon: Bell },
    { id: 'privacy', name: 'Privacidad', icon: Shield },
    { id: 'data', name: 'Datos', icon: Download },
  ];

  const handleExportData = () => {
    if (!userData) return;
    
    const dataToExport = {
      businessInfo: userData.businessInfo,
      metrics: userData.metrics,
      exportDate: new Date().toISOString(),
      planInfo: userData.planInfo
    };
    
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `aqxion-mype-data-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleClearData = () => {
    if (confirm('¿Estás seguro? Esta acción eliminará todos tus datos y no se puede deshacer.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Configuración</h1>
        <p className="text-gray-600">
          Gestiona tu cuenta y preferencias del portal MYPE
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:w-64"
        >
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors
                  ${activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-blue-700' : 'text-gray-400'}`} />
                {tab.name}
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Tab content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm">
            {activeTab === 'profile' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Información de Perfil
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email de la cuenta
                    </label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      El email no se puede cambiar
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del negocio
                    </label>
                    <input
                      type="text"
                      value={userData?.businessInfo.name || ''}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Para cambiar esto, ve a "Mi Negocio"
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Plan activo
                    </label>
                    <div className="px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="text-sm font-medium text-blue-900">Plan MYPE</div>
                      <div className="text-xs text-blue-600">
                        Activo desde {userData ? formatDate(userData.planInfo.startDate) : ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Notificaciones
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Nuevos contactos</div>
                      <div className="text-sm text-gray-500">
                        Recibir notificación cuando se agregue un nuevo contacto
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Tareas completadas</div>
                      <div className="text-sm text-gray-500">
                        Notificación cuando completes una tarea
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Recordatorios</div>
                      <div className="text-sm text-gray-500">
                        Recordatorios de tareas pendientes
                      </div>
                    </div>
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                  </div>
                </div>

                <div className="mt-6">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Guardar Preferencias
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Privacidad y Seguridad
                </h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-900">Datos Locales</div>
                        <div className="text-sm text-blue-700 mt-1">
                          Tus datos se guardan localmente en tu navegador. 
                          No se envían a servidores externos.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Información almacenada</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Información de tu negocio</li>
                      <li>• Contactos y leads</li>
                      <li>• Tareas y progreso</li>
                      <li>• Historial de actividad</li>
                      <li>• Preferencias de configuración</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-yellow-900">Backup Recomendado</div>
                        <div className="text-sm text-yellow-700 mt-1">
                          Exporta regularmente tus datos como respaldo. 
                          Si limpias el navegador, se perderán los datos.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Gestión de Datos
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Exportar datos</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Descarga una copia de todos tus datos en formato JSON
                    </p>
                    <button
                      onClick={handleExportData}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Exportar Datos
                    </button>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-medium text-gray-900 mb-2">Eliminar todos los datos</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Esta acción eliminará permanentemente todos tus datos del portal
                    </p>
                    <button
                      onClick={handleClearData}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      Eliminar Todos los Datos
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Información de almacenamiento</h5>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Contactos: {userData?.metrics.totalContacts || 0}</div>
                      <div>Tareas: {userData?.pendingTasks.length || 0}</div>
                      <div>Actividades: {userData?.activity.length || 0}</div>
                      <div>Cuenta creada: {userData ? formatDate(userData.metrics.accountCreatedDate) : ''}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
