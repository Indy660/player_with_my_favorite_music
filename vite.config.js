import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@public': path.resolve(__dirname, 'public'),
    }
  },
  base:
    process.env.NODE_ENV === "production"
      ? "/player_with_my_favorite_music/"
      : "/",
})
