<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <n-button @click="router.go(-1)">返回</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts">
import { router } from '@/router'
</script>
