<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed="appStore.siderCollapse"
      :collapsed-width="appStore.collapsedWidth"
      :width="appStore.siderWidth"
    >
      <AppLogo />
      <SiderMenu />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <TopHeader />
      </n-layout-header>
      <n-layout-content
        :native-scrollbar="false"
        content-style="padding: 16px;"
        style="height: calc(100% - 56px)"
      >
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { SiderMenu, AppLogo, TopHeader } from './components'
import { useAppStore, useTabStore } from '@/store'
import { router } from '@/router'
import { useRoute } from 'vue-router'
import { loadAsyncRoutes } from '@/utils/router'
import { api_userMenu } from '@/api'
import { isBuffer } from 'lodash'

const appStore = useAppStore()
const route = useRoute()
const tabStore = useTabStore()

// 从后台加载路由菜单
api_userMenu()
  .then((res) => {
    console.log(res)
    tabStore.menus = res.data
    loadAsyncRoutes(tabStore.menus)
    removeAllPatch()
    const is = ohterSkip()
    // 访问主页跳转第一个路由
    if (!is && tabStore.menus && tabStore.menus.length > 0) {
      router.push(tabStore.menus[0].path)
    }
  })
  .catch((err) => {
    console.log(err)
    router.push('/login')
  })

// 移除全路径匹配导向404
function removeAllPatch() {
  router.removeRoute('Other')
  router.addRoute({
    path: '/:path(.*)*',
    name: 'Other',
    redirect: '/404'
  })
}

function ohterSkip(): boolean {
  if (route.query && route.query.url && route.query.url != '/index') {
    // 检查路径是否有权限
    const routers = router.getRoutes()
    const one = routers.find(({ path }) => {
      return route.query.url == path
    })
    if (one) {
      let query = JSON.parse(route.query.query as string)
      router.push({
        path: route.query.url as string,
        query: Object.keys(query).length ? query : {}
      })
    } else {
      router.push({ path: '/404', replace: true })
    }
    return true
  }
  return false
}
</script>
