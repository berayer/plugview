import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import 'vfonts/FiraSans.css'
import { setupRouter } from './router'

/**
 * 安装vue实例
 */
async function setupApp() {
  const app = createApp(App)
  await setupRouter(app)
  fixCssClash()
  app.mount('#app')
}

/**
 * 修复Tailwind CSS 的 Preflight 导致 naive-ui 的样式被覆盖,具体参考
 * @link https://www.naiveui.com/zh-CN/light/docs/style-conflict
 */
function fixCssClash() {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

setupApp()
