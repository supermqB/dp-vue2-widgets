<template>
  <div class="dp-subtitle">
    <div class="dp-subtitle__text">{{ text }}</div>
    <div class="dp-subtitle__line"></div>
  </div>
</template>

<script>
export default {
  name: 'DpSubtitle',
  props: {
    text: {
      type: String,
      default: '标题内容'
    }
  }
}
</script>
<style lang="scss" scoped>
.dp-subtitle {
  height: 40px;
  display: flex;
  align-items: center;
  &__text {
    // height: 40px;
    font-size: 13px;
    // line-height: 40px;
    padding-left: 12px;
    padding-right: 10px;
    color: #333333;
  }
  &__line {
    flex: 1;
    content: ' ';
    display: block;
    border-bottom: 1px solid #f1f1f4;
    // top: 50%;
    // transform: translateY(-50%);
  }
}
</style>
