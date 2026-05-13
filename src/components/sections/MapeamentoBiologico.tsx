import { motion } from "framer-motion";
import { MapPin, CheckCircle, Navigation } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function MapeamentoBiologico() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: MapPin,
      num: t("mapeamento.step1Number"),
      title: t("mapeamento.step1Title"),
      desc: t("mapeamento.step1Desc"),
      tag: t("mapeamento.step1Label"),
    },
    {
      icon: CheckCircle,
      num: t("mapeamento.step2Number"),
      title: t("mapeamento.step2Title"),
      desc: t("mapeamento.step2Desc"),
      tag: t("mapeamento.step2Label"),
    },
    {
      icon: Navigation,
      num: t("mapeamento.step3Number"),
      title: t("mapeamento.step3Title"),
      desc: t("mapeamento.step3Desc"),
      tag: t("mapeamento.step3Label"),
    },
  ];

  return (
    <section id="mapeamento" className="relative py-8 md:py-10 overflow-hidden section-white">
      <div className="blob-green-bl opacity-50" />
      <div className="blob-sky-tr opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("mapeamento.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("mapeamento.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-5xl mb-6"
        >
          {t("mapeamento.heading1")} <span className="text-primary text-glow">{t("mapeamento.heading2")}</span> {t("mapeamento.heading3")}
        </motion.h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/20 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="glass rounded-lg p-5 text-center relative group"
                >
                  <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                    style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }} />

                  <motion.div
                    className="w-10 h-10 mx-auto mb-3 border border-primary/40 rounded-full flex items-center justify-center bg-primary/5"
                    whileHover={{ scale: 1.2, backgroundColor: "hsl(142 71% 45% / 0.12)" }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>

                  <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded mb-2">
                    {step.tag}
                  </span>

                  <div className="font-mono text-xs text-primary/40 mb-1">{step.num}</div>
                  <h3 className="font-display text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-foreground/60 font-light leading-relaxed">{step.desc}</p>

                  {i < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-primary/60 text-xl hidden lg:block z-10">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
