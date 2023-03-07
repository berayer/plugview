<template>
  <n-icon :size="size" :color="color">
    <vIcon :icon="name" />
  </n-icon>
</template>

<script setup lang="ts">
import { Icon as vIcon } from '@iconify/vue'

interface Props {
  name: string
  size?: number | string
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: 24
})
</script>
