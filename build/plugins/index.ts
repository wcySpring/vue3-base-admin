/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用8
 */

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import type { PluginOption } from 'vite'

import { autoImportDeps } from './autoImportDeps' //自动导入 api
import { autoRegistryComponents } from './autoRegistryComponents' // 自动导入组件

// env: ViteEnv, isBuild: boolean
export function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx()
  ]

  // 自导导入api
  vitePlugins.push(autoImportDeps())
  // 自动导入组件
  vitePlugins.push(autoRegistryComponents())

  return vitePlugins
}
