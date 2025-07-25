import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para la base de datos
export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          email: string
          business_name: string | null
          industry: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          business_name?: string | null
          industry?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          business_name?: string | null
          industry?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contacts: {
        Row: {
          id: string
          user_id: string
          name: string
          email: string | null
          phone: string | null
          company: string | null
          status: 'lead' | 'prospect' | 'client' | 'cold'
          priority: 'high' | 'medium' | 'low'
          last_contact: string
          notes: string | null
          favorite: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          email?: string | null
          phone?: string | null
          company?: string | null
          status?: 'lead' | 'prospect' | 'client' | 'cold'
          priority?: 'high' | 'medium' | 'low'
          last_contact?: string
          notes?: string | null
          favorite?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          email?: string | null
          phone?: string | null
          company?: string | null
          status?: 'lead' | 'prospect' | 'client' | 'cold'
          priority?: 'high' | 'medium' | 'low'
          last_contact?: string
          notes?: string | null
          favorite?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      calendar_events: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          date: string
          time: string
          duration: number
          location: string | null
          type: 'meeting' | 'call' | 'appointment' | 'personal' | 'follow-up'
          reminder: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          date: string
          time: string
          duration?: number
          location?: string | null
          type?: 'meeting' | 'call' | 'appointment' | 'personal' | 'follow-up'
          reminder?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          date?: string
          time?: string
          duration?: number
          location?: string | null
          type?: 'meeting' | 'call' | 'appointment' | 'personal' | 'follow-up'
          reminder?: number
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          priority: 'high' | 'medium' | 'low'
          completed: boolean
          due_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          priority?: 'high' | 'medium' | 'low'
          completed?: boolean
          due_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          priority?: 'high' | 'medium' | 'low'
          completed?: boolean
          due_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      activities: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          type: 'lead' | 'content' | 'achievement' | 'meeting' | 'other'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          type?: 'lead' | 'content' | 'achievement' | 'meeting' | 'other'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          type?: 'lead' | 'content' | 'achievement' | 'meeting' | 'other'
          created_at?: string
        }
      }
      metrics: {
        Row: {
          id: string
          user_id: string
          metric_name: string
          current_value: number
          previous_value: number
          label: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          metric_name: string
          current_value?: number
          previous_value?: number
          label?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          metric_name?: string
          current_value?: number
          previous_value?: number
          label?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

export type SupabaseClient = typeof supabase
