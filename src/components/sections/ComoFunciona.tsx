import { motion, useReducedMotion } from "framer-motion";
import { Smartphone, Plane, Leaf, ShoppingCart, DollarSign, Brain } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function ComoFunciona() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const cycleSteps = [
    { icon: Smartphone, label: t("comoFunciona.step1Title"), desc: t("comoFunciona.step1Desc") },
    { icon: Leaf, label: t("comoFunciona.step2Title"), desc: t("comoFunciona.step2Desc") },
    { icon: Plane, label: t("comoFunciona.step3Title"), desc: t("comoFunciona.step3Desc") },
    { icon: Leaf, label: t("comoFunciona.step4Title"), desc: t("comoFunciona.step4Desc") },
    { icon: ShoppingCart, label: t("comoFunciona.step5Title"), desc: t("comoFunciona.step5Desc") },
    { icon: DollarSign, label: t("comoFunciona.step6Title"), desc: t("comoFunciona.step6Desc") },
  ];

  return (
    <section id="como-funciona" className="relative py-8 md:py-10 overflow-hidden section-mint">
      {/* Decorative blobs */}
      <div className="blob-sky-tr opacity-60" />
      <div className="blob-green-bl opacity-50" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("comoFunciona.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("comoFunciona.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-5xl mb-4"
        >
          {t("comoFunciona.heading")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-4 max-w-2xl"
        >
          {t("comoFunciona.subhead")}
        </motion.p>

        {/* PDF Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 mb-8"
        >
          <img
            src="/pdf1-economia-circular.png"
            alt="Economia circular EcoDrones - ciclo completo de plantio automatizado, colheita inteligente, recompensas em créditos de carbono e reinvestimento em reflorestamento"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-primary/80 bg-background/70 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
            {t("comoFunciona.imageLabel")}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cycleSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-lg p-6 group relative overflow-hidden shadow-lg border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }} />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-primary/40 rounded flex items-center justify-center bg-primary/5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-primary/60 uppercase tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl mb-2 text-foreground leading-tight">{step.label}</h3>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">{step.desc}</p>
                {i < cycleSteps.length - 1 && (
                  <motion.div
                    className="absolute -right-3 top-1/2 -translate-y-1/2 text-primary/40 font-mono text-lg hidden lg:block"
                    animate={reduced ? {} : { x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-foreground/50 font-mono text-xs uppercase tracking-widest">
            {t("comoFunciona.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
