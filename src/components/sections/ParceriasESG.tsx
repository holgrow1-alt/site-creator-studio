import { motion } from "framer-motion";
import { Building2, TrendingUp, Award, Globe, Plane, Shirt, Camera } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function ParceriasESG() {
  const { t } = useTranslation();

  const results = [
    { icon: TrendingUp, metric: t("parceriasESG.result1Title"), desc: t("parceriasESG.result1Desc") },
    { icon: Award, metric: t("parceriasESG.result2Title"), desc: t("parceriasESG.result2Desc") },
    { icon: Globe, metric: t("parceriasESG.result3Title"), desc: t("parceriasESG.result3Desc") },
    { icon: Building2, metric: t("parceriasESG.result4Title"), desc: t("parceriasESG.result4Desc") },
  ];

  const extras = [
    {
      icon: Plane,
      tag: t("parceriasESG.extra1EnLabel"),
      title: t("parceriasESG.extra1Title"),
      desc: t("parceriasESG.extra1Desc"),
      color: "text-sky-400",
      border: "border-sky-400/20",
      bg: "from-sky-500/6",
    },
    {
      icon: Shirt,
      tag: t("parceriasESG.extra2EnLabel"),
      title: t("parceriasESG.extra2Title"),
      desc: t("parceriasESG.extra2Desc"),
      color: "text-amber-400",
      border: "border-amber-400/20",
      bg: "from-amber-400/6",
    },
    {
      icon: Camera,
      tag: t("parceriasESG.extra3EnLabel"),
      title: t("parceriasESG.extra3Title"),
      desc: t("parceriasESG.extra3Desc"),
      color: "text-violet-400",
      border: "border-violet-400/20",
      bg: "from-violet-400/6",
    },
  ];

  const flowSteps = [
    t("parceriasESG.flow1"),
    t("parceriasESG.flow2"),
    t("parceriasESG.flow3"),
    t("parceriasESG.flow4"),
  ];

  return (
    <section id="esg" className="relative py-8 md:py-10 overflow-hidden section-mint">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sky-500/4 blur-[100px] rounded-full" />
      </div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("parceriasESG.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("parceriasESG.sectionSub")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-xl md:text-2xl leading-[0.95] tracking-tight mb-8">
              {t("parceriasESG.heading")}
            </h2>
            <p className="text-lg text-foreground/60 font-light leading-relaxed mb-8">
              {t("parceriasESG.body")}
            </p>
            <div className="glass rounded-xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">{t("parceriasESG.flowLabel")}</div>
              <div className="space-y-4">
                {flowSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-[10px] text-primary">{i + 1}</span>
                    </div>
                    <span className="text-sm text-foreground/70 font-light">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5">
            {results.map((res, i) => {
              const Icon = res.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="glass rounded-xl p-5 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 border border-primary/40 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1 text-foreground">{res.metric}</h3>
                    <p className="text-sm text-foreground/60 font-light leading-relaxed">{res.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Extras row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-6">{t("parceriasESG.extrasLabel")}</div>
          <div className="grid md:grid-cols-3 gap-5">
            {extras.map((ex, i) => {
              const Icon = ex.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`glass rounded-xl p-6 border ${ex.border} relative overflow-hidden group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${ex.bg} to-transparent`} />
                  <div className="relative">
                    <div className={`font-mono text-[9px] uppercase tracking-widest ${ex.color} mb-3`}>{ex.tag}</div>
                    <div className={`w-11 h-11 rounded-lg border ${ex.border} flex items-center justify-center mb-4 bg-white/5`}>
                      <Icon className={`w-5 h-5 ${ex.color}`} />
                    </div>
                    <h3 className="font-display text-xl mb-2 text-foreground">{ex.title}</h3>
                    <p className="text-sm text-foreground/60 font-light leading-relaxed">{ex.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5516993986738"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2"
          >
            {t("parceriasESG.cta")}
          </a>
          <a
            href="#estrategia-regenerativa"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("estrategia-regenerativa")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border-2 border-emerald-500 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5 10l7-7 7 7" />
            </svg>
            Ver Estratégia Regenerativa ESG
          </a>
        </motion.div>
      </div>
    </section>
  );
}
