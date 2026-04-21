import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden grain">
      {/* Video background */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&q=80"
        >
          <source src="https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[1] opacity-20" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex flex-col items-center justify-center container py-32">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 mb-12 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span className="w-12 h-px bg-primary" />
          <span>Drones · IA · Regeneração</span>
          <span className="w-12 h-px bg-primary" />
        </motion.div>

        {/* Logo gigante */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-primary/40 blur-[120px] rounded-full animate-pulse-glow" />
          <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border-2 border-primary/50 bg-background/40 backdrop-blur-sm flex items-center justify-center animate-float">
            <div className="absolute inset-4 rounded-full border border-primary/30" />
            <div className="absolute inset-8 rounded-full border border-primary/20" />
            <span className="font-display text-[8rem] md:text-[12rem] leading-none gradient-text text-glow-strong">ED</span>
            {/* Rotating ring */}
            <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: "20s" }} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.2" strokeDasharray="2 4" opacity="0.5" />
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-center text-foreground tracking-tight"
        >
          ECO<span className="text-primary text-glow">DRONES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-2xl text-center text-base md:text-lg text-foreground/70 font-light leading-relaxed"
        >
          Tecnologia autônoma a serviço da regeneração planetária.
          <br />
          <span className="text-primary font-mono text-xs uppercase tracking-widest mt-3 inline-block">
            Floresta · Oceano · Atmosfera
          </span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary/70"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner markers */}
      <div className="absolute top-24 left-6 z-10 font-mono text-[10px] text-primary/60 uppercase tracking-widest">
        <div>Lat: -23.5505°</div>
        <div>Lng: -46.6333°</div>
      </div>
      <div className="absolute top-24 right-6 z-10 font-mono text-[10px] text-primary/60 uppercase tracking-widest text-right">
        <div>System: Online</div>
        <div className="flex items-center gap-1 justify-end">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Regenerating
        </div>
      </div>
    </section>
  );
}
