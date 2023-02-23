import type { RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/index',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/main',
    component: () => import('@/layouts/MainLayout.vue')
  }
]
