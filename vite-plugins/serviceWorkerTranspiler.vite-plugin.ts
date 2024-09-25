import { Plugin } from 'vite'
import esbuild from 'esbuild'
import path from "path";
import { getEsbuildAliases } from '../aliases.config';
// import { aliasPath } from 'esbuild-plugin-alias-path'

interface IPluginOptions {
  serviceWorkerFile: string;
  outfile?: string;
}

export function serviceWorkerTranspiler({ serviceWorkerFile, outfile }: IPluginOptions): Plugin {
  
  return {
    name: "service-worker-transpiler",
    apply: 'build',
    enforce: 'post',
    async transformIndexHtml() {
      const alias = await getEsbuildAliases();
      await esbuild.build({
        minify: true,
        bundle: true,
        entryPoints: [path.join(process.cwd(), serviceWorkerFile)],
        outfile: path.join(process.cwd(), outfile ?? 'build/serviceWorker.js'),
        alias,
      })
    }
  }
}