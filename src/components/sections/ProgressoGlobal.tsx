import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'

const GOAL = 1000

export default function ProgressoGlobal() {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCount() {
      try {
        const { count: memberCount, error } = await supabase
          .from('members')
          .select('*', { count: 'exact', head: true })

        if (error) throw error
        setCount(memberCount ?? 0)
      } catch (err) {
        console.error('Error fetching member count:', err)
        setCount(0)
      } finally {
        setLoading(false)
      }
    }

    fetchCount()

    const interval = setInterval(fetchCount, 60_000)
    return () => clearInterval(interval)
  }, [])

  const current = count ?? 0
  const percentage = Math.min((current / GOAL) * 100, 100)
  const unlocked = current >= GOAL

  return (
    <div
      className="w-full rounded-2xl border border-green-900 p-6"
      style={{ background: 'linear-gradient(135deg, #0d1f0d 0%, #0a1a0a 100%)' }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌍</span>
          <h3 className="text-base font-semibold text-white">Progresso da Comunidade</h3>
        </div>
        {!loading && (
          <motion.div
            key={current}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-full px-3 py-1 text-sm font-bold"
            style={{
              background: unlocked ? '#f97316' : '#00ff8822',
              color: unlocked ? '#fff' : '#00ff88',
              border: `1px solid ${unlocked ? '#f97316' : '#00ff8844'}`,
            }}
          >
            {`${current.toLocaleString('pt-BR')} / ${GOAL.toLocaleString('pt-BR')}`}
          </motion.div>
        )}
      </div>

      <div
        className="relative mb-4 h-5 w-full overflow-hidden rounded-full"
        style={{ background: '#1a2e1a' }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: loading ? '0%' : `${percentage}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            background: unlocked
              ? 'linear-gradient(90deg, #f97316, #fb923c)'
              : 'linear-gradient(90deg, #00ff88, #4ade80)',
            boxShadow: unlocked ? '0 0 12px #f9731666' : '0 0 12px #00ff8866',
          }}
        />
        {[250, 500, 750].map((milestone) => (
          <div
            key={milestone}
            className="absolute top-0 h-full w-px"
            style={{ left: `${(milestone / GOAL) * 100}%`, background: '#ffffff22' }}
          />
        ))}
        {!unlocked && !loading && (
          <motion.div
            className="absolute top-0 h-full w-8 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #ffffff33, transparent)',
              left: `${percentage}%`,
              transform: 'translateX(-50%)',
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </div>

      <div className="mb-4 flex justify-between text-xs text-green-700">
        <span>0</span><span>250</span><span>500</span><span>750</span><span>1000</span>
      </div>

      {unlocked ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-orange-500/40 p-4 text-center"
          style={{ background: '#f9731611' }}
        >
          <div className="mb-1 text-2xl">🎉</div>
          <p className="text-sm font-bold text-orange-400">Meta atingida! Simulador de voo desbloqueado!</p>
          <p className="mt-1 text-xs text-orange-300/70">
            A comunidade EcoDrones desbloqueou acesso gratuito ao simulador de voo para todos os membros.
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-xl border border-green-900/60 p-3 text-center"
          style={{ background: '#00ff8808' }}
        >
          <p className="text-sm text-green-300/80">
            🎯 Ao atingirmos <span className="font-bold text-green-400">1.000 membros</span>, liberamos acesso gratuito ao{' '}
            <span className="font-bold text-green-400">simulador de voo</span> para toda a comunidade!
          </p>
          {!loading && (
            <p className="mt-2 text-xs text-green-600">
              Faltam apenas{' '}
              <span className="font-semibold text-green-400">
                {Math.max(0, GOAL - current).toLocaleString('pt-BR')} membros
              </span>{' '}
              para desbloqueio
            </p>
          )}
        </motion.div>
      )}

      {loading && (
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-green-700">
          <motion.div
            className="h-3 w-3 rounded-full bg-green-600"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
          Carregando dados...
        </div>
      )}
    </div>
  )
}
