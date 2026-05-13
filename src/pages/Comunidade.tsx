import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Share2, Users, Ticket, Trophy, ArrowRight } from 'lucide-react'
import { supabase, getLevel, calcTickets, generateReferralCode, type Member } from '@/lib/supabase'
import ProgressoGlobal from '@/components/sections/ProgressoGlobal'

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------
const schema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
})
type FormData = z.infer<typeof schema>

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const BASE_URL = 'https://ecodronescommunity.com'
const LS_EMAIL_KEY = 'ecodrones_member_email'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function nextLevelInfo(inviteCount: number) {
  if (inviteCount < 5) return { label: 'Semeador', need: 5, emoji: '🌱' }
  if (inviteCount < 15) return { label: 'Cultivador', need: 15, emoji: '🌳' }
  if (inviteCount < 30) return { label: 'Embaixador', need: 30, emoji: '🦅' }
  return null
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function Benefit({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex items-start gap-3 rounded-xl border border-green-900/60 p-4"
      style={{ background: '#0d1f0d' }}
    >
      <span className="text-2xl">{emoji}</span>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-green-400/70">{desc}</p>
      </div>
    </motion.div>
  )
}

function LevelBadge({ inviteCount }: { inviteCount: number }) {
  const level = getLevel(inviteCount)
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold ${level.color}`}
      style={{ background: '#00ff8815', border: '1px solid #00ff8830' }}
    >
      <span>{level.emoji}</span>
      <span>
        Nível {level.num} — {level.name}
      </span>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode
  label: string
  value: string | number
  accent?: string
}) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl border border-green-900/50 p-4"
      style={{ background: '#0d1f0d' }}
    >
      <div className="mb-1" style={{ color: accent ?? '#00ff88' }}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-green-500">{label}</p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Dashboard view (shown after registration or if already a member)
// ---------------------------------------------------------------------------
function Dashboard({ member, ranking }: { member: Member; ranking: number | null }) {
  const [copied, setCopied] = useState(false)
  const level = getLevel(member.invite_count)
  const next = nextLevelInfo(member.invite_count)
  const referralLink = `${BASE_URL}/r/${member.referral_code}`
  const tickets = calcTickets(member.invite_count)

  const progressToNext = next
    ? Math.min(
        ((member.invite_count - (next.need === 5 ? 0 : next.need === 15 ? 5 : 15)) /
          (next.need - (next.need === 5 ? 0 : next.need === 15 ? 5 : 15))) *
          100,
        100,
      )
    : 100

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // fallback
      const el = document.createElement('textarea')
      el.value = referralLink
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const whatsappMsg = encodeURIComponent(
    `Olá! Estou na comunidade EcoDrones — tecnologia de drones sustentáveis que ajuda a produzir mais alimentos e proteger o meio ambiente. Junte-se a mim e ganhe benefícios exclusivos: ${referralLink}`,
  )
  const whatsappUrl = `https://wa.me/?text=${whatsappMsg}`
  const instagramUrl = `https://www.instagram.com/`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Welcome banner */}
      <div
        className="rounded-2xl border border-green-700/40 p-6 text-center"
        style={{ background: 'linear-gradient(135deg, #0d1f0d, #0a1a0a)' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="mb-3 text-5xl"
        >
          {level.emoji}
        </motion.div>
        <h2 className="mb-1 text-xl font-bold text-white">{member.name}</h2>
        <div className="mb-3 flex justify-center">
          <LevelBadge inviteCount={member.invite_count} />
        </div>
        {ranking !== null && (
          <p className="text-sm text-green-400">
            Você está em{' '}
            <span className="font-bold text-yellow-400">#{ranking}</span> no ranking global
          </p>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={<Users size={20} />}
          label="Convites"
          value={member.invite_count}
        />
        <StatCard
          icon={<Ticket size={20} />}
          label="Tickets"
          value={tickets}
          accent="#f97316"
        />
        <StatCard
          icon={<Trophy size={20} />}
          label="Ranking"
          value={ranking !== null ? `#${ranking}` : '--'}
          accent="#facc15"
        />
      </div>

      {/* Progress to next level */}
      {next ? (
        <div
          className="rounded-2xl border border-green-900/50 p-5"
          style={{ background: '#0d1f0d' }}
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-green-400">Progresso para o próximo nível</p>
            <span className="text-sm font-bold text-white">
              {next.emoji} {next.label}
            </span>
          </div>
          <div className="mb-2 h-3 w-full overflow-hidden rounded-full" style={{ background: '#1a2e1a' }}>
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressToNext}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              style={{
                background: 'linear-gradient(90deg, #00ff88, #4ade80)',
                boxShadow: '0 0 8px #00ff8866',
              }}
            />
          </div>
          <p className="text-xs text-green-600">
            {member.invite_count} / {next.need} convites para {next.label}
          </p>
        </div>
      ) : (
        <div
          className="rounded-2xl border border-orange-500/40 p-4 text-center"
          style={{ background: '#f9731611' }}
        >
          <p className="font-bold text-orange-400">🦅 Nível máximo atingido — Embaixador!</p>
        </div>
      )}

      {/* Referral link */}
      <div
        className="rounded-2xl border border-green-800/60 p-5"
        style={{ background: '#0d1f0d' }}
      >
        <p className="mb-3 text-sm font-semibold text-green-300">🔗 Seu link de convite</p>
        <div className="flex items-center gap-2">
          <div
            className="flex-1 overflow-hidden rounded-xl px-3 py-2 text-sm font-mono text-green-400"
            style={{ background: '#0a1a0a', border: '1px solid #00ff8830' }}
          >
            <span className="block truncate">{referralLink}</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.93 }}
            onClick={copyLink}
            className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold transition-colors"
            style={{
              background: copied ? '#4ade80' : '#00ff88',
              color: '#0a1a0a',
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copiado!' : 'Copiar'}
          </motion.button>
        </div>

        {/* Share buttons */}
        <div className="mt-4 flex gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: '#25D366' }}
          >
            <Share2 size={16} />
            WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
            }}
          >
            <Share2 size={16} />
            Instagram
          </a>
        </div>
      </div>

      {/* Motivational message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-2xl border border-green-900/40 p-5 text-center"
        style={{ background: 'linear-gradient(135deg, #0d1f0d, #0a1a0a)' }}
      >
        <p className="text-sm italic text-green-300/80">
          "Você não está apenas convidando pessoas… está ajudando a construir o futuro."
        </p>
        <p className="mt-2 text-xs text-green-600">— Comunidade EcoDrones</p>
      </motion.div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Registration form
// ---------------------------------------------------------------------------
function RegistrationForm({
  refCode,
  onSuccess,
}: {
  refCode: string | null
  onSuccess: (member: Member) => void
}) {
  const [serverError, setServerError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setLoading(true)
    setServerError(null)

    try {
      // Check if email already exists
      const { data: existing, error: fetchError } = await supabase
        .from('members')
        .select('*')
        .eq('email', data.email)
        .single()

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError
      }

      if (existing) {
        // Already registered — load their data
        localStorage.setItem(LS_EMAIL_KEY, data.email)
        onSuccess(existing as Member)
        return
      }

      // New registration
      const referralCode = generateReferralCode(data.name)

      const newMember: Omit<Member, 'id' | 'created_at'> = {
        name: data.name,
        email: data.email,
        referral_code: referralCode,
        referred_by: refCode ?? null,
        level: 1,
        tickets: 1,
        invite_count: 0,
      }

      const { data: inserted, error: insertError } = await supabase
        .from('members')
        .insert([newMember])
        .select()
        .single()

      if (insertError) throw insertError

      // If referred, increment referrer
      if (refCode) {
        await supabase.rpc('increment_referrer', { ref_code: refCode })
      }

      localStorage.setItem(LS_EMAIL_KEY, data.email)
      onSuccess(inserted as Member)
    } catch (err: unknown) {
      console.error(err)
      if (err && typeof err === 'object' && 'message' in err) {
        setServerError((err as { message: string }).message)
      } else {
        setServerError('Erro ao registrar. Tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <label className="mb-1.5 block text-sm font-medium text-green-300">
          Nome completo
        </label>
        <input
          {...register('name')}
          placeholder="Seu nome"
          className="w-full rounded-xl px-4 py-3 text-white placeholder-green-700 outline-none transition-all focus:ring-2 focus:ring-green-500"
          style={{ background: '#0d1f0d', border: '1px solid #00ff8830' }}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-green-300">
          E-mail
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="seu@email.com"
          className="w-full rounded-xl px-4 py-3 text-white placeholder-green-700 outline-none transition-all focus:ring-2 focus:ring-green-500"
          style={{ background: '#0d1f0d', border: '1px solid #00ff8830' }}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      {refCode && (
        <div
          className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-green-400"
          style={{ background: '#00ff8810', border: '1px solid #00ff8830' }}
        >
          <span>🔗</span>
          <span>
            Você foi convidado com o código{' '}
            <span className="font-bold text-green-300">{refCode}</span>
          </span>
        </div>
      )}

      {serverError && (
        <div
          className="rounded-xl px-4 py-3 text-sm text-red-400"
          style={{ background: '#ff000015', border: '1px solid #ff000030' }}
        >
          {serverError}
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-bold text-black transition-opacity disabled:opacity-60"
        style={{
          background: 'linear-gradient(135deg, #00ff88, #4ade80)',
          boxShadow: '0 0 24px #00ff8844',
        }}
      >
        {loading ? (
          <>
            <motion.div
              className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
            />
            Registrando...
          </>
        ) : (
          <>
            Entrar na Comunidade
            <ArrowRight size={18} />
          </>
        )}
      </motion.button>

      <p className="text-center text-xs text-green-700">
        Ao se registrar, você concorda com nossa política de privacidade.
      </p>
    </motion.form>
  )
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------
export default function Comunidade() {
  const { code: paramCode } = useParams<{ code?: string }>()
  const [searchParams] = useSearchParams()
  const refCode = paramCode || searchParams.get('ref') || null

  const [member, setMember] = useState<Member | null>(null)
  const [ranking, setRanking] = useState<number | null>(null)
  const [checkingStorage, setCheckingStorage] = useState(true)

  // On mount, check localStorage for existing session
  useEffect(() => {
    async function checkExisting() {
      const savedEmail = localStorage.getItem(LS_EMAIL_KEY)
      if (savedEmail) {
        const { data, error } = await supabase
          .from('members')
          .select('*')
          .eq('email', savedEmail)
          .single()
        if (!error && data) {
          setMember(data as Member)
          await fetchRanking(data as Member)
        }
      }
      setCheckingStorage(false)
    }
    checkExisting()
  }, [])

  async function fetchRanking(m: Member) {
    try {
      const { data, error } = await supabase
        .from('members')
        .select('invite_count, created_at')
        .order('invite_count', { ascending: false })
        .order('tickets', { ascending: false })
        .order('created_at', { ascending: true })

      if (error) throw error
      if (data) {
        const pos = data.findIndex((row: { invite_count: number; created_at: string }) => {
          return row.invite_count === m.invite_count && row.created_at === m.created_at
        })
        setRanking(pos >= 0 ? pos + 1 : null)
      }
    } catch (err) {
      console.error('Error fetching ranking:', err)
    }
  }

  async function handleRegistration(m: Member) {
    setMember(m)
    await fetchRanking(m)
  }

  if (checkingStorage) {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        style={{ background: '#0a1a0a' }}
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-4xl"
        >
          🌱
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: '#0a1a0a' }}>
      {/* Hero */}
      <div
        className="relative overflow-hidden pb-16 pt-20 text-center"
        style={{
          background: 'linear-gradient(180deg, #0d2010 0%, #0a1a0a 100%)',
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 -z-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, #00ff8815 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-5xl"
          >
            🌱
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-4xl"
          >
            Junte-se à Revolução dos{' '}
            <span style={{ color: '#00ff88' }}>Drones Sustentáveis</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-green-300/70 md:text-lg"
          >
            Uma comunidade que usa tecnologia de ponta para transformar a agricultura,
            proteger o meio ambiente e garantir um futuro melhor para todos.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-8 px-4 pb-24">
        {/* Benefits */}
        <AnimatePresence>
          {!member && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-bold text-white">Por que participar?</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Benefit
                  emoji="💰"
                  title="Renda extra"
                  desc="Ganhe tickets e benefícios ao convidar amigos para a comunidade."
                />
                <Benefit
                  emoji="🍊"
                  title="Mais alimentos frescos"
                  desc="Drones que otimizam a produção agrícola com menos desperdício."
                />
                <Benefit
                  emoji="🌧️"
                  title="Redução de enchentes"
                  desc="Monitoramento inteligente do solo e gestão hídrica sustentável."
                />
                <Benefit
                  emoji="⛰️"
                  title="Menos deslizamentos"
                  desc="Mapeamento de riscos em tempo real para proteger comunidades."
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Global progress bar */}
        <ProgressoGlobal />

        {/* Registration or Dashboard */}
        <section>
          <AnimatePresence mode="wait">
            {member ? (
              <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Dashboard member={member} ranking={ranking} />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div
                  className="rounded-2xl border border-green-900/60 p-6"
                  style={{ background: '#0d1f0d' }}
                >
                  <h2 className="mb-1 text-xl font-bold text-white">
                    Registre-se gratuitamente
                  </h2>
                  <p className="mb-6 text-sm text-green-500">
                    Junte-se a milhares de pessoas que já fazem parte do movimento.
                  </p>
                  <RegistrationForm refCode={refCode} onSuccess={handleRegistration} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Link to ranking */}
        <div className="text-center">
          <a
            href="/ranking"
            className="inline-flex items-center gap-2 text-sm text-green-500 transition-colors hover:text-green-300"
          >
            <Trophy size={16} />
            Ver ranking completo da comunidade
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
