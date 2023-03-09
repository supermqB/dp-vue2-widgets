<template>
  <dp-blocks :style="{ width: collapsed ? '48px' : '200px' }">
    <dp-block size="48px">
      <block-logo :collapsed="collapsed" />
    </dp-block>
    <dp-block no-border>
      <dp-blocks class="menu">
        <!-- <dp-block size="40px">
          <el-button type="primary" @click="handleClick">
            {{ collapsed ? '展开' : '收起' }}
          </el-button>
        </dp-block> -->
        <dp-block>
          <block-menu :items="menuItems" :collapsed="collapsed" />
        </dp-block>
      </dp-blocks>
    </dp-block>
  </dp-blocks>
</template>

<script>
import BlockLogo from './logo'
import BlockMenu from './menu'
export default {
  name: 'LayoutProductStyleAside',
  components: { BlockLogo, BlockMenu },
  props: {
    // titleText: String,
    menuItems: Array,
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
  },
  methods: {
    handleClick() {
      this.$emit('update:collapsed', !this.collapsed)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 100%;
}
</style>
