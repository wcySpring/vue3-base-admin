/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用8
 */

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import type { PluginOption } from 'vite'

import { autoImportDepsPlugin } from './autoImportDepsPlugin' //自动导入 api
import { autoRegistryCmpPlugin } from './autoRegistryCmpPlugin' // 自动导入组件
import { svgIconsPlugin } from './svgIconsPlugin'
import { svgSpriteIcons } from './svgSpriteIcons'

// env: ViteEnv, isBuild: boolean
export function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx()
  ]

  // 自导导入api
  vitePlugins.push(autoImportDepsPlugin())
  // 自动导入组件
  vitePlugins.push(autoRegistryCmpPlugin())
  // 导入处理svg
  vitePlugins.push(svgIconsPlugin())
  // 优化使得 svg 变成雪碧图效果
  vitePlugins.push(svgSpriteIcons())

  return vitePlugins
}
