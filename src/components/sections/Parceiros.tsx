import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

export function Parceiros() {
  const { t } = useTranslation();

  return (
    <section id="parceiros" className="relative py-8 md:py-10 overflow-hidden section-cream">
      <div className="blob-green-tl opacity-40" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("parceiros.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("parceiros.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-4xl mb-6"
        >
          {t("parceiros.heading1")} <span className="text-primary text-glow">{t("parceiros.heading2")}</span>
        </motion.h2>

        {/* Bankei */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass rounded-lg p-6 md:p-8 mb-8 group relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
            style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }} />

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-6 flex-shrink-0">
              <img
                src="/bankei-logo.png"
                alt="Bankei — plataforma financeira parceira EcoDrones para processamento de pagamentos"
                className="h-14 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-1">{t("parceiros.bankeiLabel")}</div>
              <h3 className="font-display text-2xl text-foreground mb-2">{t("parceiros.bankeiName")}</h3>
              <p className="text-foreground/60 font-light leading-relaxed mb-4 text-sm">
                {t("parceiros.bankeiDesc")}
              </p>
              <motion.a
                href="https://bankei.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon inline-flex"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("parceiros.bankeiCta")}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Placeholder para mais parceiros */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-lg p-5 flex flex-col items-center justify-center text-center min-h-[160px] border border-dashed border-primary/15"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-foreground/20">{t("parceiros.comingSoon")}</div>
              <div className="text-xs text-foreground/15 mt-1">{t("parceiros.nextPartner")}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
