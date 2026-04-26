import { motion } from "framer-motion";
import { Leaf, Users, Plane, ShoppingBag, Map, FileCode } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function ModeloEconomico() {
  const { t } = useTranslation();

  const sources = [
    { icon: Leaf, title: t("modeloEconomico.source1Title"), desc: t("modeloEconomico.source1Desc"), value: t("modeloEconomico.source1Badge") },
    { icon: Users, title: t("modeloEconomico.source2Title"), desc: t("modeloEconomico.source2Desc"), value: t("modeloEconomico.source2Badge") },
    { icon: Plane, title: t("modeloEconomico.source3Title"), desc: t("modeloEconomico.source3Desc"), value: t("modeloEconomico.source3Badge") },
    { icon: ShoppingBag, title: t("modeloEconomico.source4Title"), desc: t("modeloEconomico.source4Desc"), value: t("modeloEconomico.source4Badge") },
    { icon: Map, title: t("modeloEconomico.source5Title"), desc: t("modeloEconomico.source5Desc"), value: t("modeloEconomico.source5Badge") },
    { icon: FileCode, title: t("modeloEconomico.source6Title"), desc: t("modeloEconomico.source6Desc"), value: t("modeloEconomico.source6Badge") },
  ];

  return (
    <section id="modelo" className="relative py-8 md:py-10 overflow-hidden section-cream">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full" />
      </div>
      <div className="blob-green-tl opacity-40" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("modeloEconomico.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("modeloEconomico.sectionSub")}</span>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-xl md:text-2xl leading-[0.95] tracking-tight"
          >
            {t("modeloEconomico.heading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 font-light leading-relaxed"
          >
            {t("modeloEconomico.body")}
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sources.map((src, i) => {
            const Icon = src.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-xl p-6 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }}
                />
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 border border-primary/40 rounded-lg flex items-center justify-center bg-primary/5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary/60 bg-primary/10 px-2 py-1 rounded">{src.value}</span>
                </div>
                <h3 className="font-display text-xl mb-2 text-foreground leading-tight">{src.title}</h3>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">{src.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
