'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MobileMetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
  color: string;
}

export default function MobileMetricCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color 
}: MobileMetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl p-4 border border-gray-100"
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-8 h-8 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        {trend && (
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            trend.isPositive 
              ? 'bg-green-50 text-green-600' 
              : 'bg-red-50 text-red-600'
          }`}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </div>
        )}
      </div>
      
      <div>
        <p className="text-xl font-semibold text-gray-900 mb-1">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
        {trend && (
          <p className="text-xs text-gray-400 mt-1">{trend.label}</p>
        )}
      </div>
    </motion.div>
  );
}
