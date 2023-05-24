import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
    },
  },
});
