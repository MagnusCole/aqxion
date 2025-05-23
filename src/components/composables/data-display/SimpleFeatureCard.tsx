"use client";

import React from 'react';

interface SimpleFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SimpleFeatureCard: React.FC<SimpleFeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
  style
}) => {
  return (
    <div 
      className={`group p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${className}`}
      style={style}
    >
      {/* Icon */}
      <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
