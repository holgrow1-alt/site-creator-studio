import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
                src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=900&q=80"
                alt="Drone autônomo sobrevoando floresta"
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-primary">
                <span>● REC</span>
                <span>UAV-08 / 1247m</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-mono text-xs text-primary/80 mb-2">DRONE.STATUS</div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-foreground">BATTERY 87%</span>
                  <span className="text-primary">TARGET LOCKED</span>
                </div>
              </div>
              {/* Scan effect */}
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
              Enxames<br />
              <span className="text-primary text-glow">autônomos</span><br />
              de precisão.
            </motion.h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed max-w-md">
              Modelos de visão computacional treinados em mais de 2 milhões de hectares.
              Cada drone aprende com o enxame em tempo real.
            </p>

            <div className="grid grid-cols-2 gap-px bg-border mt-12">
              {[
                { k: "10k", v: "sementes/h" },
                { k: "99.7%", v: "precisão IA" },
                { k: "2.4M", v: "ha mapeados" },
                { k: "<2s", v: "latência" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background p-6"
                >
                  <div className="font-display text-4xl md:text-5xl text-primary text-glow">{s.k}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mt-2">{s.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
