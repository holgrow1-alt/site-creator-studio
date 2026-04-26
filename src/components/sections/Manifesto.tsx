import { motion, useReducedMotion } from "framer-motion";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { useTranslation } from "@/i18n/LanguageContext";

function SplitWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={
            reduced
              ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
              : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }
          }
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Manifesto() {
  const { t } = useTranslation();

  return (
    <section id="manifesto" className="relative py-8 md:py-10 overflow-hidden section-cream leaf-pattern">
      {/* Decorative blobs */}
      <div className="blob-green-tl opacity-70" />
      <div className="blob-gold-br opacity-60" />
      <div className="container">
        {/* Section label with extending line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span className="font-mono">{t("manifesto.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("manifesto.sectionSub")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Heading — split by line with word stagger */}
          <h2 className="lg:col-span-7 font-display text-xl md:text-2xl leading-[0.95] tracking-tight">
            <SplitWords text={t("manifesto.heading1")} delay={0} /> <SplitWords text={t("manifesto.heading2")} delay={0.1} /> <SplitWords
              text={t("manifesto.heading3")}
              delay={0.2}
              className="text-primary text-glow"
            />
          </h2>

          {/* Body text — line by line */}
          <div className="lg:col-span-5 space-y-6 text-lg text-foreground/70 leading-relaxed font-light pt-8">
            {[
              <>{t("manifesto.body1")}</>,
              <>{t("manifesto.body2")}</>,
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Particle Text Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-16 relative rounded-lg overflow-hidden border border-primary/20 bg-background glow-border"
        >
          <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest text-primary/60">
            {t("manifesto.particleLabel")}
          </div>
          <ParticleTextEffect words={["ECODRONES", "REGENERAR", "AGIR", "IMPACTO", "FUTURO"]} />
        </motion.div>
      </div>
    </section>
  );
}
