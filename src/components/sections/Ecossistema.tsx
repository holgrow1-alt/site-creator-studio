import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Trees, Users, Plane, Heart } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

function TiltCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], reduced ? [0, 0] : [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], reduced ? [0, 0] : [-5, 5]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group glass rounded-lg p-6 md:p-8 lg:p-6 xl:p-8 cursor-pointer relative overflow-hidden min-h-[260px] flex flex-col"
    >
      {children}
    </motion.div>
  );
}

export function Ecossistema() {
  const { t } = useTranslation();

  const items = [
    { icon: Plane, num: t("ecossistema.card1Number"), title: t("ecossistema.card1Title"), desc: t("ecossistema.card1Desc") },
    { icon: Trees, num: t("ecossistema.card2Number"), title: t("ecossistema.card2Title"), desc: t("ecossistema.card2Desc") },
    { icon: Users, num: t("ecossistema.card3Number"), title: t("ecossistema.card3Title"), desc: t("ecossistema.card3Desc") },
    { icon: Heart, num: t("ecossistema.card4Number"), title: t("ecossistema.card4Title"), desc: t("ecossistema.card4Desc") },
  ];

  return (
    <section id="ecossistema" className="relative py-8 md:py-10 overflow-hidden section-mint">
      <div className="blob-green-tl opacity-50" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("ecossistema.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("ecossistema.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-5xl mb-6"
        >
          {t("ecossistema.heading1")} Um <span className="text-primary text-glow">propósito</span>.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <TiltCard key={item.num} delay={i * 0.1}>
                {/* Animated top accent line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }} />

                <div className="relative flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-xs text-primary/60 uppercase tracking-widest">{item.num}</span>
                    <motion.div
                      className="text-primary"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 group-hover:text-glow-strong transition-all duration-300" />
                    </motion.div>
                  </div>
                  <h3 className="font-display text-lg md:text-xl mb-4 text-foreground break-words hyphens-auto leading-tight">{item.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed font-light break-words">{item.desc}</p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
