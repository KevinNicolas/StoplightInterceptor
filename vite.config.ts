import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { serviceWorkerTranspiler } from './vite-plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    serviceWorkerTranspiler({ entryDir: './service-workers', outDir: 'service-worker' })
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        popup: "./popup.html",
        options: "./options.html",
      },
    },
    // lib: {
    //   entry: './service-workers/*',
    //   fileName: (_, filename) => `service-workers/${filename}.js`,
    //   formats: ['cjs']
    // },
  },
});
