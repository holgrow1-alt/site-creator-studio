import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

export function TecnologiaSemente() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const layers = [
    {
      name: t("tecnologiaSemente.layer1Title"),
      color: "hsl(142 60% 38%)",
      border: "hsl(142 71% 48%)",
      desc: t("tecnologiaSemente.layer1Desc"),
      size: "w-72 h-72 md:w-96 md:h-96",
    },
    {
      name: t("tecnologiaSemente.layer2Title"),
      color: "hsl(142 70% 22%)",
      border: "hsl(142 71% 55%)",
      desc: t("tecnologiaSemente.layer2Desc"),
      size: "w-52 h-52 md:w-72 md:h-72",
    },
    {
      name: t("tecnologiaSemente.layer3Title"),
      color: "hsl(142 71% 10%)",
      border: "hsl(142 71% 60%)",
      desc: t("tecnologiaSemente.layer3Desc"),
      size: "w-32 h-32 md:w-48 md:h-48",
    },
  ];

  return (
    <section id="tecnologia-semente" className="relative py-8 md:py-10 overflow-hidden section-sage">
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
          <span>{t("tecnologiaSemente.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("tecnologiaSemente.sectionSub")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight mb-6"
            >
              {t("tecnologiaSemente.heading1")}<br />
              <span className="text-primary text-glow">{t("tecnologiaSemente.heading2")}</span><br />
              {t("tecnologiaSemente.heading3")}

            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-foreground/60 font-light mb-6 leading-relaxed"
            >
              {t("tecnologiaSemente.body")}
            </motion.p>

            <div className="space-y-4">
              {layers.map((layer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="glass rounded-lg p-5 flex items-start gap-4"
                >
                  <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ background: layer.border, boxShadow: `0 0 8px ${layer.border}` }} />
                  <div>
                    <div className="font-display text-xl text-foreground mb-1">{layer.name}</div>
                    <p className="text-sm text-foreground/60 font-light leading-relaxed">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 border-l-2 border-primary/60 pl-4"
            >
              <p className="text-sm text-foreground/70 italic leading-relaxed">
                "{t("tecnologiaSemente.quote")}"
              </p>
            </motion.div>
          </div>

          {/* Imagem da semente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
              <img
                src="/pdf1-semente-hardware.png"
                alt="Hardware da semente EcoDrones - biodrone de argila e nutrientes para dispersão aérea de sementes nativas por drones de plantio automatizado"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
