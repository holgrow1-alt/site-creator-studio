import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

// BASE DE CONHECIMENTO
const KB: { keys: string[]; answer: string }[] = [
  {
    keys: ['o que e', 'ecodrones', 'projeto', 'sobre', 'apresenta', 'explica', 'me conta', 'missao'],
    answer: `🌱 A **EcoDrones Community** e uma comunidade global de pilotos voluntarios e parceiros que usa **drones autonomos** para reflorestar o planeta - dispersando sementes inteligentes em areas degradadas com precisao cirurgica.\n\nNossa meta: **100.000 arvores plantadas**, impactando biodiversidade, comunidades locais e o clima global.`,
  },
  {
    keys: ['meta', 'arvore', 'quantas', '100', 'objetivo', 'impacto', 'resultado'],
    answer: `🎯 Nossa meta e plantar **100.000 arvores** em zonas degradadas prioritarias.\n\nCada drone planta ate **500 sementes por voo**. Com uma frota comunitaria ativa, isso se torna escalavel - e cada pessoa que apoia multiplica esse numero. Voce faz parte disso? 🚁`,
  },
  {
    keys: ['tecnologia', 'drone', 'como funciona', 'semente', 'plantio', 'sistema', 'autonomo', 'dispersao'],
    answer: `⚙️ Nossos drones usam:\n\n• **Mapeamento biologico** - identificam as zonas mais urgentes\n• **IA de rota** - planejam voos otimizados por terreno e clima\n• **Capsulas de sementes nativas** - biodegradaveis, com nutrientes\n• **App EcoDrones** - pilotos reportam missoes em tempo real\n\nO cerebro do sistema integra dados de satelite, solo e clima para maximizar a taxa de sobrevivencia das mudas.`,
  },
  {
    keys: ['app', 'aplicativo', 'plataforma', 'pilotos', 'piloto', 'voluntario', 'como participar', 'me cadastrar', 'comunidade'],
    answer: `📱 O **App EcoDrones** (em desenvolvimento) permite que pilotos:\n\n• Recebam missoes de plantio na sua regiao\n• Registrem voos e sementes dispersadas\n• Acumulem pontos e subam no ranking de embaixadores\n• Conectem-se com outros voluntarios\n\nPara se tornar piloto voluntario: envie e-mail para **ceorafael@ecodronescommunity.com** ou clique em "Apoiar a missao" no site!`,
  },
  {
    keys: ['apoiar', 'apoie', 'doar', 'doacao', 'contribuir', 'financiar', 'cripto', 'bitcoin', 'ethereum', 'pix', 'dinheiro'],
    answer: `💚 Ha varias formas de apoiar a EcoDrones:\n\n• **Doacao em criptomoedas** - Bitcoin, Ethereum, USDT e outras (secao Doacao Cripto no site)\n• **Parceiro Corporativo** - sua empresa financia plantios e recebe ESG certificado\n• **Piloto Voluntario** - voe com seu drone em missoes de plantio\n• **Embaixador** - divulgue o projeto na sua regiao\n\nAcesse a secao **Apoie** ou clique no botao verde no topo da pagina! 🌿`,
  },
  {
    keys: ['parceiro', 'empresa', 'esg', 'corporativo', 'b2b', 'patrocinio', 'sponsor'],
    answer: `🤝 A EcoDrones oferece **pacotes ESG** para empresas que desejam compensar carbono e ganhar visibilidade:\n\n• Certificado de reflorestamento com georreferenciamento\n• Relatorio de impacto ambiental auditavel\n• Mencao em videos, redes sociais e eventos\n• Co-branding em missoes de plantio\n\nPara proposta customizada: **ceorafael@ecodronescommunity.com**`,
  },
  {
    keys: ['fundador', 'rafael', 'ceo', 'quem criou', 'criador', 'fundou', 'guillen'],
    answer: `👨‍🌾 **Rafael F. M. Guillen** - CEO & Fundador da EcoDrones Community.\n\nEspecialidades: Agritech (Web2+Web3), Sistemas Regenerativos, Radiestesia, Eletrocultura, Bioenergia, Agrofloresta e Homeopatia Agricola.\n\nContato: **ceorafael@ecodronescommunity.com**\nLinkedIn: rafael-guillen-1b864b322\nInstagram: @holgrow_agro_frequency\nSite: www.holgrow.com`,
  },
  {
    keys: ['contato', 'email', 'e-mail', 'falar', 'reuniao', 'agendar', 'conversar'],
    answer: `📬 Entre em contato com o CEO:\n\n• **E-mail**: ceorafael@ecodronescommunity.com\n• **Agendar reuniao**: via Calendly (botao na secao CEO do site)\n\nResponde em ate 24h uteis! ☀️`,
  },
  {
    keys: ['manifesto', 'filosofia', 'visao', 'valores', 'proposito', 'por que', 'porque'],
    answer: `🌍 O **Manifesto EcoDrones** parte de uma realidade urgente: o planeta perde milhoes de hectares de floresta por ano.\n\nNossa resposta:\n> *"Nao esperamos governos nem corporacoes - somos uma comunidade que age agora."*\n\nValores: **Regeneracao • Tecnologia • Comunidade • Transparencia • Acao imediata**\n\nMeta: plantar a segunda melhor epoca - que e AGORA. 🌳`,
  },
  {
    keys: ['ecossistema', 'biodiversidade', 'floresta', 'natureza', 'meio ambiente', 'reflorest', 'regenera'],
    answer: `🌿 Cada arvore plantada desencadeia uma **cadeia de regeneracao**:\n\n• Retorno de fauna nativa - polinizadores - mais sementes\n• Fixacao de carbono - reducao do aquecimento local\n• Recuperacao do ciclo hidrico - mais chuvas regulares\n• Geracao de renda para comunidades rurais\n\nEcossistemas inteiros sao restaurados a partir de um unico voo de drone. E a magia do efeito cascata. 🦋`,
  },
  {
    keys: ['seed', 'semente', 'movement', 'movimento', 'capsule', 'capsula'],
    answer: `🌱 O **SEED Movement** e o coracao operacional da EcoDrones:\n\n• Capsulas biodegradaveis com sementes nativas selecionadas por bioma\n• Nutrientes de liberacao lenta para maximizar germinacao\n• Codificadas por GPS - rastreamos cada semente plantada\n• Produzidas por comunidades locais = geracao de renda\n\nCada voo e uma missao SEED registrada no sistema.`,
  },
  {
    keys: ['embaixador', 'rank', 'ranking', 'pontos', 'gamificacao', 'recompensa'],
    answer: `🏆 O **sistema de embaixadores** gamifica a missao:\n\n• Pilotos ganham pontos por missoes completadas\n• Rankings mensais com recompensas reais\n• Badge de "Guardiao da Floresta" para os top plantadores\n• Embaixadores regionais coordenam times locais\n\nQuanto mais voce planta, mais visivel voce fica na comunidade global! 🌎`,
  },
  {
    keys: ['youtube', 'video', 'assistir', 'canal', 'ver'],
    answer: `▶️ Temos **3 videos** disponiveis na secao "Videos" do site:\n\n1. EcoDrones - Reflorestamento com Drones\n2. Missao SEED - Regeneracao do Planeta\n3. Tecnologia de Plantio Autonomo\n\nCanal YouTube: **@rafaelmartiniano** - inscreva-se para acompanhar as missoes! 🎥`,
  },
  {
    keys: ['site', 'onde', 'endereco', 'url', 'link', 'acessar', 'pagina'],
    answer: `🌐 Site oficial: **ecodronescommunity.com**\n\nNele voce encontra: Manifesto, Tecnologia, Videos, Comunidade, Parceiros, secao Apoie e o perfil completo do CEO.\n\nVoce ja esta nele! 😄 Navegue pelos botoes do menu para explorar cada secao.`,
  },
  {
    keys: ['oi', 'ola', 'ei', 'hey', 'hello', 'hi', 'tudo bem', 'bom dia', 'boa tarde', 'boa noite'],
    answer: `👋 Ola! Sou o **DRONEMAN**, seu guia EcoDrones! 🚁🌱\n\nPosso te contar sobre:\n• A missao de reflorestar o planeta\n• Como a tecnologia de drones funciona\n• Como apoiar ou virar piloto voluntario\n• Parcerias ESG para empresas\n• Falar com o CEO Rafael\n\nO que voce quer saber? 🌿`,
  },
  {
    keys: ['obrigado', 'obrigada', 'valeu', 'thanks', 'thank you', 'legal', 'otimo', 'incrivel'],
    answer: `🌱 Fico feliz em ajudar! Juntos vamos reflorestar o planeta, um voo de drone por vez. 🚁\n\nSe tiver mais duvidas, e so perguntar. E se quiser apoiar a missao, clique no botao **"Apoiar a missao"** no topo da pagina! 💚`,
  },
]

// RAG functions
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
}

function retrieve(query: string): string {
  const q = normalize(query)
  const words = q.split(/\s+/).filter(w => w.length > 2)
  let bestScore = 0
  let bestAnswer = ''
  for (const entry of KB) {
    let score = 0
    for (const key of entry.keys) {
      const nk = normalize(key)
      if (q.includes(nk)) score += 3
      for (const word of words) {
        if (nk.includes(word) || word.includes(nk)) score += 1
      }
    }
    if (score > bestScore) { bestScore = score; bestAnswer = entry.answer }
  }
  if (bestScore === 0) {
    return `🤖 Hmm, nao tenho uma resposta precisa para isso ainda.\n\nPosso te ajudar com:\n• Como funciona a tecnologia dos drones\n• Como apoiar ou virar piloto\n• Parcerias ESG\n• Falar com o CEO\n\nOu envie e-mail: **ceorafael@ecodronescommunity.com** 📬`
  }
  return bestAnswer
}

function renderMarkdown(text: string) {
  return text.split('\n').map((line, i) => {
    const parts = line.split(/\*\*(.+?)\*\*/g)
    return (
      <span key={i} className="block">
        {parts.map((part, j) =>
          j % 2 === 1
            ? <strong key={j} className="font-semibold text-green-700">{part}</strong>
            : part
        )}
      </span>
    )
  })
}

interface Message {
  from: 'bot' | 'user'
  text: string
}

export function DronemanWidget() {
  const [chatOpen, setChatOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: `👋 Ola! Sou o **DRONEMAN**, seu guia EcoDrones! 🚁🌱\n\nPergunte-me sobre a missao, tecnologia, como apoiar, parcerias ou como falar com o CEO. O que voce quer saber?`,
    },
  ])
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => { setIsMobile(window.innerWidth < 640) }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const handleOpen = () => {
    setChatOpen(prev => !prev)
    setShowTooltip(false)
    setTimeout(() => inputRef.current?.focus(), 300)
  }

  const send = (text?: string) => {
    const msg = (text ?? input).trim()
    if (!msg) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: msg }])
    setTyping(true)
    setTimeout(() => {
      const answer = retrieve(msg)
      setMessages(prev => [...prev, { from: 'bot', text: answer }])
      setTyping(false)
    }, 600 + Math.random() * 400)
  }

  const QUICK = ['Como funciona?', 'Quero apoiar 💚', 'Virar piloto', 'Falar com CEO']

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 select-none">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            className="w-[calc(100vw-1.5rem)] sm:w-80 max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-green-200 bg-white flex flex-col"
            style={{ maxHeight: isMobile ? 'calc(70vh - 100px)' : '480px' }}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <div>
                  <span className="font-bold text-white text-sm tracking-wide">DRONEMAN 🌱</span>
                  <div className="text-green-100 text-[10px] font-mono">Assistente EcoDrones</div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white transition-colors text-lg font-bold leading-none" aria-label="Fechar chat">x</button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 bg-green-50/60 space-y-2 min-h-[180px]">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 items-start ${m.from === 'user' ? 'flex-row-reverse' : ''}`}>
                  {m.from === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">🤖</div>
                  )}
                  <div className={`rounded-2xl px-3 py-2 text-sm shadow-sm max-w-[85%] leading-relaxed ${m.from === 'bot' ? 'bg-white border border-green-100 rounded-tl-sm text-gray-700' : 'bg-green-500 text-white rounded-tr-sm'}`}>
                    {m.from === 'bot' ? renderMarkdown(m.text) : m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-xs shrink-0">🤖</div>
                  <div className="bg-white border border-green-100 rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm">
                    <div className="flex gap-1 items-center h-4">
                      {[0, 1, 2].map(j => (
                        <motion.div key={j} className="w-1.5 h-1.5 rounded-full bg-green-400"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: j * 0.15 }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="px-3 pt-2 pb-1 bg-white flex flex-wrap gap-1 shrink-0">
              {QUICK.map(q => (
                <button key={q} onClick={() => send(q)} className="text-[10px] px-2.5 py-1 rounded-full border border-green-200 bg-green-50 text-green-700 hover:bg-green-100 transition-colors font-mono">{q}</button>
              ))}
            </div>

            <div className="px-3 py-2.5 border-t border-green-100 bg-white flex gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Pergunte ao DRONEMAN..."
                className="flex-1 rounded-full border border-green-200 px-4 py-1.5 text-sm outline-none focus:border-green-400 bg-green-50/50 placeholder:text-gray-400 transition-colors"
              />
              <button onClick={() => send()} disabled={!input.trim()} className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 disabled:opacity-40 transition-opacity hover:bg-green-600" aria-label="Enviar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              className="bg-white text-green-700 font-semibold text-xs sm:text-sm px-3 py-2 rounded-2xl shadow-lg border border-green-200 whitespace-nowrap"
            >
              Fale com o DRONEMAN! 🤖
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full overflow-hidden shadow-2xl border-2 border-green-400 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
        aria-label="Abrir chat DRONEMAN"
        style={{ background: 'radial-gradient(circle at 60% 40%, #f0fdf4 60%, #bbf7d0 100%)' }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-green-400 pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
        {isMobile ? <span className="flex items-center justify-center w-full h-full text-4xl select-none">🚁</span> : <SplineScene scene={SPLINE_SCENE} className="w-full h-full" />}
      </motion.button>
    </div>
  )
}
