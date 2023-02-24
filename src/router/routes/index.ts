import type { RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/index',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/test',
        component: () => import('@/views/Test.vue')
      }
    ]
  }
]
