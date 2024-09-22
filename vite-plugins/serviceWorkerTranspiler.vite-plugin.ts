import { Plugin } from 'vite'
import esbuild from 'esbuild'
import path from "path";
import fs from 'fs'

interface IPluginOptions {
  entryDir: string;
  outDir?: string;
}

export function serviceWorkerTranspiler({ entryDir, outDir }: IPluginOptions): Plugin {
  
  return {
    name: "service-worker-transpiler",
    apply: 'build',
    enforce: 'post',
    async transformIndexHtml() {
      const files = fs.readdirSync(path.join(process.cwd(), entryDir)).map((file) => {
        const splittedFilename = file.split('.');
        splittedFilename.pop();
        return splittedFilename.join('.');
      });

      esbuild.buildSync({
        minify: true,
        bundle: true,
        entryPoints: files.map((file) => path.join(process.cwd(), entryDir, file)),
        outdir: path.join(process.cwd(), 'build', outDir ?? 'service-workers'),
      })
    }
  }
}