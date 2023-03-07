<template>
  <n-timeline size="large">
    <n-timeline-item content="啊" />
    <n-timeline-item type="success" title="成功" content="哪里成功" time="2018-04-03 20:46" />
    <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46" />
    <n-timeline-item title="日志" time="2023-03-06 09:43" line-type="dashed">
      <template #default>
        <n-card>
          <div class="editor-content-view">
            <p>hello</p>
            <p>1. dasfdsf</p>
            <p>2. 这是一个悲伤的故事</p>
            <pre><code >select * from abc
where a is not null</code></pre>
            <p><br /></p>
          </div>
        </n-card>
      </template>
    </n-timeline-item>
    <n-timeline-item type="warning" title="2018-04-03 20:46" content="哪里警告" time="2018-04-03 20:46">
      <template #default>
        <n-card>
          <div class="editor-content-view">
            <p>hello</p>
            <p>1. dasfdsf</p>
            <p>2. 这是一个悲伤的故事</p>
            <pre><code >select * from abc
where a is not null</code></pre>
            <p><br /></p>
          </div>
        </n-card>
      </template>
    </n-timeline-item>
    <n-timeline-item
      type="info"
      title="信息"
      content="是的"
      time="2018-04-03 20:46"
      line-type="dashed"
    />
    <n-timeline-item content="啊">
      <template #default>
        <n-card>
          <div class="editor-content-view">
            <p>hello</p>
            <p>1. dasfdsf</p>
            <p>2. 这是一个悲伤的故事</p>
            <pre><code >select * from abc
where a is not null</code></pre>
            <p><br /></p>
          </div>
        </n-card>
      </template>
    </n-timeline-item>
  </n-timeline>
</template>

<style>
.editor-content-view {
  /* border: 3px solid #ccc; */
  /* border-radius: 5px; */
  /* padding: 0 10px; */
  /* margin-top: 20px; */
  /* overflow-x: auto; */
}

.editor-content-view p,
.editor-content-view li {
  white-space: pre-wrap; /* 保留空格 */
}

.editor-content-view blockquote {
  border-left: 8px solid #d0e5f2;
  padding: 10px 10px;
  margin: 10px 0;
  background-color: #f1f1f1;
}

.editor-content-view code {
  font-family: monospace;
  background-color: #eee;
  padding: 3px;
  border-radius: 3px;
}
.editor-content-view pre > code {
  display: block;
  padding: 10px;
}

.editor-content-view table {
  border-collapse: collapse;
}
.editor-content-view td,
.editor-content-view th {
  border: 1px solid #ccc;
  min-width: 50px;
  height: 20px;
}
.editor-content-view th {
  background-color: #f1f1f1;
}

.editor-content-view ul,
.editor-content-view ol {
  padding-left: 20px;
}

.editor-content-view input[type='checkbox'] {
  margin-right: 5px;
}
</style>
