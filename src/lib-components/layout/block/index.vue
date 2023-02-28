<template>
  <div
    :class="[
      'dp-block',
      size != defaults.size ? 'set-size' : '',
      flex != defaults.flex ? 'set-flex' : '',
      noBorder ? 'no-border' : '',
      height != defaults.height ? 'set-height' : ''
    ]"
    :style="{ '--height': height, '--size': size, '--flex': flex }"
  >
    <template v-if="hasSlot.header || titleText">
      <div
        class="dp-block__header"
        :style="{ '--header-height': headerHeight }"
      >
        <slot name="header">
          <dp-title :text="titleText" />
        </slot>
      </div>
    </template>
    <div class="dp-block__body">
      <slot />
    </div>
  </div>
</template>

<script>
const defaults = {
  size: 'auto',
  flex: 1,
  height: 'auto'
}

export default {
  name: 'DpBlock',
  data() {
    return {
      defaults
    }
  },
  props: {
    // 整体区块(block)的尺寸  垂直为高度/水平为宽度 (在flex的样式值中使用,默认值'auto')
    size: {
      type: String,
      default: defaults.size
    },
    // 整体区块(block) flex的值(份额)
    flex: {
      type: Number,
      default: defaults.flex
    },
    // 标题内容，默认使用dp-title组件，如需自定义title 使用header具名插槽
    titleText: {
      type: String,
      default: ''
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
    },
    // 整体区块(block)高度 (在flex的样式值中使用,默认值'auto')  即将移除
    height: {
      type: String,
      default: defaults.height
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
  display: flex;
  flex-direction: column;

  &.set-height {
    flex: 0 0 var(--height);
    min-height: 0;
    overflow: hidden;
  }

  &.set-size {
    flex: 0 0 var(--size);
    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }

  &.set-flex {
    flex: var(--flex);
    overflow: hidden;
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
