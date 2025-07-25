import React from 'react';
import { CheckCircle, AlertCircle, Clock, Info } from 'lucide-react';

interface TimelineItem {
  id: string | number;
  title: string;
  description?: string;
  status: 'completed' | 'in-progress' | 'pending' | 'waiting';
  timestamp: string;
  category?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, title, className = '' }) => {
  const getStatusIcon = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'waiting':
        return <Info className="w-4 h-4 text-gray-400" />;
      default:
        return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'waiting':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusBg = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50';
      case 'in-progress':
        return 'bg-blue-50';
      case 'pending':
        return 'bg-yellow-50';
      case 'waiting':
        return 'bg-gray-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow border border-gray-100 ${className}`}>
      {title && (
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      )}
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="flex items-start gap-3 relative">
            {/* Timeline line */}
            {index < items.length - 1 && (
              <div className="absolute left-2 top-8 w-0.5 h-full bg-gray-200"></div>
            )}
            
            {/* Status indicator */}
            <div className={`w-4 h-4 rounded-full ${getStatusColor(item.status)} flex-shrink-0 mt-1 relative z-10`}></div>
            
            {/* Content */}
            <div className={`flex-1 p-3 rounded-lg ${getStatusBg(item.status)} min-h-[60px]`}>
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-medium text-gray-900 text-sm leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                  {getStatusIcon(item.status)}
                </div>
              </div>
              
              {item.description && (
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                  {item.description}
                </p>
              )}
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {item.timestamp}
                </span>
                {item.category && (
                  <span className="text-xs bg-white bg-opacity-70 px-2 py-1 rounded-full text-gray-600 font-medium">
                    {item.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
