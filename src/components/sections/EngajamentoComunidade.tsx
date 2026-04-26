import { motion } from "framer-motion";
import { Map, Target, Shuffle, Gift, Plane, MessageSquare } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function EngajamentoComunidade() {
  const { t } = useTranslation();

  const features = [
    { icon: Map, title: t("engajamento.feature1Title"), desc: t("engajamento.feature1Desc") },
    { icon: Target, title: t("engajamento.feature2Title"), desc: t("engajamento.feature2Desc") },
    { icon: Shuffle, title: t("engajamento.feature3Title"), desc: t("engajamento.feature3Desc") },
    { icon: Gift, title: t("engajamento.feature4Title"), desc: t("engajamento.feature4Desc") },
    { icon: Plane, title: t("engajamento.feature5Title"), desc: t("engajamento.feature5Desc") },
    { icon: MessageSquare, title: t("engajamento.feature6Title"), desc: t("engajamento.feature6Desc") },
  ];

  return (
    <section id="engajamento" className="relative py-8 md:py-10 overflow-hidden section-sage">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      </div>
      <div className="blob-green-tl opacity-50" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("engajamento.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("engajamento.sectionSub")}</span>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-xl md:text-2xl leading-[0.95] tracking-tight"
          >
            {t("engajamento.heading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 font-light leading-relaxed"
          >
            {t("engajamento.body")}
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-xl p-6 group relative overflow-hidden cursor-default"
              >
                <div
                  className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }}
                />
                <div className="w-12 h-12 border border-primary/40 rounded-lg flex items-center justify-center mb-5 bg-primary/5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2 text-foreground leading-tight">{feat.title}</h3>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-7 text-center"
        >
          <a href="#comunidade" className="btn-neon inline-flex items-center gap-2">
            {t("engajamento.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
