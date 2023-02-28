<template>
  <n-layout has-sider class="h-screen ring-gray-100">
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
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>
