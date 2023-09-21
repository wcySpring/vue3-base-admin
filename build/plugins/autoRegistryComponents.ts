/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入组件
 */
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export const autoRegistryComponents = () => {
  return Components({
    // Auto register Element Plus components
    // 自动导入 Element Plus 组件
    resolvers: [ElementPlusResolver()],
    // 指定生成的 组件的 ts 文件目录
    dts: path.resolve('types', 'components.d.ts'),

    directives: true
  })
}
