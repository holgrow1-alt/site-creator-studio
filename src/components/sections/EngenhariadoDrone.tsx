import { motion } from "framer-motion";
import { Cpu, Eye, Navigation, Package, Shield, Scissors } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function EngenhariadoDrone() {
  const { t } = useTranslation();

  const specs = [
    {
      icon: Cpu,
      title: t("engenharia.spec1Title"),
      desc: t("engenharia.spec1Desc"),
    },
    {
      icon: Eye,
      title: t("engenharia.spec2Title"),
      desc: t("engenharia.spec2Desc"),
    },
    {
      icon: Package,
      title: t("engenharia.spec3Title"),
      desc: t("engenharia.spec3Desc"),
    },
    {
      icon: Shield,
      title: t("engenharia.spec4Title"),
      desc: t("engenharia.spec4Desc"),
    },
    {
      icon: Scissors,
      title: t("engenharia.spec5Title"),
      desc: t("engenharia.spec5Desc"),
    },
  ];

  return (
    <section id="engenharia-drone" className="relative py-8 md:py-10 overflow-hidden section-white">
      <div className="blob-green-bl opacity-50" />
      <div className="blob-sky-tr opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("engenharia.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("engenharia.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-5xl mb-4"
        >
          {t("engenharia.heading1")} <span className="text-primary text-glow">{t("engenharia.heading2")}</span> {t("engenharia.heading3")}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden border border-primary/30 bg-background">
              <img
                src="/drone-colheita.jpg"
                alt="Drone de colheita EcoDrones com braços mecânicos articulados, pinça e redinha de coleta para agricultura sustentável de precisão"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary/80 bg-background/80 px-2 py-1 rounded mt-2 inline-block">
              {t("engenharia.imageBadge")}
            </div>
          </motion.div>

          {/* Specs */}
          <div className="space-y-4">
            {specs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="glass rounded-lg p-5 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-primary/40 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-lg text-foreground mb-1">{spec.title}</div>
                    <p className="text-sm text-foreground/60 font-light leading-relaxed">{spec.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
