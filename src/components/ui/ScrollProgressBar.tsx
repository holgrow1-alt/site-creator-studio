import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[150] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(142 71% 45%), hsl(162 80% 40%), hsl(45 93% 47%))",
        boxShadow: "0 0 8px hsl(142 71% 45% / 0.5), 0 0 16px hsl(142 71% 45% / 0.2)",
      }}
    />
  );
}
