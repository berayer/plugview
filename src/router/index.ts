import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

/** 安装vue-router */
export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
