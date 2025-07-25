import { prisma } from './prisma';

// Interfaces para tipado
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

export interface PlanProgressData {
  currentDay: number;
  totalDays: number;
  completedSteps: number;
  totalSteps: number;
  estimatedCompletionDate: Date;
  milestones: Array<{
    id: string;
    title: string;
    status: 'completed' | 'current' | 'upcoming';
    estimatedDay: number;
  }>;
}

export class PortalService {
  static async getUserMetrics(userId: string): Promise<DashboardMetrics> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { businessMetrics: true }
      });

      if (!user?.businessMetrics) {
        // Crear métricas iniciales si no existen
        await prisma.businessMetrics.create({
          data: {
            userId,
            websiteVisits: 0,
            leads: 0,
            whatsappChats: 0,
            googleViews: 0
          }
        });

        return {
          websiteVisits: 0,
          websiteVisitsGrowth: 0,
          leads: 0,
          leadsGrowth: 0,
          whatsappChats: 0,
          whatsappChatsGrowth: 0,
          googleViews: 0,
          googleViewsGrowth: 0
        };
      }

      const metrics = user.businessMetrics;
      
      // Calcular crecimiento (simulado para ejemplo)
      return {
        websiteVisits: metrics.websiteVisits,
        websiteVisitsGrowth: 12.5,
        leads: metrics.leads,
        leadsGrowth: 8.3,
        whatsappChats: metrics.whatsappChats,
        whatsappChatsGrowth: 15.2,
        googleViews: metrics.googleViews,
        googleViewsGrowth: 5.7
      };
    } catch (error) {
      console.error('Error fetching user metrics:', error);
      throw new Error('Failed to fetch metrics');
    }
  }

  static async updateUserMetrics(userId: string, data: {
    websiteVisits?: number;
    leads?: number;
    whatsappChats?: number;
    googleViews?: number;
  }): Promise<DashboardMetrics> {
    try {
      const updated = await prisma.businessMetrics.upsert({
        where: { userId },
        update: data,
        create: {
          userId,
          websiteVisits: data.websiteVisits || 0,
          leads: data.leads || 0,
          whatsappChats: data.whatsappChats || 0,
          googleViews: data.googleViews || 0
        }
      });

      return {
        websiteVisits: updated.websiteVisits,
        websiteVisitsGrowth: 12.5,
        leads: updated.leads,
        leadsGrowth: 8.3,
        whatsappChats: updated.whatsappChats,
        whatsappChatsGrowth: 15.2,
        googleViews: updated.googleViews,
        googleViewsGrowth: 5.7
      };
    } catch (error) {
      console.error('Error updating user metrics:', error);
      throw new Error('Failed to update metrics');
    }
  }

  static async getUserTasks(userId: string): Promise<TaskData[]> {
    try {
      const tasks = await prisma.task.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' }
      });

      return tasks.map(task => ({
        id: task.id,
        title: task.title,
        description: task.description || undefined,
        completed: task.status === 'completed',
        priority: task.priority as 'high' | 'medium' | 'low',
        category: task.category || 'general',
        createdAt: task.createdAt,
        dueDate: task.dueDate || undefined
      }));
    } catch (error) {
      console.error('Error fetching user tasks:', error);
      throw new Error('Failed to fetch tasks');
    }
  }

  static async createTask(userId: string, data: {
    title: string;
    description?: string;
    priority?: 'high' | 'medium' | 'low';
    category?: string;
    dueDate?: Date;
  }): Promise<TaskData> {
    try {
      const task = await prisma.task.create({
        data: {
          userId,
          title: data.title,
          description: data.description,
          priority: data.priority || 'medium',
          category: data.category || 'general',
          dueDate: data.dueDate,
          status: 'pending'
        }
      });

      return {
        id: task.id,
        title: task.title,
        description: task.description || undefined,
        completed: task.status === 'completed',
        priority: task.priority as 'high' | 'medium' | 'low',
        category: task.category || 'general',
        createdAt: task.createdAt,
        dueDate: task.dueDate || undefined
      };
    } catch (error) {
      console.error('Error creating task:', error);
      throw new Error('Failed to create task');
    }
  }

  static async toggleTask(taskId: string, completed: boolean): Promise<TaskData> {
    try {
      const task = await prisma.task.update({
        where: { id: taskId },
        data: { 
          status: completed ? 'completed' : 'pending',
          completedAt: completed ? new Date() : null
        }
      });

      return {
        id: task.id,
        title: task.title,
        description: task.description || undefined,
        completed: task.status === 'completed',
        priority: task.priority as 'high' | 'medium' | 'low',
        category: task.category || 'general',
        createdAt: task.createdAt,
        dueDate: task.dueDate || undefined
      };
    } catch (error) {
      console.error('Error toggling task:', error);
      throw new Error('Failed to toggle task');
    }
  }

  static async deleteTask(taskId: string): Promise<void> {
    try {
      await prisma.task.delete({
        where: { id: taskId }
      });
    } catch (error) {
      console.error('Error deleting task:', error);
      throw new Error('Failed to delete task');
    }
  }

  static async getUserActivities(userId: string): Promise<ActivityData[]> {
    try {
      const activities = await prisma.activity.findMany({
        where: { userId },
        orderBy: { timestamp: 'desc' },
        take: 50 // Limitar a las últimas 50 actividades
      });

      return activities.map(activity => ({
        id: activity.id,
        title: activity.title,
        description: activity.description || undefined,
        timestamp: activity.timestamp,
        status: activity.status as 'completed' | 'in-progress' | 'pending' | 'waiting',
        category: activity.category || 'general'
      }));
    } catch (error) {
      console.error('Error fetching user activities:', error);
      throw new Error('Failed to fetch activities');
    }
  }

  static async createActivity(userId: string, data: {
    title: string;
    description?: string;
    category?: string;
    status?: 'completed' | 'in-progress' | 'pending' | 'waiting';
  }): Promise<ActivityData> {
    try {
      const activity = await prisma.activity.create({
        data: {
          userId,
          title: data.title,
          description: data.description,
          category: data.category || 'general',
          status: 'completed'
        }
      });

      return {
        id: activity.id,
        title: activity.title,
        description: activity.description || undefined,
        timestamp: activity.timestamp,
        status: activity.status as 'completed' | 'in-progress' | 'pending' | 'waiting',
        category: activity.category || 'general'
      };
    } catch (error) {
      console.error('Error creating activity:', error);
      throw new Error('Failed to create activity');
    }
  }

  static async getUserSupportTickets(userId: string): Promise<SupportTicketData[]> {
    try {
      const tickets = await prisma.supportTicket.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' }
      });

      return tickets.map(ticket => ({
        id: ticket.id,
        subject: ticket.subject,
        description: ticket.description,
        status: ticket.status as 'open' | 'in-progress' | 'resolved' | 'closed',
        priority: ticket.priority as 'normal' | 'urgent',
        category: ticket.category,
        createdAt: ticket.createdAt,
        updatedAt: ticket.updatedAt
      }));
    } catch (error) {
      console.error('Error fetching support tickets:', error);
      throw new Error('Failed to fetch support tickets');
    }
  }

  static async createSupportTicket(userId: string, data: {
    subject: string;
    message: string;
    priority?: 'normal' | 'urgent';
  }): Promise<SupportTicketData> {
    try {
      const ticket = await prisma.supportTicket.create({
        data: {
          userId,
          subject: data.subject,
          description: data.message,
          category: 'general',
          priority: data.priority || 'normal',
          status: 'open'
        }
      });

      return {
        id: ticket.id,
        subject: ticket.subject,
        description: ticket.description,
        status: ticket.status as 'open' | 'in-progress' | 'resolved' | 'closed',
        priority: ticket.priority as 'normal' | 'urgent',
        category: ticket.category,
        createdAt: ticket.createdAt,
        updatedAt: ticket.updatedAt
      };
    } catch (error) {
      console.error('Error creating support ticket:', error);
      throw new Error('Failed to create support ticket');
    }
  }

  static async getUserPlanInfo(userId: string): Promise<PlanProgressData> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (!user) {
        throw new Error('User not found');
      }

      const startDate = user.createdAt;
      const currentDate = new Date();
      const daysDiff = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const currentDay = Math.min(daysDiff, 90);

      // Simular progreso basado en datos reales del usuario
      const completedSteps = user.onboardingCompleted ? 5 : 2;
      const totalSteps = 5;

      const estimatedCompletionDate = new Date(startDate);
      estimatedCompletionDate.setDate(estimatedCompletionDate.getDate() + 90);

      return {
        currentDay,
        totalDays: 90,
        completedSteps,
        totalSteps,
        estimatedCompletionDate,
        milestones: [
          {
            id: '1',
            title: 'Configuración inicial',
            status: currentDay >= 7 ? 'completed' : currentDay >= 1 ? 'current' : 'upcoming',
            estimatedDay: 7
          },
          {
            id: '2',
            title: 'Optimización SEO',
            status: currentDay >= 30 ? 'completed' : currentDay >= 8 ? 'current' : 'upcoming',
            estimatedDay: 30
          },
          {
            id: '3',
            title: 'Marketing activo',
            status: currentDay >= 60 ? 'completed' : currentDay >= 31 ? 'current' : 'upcoming',
            estimatedDay: 60
          },
          {
            id: '4',
            title: 'Optimización final',
            status: currentDay >= 90 ? 'completed' : currentDay >= 61 ? 'current' : 'upcoming',
            estimatedDay: 90
          }
        ]
      };
    } catch (error) {
      console.error('Error fetching plan info:', error);
      throw new Error('Failed to fetch plan information');
    }
  }
}
