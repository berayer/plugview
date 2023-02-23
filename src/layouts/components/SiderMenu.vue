<template>
  <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'

const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: '/home'
  },
  {
    label: '关于',
    key: '/about'
  }
]

function handleUpdateValue(key: string) {
  console.log(key)
}
</script>
