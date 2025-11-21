
export interface Profile {
  id: string;
  full_name: string;
  avatar_url?: string;
  sleep_schedule?: {
    bedtime: string;
    wake_time: string;
  };
  study_preferences?: {
    preferred_study_times: string[];
    break_frequency: number;
    focus_duration: number;
  };
  productivity_goal: number;
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  category: 'study' | 'assignment' | 'exam' | 'personal';
  priority: 'low' | 'medium' | 'high';
  due_date?: string;
  estimated_duration?: number;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface FocusSession {
  id: string;
  user_id: string;
  task_id?: string;
  duration_minutes: number;
  started_at: string;
  ended_at?: string;
  session_type: 'focus' | 'break';
}

export interface DailyRoutine {
  id: string;
  user_id: string;
  date: string;
  routine_data: any;
  ai_suggestions: any;
  created_at: string;
}

export interface ProductivityMetric {
  id: string;
  user_id: string;
  date: string;
  tasks_completed: number;
  focus_minutes: number;
  productivity_score: number;
  created_at: string;
}