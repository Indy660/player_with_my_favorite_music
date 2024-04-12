import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@public': path.resolve(__dirname, 'public')
      }
    },
    // TODO: похоже не работает с .js https://github.com/vitejs/vite/discussions/14649
    // server: {
    //   hmr: { overlay: false }
    // },
    // define: {
    //   BASE_URL: JSON.stringify(process.env.VITE_BASE_URL)
    // },
    base: process.env.NODE_ENV === 'production' ? env.VITE_BASE_URL : '/'
    // define: {
    //   __APP_ENV__: JSON.stringify(env.VITE_BASE_URL)
    // }
  }
})
