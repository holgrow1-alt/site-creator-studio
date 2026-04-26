import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, UserCircle } from "lucide-react";
import logo from "@/assets/logo-ecodrones.png";
import { useTranslation } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/LanguageContext";

const LANGS: { code: Language; flag: string; label: string }[] = [
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "en", flag: "🇺🇸", label: "EN" },
];

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const NAV_GROUPS: NavItem[] = [
  {
    label: "Sobre",
    children: [
      { label: "Início", href: "#hero" },
      { label: "Manifesto", href: "#manifesto" },
      { label: "Urgência Ambiental", href: "#urgencia" },
    ],
  },
  {
    label: "Tecnologia",
    children: [
      { label: "Como Funciona", href: "#como-funciona" },
      { label: "Engenharia do Drone", href: "#engenharia-drone" },
      { label: "Cérebro do Sistema", href: "#cerebro-ia" },
      { label: "Protocolo Técnico", href: "#protocolo" },
      { label: "Segurança", href: "#seguranca" },
      { label: "Tecnologia", href: "#tecnologia" },
    ],
  },
  {
    label: "Ecossistema",
    children: [
      { label: "Ecossistema", href: "#ecossistema" },
      { label: "Impacto em Cascata", href: "#impacto-cascata" },
      { label: "Coração do Ecossistema", href: "#coracao" },
      { label: "Inspiração Natural", href: "#inspiracao" },
      { label: "SEED Movement", href: "#seed-movement" },
    ],
  },
  {
    label: "Comunidade",
    children: [
      { label: "Comunidade", href: "#comunidade-rank" },
      { label: "App EcoDrones", href: "#app-ecodrones" },
      { label: "Embaixadores", href: "#embaixadores" },
      { label: "Engajamento", href: "#engajamento" },
    ],
  },
  {
    label: "Parceiros",
    children: [
      { label: "Parceiro Corporativo", href: "#parceiro-corporativo" },
      { label: "Modelo Econômico", href: "#modelo" },
      { label: "Parcerias ESG", href: "#esg" },
      { label: "Estratégia Regenerativa", href: "#estrategia-regenerativa" },
      { label: "Parceiros", href: "#parceiros" },
      { label: "Receba Pagamentos", href: "#receba" },
    ],
  },
  {
    label: "Mídia",
    children: [
      { label: "Vídeos", href: "#video-showcase" },
      { label: "Vídeos Externos", href: "#videos" },
      { label: "Manifesto PDF", href: "#manifesto-pdf" },
    ],
  },
  {
    label: "Apoie",
    children: [
      { label: "Doação Cripto", href: "#doacao-cripto" },
      { label: "Apoie o Projeto", href: "#apoie" },
    ],
  },
];

function smoothScroll(href: string) {
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function DesktopDropdown({ item, delay }: { item: NavItem; delay: number }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  if (!item.children) {
    return (
      <motion.a
        href={item.href}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        onClick={(e) => {
          e.preventDefault();
          smoothScroll(item.href!);
        }}
        className="text-xs uppercase tracking-[0.18em] font-medium text-foreground/70 hover:text-primary transition-colors duration-300 relative group py-2"
      >
        {item.label}
        <span className="absolute -bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
      </motion.a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="flex items-center gap-1 text-xs uppercase tracking-[0.18em] font-medium text-foreground/70 hover:text-primary transition-colors duration-300 relative group py-2"
      >
        {item.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3 h-3 opacity-60" />
        </motion.span>
        <span className="absolute -bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] z-50 bg-background/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Green accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="py-2">
              {item.children.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    smoothScroll(child.href);
                  }}
                  className="flex items-center px-4 py-2.5 text-xs text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 mr-2.5 group-hover:bg-primary transition-colors duration-200" />
                  {child.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileGroup({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          onClose();
          smoothScroll(item.href!);
        }}
        className="flex items-center py-3 text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors border-b border-border/30"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="border-b border-border/30">
      <button
        className="w-full flex items-center justify-between py-3 text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{item.label}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 opacity-60" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 flex flex-col gap-1">
              {item.children.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    smoothScroll(child.href);
                  }}
                  className="flex items-center py-2 text-xs text-foreground/60 hover:text-primary transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 mr-2 group-hover:bg-primary transition-colors" />
                  {child.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Nav() {
  const { t, language, setLanguage } = useTranslation();
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
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("#hero");
          }}
          className="flex items-center gap-3 group flex-shrink-0"
        >
          <div className="relative w-[80px] h-[80px] -my-3">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/40 transition-all duration-700" />
            <img
              src={logo}
              alt={t("nav.logoAlt")}
              width={80}
              height={80}
              className="relative w-full h-full object-contain"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5">
          {NAV_GROUPS.map((item, i) => (
            <DesktopDropdown key={item.label} item={item} delay={0.4 + i * 0.06} />
          ))}
        </nav>

        {/* Desktop right controls */}
        <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1 bg-background/60 backdrop-blur border border-border rounded-full px-2 py-1">
            {LANGS.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-xs px-2 py-0.5 rounded-full font-medium transition-all duration-300 ${
                  language === lang.code
                    ? "bg-primary text-white shadow-sm"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                title={lang.label}
              >
                <span className="mr-0.5">{lang.flag}</span>
                {lang.label}
              </motion.button>
            ))}
          </div>

          {/* Fundador — dedicated highlighted button */}
          <motion.a
            href="#fundador"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#fundador");
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/8 text-primary hover:bg-primary/15 hover:border-primary/70 transition-all duration-300 text-xs font-semibold uppercase tracking-wider"
          >
            <UserCircle className="w-3.5 h-3.5" />
            Fundador
          </motion.a>

          <a
            href="#apoie"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#apoie");
            }}
            className="btn-neon"
          >
            {t("nav.cta")} <span className="text-base"></span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={t("nav.menuAriaLabel")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col">
              {NAV_GROUPS.map((item) => (
                <MobileGroup key={item.label} item={item} onClose={() => setOpen(false)} />
              ))}

              {/* Mobile language selector */}
              <div className="flex items-center gap-2 pt-4 pb-2">
                {LANGS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setOpen(false);
                    }}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-all duration-300 ${
                      language === lang.code
                        ? "bg-primary text-white border-primary"
                        : "text-foreground/60 border-border hover:text-foreground"
                    }`}
                  >
                    {lang.flag} {lang.label}
                  </button>
                ))}
              </div>

              {/* Fundador — dedicated highlighted link (mobile) */}
              <a
                href="#fundador"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  smoothScroll("#fundador");
                }}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-primary/50 bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-primary/20"
              >
                <UserCircle className="w-4 h-4" />
                Fundador / CEO
              </a>

              <a
                href="#apoie"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  smoothScroll("#apoie");
                }}
                className="mt-2 btn-neon justify-center"
              >
                {t("nav.cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
