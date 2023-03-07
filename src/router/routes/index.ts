import type { RouteRecordRaw } from 'vue-router'

/**
 * 静态路由菜单
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/_base/Login.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/_base/404.vue')
  },
  {
    path: '/500',
    name: 'ServerError',
    component: () => import('@/views/_base/500.vue')
  },
  {
    path: '/index',
    name: 'MainLayout',
    component: () => import('@/layouts/MainLayout.vue')
  },
  {
    path: '/:path(.*)*',
    name: 'Other',
    redirect: (to) => {
      return { path: '/index', query: { url: to.path, query: JSON.stringify(to.query) } }
    }
  }
]
