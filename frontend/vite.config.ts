import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "./", // IMPORTANT FOR DESKTOP

  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "named",
        namedExport: "ReactComponent"
      }
    })
  ],

  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true
  },

  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" }
  }
});
