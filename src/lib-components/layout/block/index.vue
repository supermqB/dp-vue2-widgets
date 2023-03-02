<template>
  <div
    :class="[
      'dp-block',
      setSize ? 'set-size' : '',
      setFlex ? 'set-flex' : '',
      noBorder ? 'no-border' : ''
    ]"
    :style="{ '--size': setSize ? size : '', '--flex': setFlex ? flex : '' }"
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
  size: '',
  flex: 1,
  titleText: '',
  headerHeight: 'auto',
  noBorder: false
}

export default {
  name: 'DpBlock',
  data() {
    return {
      defaults
    }
  },
  props: {
    // 整体区块(block)的尺寸  垂直为高度/水平为宽度(像素)  !设置为auto时，由内部元素尺寸撑开
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
      default: defaults.titleText
    },
    // 头部区域(header)高度 (在flex的样式值中使用,默认值'auto')
    headerHeight: {
      type: String,
      default: defaults.headerHeight
    },
    // 区块(block)间是否不显示边框 (控制是否带上'no-border'类名，默认值'false'，表示)
    noBorder: {
      type: Boolean,
      default: defaults.noBorder
    }
  },
  computed: {
    hasSlot() {
      return {
        header: typeof this.$slots.header !== 'undefined'
      }
    },
    // size 设置的优先级比 flex 高， 只要size设置了值，就忽略flex设置的值
    setSize() {
      return (
        // props.size 不等于 size默认值
        this.size !== this.defaults.size
      )
    },
    setFlex() {
      return (
        // props.flez 不等于 flez默认值
        this.flex !== this.defaults.flex &&
        // 且props.size 等于 size默认值
        this.size === this.defaults.size
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.dp-block {
  // 默认flex:1
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: auto;

  // 控制header / body 的flex布局
  display: flex;
  flex-direction: column;

  // 设置了size
  &.set-size {
    flex: 0 0 var(--size);
    overflow: hidden;
  }

  // 设置了flex
  &.set-flex {
    flex: var(--flex);
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
