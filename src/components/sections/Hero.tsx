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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const droneY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 300]);
  const droneScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.2]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const taglineWords = t("hero.tagline").split(" ");

  return (
    <section id="hero" ref={ref} className="relative min-h-[580px] md:min-h-[700px] w-full overflow-hidden grain">
      {/* Layer 0 — Drone background — brighter */}
      <motion.div style={{ y: droneY, scale: droneScale }} className="absolute inset-0 z-0">
        <img
          src={drone}
          alt="Drone EcoDrones para reflorestamento"
          width={1200}
          height={800}
          fetchPriority="high"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </motion.div>

      {/* Layer 1 — Grid */}
      <motion.div
        className="absolute inset-0 z-[1] opacity-25"
        style={{
          y: gridY,
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.18) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.18) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        } as React.CSSProperties}
      />

      {/* Layer 2 — Radial glow — stronger */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
      >
        <div className="w-[900px] h-[900px] rounded-full bg-primary/20 blur-[120px]" />
      </motion.div>

      {/* Layer 3 — Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 min-h-full flex flex-col items-center justify-center container py-10 pb-24"
      >
        {/* Tagline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 sm:gap-3 mb-6 font-mono text-[11px] sm:text-sm uppercase tracking-[0.2em] text-primary font-bold"
        >
          <motion.span variants={wordVariant} className="w-8 sm:w-14 h-px bg-primary" />
          {taglineWords.map((word, i) => (
            <motion.span key={i} variants={wordVariant}>{word}</motion.span>
          ))}
          <motion.span variants={wordVariant} className="w-8 sm:w-14 h-px bg-primary" />
        </motion.div>

        {/* Logo — big and luminous */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-2 z-10"
        >
          {/* Outer glow halo */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ filter: "blur(80px)" }}
            animate={reduced ? {} : {
              backgroundColor: [
                "hsl(152 100% 50% / 0.25)",
                "hsl(152 100% 50% / 0.55)",
                "hsl(152 100% 50% / 0.25)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          {/* Second inner pulse ring */}
          <motion.div
            className="absolute inset-8 rounded-full"
            style={{ filter: "blur(40px)" }}
            animate={reduced ? {} : {
              backgroundColor: [
                "hsl(152 100% 60% / 0.15)",
                "hsl(152 100% 60% / 0.40)",
                "hsl(152 100% 60% / 0.15)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.img
            src={logo}
            alt="EcoDrones Community"
            className="relative w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] h-auto"
            animate={reduced ? {} : {
              filter: [
                "drop-shadow(0 0 30px rgba(0,255,136,0.5)) drop-shadow(0 0 80px rgba(0,255,136,0.3))",
                "drop-shadow(0 0 60px rgba(0,255,136,0.9)) drop-shadow(0 0 140px rgba(0,255,136,0.5))",
                "drop-shadow(0 0 30px rgba(0,255,136,0.5)) drop-shadow(0 0 80px rgba(0,255,136,0.3))",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Sparkles — wider, denser */}
        <div className="w-[40rem] max-w-full h-16 relative pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-[2px] w-5/6 blur-sm" />
          <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-px w-5/6" />
          <SparklesCore
            background="transparent"
            minSize={0.5}
            maxSize={1.4}
            particleDensity={160}
            className="w-full h-full"
            particleColor="#00ff88"
            speed={1.8}
          />
        </div>

        {/* Body — impactful */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 max-w-3xl text-center text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight"
          style={{ textShadow: "0 2px 40px rgba(0,0,0,0.8)" }}
        >
          {t("hero.body")}
        </motion.p>

        {/* Meta badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-5 inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-primary/60 bg-primary/15 shadow-neon"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
          <span className="text-primary font-mono text-[11px] sm:text-sm uppercase tracking-widest font-bold">
            {t("hero.badge")}
          </span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="#comunidade"
            className="btn-neon"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px -8px hsl(152 100% 50% / 0.7), 0 4px 20px hsl(152 100% 50% / 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            {t("hero.ctaPrimary")}
          </motion.a>
          <a
            href="#manifesto"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/80 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-1"
          >
            {t("hero.ctaSecondary")}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-primary/80"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{t("hero.scrollIndicator")}</span>
        <motion.div
          animate={reduced ? {} : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-neon z-20" />
    </section>
  );
}
