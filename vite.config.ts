import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { serviceWorkerTranspiler } from './vite-plugins'
import { getViteAliases, getEsbuildAliases } from './aliases.config'

getEsbuildAliases();
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: getViteAliases(),
  },
  plugins: [
    vue(),
    serviceWorkerTranspiler({ serviceWorkerFile: './src/service-worker/serviceworker.ts' })
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        popup: "./popup.html",
        options: "./options.html",
      },
    },
  },
});
