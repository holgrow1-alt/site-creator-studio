import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Member = {
  id: string
  name: string
  email: string
  referral_code: string
  referred_by: string | null
  level: number
  tickets: number
  invite_count: number
  created_at: string
}

export function getLevel(inviteCount: number) {
  if (inviteCount >= 30) return { num: 4, name: 'Embaixador', emoji: '🚁', color: 'text-orange-400' }
  if (inviteCount >= 15) return { num: 3, name: 'Cultivador', emoji: '🌿', color: 'text-emerald-400' }
  if (inviteCount >= 5) return { num: 2, name: 'Semeador', emoji: '🌱', color: 'text-green-400' }
  return { num: 1, name: 'Plantador', emoji: '🌱', color: 'text-green-300' }
}
