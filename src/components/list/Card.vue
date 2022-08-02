<template>
  <div class="accordin_card">
    <div class="title"><span class="icon"></span>{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.accordin_card {
  color: #606266;
  .title {
    font-size: 13px;
    .icon {
      color: #8D8D8D;
      font-size: 12px;
      font-family: element-icons !important;
      display: inline-block;
      padding: 6px;
      &::before {
        content: '\e791';
      }
    }
  }
  .content{
      padding-left: 24px;
  }
}
</style>
