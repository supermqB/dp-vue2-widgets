<template>
  <dp-blocks direction="row">
    <dp-block size="auto">
      <!-- 侧边栏 （LOGO 、菜单） -->
      <block-aside />
    </dp-block>
    <dp-block>
      <!-- 主体内容 (header 、 main、 footer) -->
      <block-main />
    </dp-block>
  </dp-blocks>
</template>

<script>
import BlockAside from './aside'
import BlockMain from './main'

export default {
  name: 'LayoutProductStyle',
  components: { BlockAside, BlockMain }
}
</script>
