import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#impacto", label: "Impacto" },
  { href: "#comunidade", label: "Comunidade" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-[108px] h-[108px] -my-8">
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full group-hover:bg-primary/50 transition-all duration-700" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/40 bg-background flex items-center justify-center overflow-hidden">
              <span className="font-display text-4xl text-primary text-glow">ED</span>
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-glow" />
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </nav>

        <a
          href="#pix"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest font-bold hover:shadow-neon transition-all duration-500 hover:scale-105"
        >
          Apoiar <span className="text-base">→</span>
        </a>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest text-foreground/80 hover:text-primary py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#pix"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest font-bold"
              >
                Apoiar →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
