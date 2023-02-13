<template>
  <div
    :class="['dp-blocks', 'dp-blocks__' + direction]"
    :style="{ '--direction': direction }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DpBlocks',
  props: {
    // 子容器的排列方式  column 垂直 / row 水平  同css的 flex-direction的值
    direction: {
      type: String,
      default: 'column'
    }
  }
}
</script>

<style lang="scss" scoped>
.dp-blocks {
  height: 100%;
  display: flex;
  flex-direction: var(--direction);
  &__column {
    > .dp-block + .dp-block:not(.no-border) {
      border-top: 1px solid #e5e5e5;
    }
  }

  &__row {
    > .dp-block + .dp-block:not(.no-border) {
      border-left: 1px solid #e5e5e5;
    }
  }
}
</style>
