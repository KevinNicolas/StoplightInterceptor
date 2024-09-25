import type { AliasOptions } from "vite";
import path from "path";
import fs from 'fs'
import { compilerOptions } from './tsconfig.app.json'

function _getPaths() {
  const paths: Record<string, string> = {};
  const tsPaths = compilerOptions.paths;

  Object.entries(tsPaths).forEach(([key, [value]]) => {
    paths[key.replace('/*', '')] = value.replace('/*', '')
  })

  return paths;
}

export function getViteAliases() {
  _getPaths();
  const aliases: AliasOptions = {};
  Object.entries(_getPaths()).forEach(([key, value]) => {
    aliases[key] = path.resolve(__dirname, value);
  });
  return aliases
}

export async function getEsbuildAliases() {
  const aliases: Record<string, string> = {};

  Object.entries(_getPaths()).forEach(([key, value]) => {
    const files = fs.readdirSync(value, { recursive: true }) as string[];
    files.forEach((filepath) => {
      const pathWithioutExtension = filepath.replace(/(\.[\w]+)$/, '');
      aliases[`${key}/${pathWithioutExtension}`] = path.resolve(__dirname, `${value}/${pathWithioutExtension}`)
    })
  })
  return aliases
}