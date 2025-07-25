'use client';

import { motion } from 'framer-motion';
import { ChevronRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface QuickActionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  badge?: string;
}

export default function QuickAction({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  color,
  badge 
}: QuickActionProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="bg-white rounded-2xl p-4 border border-gray-100 relative overflow-hidden"
      >
        {badge && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full">
            {badge}
          </div>
        )}
        
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 mb-0.5">{title}</h3>
            <p className="text-sm text-gray-500 line-clamp-1">{description}</p>
          </div>
          
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </div>
      </motion.div>
    </Link>
  );
}
