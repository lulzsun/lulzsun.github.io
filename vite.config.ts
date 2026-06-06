import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import sharp from 'sharp';
import fs from 'fs';
import { glob } from 'glob';
import path from "path";

function webpConverterPlugin() {
  return {
    name: 'webp-converter',
    apply: 'build' as const,
    async closeBundle() {
      const images = await glob('public/**/*.{png,jpg,jpeg,gif}');
      for (const file of images) {
        const outPath = path.resolve(
          process.cwd(),
          'dist/client',
          path.relative(path.resolve(process.cwd(), 'public'), path.resolve(process.cwd(), file))
        ).replace(/\.(png|jpe?g|gif)$/i, '.webp');

        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        await sharp(file).webp({ quality: 80 }).toFile(outPath);
        console.log(`Converted: ${file} → ${outPath}`);
      }
    }
  };
}

export default defineConfig({
  plugins: [
    vike(),
    react(),
    tailwindcss(),
    webpConverterPlugin(),
  ],
});
