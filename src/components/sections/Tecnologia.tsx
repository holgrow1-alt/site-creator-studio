import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import drone from "@/assets/drone-ecodrones.png";
import { useTranslation } from "@/i18n/LanguageContext";

const badges = [
  { label: "AUTONOMIA", value: "45min", top: "8%", right: "4%" },
  { label: "PRECISÃO", value: "±30cm", bottom: "28%", left: "4%" },
  { label: "SEMENTES", value: "500/voo", bottom: "6%", right: "4%" },
];

function SplitWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.2em]"
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

export function Tecnologia() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-50, 50]);

  // 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], reduced ? [0, 0] : [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], reduced ? [0, 0] : [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="tecnologia" ref={ref} className="relative py-8 md:py-10 overflow-hidden section-cream">
      {/* Decorative blobs */}
      <div className="blob-green-tl opacity-60" />
      <div className="blob-sky-tr opacity-50" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Drone card with 3D tilt */}
          <motion.div style={{ y: y2 }} className="relative">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
              className="relative aspect-square rounded-lg overflow-hidden border border-primary/30 bg-card"
            >
              <img
                src={drone}
                alt="Drone EcoDrones para semeadura aérea"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-primary">
                <span>● {t("tecnologia.badge1")}</span>
                <span>{t("tecnologia.badge2")}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-mono text-xs text-primary/80 mb-2">{t("tecnologia.badge3")}</div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-foreground">{t("tecnologia.badge4")}</span>
                  <span className="text-primary">{t("tecnologia.badge5")}</span>
                </div>
              </div>
              {/* Motion scan-line */}
              <motion.div
                className="absolute inset-x-0 h-px bg-primary/80"
                style={{ boxShadow: "0 0 20px hsl(var(--primary))" }}
                animate={reduced ? {} : { y: ["-100vh", "100vh"] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              />
            </motion.div>

            {/* Floating badges */}
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                className="absolute hidden md:flex items-center gap-2 glass rounded px-3 py-2 font-mono text-[10px] uppercase tracking-widest"
                style={{ top: badge.top, right: badge.right, bottom: badge.bottom, left: badge.left }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-primary shadow-neon inline-block"
                  animate={reduced ? {} : { y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 + i * 0.5, ease: "easeInOut" }}
                />
                <span className="text-foreground/60">{badge.label}:</span>
                <span className="text-primary">{badge.value}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Text content */}
          <motion.div style={{ y: y1 }} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              <span>{t("tecnologia.sectionLabel")}</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-primary block"
              />
              <span>{t("tecnologia.sectionSub")}</span>
            </motion.div>

            <h2 className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight">
              <SplitWords text={t("tecnologia.heading1")} delay={0} />
              <br />
              <SplitWords text={t("tecnologia.heading2")} delay={0.1} />
              <br />
              <SplitWords text={t("tecnologia.heading3")} delay={0.2} className="text-primary text-glow" />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-foreground/70 font-light leading-relaxed max-w-md"
            >
              {t("tecnologia.body")}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
