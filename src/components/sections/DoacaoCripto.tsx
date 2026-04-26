import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Check, Leaf } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

// ── Wallet addresses (swap these out when real wallets are ready) ──────────
const WALLETS: Record<string, string> = {
  BTC: "BTC_WALLET_PLACEHOLDER",
  ETH: "ETH_WALLET_PLACEHOLDER",
  USDC: "USDC_WALLET_PLACEHOLDER",
};

const CRYPTO_CONFIGS = [
  {
    id: "BTC",
    symbol: "BTC",
    color: "#F7931A",
    bg: "#FFF7ED",
    border: "#F7931A40",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z" fill="#F7931A"/>
        <path d="M17.214 10.275c.238-1.594-.977-2.45-2.64-3.022l.54-2.163-1.317-.329-.525 2.107c-.347-.087-.703-.168-1.058-.249l.529-2.121-1.316-.329-.54 2.163c-.287-.065-.568-.13-.841-.197l.001-.007-1.816-.454-.35 1.406s.977.224.956.238c.533.133.629.486.613.766l-.614 2.465c.037.009.085.023.138.044l-.14-.035-.86 3.448c-.065.161-.23.403-.601.311.013.019-.957-.239-.957-.239l-.654 1.508 1.714.428c.319.08.632.163.94.242l-.546 2.19 1.315.328.54-2.165c.36.098.71.188 1.052.274l-.537 2.155 1.316.329.546-2.187c2.25.426 3.943.254 4.655-1.782.574-1.637-.028-2.582-1.212-3.198.862-.199 1.511-.766 1.683-1.937zm-3.013 4.222c-.408 1.637-3.167.752-4.061.529l.724-2.904c.895.224 3.763.667 3.337 2.375zm.409-4.242c-.373 1.493-2.674.734-3.421.548l.657-2.634c.747.186 3.152.533 2.764 2.086z" fill="white"/>
      </svg>
    ),
  },
  {
    id: "ETH",
    symbol: "ETH",
    color: "#627EEA",
    bg: "#EEF2FF",
    border: "#627EEA40",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="12" fill="#627EEA"/>
        <path d="M12 3.5L6 12.3l6 3.6 6-3.6L12 3.5z" fill="white" fillOpacity="0.8"/>
        <path d="M6 12.3l6 8.8 6-8.8-6 3.6-6-3.6z" fill="white"/>
      </svg>
    ),
  },
  {
    id: "USDC",
    symbol: "USDC",
    color: "#2775CA",
    bg: "#EFF6FF",
    border: "#2775CA40",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="12" fill="#2775CA"/>
        <path d="M15.4 13.5c0-1.8-1.1-2.4-3.2-2.7-1.5-.2-1.8-.6-1.8-1.3s.5-1.2 1.6-1.2c.9 0 1.5.3 1.8 1.1.1.2.2.3.4.3h.9c.2 0 .4-.2.3-.4C15 8.1 14 7.3 12.6 7.1V6c0-.2-.2-.4-.4-.4h-.8c-.2 0-.4.2-.4.4v1.1C9.4 7.4 8.4 8.5 8.4 9.8c0 1.7 1.1 2.3 3.2 2.6 1.4.3 1.8.6 1.8 1.4 0 .8-.7 1.3-1.8 1.3-1.4 0-1.9-.6-2.1-1.3-.1-.2-.2-.3-.4-.3H8.3c-.2 0-.4.2-.3.4C8.3 15 9.3 16 10.9 16.2V17.4c0 .2.2.4.4.4h.8c.2 0 .4-.2.4-.4v-1.1c1.6-.3 2.9-1.3 2.9-2.8z" fill="white"/>
      </svg>
    ),
  },
];

const AMOUNTS = ["$10", "$25", "$50", "$100"];

export function DoacaoCripto() {
  const { t } = useTranslation();

  const CRYPTOS = [
    { ...CRYPTO_CONFIGS[0], label: t("doacaoCripto.btcLabel") },
    { ...CRYPTO_CONFIGS[1], label: t("doacaoCripto.ethLabel") },
    { ...CRYPTO_CONFIGS[2], label: t("doacaoCripto.usdcLabel") },
  ];

  const [selectedCrypto, setSelectedCrypto] = useState(CRYPTOS[0]);
  const [selectedAmount, setSelectedAmount] = useState<string | null>("$25");
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [copied, setCopied] = useState(false);

  const walletAddress = WALLETS[selectedCrypto.id];

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="doacao-cripto"
      className="relative py-8 md:py-10 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #fefce8 50%, #eff6ff 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)" }} />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #fef08a 0%, transparent 70%)" }} />
      </div>

      <div className="container relative max-w-5xl mx-auto px-4">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.3em]"
          style={{ color: "#16a34a" }}
        >
          <span>{t("doacaoCripto.sectionLabel")}</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px block"
            style={{ background: "#16a34a" }}
          />
          <span>{t("doacaoCripto.sectionSub")}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-xl md:text-2xl leading-tight tracking-tight mb-4 text-gray-800">
            Doe com{" "}
            <span style={{ color: "#16a34a" }}>Cripto</span>,{" "}
            plante <span style={{ color: "#d97706" }}>Florestas</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-xl mx-auto">
            {t("doacaoCripto.subhead")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">

          {/* LEFT: Selector + amount + form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >

            {/* Crypto selector */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/60">
              <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">{t("doacaoCripto.selectorLabel")}</p>
              <div className="grid grid-cols-3 gap-3">
                {CRYPTOS.map((crypto) => (
                  <motion.button
                    key={crypto.id}
                    onClick={() => setSelectedCrypto(crypto)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 font-medium text-sm"
                    style={{
                      background: selectedCrypto.id === crypto.id ? crypto.bg : "#fff",
                      borderColor: selectedCrypto.id === crypto.id ? crypto.color : "#e5e7eb",
                      color: selectedCrypto.id === crypto.id ? crypto.color : "#6b7280",
                      boxShadow: selectedCrypto.id === crypto.id ? `0 4px 20px ${crypto.color}25` : "none",
                    }}
                  >
                    {crypto.icon}
                    <span className="font-mono text-xs">{crypto.symbol}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Amount selector */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/60">
              <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">{t("doacaoCripto.amountLabel")}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {AMOUNTS.map((amt) => (
                  <motion.button
                    key={amt}
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    className="py-2 rounded-xl text-sm font-semibold border-2 transition-all duration-200"
                    style={{
                      background: selectedAmount === amt ? "#16a34a" : "#f9fafb",
                      borderColor: selectedAmount === amt ? "#16a34a" : "#e5e7eb",
                      color: selectedAmount === amt ? "#fff" : "#374151",
                      boxShadow: selectedAmount === amt ? "0 4px 16px #16a34a30" : "none",
                    }}
                  >
                    {amt}
                  </motion.button>
                ))}
              </div>
              <input
                type="text"
                placeholder={t("doacaoCripto.amountPlaceholder")}
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors bg-white/60"
              />
            </div>

            {/* Optional donor info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/60">
              <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">{t("doacaoCripto.donorLabel")}</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder={t("doacaoCripto.donorName")}
                  value={donorName}
                  disabled={anonymous}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors bg-white/60 disabled:opacity-40 disabled:cursor-not-allowed"
                />
                <input
                  type="email"
                  placeholder={t("doacaoCripto.donorEmail")}
                  value={donorEmail}
                  disabled={anonymous}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors bg-white/60 disabled:opacity-40 disabled:cursor-not-allowed"
                />
                <label className="flex items-center gap-3 cursor-pointer select-none group">
                  <div
                    onClick={() => setAnonymous(!anonymous)}
                    className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0"
                    style={{
                      background: anonymous ? "#16a34a" : "#fff",
                      borderColor: anonymous ? "#16a34a" : "#d1d5db",
                    }}
                  >
                    {anonymous && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    {t("doacaoCripto.donorAnon")}
                  </span>
                </label>
              </div>
            </div>

            {/* Bankei link */}
            <p className="text-sm text-gray-500 text-center">
              {t("doacaoCripto.bankeiLink")}{" "}
              <a
                href="https://bankei.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 transition-colors"
                style={{ color: "#2775CA" }}
              >
                {t("doacaoCripto.bankeiLinkCta")}
              </a>
            </p>
          </motion.div>

          {/* RIGHT: QR + address */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >

            {/* QR Card */}
            <div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md border-2 flex flex-col items-center text-center"
              style={{ borderColor: selectedCrypto.border || "#e5e7eb" }}
            >
              {/* Crypto badge */}
              <div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold"
                style={{ background: selectedCrypto.bg, color: selectedCrypto.color }}
              >
                {selectedCrypto.icon}
                <span>{selectedCrypto.label}</span>
              </div>

              {/* QR Code */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCrypto.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 rounded-2xl mb-6 shadow-inner"
                  style={{ background: selectedCrypto.bg }}
                >
                  <QRCodeSVG
                    value={walletAddress}
                    size={200}
                    bgColor="transparent"
                    fgColor={selectedCrypto.color}
                    level="M"
                    includeMargin={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Wallet address */}
              <p className="text-xs text-gray-500 font-mono mb-3 uppercase tracking-widest">{t("doacaoCripto.walletLabel")}</p>
              <div
                className="w-full rounded-xl px-4 py-3 font-mono text-xs break-all text-center mb-4 border"
                style={{ background: selectedCrypto.bg, color: selectedCrypto.color, borderColor: selectedCrypto.border }}
              >
                {walletAddress}
              </div>

              {/* Copy button */}
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{
                  background: copied ? "#16a34a" : selectedCrypto.color,
                  color: "#fff",
                  boxShadow: `0 6px 24px ${selectedCrypto.color}40`,
                }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" /> {t("doacaoCripto.copiedButton")}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" /> {t("doacaoCripto.copyButton")}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Motivational message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/60 text-center"
            >
              <Leaf className="w-8 h-8 mx-auto mb-3" style={{ color: "#16a34a" }} />
              <p className="text-base font-medium text-gray-700 leading-relaxed">
                {t("doacaoCripto.motivational1")}
              </p>
              <p className="text-sm text-gray-500 mt-2 font-light">
                {t("doacaoCripto.motivational2")}
              </p>
            </motion.div>

            {/* Instructions */}
            <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/60">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest mb-3">{t("doacaoCripto.howToLabel")}</p>
              <ol className="space-y-1.5 text-sm text-amber-800">
                <li className="flex gap-2">{t("doacaoCripto.howTo1")}</li>
                <li className="flex gap-2">{t("doacaoCripto.howTo2")}</li>
                <li className="flex gap-2">{t("doacaoCripto.howTo3")}</li>
                <li className="flex gap-2">{t("doacaoCripto.howTo4")}</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
