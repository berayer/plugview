<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

// 主题配置
const themeOverrides: GlobalThemeOverrides = {
  Layout: {
    color: '#f3f3f3',
    siderBorderColor: '#000000'
  }
}
</script>
