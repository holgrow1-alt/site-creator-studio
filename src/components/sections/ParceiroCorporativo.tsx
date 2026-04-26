import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Globe,
  Smartphone,
  Shirt,
  Gift,
  Trophy,
  Video,
  Wind,
  TreePine,
  ParkingSquare,
  Dumbbell,
  Apple,
  Camera,
  Star,
  CheckCircle2,
  MessageCircle,
  Mail,
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  Building2,
  Coins,
  TrendingUp,
  MapPin,
  Radio,
  Newspaper,
  Crown,
  UserCheck,
  ChevronRight,
  Rocket,
} from "lucide-react";

/* ─────────────────────────── Count-up hook ─────────────────────────── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * ease));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ─────────────────── Data ─────────────────── */
const visibilidadeCards = [
  {
    icon: Globe,
    title: "No Site EcoDrones",
    desc: "Logo na página principal, seção de parceiros e todas as páginas. Milhares de visitantes mensais.",
    color: "#22c55e",
  },
  {
    icon: Smartphone,
    title: "No App EcoDrones",
    desc: "Banners exclusivos dentro do aplicativo. Cada usuário vê sua marca ao abrir missões, leaderboard e dashboard.",
    color: "#16a34a",
  },
  {
    icon: Shirt,
    title: "Camisetas & Uniformes",
    desc: "Logo nas camisetas oficiais da comunidade, usadas em eventos, ações e no dia a dia pelos membros.",
    color: "#15803d",
  },
  {
    icon: Gift,
    title: "Brindes & Merchandise",
    desc: "Bonés, garrafas, mochilas, adesivos — tudo com a marca do parceiro ao lado da EcoDrones.",
    color: "#eab308",
  },
  {
    icon: Trophy,
    title: "Eventos Presenciais",
    desc: "Presença em feiras, congressos, hackathons e encontros da comunidade com alta visibilidade.",
    color: "#d97706",
  },
  {
    icon: Video,
    title: "Conteúdo Digital",
    desc: "Menção em vídeos YouTube, posts redes sociais, newsletters, stories e lives da EcoDrones.",
    color: "#b45309",
  },
];

const acoesCards = [
  {
    icon: Wind,
    title: "Drone Banner Aéreo",
    desc: "2 drones sobrevoando grandes centros urbanos carregando um banner gigante com a SUA marca. Publicidade aérea que para a cidade.",
    color: "#22c55e",
    badge: "IMPACTO MÁXIMO",
  },
  {
    icon: TreePine,
    title: "Ações em Praças Públicas",
    desc: "Plantio coletivo com a comunidade, distribuição de mudas e frutas. Sua marca em cada muda, cada faixa, cada camiseta.",
    color: "#16a34a",
    badge: "ORGÂNICO & VIRAL",
  },
  {
    icon: ParkingSquare,
    title: "Shoppings & Estacionamentos",
    desc: "Ações interativas com demonstração de drones, QR codes para doação, distribuição de brindes. Milhares de pessoas impactadas.",
    color: "#15803d",
    badge: "GRANDE ALCANCE",
  },
  {
    icon: Dumbbell,
    title: "Campos de Futebol",
    desc: "Presença em eventos esportivos, banners nos campos, ações de plantio com jogadores e torcedores.",
    color: "#eab308",
    badge: "ENGAJAMENTO ALTO",
  },
  {
    icon: Apple,
    title: "Distribuição de Frutas",
    desc: "Ações sociais de doação de frutas colhidas pelos drones em escolas, hospitais e comunidades.",
    color: "#d97706",
    badge: "GENEROSIDADE",
  },
  {
    icon: Camera,
    title: "Cobertura Mídia",
    desc: "Todas as ações são filmadas e publicadas. Conteúdo orgânico com potencial viral garantido.",
    color: "#b45309",
    badge: "CONTEÚDO VIRAL",
  },
];

const appFeatures = [
  { icon: Zap, label: "Missões de Plantio", desc: "Usuários recebem missões geolocalizadas para plantar árvores" },
  { icon: BarChart3, label: "Dashboard de Impacto", desc: "Estatísticas em tempo real de árvores plantadas e CO₂ capturado" },
  { icon: Trophy, label: "Leaderboard Global", desc: "Ranking de plantadores com gamificação e recompensas" },
  { icon: Users, label: "Chat da Comunidade", desc: "Conexão entre membros, eventos e grupos locais de plantio" },
  { icon: Smartphone, label: "Wallet de Créditos", desc: "Sistema de tokens verdes resgatáveis por produtos e benefícios" },
  { icon: Star, label: "Banners de Parceiros", desc: "Espaço exclusivo para exposição de marca para usuários engajados" },
];

const pacotes = [
  {
    nivel: "SEMENTE",
    icon: "🌱",
    subtitulo: "Parceiro Básico",
    cor: "#86efac",
    corTexto: "#166534",
    beneficios: [
      "Logo no site EcoDrones",
      "Menção nas redes sociais",
      "Certificado digital de parceiro",
      "Relatório básico de impacto",
    ],
    destaque: false,
  },
  {
    nivel: "BROTO",
    icon: "🌿",
    subtitulo: "Parceiro Prata",
    cor: "#4ade80",
    corTexto: "#15803d",
    beneficios: [
      "Tudo do nível Semente",
      "Logo no app EcoDrones",
      "Logo em camisetas oficiais",
      "Presença em 2 eventos/ano",
      "Posts dedicados nas redes",
    ],
    destaque: false,
  },
  {
    nivel: "ÁRVORE",
    icon: "🌳",
    subtitulo: "Parceiro Ouro",
    cor: "#22c55e",
    corTexto: "#166534",
    beneficios: [
      "Tudo do nível Broto",
      "Banner aéreo com drones",
      "Ações em praças e eventos",
      "Brindes com sua marca",
      "Cobertura de mídia exclusiva",
      "Relatório ESG trimestral",
    ],
    destaque: true,
  },
  {
    nivel: "FLORESTA",
    icon: "🌎",
    subtitulo: "Parceiro Diamante",
    cor: "#eab308",
    corTexto: "#78350f",
    beneficios: [
      "Tudo do nível Árvore",
      "Naming de ação exclusiva",
      "Conteúdo co-criado",
      "Relatório ESG personalizado",
      "Dashboard de marca em tempo real",
      "Acesso ao CEO & time fundador",
    ],
    destaque: false,
  },
];

/* ─────────────────── Component ─────────────────── */
export function ParceiroCorporativo() {
  const reduced = useReducedMotion();
  const { count: countEmpresas, ref: refEmpresas } = useCountUp(47, 1800);
  const { count: countImpacto, ref: refImpacto } = useCountUp(2500000, 2500);
  const { count: countEventos, ref: refEventos } = useCountUp(120, 2000);

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section
      id="parceiro-corporativo"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #052e16 0%, #064e3b 25%, #065f46 50%, #166534 75%, #14532d 100%)",
      }}
    >
      {/* Decorative overlay elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 50% at 10% 20%, rgba(34,197,94,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 90% 80%, rgba(234,179,8,0.12) 0%, transparent 60%)`,
        }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 py-8 md:py-10">
        {/* ── Section label ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em]"
          style={{ color: "#4ade80" }}
        >
          <Building2 size={14} />
          <span>Parcerias Corporativas</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px block"
            style={{ background: "#4ade80" }}
          />
          <span>Investidores & ESG</span>
        </motion.div>

        {/* ── Main headline ── */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <h2
            className="font-display leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              color: "#ffffff",
            }}
          >
            PATROCINE A <span
              style={{
                color: "#4ade80",
                textShadow:
                  "0 0 40px rgba(74,222,128,0.4), 0 0 80px rgba(74,222,128,0.2)",
              }}
            >
              REVOLUÇÃO VERDE
            </span>
          </h2>
        </motion.div>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl font-light leading-relaxed mb-8 max-w-3xl"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Sua marca na maior plataforma de regeneração do planeta. Visibilidade
          real, impacto mensurável e retorno garantido — para empresas que
          querem liderar a transição verde.
        </motion.p>

        {/* ── Stats bar ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 sm:p-8 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(74,222,128,0.2)",
          }}
        >
          {[
            { ref: refEmpresas, count: countEmpresas, suffix: "+", label: "Empresas Interessadas" },
            { ref: refImpacto, count: countImpacto, suffix: "", label: "Pessoas Impactadas", format: true },
            { ref: refEventos, count: countEventos, suffix: "+", label: "Eventos Planejados" },
          ].map((stat, i) => (
            <div key={i} className="text-center" ref={stat.ref}>
              <div
                className="font-display text-lg md:text-xl"
                style={{
                  color: "#4ade80",
                  textShadow: "0 0 20px rgba(74,222,128,0.3)",
                }}
              >
                {stat.format
                  ? (stat.count / 1000000).toFixed(1) + "M"
                  : stat.count.toLocaleString("pt-BR")}
                {stat.suffix}
              </div>
              <div
                className="font-mono text-xs uppercase tracking-widest mt-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 1 — VISIBILIDADE DA MARCA
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: "#86efac" }}
            >
              01
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(74,222,128,0.2)" }} />
            <h3
              className="font-display text-lg md:text-xl"
              style={{ color: "#ffffff" }}
            >
              VISIBILIDADE DA MARCA
            </h3>
          </div>
          <p
            className="text-base font-light mb-6 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Onde a sua logo aparece — em cada touchpoint da comunidade EcoDrones
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibilidadeCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={reduced ? {} : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={reduced ? {} : { y: -6, scale: 1.02 }}
                  className="group relative rounded-xl p-6 cursor-default overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {/* hover accent line */}
                  <div
                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                    style={{
                      background: card.color,
                      boxShadow: `0 0 12px ${card.color}`,
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${card.color}20`,
                      border: `1px solid ${card.color}40`,
                    }}
                  >
                    <Icon size={22} style={{ color: card.color }} />
                  </div>
                  <h4
                    className="font-display text-xl mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 2 — AÇÕES ESPETACULARES
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: "#86efac" }}
            >
              02
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(74,222,128,0.2)" }} />
            <h3
              className="font-display text-lg md:text-xl"
              style={{ color: "#ffffff" }}
            >
              AÇÕES ESPETACULARES
            </h3>
          </div>
          <p
            className="text-base font-light mb-6 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Marketing de impacto real — sua marca nos melhores momentos da EcoDrones
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {acoesCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={reduced ? {} : { y: -6 }}
                  className="group relative rounded-xl p-6 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                    style={{
                      background: card.color,
                      boxShadow: `0 0 12px ${card.color}`,
                    }}
                  />
                  {/* Badge */}
                  <div
                    className="inline-block font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded mb-4"
                    style={{
                      background: `${card.color}20`,
                      color: card.color,
                      border: `1px solid ${card.color}40`,
                    }}
                  >
                    {card.badge}
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${card.color}15`,
                      border: `1px solid ${card.color}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: card.color }} />
                  </div>
                  <h4
                    className="font-display text-xl mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 3 — O APP ECODRONES
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: "#86efac" }}
            >
              03
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(74,222,128,0.2)" }} />
            <h3
              className="font-display text-lg md:text-xl"
              style={{ color: "#ffffff" }}
            >
              O APP ECODRONES
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Features list */}
            <div>
              <p
                className="text-lg font-light leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                O aplicativo EcoDrones é o coração da comunidade — com{" "}
                <span style={{ color: "#4ade80" }}>banners rotativos</span> de
                parceiros visíveis a cada abertura, missão completa e ação
                realizada.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {appFeatures.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={reduced ? {} : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(74,222,128,0.1)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(74,222,128,0.15)" }}
                      >
                        <Icon size={16} style={{ color: "#4ade80" }} />
                      </div>
                      <div>
                        <div
                          className="text-sm font-semibold mb-0.5"
                          style={{ color: "#ffffff" }}
                        >
                          {feat.label}
                        </div>
                        <div
                          className="text-xs font-light leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {feat.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Phone mockup */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, x: 40, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Glow behind phone */}
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl scale-110"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(74,222,128,0.3) 0%, transparent 70%)",
                  }}
                />
                {/* Phone frame */}
                <div
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
                  style={{
                    width: 280,
                    border: "3px solid rgba(74,222,128,0.3)",
                    boxShadow:
                      "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(74,222,128,0.15)",
                  }}
                >
                  <img
                    src="/app-mockup.jpg"
                    alt="Pessoa segurando celular com o App EcoDrones aberto"
                    className="w-full object-cover"
                    style={{ height: 400 }}
                  />
                  {/* Partner banner overlay on phone */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(5,46,22,0.95) 0%, transparent 100%)",
                    }}
                  >
                    <div
                      className="font-mono text-[9px] uppercase tracking-widest mb-1"
                      style={{ color: "#4ade80" }}
                    >
                      Banner Parceiro — Slot Disponível
                    </div>
                    <div
                      className="text-xs font-light"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      Sua marca aqui para +50k usuários ativos
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={
                    reduced ? {} : { y: [0, -8, 0] }
                  }
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-4 -right-8 rounded-xl px-3 py-2"
                  style={{
                    background: "#eab308",
                    boxShadow: "0 8px 24px rgba(234,179,8,0.4)",
                  }}
                >
                  <div
                    className="font-mono text-[10px] font-bold uppercase"
                    style={{ color: "#000" }}
                  >
                    50k+ usuários
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 4 — PACOTES DE PARCERIA
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: "#86efac" }}
            >
              04
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(74,222,128,0.2)" }} />
            <h3
              className="font-display text-lg md:text-xl"
              style={{ color: "#ffffff" }}
            >
              PACOTES DE PARCERIA
            </h3>
          </div>
          <p
            className="text-base font-light mb-6 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Escolha o nível de investimento e visibilidade ideal para sua empresa
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pacotes.map((pkg, i) => (
              <motion.div
                key={i}
                initial={reduced ? {} : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={reduced ? {} : { y: -8, scale: 1.03 }}
                className="relative rounded-2xl p-6 flex flex-col overflow-hidden"
                style={
                  pkg.destaque
                    ? {
                        background:
                          "linear-gradient(160deg, rgba(34,197,94,0.15) 0%, rgba(22,101,52,0.25) 100%)",
                        border: `2px solid ${pkg.cor}`,
                        boxShadow: `0 0 40px ${pkg.cor}30, 0 20px 60px rgba(0,0,0,0.3)`,
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }
                }
              >
                {pkg.destaque && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      background: pkg.cor,
                      color: "#fff",
                      boxShadow: `0 4px 14px ${pkg.cor}60`,
                    }}
                  >
                    RECOMENDADO
                  </div>
                )}

                <div className="text-2xl mb-3 mt-2">{pkg.icon}</div>
                <div
                  className="font-display text-2xl mb-1"
                  style={{ color: pkg.cor }}
                >
                  {pkg.nivel}
                </div>
                <div
                  className="font-mono text-xs uppercase tracking-widest mb-5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {pkg.subtitulo}
                </div>

                <div className="space-y-2 flex-1">
                  {pkg.beneficios.map((b, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: pkg.cor }}
                      />
                      <span
                        className="text-xs font-light leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={`https://wa.me/5511999999999?text=Ol%C3%A1%21+Tenho+interesse+no+pacote+de+parceria+EcoDrones+n%C3%ADvel+${pkg.nivel}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduced ? {} : { scale: 1.04 }}
                  whileTap={reduced ? {} : { scale: 0.97 }}
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300"
                  style={
                    pkg.destaque
                      ? {
                          background: pkg.cor,
                          color: "#fff",
                          boxShadow: `0 4px 20px ${pkg.cor}50`,
                        }
                      : {
                          background: `${pkg.cor}15`,
                          color: pkg.cor,
                          border: `1px solid ${pkg.cor}40`,
                        }
                  }
                >
                  Quero Este
                  <ArrowRight size={12} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 5 — CTA FORTE
        ══════════════════════════════════════════ */}
        <motion.div
          {...fadeUp(0)}
          className="mb-6 rounded-3xl p-6 md:p-8 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(74,222,128,0.12) 0%, rgba(234,179,8,0.08) 100%)",
            border: "1px solid rgba(74,222,128,0.25)",
          }}
        >
          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            animate={
              reduced
                ? {}
                : {
                    boxShadow: [
                      "0 0 40px rgba(74,222,128,0.1)",
                      "0 0 80px rgba(74,222,128,0.2)",
                      "0 0 40px rgba(74,222,128,0.1)",
                    ],
                  }
            }
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          <div
            className="inline-block font-mono text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(239,68,68,0.2)",
              color: "#fca5a5",
              border: "1px solid rgba(239,68,68,0.3)",
            }}
          >
            Vagas Limitadas — Parceiros Fundadores
          </div>

          <h3
            className="font-display leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: "#ffffff",
            }}
          >
            SEJA UM PARCEIRO <span
              style={{
                color: "#4ade80",
                textShadow: "0 0 30px rgba(74,222,128,0.5)",
              }}
            >
              ECODRONES
            </span>
          </h3>
          <p
            className="text-lg font-light mb-6 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Transforme impostos em impacto. Sua empresa ao lado dos líderes da
            regeneração global.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/5511999999999?text=Olá! Quero ser parceiro da EcoDrones. Gostaria de saber mais sobre os pacotes disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduced ? {} : { scale: 1.05, y: -3 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 rounded-xl px-4 sm:px-8 py-4 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold w-full sm:w-auto"
              style={{
                background: "#22c55e",
                color: "#ffffff",
                boxShadow: "0 8px 32px rgba(34,197,94,0.4)",
              }}
            >
              <MessageCircle size={18} />
              Quero Ser Parceiro — WhatsApp
            </motion.a>
            <motion.a
              href="mailto:ceorafael@ecodronescommunity.com?subject=Interesse em Parceria Corporativa EcoDrones"
              whileHover={reduced ? {} : { scale: 1.05, y: -3 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 rounded-xl px-4 sm:px-8 py-4 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold w-full sm:w-auto"
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Mail size={18} />
              Enviar E-mail
            </motion.a>
          </div>

        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 6 — SOCIAL PROOF / DEPOIMENTOS
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)}>
          <div className="flex items-center gap-4 mb-8">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: "#86efac" }}
            >
              06
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(74,222,128,0.2)" }} />
            <h3
              className="font-display text-lg md:text-xl"
              style={{ color: "#ffffff" }}
            >
              PRIMEIROS PARCEIROS
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                future: true,
                placeholder: "Em breve",
                desc: "O primeiro parceiro fundador terá naming exclusivo em nossa maior ação de 2025.",
              },
              {
                future: true,
                placeholder: "Em breve",
                desc: "47 empresas já demonstraram interesse formal. Seja uma das primeiras a oficializar.",
              },
              {
                future: true,
                placeholder: "Em breve",
                desc: "Depoimentos dos nossos parceiros fundadores — em breve nesta seção.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={reduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderStyle: "dashed",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      style={{ color: "rgba(234,179,8,0.3)" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm font-light leading-relaxed mb-4 flex-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {item.desc}
                </p>
                <div
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "rgba(74,222,128,0.4)" }}
                >
                  {item.placeholder} — Parceiro Fundador
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final micro CTA */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-6 text-center"
          >
            <p
              className="font-mono text-sm uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Sua empresa pode ser a primeira
            </p>
            <motion.a
              href="mailto:ceorafael@ecodronescommunity.com?subject=Interesse em Parceria Corporativa EcoDrones"
              whileHover={reduced ? {} : { scale: 1.04 }}
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest"
              style={{ color: "#4ade80" }}
            >
              Entrar em contato
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 7 — ECOTOKENS
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-6">
          {/* Divider */}
          <div className="h-px w-full mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.3), rgba(234,179,8,0.3), transparent)" }} />

          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: "#fbbf24" }}>07</span>
            <div className="h-px flex-1" style={{ background: "rgba(234,179,8,0.2)" }} />
            <h3 className="font-display text-lg md:text-xl" style={{ color: "#ffffff" }}>
              ECOTOKENS
            </h3>
          </div>

          {/* Headline impactante */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
            <div>
              <div
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(234,179,8,0.15)", color: "#fbbf24", border: "1px solid rgba(234,179,8,0.3)" }}
              >
                <Coins size={12} />
                Moeda do Ecossistema EcoDrones
              </div>
              <h4
                className="font-display leading-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#ffffff" }}
              >
                APOIE AGORA E RECEBA
                <br />
                <span style={{ color: "#fbbf24", textShadow: "0 0 30px rgba(251,191,36,0.5)" }}>
                  ECOTOKENS
                </span>
                <br />
                ANTES QUE O MUNDO DESCUBRA
              </h4>
              <p className="text-base font-light leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Cada apoiador recebe EcoTokens <strong style={{ color: "#fbbf24" }}>proporcional ao valor apoiado</strong> — a moeda de troca oficial do ecossistema EcoDrones, com utilidade real no app e potencial de valorização massiva.
              </p>
              {/* Valuation badge */}
              <div
                className="inline-flex flex-col items-center justify-center rounded-2xl p-6 mb-8"
                style={{
                  background: "linear-gradient(135deg, rgba(234,179,8,0.12) 0%, rgba(234,179,8,0.04) 100%)",
                  border: "1px solid rgba(234,179,8,0.35)",
                }}
              >
                <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(251,191,36,0.7)" }}>
                  Valuation projetado em 5 anos
                </div>
                <div
                  className="font-display text-lg md:text-xl"
                  style={{ color: "#fbbf24", textShadow: "0 0 40px rgba(251,191,36,0.4)" }}
                >
                  MAIS DE U$ 15 BILHÕES
                </div>
                <div className="flex items-center gap-2 mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <TrendingUp size={14} style={{ color: "#4ade80" }} />
                  <span className="font-mono text-xs">Quem apoia agora entra no valor mais baixo</span>
                </div>
              </div>
              {/* Utilidades dos tokens */}
              <div className="space-y-2">
                {[
                  "Comprar missões premium no app",
                  "Desbloquear novas áreas de plantio",
                  "Trocar por produtos do ecossistema",
                  "Acesso exclusivo a eventos e ações",
                  "Participação em decisões da comunidade (governance)",
                ].map((util, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={13} style={{ color: "#fbbf24", flexShrink: 0 }} />
                    <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.65)" }}>{util}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabela de tokens por apoio */}
            <div>
              <div
                className="font-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: "rgba(251,191,36,0.6)" }}
              >
                Exemplo de distribuição de EcoTokens
              </div>
              <div className="space-y-3">
                {[
                  { apoio: "R$ 50", tokens: "500", bonus: "", label: "Apoiador Semente" },
                  { apoio: "R$ 150", tokens: "1.800", bonus: "+20%", label: "Apoiador Broto" },
                  { apoio: "R$ 500", tokens: "7.500", bonus: "+50%", label: "Apoiador Árvore" },
                  { apoio: "R$ 1.000", tokens: "18.000", bonus: "+80%", label: "Apoiador Floresta" },
                  { apoio: "R$ 5.000", tokens: "120.000", bonus: "+140%", label: "Parceiro Fundador" },
                  { apoio: "R$ 10.000+", tokens: "300.000+", bonus: "+200%", label: "Parceiro Diamante", destaque: true },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={reduced ? {} : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="flex items-center justify-between rounded-xl px-5 py-4"
                    style={
                      row.destaque
                        ? {
                            background: "linear-gradient(90deg, rgba(234,179,8,0.18) 0%, rgba(234,179,8,0.06) 100%)",
                            border: "1px solid rgba(234,179,8,0.45)",
                          }
                        : {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.07)",
                          }
                    }
                  >
                    <div>
                      <div className="font-display text-xl" style={{ color: row.destaque ? "#fbbf24" : "#ffffff" }}>
                        {row.apoio}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {row.label}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-2xl" style={{ color: "#fbbf24" }}>
                          {row.tokens}
                        </span>
                        <span className="font-mono text-xs" style={{ color: "rgba(251,191,36,0.6)" }}>ECO</span>
                      </div>
                      {row.bonus && (
                        <div
                          className="font-mono text-[10px] px-2 py-0.5 rounded-full text-right mt-0.5"
                          style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80" }}
                        >
                          bônus {row.bonus}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 font-mono text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                * Valores ilustrativos. Distribuição final definida no whitepaper EcoDrones.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 8 — LICENÇAS DE ÁREA / EMBAIXADORES
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <div className="h-px w-full mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.3), rgba(34,197,94,0.3), transparent)" }} />

          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: "#86efac" }}>08</span>
            <div className="h-px flex-1" style={{ background: "rgba(74,222,128,0.2)" }} />
            <h3 className="font-display text-lg md:text-xl" style={{ color: "#ffffff" }}>
              LICENÇAS DE ÁREA
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Texto */}
            <div>
              <div
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.25)" }}
              >
                <MapPin size={12} />
                Modelo de Embaixadores por Cidade
              </div>
              <h4
                className="font-display leading-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#ffffff" }}
              >
                SEJA O LÍDER
                <br />
                <span style={{ color: "#4ade80", textShadow: "0 0 30px rgba(74,222,128,0.4)" }}>
                  DA REGENERAÇÃO
                </span>
                <br />
                NA SUA CIDADE
              </h4>
              <p className="text-base font-light leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                Em breve, a EcoDrones vai vender <strong style={{ color: "#4ade80" }}>licenças de área exclusivas</strong> por cidade. Cada cidade é dividida em zonas — e o embaixador daquela zona passa a ser o representante oficial da EcoDrones na região.
              </p>

              {/* Como funciona */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Crown, label: "Representante oficial", desc: "Você é o rosto da EcoDrones na sua zona — autoridade reconhecida pela comunidade" },
                  { icon: Radio, label: "Promoção ampla", desc: "Rádios locais, blogs, sites, redes sociais, jornais e YouTube da sua região" },
                  { icon: Users, label: "Eventos na comunidade", desc: "Organize ações de plantio, hackathons e encontros em nome da EcoDrones" },
                  { icon: Coins, label: "Comissão garantida", desc: "Ganhe comissão sobre todas as doações e parcerias geradas na sua zona" },
                  { icon: Newspaper, label: "Primeiros têm condições especiais", desc: "Embaixadores fundadores terão valores e benefícios exclusivos para sempre" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={reduced ? {} : { opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(74,222,128,0.08)" }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(74,222,128,0.15)" }}
                      >
                        <Icon size={16} style={{ color: "#4ade80" }} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-0.5" style={{ color: "#ffffff" }}>{item.label}</div>
                        <div className="text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA urgência */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
              >
                <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "#fca5a5" }}>
                  Vagas Limitadas por Cidade
                </div>
                <p className="text-sm font-light mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Reserve sua zona antes que outra pessoa garanta a sua cidade. Primeiros embaixadores terão condições especiais permanentes.
                </p>
                <motion.a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Quero+reservar+uma+licen%C3%A7a+de+%C3%A1rea+na+minha+cidade+como+Embaixador+EcoDrones."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduced ? {} : { scale: 1.04 }}
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold"
                  style={{ background: "#22c55e", color: "#ffffff", boxShadow: "0 4px 20px rgba(34,197,94,0.35)" }}
                >
                  <MessageCircle size={14} />
                  Reserve Sua Zona — WhatsApp
                </motion.a>
              </div>
            </div>

            {/* Mapa SVG de zonas */}
            <div className="flex flex-col items-center">
              <div className="font-mono text-xs uppercase tracking-widest mb-5 text-center" style={{ color: "rgba(74,222,128,0.6)" }}>
                Divisão de Zonas por Cidade
              </div>
              <div className="relative" style={{ width: 320, height: 320 }}>
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl scale-75"
                  style={{ background: "radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 70%)" }}
                />
                <svg viewBox="0 0 320 320" width="320" height="320" className="relative z-10">
                  {/* Outer circle clip */}
                  <defs>
                    <clipPath id="circle-clip">
                      <circle cx="160" cy="160" r="150" />
                    </clipPath>
                  </defs>

                  {/* Zone NORTE */}
                  <path
                    d="M160,160 L10,160 A150,150 0 0,1 310,160 Z"
                    fill="rgba(74,222,128,0.22)"
                    stroke="rgba(74,222,128,0.5)"
                    strokeWidth="1.5"
                    clipPath="url(#circle-clip)"
                  />
                  {/* Zone SUL */}
                  <path
                    d="M160,160 L310,160 A150,150 0 0,1 10,160 Z"
                    fill="rgba(34,197,94,0.15)"
                    stroke="rgba(34,197,94,0.4)"
                    strokeWidth="1.5"
                    clipPath="url(#circle-clip)"
                  />
                  {/* Zone LESTE */}
                  <path
                    d="M160,160 L160,10 A150,150 0 0,1 160,310 Z"
                    fill="rgba(234,179,8,0.18)"
                    stroke="rgba(234,179,8,0.45)"
                    strokeWidth="1.5"
                    clipPath="url(#circle-clip)"
                  />
                  {/* Zone OESTE */}
                  <path
                    d="M160,160 L160,310 A150,150 0 0,1 160,10 Z"
                    fill="rgba(251,191,36,0.12)"
                    stroke="rgba(251,191,36,0.35)"
                    strokeWidth="1.5"
                    clipPath="url(#circle-clip)"
                  />

                  {/* Outer circle border */}
                  <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(74,222,128,0.35)" strokeWidth="2" />

                  {/* Cross lines */}
                  <line x1="160" y1="10" x2="160" y2="310" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="10" y1="160" x2="310" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Center dot */}
                  <circle cx="160" cy="160" r="8" fill="#22c55e" />
                  <circle cx="160" cy="160" r="4" fill="#ffffff" />

                  {/* Zone labels */}
                  <text x="160" y="95" textAnchor="middle" fill="#4ade80" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" letterSpacing="3">NORTE</text>
                  <text x="160" y="245" textAnchor="middle" fill="#4ade80" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" letterSpacing="3">SUL</text>
                  <text x="248" y="165" textAnchor="middle" fill="#fbbf24" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" letterSpacing="3">LESTE</text>
                  <text x="70" y="165" textAnchor="middle" fill="#fbbf24" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" letterSpacing="3">OESTE</text>

                  {/* Compass N */}
                  <text x="160" y="26" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontFamily="JetBrains Mono, monospace" fontSize="11">N</text>
                  <text x="160" y="314" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontFamily="JetBrains Mono, monospace" fontSize="11">S</text>
                  <text x="308" y="164" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontFamily="JetBrains Mono, monospace" fontSize="11">L</text>
                  <text x="14" y="164" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontFamily="JetBrains Mono, monospace" fontSize="11">O</text>
                </svg>
              </div>
              <p className="mt-5 text-xs font-light text-center max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Cidades maiores podem ter mais zonas. Cada embaixador é exclusivo em sua zona.
              </p>

              {/* Zone availability */}
              <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-xs">
                {["Norte", "Sul", "Leste", "Oeste"].map((zona, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg px-3 py-2"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(74,222,128,0.1)" }}
                  >
                    <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{zona}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(239,68,68,0.15)", color: "#fca5a5" }}>
                      Disponível
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            BLOCO 9 — FUNIL DE CRESCIMENTO
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <div className="h-px w-full mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.3), rgba(34,197,94,0.3), transparent)" }} />

          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: "#86efac" }}>09</span>
            <div className="h-px flex-1" style={{ background: "rgba(74,222,128,0.2)" }} />
            <h3 className="font-display text-lg md:text-xl" style={{ color: "#ffffff" }}>
              CRESCIMENTO DA COMUNIDADE
            </h3>
          </div>

          <p className="text-lg font-light mb-6 max-w-3xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Junte-se ao movimento. De usuário a embaixador, de embaixador a líder da regeneração na sua cidade.
          </p>

          {/* Funil visual */}
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{ background: "linear-gradient(to bottom, rgba(74,222,128,0.5), rgba(234,179,8,0.5))" }}
            />

            <div className="space-y-6">
              {[
                {
                  nivel: "01",
                  titulo: "Usuário Gratuito",
                  desc: "Baixa o app, realiza missões de plantio, sobe no leaderboard. Ponto de entrada para a comunidade EcoDrones.",
                  icon: Smartphone,
                  cor: "#4ade80",
                  width: "100%",
                  beneficios: ["Acesso ao app gratuito", "Missões de plantio", "Leaderboard global", "Chat da comunidade"],
                },
                {
                  nivel: "02",
                  titulo: "Apoiador — EcoTokens",
                  desc: "Faz uma contribuição financeira e recebe EcoTokens proporcionais. Acesso a recursos premium e participação no crescimento do projeto.",
                  icon: Coins,
                  cor: "#fbbf24",
                  width: "83%",
                  beneficios: ["EcoTokens proporcionais", "Missões premium", "Badge de apoiador", "Relatório de impacto"],
                },
                {
                  nivel: "03",
                  titulo: "Embaixador — Licença de Zona",
                  desc: "Compra a licença de uma zona na sua cidade. Representa a EcoDrones oficialmente e ganha comissão sobre toda atividade da sua região.",
                  icon: MapPin,
                  cor: "#22c55e",
                  width: "66%",
                  beneficios: ["Licença exclusiva de zona", "Comissão sobre doações", "Autoridade regional", "Acesso direto ao time"],
                },
                {
                  nivel: "04",
                  titulo: "Parceiro Corporativo",
                  desc: "Empresa ou investidor com presença de marca, ações de marketing, relatório ESG e naming de ações. O nível mais alto do ecossistema.",
                  icon: Building2,
                  cor: "#a78bfa",
                  width: "50%",
                  beneficios: ["Presença de marca completa", "Banners no app", "Relatório ESG", "Naming de ações"],
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={reduced ? {} : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col md:flex-row gap-0 items-stretch"
                    style={{ marginLeft: `calc(${100 - parseInt(item.width)} / 2 * 1%)`, marginRight: `calc(${100 - parseInt(item.width)} / 2 * 1%)` }}
                  >
                    <div
                      className="flex-1 rounded-2xl p-6 md:p-8"
                      style={{
                        background: `linear-gradient(135deg, ${item.cor}12 0%, rgba(255,255,255,0.03) 100%)`,
                        border: `1px solid ${item.cor}30`,
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                        {/* Icon + nivel */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-2">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ background: `${item.cor}20`, border: `1.5px solid ${item.cor}50` }}
                          >
                            <Icon size={24} style={{ color: item.cor }} />
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: item.cor }}>
                            Nível {item.nivel}
                          </span>
                        </div>
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="font-display text-2xl md:text-3xl mb-2" style={{ color: "#ffffff" }}>
                            {item.titulo}
                          </h4>
                          <p className="text-sm font-light leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                            {item.desc}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.beneficios.map((b, j) => (
                              <span
                                key={j}
                                className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
                                style={{ background: `${item.cor}15`, color: item.cor, border: `1px solid ${item.cor}25` }}
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Arrow */}
                        {i < 3 && (
                          <div className="hidden md:flex items-center">
                            <ChevronRight size={20} style={{ color: "rgba(255,255,255,0.2)" }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Final mega CTA */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-8 rounded-3xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(74,222,128,0.1) 0%, rgba(234,179,8,0.07) 100%)",
              border: "1px solid rgba(74,222,128,0.2)",
            }}
          >
            <Rocket size={32} className="mx-auto mb-4" style={{ color: "#4ade80" }} />
            <h4
              className="font-display mb-3"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#ffffff" }}
            >
              ENTRE NO MOVIMENTO
            </h4>
            <p className="text-base font-light mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Usuários, apoiadores, embaixadores e parceiros corporativos — cada um tem seu lugar na maior revolução verde do Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Quero+fazer+parte+da+comunidade+EcoDrones."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduced ? {} : { scale: 1.08, y: -4 }}
                whileTap={reduced ? {} : { scale: 0.96 }}
                animate={reduced ? {} : {
                  boxShadow: [
                    "0 0 20px rgba(34,197,94,0.5), 0 8px 32px rgba(34,197,94,0.3)",
                    "0 0 40px rgba(34,197,94,0.8), 0 12px 48px rgba(34,197,94,0.5)",
                    "0 0 20px rgba(34,197,94,0.5), 0 8px 32px rgba(34,197,94,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl px-10 py-5 font-mono text-base uppercase tracking-widest font-black"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)",
                  color: "#ffffff",
                  boxShadow: "0 0 24px rgba(34,197,94,0.6), 0 8px 32px rgba(34,197,94,0.4)",
                  letterSpacing: "0.2em",
                  textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                }}
              >
                <MessageCircle size={22} />
                Quero Participar
              </motion.a>
              <motion.a
                href="mailto:ceorafael@ecodronescommunity.com"
                whileHover={reduced ? {} : { scale: 1.05, y: -3 }}
                className="inline-flex items-center justify-center gap-3 rounded-xl px-4 sm:px-8 py-4 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold w-full sm:w-auto"
                style={{ background: "rgba(255,255,255,0.06)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <Mail size={18} />
                Enviar E-mail
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
