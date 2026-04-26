import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

export function DronemanWidget() {
  const [chatOpen, setChatOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleRobotClick = () => {
    setChatOpen((prev) => !prev)
    setShowTooltip(false)
  }

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            className="w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl border border-green-200 bg-white flex flex-col"
            style={{ maxHeight: '420px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <span className="font-bold text-white text-base tracking-wide">DRONEMAN 🌱</span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white/80 hover:text-white transition-colors text-lg font-bold leading-none"
                aria-label="Fechar chat"
              >
                ✕
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 bg-green-50/60 space-y-3 min-h-[160px]">
              <div className="flex gap-2 items-start">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm shrink-0">
                  🤖
                </div>
                <div className="bg-white border border-green-100 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-gray-700 shadow-sm max-w-[85%]">
                  Olá! Sou o <strong>DRONEMAN</strong>, seu assistente EcoDrones. Em breve estarei totalmente operacional para te ajudar! 🌿
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm shrink-0">
                  🤖
                </div>
                <div className="bg-white border border-green-100 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-gray-700 shadow-sm max-w-[85%]">
                  🚧 <em>DRONEMAN em breve!</em> Fique ligado para novidades.
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="px-3 py-3 border-t border-green-100 bg-white flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem…"
                className="flex-1 rounded-full border border-green-200 px-4 py-2 text-sm outline-none focus:border-green-400 bg-green-50/50 placeholder:text-gray-400 transition-colors"
                disabled
              />
              <button
                className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 opacity-50 cursor-not-allowed"
                disabled
                aria-label="Enviar"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip balloon */}
      <AnimatePresence>
        {showTooltip && !chatOpen && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, scale: 0.85, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 6 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 20 }}
            className="relative mr-2"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="bg-white text-green-700 font-semibold text-xs sm:text-sm px-3 py-2 rounded-2xl shadow-lg border border-green-200 max-w-[180px] sm:max-w-none sm:whitespace-nowrap"
            >
              Fale com o DRONEMAN! 🤖
              {/* Tail */}
              <span
                className="absolute -bottom-2 right-6 w-0 h-0"
                style={{
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: '8px solid #d1fae5',
                }}
              />
              <span
                className="absolute -bottom-[7px] right-[25px] w-0 h-0"
                style={{
                  borderLeft: '7px solid transparent',
                  borderRight: '7px solid transparent',
                  borderTop: '7px solid white',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot button */}
      <motion.button
        onClick={handleRobotClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full overflow-hidden shadow-2xl border-2 border-green-400 cursor-pointer bg-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
        aria-label="Abrir chat DRONEMAN"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #f0fdf4 60%, #bbf7d0 100%)',
        }}
      >
        {/* Pulsing ring */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-green-400 pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
        <SplineScene
          scene={SPLINE_SCENE}
          className="w-full h-full"
        />
      </motion.button>
    </div>
  )
}
