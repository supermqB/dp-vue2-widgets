<template>
  <el-button
    type="primary"
    plain
    class="icon-button"
    @click="handleClick"
    :disabled="disabled"
  >
    <span class="icon-button__text">{{ text }}</span>
    <span class="icon-button__icon"><img :src="icon" /></span>
  </el-button>
</template>

<script>
export default {
  name: 'DpIconButton',
  props: {
    text: String,
    icon: String,
    disabled: Boolean
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-button {
  padding-left: 8px;
  padding-right: 8px;
  ::v-deep > span {
    min-width: auto;
    display: flex;
  }
  &__text {
    min-width: 26px;
    display: block;
  }
  &__icon {
    margin-left: 3px;
    width: 12px;
    height: 12px;
    display: block;
    flex: 0 0 12px;
    position: relative;
    > img {
      position: absolute;
      top: 1px;
    }
  }

  &.is-disabled {
    .icon-button__icon {
      opacity: 0.5;
    }
  }
}
</style>
