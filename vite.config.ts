import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './build'

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  return {
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      port: Number(viteEnv.VITE_PORT)
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
})
