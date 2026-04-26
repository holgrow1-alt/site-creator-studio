import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && viteCompression({ algorithm: "gzip", ext: ".gz" }),
    mode === "production" &&
      viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Spline — very heavy, separate chunk
          if (id.includes("@splinetool")) return "vendor-spline";
          // tsparticles
          if (id.includes("@tsparticles") || id.includes("tsparticles"))
            return "vendor-particles";
          // Framer Motion
          if (id.includes("framer-motion")) return "vendor-framer";
          // Recharts / D3 deps
          if (id.includes("recharts") || id.includes("d3-"))
            return "vendor-charts";
          // Radix UI primitives
          if (id.includes("@radix-ui")) return "vendor-radix";
          // React core
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom"))
            return "vendor-react";
          // All other node_modules
          if (id.includes("node_modules")) return "vendor-misc";
        },
      },
    },
  },
}));
