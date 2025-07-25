'use client';

import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Calculator, PieChart, BarChart3, CreditCard, Wallet, Target, AlertCircle, Download, Calendar, Filter, ChevronRight, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface FinancialMetric {
  label: string;
  value: number;
  previousValue: number;
  format: 'currency' | 'percentage' | 'number';
  trend: 'up' | 'down' | 'stable';
  description: string;
}

interface ExpenseCategory {
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

interface PLItem {
  category: string;
  amount: number;
  type: 'income' | 'expense';
  subcategories?: { name: string; amount: number; }[];
}

export default function FinanzasPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    type: 'income' as 'income' | 'expense',
    amount: '',
    category: '',
    description: ''
  });

  // Cargar transacciones del localStorage
  useEffect(() => {
    const savedTransactions = localStorage.getItem('financial-transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    } else {
      // Datos iniciales de ejemplo
      const initialTransactions: Transaction[] = [
        {
          id: '1',
          type: 'income',
          amount: 1500,
          category: 'Ventas',
          description: 'Consultas odontológicas',
          date: new Date().toISOString().split('T')[0]
        },
        {
          id: '2',
          type: 'expense',
          amount: 300,
          category: 'Marketing',
          description: 'Facebook Ads',
          date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        }
      ];
      setTransactions(initialTransactions);
      localStorage.setItem('financial-transactions', JSON.stringify(initialTransactions));
    }
  }, []);

  // Calcular métricas en tiempo real
  const calculateMetrics = (): FinancialMetric[] => {
    const thisMonth = new Date().getMonth();
    const lastMonth = thisMonth - 1;
    
    const thisMonthTransactions = transactions.filter(t => 
      new Date(t.date).getMonth() === thisMonth
    );
    const lastMonthTransactions = transactions.filter(t => 
      new Date(t.date).getMonth() === lastMonth
    );

    const thisMonthIncome = thisMonthTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const thisMonthExpenses = thisMonthTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const lastMonthIncome = lastMonthTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const lastMonthExpenses = lastMonthTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const thisMonthProfit = thisMonthIncome - thisMonthExpenses;
    const lastMonthProfit = lastMonthIncome - lastMonthExpenses;
    
    const profitMargin = thisMonthIncome > 0 ? (thisMonthProfit / thisMonthIncome) * 100 : 0;
    const lastProfitMargin = lastMonthIncome > 0 ? (lastMonthProfit / lastMonthIncome) * 100 : 0;

    return [
      {
        label: 'Ingresos del Mes',
        value: thisMonthIncome,
        previousValue: lastMonthIncome,
        format: 'currency',
        trend: thisMonthIncome >= lastMonthIncome ? 'up' : 'down',
        description: 'Total de ingresos del mes actual'
      },
      {
        label: 'Gastos del Mes',
        value: thisMonthExpenses,
        previousValue: lastMonthExpenses,
        format: 'currency',
        trend: thisMonthExpenses <= lastMonthExpenses ? 'up' : 'down',
        description: 'Total de gastos del mes actual'
      },
      {
        label: 'Utilidad Neta',
        value: thisMonthProfit,
        previousValue: lastMonthProfit,
        format: 'currency',
        trend: thisMonthProfit >= lastMonthProfit ? 'up' : 'down',
        description: 'Ganancia después de gastos'
      },
      {
        label: 'Margen de Utilidad',
        value: profitMargin,
        previousValue: lastProfitMargin,
        format: 'percentage',
        trend: profitMargin >= lastProfitMargin ? 'up' : 'down',
        description: 'Porcentaje de ganancia sobre ingresos'
      }
    ];
  };

  const financialMetrics = calculateMetrics();

  // Funciones para manejar transacciones
  const addTransaction = () => {
    if (!newTransaction.amount || !newTransaction.category || !newTransaction.description) {
      alert('Por favor completa todos los campos');
      return;
    }

    const transaction: Transaction = {
      id: Date.now().toString(),
      type: newTransaction.type,
      amount: parseFloat(newTransaction.amount),
      category: newTransaction.category,
      description: newTransaction.description,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('financial-transactions', JSON.stringify(updatedTransactions));

    // Reset form
    setNewTransaction({
      type: 'income',
      amount: '',
      category: '',
      description: ''
    });
    setShowAddTransaction(false);
  };

  const calculateCashFlow = () => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return { income, expenses, profit: income - expenses };
  };

  const cashFlow = calculateCashFlow();

const expenseCategories: ExpenseCategory[] = [
  { name: 'Marketing Digital', amount: 800, percentage: 35, color: '#3B82F6' },
  { name: 'Herramientas SaaS', amount: 450, percentage: 20, color: '#10B981' },
  { name: 'Hosting & Dominios', amount: 180, percentage: 8, color: '#F59E0B' },
  { name: 'Contenido & Diseño', amount: 320, percentage: 14, color: '#8B5CF6' },
  { name: 'Soporte & Mantenimiento', amount: 380, percentage: 17, color: '#EF4444' },
  { name: 'Otros', amount: 150, percentage: 6, color: '#6B7280' }
];

const plData: PLItem[] = [
  {
    category: 'Ingresos',
    amount: 12500,
    type: 'income',
    subcategories: [
      { name: 'Plan MYPE', amount: 10500 },
      { name: 'Servicios Adicionales', amount: 1500 },
      { name: 'Consultoría', amount: 500 }
    ]
  },
  {
    category: 'Costos Directos',
    amount: 2680,
    type: 'expense',
    subcategories: [
      { name: 'Hosting & Infraestructura', amount: 180 },
      { name: 'Herramientas de Desarrollo', amount: 450 },
      { name: 'Licencias Software', amount: 320 },
      { name: 'Soporte Técnico', amount: 380 },
      { name: 'Contenido Premium', amount: 350 },
      { name: 'Procesamiento de Pagos', amount: 1000 }
    ]
  },
  {
    category: 'Gastos Operativos',
    amount: 4200,
    type: 'expense',
    subcategories: [
      { name: 'Marketing y Publicidad', amount: 1800 },
      { name: 'Personal', amount: 2000 },
      { name: 'Oficina y Servicios', amount: 400 }
    ]
  }
];

const [selectedPeriod, setSelectedPeriod] = useState<'mes' | 'trimestre' | 'año'>('mes');
const [showDetails, setShowDetails] = useState<string | null>(null);

  const totalIncome = plData.filter(item => item.type === 'income').reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = plData.filter(item => item.type === 'expense').reduce((sum, item) => sum + item.amount, 0);
  const netProfit = totalIncome - totalExpenses;
  const profitMargin = (netProfit / totalIncome) * 100;

  const formatCurrency = (value: number) => `S/.${value.toLocaleString()}`;
  const formatPercentage = (value: number) => `${value.toFixed(1)}%`;

  const getMetricIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
  };

  const getMetricColor = (trend: string) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Centro Financiero</h1>
        <p className="text-emerald-100">
          Métricas clave, análisis de rentabilidad y control de gastos
        </p>
      </div>

      {/* Período Selector */}
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Período de Análisis</h2>
          <div className="flex gap-2">
            {(['mes', 'trimestre', 'año'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  selectedPeriod === period
                    ? 'bg-emerald-100 text-emerald-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Métricas Clave */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {financialMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              {getMetricIcon(metric.trend)}
            </div>
            
            <h3 className="text-sm font-medium text-gray-500 mb-1">{metric.label}</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl font-bold text-gray-900">
                {metric.format === 'currency' ? formatCurrency(metric.value) :
                 metric.format === 'percentage' ? formatPercentage(metric.value) :
                 metric.value.toFixed(1)}
              </span>
              <span className={`text-sm font-medium ${getMetricColor(metric.trend)}`}>
                {metric.trend === 'up' ? '+' : metric.trend === 'down' ? '-' : ''}
                {metric.format === 'currency' ? formatCurrency(Math.abs(metric.value - metric.previousValue)) :
                 metric.format === 'percentage' ? formatPercentage(Math.abs(metric.value - metric.previousValue)) :
                 Math.abs(metric.value - metric.previousValue).toFixed(1)}
              </span>
            </div>
            <p className="text-xs text-gray-500">{metric.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Resumen P&L */}
      <div className="bg-white rounded-xl shadow border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Estado de Resultados (P&L)</h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Exportar</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filtros</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Resumen Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">{formatCurrency(totalIncome)}</div>
              <div className="text-sm text-green-700">Ingresos Totales</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-1">{formatCurrency(totalExpenses)}</div>
              <div className="text-sm text-red-700">Gastos Totales</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">{formatCurrency(netProfit)}</div>
              <div className="text-sm text-blue-700">Utilidad Neta ({formatPercentage(profitMargin)})</div>
            </div>
          </div>

          {/* Detalle P&L */}
          <div className="space-y-4">
            {plData.map((item, index) => (
              <div key={item.category} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setShowDetails(showDetails === item.category ? null : item.category)}
                  className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-semibold ${
                        item.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.category}
                      </span>
                      {item.subcategories && (
                        <span className="text-sm text-gray-500">
                          ({item.subcategories.length} elementos)
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${
                        item.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.type === 'income' ? '+' : '-'}{formatCurrency(item.amount)}
                      </span>
                      <div className={`transform transition-transform ${
                        showDetails === item.category ? 'rotate-90' : ''
                      }`}>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </button>

                {showDetails === item.category && item.subcategories && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white"
                  >
                    <div className="p-4 space-y-2">
                      {item.subcategories.map((sub, subIndex) => (
                        <div key={subIndex} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700">{sub.name}</span>
                          <span className="text-sm font-medium text-gray-900">
                            {formatCurrency(sub.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Análisis de Gastos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Gastos */}
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Distribución de Gastos</h3>
          <div className="space-y-4">
            {expenseCategories.map((category, index) => (
              <div key={category.name} className="flex items-center gap-4">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: category.color }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-900">{formatCurrency(category.amount)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${category.percentage}%`,
                        backgroundColor: category.color 
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{category.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI y Proyecciones */}
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">ROI & Proyecciones</h3>
          
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-900">ROI Plan MYPE</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Inversión cliente:</span>
                  <span className="font-medium">S/.1,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Costo vs agencias:</span>
                  <span className="font-medium">S/.15,000</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-blue-700 font-medium">Ahorro cliente:</span>
                  <span className="font-bold text-blue-700">S/.13,500 (90%)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">Proyección 12 Meses</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Clientes objetivo:</span>
                  <span className="font-medium">100 clientes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ingresos proyectados:</span>
                  <span className="font-medium">S/.150,000</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-green-700 font-medium">Utilidad estimada:</span>
                  <span className="font-bold text-green-700">S/.85,000 (57%)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-yellow-900 mb-1">Recomendaciones</div>
                  <ul className="text-yellow-800 space-y-1">
                    <li>• Optimizar CAC: target &lt;S/.150</li>
                    <li>• Aumentar LTV con upsells</li>
                    <li>• Automatizar más procesos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información de Desarrollo */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-100 rounded-lg">
            <BarChart3 className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 Centro Financiero - Demo</h3>
            <p className="text-gray-600 mb-4">
              En la versión completa, estos datos se conectarán automáticamente con tus sistemas de pago y contabilidad.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>✅ Integración automática con Stripe/PayPal</p>
              <p>✅ Sync con hojas de cálculo (Google Sheets)</p>
              <p>✅ Reportes personalizables y exportables</p>
              <p>✅ Alertas automáticas de métricas clave</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
