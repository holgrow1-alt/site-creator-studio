import { motion } from "framer-motion";
import { Battery, Weight, RotateCcw, AlertOctagon, Cpu } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function SegurancaOperacional() {
  const { t } = useTranslation();

  const items = [
    { icon: Battery, title: t("seguranca.item1Title"), desc: t("seguranca.item1Desc") },
    { icon: Weight, title: t("seguranca.item2Title"), desc: t("seguranca.item2Desc") },
    { icon: RotateCcw, title: t("seguranca.item3Title"), desc: t("seguranca.item3Desc") },
    { icon: AlertOctagon, title: t("seguranca.item4Title"), desc: t("seguranca.item4Desc") },
    { icon: Cpu, title: t("seguranca.item5Title"), desc: t("seguranca.item5Desc") },
  ];

  return (
    <section id="seguranca" className="relative py-8 md:py-10 overflow-hidden section-sky">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
      </div>
      <div className="blob-sky-tr opacity-60" />
      <div className="blob-green-bl opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("seguranca.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("seguranca.sectionSub")}</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.95] tracking-tight max-w-4xl mb-6"
        >
          {t("seguranca.heading")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-6 max-w-2xl"
        >
          {t("seguranca.subhead")}
        </motion.p>
        <div className="space-y-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-xl p-6 flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 border border-primary/40 rounded-xl flex items-center justify-center bg-primary/5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary/50">0{i + 1}</span>
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/60 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div
                  className="w-1 self-stretch rounded-full bg-primary/20 group-hover:bg-primary/60 transition-colors"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
