<template>
  <dp-blocks direction="row">
    <dp-block size="auto">
      <!-- 侧边栏 （LOGO 、菜单） -->
      <block-aside :menuItems="menuItems" :collapsed.sync="asideCollapsed" />
    </dp-block>
    <dp-block no-border>
      <!-- 主体内容 (header 、 main、 footer) -->
      <block-main :collapsed.sync="asideCollapsed" />
    </dp-block>
  </dp-blocks>
</template>

<script>
import BlockAside from './aside'
import BlockMain from './main'

export default {
  name: 'LayoutProductStyle',
  components: { BlockAside, BlockMain },
  props: {
    /* titleText: {
      type: String,
      default: '项目标题'
    }, */
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      asideCollapsed: false
    }
  }
}
</script>
