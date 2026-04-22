import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo-ecodrones.png";
import drone from "@/assets/drone-ecodrones.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const droneY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const droneScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden grain">
      {/* Drone background */}
      <motion.div style={{ y: droneY, scale: droneScale }} className="absolute inset-0 z-0">
        <img
          src={drone}
          alt="Drone EcoDrones para reflorestamento"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/70" />
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
          <span>Drones · Reflorestamento · Comunidade</span>
          <span className="w-12 h-px bg-primary" />
        </motion.div>

        {/* Logo gigante real */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 animate-float"
        >
          <div className="absolute inset-0 bg-primary/40 blur-[120px] rounded-full animate-pulse-glow" />
          <img
            src={logo}
            alt="EcoDrones Community"
            className="relative w-[320px] md:w-[520px] h-auto drop-shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.85] text-center text-foreground tracking-tight"
        >
          ECO<span className="text-primary text-glow">DRONES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-2xl text-center text-base md:text-lg text-foreground/70 font-light leading-relaxed"
        >
          Comunidade de pilotos e voluntários usando drones para reflorestar o planeta.
          <br />
          <span className="text-primary font-mono text-xs uppercase tracking-widest mt-3 inline-block">
            Meta: 100.000 árvores plantadas
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#comunidade" className="btn-neon animate-pulse-glow">
            Apoiar a missão →
          </a>
          <a
            href="#manifesto"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-1"
          >
            Conhecer o projeto
          </a>
        </motion.div>

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
    </section>
  );
}
