<template>
  <n-card>
    <template #header>
      <n-space>
        <n-button type="tertiary"> 新增 </n-button>
        <n-button type="primary"> 修改 </n-button>
        <n-button type="info"> 删除 </n-button>
        <n-button type="success"> 刷新 </n-button>
      </n-space>
    </template>
    <n-data-table
      striped
      :pagination="pagination"
      :columns="columns"
      :data="data"
      :row-key="(row) => row.id"
    ></n-data-table>
  </n-card>
</template>

<script setup lang="ts">
import type { DataTableColumns, PaginationProps } from 'naive-ui'

interface UserInfo {
  id: number
  username: string
  nickName: string
  email: string
  createTime: string
  createby: string
  updateTime?: string
  updateBy?: string
}

const columns: DataTableColumns<UserInfo> = [
  {
    type: 'selection'
  },
  {
    title: '编号',
    key: 'id'
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
    title: '邮箱',
    key: 'email'
  },
  {
    title: '创建时间',
    key: 'createTime'
  },
  {
    title: '创建人',
    key: 'createBy'
  },
  {
    title: '最后更新时间',
    key: 'updateTime'
  },
  {
    title: '最后更新人',
    key: 'updateBy'
  }
]
function createData() {
  let index = 1
  const res: UserInfo[] = []
  while (index < 30) {
    res.push({
      id: index,
      username: 'mafeifei' + index,
      nickName: '马飞飞' + index,
      email: 336989 + index + '@qq.com',
      createTime: '2023-02-25 15:13:36',
      createby: 'system'
    })
    index++
  }
  return res
}
const data: UserInfo[] = createData()
const pagination: PaginationProps = {
  showSizePicker: true,
  pageSizes: [10, 20, 50]
}
</script>
