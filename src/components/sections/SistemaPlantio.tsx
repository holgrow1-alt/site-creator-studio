import { motion } from "framer-motion";
import { Send, MapPin, CheckSquare, Layers } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function SistemaPlantio() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Send,
      step: t("sistemaPlantio.step1Number"),
      title: t("sistemaPlantio.step1Title"),
      desc: t("sistemaPlantio.step1Desc"),
    },
    {
      icon: MapPin,
      step: t("sistemaPlantio.step2Number"),
      title: t("sistemaPlantio.step2Title"),
      desc: t("sistemaPlantio.step2Desc"),
    },
    {
      icon: CheckSquare,
      step: t("sistemaPlantio.step3Number"),
      title: t("sistemaPlantio.step3Title"),
      desc: t("sistemaPlantio.step3Desc"),
    },
    {
      icon: Layers,
      step: t("sistemaPlantio.step4Number"),
      title: t("sistemaPlantio.step4Title"),
      desc: t("sistemaPlantio.step4Desc"),
    },
  ];

  return (
    <section id="plantio" className="relative py-8 md:py-10 overflow-hidden section-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full" />
      </div>
      <div className="blob-green-bl opacity-50" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("sistemaPlantio.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("sistemaPlantio.sectionSub")}</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-4xl mb-6"
        >
          {t("sistemaPlantio.heading")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-6 max-w-2xl"
        >
          {t("sistemaPlantio.subhead")}
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
            src="/pdf3-dispersion.png"
            alt="Sistema de dispersão de sementes EcoDrones - drones autônomos dispersando biodrones de argila em terreno degradado para reflorestamento automatizado em escala"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-primary/80 bg-background/70 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
            {t("sistemaPlantio.imageBadge")}
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass rounded-xl p-5 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }}
                />
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-2xl font-bold text-primary/20 leading-none">{step.step}</span>
                  <div className="w-11 h-11 border border-primary/40 rounded-lg flex items-center justify-center bg-primary/5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-3 text-foreground leading-tight">{step.title}</h3>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">{step.desc}</p>
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
            {t("sistemaPlantio.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
