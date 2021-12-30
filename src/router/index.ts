/*
 * @Author: zaqvil
 * @Date: 2021-12-29 16:42:41
 * @FilePath: \vueuse-test\src\router\index.ts
 * @LastEditTime: 2021-12-30 10:57:50
 * @LastEditors: zaqvil
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'useActiveElement',
    path: '/',
    component: () => import('../pages/Home/index.vue'),
  },
  {
    name: 'useBreakpoints',
    path: '/useBreakpoints',
    component: () => import('../pages/UseBreakPoints/index.vue'),
  },
  {
    name: 'onClickOutside',
    path: '/onClickOutside',
    component: () => import('../pages/onClickOutside/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
