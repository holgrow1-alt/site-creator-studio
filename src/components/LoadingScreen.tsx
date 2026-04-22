import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-out opacity-0 pointer-events-none"
      style={{ animation: "fadeOut 0.8s ease-out 1.4s forwards" }}
    >
      <style>{`
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
      
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
        <div className="font-display text-6xl md:text-8xl text-primary text-glow-strong tracking-wide">
          ECODRONES
        </div>

        <div className="w-48 h-px bg-border overflow-hidden">
          <div 
            className="h-full w-full bg-primary shadow-[0_0_20px_hsl(var(--primary))] animate-pulse"
          />
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/70">
          Carregando · Reflorestamento
        </div>
      </div>
    </div>
  );
}
