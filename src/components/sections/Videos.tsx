import { useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Play, ExternalLink } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const VIDEOS = [
  {
    id: "25QrKjOM1uU",
    title: "EcoDrones — Reflorestamento com Drones",
    desc: "Como usamos tecnologia de ponta para plantar sementes e restaurar florestas em larga escala.",
    channel: "@rafaelmartiniano",
    channelUrl: "https://www.youtube.com/@rafaelmartiniano",
  },
  {
    id: "tbMkJ_2FaR4",
    title: "Missão SEED — Regeneração do Planeta",
    desc: "A visão do projeto: drones, comunidade e ciência unindo forças pela biodiversidade.",
    channel: "@rafaelmartiniano",
    channelUrl: "https://www.youtube.com/@rafaelmartiniano",
  },
  {
    id: "-IztG8FXRAo",
    title: "Tecnologia de Plantio Autônomo",
    desc: "Conheça o sistema inteligente de dispersão de sementes e mapeamento biológico dos drones EcoDrones.",
    channel: "@RafaelMartiniano",
    channelUrl: "https://www.youtube.com/@RafaelMartiniano-o5i",
  },
];

export function Videos() {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="videos" className="relative py-8 md:py-10 overflow-hidden section-mint">
      <div className="blob-green-tl opacity-40" />
      <div className="blob-sky-tr opacity-30" />
      <div className="container">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("videos.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("videos.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-4xl mb-8"
        >
          {t("videos.heading1")}<br />
          <span className="text-primary text-glow">{t("videos.heading2")}</span><br />
          {t("videos.heading3")}
        </motion.h2>

        {/* Grade de 3 videos */}
        <div className="grid md:grid-cols-3 gap-6">
          {VIDEOS.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="glass rounded-xl overflow-hidden flex flex-col"
            >
              {/* Thumbnail / Player */}
              <div className="relative aspect-video bg-black group cursor-pointer"
                onClick={() => setPlaying(playing === v.id ? null : v.id)}>
                {playing === v.id ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
                      }}
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        className="w-14 h-14 rounded-full bg-red-600/90 backdrop-blur flex items-center justify-center shadow-xl"
                      >
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </motion.div>
                    </div>
                    {/* YouTube badge */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 rounded px-2 py-0.5">
                      <Youtube className="w-3 h-3 text-red-500" />
                      <span className="text-[10px] text-white font-mono">YouTube</span>
                    </div>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <p className="text-sm font-semibold text-foreground leading-snug">{v.title}</p>
                <p className="text-xs text-foreground/60 leading-relaxed flex-1">{v.desc}</p>
                <a
                  href={v.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] font-mono text-primary/70 hover:text-primary transition-colors mt-1"
                >
                  <Youtube className="w-3 h-3" />
                  {v.channel}
                  <ExternalLink className="w-2.5 h-2.5 ml-auto" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
