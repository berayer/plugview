import type { RouteRecordRaw } from 'vue-router'

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
    path: '/index',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/system/userManagement',
        component: () => import('@/views/system/UserManagement.vue')
      },
      {
        path: '/PriceDetail',
        component: () => import('@/views/exportData/PriceDetail.vue')
      }
    ]
  }
]
