<template>
  <n-menu
    :indent="20"
    :options="menuOptions(tabStore.menus)"
    :collapsed-width="appStore.collapsedWidth"
    :collapsed="appStore.siderCollapse"
    :value="route.fullPath"
    @update:value="handleUpdateValue"
    :watch-props="['defaultExpandedKeys']"
  />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { useAppStore, useTabStore } from '@/store'
import Icon from '@/components/Icon.vue'
import { router } from '@/router'
import { useRoute } from 'vue-router'

const appStore = useAppStore()
const route = useRoute()
const tabStore = useTabStore()

const menuOptions = (menus: GlobalMenu[]): MenuOption[] => {
  return menus.map((v) => {
    const item: MenuOption = {
      key: v.path,
      label: v.label,
      icon: () => h(Icon, { name: v.icon ? v.icon : 'material-symbols:menu' })
    }
    if (v.children) {
      item.children = menuOptions(v.children)
    }
    return item
  })
}

function handleUpdateValue(key: string) {
  router.push(key)
}
</script>
