<template>
  <dp-blocks
    direction="row"
    style="
      justify-content: flex-start;
      padding: 0 10px;
      align-items: center;
      box-sizing: border-box;
    "
  >
    <dp-block size="auto">
      <el-button type="text" @click="handleClick">
        {{ collapsed ? '展开' : '收起' }}
      </el-button>
    </dp-block>
  </dp-blocks>
</template>

<script>
export default {
  name: 'LayoutProductStyleMainHeader',
  props: {
    collapsed: Boolean
  },
  methods: {
    handleClick() {
      this.$emit('update:collapsed', !this.collapsed)
    }
  }
}
</script>
