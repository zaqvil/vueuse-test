<!--
 * @Author: zaqvil
 * @Date: 2021-12-29 16:25:44
 * @FilePath: \vueuse-test\src\App.vue
 * @LastEditTime: 2021-12-29 17:19:33
 * @LastEditors: zaqvil
-->
<template>
  <div style="height: 100vh; position: relative">
    <n-layout position="absolute">
  <input type="text">
      <n-layout-header style="height: 64px; padding: 24px;" bordered>颐和园路</n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px;">
        <n-layout-sider bordered content-style="padding: 24px;">海淀桥</n-layout-sider>
        <n-layout content-style="padding: 24px;">
          <router-view></router-view>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang='ts' setup>
import { NLayout, NLayoutHeader,NLayoutSider, NH2 } from 'naive-ui'
</script>

<style>
</style>
