'use client';

import { Card, CardContent, CardHeader, Badge } from '@/components/ui';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface TimelineMilestone {
  week: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  items: string[];
}

interface TimelineMilestonesProps {
  milestones: TimelineMilestone[];
}

export const TimelineMilestones = ({ milestones }: TimelineMilestonesProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800';
      case 'in-progress':
        return 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 dark:bg-gray-950/20 dark:border-gray-800';
    }
  };

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Timeline de Hitos Semanales</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {milestones.map((milestone) => (
            <div 
              key={milestone.week}
              className={`flex items-start gap-4 p-4 rounded-lg border transition-all cursor-pointer hover:shadow-sm ${getStatusColor(milestone.status)}`}
            >
              <div className="flex-shrink-0 mt-1">
                {getStatusIcon(milestone.status)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">
                    {milestone.title}
                  </h4>
                  <Badge variant="outline" className="text-xs">
                    {milestone.week}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {milestone.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {milestone.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
