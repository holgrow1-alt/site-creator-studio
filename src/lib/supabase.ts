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
  if (inviteCount >= 30) return { num: 4, name: 'Embaixador', emoji: '\u{1F681}', color: 'text-orange-400' }
  if (inviteCount >= 15) return { num: 3, name: 'Cultivador', emoji: '\u{1F33F}', color: 'text-emerald-400' }
  if (inviteCount >= 5) return { num: 2, name: 'Semeador', emoji: '\u{1F331}', color: 'text-green-400' }
  return { num: 1, name: 'Plantador', emoji: '\u{1F331}', color: 'text-green-300' }
}

export function calcTickets(inviteCount: number): number {
  if (inviteCount >= 30) return inviteCount * 4
  if (inviteCount >= 15) return inviteCount * 3
  if (inviteCount >= 5) return inviteCount * 2
  return inviteCount
}

export function generateReferralCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = 'ECO'
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}
