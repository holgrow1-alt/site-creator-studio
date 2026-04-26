import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Globe,
  ExternalLink,
  Quote,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const specialties = [
  { label: "Desenvolvedor Agritech (Web2+Web3)", color: "#22c55e" },
  { label: "Sistemas Regenerativos", color: "#16a34a" },
  { label: "Radiestesia & Radiônica", color: "#0ea5e9" },
  { label: "Eletrocultura & Geobiologia", color: "#8b5cf6" },
  { label: "Bioenergia & Ondas Escalares", color: "#f59e0b" },
  { label: "Professor de Agrofloresta", color: "#10b981" },
  { label: "Homeopatia Agrícola", color: "#ec4899" },
];

const socialLinks = [
  {
    href: "mailto:ceorafael@ecodronescommunity.com",
    Icon: Mail,
    label: "Email",
    sub: "Enviar e-mail",
    color: "#22c55e",
  },
  {
    href: "https://wa.me/5516993986738",
    Icon: MessageCircle,
    label: "WhatsApp",
    sub: "+55 16 99398-6738",
    color: "#25d366",
  },
  {
    href: "https://instagram.com/holgrow_agro_frequency",
    Icon: Instagram,
    label: "Instagram",
    sub: "@holgrow_agro_frequency",
    color: "#e1306c",
  },
  {
    href: "https://linkedin.com/in/rafael-guillen-1b864b322",
    Icon: Linkedin,
    label: "LinkedIn",
    sub: "rafael-guillen-1b864b322",
    color: "#0a66c2",
  },
  {
    href: "https://www.holgrow.com",
    Icon: Globe,
    label: "Holgrow",
    sub: "www.holgrow.com",
    color: "#10b981",
  },
];

export function Fundador() {
  const { t } = useTranslation();

  return (
    <section id="fundador" className="relative py-8 md:py-10 overflow-hidden section-cream">
      {/* Decorative blobs */}
      <div className="blob-sky-tr opacity-50" />
      <div className="blob-green-bl opacity-40" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("fundador.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("fundador.sectionSub")}</span>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 items-start">

          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Glowing border frame */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div
                className="absolute -inset-1 rounded-2xl blur-sm opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(142 71% 45% / 0.7), hsl(45 96% 53% / 0.5), hsl(142 71% 45% / 0.4))",
                }}
              />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl ring-1 ring-primary/30">
                <img
                  src="/rafael-guillen-ceo.jpg"
                  alt="Rafael F. M. Guillen — CEO & Fundador EcoDrones Community"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-white text-xl drop-shadow">Rafael F. M. Guillen</div>
                  <div className="font-mono text-xs text-primary uppercase tracking-widest drop-shadow">
                    CEO & Fundador — EcoDrones Community
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-md mx-auto lg:mx-0 glass rounded-xl px-5 py-4 border border-primary/20"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">Filosofia</div>
              <p className="text-sm text-foreground/70 italic font-light">
                "Pequenas ações geram grandes impactos"
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Bio & info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Name & title */}
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                {t("fundador.foundedLabel")}
              </div>
              <h2 className="font-display text-xl md:text-2xl leading-[0.9] tracking-tight mb-3">
                {t("fundador.heading1")}{" "}
                <span
                  className="text-primary"
                  style={{ textShadow: "0 0 40px hsl(142 71% 45% / 0.35)" }}
                >
                  {t("fundador.heading2")}
                </span>
              </h2>
              <div className="font-mono text-sm text-foreground/50">
                CEO & Fundador — EcoDrones Community &nbsp;|&nbsp; CEO — Holgrow
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-3 text-foreground/65 font-light leading-relaxed text-[0.95rem]">
              <p>
                Cientista, pesquisador e empreendedor com mais de 20 anos de experiência no setor agro. Especialista em sistemas regenerativos, radiestesia, radiônica, eletrocultura e geobiologia.
              </p>
              <p>
                Atuou internacionalmente nos EUA e Europa em agricultura holística e sustentável. Reconhecido mundialmente por transformar fazendas em ecossistemas equilibrados e produtivos utilizando tecnologias inovadoras como o Quantec Pro.
              </p>
              <p>
                Como CEO da Holgrow, lidera projetos de frequências no ecossistema agrícola. Como fundador da EcoDrones Community, une drones autônomos, IA e ciência regenerativa na missão de plantar 100 milhões de árvores.
              </p>
            </div>

            {/* Specialties badges */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-3">
                Especialidades
              </div>
              <div className="flex flex-wrap gap-2">
                {specialties.map((sp, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border"
                    style={{
                      color: sp.color,
                      borderColor: sp.color + "40",
                      background: sp.color + "12",
                    }}
                  >
                    {sp.label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-3">
                Contato & Redes
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {socialLinks.map(({ href, Icon, label, sub, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all hover:shadow-sm"
                    style={{ borderColor: color + "30", background: color + "08" }}
                    whileHover={{ x: 4, borderColor: color + "60" }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: color + "18" }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">
                        {label}
                      </div>
                      <div
                        className="text-xs truncate font-light transition-colors group-hover:font-normal"
                        style={{ color: "inherit" }}
                      >
                        {sub}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <motion.a
              href="https://www.holgrow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink className="w-4 h-4" />
              Conheça mais sobre o fundador
            </motion.a>
          </motion.div>
        </div>

        {/* Quote card — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(142 71% 20% / 1) 0%, hsl(180 60% 15% / 1) 100%)",
          }}
        >
          <div className="px-4 py-6 md:px-8 md:py-8 relative">
            <Quote className="w-8 h-8 text-primary/50 mb-5" />
            <p className="font-display text-lg md:text-xl text-white leading-tight mb-6 max-w-4xl">
              "O planeta não precisa de mais promessas; ele precisa de{" "}
              <span className="text-primary" style={{ textShadow: "0 0 20px hsl(142 71% 45% / 0.4)" }}>
                algoritmos que plantam
              </span>{" "}
              e{" "}
              <span className="text-primary" style={{ textShadow: "0 0 20px hsl(142 71% 45% / 0.4)" }}>
                drones que protegem.
              </span>
              "
            </p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-5">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40 flex-shrink-0">
                <img
                  src="/rafael-guillen-ceo.jpg"
                  alt="Rafael Guillen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-display text-white">Rafael F. M. Guillen</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  CEO & Fundador — EcoDrones Community
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
