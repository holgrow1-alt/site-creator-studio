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
import { useTranslation } from "@/i18n/LanguageContext";

const valores = [
  {
    icon: Leaf,
    title: "Regeneração Acima de Tudo",
    desc: "Cada decisão, cada árvore plantada, cada voo de drone serve à regeneração do planeta.",
  },
  {
    icon: Users,
    title: "Comunidade é a Base",
    desc: "Nada funciona sem pessoas engajadas. O poder está na comunidade, não na tecnologia.",
  },
  {
    icon: Microscope,
    title: "Tecnologia a Serviço da Vida",
    quote: "Tecnologia não substitui a natureza. Ela aprende com ela.",
    desc: "Cada inovação é orientada pelos princípios da natureza.",
  },
  {
    icon: BarChart3,
    title: "Transparência Total",
    desc: "Cada árvore plantada é rastreável, cada doação é auditável, cada impacto é mensurável.",
  },
  {
    icon: Globe,
    title: "Escala Global, Impacto Local",
    desc: "Pensamos global mas agimos na comunidade local, na praça, no bairro, na cidade.",
  },
  {
    icon: RefreshCw,
    title: "Economia Circular",
    desc: "Cada fruta consumida deve voltar ao solo. Cada investimento gera retorno regenerativo.",
  },
  {
    icon: Sprout,
    title: "Abundância, Não Escassez",
    desc: "Acreditamos que a natureza é abundante. Nosso papel é acelerar essa abundância.",
  },
  {
    icon: Rocket,
    title: "Ação, Não Promessas",
    quote: "O planeta não precisa de mais promessas; ele precisa de algoritmos que plantam e drones que protegem.",
    desc: "Execução imediata, impacto real, resultados mensuráveis.",
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
      className="group glass rounded-2xl p-5 border border-primary/15 hover:border-primary/35 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary opacity-40 group-hover:opacity-100 transition-opacity duration-300 shadow-neon" />
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h4 className="font-display text-lg leading-snug text-foreground pt-1">{valor.title}</h4>
      </div>
      {valor.quote ? (
        <blockquote className="text-sm italic text-primary/80 bg-primary/5 rounded-lg px-3 py-2 mb-2 border-l-2 border-primary/40 leading-relaxed">
          "{valor.quote}"
        </blockquote>
      ) : null}
      <p className="text-sm text-foreground/60 leading-relaxed">{valor.desc}</p>
    </motion.div>
  );
}

export function VisaoMissaoValores() {
  const reduced = useReducedMotion();

  return (
    <section id="visao-missao-valores" className="relative py-8 md:py-10 overflow-hidden">
      <div className="blob-green-tl opacity-30" />
      <div className="blob-sky-tr opacity-20" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary justify-center"
        >
          <motion.span initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="h-px bg-primary block" />
          <span>/Propósito</span>
          <Sprout className="w-3.5 h-3.5 text-primary" />
          <span>Visão · Missão · Valores</span>
          <motion.span initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="h-px bg-primary block" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight text-center text-foreground mb-4"
        >
          O que nos <span className="text-primary text-glow">move</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-foreground/60 font-light text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          A razão de cada voo, cada semente, cada árvore plantada. O propósito que une tecnologia e natureza.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-5 md:p-7 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-neon">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60">01</p>
                  <h3 className="font-display text-2xl text-foreground leading-none">Visão</h3>
                </div>
              </div>
              <blockquote className="text-foreground/80 text-base md:text-lg leading-relaxed font-light border-l-4 border-primary/50 pl-5">
                "Ser a maior plataforma global de regeneração ambiental, conectando tecnologia autônoma, comunidades engajadas e economia circular para transformar{" "}
                <strong className="text-primary font-semibold">100 milhões de árvores</strong>{" "}
                em realidade — provando que a tecnologia pode servir à vida."
              </blockquote>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div key={i} className="w-2 h-2 rounded-full bg-primary" animate={reduced ? {} : { scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }} />
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/50">100M Árvores · Tecnologia a Serviço da Vida</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-5 md:p-7 border border-primary/15 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60">02</p>
                  <h3 className="font-display text-2xl text-foreground leading-none">Missão</h3>
                </div>
              </div>
              <blockquote className="text-foreground/80 text-base md:text-lg leading-relaxed font-light border-l-4 border-primary/30 pl-5">
                "Unir{" "}
                <strong className="text-primary font-semibold">drones autônomos, inteligência artificial</strong>{" "}
                e ciência regenerativa para plantar esperança em escala. Cada voo mapeia, semeia e monitora a vida que volta a pulsar no solo — com precisão, transparência e propósito. Reconstruir ecossistemas degradados, gerar renda para comunidades e criar um novo modelo de{" "}
                <strong className="text-primary font-semibold">economia regenerativa</strong>{" "}
                acessível a governos, corporações e cidadãos."
              </blockquote>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div key={i} className="w-2 h-2 rounded-full bg-primary/70" animate={reduced ? {} : { scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 + i * 0.3 }} />
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/50">Precisão · Transparência · Propósito</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl border border-primary/20 mb-6 px-4 sm:px-8 md:px-12 py-6 relative overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60">03</span>
                <div className="w-8 h-px bg-primary/40" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                Nossos <span className="text-primary text-glow">Valores</span>
              </h3>
            </div>
            <p className="text-foreground/60 font-light text-base max-w-2xl leading-relaxed">
              8 princípios fundamentais que guiam cada decisão da EcoDrones Community — do plantio da primeira semente até a formação de florestas inteiras.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {valores.map((valor, i) => (
            <ValorCard key={i} valor={valor} index={i} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Tecnologia não substitui a natureza. Ela aprende com ela.",
            "O planeta não precisa de mais promessas; ele precisa de algoritmos que plantam e drones que protegem.",
          ].map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.75, delay: reduced ? 0 : i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-4 left-5 font-serif text-4xl leading-none opacity-10 text-primary pointer-events-none select-none">"</div>
              <blockquote className="relative z-10 text-base md:text-lg font-medium text-primary text-glow leading-relaxed">
                "{quote}"
              </blockquote>
              <div className="mt-4 h-px bg-primary/20" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/30">EcoDrones Community</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
