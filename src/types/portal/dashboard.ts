/**
 * Portal Dashboard Types
 * Centralized type definitions for dashboard domain
 */

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt?: Date;
  priority?: 'low' | 'medium' | 'high';
}

export interface Metrics {
  webVisits: number;
  newLeads: number;
  whatsappChats: number;
  conversions: number;
}

export interface MetricData {
  key: keyof Metrics;
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  trend?: 'up' | 'down' | 'stable';
}

export interface QuickAction {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
}

export interface DashboardState {
  metrics: Metrics;
  tasks: Task[];
  loading: boolean;
  error?: string;
}
