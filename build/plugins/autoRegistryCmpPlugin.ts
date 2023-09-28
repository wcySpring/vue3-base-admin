/**
 * @name  autoRegistryCmpPlugin
 * @description 按需加载，自动引入组件
 */
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

import IconsResolver from 'unplugin-icons/resolver'

export const autoRegistryCmpPlugin = () => {
  return Components({
    // Auto register Element Plus components
    // 自动导入 Element Plus 组件
    resolvers: [
      ElementPlusResolver(),
      // 自动导入 svg 图标 用来配合 `unplugin-icons` 使用的
      IconsResolver({
        // prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
        enabledCollections: ['home', 'ic'] // 这是可选的，默认启用 Iconify 支持的所有集合
      })
    ],
    // 指定生成的 组件的 ts 文件目录
    dts: path.resolve('types', 'components.d.ts'),

    directives: true
  })
}
