import { motion } from "framer-motion";

export function Impacto() {
  const goal = 100000;
  const progress = 0; // ainda não começamos

  return (
    <section id="impacto" className="relative py-32 md:py-48 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>/04</span><span className="w-12 h-px bg-primary" /><span>Nossa Meta</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight max-w-5xl mb-20"
        >
          Plantar <span className="text-primary text-glow">100 mil</span><br />
          árvores.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
              Nosso objetivo é claro e mensurável: usar drones para plantar
              <span className="text-primary font-medium"> 100.000 árvores nativas</span> em áreas degradadas.
            </p>
            <p className="text-base text-foreground/60 font-light leading-relaxed">
              Estamos no início da jornada. Cada apoiador, cada piloto e cada doação nos aproxima da meta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-background border border-primary/30 p-10 md:p-12"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-4">/ Progresso</div>
            <div className="font-display text-7xl md:text-9xl text-primary text-glow leading-none mb-2">
              {progress.toLocaleString("pt-BR")}
            </div>
            <div className="font-mono text-sm text-foreground/50 mb-8">
              de {goal.toLocaleString("pt-BR")} árvores
            </div>

            <div className="h-2 bg-border rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(progress / goal) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]"
              />
            </div>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/40">
              <span>0%</span>
              <span>{((progress / goal) * 100).toFixed(2)}% concluído</span>
              <span>100%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
