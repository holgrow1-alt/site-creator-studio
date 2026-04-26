import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Wind,
  Flame,
  CloudRain,
  Bug,
  TrendingUp,
  ChevronDown,
  Leaf,
  ShieldCheck,
  DollarSign,
  Megaphone,
  Quote,
} from "lucide-react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const statCards = [
  { value: "R$ 1,3 bi", label: "Custo anual ao SUS (doenças respiratórias)", color: "#ef4444" },
  { value: "103%", label: "Crescimento de mortes por calor na América Latina", color: "#f97316" },
  { value: "832.000", label: "Mortes por desastres geológicos (1995–2024)", color: "#eab308" },
  { value: "75%", label: "Da produção alimentar que depende de polinizadores", color: "#22c55e" },
  { value: "U$ 577 bi", label: "Custo global anual da extinção de polinizadores", color: "#3b82f6" },
];

const esgTable = [
  { company: "Microsoft", amount: "U$ 1 Bilhão", focus: "Remoção de carbono e inovação climática", initials: "MS", color: "#0078d4" },
  { company: "Amazon", amount: "U$ 100 Milhões", focus: "Fundo \"Right Now Climate\" para restauração florestal", initials: "AZ", color: "#ff9900" },
  { company: "Apple", amount: "U$ 200 Milhões", focus: '"Restore Fund" para projetos de impacto na natureza', initials: "AP", color: "#555555" },
  { company: "Google.org", amount: "U$ 100 Milhões", focus: "Uso de IA e dados para monitoramento ambiental", initials: "GL", color: "#4285f4" },
  { company: "NVIDIA", amount: "Centenas de Milhões", focus: "Simulação climática e previsão de desastres", initials: "NV", color: "#76b900" },
];

const fiscalItems = [
  {
    icon: ShieldCheck,
    title: "Lei do Bem",
    desc: "Incentivos para inovação tecnológica aplicada — como nossos drones de plantio.",
    color: "#22c55e",
  },
  {
    icon: DollarSign,
    title: "Dedução de IR",
    desc: "Empresas pelo Lucro Real podem deduzir doações para projetos de impacto ambiental.",
    color: "#3b82f6",
  },
  {
    icon: Megaphone,
    title: "Benefício Duplo",
    desc: "Deixe de pagar imposto 'seco' e invista na EcoDrones: gere marketing positivo, ativos ESG e melhore a comunidade.",
    color: "#f59e0b",
  },
];

const accordionSections = [
  {
    id: "cenario",
    icon: Flame,
    emoji: "🏥",
    tag: "01 — Cenário de Emergência",
    title: "Por que agir agora?",
    color: "#ef4444",
  },
  {
    id: "esg",
    icon: TrendingUp,
    emoji: "⚙️",
    tag: "02 — ESG Corporativo",
    title: "A engrenagem bilionária",
    color: "#3b82f6",
  },
  {
    id: "fiscal",
    icon: ShieldCheck,
    emoji: "📋",
    tag: "03 — Incentivos Fiscais",
    title: "Otimização financeira",
    color: "#22c55e",
  },
  {
    id: "pitch",
    icon: Megaphone,
    emoji: "🎯",
    tag: "04 — O Pitch",
    title: "Engenharia de sobrevivência",
    color: "#f59e0b",
  },
];

/* ─────────────────────────────────────────
   SUB-PANELS
───────────────────────────────────────── */
function PanelCenario() {
  return (
    <div className="space-y-10">
      {/* Saúde */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Wind className="w-5 h-5 text-red-500" />
          <h4 className="font-semibold text-foreground text-lg">Saúde Pública e o Colapso Silencioso</h4>
        </div>
        <p className="text-foreground/70 text-sm leading-relaxed mb-5">
          O ar das nossas cidades está adoecendo a população. A falta de biomas preservados tem um custo direto na vida humana:
        </p>
        <div className="space-y-4">
          {[
            {
              icon: Wind,
              color: "#ef4444",
              title: "Alergias e Doenças Respiratórias",
              text: "O aumento das temperaturas e do CO₂ disparou a carga de pólen em 60%, causando surtos globais de asma e rinite. No Brasil, o custo para o SUS ultrapassa R$ 1,3 bilhão anualmente apenas em internações por doenças respiratórias agravadas pelo clima.",
            },
            {
              icon: Flame,
              color: "#f97316",
              title: "Mortalidade Térmica",
              text: "As mortes por calor na América Latina cresceram 103%. Sem a regeneração promovida pela EcoDrones Community, as cidades continuarão sendo armadilhas de calor mortais.",
            },
            {
              icon: CloudRain,
              color: "#eab308",
              title: "Tragédias Geológicas",
              text: "Entre 1995 e 2024, desastres como enchentes e deslizamentos (causados pela ausência de cobertura vegetal) mataram mais de 832.000 pessoas no mundo.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-4 rounded-xl border bg-white/60"
                style={{ borderColor: item.color + "30" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: item.color + "15" }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h5>
                  <p className="text-foreground/65 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Alimentos */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Bug className="w-5 h-5 text-amber-500" />
          <h4 className="font-semibold text-foreground text-lg">O Colapso da Base Alimentar</h4>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 p-4 rounded-xl border bg-amber-50/80"
          style={{ borderColor: "#f59e0b50" }}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-amber-100">
            <Bug className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-1 text-sm">Extinção de Polinizadores</h5>
            <p className="text-foreground/65 text-sm leading-relaxed">
              75% da produção de alimentos depende de polinizadores. O custo global da sua perda é de{" "}
              <strong className="text-amber-700">U$ 577 bilhões/ano</strong>. A EcoDrones Community atua na restauração desses micro-ecossistemas essenciais.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {statCards.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
            className="rounded-xl p-4 text-center border"
            style={{ background: s.color + "10", borderColor: s.color + "40" }}
          >
            <div className="font-display text-xl font-bold mb-1" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[11px] text-foreground/60 leading-snug">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelESG() {
  return (
    <div className="space-y-4">
      <p className="text-foreground/70 leading-relaxed">
        Você não está sozinho. A EcoDrones Community está alinhada ao fluxo de capital das maiores corporações da história:
      </p>
      {/* Table — desktop */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-emerald-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-emerald-50 border-b border-emerald-200">
              <th className="text-left px-5 py-3 font-semibold text-foreground/70 text-xs uppercase tracking-wider">Empresa</th>
              <th className="text-left px-5 py-3 font-semibold text-foreground/70 text-xs uppercase tracking-wider">Investimento</th>
              <th className="text-left px-5 py-3 font-semibold text-foreground/70 text-xs uppercase tracking-wider">Foco Principal</th>
            </tr>
          </thead>
          <tbody>
            {esgTable.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-b border-emerald-100 hover:bg-emerald-50/50 transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                      style={{ background: row.color }}
                    >
                      {row.initials}
                    </div>
                    <span className="font-semibold text-foreground">{row.company}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span
                    className="font-display font-bold text-base"
                    style={{ color: row.color }}
                  >
                    {row.amount}
                  </span>
                </td>
                <td className="px-5 py-4 text-foreground/65 text-sm">{row.focus}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Cards — mobile */}
      <div className="md:hidden space-y-3">
        {esgTable.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl border p-4"
            style={{ borderColor: row.color + "40", background: row.color + "08" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                style={{ background: row.color }}
              >
                {row.initials}
              </div>
              <div>
                <div className="font-semibold text-foreground">{row.company}</div>
                <div className="font-bold text-sm" style={{ color: row.color }}>{row.amount}</div>
              </div>
            </div>
            <p className="text-foreground/65 text-sm">{row.focus}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="rounded-xl border border-blue-200 bg-blue-50/70 p-5"
      >
        <p className="text-sm text-blue-800 leading-relaxed">
          <strong>Além dessas gigantes,</strong> milhares de empresas no mundo já assumiram metas de emissão zero (Net Zero) e buscam projetos como o nosso para validar seus relatórios de sustentabilidade.
        </p>
      </motion.div>
    </div>
  );
}

function PanelFiscal() {
  return (
    <div className="space-y-4">
      <p className="text-foreground/70 leading-relaxed">
        Apoiar a EcoDrones Community não é apenas um custo; é uma <strong>estratégia de otimização financeira.</strong>
      </p>
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
        <p className="text-sm text-emerald-800 font-medium">
          Leis de Incentivo em Todos os Países — Quase todos os governos modernos possuem legislações que permitem abater investimentos ambientais dos impostos.
        </p>
      </div>
      <div>
        <div className="font-mono text-xs uppercase tracking-widest text-primary/70 mb-4">No Brasil</div>
        <div className="grid sm:grid-cols-3 gap-4">
          {fiscalItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border p-5 bg-white/80"
                style={{ borderColor: item.color + "40" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.color + "15" }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h5 className="font-semibold text-foreground mb-2">{item.title}</h5>
                <p className="text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PanelPitch() {
  return (
    <div className="space-y-4">
      {/* Highlight box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 p-7 text-center"
      >
        <p className="font-display text-xl md:text-2xl font-bold text-emerald-800 leading-tight">
          NÃO É APENAS REFLORESTAMENTO.<br />
          <span className="text-teal-600">É ENGENHARIA DE SOBREVIVÊNCIA.</span>
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-foreground/70 leading-relaxed"
      >
        Enquanto o mundo debate o clima, a EcoDrones Community entrega escala. Unimos a inteligência das máquinas à sabedoria da terra para proteger vidas, salvar biomas e reduzir os custos bilionários da saúde pública.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="rounded-xl border border-blue-200 bg-blue-50/70 p-6"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-blue-500 mb-3">Para Empresas</div>
        <p className="text-blue-900 leading-relaxed text-sm">
          Ao apoiar nosso projeto, você se une a líderes como Google e Amazon, cumpre metas rigorosas de ESG e utiliza leis de incentivo fiscal para <strong>transformar impostos em impacto real e auditável.</strong>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="rounded-xl border border-amber-200 bg-amber-50/60 p-6 text-center"
      >
        <p className="font-display text-xl text-amber-800 italic font-semibold">
          "Onde outros veem crise, nós construímos resiliência."
        </p>
      </motion.div>

      {/* Encerramento + assinatura */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 p-7 text-white"
      >
        <Quote className="w-6 h-6 text-emerald-300 mb-3 opacity-70" />
        <p className="leading-relaxed text-emerald-50 mb-5 text-sm md:text-base">
          O planeta não precisa de mais promessas; ele precisa de algoritmos que plantam e drones que protegem. A EcoDrones Community é a tecnologia servindo à vida.
        </p>
        <div className="border-t border-white/20 pt-4">
          <div className="font-display text-lg text-white">Rafael Guillen</div>
          <div className="font-mono text-xs text-emerald-300 uppercase tracking-widest">Fundador — EcoDrones Community</div>
        </div>
      </motion.div>
    </div>
  );
}

const panelComponents: Record<string, React.FC> = {
  cenario: PanelCenario,
  esg: PanelESG,
  fiscal: PanelFiscal,
  pitch: PanelPitch,
};

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export function EstrategiaRegenerativa() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="estrategia-regenerativa"
      className="relative py-8 md:py-12 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #ecfdf5 40%, #f0f9ff 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-emerald-700"
        >
          <Leaf className="w-4 h-4" />
          <span>ESG · Estratégia Regenerativa</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-emerald-500 block"
          />
          <span>EcoDrones Community</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mb-6"
        >
          <h2 className="font-display text-xl md:text-2xl leading-[0.95] tracking-tight text-emerald-900 mb-5">
            ESTRATÉGIA REGENERATIVA
            <span className="block text-teal-600 mt-1">ECODRONES COMMUNITY</span>
          </h2>
          <p className="text-lg md:text-xl text-emerald-800/70 font-light max-w-2xl">
            Onde a Tecnologia Encontra a Sobrevivência Global e a Eficiência Fiscal
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4 mt-7">
          {accordionSections.map((sec, i) => {
            const isOpen = openId === sec.id;
            const Panel = panelComponents[sec.id];
            const Icon = sec.icon;
            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border overflow-hidden shadow-sm"
                style={{
                  borderColor: isOpen ? sec.color + "60" : "#d1fae5",
                  background: isOpen ? "white" : "rgba(255,255,255,0.7)",
                  transition: "border-color 0.3s, background 0.3s",
                }}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggle(sec.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ background: isOpen ? sec.color + "20" : "#f0fdf4" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: sec.color }} />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest mb-0.5" style={{ color: sec.color }}>
                        {sec.tag}
                      </div>
                      <div className="font-display text-xl md:text-2xl text-emerald-900">{sec.title}</div>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-emerald-600" />
                  </motion.div>
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-8 pt-2 border-t" style={{ borderColor: sec.color + "30" }}>
                        <Panel />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Sources */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 pt-6 border-t border-emerald-200"
        >
          <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-600/60 mb-3">Fontes</div>
          <p className="text-[11px] text-foreground/45 leading-relaxed">
            OMS: Dados de mortalidade e saúde respiratória · IPBES: Dados sobre polinizadores e biodiversidade ·
            Relatórios ESG (2024–2025): Microsoft, Amazon, Google e Apple · WMO: Estatísticas de desastres naturais ·
            Legislação Tributária Internacional: Marcos regulatórios de incentivo à economia verde
          </p>
        </motion.div>
      </div>
    </section>
  );
}
