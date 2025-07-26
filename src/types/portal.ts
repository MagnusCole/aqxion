// Shared Types for Portal Components
export interface UserGoal {
  amount: number;
  period: 'mensuales' | 'anuales';
  description: string;
  current: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  businessName?: string;
  goal: UserGoal;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'facebook' | 'google' | 'instagram' | 'whatsapp';
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spent: number;
  leads: number;
  conversions: number;
  startDate: string;
  endDate?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  value?: number;
  createdAt: string;
  notes?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'alta' | 'media' | 'baja';
  dueDate?: string;
  category: 'marketing' | 'ventas' | 'operaciones' | 'finanzas';
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  completed: boolean;
  completedDate?: string;
  order: number;
}
