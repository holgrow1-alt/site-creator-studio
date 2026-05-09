import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { logoSrc as logo } from "@/assets/logoData";
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

  return (
        <section id="hero" ref={ref} className="relative min-h-[580px] md:min-h-[700px] w-full overflow-hidden grain">
          {/* Layer 0 — Drone background */}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
              </motion.div>motion.div>
        
          {/* Layer 1 — Grid */}
              <motion.div
                        className="absolute inset-0 z-[1] opacity-25"
                        style={{
                                    y: gridY,
                                    backgroundImage: `linear-gradient(hsl(var(--primary) / 0.18) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.18) 1px, transparent 1px)`,
                                    backgroundSize: "80px 80px",
                        } as React.CSSProperties}
                      />
        
          {/* Layer 2 — Radial glow */}
              <motion.div
                        style={{ opacity: glowOpacity }}
                        className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
                      >
                      <div className="w-[900px] h-[900px] rounded-full bg-primary/20 blur-[120px]" />
              </motion.div>motion.div>
        
          {/* Layer 3 — Content */}
              <motion.div
                        style={{ y: contentY, opacity: contentOpacity }}
                        className="relative z-10 min-h-full flex flex-col items-center justify-center container py-10 pb-24"
                      >
                {/* Tagline + Logo stacked */}
                      <div className="flex flex-col items-center gap-3 z-10">
                        {/* Tagline — black pill above logo */}
                                <motion.div
                                              initial={{ opacity: 0, y: 14 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                              className="bg-black/90 border border-primary/50 px-6 py-2.5 rounded-full backdrop-blur-sm shadow-neon"
                                            >
                                            <span className="font-display text-2xl sm:text-3xl md:text-4xl text-primary tracking-widest text-glow">
                                              {t("hero.tagline")}
                                            </span>span>
                                </motion.div>motion.div>
                      
                        {/* Logo with shimmer glow */}
                                <motion.div
                                              initial={{ scale: 0.5, opacity: 0 }}
                                              animate={{ scale: 1, opacity: 1 }}
                                              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                                              className="relative -mb-2 mt-1"
                                            >
                                            <motion.img
                                                            src={logo}
                                                            alt="EcoDrones Community"
                                                            className="relative w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] h-auto block object-contain filter drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                                                            loading="eager"
                                                            decodingms-center gap-3 text-primary/80"
                                        >
                                          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{t("hero.scrollIndicator")}</span>span>
                                        <motion.div
                                                    animate={reduced ? {} : { y: [0, 10, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                  >
                                                  <ArrowDown className="w-4 h-4" />
                                        </motion.div>motion.div>
                                </motion.div>motion.div>
                      
                        {/* Bottom divider */}
                            <div className="absolute bottom-0 left-0 right-0 divider-neon z-20" />
                      </div>section>
                );
                }</span>="async"
                                                          />
                                </motion.div>motion.div>
                      </div>div>
              
                {/* Sparkles */}
                      <div className="w-[40rem] max-w-full h-16 relative pointer-events-none" style={{ zIndex: 1 }}>
                                <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-[2px] w-5/6 blur-sm" />
                                <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-px w-5/6" />
                                <SparklesCore
                                              background="transparent"
                                              minSize={0.5}
                                              maxSiz</section>
