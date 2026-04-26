import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

export function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return { count, ref };
}

export function Impacto() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const goal = 100_000_000;
  const progress = 0;
  const { count, ref: countRef } = useCountUp(progress, 2000);

  return (
    <section id="impacto" className="relative py-8 md:py-10 section-sky">
      {/* Decorative blobs */}
      <div className="blob-green-bl opacity-60" />
      <div className="blob-gold-br opacity-50" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("impacto.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("impacto.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-5xl mb-6"
        >
          {t("impacto.heading")}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            {[t("impacto.body1"), t("impacto.body2")].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className={i === 0 ? "text-lg md:text-xl text-foreground/70 font-light leading-relaxed" : "text-base text-foreground/60 font-light leading-relaxed"}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative glass rounded-lg p-6 md:p-8 glow-border"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-4">{t("impacto.counterLabel")}</div>

            <div className="font-display text-2xl md:text-3xl text-primary text-glow leading-none mb-2">
              <span ref={countRef}>{count.toLocaleString("pt-BR")}</span>
            </div>
            <div className="font-mono text-sm text-foreground/50 mb-8">
              {t("impacto.counterSub")}
            </div>

            <div className="h-2 bg-border rounded-full overflow-hidden mb-3 relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.max((progress / goal) * 100, 0.5)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-primary rounded-full relative"
                style={{ boxShadow: "0 0 20px hsl(var(--primary))" }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30 rounded-full"
                  animate={reduced ? {} : { opacity: [0, 0.6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/40">
              <span>{t("impacto.progress0")}</span>
              <span>{((progress / goal) * 100).toFixed(4)}% concluído</span>
              <span>{t("impacto.progressDone")}</span>
            </div>

            <motion.a
              href="#apoie"
              className="btn-neon mt-10 w-full justify-center"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 40px hsl(142 71% 45% / 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              {t("impacto.cta")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
