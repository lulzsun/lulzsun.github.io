import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngQuant from 'imagemin-pngquant'
import imageminWebp from 'imagemin-webp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    ssr({ prerender: true }),
    {
      ...viteImagemin({
        plugins: {
          jpg: imageminMozjpeg(),
          png: imageminPngQuant()
        },
        makeWebp: {
          plugins: {
            jpg: imageminWebp(),
            png: imageminWebp(),
          },
        }
      }),
      apply: 'build',
    }
  ],
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'src/assets',
})