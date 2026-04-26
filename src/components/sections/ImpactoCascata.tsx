import { motion, useReducedMotion } from "framer-motion";
import { Flower2, Bird, Thermometer, Wind, TreePine } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function ImpactoCascata() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const hexagons = [
    {
      icon: Flower2,
      title: t("impactoCascata.hex1Title"),
      titlePt: t("impactoCascata.hex1TitlePt"),
      desc: t("impactoCascata.hex1Desc"),
      color: "#f59e0b",
      glow: "rgba(245,158,11,0.3)",
    },
    {
      icon: Bird,
      title: t("impactoCascata.hex2Title"),
      titlePt: t("impactoCascata.hex2TitlePt"),
      desc: t("impactoCascata.hex2Desc"),
      color: "#34d399",
      glow: "rgba(52,211,153,0.3)",
    },
    {
      icon: Thermometer,
      title: t("impactoCascata.hex3Title"),
      titlePt: t("impactoCascata.hex3TitlePt"),
      desc: t("impactoCascata.hex3Desc"),
      color: "#f87171",
      glow: "rgba(248,113,113,0.3)",
    },
    {
      icon: Wind,
      title: t("impactoCascata.hex4Title"),
      titlePt: t("impactoCascata.hex4TitlePt"),
      desc: t("impactoCascata.hex4Desc"),
      color: "#60a5fa",
      glow: "rgba(96,165,250,0.3)",
    },
    {
      icon: TreePine,
      title: t("impactoCascata.hex5Title"),
      titlePt: t("impactoCascata.hex5TitlePt"),
      desc: t("impactoCascata.hex5Desc"),
      color: "#a78bfa",
      glow: "rgba(167,139,250,0.3)",
    },
  ];

  return (
    <section id="impacto-cascata" className="relative py-8 md:py-10 overflow-hidden section-cream">
      {/* Nature-inspired background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-emerald-950/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full" />
      </div>
      <div className="blob-gold-br opacity-50" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("impactoCascata.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("impactoCascata.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.95] tracking-tight max-w-4xl mb-6"
        >
          {t("impactoCascata.heading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-6 max-w-2xl"
        >
          {t("impactoCascata.subhead")}
        </motion.p>

        {/* Hexagonal grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {hexagons.map((hex, i) => {
            const Icon = hex.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-7 group relative overflow-hidden cursor-default"
                style={{ border: `1px solid ${hex.color}25` }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${hex.color}08, transparent 60%)` }}
                />
                <div className="relative">
                  {/* Hex number badge */}
                  <div className="flex items-start justify-between mb-5">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${hex.color}15`, border: `2px solid ${hex.color}40` }}
                      animate={reduced ? {} : { boxShadow: [`0 0 0px ${hex.glow}`, `0 0 20px ${hex.glow}`, `0 0 0px ${hex.glow}`] }}
                      transition={{ repeat: Infinity, duration: 3 + i * 0.4, ease: "easeInOut" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: hex.color }} />
                    </motion.div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/20">0{i + 1}</span>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: hex.color }}>
                    {hex.title}
                  </div>
                  <h3 className="font-display text-2xl mb-3 text-foreground leading-tight">{hex.titlePt}</h3>
                  <p className="text-sm text-foreground/60 font-light leading-relaxed">{hex.desc}</p>
                </div>
              </motion.div>
            );
          })}
          {/* CTA card — 6th slot */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass rounded-2xl p-7 flex flex-col items-center justify-center text-center border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
            <div className="relative">
              <p className="font-display text-xl text-primary mb-4" style={{ textShadow: "0 0 20px hsl(142 71% 45% / 0.3)" }}>
                {t("impactoCascata.ctaCard")}
              </p>
              <p className="text-sm text-foreground/60 font-light mb-6">
                {t("impactoCascata.ctaCardDesc")}
              </p>
              <a href="#apoie" className="btn-neon text-xs">
                {t("impactoCascata.ctaButton")}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-xl p-5 border-l-4 border-primary text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-display text-foreground/90 italic leading-relaxed">
            "{t("impactoCascata.quoteEn")}"
          </p>
          <p className="mt-3 text-sm text-foreground/40 font-light">
            {t("impactoCascata.quotePt")}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
