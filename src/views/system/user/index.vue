<template>
  <n-card>
    <template #header>
      <n-button>新增</n-button>
      <n-button>刷新</n-button>
    </template>
    <n-data-table :columns="columns" :data="data" bordered :row-key="(row) => row.username" />
  </n-card>
</template>

<script setup lang="ts">
import { DataTableColumns, NButton } from 'naive-ui'

const columns: DataTableColumns = [
  {
    type: 'selection'
  },
  {
    title: '用户名',
    key: 'username'
  },
  {
    title: '昵称',
    key: 'nickName'
  },
  {
    title: '创建人',
    key: 'createBy'
  },
  {
    title: '创建时间',
    key: 'createTime'
  },
  {
    title: '最后更新人',
    key: 'updateBy'
  },
  {
    title: '最后更新时间',
    key: 'updateTime'
  },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      return [
        h(NButton, { size: 'small', type: 'warning' }, { default: () => '修改' }),
        h(NButton, { size: 'small', type: 'error' }, { default: () => '删除' })
      ]
    }
  }
]

const data = [
  {
    username: 'admin',
    nickName: '马飞飞',
    createBy: 'system',
    createTime: '2023/03/07 13:35:46'
  }
]
</script>
