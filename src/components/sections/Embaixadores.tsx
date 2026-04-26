import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

export function Embaixadores() {
  const { t } = useTranslation();

  return (
    <section id="embaixadores" className="relative py-8 md:py-10 overflow-hidden section-cream">
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
          <span>{t("embaixadores.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("embaixadores.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-4xl mb-6"
        >
          {t("embaixadores.heading1")} <span className="text-primary text-glow">{t("embaixadores.heading2")}</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Richard Rasmussen */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group glass rounded-lg overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
              style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }} />

            <div className="relative overflow-hidden bg-background/40">
              <img
                src="/richard-rasmussen.png"
                alt="Richard Rasmussen — Biólogo e Naturalista, embaixador EcoDrones para regeneração planetária, retrato artístico com fauna brasileira"
                className="w-full h-80 object-contain object-center p-4"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <div className="font-display text-2xl text-foreground mb-1">{t("embaixadores.richard")}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                {t("embaixadores.richardRole")}
              </div>
              <p className="text-sm text-foreground/60 font-light leading-relaxed mb-4">
                {t("embaixadores.richardDesc")}
              </p>
              <div className="text-xs text-foreground/35 font-mono italic">
                {t("embaixadores.richardDisclaimer")}
              </div>
            </div>
          </motion.div>

          {/* Placeholder para próximos embaixadores */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="glass rounded-lg p-5 flex flex-col items-center justify-center text-center min-h-[400px] border border-dashed border-primary/20"
            >
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary/40">+</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-foreground/30">{t("embaixadores.comingSoon")}</div>
              <div className="text-sm text-foreground/20 mt-2">{t("embaixadores.nextAmbassador")}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
