import { motion, useReducedMotion } from "framer-motion";
import { TreePine, Droplets, Wind, Heart, Zap, Users, School } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function VisaoFinal() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const impacts = [
    { icon: Droplets, label: t("visaoFinal.tile1") },
    { icon: TreePine, label: t("visaoFinal.tile2") },
    { icon: Heart, label: t("visaoFinal.tile3") },
    { icon: Wind, label: t("visaoFinal.tile4") },
  ];

  const futureSteps = [
    {
      icon: Zap,
      tag: t("visaoFinal.scale1En"),
      title: t("visaoFinal.scale1Title"),
      desc: t("visaoFinal.scale1Desc"),
      color: "text-amber-400",
      border: "border-amber-400/20",
      bg: "from-amber-400/8",
    },
    {
      icon: Users,
      tag: t("visaoFinal.scale2En"),
      title: t("visaoFinal.scale2Title"),
      desc: t("visaoFinal.scale2Desc"),
      color: "text-emerald-400",
      border: "border-emerald-400/20",
      bg: "from-emerald-500/8",
    },
    {
      icon: School,
      tag: t("visaoFinal.scale3En"),
      title: t("visaoFinal.scale3Title"),
      desc: t("visaoFinal.scale3Desc"),
      color: "text-sky-400",
      border: "border-sky-400/20",
      bg: "from-sky-500/8",
    },
  ];

  return (
    <section id="visao" className="relative py-8 md:py-10 overflow-hidden section-mint">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/10" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={reduced ? {} : { opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <div className="w-[900px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
        </motion.div>
      </div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("visaoFinal.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("visaoFinal.sectionSub")}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-6">
            {t("visaoFinal.heading1")}{" "}
            <span className="text-primary block mt-2" style={{ textShadow: "0 0 60px hsl(142 71% 45% / 0.3)" }}>
              {t("visaoFinal.heading2")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-light max-w-3xl mx-auto leading-relaxed">
            {t("visaoFinal.body")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {impacts.map((impact, i) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass rounded-xl p-4 sm:p-6 text-center group"
              >
                <div className="w-14 h-14 border border-primary/40 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary/5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/70">{impact.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* PDF Visuals strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 aspect-video">
            <img
              src="/pdf2-visao-final.png"
              alt="Visão final EcoDrones - cidade verde futurista com cobertura vegetal total, menos enchentes, menos erosão, mais biodiversidade e abundância"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-widest text-primary/80 bg-background/70 px-2 py-1 rounded backdrop-blur-sm">
              {t("visaoFinal.badge1")}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-emerald-400/20 aspect-video">
            <img
              src="/pdf1-cta-final.png"
              alt="CTA final Manifesto EcoDrones - convite para juntar-se à missão de plantar 100 milhões de árvores com drone de reflorestamento e tecnologia verde"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-widest text-emerald-400/80 bg-background/70 px-2 py-1 rounded backdrop-blur-sm">
              {t("visaoFinal.badge2")}
            </div>
          </div>
        </motion.div>

        {/* Escala Futura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-6 text-center">{t("visaoFinal.scaleLabel")}</div>
          <div className="grid md:grid-cols-3 gap-6">
            {futureSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className={`glass rounded-2xl p-7 border ${step.border} relative overflow-hidden group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bg} to-transparent`} />
                  <div className="relative">
                    <div className={`font-mono text-[9px] uppercase tracking-widest ${step.color} mb-4`}>{step.tag}</div>
                    <div className={`w-12 h-12 rounded-xl border ${step.border} flex items-center justify-center mb-5 bg-white/5`}>
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <h3 className="font-display text-2xl mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-foreground/60 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-primary/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative p-8 md:p-10 text-center">
            <motion.div
              className="w-16 h-16 border-2 border-primary/50 rounded-full flex items-center justify-center mx-auto mb-8"
              animate={reduced ? {} : { rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <TreePine className="w-7 h-7 text-primary" />
            </motion.div>
            <p className="font-display text-lg md:text-xl leading-[1.1] tracking-tight text-foreground mb-6">
              {t("visaoFinal.finalBlock")}
            </p>
            <p className="text-base text-foreground/50 font-mono uppercase tracking-widest mb-6">
              {t("visaoFinal.finalMeta")}
            </p>
            <motion.a
              href="https://wa.me/5516993986738"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2 text-base px-10 py-4"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 50px -8px hsl(142 71% 45% / 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              {t("visaoFinal.finalCta")}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
