import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function RecebaPageamentos() {
  const { t } = useTranslation();

  const steps = [
    { num: t("receba.step1Number"), label: t("receba.step1Title"), desc: t("receba.step1Desc") },
    { num: t("receba.step2Number"), label: t("receba.step2Title"), desc: t("receba.step2Desc") },
    { num: t("receba.step3Number"), label: t("receba.step3Title"), desc: t("receba.step3Desc") },
  ];

  return (
    <section id="receba" className="relative py-8 md:py-10 overflow-hidden section-sky">
      <div className="blob-sky-tr opacity-60" />
      <div className="blob-green-bl opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("receba.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("receba.sectionSub")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1 }}
              className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight mb-4"
            >
              {t("receba.heading1")}<br />
              <span className="text-primary text-glow">{t("receba.heading2")}</span><br />
              {t("receba.heading3")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-foreground/60 font-light mb-6 leading-relaxed"
            >
              {t("receba.body")}
            </motion.p>

            <div className="relative space-y-3 mb-6">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-primary/20" />
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-12 flex items-start gap-4"
                >
                  <div className="absolute left-0 w-10 h-10 border border-primary/60 rounded-full flex items-center justify-center bg-background font-mono text-xs text-primary">
                    {step.num}
                  </div>
                  <div className="glass rounded-lg p-3 flex-1">
                    <div className="font-display text-lg text-primary mb-0.5">{step.label}</div>
                    <p className="text-sm text-foreground/60 font-light">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute left-[1.65rem] top-[3.5rem] w-3 h-3 text-primary/40 rotate-90" />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://bankei.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {t("receba.cta")}
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <a href="https://bankei.com.br" target="_blank" rel="noopener noreferrer">
              <img
                src="/bankei-banner.png"
                alt="Bankei Business Services — abra sua conta gratuita e receba seus pagamentos EcoDrones mensalmente"
                className="w-full rounded-lg object-contain hover:opacity-90 transition-opacity"
                loading="lazy"
              />
            </a>
            <p className="text-xs text-foreground/40 text-center mt-2 font-mono">
              {t("receba.disclaimer")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
