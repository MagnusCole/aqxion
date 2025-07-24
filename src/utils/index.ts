import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('es-PE', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'ready': return 'bg-green-50 text-green-700 border-green-200';
    case 'completed': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'available': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    case 'pending': return 'bg-gray-50 text-gray-700 border-gray-200';
    default: return 'bg-gray-50 text-gray-700 border-gray-200';
  }
}

export function getStatusText(status: string): string {
  switch (status) {
    case 'ready': return 'Listo';
    case 'completed': return 'Completado';
    case 'available': return 'Disponible';
    case 'pending': return 'Pendiente';
    default: return status;
  }
}

export function calculateProgress(milestones: { completed: boolean }[]): number {
  const completed = milestones.filter(m => m.completed).length;
  return Math.round((completed / milestones.length) * 100);
}

export function padTime(time: number): string {
  return String(time).padStart(2, '0');
}
