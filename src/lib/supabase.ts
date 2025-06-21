
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase 환경 변수가 설정되지 않았습니다:', {
    VITE_SUPABASE_URL: supabaseUrl ? '설정됨' : '누락',
    VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? '설정됨' : '누락'
  })
  throw new Error('VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY 환경 변수를 설정해주세요.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
