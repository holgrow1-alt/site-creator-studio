import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, Ticket, ArrowLeft, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { supabase, getLevel, type Member } from '@/lib/supabase'

export default function Ranking() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [userPosition, setUserPosition] = useState<number | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('ecodrones_member')
    if (stored) {
      const m = JSON.parse(stored)
      setUserEmail(m.email)
    }
    fetchRanking()
    const interval = setInterval(fetchRanking, 30000)
    return () => clearInterval(interval)
  }, [])

  async function fetchRanking() {
    setLoading(true)
    const { data } = await supabase
      .from('members')
      .select('*')
      .order('invite_count', { ascending: false })
      .order('tickets', { ascending: false })
      .order('created_at', { ascending: true })
      .limit(100)

    if (data) {
      setMembers(data)
      if (userEmail) {
        const pos = data.findIndex(m => m.email === userEmail)
        setUserPosition(pos >= 0 ? pos + 1 : null)
      }
    }
    setLoading(false)
    setLastUpdate(new Date())
  }

  const top10 = members.slice(0, 10)
  const rest = members.slice(10)

  return (
    <div className="min-h-screen bg-[#0a1a0a] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d2a0d] to-[#0a1a0a] border-b border-green-900/40 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/comunidade" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm">Voltar</span>
          </Link>
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400" size={22} />
            <h1 className="text-lg font-bold">Ranking Global</h1>
          </div>
          <button onClick={fetchRanking} className="text-green-500 hover:text-green-400 transition-colors">
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* User position banner */}
        {userPosition && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl border border-green-500/40 bg-green-900/20 text-center"
          >
            <p className="text-green-300 text-sm">Sua posição atual</p>
            <p className="text-3xl font-bold text-green-400">#{userPosition}</p>
            <p className="text-xs text-green-600 mt-1">entre {members.length} membros</p>
          </motion.div>
        )}

        {/* Top 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Trophy size={20} className="text-yellow-400" /> Top 10
          </h2>
          <div className="grid gap-3">
            {top10.map((m, i) => {
              const lv = getLevel(m.invite_count)
              const medals = ['🥇', '🥈', '🥉']
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    m.email === userEmail
                      ? 'border-green-500 bg-green-900/30'
                      : 'border-green-900/40 bg-[#0d1f0d]'
                  }`}
                >
                  <div className="text-2xl w-10 text-center">
                    {i < 3 ? medals[i] : <span className="text-gray-400 text-lg font-bold">#{i + 1}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold truncate">{m.name}</span>
                      <span className="text-lg">{lv.emoji}</span>
                    </div>
                    <div className={`text-xs ${lv.color}`}>{lv.name}</div>
                  </div>
                  <div className="flex gap-4 text-sm text-right">
                    <div>
                      <div className="text-green-400 font-bold">{m.invite_count}</div>
                      <div className="text-gray-500 text-xs flex items-center gap-1"><Users size={10} />convites</div>
                    </div>
                    <div>
                      <div className="text-yellow-400 font-bold">{m.tickets}</div>
                      <div className="text-gray-500 text-xs flex items-center gap-1"><Ticket size={10} />tickets</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Positions 11-100 */}
        {rest.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-400 mb-4">Top 100</h2>
            <div className="space-y-2">
              {rest.map((m, i) => {
                const lv = getLevel(m.invite_count)
                return (
                  <div
                    key={m.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                      m.email === userEmail
                        ? 'border border-green-500 bg-green-900/20'
                        : 'bg-[#0d1f0d]/60'
                    }`}
                  >
                    <span className="text-gray-500 text-sm w-8">#{i + 11}</span>
                    <span className="flex-1 text-sm truncate">{m.name}</span>
                    <span className="text-base">{lv.emoji}</span>
                    <span className="text-green-400 text-sm font-medium">{m.invite_count} conv.</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {members.length === 0 && !loading && (
          <div className="text-center py-16 text-gray-500">
            <Users size={48} className="mx-auto mb-4 opacity-30" />
            <p>Seja o primeiro a entrar no ranking!</p>
            <Link to="/comunidade" className="mt-4 inline-block text-green-400 hover:underline">
              Cadastrar agora →
            </Link>
          </div>
        )}

        <p className="text-center text-gray-600 text-xs mt-8">
          Atualizado às {lastUpdate.toLocaleTimeString('pt-BR')} · atualiza a cada 30s
        </p>
      </div>
    </div>
  )
}
