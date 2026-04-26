import { motion, useReducedMotion } from "framer-motion";
import { Heart, QrCode, Bitcoin } from "lucide-react";
import { useCountUp } from "@/components/sections/Impacto";
import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

export function ApoieOProjeto() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const { count, ref: countRef } = useCountUp(100_000_000, 3000);
  const [copied, setCopied] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(t("apoie.path2Key")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const paths = [
    {
      icon: Heart,
      title: t("apoie.path1Sub"),
      tag: t("apoie.path1Label"),
      desc: t("apoie.path1Desc"),
      cta: t("apoie.path1Cta"),
      href: "https://catarse.me/ecodrones",
      color: "hsl(0 80% 60%)",
    },
    {
      icon: QrCode,
      title: t("apoie.path2Sub"),
      tag: t("apoie.path2Label"),
      desc: t("apoie.path2Desc"),
      cta: t("apoie.path2Cta"),
      pix: t("apoie.path2Key"),
      color: "hsl(142 71% 45%)",
      featured: true,
    },
    {
      icon: Bitcoin,
      title: t("apoie.path3Sub"),
      tag: t("apoie.path3Label"),
      desc: t("apoie.path3Desc"),
      cta: t("apoie.path3Cta"),
      href: "https://bankei.com.br",
      color: "hsl(45 100% 60%)",
    },
  ];

  const allocations = [
    { pct: t("apoie.alloc1Pct"), label: t("apoie.alloc1Label"), desc: t("apoie.alloc1Desc") },
    { pct: t("apoie.alloc2Pct"), label: t("apoie.alloc2Label"), desc: t("apoie.alloc2Desc") },
    { pct: t("apoie.alloc3Pct"), label: t("apoie.alloc3Label"), desc: t("apoie.alloc3Desc") },
  ];

  return (
    <section id="apoie" className="relative py-6 md:py-8 overflow-hidden section-cream">
      <div className="blob-green-tl opacity-50" />
      <div className="blob-sky-tr opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("apoie.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("apoie.sectionSub")}</span>
        </motion.div>

        {/* Counter central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-6"
        >
          <motion.h2
            className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight mb-4"
          >
            {t("apoie.heading1")} <span className="text-primary text-glow">{t("apoie.heading2")}</span>
          </motion.h2>
          <p className="text-lg text-foreground/60 font-light mb-8 max-w-2xl mx-auto">
            {t("apoie.subhead")}
          </p>
          <div className="inline-flex flex-col items-center glass rounded-lg px-6 py-6 glow-border w-full max-w-xs mx-auto">
            <div className="font-mono text-xs uppercase tracking-widest text-primary/60 mb-2">{t("apoie.counterLabel")}</div>
            <div className="font-display text-2xl md:text-3xl text-primary text-glow">
              <span ref={countRef}>{count.toLocaleString("pt-BR")}</span>
            </div>
            <div className="font-mono text-sm text-foreground/40 mt-1">{t("apoie.counterGoal")}</div>
          </div>
        </motion.div>

        {/* 3 caminhos */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {paths.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`glass rounded-lg p-5 flex flex-col items-center text-center relative group overflow-hidden ${path.featured ? "border border-primary/60 glow-border" : ""}`}
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                  style={{ background: path.color, boxShadow: `0 0 12px ${path.color}` }} />

                <motion.div
                  className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                  style={{ background: `${path.color}20`, border: `2px solid ${path.color}60` }}
                  animate={reduced ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
                >
                  <Icon className="w-7 h-7" style={{ color: path.color }} />
                </motion.div>

                <span className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: path.color }}>
                  {path.tag}
                </span>
                <h3 className="font-display text-2xl text-foreground mb-3">{path.title}</h3>
                <p className="text-sm text-foreground/60 font-light leading-relaxed mb-6">{path.desc}</p>

                {path.pix ? (
                  <div className="w-full space-y-3">
                    <div className="glass rounded p-3 font-mono text-xs text-primary break-all">{path.pix}</div>
                    <motion.button
                      onClick={handleCopyPix}
                      className="btn-neon w-full justify-center text-sm"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {copied ? t("apoie.path2CopiedCta") : path.cta}
                    </motion.button>
                  </div>
                ) : (
                  <motion.a
                    href={path.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon w-full justify-center text-sm mt-auto"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {path.cta}
                  </motion.a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Transparência */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-lg p-4 border border-primary/20"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{t("apoie.transparencyLabel")}</div>
          <h3 className="font-display text-2xl text-foreground mb-4">{t("apoie.transparencyTitle")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {allocations.map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl text-primary mb-1">{item.pct}</div>
                <div className="font-medium text-foreground text-sm mb-1">{item.label}</div>
                <div className="text-xs text-foreground/50 font-light">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
