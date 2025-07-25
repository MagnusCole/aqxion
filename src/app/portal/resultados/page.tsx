'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, Eye, MessageSquare, Phone, 
  Users, DollarSign, Calendar, MapPin, Star, 
  BarChart3, PieChart, Target, Award, Zap, ExternalLink,
  CheckCircle, Clock, AlertTriangle
} from 'lucide-react';
import { motion } from 'framer-motion';
import ComparisonChart from '@/components/portal/ComparisonChart';
import MilestoneTimeline from '@/components/portal/MilestoneTimeline';
import ImpactTestimonial from '@/components/portal/ImpactTestimonial';

interface MetricCard {
  title: string;
  current: number;
  previous: number;
  prefix?: string;
  suffix?: string;
  format?: 'currency' | 'percentage' | 'number';
  color: 'green' | 'blue' | 'purple' | 'red' | 'yellow';
}

interface ROIData {
  investment: number;
  timeframe: string;
  metrics: {
    websiteVisits: { before: number; after: number };
    whatsappLeads: { before: number; after: number };
    phoneCallsReceived: { before: number; after: number };
    googleViews: { before: number; after: number };
    avgTicketSize: { before: number; after: number };
    conversionRate: { before: number; after: number };
  };
  revenue: {
    newClients: number;
    avgRevenue: number;
    totalGenerated: number;
    projectedMonthly: number;
  };
}

export default function ResultadosPage() {
  const [timeRange, setTimeRange] = useState<'30d' | '60d' | '90d'>('30d');
  const [isLoading, setIsLoading] = useState(true);
  
  // 🎯 DEMO DATA - Resultados épicos para validar oferta S/.1,500
  const roiData: ROIData = {
    investment: 1500,
    timeframe: timeRange === '30d' ? '30 días' : timeRange === '60d' ? '60 días' : '90 días',
    metrics: {
      websiteVisits: { 
        before: timeRange === '30d' ? 45 : timeRange === '60d' ? 89 : 120, 
        after: timeRange === '30d' ? 312 : timeRange === '60d' ? 670 : 1250 
      },
      whatsappLeads: { 
        before: timeRange === '30d' ? 2 : timeRange === '60d' ? 5 : 8, 
        after: timeRange === '30d' ? 18 : timeRange === '60d' ? 45 : 89 
      },
      phoneCallsReceived: { 
        before: timeRange === '30d' ? 1 : timeRange === '60d' ? 2 : 3, 
        after: timeRange === '30d' ? 8 : timeRange === '60d' ? 19 : 34 
      },
      googleViews: { 
        before: timeRange === '30d' ? 23 : timeRange === '60d' ? 67 : 89, 
        after: timeRange === '30d' ? 156 : timeRange === '60d' ? 445 : 678 
      },
      avgTicketSize: { 
        before: 180, 
        after: timeRange === '30d' ? 245 : timeRange === '60d' ? 280 : 320 
      },
      conversionRate: { 
        before: 4.4, 
        after: timeRange === '30d' ? 5.8 : timeRange === '60d' ? 6.7 : 7.1 
      }
    },
    revenue: {
      newClients: timeRange === '30d' ? 12 : timeRange === '60d' ? 28 : 45,
      avgRevenue: timeRange === '30d' ? 245 : timeRange === '60d' ? 280 : 320,
      totalGenerated: timeRange === '30d' ? 2940 : timeRange === '60d' ? 7840 : 14400,
      projectedMonthly: timeRange === '30d' ? 2940 : timeRange === '60d' ? 3920 : 4800
    }
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [timeRange]);

  const calculateGrowth = (before: number, after: number) => {
    return before === 0 ? 100 : ((after - before) / before) * 100;
  };

  const calculateROI = () => {
    const roi = ((roiData.revenue.totalGenerated - roiData.investment) / roiData.investment) * 100;
    return roi;
  };

  const getColorClass = (color: string) => {
    const colors = {
      green: 'bg-green-500',
      blue: 'bg-blue-500', 
      purple: 'bg-purple-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500'
    };
    return colors[color as keyof typeof colors];
  };

  const MetricCard: React.FC<MetricCard & { icon: React.ElementType }> = ({ 
    title, current, previous, prefix = '', suffix = '', format = 'number', color, icon: Icon 
  }) => {
    const growth = calculateGrowth(previous, current);
    const isPositive = growth > 0;
    
    const formatValue = (value: number) => {
      if (format === 'currency') return `S/.${value.toLocaleString()}`;
      if (format === 'percentage') return `${value}%`;
      return value.toLocaleString();
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${getColorClass(color)}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            {Math.abs(growth).toFixed(1)}%
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              {prefix}{formatValue(current)}{suffix}
            </span>
            <span className="text-gray-500 text-sm">
              vs {formatValue(previous)} anterior
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div 
            className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-gray-600">Cargando tus resultados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con ROI destacado */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-2">🎉 ¡Resultados Increíbles!</h1>
            <p className="text-green-100 text-lg mb-6">
              Tu inversión de S/.{roiData.investment.toLocaleString()} está generando resultados reales
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-2xl font-bold">S/.{roiData.revenue.totalGenerated.toLocaleString()}</div>
                <div className="text-green-100">Revenue Generado</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-2xl font-bold text-yellow-300">{calculateROI().toFixed(0)}%</div>
                <div className="text-green-100">ROI en {roiData.timeframe}</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-2xl font-bold">{roiData.revenue.newClients}</div>
                <div className="text-green-100">Nuevos Clientes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Time Range Selector */}
        <div className="mb-8">
          <div className="flex justify-center space-x-1 bg-gray-200 rounded-lg p-1 w-fit mx-auto">
            {(['30d', '60d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  timeRange === range 
                    ? 'bg-white text-gray-900 shadow' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {range === '30d' ? '30 días' : range === '60d' ? '60 días' : '90 días'}
              </button>
            ))}
          </div>
        </div>

        {/* Métricas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Visitas al Sitio Web"
            current={roiData.metrics.websiteVisits.after}
            previous={roiData.metrics.websiteVisits.before}
            icon={Eye}
            color="blue"
          />
          <MetricCard
            title="Leads por WhatsApp"
            current={roiData.metrics.whatsappLeads.after}
            previous={roiData.metrics.whatsappLeads.before}
            icon={MessageSquare}
            color="green"
          />
          <MetricCard
            title="Llamadas Recibidas"
            current={roiData.metrics.phoneCallsReceived.after}
            previous={roiData.metrics.phoneCallsReceived.before}
            icon={Phone}
            color="purple"
          />
          <MetricCard
            title="Vistas en Google"
            current={roiData.metrics.googleViews.after}
            previous={roiData.metrics.googleViews.before}
            icon={MapPin}
            color="red"
          />
          <MetricCard
            title="Ticket Promedio"
            current={roiData.metrics.avgTicketSize.after}
            previous={roiData.metrics.avgTicketSize.before}
            prefix="S/."
            format="currency"
            icon={DollarSign}
            color="yellow"
          />
          <MetricCard
            title="Tasa de Conversión"
            current={roiData.metrics.conversionRate.after}
            previous={roiData.metrics.conversionRate.before}
            suffix="%"
            format="percentage"
            icon={Target}
            color="green"
          />
        </div>

        {/* Analytics Detallados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ComparisonChart
            title="Métricas de Visibilidad"
            timeframe={roiData.timeframe}
            beforeData={[
              { label: "Visitas Web", value: roiData.metrics.websiteVisits.before },
              { label: "Vistas Google", value: roiData.metrics.googleViews.before },
              { label: "Leads WhatsApp", value: roiData.metrics.whatsappLeads.before }
            ]}
            afterData={[
              { label: "Visitas Web", value: roiData.metrics.websiteVisits.after },
              { label: "Vistas Google", value: roiData.metrics.googleViews.after },
              { label: "Leads WhatsApp", value: roiData.metrics.whatsappLeads.after }
            ]}
          />

          <MilestoneTimeline timeframe={timeRange} />
        </div>

        {/* Revenue Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-500 rounded-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Análisis de Ingresos</h3>
                <p className="text-gray-600">Impacto financiero directo</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Inversión Inicial</span>
                <span className="font-semibold text-red-600">-S/.{roiData.investment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="text-gray-600">Revenue Generado</span>
                <span className="font-semibold text-green-600">+S/.{roiData.revenue.totalGenerated.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="text-gray-600">Ganancia Neta</span>
                <span className="font-bold text-blue-600 text-xl">
                  +S/.{(roiData.revenue.totalGenerated - roiData.investment).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                <span className="text-gray-600">Proyección Mensual</span>
                <span className="font-semibold text-yellow-600">S/.{roiData.revenue.projectedMonthly.toLocaleString()}/mes</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Logros Desbloqueados</h3>
                <p className="text-gray-600">Hitos alcanzados</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { title: "Sitio Web Optimizado", completed: true, date: "Día 7" },
                { title: "Google My Business Activo", completed: true, date: "Día 14" },
                { title: "WhatsApp Business Configurado", completed: true, date: "Día 21" },
                { title: "Primera Conversión Online", completed: true, date: "Día 28" },
                { title: "10+ Leads Mensuales", completed: timeRange !== '30d', date: "Día 45" },
                { title: "ROI Positivo Sostenido", completed: timeRange === '90d', date: "Día 60" }
              ].map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    achievement.completed 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {achievement.completed ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <span className={`font-medium ${achievement.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                      {achievement.title}
                    </span>
                    <span className="text-gray-400 text-sm ml-2">{achievement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonial de Impacto */}
        <div className="mb-8">
          <ImpactTestimonial timeframe={timeRange} />
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-2">¡Estos son RESULTADOS REALES!</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Tu inversión de S/.1,500 se ha convertido en S/.{roiData.revenue.totalGenerated.toLocaleString()} 
            en solo {roiData.timeframe}. Imagínate lo que podemos lograr juntos en los próximos meses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Programar Sesión Estratégica
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Compartir Resultados
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
