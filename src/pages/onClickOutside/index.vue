<!--
 * @Author: zaqvil
 * @Date: 2021-12-30 10:55:03
 * @FilePath: \vueuse-test\src\pages\onClickOutside\index.vue
 * @LastEditTime: 2021-12-30 12:04:45
 * @LastEditors: zaqvil
-->
<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const modal = ref(false)
const modalRef = ref(null)
onClickOutside(
  modalRef,
  (event) => {
    console.log(event)
    modal.value = false
  },
)
const dropdown = ref(false)
const dropdownRef = ref(null)
onClickOutside(
  dropdownRef,
  (event) => {
    console.log(event)
    dropdown.value = false
  },
)

document.addEventListener('keydown', (e) => {
  // e.preventDefault();
  // e.stopPropagation()
  // e.stopImmediatePropagation()
  console.log(e, e.cancelable)
  // return false
}, true)
</script>

<template>
  <div>onClickOutside</div>
  <div>Listen for clicks outside of an element. Useful for modal or dropdown.</div>
  <div>监听点击标签以外元素，使用v-if隐藏后不会执行方法，使用v-show则会一直调用，所以一般情况下在v-if下使用</div>
  <button @click="modal = true">Open Modal</button>
  <div class="relative inline-block ml-2">
    <button @click="dropdown = true">Open Dropdown</button>
    <div
      v-if="dropdown"
      ref="dropdownRef"
      class="dropdown-inner"
    >Click outside of the dropdown to close it.</div>
  </div>
  <div v-if="modal" ref="modalRef" class="modal">
    <div class="inner">
      <button class="button small" title="Close" @click="modal = false">𝖷</button>
      <p class="heading">Demo Modal</p>
      <p>Click outside of the modal to close it.</p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  max-width: 100%;
  z-index: 10;
}
.inner {
  background-color: var(--c-bg);
  padding: 0.4em 2em;
  border-radius: 5px;
  border: 1px solid var(--c-divider-light);
  box-shadow: 2px 2px 10px rgba(10, 10, 10, 0.1);
}
.dropdown-inner {
  background-color: var(--c-bg);
  padding: 0.5em;
  position: absolute;
  left: 0;
  border-radius: 5px;
  border: 1px solid var(--c-divider-light);
  box-shadow: 2px 2px 5px rgba(10, 10, 10, 0.1);
}
.heading {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 2rem;
}
.button {
  position: absolute;
  top: -0.9rem;
  right: -0.5rem;
  font-weight: bold;
}
</style>