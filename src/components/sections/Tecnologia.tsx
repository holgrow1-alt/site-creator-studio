import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import drone from "@/assets/drone-ecodrones.png";

export function Tecnologia() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="tecnologia" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div style={{ y: y2 }} className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-primary/30 bg-card">
              <img
                src={drone}
                alt="Drone EcoDrones para semeadura aérea"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-primary">
                <span>● ECODRONES</span>
                <span>UAV / SEMEADOR</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-mono text-xs text-primary/80 mb-2">DRONE.UNIT</div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-foreground">SEMEADURA AÉREA</span>
                  <span className="text-primary">PRECISÃO</span>
                </div>
              </div>
              <div className="absolute inset-x-0 h-px bg-primary/60 shadow-[0_0_20px_hsl(var(--primary))]"
                style={{ animation: "scan-line 4s linear infinite" }} />
            </div>
          </motion.div>

          <motion.div style={{ y: y1 }} className="space-y-8">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <span>/03</span><span className="w-12 h-px bg-primary" /><span>Tecnologia</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tight"
            >
              Drones a<br />
              serviço da<br />
              <span className="text-primary text-glow">floresta</span>.
            </motion.h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed max-w-md">
              Equipamentos especializados em semeadura aérea, capazes de alcançar áreas
              de difícil acesso e plantar com velocidade e precisão muito além do plantio manual.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
