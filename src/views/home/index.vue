<template>
  <n-card>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
    <n-button @click="show">submit</n-button>
  </n-card>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const editorRef = shallowRef()
const valueHtml = ref('<p>hello</p>')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const mode = ref('simple')
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
onMounted(() => {
  // setTimeout(() => {
  //   valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  // }, 1500)
})
const show = () => {
  console.log(editorRef.value.getHtml())
}
</script>
