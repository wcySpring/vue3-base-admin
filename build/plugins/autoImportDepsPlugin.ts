/**
 * @name autoImportDepsPlugin
 * @description 按需加载，自动引入
 */

import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { registryIconifyIcons } from '../utils/registryIconifyIcons'

import path from 'path'

console.log(registryIconifyIcons('ic', ['baseline-5g']))

export const autoImportDepsPlugin = () => {
  return AutoImport({
    // 生成对应的 .d.ts 文件，用于 TypeScript 支持
    // 指定自动导入函数TS类型声明文件路径
    dts: path.resolve('types', 'auto-imports.d.ts'),
    // 定义全局导入的模块和别名
    imports: [
      // 'vue': [
      // 	'ref',
      // 	'computed',
      // 	['reactive', 'r'] // 给reactive 设置别名为 r
      // ],

      'vue',
      'pinia',
      'vue-router',
      {
        '@vueuse/core': [],
        ...registryIconifyIcons('ic', ['baseline-5g'])
      }
      // 自动导入 iconify 的图库 配合  @iconify/vue 使用的
      //
    ],
    // 生成对应的 .eslintrc-auto-import.json 文件，用于 ESLint 配置
    eslintrc: {
      enabled: true,
      filepath: path.resolve('.eslintrc-auto-import.json'), // 指定自动导入函数 eslint 规则的文件
      globalsPropValue: 'readonly' // 设置全局变量为只读
    },
    // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
    // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    resolvers: [ElementPlusResolver()]
  })
}
