import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Play, Youtube, Quote } from "lucide-react";

interface VideoItem {
  id: string;
  embedUrl: string;
  title: string;
  description: string;
  briefing: string;
  channel: string;
  channelUrl: string;
}

const videos: VideoItem[] = [
  {
    id: "25QrKjOM1uU",
    embedUrl: "https://www.youtube.com/embed/25QrKjOM1uU",
    title: "ECODRONES COMMUNITY",
    description:
      "Enquanto o planeta pede socorro, a inovação responde com ação. A ECODRONES une drones autônomos, inteligência artificial e ciência regenerativa para plantar esperança em escala.",
    briefing:
      "Enquanto o planeta pede socorro, a inovação responde com ação. Assista como a EcoDrones une drones autônomos, inteligência artificial e ciência regenerativa para plantar esperança em escala. Cada real vira semente, cada semente vira floresta.",
    channel: "Rafael Martiniano",
    channelUrl: "https://www.youtube.com/@rafaelmartiniano",
  },
  {
    id: "tbMkJ_2FaR4",
    embedUrl: "https://www.youtube.com/embed/tbMkJ_2FaR4",
    title: "ECODRONES COMMUNITY STARTUP",
    description:
      "ECODRONES is a global urban regeneration and reforestation platform that combines autonomous drone swarms, AI, and tokenized carbon credits to plant trees at unprecedented scale. Mission: 100 million trees.",
    briefing:
      "The global pitch. See how EcoDrones combines autonomous drone swarms, AI, and tokenized carbon credits to plant 100 million trees. Urban regeneration meets cutting-edge technology in this vision of the future.",
    channel: "Rafael Martiniano",
    channelUrl: "https://www.youtube.com/@rafaelmartiniano",
  },
  {
    id: "-IztG8FXRAo",
    embedUrl: "https://www.youtube.com/embed/-IztG8FXRAo",
    title: "Você acreditaria que um drone pode plantar 10x mais árvores que um ser humano?",
    description:
      "Bem-vindo ao futuro do reflorestamento! Os EcoDrones estão aqui para revolucionar a forma como plantamos e salvamos nosso planeta. Cada segundo conta. Cada árvore importa. Descubra como estamos plantando 100 MILHÕES de árvores automaticamente.",
    briefing:
      "Você acreditaria que um drone pode plantar 10x mais árvores que um ser humano? Descubra o futuro do reflorestamento automatizado e como os EcoDrones estão revolucionando a forma como salvamos nosso planeta.",
    channel: "Rafael Martiniano",
    channelUrl: "https://www.youtube.com/@RafaelMartiniano-o5i",
  },
];

const CALL_WORDS = ["Cada", "voo", "planta", "esperança"];

function AnimatedCallout() {
  const reduced = useReducedMotion();
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
      className="font-display text-3xl md:text-4xl leading-tight tracking-tight text-center"
      aria-label="Cada voo planta esperança"
    >
      {CALL_WORDS.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.22em] ${
            i === CALL_WORDS.length - 1
              ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-400 to-amber-400"
              : "text-foreground"
          }`}
          variants={
            reduced
              ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
              : {
                  hidden: { opacity: 0, y: 50, rotateX: -20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                  },
                }
          }
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}

function VideoCard({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col gap-4">
      {/* Briefing block — above the video */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl border border-emerald-300/40 bg-gradient-to-br from-emerald-50/80 to-green-50/60 px-5 py-4 shadow-sm"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Quote className="w-5 h-5 text-emerald-500 opacity-70" />
          </div>
          <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-emerald-900/80">
            {video.briefing}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full"
      >
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-[3px] rounded-2xl z-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(142 71% 45% / 0.7), hsl(45 93% 47% / 0.6), hsl(162 80% 40% / 0.5))",
        }}
        animate={
          reduced
            ? {}
            : {
                opacity: [0.6, 1, 0.6],
                filter: ["blur(3px)", "blur(6px)", "blur(3px)"],
              }
        }
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Card body */}
      <div className="relative z-10 rounded-2xl overflow-hidden bg-white shadow-[0_20px_80px_-10px_rgba(34,197,94,0.25)]">
        {/* Video player area */}
        <div className="relative aspect-video bg-gradient-to-br from-emerald-50 to-green-100 overflow-hidden">
          {playing ? (
            <iframe
              src={`${video.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <>
              {/* Thumbnail overlay */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Play button */}
              <motion.button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                whileHover="hover"
                initial="idle"
                aria-label="Assistir vídeo"
              >
                <motion.div
                  variants={{
                    idle: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20"
                    animate={
                      reduced
                        ? {}
                        : {
                            scale: [1, 1.8, 1.8],
                            opacity: [0.7, 0, 0],
                          }
                    }
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/10"
                    animate={
                      reduced
                        ? {}
                        : {
                            scale: [1, 2.2, 2.2],
                            opacity: [0.5, 0, 0],
                          }
                    }
                    transition={{ repeat: Infinity, duration: 2.5, delay: 0.4, ease: "easeOut" }}
                  />

                  {/* Icon container */}
                  <div className="relative w-20 h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <Play
                      className="w-8 h-8 text-emerald-600 fill-emerald-600 ml-1"
                      strokeWidth={0}
                    />
                  </div>
                </motion.div>
              </motion.button>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-white font-mono text-xs uppercase tracking-widest opacity-80 mb-1">
                    {video.channel}
                  </p>
                  <p className="text-white font-display text-lg leading-tight font-semibold drop-shadow">
                    {video.title}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-red-600/90 backdrop-blur-sm rounded-md px-2 py-1">
                  <Youtube className="w-3.5 h-3.5 text-white" />
                  <span className="text-white font-mono text-[10px] uppercase tracking-widest">
                    YouTube
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Card footer */}
        <div className="p-6 md:p-8 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed max-w-xl font-light">
              {video.description}
            </p>
            <motion.a
              href={video.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold text-white shadow-[0_4px_20px_rgba(34,197,94,0.35)] transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(135deg, hsl(142 71% 40%), hsl(162 80% 38%))",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 40px rgba(34,197,94,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Youtube className="w-4 h-4" />
              Inscreva-se no Canal
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export function VideoShowcase() {
  return (
    <section
      id="video-showcase"
      className="relative py-8 md:py-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(60 60% 97%) 0%, hsl(100 50% 96%) 30%, hsl(138 60% 97%) 65%, hsl(45 80% 96%) 100%)",
      }}
    >
      {/* Decorative leaf blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(142 71% 60% / 0.5) 0%, transparent 70%)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(45 93% 60% / 0.5) 0%, transparent 70%)",
          transform: "translate(40%, 40%)",
        }}
      />
      <div
        className="absolute top-1/2 right-12 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(162 80% 50% / 0.6) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      {/* Floating seed particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 4 + (i % 3) * 3,
            height: 4 + (i % 3) * 3,
            left: `${12 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            background:
              i % 2 === 0
                ? "hsl(142 71% 45% / 0.3)"
                : "hsl(45 93% 47% / 0.3)",
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.7,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary justify-center"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>/Assista</span>
          <Youtube className="w-3.5 h-3.5" />
          <span>EcoDrones em Ação</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px bg-primary block"
          />
        </motion.div>

        {/* Callout headline */}
        <div className="mb-8 md:mb-10">
          <AnimatedCallout />
        </div>

        {/* Video grid / single / three-layout */}
        {videos.length === 1 ? (
          <VideoCard video={videos[0]} />
        ) : videos.length === 3 ? (
          <div className="space-y-4">
            {/* Featured — full width */}
            <div className="max-w-4xl mx-auto">
              <VideoCard video={videos[0]} />
            </div>
            {/* Two supporting — side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              <VideoCard video={videos[1]} />
              <VideoCard video={videos[2]} />
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
