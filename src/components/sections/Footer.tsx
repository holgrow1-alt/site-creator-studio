import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/logo-ecodrones.png";
import { useTranslation } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useTranslation();

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const ghostY = useTransform(scrollYProgress, [0, 1], [80, -20]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.02, 0.05, 0.07]);

  const headingWords = [[t("footer.heading1")], [t("footer.heading2")]];

  return (
    <footer id="footer" ref={ref} className="relative bg-background border-t border-primary/20 pt-14 pb-10 overflow-hidden">
      <div className="container">
        {/* REGENERE CONOSCO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
            {t("footer.sectionLabel")}
          </div>

          <h2 className="font-display text-3xl md:text-5xl leading-tight tracking-tight mb-6">
            {headingWords.map((lineWords, li) => (
              <motion.span
                key={li}
                className={`block ${li === 1 ? "text-primary text-glow" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: li * 0.15 } },
                }}
              >
                {lineWords.map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="inline-block mr-[0.15em]"
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Brand strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6 pt-8 border-t border-border"
        >
          <img src={logo} alt={t("nav.logoAlt")} className="w-10 h-10 object-contain" />
          <div>
            <span className="font-display text-lg text-foreground">{t("footer.brand1")}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 ml-2">{t("footer.brand2")}</span>
          </div>
        </motion.div>

        {/* Copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-4 border-t border-border">
          <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            {t("footer.copyright")}
          </div>
          <div className="font-mono text-[10px] text-foreground/30">
            {t("footer.seo")}
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: ghostY, opacity: ghostOpacity }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display text-3xl md:text-4xl text-primary leading-none pointer-events-none select-none whitespace-nowrap"
      >
        ECODRONES
      </motion.div>
    </footer>
  );
}
