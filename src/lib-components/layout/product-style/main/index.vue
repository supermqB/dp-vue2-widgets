<template>
  <dp-blocks>
    <dp-block size="48px">
      <!-- header -->
      <block-header />
    </dp-block>
    <dp-block>
      <!-- main -->
      <block-main />
    </dp-block>
    <dp-block size="36px">
      <!-- footer -->
      <block-footer />
    </dp-block>
  </dp-blocks>
</template>

<script>
import BlockHeader from './header'
import BlockMain from './main'
import BlockFooter from './footer'

export default {
  name: 'LayoutProductStyleMain',
  components: { BlockHeader, BlockMain, BlockFooter }
}
</script>
