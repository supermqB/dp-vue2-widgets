<template>
  <div
    :class="[
      'dp-block',
      height != 'auto' ? 'set-height' : '',
      hasSlot.header ? 'has-header' : '',
      noBorder ? 'no-border' : ''
    ]"
    :style="{ '--height': height }"
  >
    <template v-if="hasSlot.header">
      <div
        class="dp-block__header"
        :style="{ '--header-height': headerHeight }"
      >
        <slot name="header" />
      </div>
      <div class="dp-block__body">
        <slot />
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  name: 'DpBlock',
  props: {
    // 整体区块(block)高度 (在flex的样式值中使用,默认值'auto')
    height: {
      type: String,
      default: 'auto'
    },
    // 头部区域(header)高度 (在flex的样式值中使用,默认值'auto')
    headerHeight: {
      type: String,
      default: 'auto'
    },
    // 区块(block)间是否不显示边框 (控制是否带上'no-border'类名，默认值'false'，表示)
    noBorder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlot() {
      return {
        header: typeof this.$slots.header !== 'undefined'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dp-block {
  flex: 1;
  min-height: 0;
  overflow: auto;

  &.set-height {
    flex: 0 0 var(--height);
    min-height: 0;
    overflow: hidden;
  }

  &.has-header {
    display: flex;
    flex-direction: column;
  }

  &__header {
    flex: 0 0 var(--header-height);
    overflow: hidden;
  }

  &__body {
    flex: 1;
    min-height: 0;
    overflow: auto;
  }
}
</style>
