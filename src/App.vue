<template>
  <n-config-provider :locale="zhCN" :theme-overrides="themeOverrides">
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, zhCN } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
// 主题配置
const themeOverrides: GlobalThemeOverrides = {
  common: {},
  Layout: {
    color: '#f3f3f3'
    // siderBorderColor: '#000000'
  },
  Menu: {
    borderRadius: '16px'
  },
  Card: {
    borderRadius: '16px'
  }
}
</script>
