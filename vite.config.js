import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
 base: "/",
// التوجيه الافتراضي السليم للمسارات عند التشغيل
  plugins: [
    react(),
    tailwindcss(), // المفسر الرسمي والوحيد لـ Tailwind v4 لمنع تداخل الأبعاد
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      "@assets": path.resolve(process.cwd(), "src/assets"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});
