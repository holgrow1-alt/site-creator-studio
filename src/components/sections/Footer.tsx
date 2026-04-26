import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, MessageCircle, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo-ecodrones.png";
import { useTranslation } from "@/i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/5516993986738";
const LINKEDIN_URL = "https://linkedin.com/in/rafael-guillen-1b864b322";
const INSTAGRAM_URL = "https://instagram.com/holgrow_agro_frequency";

const EMAIL_URL = "mailto:ceorafael@ecodronescommunity.com";

export function Footer() {
  const { t } = useTranslation();

  const contactLinks = [
    { href: EMAIL_URL, Icon: Mail, label: "Email", sub: "ceorafael@ecodronescommunity.com" },
    { href: WHATSAPP_URL, Icon: MessageCircle, label: t("footer.contactLabel"), sub: t("footer.whatsapp") },
    { href: LINKEDIN_URL, Icon: Linkedin, label: "LinkedIn", sub: t("footer.linkedin") },
    { href: INSTAGRAM_URL, Icon: Instagram, label: "Instagram", sub: t("footer.instagram") },
  ];

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const ghostY = useTransform(scrollYProgress, [0, 1], [80, -20]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.02, 0.05, 0.07]);

  const headingWords = [[t("footer.heading1")], [t("footer.heading2")]];

  return (
    <footer id="footer" ref={ref} className="relative bg-background border-t border-primary/20 pt-16 pb-12 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
            {t("footer.sectionLabel")}
          </div>

          <h2 className="font-display text-2xl md:text-3xl leading-[0.85] tracking-tighter mb-6">
            {headingWords.map((lineWords, li) => (
              <motion.span
                key={li}
                className={`block ${li === 1 ? "text-primary text-glow" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: li * 0.15 } },
                }}
              >
                {lineWords.map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="inline-block mr-[0.15em]"
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8 pt-8 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt={t("nav.logoAlt")} className="w-20 h-20 object-contain" />
              <div>
                <div className="font-display text-2xl text-foreground">{t("footer.brand1")}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{t("footer.brand2")}</div>
              </div>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed font-light max-w-md mb-4">
              {t("footer.description")}
            </p>
            <p className="text-xs text-foreground/40 font-mono">
              {t("footer.author")}<br />
              {t("footer.authorSub")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">{t("footer.contactLabel")}</div>
            <div className="flex flex-col gap-4">
              {contactLinks.map(({ href, Icon, label, sub }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-lg flex items-center gap-4 p-4"
                  whileHover={{ x: 8, borderColor: "hsl(142 71% 45% / 0.4)" }}
                  transition={{ duration: 0.25 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-12 h-12 border border-primary/40 rounded flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{label}</div>
                    <div className="text-sm text-foreground group-hover:text-primary transition-colors">{sub}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-border">
          <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            {t("footer.copyright")}
          </div>
          <div className="font-mono text-[10px] text-foreground/30">
            {t("footer.seo")}
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: ghostY, opacity: ghostOpacity }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display text-3xl md:text-4xl text-primary leading-none pointer-events-none select-none whitespace-nowrap"
      >
        ECODRONES
      </motion.div>
    </footer>
  );
}
