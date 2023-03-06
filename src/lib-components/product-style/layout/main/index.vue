<template>
  <dp-blocks>
    <dp-block size="48px">
      <!-- header -->
      <block-header :collapsed.sync="_collapsed" />
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
  components: { BlockHeader, BlockMain, BlockFooter },
  props: {
    collapsed: Boolean
  },
  computed: {
    _collapsed: {
      get() {
        return this.collapsed
      },
      set(v) {
        this.$emit('update:collapsed', v)
      }
    }
  }
}
</script>
