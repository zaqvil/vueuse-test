<!--
 * @Author: zaqvil
 * @Date: 2021-12-29 16:46:06
 * @FilePath: \vueuse-test\src\pages\Home\index.vue
 * @LastEditTime: 2021-12-29 17:43:04
 * @LastEditors: zaqvil
-->
<!--
 * @Author: zaqvil
 * @Date: 2021-12-29 16:46:06
 * @FilePath: \vueuse-test\src\pages\Home\index.vue
 * @LastEditTime: 2021-12-29 17:22:11
 * @LastEditors: zaqvil
-->
<template>
  <div>useActiveElement</div>
  <div>
    Reactive
    <code>document.activeElement</code>
    <a
      target="_blank"
      href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/activeElement"
    >mdn</a>
  </div>
  <div>获取聚焦状态的标签</div>
  <NInput type="text" />
  <NInput type="text" />
  <NInput type="text" />
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useActiveElement } from '@vueuse/core'
import { NInput } from 'naive-ui'
const activeElement = useActiveElement()

watch(activeElement, (el) => {
  console.log('focus changed to', el)
})
</script>