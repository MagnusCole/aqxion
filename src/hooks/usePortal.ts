import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export interface DashboardMetrics {
  websiteVisits: number;
  websiteVisitsGrowth: number;
  leads: number;
  leadsGrowth: number;
  whatsappChats: number;
  whatsappChatsGrowth: number;
  googleViews: number;
  googleViewsGrowth: number;
}

export interface TaskData {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  category: string;
  createdAt: Date;
  dueDate?: Date;
}

export interface ActivityData {
  id: string;
  title: string;
  description?: string;
  timestamp: Date;
  status: 'completed' | 'in-progress' | 'pending' | 'waiting';
  category?: string;
}

export interface SupportTicketData {
  id: string;
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'normal' | 'urgent';
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export function usePortalMetrics() {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/portal/metrics');
        if (!response.ok) throw new Error('Failed to fetch metrics');
        const data = await response.json();
        setMetrics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [user]);

  const updateMetrics = async (newMetrics: Partial<DashboardMetrics>) => {
    try {
      const response = await fetch('/api/portal/metrics', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMetrics)
      });
      
      if (!response.ok) throw new Error('Failed to update metrics');
      const data = await response.json();
      setMetrics(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  return { metrics, loading, error, updateMetrics };
}

export function usePortalTasks() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/portal/tasks');
        if (!response.ok) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [user]);

  const createTask = async (taskData: {
    title: string;
    description?: string;
    priority?: 'high' | 'medium' | 'low';
    category?: string;
    dueDate?: Date;
  }) => {
    try {
      const response = await fetch('/api/portal/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
      });
      
      if (!response.ok) throw new Error('Failed to create task');
      const newTask = await response.json();
      setTasks(prev => [newTask, ...prev]);
      return newTask;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  const toggleTask = async (taskId: string, completed: boolean) => {
    try {
      const response = await fetch(`/api/portal/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
      });
      
      if (!response.ok) throw new Error('Failed to toggle task');
      const updatedTask = await response.json();
      setTasks(prev => prev.map(task => 
        task.id === taskId ? updatedTask : task
      ));
      return updatedTask;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  return { tasks, loading, error, createTask, toggleTask };
}

export function usePortalActivities() {
  const { user } = useAuth();
  const [activities, setActivities] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchActivities = async () => {
      try {
        const response = await fetch('/api/portal/activities');
        if (!response.ok) throw new Error('Failed to fetch activities');
        const data = await response.json();
        setActivities(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [user]);

  const createActivity = async (activityData: {
    title: string;
    description?: string;
    category?: string;
  }) => {
    try {
      const response = await fetch('/api/portal/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activityData)
      });
      
      if (!response.ok) throw new Error('Failed to create activity');
      const newActivity = await response.json();
      setActivities(prev => [newActivity, ...prev]);
      return newActivity;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  return { activities, loading, error, createActivity };
}

export function usePortalSupport() {
  const { user } = useAuth();
  const [tickets, setTickets] = useState<SupportTicketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchTickets = async () => {
      try {
        const response = await fetch('/api/portal/support');
        if (!response.ok) throw new Error('Failed to fetch support tickets');
        const data = await response.json();
        setTickets(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [user]);

  const createTicket = async (ticketData: {
    subject: string;
    message: string;
    priority?: 'normal' | 'urgent';
  }) => {
    try {
      const response = await fetch('/api/portal/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ticketData)
      });
      
      if (!response.ok) throw new Error('Failed to create support ticket');
      const newTicket = await response.json();
      setTickets(prev => [newTicket, ...prev]);
      return newTicket;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  return { tickets, loading, error, createTicket };
}
