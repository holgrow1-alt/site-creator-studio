import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="comunidade" className="relative bg-background border-t border-primary/20 pt-32 pb-12 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-8">
            /05 — Junte-se ao movimento
          </div>
          <h2 className="font-display text-6xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tighter mb-16">
            REGENERE<br />
            <span className="text-primary text-glow">CONOSCO</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 mb-24 pt-16 border-t border-border">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[88px] h-[88px] rounded-full border border-primary/40 flex items-center justify-center bg-primary/5">
                <span className="font-display text-3xl text-primary text-glow">ED</span>
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">EcoDrones</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Comunidade Global</div>
              </div>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed font-light max-w-xs">
              Tecnologia autônoma a serviço da regeneração planetária.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">Navegar</div>
            <ul className="space-y-3 text-sm">
              {["Manifesto", "Ecossistema", "Tecnologia", "Impacto", "Comunidade"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-foreground/70 hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="pix">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">Apoiar via PIX</div>
            <div className="aspect-square w-40 bg-foreground p-3 mb-4">
              <div className="w-full h-full bg-background grid grid-cols-8 grid-rows-8 gap-px p-2">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={Math.random() > 0.5 ? "bg-foreground" : ""} />
                ))}
              </div>
            </div>
            <div className="font-mono text-xs text-foreground/70">pix@ecodrones.org</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-border">
          <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            © 2026 EcoDrones · Operação carbono-negativa
          </div>
          <div className="flex gap-4">
            {[Instagram, Youtube, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-500"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 font-display text-[20rem] md:text-[30rem] text-primary/[0.03] leading-none pointer-events-none select-none">
        ECODRONES
      </div>
    </footer>
  );
}
