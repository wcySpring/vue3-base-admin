/**
 * @name  svgIconsPlugin
 * @description 配置使用svg图标
 */

import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import path from 'path'

export const svgIconsPlugin = () => {
  return Icons({
    // @default 默认vue3
    // compiler:'vue3',

    /**
     * 按需引入这个选项会自动为你的应用安装必要的运行时。这意味着你不需要手动导入或注册图标组件，它们会自动被引入并可用。
     *  */
    autoInstall: true,

    /**
     * 这个选项允许你定义自己的图标集合。每个集合都是一个键值对，其中键是集合的名称，值是一个加载器函数，用于加载和处理图标。
     */
    customCollections: {
      /**
       * FileSystemIconLoader
       * 第一个参数是 SVG 图标的路径，文件名（不包括扩展名）将被用作图标的名称
       * 第二个参数是这是一个处理函数，用于处理加载的 SVG 内容。在这个例子中，它将 SVG 的开头替换为 <svg fill="currentColor" 。
       * 这意味着图标的颜色会使用 CSS 的 currentColor 值，从而允许你通过 CSS 控制图标的颜色。
       */
      home: FileSystemIconLoader(path.resolve('src', 'assets/svg'), (svg) =>
        svg.replace(/^<svg /, '<svg fill="currentColor" ')
      )
    }
  })
}
