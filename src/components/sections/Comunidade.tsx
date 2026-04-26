import { motion, useReducedMotion } from "framer-motion";
import { Trophy, TreePine, Shield, Star, Zap, Leaf, Wallet } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const levelColors: Record<string, string> = {
  Bronze: "hsl(25 80% 60%)",
  Prata: "hsl(0 0% 70%)",
  Ouro: "hsl(45 100% 60%)",
  Diamante: "hsl(200 100% 70%)",
};

export function Comunidade() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const medals = [
    { icon: Trophy, name: t("comunidade.medal1Title"), level: "Bronze", color: "hsl(25 80% 60%)", req: t("comunidade.medal1Req") },
    { icon: TreePine, name: t("comunidade.medal2Title"), level: "Prata", color: "hsl(0 0% 70%)", req: t("comunidade.medal2Req") },
    { icon: Shield, name: t("comunidade.medal3Title"), level: "Ouro", color: "hsl(45 100% 60%)", req: t("comunidade.medal3Req") },
    { icon: Star, name: t("comunidade.medal4Title"), level: "Diamante", color: "hsl(200 100% 70%)", req: t("comunidade.medal4Req") },
  ];

  const topUsers = [
    { rank: 1, name: t("comunidade.user1Name"), trees: 12840, level: "Diamante", avatar: "AS" },
    { rank: 2, name: t("comunidade.user2Name"), trees: 9320, level: "Diamante", avatar: "CM" },
    { rank: 3, name: t("comunidade.user3Name"), trees: 7150, level: "Ouro", avatar: "FL" },
    { rank: 4, name: t("comunidade.user4Name"), trees: 4890, level: "Ouro", avatar: "JP" },
    { rank: 5, name: t("comunidade.user5Name"), trees: 2340, level: "Prata", avatar: "MC" },
  ];

  const walletStats = [
    { label: t("comunidade.stat1Label"), value: t("comunidade.stat1Value"), color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" },
    { label: t("comunidade.stat2Label"), value: t("comunidade.stat2Value"), color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
    { label: t("comunidade.stat3Label"), value: t("comunidade.stat3Value"), color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
    { label: t("comunidade.stat4Label"), value: t("comunidade.stat4Value"), color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20" },
  ];

  return (
    <section id="comunidade-rank" className="relative py-8 md:py-10 overflow-hidden section-white">
      {/* Nature accent background strip */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/8 blur-[100px] rounded-full" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          <span>{t("comunidade.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-primary block"
          />
          <span>{t("comunidade.sectionSub")}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl leading-tight tracking-tight max-w-5xl mb-4"
        >
          {t("comunidade.heading1")} <span className="text-primary text-glow">{t("comunidade.heading2")}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-foreground/60 font-light mb-8 max-w-2xl"
        >
          {t("comunidade.subhead")}
        </motion.p>

        {/* Digital Wallet Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-8 glass rounded-2xl p-6 md:p-8 border border-emerald-400/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-amber-400/5" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">{t("comunidade.walletTitle")}</div>
                  <div className="font-display text-sm text-foreground">{t("comunidade.walletSub")}</div>
                </div>
              </div>
              <div className="font-display text-2xl text-emerald-400 mb-1" style={{ textShadow: "0 0 20px rgba(52,211,153,0.4)" }}>
                {t("comunidade.walletValue")}
              </div>
              <div className="font-mono text-xs text-foreground/40 uppercase tracking-widest">{t("comunidade.walletCurrency")}</div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {walletStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`rounded-xl p-4 border ${stat.bg}`}
                >
                  <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/40 mb-1">{stat.label}</div>
                  <div className={`font-display text-2xl ${stat.color}`}>{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Verified Carbon Credits + Premium Incentive */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-xl p-6 border border-emerald-400/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/6 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">{t("comunidade.carbonTitle")}</div>
              </div>
              <h3 className="font-display text-2xl mb-3 text-foreground">{t("comunidade.carbonSubTitle")}</h3>
              <p className="text-sm text-foreground/60 font-light leading-relaxed mb-4">
                {t("comunidade.carbonDesc")}
              </p>
              <div className="font-mono text-xs text-emerald-400 bg-emerald-400/10 rounded-lg px-3 py-2 inline-block">
                {t("comunidade.carbonLoop")}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass rounded-xl p-6 border border-amber-400/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/6 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-amber-400">{t("comunidade.premiumTitle")}</div>
              </div>
              <h3 className="font-display text-2xl mb-3 text-foreground">{t("comunidade.premiumSubTitle")}</h3>
              <p className="text-sm text-foreground/60 font-light leading-relaxed mb-4">
                {t("comunidade.premiumDesc")}
              </p>
              <div className="flex gap-2">
                {["+10%", "+25%", "+50%"].map((bonus, i) => (
                  <div key={i} className="font-mono text-xs text-amber-400 bg-amber-400/10 rounded px-2 py-1 border border-amber-400/20">
                    {bonus}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ranking */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-6">{t("comunidade.rankingLabel")}</div>
            <div className="space-y-3">
              {topUsers.map((user, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`glass rounded-lg p-4 flex items-center gap-4 group ${i === 0 ? "border border-primary/40 glow-border" : ""}`}
                >
                  <div className={`font-display text-2xl w-8 text-center ${i === 0 ? "text-primary" : "text-foreground/40"}`}>
                    {user.rank}
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                    style={{ background: `${levelColors[user.level]}30`, border: `2px solid ${levelColors[user.level]}60`, color: levelColors[user.level] }}
                  >
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground text-sm">{user.name}</div>
                    <div className="font-mono text-xs" style={{ color: levelColors[user.level] }}>{user.level}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-lg text-primary">{user.trees.toLocaleString("pt-BR")}</div>
                    <div className="font-mono text-[10px] text-foreground/40">árvores</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-xs text-foreground/30 font-mono"
            >
              {t("comunidade.rankingDisclaimer")}
            </motion.p>
          </div>

          {/* Medalhas */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-6">{t("comunidade.medalsLabel")}</div>
            <div className="grid grid-cols-2 gap-4">
              {medals.map((medal, i) => {
                const Icon = medal.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="glass rounded-lg p-5 text-center group cursor-default"
                    style={{ border: `1px solid ${medal.color}30` }}
                  >
                    <motion.div
                      className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                      style={{ background: `${medal.color}20`, border: `2px solid ${medal.color}60` }}
                      animate={reduced ? {} : { scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 + i * 0.5, ease: "easeInOut" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: medal.color }} />
                    </motion.div>
                    <div className="font-display text-base text-foreground mb-1">{medal.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: medal.color }}>
                      {medal.level}
                    </div>
                    <div className="text-xs text-foreground/40">{medal.req}</div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 glass rounded-lg p-5 border border-primary/20"
            >
              <p className="text-sm text-foreground/70 font-light text-center">
                {t("comunidade.levelProgression")}
              </p>
              <p className="text-xs text-foreground/40 text-center mt-2 font-mono">
                {t("comunidade.levelSub")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
