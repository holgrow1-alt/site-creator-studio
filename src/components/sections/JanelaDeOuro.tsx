import { motion, useReducedMotion } from "framer-motion";
import { Moon, CloudRain, Plane } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function JanelaDeOuro() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  return (
    <section id="janela-ouro" className="relative py-8 md:py-10 overflow-hidden section-cream">
      <div className="blob-green-tl opacity-50" />
      <div className="blob-gold-br opacity-50" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("janelaOuro.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("janelaOuro.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-5xl mb-6"
        >
          A <span className="text-primary text-glow">{t("janelaOuro.heading1")}</span> {t("janelaOuro.heading2")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-6 max-w-2xl"
        >
          {t("janelaOuro.subhead")}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Condição Lunar */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-lg p-5 text-center"
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-6 border border-primary/40 rounded-full flex items-center justify-center"
              animate={reduced ? {} : { rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Moon className="w-8 h-8 text-primary" />
            </motion.div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">{t("janelaOuro.leftLabel")}</div>
            <h3 className="font-display text-2xl text-foreground mb-4">{t("janelaOuro.leftTitle")}</h3>
            <p className="text-sm text-foreground/60 font-light leading-relaxed">
              {t("janelaOuro.leftDesc")}
            </p>
          </motion.div>

          {/* Centro — cruzamento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center py-8"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">{t("janelaOuro.centerCross")}</div>
            <motion.div
              className="w-20 h-20 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center mb-4"
              animate={reduced ? {} : {
                boxShadow: ["0 0 20px hsl(142 71% 45% / 0.2)", "0 0 60px hsl(142 71% 45% / 0.45)", "0 0 20px hsl(142 71% 45% / 0.2)"]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Plane className="w-8 h-8 text-primary" />
            </motion.div>
            <div className="font-display text-xl text-primary mb-2">{t("janelaOuro.centerActivation")}</div>
            <p className="text-sm text-foreground/50 font-light">
              {t("janelaOuro.centerDesc")}
            </p>
          </motion.div>

          {/* Condição Pluviométrica */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-lg p-5 text-center"
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-6 border border-primary/40 rounded-full flex items-center justify-center"
              animate={reduced ? {} : { y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <CloudRain className="w-8 h-8 text-primary" />
            </motion.div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">{t("janelaOuro.rightLabel")}</div>
            <h3 className="font-display text-2xl text-foreground mb-4">{t("janelaOuro.rightTitle")}</h3>
            <p className="text-sm text-foreground/60 font-light leading-relaxed">
              {t("janelaOuro.rightDesc")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-center glass rounded-lg p-6 max-w-2xl mx-auto border border-primary/20"
        >
          <p className="text-sm text-foreground/70 font-light">
            {t("janelaOuro.result")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
