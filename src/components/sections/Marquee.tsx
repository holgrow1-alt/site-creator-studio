import { useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface Props { words: string[]; }

export function Marquee({ words }: Props) {
  const items = [...words, ...words, ...words, ...words];
  const controls = useAnimationControls();
  const [fast, setFast] = useState(false);

  const startAnim = (duration: number) => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration, ease: "linear", repeat: Infinity, repeatType: "loop" },
    });
  };

  // Start on mount with normal speed
  const started = useRef(false);
  if (!started.current) {
    started.current = true;
    // defer so controls are ready
    setTimeout(() => startAnim(28), 0);
  }

  const handleMouseEnter = () => {
    if (fast) return;
    setFast(true);
    startAnim(9);
  };

  const handleMouseLeave = () => {
    setFast(false);
    startAnim(28);
  };

  return (
    <div
      className="relative overflow-hidden border-y border-primary/20 bg-background py-1.5 cursor-default select-none z-40"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      data-nosnippet
    >
      <motion.div className="flex whitespace-nowrap" animate={controls}>
        {items.map((w, i) => (
          <span
            key={i}
            className="font-display text-base md:text-lg text-foreground/90 mx-4 flex items-center gap-3"
          >
            {w}
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-neon inline-block" />
          </span>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
}
