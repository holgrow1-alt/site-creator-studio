import { motion, useReducedMotion } from "framer-motion";
import { Eye, Palette, Bug, Scissors, Brain } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function CerebroSistema() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const features = [
    { icon: Eye, title: t("cerebro.feature1Title"), desc: t("cerebro.feature1Desc") },
    { icon: Palette, title: t("cerebro.feature2Title"), desc: t("cerebro.feature2Desc") },
    { icon: Bug, title: t("cerebro.feature3Title"), desc: t("cerebro.feature3Desc") },
    { icon: Scissors, title: t("cerebro.feature4Title"), desc: t("cerebro.feature4Desc") },
  ];

  return (
    <section id="cerebro-ia" className="relative py-8 md:py-10 overflow-hidden section-sky">
      <div className="blob-sky-tr opacity-60" />
      <div className="blob-green-bl opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("cerebro.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("cerebro.sectionSub")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight mb-4"
            >
              {t("cerebro.heading1")} {t("cerebro.heading2")} <span className="text-primary text-glow">{t("cerebro.heading3")}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-foreground/60 font-light mb-6 leading-relaxed"
            >
              {t("cerebro.subhead")}
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-4 border-primary pl-6"
            >
              <p className="text-base text-foreground/70 italic font-light">
                "{t("cerebro.quote")}"
              </p>
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-xl overflow-hidden border border-primary/20 mt-6"
            >
              <img
                src="/pdf3-harvest-steps.png"
                alt="Etapas da colheita inteligente EcoDrones - processo de identificação visual, aproximação precisa, extração e armazenamento do fruto colhido por drone autônomo"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="glass rounded-lg p-6 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                      style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }} />
                    <motion.div
                      className="w-10 h-10 border border-primary/40 rounded flex items-center justify-center mb-4"
                      animate={reduced ? {} : {
                        boxShadow: ["0 0 0px hsl(142 71% 45% / 0)", "0 0 15px hsl(142 71% 45% / 0.35)", "0 0 0px hsl(142 71% 45% / 0)"]
                      }}
                      transition={{ repeat: Infinity, duration: 2 + i, ease: "easeInOut" }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-lg text-foreground mb-2 leading-tight">{feat.title}</h3>
                    <p className="text-xs text-foreground/50 font-light leading-relaxed">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-xl overflow-hidden border border-primary/20 mt-4"
            >
              <img
                src="/pdf2-cerebro-sistema.png"
                alt="Diagrama do cérebro do sistema EcoDrones - inteligência artificial para análise de maturação, espectro de cores, detecção de doenças e colheita seletiva precisa"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-widest text-primary/70 bg-background/70 px-2 py-1 rounded backdrop-blur-sm">
                {t("cerebro.imageBadge")}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Central Brain icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-8 flex items-center justify-center"
        >
          <div className="flex flex-wrap items-center gap-4 glass rounded-full px-4 sm:px-8 py-4 border border-primary/30">
            <motion.div
              animate={reduced ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <Brain className="w-6 h-6 text-primary" />
            </motion.div>
            <span className="font-mono text-sm text-foreground/70 uppercase tracking-widest">
              {t("cerebro.centerBadge")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
