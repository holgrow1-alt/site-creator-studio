import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
    target: "esnext",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core first
          if (id.includes("node_modules/react")) return "vendor-react";
          if (id.includes("node_modules/react-dom")) return "vendor-react";
          // Framer Motion
          if (id.includes("framer-motion")) return "vendor-framer";
          // Heavy 3D/particles libs
          if (id.includes("@splinetool")) return "vendor-3d";
          if (id.includes("@tsparticles")) return "vendor-particles";
          // Radix UI
          if (id.includes("@radix-ui")) return "vendor-radix";
          // Other vendor
          if (id.includes("node_modules")) return "vendor-misc";
        },
      },
    },
  },
}));
