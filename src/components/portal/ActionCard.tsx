import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
  isDisabled?: boolean;
  badge?: string;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon: Icon,
  onClick,
  color = 'blue',
  isDisabled = false,
  badge
}) => {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600'
  };

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`p-4 border border-gray-200 rounded-lg transition-all text-left w-full relative ${
        isDisabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:bg-gray-50 hover:shadow-md hover:border-gray-300 active:scale-95'
      }`}
    >
      {badge && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          {badge}
        </span>
      )}
      
      <Icon className={`w-6 h-6 mb-2 ${colorClasses[color]}`} />
      <p className="font-medium text-gray-900 mb-1">{title}</p>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </button>
  );
};

export default ActionCard;
