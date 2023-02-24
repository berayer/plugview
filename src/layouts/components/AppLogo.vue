<template>
  <a href="#" class="flex h-14 items-center justify-center whitespace-nowrap">
    <Icon name="AnsibleAlt" :size="24" color="#2563eb" />
    <h2 v-if="!appStore.siderCollapse" class="pl-2 text-lg font-black text-blue-600">插件管理系统</h2>
  </a>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>
