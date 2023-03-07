import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './build'
import { resolve } from 'path'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  return {
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      port: Number(viteEnv.VITE_PORT),
      proxy: {
        '/v2': {
          target: viteEnv.VITE_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/v2/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': pathResolve('./src')
      }
    }
  }
})
