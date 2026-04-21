import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 2000;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString("pt-BR")}{suffix}</span>;
}

const stats = [
  { num: 120000, suffix: "+", label: "Árvores plantadas", unit: "Reflorestamento ativo" },
  { num: 24, suffix: "", label: "Biomas monitorados", unit: "Cobertura global" },
  { num: 2400000, suffix: "ha", label: "Mapeados por IA", unit: "Visão computacional" },
  { num: 87, suffix: "%", label: "Redução de emissões", unit: "Operação carbono-negativa" },
];

export function Impacto() {
  return (
    <section id="impacto" className="relative py-32 md:py-48 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>/04</span><span className="w-12 h-px bg-primary" /><span>Impacto Real</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight max-w-5xl mb-20"
        >
          Os números<br />
          <span className="text-primary text-glow">não mentem</span>.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary/60 mb-6">/{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display text-5xl md:text-7xl text-primary text-glow leading-none mb-4">
                <Counter to={s.num} suffix={s.suffix} />
              </div>
              <div className="text-base font-medium text-foreground mb-1">{s.label}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">{s.unit}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
