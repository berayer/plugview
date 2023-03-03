import { createPinia } from 'pinia'
import type { App } from 'vue'

/**
 * 安装全局状态管理插件 pinia
 */
export function setupStore(app: App) {
  const store = createPinia()
  app.use(store)
}

export * from './app'
export * from './tab'
