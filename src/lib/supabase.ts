import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

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
  if (inviteCount >= 30) return { num: 4, name: 'Embaixador', emoji: '🦅', color: 'text-orange-400' }
  if (inviteCount >= 15) return { num: 3, name: 'Cultivador', emoji: '🌳', color: 'text-emerald-400' }
  if (inviteCount >= 5) return { num: 2, name: 'Semeador', emoji: '🌱', color: 'text-green-400' }
  return { num: 1, name: 'Explorador', emoji: '🔭', color: 'text-blue-400' }
}

export function calcTickets(inviteCount: number): number {
  let tickets = 1 // base registration ticket
  tickets += inviteCount // 1 per invite
  if (inviteCount >= 5) tickets += 2  // bonus milestone
  if (inviteCount >= 10) tickets += 5 // bonus milestone
  return tickets
}

export function generateReferralCode(name: string): string {
  const prefix = name.replace(/\s+/g, '').substring(0, 4).toUpperCase()
  const suffix = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}${suffix}`
}
