import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <div className="relative flex flex-col items-center gap-6">
        <div className="font-display text-6xl md:text-8xl text-[#00ff88] tracking-wide" style={{ textShadow: '0 0 40px rgba(0,255,136,0.6), 0 0 80px rgba(0,255,136,0.3)' }}>
          ECODRONES
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00ff88]/70">
          Carregando · Reflorestamento
        </div>
      </div>
    </div>
  );
}
