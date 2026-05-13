import { motion, useReducedMotion } from "framer-motion";
import { Apple, Recycle, Users, TreePine } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function SeedMovement() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const steps = [
    {
      icon: Apple,
      num: t("seedMovement.step1Number"),
      title: t("seedMovement.step1Title"),
      desc: "Drones de colheita com braços mecânicos de precisão realizam extração seletiva. Bio-inspired engineering enables delicate, precision fruit extraction.",
      color: "text-red-400",
      border: "border-red-400/20",
      bg: "from-red-500/6",
    },
    {
      icon: Recycle,
      num: t("seedMovement.step2Number"),
      title: t("seedMovement.step2Title"),
      desc: "Usuários coletam sementes das frutas colhidas e as reintegram ao ciclo de plantio pelo app. Automated dispersion transforms barren land into productive zones.",
      color: "text-amber-400",
      border: "border-amber-400/20",
      bg: "from-amber-400/6",
    },
    {
      icon: Users,
      num: t("seedMovement.step3Number"),
      title: t("seedMovement.step3Title"),
      desc: t("seedMovement.step3Desc"),
      color: "text-emerald-400",
      border: "border-emerald-400/20",
      bg: "from-emerald-500/6",
    },
    {
      icon: TreePine,
      num: t("seedMovement.step4Number"),
      title: t("seedMovement.step4Title"),
      desc: t("seedMovement.step4Desc"),
      color: "text-primary",
      border: "border-primary/20",
      bg: "from-primary/6",
    },
  ];

  return (
    <section id="seed-movement" className="relative py-8 md:py-10 overflow-hidden section-sage">
      <div className="blob-green-tl opacity-50" />
      <div className="blob-sky-tr opacity-40" />
      {/* Light nature background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-400/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("seedMovement.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("seedMovement.sectionSub")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-4xl leading-tight tracking-tight"
          >
            {t("seedMovement.heading")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-foreground/60 font-light leading-relaxed mb-6">
              {t("seedMovement.body")}
            </p>
            <div className="glass rounded-xl p-5 border border-primary/20">
              <p className="text-base font-display text-foreground leading-snug">
                "{t("seedMovement.quoteEn")}"
              </p>
              <p className="mt-2 font-mono text-xs text-primary uppercase tracking-widest">{t("seedMovement.quoteSub")}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`glass rounded-2xl p-6 border ${step.border} relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bg} to-transparent`} />
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30 font-mono text-lg z-10 hidden lg:block"
                    animate={reduced ? {} : { x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                )}
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-foreground/10 leading-none">{step.num}</span>
                    <div className={`w-11 h-11 rounded-xl border ${step.border} flex items-center justify-center bg-white/5`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-2 text-foreground leading-tight">{step.title}</h3>
                  <p className="text-sm text-foreground/55 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 glass rounded-xl p-6 text-center border border-primary/20"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            {t("seedMovement.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
