<template>
  <n-icon :component="icons[name]" :size="size" :color="color"> </n-icon>
</template>

<script setup lang="ts">
import icons from '@/assets/SvgImport'

interface Props {
  name: keyof typeof icons
  size?: number | string
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: '#000'
})
</script>
