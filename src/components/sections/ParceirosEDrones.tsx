import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Wrench,
  Factory,
  Cpu,
  Gift,
  Users,
  Ticket,
  Building2,
  Package,
  FileText,
  Video,
  ArrowRight,
  MessageCircle,
  Share2,
  ChevronRight,
  Star,
  CheckCircle2,
  Clock,
  TreePine,
  Zap,
  BarChart3,
  Award,
} from "lucide-react";

/* ─────────────────────────── Countdown hook ─────────────────────────── */
function useCountdown(targetDays: number) {
  const [timeLeft, setTimeLeft] = useState({ days: targetDays, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const now = new Date();
    const target = new Date(now);
    target.setDate(target.getDate() + targetDays);

    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDays]);

  return timeLeft;
}

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

/* ─────────────────────────── China Flag SVG ─────────────────────────── */
const ChinaFlag = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size * 0.667}
    viewBox="0 0 30 20"
    xmlns="http://www.w3.org/2000/svg"
    style={{ borderRadius: 2, display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
  >
    <rect width="30" height="20" fill="#DE2910" />
    <polygon points="5,2 6.18,5.09 9.51,5.09 6.88,7.03 7.94,10.18 5,8.45 2.06,10.18 3.12,7.03 0.49,5.09 3.82,5.09" fill="#FFDE00" transform="translate(0,0) scale(0.9)" />
    <polygon points="11,1 11.59,2.77 13.45,2.77 12,3.82 12.55,5.59 11,4.63 9.45,5.59 10,3.82 8.55,2.77 10.41,2.77" fill="#FFDE00" transform="translate(2,0) scale(0.45)" />
    <polygon points="13,3 13.59,4.77 15.45,4.77 14,5.82 14.55,7.59 13,6.63 11.45,7.59 12,5.82 10.55,4.77 12.41,4.77" fill="#FFDE00" transform="translate(2.5,-1) scale(0.45)" />
    <polygon points="13,7 13.59,8.77 15.45,8.77 14,9.82 14.55,11.59 13,10.63 11.45,11.59 12,9.82 10.55,8.77 12.41,8.77" fill="#FFDE00" transform="translate(2,0.5) scale(0.45)" />
    <polygon points="11,9 11.59,10.77 13.45,10.77 12,11.82 12.55,13.59 11,12.63 9.45,13.59 10,11.82 8.55,10.77 10.41,10.77" fill="#FFDE00" transform="translate(1.5,2) scale(0.45)" />
  </svg>
);

/* ─────────────────────────── Component ─────────────────────────── */
export function ParceirosEDrones() {
  const reduced = useReducedMotion();
  const countdown = useCountdown(12);
  const { count: countDrones, ref: refDrones } = useCountUp(247, 2000);
  const { count: countTickets, ref: refTickets } = useCountUp(1840, 2200);
  const { count: countEmpresas, ref: refEmpresas } = useCountUp(63, 1800);

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 48 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
        };

  /* ─── Flow steps ─── */
  const flowSteps = [
    { icon: Building2, label: "Empresa Apoia", sub: "Compra ou doa drones", color: "#4ade80" },
    { icon: Package, label: "Drone Personalizado", sub: "Adesivos da empresa", color: "#22c55e" },
    { icon: Gift, label: "Sorteio Mensal", sub: "Membros concorrem", color: "#eab308" },
    { icon: Package, label: "Via Correio", sub: "Drone na porta", color: "#f59e0b" },
    { icon: TreePine, label: "Plantio em Massa", sub: "Membro usa o drone", color: "#16a34a" },
    { icon: BarChart3, label: "ESG + Publicidade", sub: "Empresa lucra verde", color: "#4ade80" },
  ];

  /* ─── Company benefits ─── */
  const empresaBeneficios = [
    { icon: Package, title: "Adesivo no Drone", desc: "Sua marca voando por cidades e campos em cada operação de plantio." },
    { icon: FileText, title: "Incentivo Fiscal", desc: "Leis de incentivo ambiental permitem abatimento do apoio no imposto." },
    { icon: Award, title: "Logo no Site & App", desc: "Exposição permanente na plataforma EcoDrones para milhares de usuários." },
    { icon: BarChart3, title: "Relatório ESG Auditável", desc: "Documento completo de impacto socioambiental para seu balanço." },
    { icon: Video, title: "Conteúdo de Marketing", desc: "Fotos e vídeos profissionais do drone com sua marca plantando árvores." },
    { icon: Zap, title: "Publicidade Única", desc: "Nenhuma outra mídia oferece: logo voando pelos céus, plantando vida." },
  ];

  return (
    <section
      id="parceiros-e-drones"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(175deg, #f0fdf4 0%, #dcfce7 20%, #f0fdf4 45%, #ecfdf5 70%, #f0fdf4 100%)",
      }}
    >
      {/* Subtle leaf pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 Q55 25 55 40 Q55 55 40 70 Q25 55 25 40 Q25 25 40 10Z' fill='%2316a34a'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial glow accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 15% 30%, rgba(34,197,94,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 50% 35% at 85% 70%, rgba(234,179,8,0.06) 0%, transparent 60%)`,
        }}
      />

      {/* ── px-4 on mobile, container centers on desktop ── */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-8 md:py-10">

        {/* ── Section label — wraps gracefully on mobile ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-wrap items-center gap-2 mb-8 font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{ color: "#16a34a" }}
        >
          <Wrench size={12} className="flex-shrink-0" />
          <span>Parceiros Técnicos</span>
          <span style={{ color: "rgba(22,163,74,0.4)" }}>·</span>
          <span>Programa de Drones</span>
          <span style={{ color: "rgba(22,163,74,0.4)" }}>·</span>
          <span>Fabricação Global</span>
        </motion.div>

        {/* ── Main headline — clamp keeps it safe at 375px ── */}
        <motion.div {...fadeUp(0.05)} className="mb-4">
          <h2
            className="font-display leading-[0.95] tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 8vw, 7rem)",
              color: "#052e16",
              wordBreak: "break-word",
            }}
          >
            QUEM FAZ A
            <br />
            <span
              style={{
                color: "#16a34a",
                textShadow: "0 2px 24px rgba(22,163,74,0.18)",
              }}
            >
              MAGIA ACONTECER
            </span>
          </h2>
        </motion.div>
        <motion.p
          {...fadeUp(0.15)}
          className="text-base md:text-xl font-light leading-relaxed mb-6 max-w-3xl"
          style={{ color: "#166534" }}
        >
          Parceiros técnicos, fabricação industrial na China e um programa de
          sorteio de drones que transforma apoiadores em plantadores.
        </motion.p>

        {/* ══════════════════════════════════════════
            SEÇÃO 1 — PARCEIROS TÉCNICOS
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-14">
          {/* Section header — truncate long title on mobile */}
          <div className="flex items-center gap-3 mb-8 min-w-0">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em] flex-shrink-0"
              style={{ color: "#16a34a" }}
            >
              01
            </span>
            <div className="h-px flex-1 min-w-0" style={{ background: "rgba(22,163,74,0.2)" }} />
            <h3
              className="font-display text-xl md:text-2xl flex-shrink-0"
              style={{ color: "#052e16" }}
            >
              PARCEIROS TÉCNICOS
            </h3>
          </div>

          {/* 1 col mobile → 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* ── Card Vitão ── */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduced ? {} : { y: -4 }}
              className="group relative rounded-2xl p-5 sm:p-7 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)",
                border: "2px solid #bbf7d0",
                boxShadow: "0 4px 32px rgba(34,197,94,0.10), 0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: "linear-gradient(90deg, #22c55e, #4ade80)",
                  boxShadow: "0 2px 12px rgba(34,197,94,0.4)",
                }}
              />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#16a34a",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                <Star size={9} />
                Parceiro Técnico Oficial
              </div>

              {/* Logo Vitão FPV */}
              <div className="flex flex-col items-start mb-5">
                <div
                  className="rounded-xl overflow-hidden mb-3 w-full"
                  style={{
                    maxWidth: 300,
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(34,197,94,0.15)",
                    padding: "12px 16px",
                  }}
                >
                  <img
                    src="/vitao-fpv-logo.png"
                    alt="Vitão FPV - Design e Performance Drones"
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
                <div>
                  <div
                    className="font-display text-xl leading-tight"
                    style={{ color: "#052e16" }}
                  >
                    VITÃO FPV
                  </div>
                  <div
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: "#16a34a" }}
                  >
                    Design e Performance Drones
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#22c55e" }} />
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#166534" }}>
                    Responsável por <strong style={{ color: "#052e16" }}>toda a manutenção</strong> dos drones da comunidade EcoDrones
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#22c55e" }} />
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#166534" }}>
                    Contribui ativamente no <strong style={{ color: "#052e16" }}>desenvolvimento do drone EcoDrones</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#22c55e" }} />
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#166534" }}>
                    Oficina especializada com equipamentos de ponta para drones de plantio
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Card China ── */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduced ? {} : { y: -4 }}
              className="group relative rounded-2xl p-5 sm:p-7 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #fefce8 100%)",
                border: "2px solid #fef08a",
                boxShadow: "0 4px 32px rgba(234,179,8,0.10), 0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: "linear-gradient(90deg, #eab308, #fbbf24)",
                  boxShadow: "0 2px 12px rgba(234,179,8,0.4)",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(234,179,8,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{
                  background: "rgba(234,179,8,0.12)",
                  color: "#92400e",
                  border: "1px solid rgba(234,179,8,0.35)",
                }}
              >
                <ChinaFlag size={14} />
                <span>Fabricação em Massa</span>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative"
                  style={{
                    background: "linear-gradient(135deg, #fef08a, #eab308)",
                    boxShadow: "0 4px 16px rgba(234,179,8,0.3)",
                  }}
                >
                  <Factory size={24} style={{ color: "#78350f" }} />
                  <div
                    className="absolute -bottom-1 -right-1 rounded-sm overflow-hidden"
                    style={{ border: "1.5px solid #fff" }}
                  >
                    <ChinaFlag size={16} />
                  </div>
                </div>
                <div className="min-w-0">
                  <div
                    className="font-display text-xl leading-tight"
                    style={{ color: "#052e16" }}
                  >
                    Parceiro Industrial
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <ChinaFlag size={14} />
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "#92400e" }}
                    >
                      China
                    </span>
                  </div>
                </div>
              </div>

              <p
                className="text-sm font-light leading-relaxed mb-4"
                style={{ color: "#78350f" }}
              >
                Produção em massa garantida. Parceria industrial com fabricante
                chinês para{" "}
                <strong style={{ color: "#052e16" }}>
                  escalar a regeneração globalmente
                </strong>{" "}
                com todo o potencial que merece.
              </p>

              <div
                className="rounded-xl px-4 py-3 font-mono text-xs"
                style={{
                  background: "rgba(234,179,8,0.1)",
                  border: "1px solid rgba(234,179,8,0.25)",
                  color: "#92400e",
                }}
              >
                Escala mundial habilitada. De centenas a{" "}
                <strong>milhões de drones</strong> — a infraestrutura já existe.
              </div>
            </motion.div>

            {/* ── Card Time de Engenharia ── */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduced ? {} : { y: -4 }}
              className="group relative rounded-2xl p-5 sm:p-7 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #eff6ff 100%)",
                border: "2px solid #bfdbfe",
                boxShadow: "0 4px 32px rgba(59,130,246,0.08), 0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                  boxShadow: "0 2px 12px rgba(59,130,246,0.35)",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  color: "#1d4ed8",
                  border: "1px solid rgba(59,130,246,0.25)",
                }}
              >
                <Cpu size={9} />
                Engenharia Contínua
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #bfdbfe, #3b82f6)",
                    boxShadow: "0 4px 16px rgba(59,130,246,0.25)",
                  }}
                >
                  <Cpu size={24} style={{ color: "#1e3a8a" }} />
                </div>
                <div className="min-w-0">
                  <div
                    className="font-display text-xl leading-tight"
                    style={{ color: "#052e16" }}
                  >
                    Time de Engenharia
                  </div>
                  <div
                    className="font-mono text-xs uppercase tracking-widest mt-0.5"
                    style={{ color: "#1d4ed8" }}
                  >
                    Evolução Constante
                  </div>
                </div>
              </div>

              <p
                className="text-sm font-light leading-relaxed mb-4"
                style={{ color: "#1e3a8a" }}
              >
                <strong style={{ color: "#052e16" }}>Engenharia contínua.</strong>{" "}
                Nossa equipe técnica especializada evolui os drones
                constantemente para máxima eficiência de plantio.
              </p>

              <div className="space-y-2">
                {["Otimização de autonomia de voo", "Melhoria dos mecanismos de plantio", "Integração com IA de mapeamento", "Testes de campo em múltiplos biomas"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                    <span className="text-xs font-light" style={{ color: "#1d4ed8" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            SEÇÃO 2 — PROGRAMA DE SORTEIO
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <div
            className="h-px w-full mb-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(22,163,74,0.3), rgba(234,179,8,0.3), transparent)",
            }}
          />

          <div className="flex items-center gap-3 mb-4 min-w-0">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em] flex-shrink-0"
              style={{ color: "#16a34a" }}
            >
              02
            </span>
            <div className="h-px flex-1 min-w-0" style={{ background: "rgba(22,163,74,0.2)" }} />
            <h3
              className="font-display text-xl md:text-2xl flex-shrink-0"
              style={{ color: "#052e16" }}
            >
              PROGRAMA DE DRONES
            </h3>
          </div>

          {/* Headline */}
          <motion.div {...fadeUp(0.05)} className="mb-8">
            <h4
              className="font-display leading-tight mb-3"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)", color: "#052e16" }}
            >
              GANHE UM DRONE ECODRONES
              <br />
              <span style={{ color: "#16a34a", textShadow: "0 2px 20px rgba(22,163,74,0.2)" }}>
                DIRETO NA SUA PORTA
              </span>
            </h4>
            <p
              className="text-sm md:text-base font-light leading-relaxed max-w-2xl"
              style={{ color: "#166534" }}
            >
              Empresas apoiam, drones ganham adesivos personalizados, membros
              concorrem todo mês. Simples, justo e poderoso.
            </p>
          </motion.div>

          {/* Stats — 1 col on tiny screens, 3 col on sm+ */}
          <motion.div
            {...fadeUp(0.1)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
          >
            {[
              { ref: refDrones, count: countDrones, suffix: "+", label: "Drones Distribuídos", icon: "🚁" },
              { ref: refTickets, count: countTickets, suffix: "+", label: "Tickets Ativos", icon: "🎫" },
              { ref: refEmpresas, count: countEmpresas, suffix: "+", label: "Empresas Apoiadoras", icon: "🏢" },
            ].map((stat, i) => (
              <div
                key={i}
                ref={stat.ref}
                className="flex sm:flex-col items-center sm:items-center justify-between sm:justify-start rounded-2xl py-4 px-5 sm:py-6 sm:px-4 sm:text-center gap-4 sm:gap-0"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1.5px solid rgba(22,163,74,0.2)",
                  boxShadow: "0 2px 16px rgba(34,197,94,0.07)",
                }}
              >
                <div className="flex items-center gap-3 sm:block sm:mb-2">
                  <span className="text-lg md:text-xl">{stat.icon}</span>
                  <div
                    className="font-display text-lg md:text-xl md:text-2xl sm:mt-1"
                    style={{ color: "#16a34a" }}
                  >
                    {stat.count.toLocaleString("pt-BR")}{stat.suffix}
                  </div>
                </div>
                <div
                  className="font-mono text-[10px] uppercase tracking-widest text-right sm:text-center sm:mt-1"
                  style={{ color: "#166534" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Countdown + CTA urgency */}
          <motion.div
            {...fadeUp(0.15)}
            className="rounded-2xl p-5 sm:p-8 md:p-10 mb-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #052e16 0%, #064e3b 50%, #065f46 100%)",
              boxShadow: "0 12px 48px rgba(5,46,22,0.25)",
            }}
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={
                reduced
                  ? {}
                  : {
                      boxShadow: [
                        "inset 0 0 60px rgba(74,222,128,0.05)",
                        "inset 0 0 100px rgba(74,222,128,0.12)",
                        "inset 0 0 60px rgba(74,222,128,0.05)",
                      ],
                    }
              }
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              {/* Stack on mobile, row on lg */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                {/* Left: countdown */}
                <div className="flex-1 w-full text-center lg:text-left">
                  <div
                    className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                    style={{
                      background: "rgba(239,68,68,0.2)",
                      color: "#fca5a5",
                      border: "1px solid rgba(239,68,68,0.35)",
                    }}
                  >
                    <Clock size={11} />
                    Próximo Sorteio
                  </div>
                  <h5
                    className="font-display text-xl md:text-2xl mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    SORTEIO DO MÊS
                  </h5>
                  <p
                    className="text-sm font-light mb-5"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    Faltam para o próximo sorteio de drones:
                  </p>
                  {/* Countdown — flex-wrap so it never overflows */}
                  <div className="flex items-center gap-2 justify-center lg:justify-start flex-wrap">
                    {[
                      { value: countdown.days, label: "Dias" },
                      { value: countdown.hours, label: "Horas" },
                      { value: countdown.minutes, label: "Min" },
                      { value: countdown.seconds, label: "Seg" },
                    ].map((unit, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        {i > 0 && (
                          <span
                            className="font-display text-xl"
                            style={{ color: "rgba(74,222,128,0.5)" }}
                          >
                            :
                          </span>
                        )}
                        <div className="text-center">
                          <div
                            className="font-display text-lg md:text-xl md:text-2xl w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                            style={{
                              background: "rgba(255,255,255,0.07)",
                              border: "1px solid rgba(74,222,128,0.25)",
                              color: "#4ade80",
                              textShadow: "0 0 20px rgba(74,222,128,0.5)",
                            }}
                          >
                            {String(unit.value).padStart(2, "0")}
                          </div>
                          <div
                            className="font-mono text-[9px] uppercase tracking-widest mt-1"
                            style={{ color: "rgba(255,255,255,0.4)" }}
                          >
                            {unit.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right: drone visual — hidden on mobile to save space */}
                <div className="flex-shrink-0 hidden sm:block">
                  <motion.div
                    animate={reduced ? {} : { y: [0, -10, 0], rotate: [-1, 1, -1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div
                      className="absolute inset-0 blur-2xl scale-110 rounded-full"
                      style={{ background: "radial-gradient(circle, rgba(74,222,128,0.25) 0%, transparent 70%)" }}
                    />
                    <div
                      className="relative rounded-3xl w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "2px solid rgba(74,222,128,0.3)",
                      }}
                    >
                      <span style={{ fontSize: 56 }}>🚁</span>
                    </div>
                    <motion.div
                      animate={reduced ? {} : { scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute -top-3 -right-3 rounded-xl px-2 py-1.5"
                      style={{ background: "#eab308", boxShadow: "0 4px 16px rgba(234,179,8,0.5)" }}
                    >
                      <span className="font-mono text-[10px] font-bold text-black">SORTEIO!</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* CTA buttons — always stacked on mobile, row on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Quero+apoiar+com+drones+e+fazer+publicidade+pelo+programa+de+sorteio+EcoDrones."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduced ? {} : { scale: 1.03 }}
                  whileTap={reduced ? {} : { scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold w-full sm:w-auto"
                  style={{
                    background: "#22c55e",
                    color: "#ffffff",
                    boxShadow: "0 8px 28px rgba(34,197,94,0.4)",
                  }}
                >
                  <MessageCircle size={15} />
                  Quero Apoiar com Drones
                </motion.a>
                <motion.a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Quero+indicar+amigos+e+ganhar+tickets+para+o+sorteio+de+drones+EcoDrones!"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduced ? {} : { scale: 1.03 }}
                  whileTap={reduced ? {} : { scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold w-full sm:w-auto"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Share2 size={15} />
                  Indicar Amigo — +1 Ticket
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ── FLUXO INFOGRÁFICO ── */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <div
              className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6 text-center"
              style={{ color: "#16a34a" }}
            >
              Como funciona o programa
            </div>
            <div className="relative">
              {/* Connecting line — desktop only */}
              <div
                className="absolute top-9 left-0 right-0 h-px hidden md:block"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 4%, rgba(22,163,74,0.35) 10%, rgba(234,179,8,0.35) 50%, rgba(22,163,74,0.35) 90%, transparent 96%)",
                }}
              />
              {/* 2 col mobile → 3 col sm → 6 col md */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
                {flowSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={reduced ? {} : { opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.08 }}
                      className="relative flex flex-col items-center text-center pt-4"
                    >
                      {/* Step number */}
                      <div
                        className="absolute top-0 font-mono text-[9px] font-bold"
                        style={{ color: step.color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {/* Icon */}
                      <div
                        className="w-16 h-16 md:w-18 md:h-18 rounded-2xl flex items-center justify-center mb-2 z-10"
                        style={{
                          background: `${step.color}15`,
                          border: `2px solid ${step.color}40`,
                          boxShadow: `0 4px 16px ${step.color}15`,
                        }}
                      >
                        <Icon size={24} style={{ color: step.color }} />
                      </div>
                      {/* Arrow (desktop only) */}
                      {i < flowSteps.length - 1 && (
                        <ChevronRight
                          size={14}
                          className="absolute -right-1.5 top-[2.5rem] hidden md:block"
                          style={{ color: "rgba(22,163,74,0.4)" }}
                        />
                      )}
                      <div
                        className="font-semibold text-xs leading-tight mb-0.5"
                        style={{ color: "#052e16" }}
                      >
                        {step.label}
                      </div>
                      <div
                        className="font-mono text-[9px] uppercase tracking-wider"
                        style={{ color: "#16a34a" }}
                      >
                        {step.sub}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── PROGRAMA DE INDICAÇÃO ── */}
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-2xl p-5 sm:p-7 md:p-9"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
              border: "2px solid #bbf7d0",
              boxShadow: "0 4px 24px rgba(34,197,94,0.09)",
            }}
          >
            {/* Stack on mobile, 2-col on md */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    color: "#16a34a",
                    border: "1px solid rgba(34,197,94,0.3)",
                  }}
                >
                  <Users size={10} />
                  Programa de Indicação
                </div>
                <h4
                  className="font-display text-2xl md:text-3xl mb-3"
                  style={{ color: "#052e16" }}
                >
                  TRAGA AMIGOS,
                  <br />
                  <span style={{ color: "#16a34a" }}>GANHE TICKETS</span>
                </h4>
                <p
                  className="text-sm font-light leading-relaxed mb-4"
                  style={{ color: "#166534" }}
                >
                  Cada amigo que você trouxer para a comunidade EcoDrones te dá{" "}
                  <strong style={{ color: "#052e16" }}>+1 ticket</strong> para
                  concorrer ao drone do mês. Quanto mais amigos = mais chances
                  de ganhar!
                </p>
                <p
                  className="font-mono text-sm italic"
                  style={{ color: "#16a34a" }}
                >
                  "Traga amigos, ganhe tickets. Cada indicação é mais uma chance
                  de receber seu drone EcoDrones!"
                </p>
              </div>

              {/* Ticket counter visual */}
              <div className="flex flex-col items-center gap-4">
                <div
                  className="relative w-full rounded-2xl p-5 sm:p-6 text-center"
                  style={{
                    maxWidth: 320,
                    background: "linear-gradient(135deg, #052e16, #064e3b)",
                    border: "2px solid rgba(74,222,128,0.3)",
                    boxShadow: "0 8px 32px rgba(5,46,22,0.2)",
                    margin: "0 auto",
                  }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "rgba(74,222,128,0.6)" }}>
                    Seus Tickets
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Ticket size={22} style={{ color: "#eab308" }} />
                    <span
                      className="font-display text-2xl"
                      style={{
                        color: "#4ade80",
                        textShadow: "0 0 24px rgba(74,222,128,0.5)",
                      }}
                    >
                      0
                    </span>
                  </div>
                  <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Convide amigos para aumentar
                  </div>
                  <div
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5"
                    style={{ background: "#eab308" }}
                  >
                    <Users size={13} style={{ color: "#000" }} />
                    <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">
                      +1 Amigo = +1 Ticket
                    </span>
                  </div>
                </div>
                <motion.a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!+Quero+compartilhar+meu+link+de+indica%C3%A7%C3%A3o+EcoDrones+e+ganhar+tickets!"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduced ? {} : { scale: 1.04 }}
                  whileTap={reduced ? {} : { scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold w-full"
                  style={{
                    maxWidth: 320,
                    background: "#16a34a",
                    color: "#ffffff",
                    boxShadow: "0 4px 20px rgba(22,163,74,0.3)",
                  }}
                >
                  <Share2 size={14} />
                  Indicar Agora
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════
            SEÇÃO 3 — PARA EMPRESAS APOIADORAS
        ══════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <div
            className="h-px w-full mb-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(22,163,74,0.3), rgba(234,179,8,0.3), transparent)",
            }}
          />

          <div className="flex items-center gap-3 mb-4 min-w-0">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em] flex-shrink-0"
              style={{ color: "#16a34a" }}
            >
              03
            </span>
            <div className="h-px flex-1 min-w-0" style={{ background: "rgba(22,163,74,0.2)" }} />
            <h3
              className="font-display text-base md:text-xl flex-shrink-0"
              style={{ color: "#052e16" }}
            >
              EMPRESAS APOIADORAS
            </h3>
          </div>

          <motion.div {...fadeUp(0.05)} className="mb-8">
            <h4
              className="font-display leading-tight mb-3"
              style={{ fontSize: "clamp(1.4rem, 5vw, 3.2rem)", color: "#052e16" }}
            >
              SEU LOGO VOANDO PELOS CÉUS
              <br />
              <span style={{ color: "#16a34a" }}>PLANTANDO ESPERANÇA</span>
            </h4>
            <p
              className="text-sm md:text-base font-light leading-relaxed max-w-2xl"
              style={{ color: "#166534" }}
            >
              Em vez de imposto, apoie esta causa nobre. Qualquer empresa pode
              apoiar — não importa o tamanho.
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            {...fadeUp(0.05)}
            className="mb-8 rounded-2xl p-5 sm:p-6 text-center"
            style={{
              background: "linear-gradient(135deg, #052e16 0%, #064e3b 100%)",
              border: "1px solid rgba(74,222,128,0.2)",
            }}
          >
            <p
              className="font-display italic"
              style={{
                fontSize: "clamp(1rem, 4vw, 2rem)",
                color: "#4ade80",
                textShadow: "0 0 30px rgba(74,222,128,0.3)",
              }}
            >
              "Publicidade que transforma o mundo."
            </p>
          </motion.div>

          {/* Benefits grid — 1 col mobile, 2 col sm, 3 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {empresaBeneficios.map((ben, i) => {
              const Icon = ben.icon;
              return (
                <motion.div
                  key={i}
                  initial={reduced ? {} : { opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={reduced ? {} : { y: -3 }}
                  className="group rounded-xl p-4 sm:p-5 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #ffffff, #f0fdf4)",
                    border: "1.5px solid rgba(22,163,74,0.18)",
                    boxShadow: "0 2px 14px rgba(34,197,94,0.07)",
                  }}
                >
                  {/* hover line */}
                  <div
                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: "#16a34a", boxShadow: "0 0 8px rgba(22,163,74,0.5)" }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: "rgba(22,163,74,0.1)",
                      border: "1px solid rgba(22,163,74,0.25)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#16a34a" }} />
                  </div>
                  <h5
                    className="font-display text-base sm:text-lg mb-1.5"
                    style={{ color: "#052e16" }}
                  >
                    {ben.title}
                  </h5>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: "#166534" }}
                  >
                    {ben.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Final mega CTA */}
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #052e16 0%, #064e3b 50%, #065f46 100%)",
              boxShadow: "0 16px 64px rgba(5,46,22,0.22)",
            }}
          >
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
              animate={
                reduced
                  ? {}
                  : {
                      boxShadow: [
                        "inset 0 0 80px rgba(74,222,128,0.04)",
                        "inset 0 0 140px rgba(74,222,128,0.10)",
                        "inset 0 0 80px rgba(74,222,128,0.04)",
                      ],
                    }
              }
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            {/* Decorative drone emoji — hidden on mobile */}
            <div
              className="absolute top-6 right-6 text-3xl opacity-10 hidden md:block"
              style={{ transform: "rotate(-15deg)" }}
            >
              🚁
            </div>
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(234,179,8,0.2)",
                  color: "#fbbf24",
                  border: "1px solid rgba(234,179,8,0.35)",
                }}
              >
                <Building2 size={10} />
                Qualquer empresa pode apoiar
              </div>

              <h4
                className="font-display mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 4rem)",
                  color: "#ffffff",
                  lineHeight: 1.0,
                }}
              >
                EM VEZ DE IMPOSTO,
                <br />
                <span
                  style={{
                    color: "#4ade80",
                    textShadow: "0 0 30px rgba(74,222,128,0.5)",
                  }}
                >
                  APOIE ESTA CAUSA NOBRE
                </span>
              </h4>

              <p
                className="text-sm md:text-base font-light mb-6 max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Adesivo da sua marca no drone + desconto fiscal + logo no site +
                relatório ESG + conteúdo de marketing. O melhor custo-benefício
                em publicidade + impacto do mercado.
              </p>

              {/* Buttons — full-width on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Quero+que+minha+empresa+apoie+o+programa+de+drones+EcoDrones+e+fazer+publicidade+voando."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduced ? {} : { scale: 1.04 }}
                  whileTap={reduced ? {} : { scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold w-full sm:w-auto"
                  style={{
                    background: "#22c55e",
                    color: "#ffffff",
                    boxShadow: "0 8px 32px rgba(34,197,94,0.45)",
                  }}
                >
                  <MessageCircle size={16} />
                  Quero Apoiar com Drones
                </motion.a>
                <motion.a
                  href="mailto:ceorafael@ecodronescommunity.com?subject=Apoio%20Programa%20de%20Drones%20EcoDrones"
                  whileHover={reduced ? {} : { scale: 1.04 }}
                  whileTap={reduced ? {} : { scale: 0.97 }}
                  className="flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold w-full sm:w-auto"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <ArrowRight size={16} />
                  Saiba Mais por E-mail
                </motion.a>
              </div>

              <p
                className="mt-5 font-mono text-[10px]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                ceorafael@ecodronescommunity.com
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
