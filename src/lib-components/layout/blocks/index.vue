<template>
  <div class="dp-blocks">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DpBlocks'
}
</script>

<style lang="scss" scoped>
.dp-blocks {
  height: 100%;
  display: flex;
  flex-direction: column;
  .dp-block + .dp-block:not(.no-border) {
    border-top: 1px solid #e5e5e5;
  }
}
</style>
