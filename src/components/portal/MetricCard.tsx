import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  current: number;
  previous?: number;
  growth?: number;
  icon: LucideIcon;
  format?: 'number' | 'currency' | 'percentage';
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
  isLoading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  current,
  previous,
  growth,
  icon: Icon,
  format = 'number',
  color = 'blue',
  isLoading = false
}) => {
  const formatValue = (value: number): string => {
    switch (format) {
      case 'currency':
        return `S/ ${value.toLocaleString()}`;
      case 'percentage':
        return `${value.toFixed(1)}%`;
      default:
        return value.toLocaleString();
    }
  };

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    red: 'bg-red-50 text-red-600',
    yellow: 'bg-yellow-50 text-yellow-600'
  };

  const isPositive = growth ? growth > 0 : true;

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <div className="animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow border border-gray-100 hover:shadow-lg transition-all duration-200 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]} group-hover:scale-105 transition-transform`}>
          <Icon className="w-6 h-6" />
        </div>
        {growth !== undefined && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {isPositive ? (
              <TrendingUp className="w-3 h-3 text-green-600" />
            ) : (
              <TrendingDown className="w-3 h-3 text-red-600" />
            )}
            {Math.abs(growth).toFixed(1)}%
          </div>
        )}
      </div>
      
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mb-1">
        {formatValue(current)}
      </p>
      
      {previous !== undefined && (
        <p className="text-xs text-gray-500">
          vs. período anterior: {formatValue(previous)}
        </p>
      )}
    </div>
  );
};

export default MetricCard;
