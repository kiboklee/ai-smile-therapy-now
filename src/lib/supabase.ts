
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase 환경 변수가 설정되지 않았습니다. 임시 클라이언트를 생성합니다.')
  // 임시 더미 값으로 클라이언트 생성 (실제 기능은 작동하지 않음)
  export const supabase = createClient('https://dummy.supabase.co', 'dummy-key')
} else {
  export const supabase = createClient(supabaseUrl, supabaseAnonKey)
}
