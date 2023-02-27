<template>
  <n-menu
    :indent="20"
    :options="menuOptions"
    :collapsed-width="appStore.collapsedWidth"
    :collapsed="appStore.siderCollapse"
    :value="route.fullPath"
    @update:value="handleUpdateValue"
  />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { useAppStore } from '@/store'
import Icon from '@/components/Icon.vue'
import { router } from '@/router'
import { useRoute } from 'vue-router'

const appStore = useAppStore()
const route = useRoute()
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
      },
      {
        icon: () => h(Icon, { name: 'Accessibility' }),
        label: '报价明细导出',
        key: '/PriceDetail'
      }
    ]
  },
  {
    icon: () => h(Icon, { name: 'Config' }),
    label: '系统控制',
    key: '/system',
    children: [
      {
        icon: () => h(Icon, { name: 'UsersGear' }),
        label: '用户管理',
        key: '/system/userManagement'
      }
    ]
  },
  {
    icon: () => h(Icon, { name: 'AboutCircleOutline' }),
    label: '关于',
    key: '/about'
  }
]

onMounted(() => {
  console.log(route)
})

function handleUpdateValue(key: string) {
  router.push(key)
}
</script>
