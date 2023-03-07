<template>
  <div>菜单管理</div>
  <n-card>
    <n-tree
      block-line
      :data="order.paramModel"
      key-field="id"
      label-field="modelName"
      children-field="subModels"
      selectable
    />
  </n-card>
</template>

<script setup lang="ts">
import order from '@/json/order2.json'
</script>
