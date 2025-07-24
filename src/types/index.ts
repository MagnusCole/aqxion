export interface User {
  id: string;
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  phone: string;
  location: string;
}

export interface BusinessMetrics {
  newClients: number;
  weeklyGrowth: number;
  activeAds: number;
  whatsappLeads: number;
}

export interface Milestone {
  week: number;
  title: string;
  completed: boolean;
}

export interface FormData {
  businessName: string;
  businessType: string;
  currentSales: string;
  location: string;
  phone: string;
  mainPain: string;
  goals: string;
}

export interface Resource {
  title: string;
  description: string;
  type: 'file' | 'templates' | 'report' | 'video';
  status: 'ready' | 'completed' | 'available' | 'pending';
  action: string;
  badge?: string | null;
}

export interface Bonus {
  title: string;
  description: string;
  value: string;
  status: 'ready' | 'completed' | 'available' | 'pending';
  timeLeft?: string | null;
  action: string;
}

export interface CommunityWin {
  name: string;
  business: string;
  location: string;
  achievement: string;
  metric: string;
  timeframe: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Session {
  title: string;
  date: string;
  time: string;
  attendees: number;
  maxAttendees: number;
  available: boolean;
}
