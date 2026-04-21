import { motion } from "framer-motion";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 md:py-48 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-12 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span className="font-mono">/01</span>
          <span className="w-12 h-px bg-primary" />
          <span>Manifesto</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            A Terra não pede<br />
            mais tempo.<br />
            <span className="text-primary text-glow">Pede ação.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 text-lg text-foreground/70 leading-relaxed font-light pt-8"
          >
            <p>
              Somos uma comunidade de pilotos, cientistas e visionários
              operando enxames de drones autônomos para <span className="text-primary">regenerar</span> ecossistemas em escala planetária.
            </p>
            <p>
              Não esperamos políticas. Não dependemos de promessas.
              <span className="text-foreground font-medium"> Plantamos, monitoramos e devolvemos.</span>
            </p>
          </motion.div>
        </div>

        {/* Particle Text Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mt-32 relative rounded-lg overflow-hidden border border-primary/20 bg-background"
        >
          <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest text-primary/60">
            ⬢ Visual Manifesto
          </div>
          <ParticleTextEffect words={["ECODRONES", "REGENERAR", "AGIR", "IMPACTO", "FUTURO"]} />
        </motion.div>
      </div>
    </section>
  );
}
