<template>
  <div class="flex h-screen w-screen items-center justify-center bg-gray-100">
    <n-card style="width: 384px" class="mb-10 shadow-xl">
      <n-form ref="formRef" :model="formData" :rules="rules">
        <n-form-item>
          <span class="w-full text-center text-2xl font-black">用户登陆</span>
        </n-form-item>
        <n-form-item path="username" label="用户名">
          <n-input
            ref="usernameInput"
            v-model:value="formData.username"
            clearable
            placeholder="请输入用户名"
          ></n-input>
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input
            type="password"
            show-password-on="mousedown"
            v-model:value="formData.password"
            placeholder="请输入用户名"
            @keyup.enter="submit"
          ></n-input>
        </n-form-item>
        <n-form-item>
          <n-button :loading="state.loading" style="width: 100%" type="primary" @click="submit"
            >登陆</n-button
          >
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import type { FormInst, InputInst } from 'naive-ui'
import { router } from '@/router'

/** 表单对象 */
const formRef = ref<FormInst>()
const usernameInput = ref<InputInst>()
/** 表单数据 */
const formData = reactive({
  username: '',
  password: ''
})
/** 表单状态 */
const state = reactive({
  loading: false
})
/** 表单验证规则 */
const rules = {
  username: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }
}
/**
 * 表单提交验证
 */
function submit() {
  formRef.value?.validate((error) => {
    if (!error) {
      state.loading = true
      login(formData.username, formData.password)
    }
  })
}
/**
 * 后台登录请求
 * @param username 用户名
 * @param password 密码
 */
function login(username: string, password: string) {
  // api_login(`u_${username},p_${password}`)
  //   .then((res) => {
  //     console.log(res)
  //     if (res.code == 200) {
  //       router.push('/index')
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  //   .finally(() => {
  //     state.loading = false
  //   })
}
// 渲染完成后自动获取焦点
nextTick(() => {
  usernameInput.value?.focus()
})
</script>
