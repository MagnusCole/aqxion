'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ComparisonChartProps {
  title: string;
  beforeData: { label: string; value: number }[];
  afterData: { label: string; value: number }[];
  timeframe: string;
}

export default function ComparisonChart({ title, beforeData, afterData, timeframe }: ComparisonChartProps) {
  const maxValue = Math.max(
    ...beforeData.map(d => d.value),
    ...afterData.map(d => d.value)
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">Comparación antes vs después - {timeframe}</p>
      </div>

      <div className="space-y-4">
        {beforeData.map((before, index) => {
          const after = afterData[index];
          const growth = after ? ((after.value - before.value) / before.value) * 100 : 0;
          const isPositive = growth > 0;

          return (
            <div key={before.label} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{before.label}</span>
                <div className={`flex items-center text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {Math.abs(growth).toFixed(0)}%
                </div>
              </div>

              <div className="space-y-1">
                {/* Barra ANTES */}
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500 w-12">Antes</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(before.value / maxValue) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-red-400 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600 w-12">{before.value}</span>
                </div>

                {/* Barra DESPUÉS */}
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500 w-12">Ahora</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(after.value / maxValue) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="bg-green-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-900 w-12">{after.value}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
