import { motion } from "framer-motion";
import { BookOpen, Heart, Sprout, TreePine, Cloud, Scissors, Activity } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function EcossistemaEducacional() {
  const { t } = useTranslation();

  const lessons = [
    { icon: Heart, title: t("educacional.lesson1Title"), desc: t("educacional.lesson1Desc") },
    { icon: Activity, title: t("educacional.lesson2Title"), desc: t("educacional.lesson2Desc") },
    { icon: Sprout, title: t("educacional.lesson3Title"), desc: t("educacional.lesson3Desc") },
    { icon: TreePine, title: t("educacional.lesson4Title"), desc: t("educacional.lesson4Desc") },
    { icon: BookOpen, title: t("educacional.lesson5Title"), desc: t("educacional.lesson5Desc") },
    { icon: Scissors, title: t("educacional.lesson6Title"), desc: t("educacional.lesson6Desc") },
    { icon: Cloud, title: t("educacional.lesson7Title"), desc: t("educacional.lesson7Desc") },
  ];

  return (
    <section id="educacao" className="relative py-8 md:py-10 overflow-hidden section-sage">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full" />
      </div>
      <div className="blob-sky-tr opacity-50" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("educacional.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("educacional.sectionSub")}</span>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-xl md:text-2xl leading-[0.95] tracking-tight mb-4"
            >
              {t("educacional.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-foreground/60 font-light leading-relaxed mb-6"
            >
              {t("educacional.body")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="glass rounded-xl p-6 border-l-2 border-primary"
            >
              <p className="text-base text-foreground/80 font-light italic">
                {t("educacional.quote")}
              </p>
              <p className="mt-3 font-mono text-xs text-primary uppercase tracking-widest">{t("educacional.quoteSub")}</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {lessons.slice(0, 4).map((lesson, i) => {
              const Icon = lesson.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="glass rounded-lg p-4 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-primary/40 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base mb-1 text-foreground">{lesson.title}</h3>
                    <p className="text-xs text-foreground/55 font-light leading-relaxed">{lesson.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.slice(4).map((lesson, i) => {
            const Icon = lesson.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-lg p-5 group"
              >
                <div className="w-10 h-10 border border-primary/40 rounded-lg flex items-center justify-center mb-4 bg-primary/5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display text-lg mb-1 text-foreground">{lesson.title}</h3>
                <p className="text-xs text-foreground/55 font-light leading-relaxed">{lesson.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
