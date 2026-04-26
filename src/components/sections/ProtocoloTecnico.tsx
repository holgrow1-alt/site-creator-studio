import { motion } from "framer-motion";
import { Droplets, Flame, Leaf, Shield, Wind, Zap } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function ProtocoloTecnico() {
  const { t } = useTranslation();

  const ingredients = [
    { icon: Droplets, name: t("protocolo.ing1"), role: t("protocolo.ing1Sub") },
    { icon: Flame, name: t("protocolo.ing2"), role: t("protocolo.ing2Sub") },
    { icon: Leaf, name: t("protocolo.ing3"), role: t("protocolo.ing3Sub") },
    { icon: Zap, name: t("protocolo.ing4"), role: t("protocolo.ing4Sub") },
    { icon: Wind, name: t("protocolo.ing5"), role: t("protocolo.ing5Sub") },
  ];

  const mineralizacao = [
    { fase: t("protocolo.min1Number"), title: t("protocolo.min1Title"), desc: t("protocolo.min1Desc") },
    { fase: t("protocolo.min2Number"), title: t("protocolo.min2Title"), desc: t("protocolo.min2Desc") },
    { fase: t("protocolo.min3Number"), title: t("protocolo.min3Title"), desc: t("protocolo.min3Desc") },
  ];

  return (
    <section id="protocolo" className="relative py-8 md:py-10 overflow-hidden section-sage">
      <div className="blob-green-tl opacity-50" />
      <div className="blob-gold-br opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("protocolo.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("protocolo.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight max-w-5xl mb-6"
        >
          {t("protocolo.heading1")}<br />
          <span className="text-primary text-glow">{t("protocolo.heading2")}</span>
        </motion.h2>

        {/* PDF Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 mb-8"
        >
          <img
            src="/pdf1-protocolo-matriz.png"
            alt="Matriz do protocolo técnico EcoDrones - mapeamento de bioma, compatibilidade de espécies e roteirização de drones para plantio automatizado sustentável"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-primary/80 bg-background/70 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
            {t("protocolo.imageBadge")}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Passo 1 — Matriz Líquida */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{t("protocolo.step01Label")}</div>
              <h3 className="font-display text-lg md:text-xl text-foreground mb-2">{t("protocolo.step01Title")}</h3>
              <p className="text-sm text-foreground/60 font-light">{t("protocolo.step01Desc")}</p>
            </motion.div>

            <div className="space-y-3">
              {ingredients.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="glass rounded-lg p-4 flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 border border-primary/40 rounded flex items-center justify-center bg-primary/5 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{item.name}</div>
                      <div className="font-mono text-xs text-primary/70">{item.role}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Passos 2-3 — Mineralização e Cura */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{t("protocolo.steps2and3Label")}</div>
              <h3 className="font-display text-lg md:text-xl text-foreground mb-2">{t("protocolo.steps2and3Title")}</h3>
              <p className="text-sm text-foreground/60 font-light">{t("protocolo.steps2and3Desc")}</p>
            </motion.div>

            <div className="relative space-y-4">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-primary/20" />
              {mineralizacao.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 w-10 h-10 border border-primary/60 rounded-full flex items-center justify-center bg-background font-mono text-xs text-primary">
                    {item.fase}
                  </div>
                  <div className="glass rounded-lg p-5">
                    <div className="font-display text-xl text-foreground mb-1">{item.title}</div>
                    <p className="text-sm text-foreground/60 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 glass rounded-lg p-5 border border-primary/30"
            >
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-2">{t("protocolo.resultLabel")}</div>
              <p className="text-sm text-foreground/70">
                {t("protocolo.resultText")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
