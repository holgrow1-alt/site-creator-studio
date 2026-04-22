import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* radial neon glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, hsl(var(--primary) / 0.25) 0%, hsl(var(--background)) 70%)",
            }}
          />

          {/* grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.05em" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-8xl text-primary text-glow-strong"
            >
              ECODRONES
            </motion.div>

            <div className="w-48 h-px bg-border overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full w-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]"
              />
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/70">
              Carregando · Reflorestamento
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
