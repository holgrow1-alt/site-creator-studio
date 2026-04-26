import { motion } from "framer-motion";
import { AlertTriangle, Plane, Leaf } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function CoracaoEcossistema() {
  const { t } = useTranslation();

  const columns = [
    {
      icon: AlertTriangle,
      label: t("coracao.col1Label"),
      color: "hsl(0 80% 60%)",
      title: t("coracao.col1Title"),
      items: [
        t("coracao.col1Item1"),
        t("coracao.col1Item2"),
        t("coracao.col1Item3"),
        t("coracao.col1Item4"),
      ],
    },
    {
      icon: Plane,
      label: t("coracao.col2Label"),
      color: "hsl(142 71% 45%)",
      title: t("coracao.col2Title"),
      items: [
        t("coracao.col2Item1"),
        t("coracao.col2Item2"),
        t("coracao.col2Item3"),
        t("coracao.col2Item4"),
      ],
      featured: true,
    },
    {
      icon: Leaf,
      label: t("coracao.col3Label"),
      color: "hsl(120 80% 50%)",
      title: t("coracao.col3Title"),
      items: [
        t("coracao.col3Item1"),
        t("coracao.col3Item2"),
        t("coracao.col3Item3"),
        t("coracao.col3Item4"),
      ],
    },
  ];

  return (
    <section id="coracao" className="relative py-8 md:py-10 overflow-hidden section-mint">
      <div className="blob-green-tl opacity-60" />
      <div className="blob-sky-tr opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("coracao.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("coracao.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-5xl mb-6"
        >
          {t("coracao.heading1")} <span className="text-primary text-glow">{t("coracao.heading2")}</span> {t("coracao.heading3")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-6 max-w-2xl"
        >
          {t("coracao.subhead")}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {columns.map((col, i) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`glass rounded-lg p-5 relative overflow-hidden group ${col.featured ? "border border-primary/50" : ""}`}
                style={{ borderColor: col.featured ? undefined : `${col.color}20` }}
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: col.color, boxShadow: `0 0 12px ${col.color}` }} />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${col.color}20`, border: `2px solid ${col.color}60` }}>
                    <Icon className="w-5 h-5" style={{ color: col.color }} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: col.color }}>{col.label}</span>
                </div>

                <h3 className="font-display text-2xl text-foreground mb-5">{col.title}</h3>

                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/60 font-light">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: col.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* PDF Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 mb-8"
        >
          <img
            src="/pdf3-impact-hexagons.png"
            alt="Hexágonos de impacto ambiental EcoDrones - restauração de polinizadores, suporte a populações de aves, redução de ilhas de calor, qualidade do ar e regeneração do solo"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-primary/80 bg-background/70 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
            {t("coracao.imageBadge")}
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-display text-lg md:text-xl text-foreground/80 leading-relaxed">
            "{t("coracao.quote")}"
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
