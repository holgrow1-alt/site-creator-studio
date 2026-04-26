import { motion, useReducedMotion } from "framer-motion";
import { Globe, Shield, DollarSign } from "lucide-react";
import { useCountUp } from "@/components/sections/Impacto";
import { useTranslation } from "@/i18n/LanguageContext";

export function EcossistemaImpacto() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const { count, ref: countRef } = useCountUp(100_000_000, 3000);

  const pillars = [
    {
      icon: Globe,
      title: t("ecossistemaImpacto.pillar1Title"),
      desc: t("ecossistemaImpacto.pillar1Desc"),
      color: "hsl(142 71% 45%)",
    },
    {
      icon: Shield,
      title: t("ecossistemaImpacto.pillar2Title"),
      desc: t("ecossistemaImpacto.pillar2Desc"),
      color: "hsl(200 100% 60%)",
    },
    {
      icon: DollarSign,
      title: t("ecossistemaImpacto.pillar3Title"),
      desc: t("ecossistemaImpacto.pillar3Desc"),
      color: "hsl(45 100% 60%)",
    },
  ];

  return (
    <section id="ecossistema-impacto" className="relative py-8 md:py-10 overflow-hidden section-mint">
      <div className="blob-green-tl opacity-50" />
      <div className="blob-sky-tr opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("ecossistemaImpacto.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("ecossistemaImpacto.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-5xl mb-6"
        >
          {t("ecossistemaImpacto.heading1")} Um <span className="text-primary text-glow">ecossistema</span> completo.
        </motion.h2>

        {/* Venn-like diagram */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-0 mb-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, x: i === 0 ? -40 : i === 2 ? 40 : 0, y: i === 1 ? -40 : 0 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative w-64 h-64 lg:w-72 lg:h-72 rounded-full flex flex-col items-center justify-center text-center p-8 border-2 ${
                  i === 1 ? "lg:-mx-16 z-10 bg-card/80 border-primary/60" : "bg-card/40 border-primary/20 backdrop-blur-sm"
                }`}
                style={{
                  background: `radial-gradient(circle at center, ${pillar.color}15, transparent 70%)`,
                  borderColor: `${pillar.color}40`,
                }}
              >
                <motion.div
                  className="mb-3"
                  animate={reduced ? {} : { scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
                >
                  <Icon className="w-8 h-8" style={{ color: pillar.color }} />
                </motion.div>
                <h3 className="font-display text-lg leading-tight mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-xs text-foreground/60 font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Central counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center glass rounded-lg p-10 max-w-xl mx-auto glow-border"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-primary/60 mb-2">{t("ecossistemaImpacto.counterLabel")}</div>
          <div className="font-display text-2xl md:text-3xl text-primary text-glow leading-none">
            <span ref={countRef}>{count.toLocaleString("pt-BR")}</span>
          </div>
          <div className="font-mono text-sm text-foreground/50 mt-2">{t("ecossistemaImpacto.counterSub")}</div>
          <div className="font-display text-2xl text-foreground mt-1">{t("ecossistemaImpacto.counterGoal")}</div>
        </motion.div>
      </div>
    </section>
  );
}
