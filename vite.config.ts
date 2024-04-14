import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      icons: path.resolve(__dirname, "./src/icons"),
      ui: path.resolve(__dirname, "./src/ui"),
    },
  },
  server: {
    port: 8000,
  },
});
