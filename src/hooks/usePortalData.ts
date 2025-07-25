// hooks/usePortalData.ts - REEMPLAZO REAL DE usePortalDemo
'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface DashboardMetrics {
  websiteVisits: number
  websiteVisitsGrowth: number
  leads: number
  leadsGrowth: number
  whatsappChats: number
  whatsappChatsGrowth: number
  googleViews: number
  googleViewsGrowth: number
}

interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: 'high' | 'medium' | 'low'
  category: string
  dueDate?: string
  estimatedTime?: string
}

interface Activity {
  id: string
  title: string
  description?: string
  timestamp: string
  status: 'completed' | 'in-progress' | 'pending' | 'waiting'
  category?: string
}

interface PlanProgress {
  currentDay: number
  totalDays: number
  completedSteps: number
  totalSteps: number
  milestones: Array<{
    id: string
    title: string
    completed: boolean
    dueDate?: string
  }>
}

export function usePortalData() {
  const { data: session, status } = useSession()
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])
  const [activities, setActivities] = useState<Activity[]>([])
  const [planProgress, setPlanProgress] = useState<PlanProgress | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // ✅ FETCH REAL DATA FROM API
  const fetchData = async () => {
    if (status !== 'authenticated') return

    try {
      setIsLoading(true)
      setError(null)

      // Fetch all data in parallel
      const [metricsRes, tasksRes, activitiesRes, progressRes] = await Promise.all([
        fetch('/api/portal/metrics'),
        fetch('/api/portal/tasks'),
        fetch('/api/portal/activities'),
        fetch('/api/portal/progress')
      ])

      if (!metricsRes.ok || !tasksRes.ok || !activitiesRes.ok) {
        throw new Error('Failed to fetch portal data')
      }

      const [metricsData, tasksData, activitiesData, progressData] = await Promise.all([
        metricsRes.json(),
        tasksRes.json(),
        activitiesRes.json(),
        progressRes.ok ? progressRes.json() : null
      ])

      setMetrics(metricsData)
      setTasks(tasksData)
      setActivities(activitiesData)
      setPlanProgress(progressData)
    } catch (err) {
      console.error('Error fetching portal data:', err)
      setError(err instanceof Error ? err.message : 'Error loading data')
    } finally {
      setIsLoading(false)
    }
  }

  // ✅ REAL TASK TOGGLE FUNCTION
  const toggleTask = async (taskId: string) => {
    try {
      const response = await fetch(`/api/portal/tasks/${taskId}/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })

      if (!response.ok) {
        throw new Error('Failed to toggle task')
      }

      const updatedTask = await response.json()

      // Update local state
      setTasks(prev => 
        prev.map(task => 
          task.id === taskId 
            ? { ...task, completed: updatedTask.completed }
            : task
        )
      )

      // Add activity for task completion
      if (updatedTask.completed) {
        await createActivity({
          title: `Tarea completada: ${updatedTask.title}`,
          category: 'Tarea',
          status: 'completed'
        })
      }
    } catch (err) {
      console.error('Error toggling task:', err)
      setError('Error al actualizar tarea')
    }
  }

  // ✅ REAL CREATE TASK FUNCTION
  const createTask = async (taskData: Omit<Task, 'id' | 'completed'>) => {
    try {
      const response = await fetch('/api/portal/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
      })

      if (!response.ok) {
        throw new Error('Failed to create task')
      }

      const newTask = await response.json()
      setTasks(prev => [...prev, newTask])

      // Add activity
      await createActivity({
        title: `Nueva tarea creada: ${newTask.title}`,
        category: 'Sistema',
        status: 'completed'
      })

      return newTask
    } catch (err) {
      console.error('Error creating task:', err)
      setError('Error al crear tarea')
      return null
    }
  }

  // ✅ REAL CREATE ACTIVITY FUNCTION
  const createActivity = async (activityData: Omit<Activity, 'id' | 'timestamp'>) => {
    try {
      const response = await fetch('/api/portal/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activityData)
      })

      if (!response.ok) {
        throw new Error('Failed to create activity')
      }

      const newActivity = await response.json()
      setActivities(prev => [newActivity, ...prev].slice(0, 20)) // Keep only latest 20

      return newActivity
    } catch (err) {
      console.error('Error creating activity:', err)
      return null
    }
  }

  // ✅ REAL UPDATE METRICS FUNCTION
  const updateMetrics = async (newMetrics: Partial<DashboardMetrics>) => {
    try {
      const response = await fetch('/api/portal/metrics', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMetrics)
      })

      if (!response.ok) {
        throw new Error('Failed to update metrics')
      }

      const updatedMetrics = await response.json()
      setMetrics(updatedMetrics)

      return updatedMetrics
    } catch (err) {
      console.error('Error updating metrics:', err)
      setError('Error al actualizar métricas')
      return null
    }
  }

  // ✅ FETCH DATA ON MOUNT AND SESSION CHANGE
  useEffect(() => {
    if (status === 'authenticated') {
      fetchData()
    }
  }, [status])

  return {
    // Data
    metrics,
    tasks,
    activities,
    planProgress,
    
    // Loading states
    isLoading,
    error,
    
    // Actions
    toggleTask,
    createTask,
    createActivity,
    updateMetrics,
    refetch: fetchData,
    
    // Helper derived data
    completedTasks: tasks.filter(task => task.completed),
    pendingTasks: tasks.filter(task => !task.completed),
    highPriorityTasks: tasks.filter(task => task.priority === 'high' && !task.completed),
    recentActivities: activities.slice(0, 5)
  }
}
