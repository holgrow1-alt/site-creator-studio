import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo-ecodrones.png";
import drone from "@/assets/drone-ecodrones.png";
import { useTranslation } from "@/i18n/LanguageContext";
import { SparklesCore } from "@/components/ui/sparkles";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax layers
  const droneY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 300]);
  const droneScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.2]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const taglineWords = t("hero.tagline").split(" ");

  return (
    <section id="hero" ref={ref} className="relative min-h-[480px] md:min-h-[560px] w-full overflow-hidden grain">
      {/* Layer 0 — Drone background (slowest) */}
      <motion.div
        style={{ y: droneY, scale: droneScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={drone}
          alt="Drone EcoDrones para reflorestamento"
          width={1200}
          height={800}
          fetchPriority="high"
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/60" />
      </motion.div>

      {/* Layer 1 — Grid (medium speed) */}
      <motion.div
        className="absolute inset-0 z-[1] opacity-20"
        style={{
          y: gridY,
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        } as React.CSSProperties}
      />

      {/* Layer 2 — Radial glow (fades on scroll) */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
      >
        <div className="w-[700px] h-[700px] rounded-full bg-primary/15 blur-[100px]" />
      </motion.div>

      {/* Layer 3 — Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 min-h-full flex flex-col items-center justify-center container py-8"
      >
        {/* Tagline words stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <motion.span variants={wordVariant} className="w-12 h-px bg-primary" />
          {taglineWords.map((word, i) => (
            <motion.span key={i} variants={wordVariant}>
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordVariant} className="w-12 h-px bg-primary" />
        </motion.div>

        {/* Logo with shimmer glow */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-0 z-10"
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-[120px]"
            animate={reduced ? {} : {
              backgroundColor: [
                "hsl(142 71% 45% / 0.2)",
                "hsl(142 71% 45% / 0.4)",
                "hsl(142 71% 45% / 0.2)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.img
            src={logo}
            alt="EcoDrones Community"
            className="relative w-[180px] md:w-[280px] lg:w-[320px] h-auto"
            animate={reduced ? {} : {
              filter: [
                "drop-shadow(0 4px 20px rgba(34,197,94,0.3))",
                "drop-shadow(0 8px 50px rgba(34,197,94,0.6))",
                "drop-shadow(0 4px 20px rgba(34,197,94,0.3))",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Sparkles below logo — strictly below, pointer-events-none, low z-index */}
        <div className="w-[32rem] max-w-full h-12 relative pointer-events-none" style={{ zIndex: 1 }}>
          {/* Linha gradiente decorativa */}
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-3/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={120}
            className="w-full h-full"
            particleColor="#16a34a"
            speed={1.5}
          />
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-display text-2xl md:text-3xl leading-[0.85] text-center text-foreground tracking-tight"
        >
          {t("hero.title1")}<span className="text-primary text-glow-strong">{t("hero.title2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-2xl text-center text-base md:text-lg text-foreground/70 font-light leading-relaxed"
        >
          {t("hero.body")}
          <br />
          <span className="text-primary font-mono text-xs uppercase tracking-widest mt-3 inline-block">
            {t("hero.badge")}
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="#comunidade"
            className="btn-neon"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px -8px hsl(142 71% 45% / 0.6), 0 4px 20px hsl(142 71% 45% / 0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            {t("hero.ctaPrimary")}
          </motion.a>
          <a
            href="#manifesto"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-1"
          >
            {t("hero.ctaSecondary")}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary/70"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{t("hero.scrollIndicator")}</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-neon z-20" />
    </section>
  );
}
