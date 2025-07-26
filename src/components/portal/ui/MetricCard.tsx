'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

/**
 * Mobile-First Metric Card Component
 * Single responsibility: Display key metrics with elegant animations
 * Performance optimized with React.memo and proper typing
 */

interface MetricTrend {
  readonly value: number;
  readonly label: string;
  readonly isPositive: boolean;
}

interface MetricCardProps {
  readonly title: string;
  readonly value: string | number;
  readonly icon: LucideIcon;
  readonly trend?: MetricTrend;
  readonly color: string;
  readonly delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-start justify-between mb-3 lg:mb-4">
        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl ${color} flex items-center justify-center`}>
          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </div>
        {trend && (
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            trend.isPositive 
              ? 'bg-green-50 text-green-600 border border-green-200' 
              : 'bg-red-50 text-red-600 border border-red-200'
          }`}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </div>
        )}
      </div>
      
      <div>
        <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{value}</p>
        <p className="text-sm lg:text-base text-gray-500">{title}</p>
        {trend && (
          <p className="text-xs text-gray-400 mt-1">{trend.label}</p>
        )}
      </div>
    </motion.div>
  );
};

export default React.memo(MetricCard);
