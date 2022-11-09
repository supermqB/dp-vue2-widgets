<template>
  <div class="title_wrapper">
    <div :class="['title', size]">{{ title }}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    size: {
      type: String /*l1, l2, l3*/,
      default: () => 'l1'
    }
  }
}
</script>
<style lang="scss" scoped>
.title_wrapper {
  .title {
    display: inline-block;
    color: #2f63b9;
    padding: 6px;
    margin: 0 6px;
    border-bottom: 2px solid #2f63b9;
    &.l1 {
      font-size: 16px;
      height: 40px;
      box-sizing: border-box;
      padding: 12px 6px;
      font-weight: bold;
    }
    &.l2 {
      font-size: 13px;
    }
  }
}
</style>
