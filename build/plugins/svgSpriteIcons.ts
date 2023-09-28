/**
 * @name  svgSpriteIcons
 * @description 配置使用svg图标,需要配合组件 SvgIcon使用 用来优化svg 雪碧图效果
 * @example   <svg-icon icon-class="文件名.svg" />
 */

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export const svgSpriteIcons = () =>
  createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve('src', 'assets/svg')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',

    /**
     * custom dom id
     * @default: __svg__icons__dom__
     */
    customDomId: '__svg__icons__dom__'
  })
