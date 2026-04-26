import { motion } from "framer-motion";
import { Download, FileText, Globe, Quote } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function ManifestoPDF() {
  const { t } = useTranslation();

  const pdfs = [
    {
      cover: "/pdf1-capa.png",
      alt: "Capa do Manifesto da Abundância Digital - EcoDrones Community - documento de reflorestamento com drone e tecnologia verde",
      title: t("manifestoPDF.pdf1Title"),
      subtitle: t("manifestoPDF.pdf1Badge"),
      lang: t("manifestoPDF.pdf1Lang"),
      langColor: "text-emerald-400",
      langBg: "bg-emerald-400/10 border-emerald-400/20",
      briefingBorder: "border-emerald-400/30",
      briefingBg: "bg-emerald-50/60",
      briefingAccent: "text-emerald-700",
      pages: t("manifestoPDF.pdf1Pages"),
      desc: t("manifestoPDF.pdf1Desc"),
      briefing: "Descubra como uma semente pode ser o hardware biológico mais poderoso do planeta. Este manifesto revela o protocolo técnico de plantio da EcoDrones, a janela de ouro para ação climática e como a economia circular transforma cada árvore em abundância digital. O documento que iniciou o movimento de 100 milhões de árvores.",
      href: "/Ecodrones_Digital_Abundance.pdf",
      cta: t("manifestoPDF.pdf1Cta"),
      icon: FileText,
      accent: "border-emerald-400/20",
      glow: "from-emerald-500/8",
    },
    {
      cover: "/pdf2-capa.png",
      alt: "Capa da Apresentação Institucional EcoDrones - drone de plantio automatizado, tecnologia de reflorestamento em escala",
      title: t("manifestoPDF.pdf2Title"),
      subtitle: t("manifestoPDF.pdf2Badge"),
      lang: t("manifestoPDF.pdf2Lang"),
      langColor: "text-sky-400",
      langBg: "bg-sky-400/10 border-sky-400/20",
      briefingBorder: "border-sky-400/30",
      briefingBg: "bg-sky-50/60",
      briefingAccent: "text-sky-700",
      pages: t("manifestoPDF.pdf2Pages"),
      desc: t("manifestoPDF.pdf2Desc"),
      briefing: "A infraestrutura completa por trás da revolução verde. Conheça os drones autônomos de plantio e colheita, o sistema de inteligência artificial que coordena enxames, o modelo econômico que gera renda para comunidades e o roadmap de expansão global. Tudo que você precisa saber sobre como a EcoDrones está reconstruindo o futuro.",
      href: "/EcoDrones_Community.pdf",
      cta: t("manifestoPDF.pdf2Cta"),
      icon: FileText,
      accent: "border-sky-400/20",
      glow: "from-sky-500/8",
    },
    {
      cover: "/pdf3-capa.png",
      alt: "Capa do Regenerative Ecosystem EcoDrones English version - bio-inspired drone engineering for reforestation at scale",
      title: t("manifestoPDF.pdf3Title"),
      subtitle: t("manifestoPDF.pdf3Badge"),
      lang: t("manifestoPDF.pdf3Lang"),
      langColor: "text-amber-400",
      langBg: "bg-amber-400/10 border-amber-400/20",
      briefingBorder: "border-amber-400/30",
      briefingBg: "bg-amber-50/60",
      briefingAccent: "text-amber-700",
      pages: t("manifestoPDF.pdf3Pages"),
      desc: t("manifestoPDF.pdf3Desc"),
      briefing: "The investor-grade technical edition. Explore bio-inspired drone engineering, the SEED Movement, tokenized carbon credits, corporate sponsorship models, precision harvesting mechanics, and the cascade impact on biodiversity. How EcoDrones scales regeneration from local communities to global ecosystems.",
      href: "/Ecodrones_Regenerative_Ecosystem.pdf",
      cta: t("manifestoPDF.pdf3Cta"),
      icon: Globe,
      accent: "border-amber-400/20",
      glow: "from-amber-400/8",
    },
  ];

  return (
    <section id="manifesto-pdf" className="relative py-8 md:py-10 overflow-hidden section-cream">
      {/* Nature accent glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-emerald-500/6 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-amber-400/5 blur-[100px] rounded-full" />
      </div>
      <div className="blob-green-tl opacity-40" />
      <div className="blob-gold-br opacity-40" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("manifestoPDF.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("manifestoPDF.sectionSub")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-4xl leading-tight tracking-tight"
          >
            {t("manifestoPDF.heading")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 font-light leading-relaxed"
          >
            {t("manifestoPDF.subhead")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pdfs.map((pdf, i) => {
            const Icon = pdf.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass rounded-2xl overflow-hidden border ${pdf.accent} group relative`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pdf.glow} to-transparent pointer-events-none`} />

                {/* PDF Cover Preview */}
                <div className="relative overflow-hidden bg-foreground/5 aspect-[3/4] border-b border-border/50">
                  <img
                    src={pdf.cover}
                    alt={pdf.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  {/* Language badge */}
                  <div className={`absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest ${pdf.langColor} ${pdf.langBg} border px-2 py-1 rounded-md backdrop-blur-sm`}>
                    {pdf.lang}
                  </div>
                  {/* Page count */}
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-foreground/50 bg-background/70 px-2 py-1 rounded backdrop-blur-sm">
                    {pdf.pages}
                  </div>
                </div>

                {/* Card content */}
                <div className="relative p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${pdf.accent} bg-white/5`}>
                      <Icon className={`w-4 h-4 ${pdf.langColor}`} />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/40 mb-0.5">{pdf.subtitle}</div>
                      <h3 className="font-display text-xl text-foreground leading-tight">{pdf.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/55 font-light leading-relaxed mb-5">{pdf.desc}</p>

                  {/* Briefing block */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`relative mb-5 rounded-xl border ${pdf.briefingBorder} ${pdf.briefingBg} px-4 py-3`}
                  >
                    <Quote className={`w-4 h-4 mb-1.5 opacity-60 ${pdf.briefingAccent}`} />
                    <p className={`text-[13px] leading-relaxed font-medium ${pdf.briefingAccent} opacity-90`}>
                      {pdf.briefing}
                    </p>
                  </motion.div>

                  <motion.a
                    href={pdf.href}
                    className="inline-flex items-center gap-2 w-full justify-center btn-neon text-sm py-2.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download className="w-4 h-4" />
                    {pdf.cta}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 glass rounded-xl p-6 text-center border border-primary/20"
        >
          <p className="text-sm text-foreground/50 font-mono uppercase tracking-widest">
            {t("manifestoPDF.footerStrip")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
