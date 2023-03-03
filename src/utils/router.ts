/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { router } from '@/router'

/**
 * 根据菜单加载异步路由
 */
export const loadAsyncRoutes = (menus: GlobalMenu[]) => {
  const views = import.meta.glob('/src/views/**/index.vue')
  const routes = addRoutes(menus, views)
  return routes
}

function addRoutes(menus: GlobalMenu[], views: Record<string, () => Promise<unknown>>) {
  for (const i in menus) {
    if (menus[i].children && menus[i].children!.length > 0) {
      addRoutes(menus[i].children!, views)
    } else {
      router.addRoute('MainLayout', {
        path: menus[i].path,
        component: views['/src/views' + menus[i].path + '/index.vue']
      })
    }
  }
}
