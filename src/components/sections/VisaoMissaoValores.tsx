import { motion, useReducedMotion } from "framer-motion";
import {
  Eye,
  Target,
  Leaf,
  Users,
  Microscope,
  BarChart3,
  Globe,
  RefreshCw,
  Sprout,
  Rocket,
} from "lucide-react";

const valores = [
  {
    icon: Leaf,
    title: "Regeneração Acima de Tudo",
    desc: "Cada decisão, cada árvore plantada, cada voo de drone serve à regeneração do planeta.",
    gradient: "from-emerald-100 to-green-50",
    accent: "bg-emerald-500",
    iconColor: "text-emerald-600",
    border: "border-emerald-200/60",
  },
  {
    icon: Users,
    title: "Comunidade é a Base",
    desc: "Nada funciona sem pessoas engajadas. O poder está na comunidade, não na tecnologia.",
    gradient: "from-teal-100 to-cyan-50",
    accent: "bg-teal-500",
    iconColor: "text-teal-600",
    border: "border-teal-200/60",
  },
  {
    icon: Microscope,
    title: "Tecnologia a Serviço da Vida",
    quote: "Tecnologia não substitui a natureza. Ela aprende com ela.",
    desc: "Cada inovação é orientada pelos princípios da natureza.",
    gradient: "from-sky-100 to-blue-50",
    accent: "bg-sky-500",
    iconColor: "text-sky-600",
    border: "border-sky-200/60",
  },
  {
    icon: BarChart3,
    title: "Transparência Total",
    desc: "Cada árvore plantada é rastreável, cada doação é auditável, cada impacto é mensurável.",
    gradient: "from-indigo-100 to-violet-50",
    accent: "bg-indigo-500",
    iconColor: "text-indigo-600",
    border: "border-indigo-200/60",
  },
  {
    icon: Globe,
    title: "Escala Global, Impacto Local",
    desc: "Pensamos global mas agimos na comunidade local, na praça, no bairro, na cidade.",
    gradient: "from-lime-100 to-green-50",
    accent: "bg-lime-500",
    iconColor: "text-lime-700",
    border: "border-lime-200/60",
  },
  {
    icon: RefreshCw,
    title: "Economia Circular",
    desc: "Cada fruta consumida deve voltar ao solo. Cada investimento gera retorno regenerativo.",
    gradient: "from-amber-100 to-yellow-50",
    accent: "bg-amber-500",
    iconColor: "text-amber-600",
    border: "border-amber-200/60",
  },
  {
    icon: Sprout,
    title: "Abundância, Não Escassez",
    desc: "Acreditamos que a natureza é abundante. Nosso papel é acelerar essa abundância.",
    gradient: "from-green-100 to-emerald-50",
    accent: "bg-green-500",
    iconColor: "text-green-600",
    border: "border-green-200/60",
  },
  {
    icon: Rocket,
    title: "Ação, Não Promessas",
    quote: "O planeta não precisa de mais promessas; ele precisa de algoritmos que plantam e drones que protegem.",
    desc: "Execução imediata, impacto real, resultados mensuráveis.",
    gradient: "from-orange-100 to-red-50",
    accent: "bg-orange-500",
    iconColor: "text-orange-600",
    border: "border-orange-200/60",
  },
];

function ValorCard({ valor, index }: { valor: typeof valores[0]; index: number }) {
  const reduced = useReducedMotion();
  const Icon = valor.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: reduced ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={reduced ? {} : { y: -4, transition: { duration: 0.25 } }}
      className={`relative rounded-2xl p-5 border ${valor.border} bg-gradient-to-br ${valor.gradient} group overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between`}
    >
      {/* Accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${valor.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="flex items-start gap-3 mb-2">
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm border ${valor.border} flex items-center justify-center shadow-sm`}>
          <Icon className={`w-5 h-5 ${valor.iconColor}`} />
        </div>
        <h4 className="font-display text-base leading-snug text-stone-800 font-semibold pt-1">{valor.title}</h4>
      </div>

      {valor.quote ? (
        <blockquote className={`text-sm italic ${valor.iconColor} bg-white/50 rounded-lg px-3 py-2 mb-2 border-l-2 border-current leading-relaxed`}>
          "{valor.quote}"
        </blockquote>
      ) : null}

      <p className="text-sm text-stone-600/80 leading-relaxed">{valor.desc}</p>
    </motion.div>
  );
}

export function VisaoMissaoValores() {
  const reduced = useReducedMotion();

  return (
    <section
      id="visao-missao-valores"
      className="relative py-8 md:py-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(80 60% 97%) 0%, hsl(140 55% 96%) 35%, hsl(100 50% 97%) 65%, hsl(55 70% 96%) 100%)",
      }}
    >
      {/* Decorative organic blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(142 71% 55% / 0.4) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(45 90% 60% / 0.45) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(200 80% 60% / 0.4) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      {/* Floating seed dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + (i % 4) * 2,
            height: 3 + (i % 4) * 2,
            left: `${8 + i * 11}%`,
            top: `${15 + (i % 4) * 20}%`,
            background:
              i % 3 === 0
                ? "hsl(142 71% 45% / 0.3)"
                : i % 3 === 1
                ? "hsl(45 93% 47% / 0.3)"
                : "hsl(200 80% 50% / 0.25)",
          }}
          animate={
            reduced
              ? {}
              : {
                  y: [-10, 10, -10],
                  opacity: [0.25, 0.6, 0.25],
                }
          }
          transition={{
            repeat: Infinity,
            duration: 3.5 + i * 0.6,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary justify-center"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>/Propósito</span>
          <Sprout className="w-3.5 h-3.5 text-primary" />
          <span>Visão · Missão · Valores</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px bg-primary block"
          />
        </motion.div>

        {/* Section headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight text-center text-stone-800 mb-4"
        >
          O que nos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500">
            move
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-stone-500 font-light text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          A razão de cada voo, cada semente, cada árvore plantada. O propósito que une tecnologia e natureza.
        </motion.p>

        {/* ── VISÃO + MISSÃO cards ─────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* VISÃO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl p-5 md:p-7 overflow-hidden border border-emerald-200/50 shadow-xl shadow-emerald-100/40"
            style={{
              background:
                "linear-gradient(135deg, hsl(140 80% 97%) 0%, hsl(160 70% 96%) 50%, hsl(100 60% 96%) 100%)",
            }}
          >
            {/* Glow orb */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(142 71% 55%) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-600/70">01</p>
                  <h3 className="font-display text-2xl md:text-xl text-stone-800 leading-none">Visão</h3>
                </div>
              </div>

              <blockquote className="text-stone-700 text-base md:text-lg leading-relaxed font-light border-l-4 border-emerald-400 pl-5">
                "Ser a maior plataforma global de regeneração ambiental, conectando tecnologia autônoma, comunidades engajadas e economia circular para transformar{" "}
                <strong className="text-emerald-700 font-semibold">100 milhões de árvores</strong>{" "}
                em realidade — provando que a tecnologia pode servir à vida."
              </blockquote>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex gap-1.5">
                  {["bg-emerald-400", "bg-green-400", "bg-teal-400"].map((c, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${c}`}
                      animate={reduced ? {} : { scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-600/60">100M Árvores · Tecnologia a Serviço da Vida</span>
              </div>
            </div>
          </motion.div>

          {/* MISSÃO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl p-5 md:p-7 overflow-hidden border border-sky-200/50 shadow-xl shadow-sky-100/40"
            style={{
              background:
                "linear-gradient(135deg, hsl(200 80% 97%) 0%, hsl(220 70% 97%) 50%, hsl(180 60% 96%) 100%)",
            }}
          >
            {/* Glow orb */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(200 80% 60%) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center shadow-lg shadow-sky-200">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky-600/70">02</p>
                  <h3 className="font-display text-2xl md:text-xl text-stone-800 leading-none">Missão</h3>
                </div>
              </div>

              <blockquote className="text-stone-700 text-base md:text-lg leading-relaxed font-light border-l-4 border-sky-400 pl-5">
                "Unir{" "}
                <strong className="text-sky-700 font-semibold">drones autônomos, inteligência artificial</strong>{" "}
                e ciência regenerativa para plantar esperança em escala. Cada voo mapeia, semeia e monitora a vida que volta a pulsar no solo — com precisão, transparência e propósito. Reconstruir ecossistemas degradados, gerar renda para comunidades e criar um novo modelo de{" "}
                <strong className="text-sky-700 font-semibold">economia regenerativa</strong>{" "}
                acessível a governos, corporações e cidadãos."
              </blockquote>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex gap-1.5">
                  {["bg-sky-400", "bg-cyan-400", "bg-teal-400"].map((c, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${c}`}
                      animate={reduced ? {} : { scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.6 + i * 0.3 }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-600/60">Precisão · Transparência · Propósito</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── VALORES section header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden mb-8 px-4 sm:px-8 md:px-12 py-8"
          style={{
            background:
              "linear-gradient(135deg, hsl(45 80% 96%) 0%, hsl(70 70% 96%) 50%, hsl(100 60% 96%) 100%)",
            border: "1px solid hsl(45 80% 88% / 0.6)",
          }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(45 93% 55%) 0%, transparent 70%)" }} />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-600/70">03</span>
                <div className="w-8 h-px bg-amber-400/60" />
              </div>
              <h3 className="font-display text-lg md:text-xl text-stone-800">
                Nossos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  Valores
                </span>
              </h3>
            </div>
            <p className="text-stone-600 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              8 princípios fundamentais que guiam cada decisão da EcoDrones Community — do plantio da primeira semente até a formação de florestas inteiras, unindo tecnologia, propósito e regeneração.
            </p>
          </div>
        </motion.div>

        {/* ── 8 VALORES grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {valores.map((valor, i) => (
            <ValorCard key={i} valor={valor} index={i} />
          ))}
        </div>

        {/* ── Iconic quotes banner ─────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              quote: "Tecnologia não substitui a natureza. Ela aprende com ela.",
              gradient: "from-emerald-600 to-teal-600",
              bg: "from-emerald-50 to-teal-50",
              border: "border-emerald-200/40",
            },
            {
              quote: "O planeta não precisa de mais promessas; ele precisa de algoritmos que plantam e drones que protegem.",
              gradient: "from-sky-600 to-indigo-600",
              bg: "from-sky-50 to-indigo-50",
              border: "border-sky-200/40",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.75, delay: reduced ? 0 : i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl p-7 bg-gradient-to-br ${item.bg} border ${item.border} overflow-hidden`}
            >
              <div className="absolute top-4 left-5 font-serif text-3xl leading-none opacity-10 text-stone-800 pointer-events-none select-none">"</div>
              <blockquote className={`relative z-10 text-base md:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} leading-relaxed`}>
                "{item.quote}"
              </blockquote>
              <div className={`mt-4 h-px bg-gradient-to-r ${item.gradient} opacity-30`} />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-stone-400">EcoDrones Community</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
