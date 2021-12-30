<!--
 * @Author: zaqvil
 * @Date: 2021-12-29 18:04:30
 * @FilePath: \vueuse-test\src\pages\UseBreakPoints\index.vue
 * @LastEditTime: 2021-12-29 18:07:51
 * @LastEditors: zaqvil
-->
<template>
  <div>UseBreakPoints</div>
  <div>Reactive viewport breakpoints</div>
  <div>
    <div>
      sm:
      {{ sm }}
    </div>
    <div>
      md:
      {{ md }}
    </div>
    <div>
      lg:
      {{ lg }}
    </div>
    <div>
      xl:
      {{ xl }}
    </div>
    <div>
      2xl:
      {{ xxl }}
    </div>
    <div>
      3xl:
      {{ xxxl }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = breakpoints.smaller('sm')
const md = breakpoints.between('sm', 'md')
const lg = breakpoints.between('md', 'lg')
const xl = breakpoints.between('lg', 'xl')
const xxl = breakpoints.between('xl', '2xl')
const xxxl = breakpoints['2xl']
</script>