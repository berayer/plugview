<template>
  <div class="flex h-14 w-full items-center justify-between border-b-2">
    <div class="flex h-full items-center px-3 hover:cursor-pointer hover:bg-gray-100" @click="changeCollapse">
      <Icon v-if="!appStore.siderCollapse" name="MenuUnfoldReft" :size="18" />
      <Icon v-else name="MenuUnfoldRight" :size="18" />
    </div>
    <div>右侧快捷栏</div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()
function changeCollapse() {
  appStore.siderCollapse = !appStore.siderCollapse
}
</script>
