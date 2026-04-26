import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-ecodrones.png";
import { useTranslation } from "@/i18n/LanguageContext";

export function LoadingScreen() {
  const { t } = useTranslation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2200);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #d1fae5 100%)" }}
        >
          {/* Radial glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.img
              src={logo}
              alt={t("loading.logoAlt")}
              className="w-28 md:w-36 h-auto"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ filter: "drop-shadow(0 4px 20px rgba(34,197,94,0.4))" }}
            />

            {/* Word mark */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-7xl tracking-wide"
              style={{ color: "#16a34a", textShadow: "0 2px 20px rgba(34,197,94,0.4)" }}
            >
              ECODRONES
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em]"
              style={{ color: "#16a34a99" }}
            >
              {t("loading.tagline")}
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-48 md:w-64 h-px rounded-full overflow-hidden mt-2"
              style={{ background: "rgba(34,197,94,0.2)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div
                className="h-full rounded-full bg-primary"
                style={{ boxShadow: "0 0 12px rgba(34,197,94,0.6)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.0, duration: 1.0, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
