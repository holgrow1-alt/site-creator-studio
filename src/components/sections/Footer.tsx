import { motion } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-ecodrones.png";

// TODO: substituir pelos contatos reais
const WHATSAPP_URL = "https://wa.me/5500000000000";
const LINKEDIN_URL = "https://www.linkedin.com/in/seu-perfil";

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

        <div className="grid lg:grid-cols-2 gap-16 mb-24 pt-16 border-t border-border">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="EcoDrones" className="w-20 h-20 object-contain" />
              <div>
                <div className="font-display text-2xl text-foreground">EcoDrones</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Community</div>
              </div>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed font-light max-w-md">
              Comunidade de pilotos e voluntários usando drones para reflorestar o planeta.
              Meta: 100.000 árvores nativas plantadas.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">Contato</div>
            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-lg flex items-center gap-4 p-4"
              >
                <div className="w-12 h-12 border border-primary/40 rounded flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">WhatsApp</div>
                  <div className="text-sm text-foreground group-hover:text-primary transition-colors">Fale com a gente</div>
                </div>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-lg flex items-center gap-4 p-4"
              >
                <div className="w-12 h-12 border border-primary/40 rounded flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">LinkedIn</div>
                  <div className="text-sm text-foreground group-hover:text-primary transition-colors">Conecte-se</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-border">
          <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            © 2026 EcoDrones Community
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 font-display text-[20rem] md:text-[30rem] text-primary/[0.03] leading-none pointer-events-none select-none">
        ECODRONES
      </div>
    </footer>
  );
}
