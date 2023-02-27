<template>
  <n-card title="华广联思报价明细导出">
    <n-form>
      <n-form-item label="请选择时间段:" label-placement="left">
        <n-date-picker v-model:value="range" type="daterange" clearable />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="showModal = true" :loading="showModal">生成数据</n-button>
      </n-form-item>
      <n-form-item>
        <span class="text-red-600"> 生成表格中...请勿推出当前页面 </span>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script setup lang="ts">
const range = ref<[number, number]>([1183135260000, Date.now()])
const showModal = ref(false)
</script>
