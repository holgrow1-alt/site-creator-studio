import { motion, useReducedMotion } from "framer-motion";
import { Bird, Plane, TreePine, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function InspiracaoNatural() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const features = [
    t("inspiracao.feature1"),
    t("inspiracao.feature2"),
    t("inspiracao.feature3"),
    t("inspiracao.feature4"),
  ];

  return (
    <section id="inspiracao" className="relative py-8 md:py-10 overflow-hidden section-mint">
      <div className="blob-green-tl opacity-60" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("inspiracao.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("inspiracao.sectionSub")}</span>
        </motion.div>

        {/* PDF Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 mb-6"
        >
          <img
            src="/pdf2-inspiracao-natural.png"
            alt={t("inspiracao.imageLabel")}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-primary/80 bg-background/70 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
            {t("inspiracao.imageLabel")}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              className="font-display text-2xl md:text-3xl leading-snug tracking-tight mb-6"
            >
              {t("inspiracao.heading1")} {t("inspiracao.heading2")}{" "}
              <span className="text-primary text-glow">{t("inspiracao.heading3")}</span>{" "}
              {t("inspiracao.heading4")}
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-4 border-primary pl-6 mb-8"
            >
              <p className="text-lg text-foreground/70 font-light italic leading-relaxed">
                "{t("inspiracao.quote")}"
              </p>
            </motion.blockquote>

            <div className="space-y-3">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" style={{ boxShadow: "0 0 6px hsl(142 71% 45%)" }} />
                  <span className="text-foreground/70 font-light">{feat}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual: bird → drone */}
          <div className="flex items-center justify-center gap-8">
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-24 h-24 rounded-full border-2 border-primary/30 flex items-center justify-center bg-primary/5"
                animate={reduced ? {} : { y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Bird className="w-12 h-12 text-primary/60" />
              </motion.div>
              <span className="font-mono text-xs text-foreground/40 uppercase tracking-wider">{t("inspiracao.labelNature")}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ArrowRight className="w-8 h-8 text-primary" />
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10"
                animate={reduced ? {} : { y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 20px hsl(142 71% 45% / 0.2)" }}
              >
                <Plane className="w-12 h-12 text-primary" />
              </motion.div>
              <span className="font-mono text-xs text-primary uppercase tracking-wider">{t("inspiracao.labelScale")}</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-lg px-4 sm:px-8 py-4 max-w-full">
            <TreePine className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-foreground/70">
              {t("inspiracao.bottom")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
