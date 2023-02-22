<template>
  <div class="h-screen w-screen bg-gray-100 p-3">
    <div class="flex h-full w-full items-center justify-center rounded-2xl border border-red-900">
      <div class="h-40 w-40 ring-1">
        <NButton type="warning" @click="send">提示</NButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'

const send = () => window.$message?.success(new Date().toDateString())
</script>
