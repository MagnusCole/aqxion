'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

// Estructura de datos reales del usuario MYPE
export interface MYPEUserData {
  // Información básica del negocio
  businessInfo: {
    name: string;
    type: string;
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    description: string;
    website: string;
    socialMedia: {
      facebook?: string;
      instagram?: string;
      tiktok?: string;
    };
  };
  
  // Configuración de Plan MYPE
  planInfo: {
    startDate: string;
    planType: 'MYPE'; // Solo tenemos plan MYPE
    investment: 1500; // Siempre S/.1,500
    status: 'active' | 'setup' | 'pending';
    setupProgress: number; // 0-100%
    nextPaymentDate?: string;
  };
  
  // Métricas funcionales (datos reales del usuario)
  metrics: {
    // Contactos y leads
    totalContacts: number;
    newContactsThisWeek: number;
    newContactsThisMonth: number;
    
    // Actividad del negocio
    tasksCompleted: number;
    tasksTotal: number;
    
    // Fechas importantes
    lastActivityDate: string;
    accountCreatedDate: string;
    
    // Configuraciones completadas
    websiteSetup: boolean;
    googleMyBusinessSetup: boolean;
    whatsappBusinessSetup: boolean;
    firstContentCreated: boolean;
  };
  
  // Historial de actividad real
  activity: ActivityRecord[];
  
  // Tareas pendientes reales
  pendingTasks: UserTask[];
}

export interface ActivityRecord {
  id: string;
  type: 'contact_added' | 'task_completed' | 'content_created' | 'setup_step' | 'login';
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface UserTask {
  id: string;
  title: string;
  description: string;
  type: 'setup' | 'marketing' | 'maintenance' | 'growth';
  priority: 'high' | 'medium' | 'low';
  estimatedMinutes: number;
  points: number;
  completed: boolean;
  dueDate?: string;
  createdDate: string;
  completedDate?: string;
}

export function useMYPEUserData() {
  const { user } = useAuth();
  const [userData, setUserData] = useState<MYPEUserData | null>(null);
  const [loading, setLoading] = useState(true);

  const getUserDataKey = () => `mype_user_data_${user?.id || user?.email || 'guest'}`;

  // Cargar datos del usuario
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const savedData = localStorage.getItem(getUserDataKey());
    
    if (savedData) {
      try {
        setUserData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        initializeUserData();
      }
    } else {
      initializeUserData();
    }
    
    setLoading(false);
  }, [user]);

  // Inicializar datos del usuario nuevo - COMPLETAMENTE VACÍO
  const initializeUserData = () => {
    const now = new Date().toISOString();
    const initialData: MYPEUserData = {
      businessInfo: {
        name: '',
        type: '',
        address: '',
        phone: '',
        whatsapp: '',
        email: user?.email || '',
        description: '',
        website: '',
        socialMedia: {}
      },
      planInfo: {
        startDate: now,
        planType: 'MYPE',
        investment: 1500,
        status: 'setup',
        setupProgress: 0
      },
      metrics: {
        totalContacts: 0,
        newContactsThisWeek: 0,
        newContactsThisMonth: 0,
        tasksCompleted: 0,
        tasksTotal: 0,  // Empieza en 0, se actualiza cuando el usuario agregue tareas
        lastActivityDate: now,
        accountCreatedDate: now,
        websiteSetup: false,
        googleMyBusinessSetup: false,
        whatsappBusinessSetup: false,
        firstContentCreated: false
      },
      activity: [],  // Sin actividad inicial
      pendingTasks: []  // Sin tareas iniciales - el usuario debe crearlas
    };

    setUserData(initialData);
    saveUserData(initialData);
  };

  // Guardar datos
  const saveUserData = (data: MYPEUserData) => {
    localStorage.setItem(getUserDataKey(), JSON.stringify(data));
  };

  // Agregar tarea manualmente (para que el usuario pueda crear sus propias tareas)
  const addTask = (task: Omit<UserTask, 'id' | 'createdDate'>) => {
    if (!userData) return;
    
    const newTask: UserTask = {
      ...task,
      id: Date.now().toString(),
      createdDate: new Date().toISOString()
    };
    
    const newData = {
      ...userData,
      pendingTasks: [...userData.pendingTasks, newTask],
      metrics: {
        ...userData.metrics,
        tasksTotal: userData.metrics.tasksTotal + 1,
        lastActivityDate: new Date().toISOString()
      }
    };
    
    setUserData(newData);
    saveUserData(newData);
    
    addActivity('setup_step', `Nueva tarea creada: ${newTask.title}`);
  };

  // Actualizar información del negocio
  const updateBusinessInfo = (updates: Partial<MYPEUserData['businessInfo']>) => {
    if (!userData) return;
    
    const newData = {
      ...userData,
      businessInfo: { ...userData.businessInfo, ...updates },
      metrics: {
        ...userData.metrics,
        lastActivityDate: new Date().toISOString()
      }
    };
    
    setUserData(newData);
    saveUserData(newData);
    
    // Registrar actividad
    addActivity('setup_step', `Información de negocio actualizada`);
  };

  // Completar tarea
  const completeTask = (taskId: string) => {
    if (!userData) return;
    
    const now = new Date().toISOString();
    const updatedTasks = userData.pendingTasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: true, completedDate: now }
        : task
    );
    
    const completedTask = userData.pendingTasks.find(t => t.id === taskId);
    
    const newData = {
      ...userData,
      pendingTasks: updatedTasks,
      metrics: {
        ...userData.metrics,
        tasksCompleted: userData.metrics.tasksCompleted + 1,
        lastActivityDate: now
      }
    };
    
    setUserData(newData);
    saveUserData(newData);
    
    if (completedTask) {
      addActivity('task_completed', `Tarea completada: ${completedTask.title}`);
    }
  };

  // Agregar contacto
  const addContact = (contactName: string) => {
    if (!userData) return;
    
    const now = new Date().toISOString();
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    
    // Incrementar contadores si es reciente
    const isThisWeek = new Date(now) >= startOfWeek;
    const isThisMonth = new Date(now) >= startOfMonth;
    
    const newData = {
      ...userData,
      metrics: {
        ...userData.metrics,
        totalContacts: userData.metrics.totalContacts + 1,
        newContactsThisWeek: userData.metrics.newContactsThisWeek + (isThisWeek ? 1 : 0),
        newContactsThisMonth: userData.metrics.newContactsThisMonth + (isThisMonth ? 1 : 0),
        lastActivityDate: now
      }
    };
    
    setUserData(newData);
    saveUserData(newData);
    
    addActivity('contact_added', `Nuevo contacto agregado: ${contactName}`);
  };

  // Registrar actividad
  const addActivity = (type: ActivityRecord['type'], description: string, metadata?: Record<string, any>) => {
    if (!userData) return;
    
    const newActivity: ActivityRecord = {
      id: Date.now().toString(),
      type,
      description,
      timestamp: new Date().toISOString(),
      metadata
    };
    
    const newData = {
      ...userData,
      activity: [newActivity, ...userData.activity].slice(0, 50) // Mantener solo últimas 50
    };
    
    setUserData(newData);
    saveUserData(newData);
  };

  // Actualizar progreso del setup
  const updateSetupProgress = () => {
    if (!userData) return;
    
    const totalSetupTasks = userData.pendingTasks.filter(t => t.type === 'setup').length;
    const completedSetupTasks = userData.pendingTasks.filter(t => t.type === 'setup' && t.completed).length;
    
    const progress = totalSetupTasks > 0 ? Math.round((completedSetupTasks / totalSetupTasks) * 100) : 0;
    
    const newData: MYPEUserData = {
      ...userData,
      planInfo: {
        ...userData.planInfo,
        setupProgress: progress,
        status: (progress === 100 ? 'active' : 'setup') as 'active' | 'setup' | 'pending'
      }
    };
    
    setUserData(newData);
    saveUserData(newData);
  };

  // Obtener estadísticas calculadas
  const getStats = () => {
    if (!userData) return null;
    
    const completedTasks = userData.pendingTasks.filter(t => t.completed).length;
    const totalTasks = userData.pendingTasks.length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    const daysSinceStart = Math.ceil((Date.now() - new Date(userData.planInfo.startDate).getTime()) / (1000 * 60 * 60 * 24));
    
    return {
      taskCompletionRate: completionRate,
      daysSinceStart,
      recentActivity: userData.activity.slice(0, 5),
      upcomingTasks: userData.pendingTasks.filter(t => !t.completed).slice(0, 3)
    };
  };

  return {
    userData,
    loading,
    updateBusinessInfo,
    addTask,  // Nueva función para agregar tareas manualmente
    completeTask,
    addContact,
    addActivity,
    updateSetupProgress,
    getStats,
    initializeUserData,
    // Funciones de utilidad
    formatCurrency: (amount: number) => `S/${amount.toLocaleString()}`,
    formatDate: (date: string) => new Date(date).toLocaleDateString('es-PE'),
    formatDateTime: (date: string) => new Date(date).toLocaleString('es-PE'),
    getTimeAgo: (date: string) => {
      const now = new Date();
      const then = new Date(date);
      const diffInHours = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60));
      
      if (diffInHours < 1) return 'Hace unos minutos';
      if (diffInHours < 24) return `Hace ${diffInHours} horas`;
      
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) return `Hace ${diffInDays} días`;
      
      return then.toLocaleDateString('es-PE');
    }
  };
}
