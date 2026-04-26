import { motion } from "framer-motion";
import { CloudRain, AlertTriangle, Thermometer, Wind, Mountain, Leaf } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function UrgenciaAmbiental() {
  const { t } = useTranslation();

  const problems = [
    { icon: CloudRain, label: t("urgencia.problem1Title"), desc: t("urgencia.problem1Desc") },
    { icon: Mountain, label: t("urgencia.problem2Title"), desc: t("urgencia.problem2Desc") },
    { icon: Thermometer, label: t("urgencia.problem3Title"), desc: t("urgencia.problem3Desc") },
    { icon: Wind, label: t("urgencia.problem4Title"), desc: t("urgencia.problem4Desc") },
    { icon: AlertTriangle, label: t("urgencia.problem5Title"), desc: t("urgencia.problem5Desc") },
    { icon: Leaf, label: t("urgencia.problem6Title"), desc: t("urgencia.problem6Desc") },
  ];

  return (
    <section id="urgencia" className="relative py-8 md:py-10 overflow-hidden section-sage">
      {/* Decorative blobs */}
      <div className="blob-green-tl opacity-50" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("urgencia.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("urgencia.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-5xl mb-6"
        >
          {t("urgencia.heading1")}<br />
          <span className="text-primary text-glow">{t("urgencia.heading2")}</span>
        </motion.h2>

        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-l-4 border-primary pl-6 mb-6 max-w-3xl"
        >
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed italic">
            "{t("urgencia.blockquote")}"
          </p>
        </motion.blockquote>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-lg p-6 flex items-start gap-4 group shadow-md hover:shadow-xl border border-border hover:border-primary/30 transition-all duration-300 bg-white/70"
              >
                <div className="w-10 h-10 border border-red-500/40 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/10 transition-colors">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">{item.label}</div>
                  <p className="text-sm text-foreground/50 font-light">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass rounded-lg p-5 border border-primary/30 max-w-3xl"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{t("urgencia.solutionLabel")}</div>
          <h3 className="font-display text-xl text-foreground mb-4">
            {t("urgencia.solutionTitle")}
          </h3>
          <p className="text-foreground/60 font-light leading-relaxed">
            {t("urgencia.solutionBody")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
