<template>
  <n-menu
    :indent="18"
    :options="menuOptions"
    :collapsed-width="appStore.collapsedWidth"
    :collapsed="appStore.siderCollapse"
    @update:value="handleUpdateValue"
  />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { useAppStore } from '@/store'
import Icon from '@/components/Icon.vue'

const appStore = useAppStore()
const menuOptions: MenuOption[] = [
  {
    icon: () => h(Icon, { name: 'Accessibility' }),
    label: '首页',
    key: '/home'
  },
  {
    icon: () => h(Icon, { name: 'Accessibility' }),
    label: '数据导出',
    key: '/exportData',
    children: [
      {
        icon: () => h(Icon, { name: 'Accessibility' }),
        label: '华广数据导出',
        key: '/huaguangERP'
      },
      {
        icon: () => h(Icon, { name: 'Accessibility' }),
        label: '联思数据导出',
        key: '/liansiERP'
      }
    ]
  },
  {
    icon: () => h(Icon, { name: 'AboutCircleOutline' }),
    label: '关于',
    key: '/about'
  }
]

function handleUpdateValue(key: string) {
  console.log(key)
}
</script>
