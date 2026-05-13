import { motion, useReducedMotion } from "framer-motion";
import { Plane, Scissors, MapPin, Shield, Award, Users } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function InfraestruturaRegenerativa() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const pillars = [
    { icon: Plane, label: t("infraestrutura.pillar1") },
    { icon: Scissors, label: t("infraestrutura.pillar2") },
    { icon: MapPin, label: t("infraestrutura.pillar3") },
    { icon: Award, label: t("infraestrutura.pillar4") },
    { icon: Users, label: t("infraestrutura.pillar5") },
    { icon: Shield, label: t("infraestrutura.pillar6") },
  ];

  return (
    <section id="infraestrutura" className="relative py-8 md:py-10 overflow-hidden section-sage">
      <div className="blob-green-tl opacity-50" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("infraestrutura.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("infraestrutura.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-5xl mb-6"
        >
          {t("infraestrutura.heading1")} <span className="text-primary text-glow">{t("infraestrutura.heading2")}</span> {t("infraestrutura.heading3")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-6 max-w-2xl"
        >
          {t("infraestrutura.subhead")}
        </motion.p>

        {/* PDF Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 mb-8"
        >
          <img
            src="/pdf2-infraestrutura.png"
            alt="Infraestrutura regenerativa EcoDrones - 6 pilares: plantio automatizado, colheita inteligente, monitoramento georreferenciado, recompensas, educação ecológica e parcerias"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-primary/80 bg-background/70 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
            {t("infraestrutura.imageBadge")}
          </div>
        </motion.div>

        {/* Hexagon-like grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-lg p-6 flex items-center gap-4 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }} />
                <motion.div
                  className="w-12 h-12 border border-primary/40 rounded-lg flex items-center justify-center bg-primary/5 flex-shrink-0 group-hover:bg-primary/15 transition-colors"
                  animate={reduced ? {} : { rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="font-medium text-foreground leading-tight">{pillar.label}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center glass rounded-lg p-5 border border-primary/30 max-w-3xl mx-auto glow-border"
        >
          <p className="font-display text-lg md:text-xl text-foreground">
            {t("infraestrutura.quoteBlock")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
