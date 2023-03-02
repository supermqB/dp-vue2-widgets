<template>
  <dp-blocks>
    <dp-block size="48px">
      <block-Logo />
    </dp-block>
    <dp-block no-border>
      <block-Menu />
    </dp-block>
  </dp-blocks>
</template>

<script>
import BlockLogo from './logo'
import BlockMenu from './menu'
export default {
  name: 'LayoutProductStyleAside',
  components: { BlockLogo, BlockMenu }
}
</script>

<style></style>
