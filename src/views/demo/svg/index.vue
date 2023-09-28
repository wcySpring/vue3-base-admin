<!-- <template>
  <div>
    <p>unplugin-icons 使用可以自定文件目录中svg 也可以 搭配当前比较受欢迎的 iconify 进行使用</p>
    <p>具体配置可以参考当前vite 配置 svgIconsPlugin.ts 文件</p>
    <div>
      使用本地导入的svg 图片遵守 配置时候的规则
      <span>[prefix]-[customCollections]:[icons] </span> 这里采用了按需引入使用效果
      <i-home:setting />
      <i-home:setting style="color: red" />
    </div>
  </div>

  <div>
    <p>
      vite-plugin-svg-icons ,使用本地导入的svg 图片并且可以做到 svg 雪碧图的优化效果需要
      自定义编写一个 svg 的组件参考 SvgIcon 文件夹
    </p>
    <p>具体配置可以参考当前vite 配置 svgSpriteIcons.ts 文件</p>
    <div>
      使用时候遵守配置时候属性 symbolId格式
      <span> symbolId: 'icon-[dir]-[name]' </span>
      <svg-icon icon-class="setting" color="red" />
      <svg-icon icon-class="setting" />
    </div>
  </div>

  <div>
    <p>使用图标集 iconify 上的图标 推荐和 unplugin-icons 配合</p>
    <p>只需要针对 autoInstall 和 enabledCollections 两个配置项进行配置</p>
    <div>
      这里以 ic 这个图库集为例 遵守规则 <span>[prefix]-[customCollections]:[icons] </span>
      <i-ic:baseline-5g />
    </div>
  </div>

  <div>
    <p>使用图标集 iconify 上的图标 直接使用 @iconify/vue vue组件</p>
    <p>只需要安装好 @iconify/vue 组件即可</p>
    <div>
      cdn 使用这里没有走本地
      <Icon icon="mdi-light:home" />
    </div>
    <div>
      本地使用需要导入 @iconify-icons/ic
      <Icon :icon="baseline5g" />
    </div>
  </div>

  <Icon icon="mdi-light:home" />

  <Icon icon="ic:baseline-5g" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import baseline5g from '@iconify-icons/ic/baseline-5g'
</script> -->
