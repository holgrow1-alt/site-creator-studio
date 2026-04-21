import { motion } from "framer-motion";
import { Trees, Waves, Wind, Sprout } from "lucide-react";

const items = [
  { icon: Trees, num: "01", title: "Florestas", desc: "Reflorestamento por drones de precisão. 10.000 sementes/hora.", stat: "120k+ árvores" },
  { icon: Waves, num: "02", title: "Oceanos", desc: "Monitoramento de microplásticos e recifes em águas profundas.", stat: "8 bacias mapeadas" },
  { icon: Wind, num: "03", title: "Atmosfera", desc: "Sensores aéreos medindo emissões em tempo real.", stat: "24/7 telemetria" },
  { icon: Sprout, num: "04", title: "Biomas", desc: "IA classificando espécies e fluxos de fauna selvagem.", stat: "200+ espécies" },
];

export function Ecossistema() {
  return (
    <section id="ecossistema" className="relative py-32 md:py-48 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>/02</span><span className="w-12 h-px bg-primary" /><span>Ecossistema</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight max-w-5xl mb-20"
        >
          Quatro frentes.<br />
          Um <span className="text-primary text-glow">planeta</span>.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-background p-8 md:p-10 hover:bg-card transition-all duration-700 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-12">
                    <span className="font-mono text-xs text-primary/60 uppercase tracking-widest">{item.num}</span>
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl mb-4 text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-8 font-light">{item.desc}</p>
                  <div className="pt-4 border-t border-border/50 font-mono text-xs text-primary uppercase tracking-widest">
                    → {item.stat}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
