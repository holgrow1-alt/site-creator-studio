import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Brain, ShoppingCart } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

function TiltCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], reduced ? [0, 0] : [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], reduced ? [0, 0] : [-5, 5]), { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group glass rounded-lg p-5 md:p-7 cursor-pointer relative overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export function AppEcoDrones() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: DollarSign,
      num: t("appEcoDrones.card1Number"),
      title: t("appEcoDrones.card1Title"),
      desc: t("appEcoDrones.card1Desc"),
      highlight: t("appEcoDrones.card1Badge"),
    },
    {
      icon: Brain,
      num: t("appEcoDrones.card2Number"),
      title: t("appEcoDrones.card2Title"),
      desc: t("appEcoDrones.card2Desc"),
      highlight: t("appEcoDrones.card2Badge"),
    },
    {
      icon: ShoppingCart,
      num: t("appEcoDrones.card3Number"),
      title: t("appEcoDrones.card3Title"),
      desc: t("appEcoDrones.card3Desc"),
      highlight: t("appEcoDrones.card3Badge"),
    },
  ];

  return (
    <section id="app-ecodrones" className="relative py-8 md:py-10 overflow-hidden section-sky">
      <div className="blob-sky-tr opacity-60" />
      <div className="blob-green-bl opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("appEcoDrones.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("appEcoDrones.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-5xl mb-4"
        >
          {t("appEcoDrones.heading1")} <span className="text-primary text-glow">{t("appEcoDrones.heading2")}</span> {t("appEcoDrones.heading3")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-6 max-w-2xl"
        >
          {t("appEcoDrones.subhead")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <TiltCard key={i} delay={i * 0.12}>
                <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary))" }} />
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-primary/60 uppercase tracking-widest">{card.num}</span>
                  <motion.div className="text-primary" whileHover={{ scale: 1.3, rotate: 10 }}>
                    <Icon className="w-6 h-6" />
                  </motion.div>
                </div>
                <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded mb-4">
                  {card.highlight}
                </span>
                <h3 className="font-display text-lg md:text-xl mb-4 text-foreground">{card.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-light">{card.desc}</p>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
