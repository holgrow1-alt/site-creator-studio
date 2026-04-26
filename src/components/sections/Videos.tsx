import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function Videos() {
  const { t } = useTranslation();

  return (
    <section id="videos" className="relative py-8 md:py-10 overflow-hidden section-mint">
      <div className="blob-green-tl opacity-40" />
      <div className="blob-sky-tr opacity-30" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("videos.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("videos.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-4xl mb-6"
        >
          {t("videos.heading1")}<br />
          <span className="text-primary text-glow">{t("videos.heading2")}</span><br />
          {t("videos.heading3")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass rounded-lg overflow-hidden"
            >
              <div className="aspect-video bg-background/60 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-primary/20">
                <Youtube className="w-12 h-12 text-primary/40" />
                <div className="text-center">
                  <div className="font-mono text-xs uppercase tracking-widest text-foreground/30 mb-1">{t("videos.comingSoon")}</div>
                  <div className="text-sm text-foreground/20">{i === 1 ? t("videos.video1Label") : t("videos.video2Label")}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-mono text-xs text-foreground/30">{t("videos.videoAwaiting")}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
