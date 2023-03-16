<template>
  <div class="dp-title" :class="{ underline: showUnderLine }">
    <div class="dp-title__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'DpTitle',
  props: {
    text: {
      type: String,
      default: '标题内容'
    },
    showUnderLine: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
.dp-title {
  height: 40px;
  box-sizing: border-box;
  /* border-bottom: 1px solid #e5e5e5; */
  position: relative;
  &__text {
    color: #333;
    height: 39px;
    font-size: 15px;
    line-height: 39px;
    padding-left: 12px;
    &:before {
      content: ' ';
      position: absolute;
      width: 4px;
      height: 13px;
      background-color: #2f63b9;
      left: 4px;
      top: 13px;
    }
  }

  &__wrapper {
    position: absolute;
    height: calc(100% + 1px);
    display: inline-block;
    box-sizing: border-box;
    padding-left: 6px;
    padding-right: 16px;
    border-bottom: 2px solid #2f63b9;
    &-text {
      color: #333333;
      font-size: 15px;
      font-weight: bold;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.underline {
  border-bottom: 1px solid #e5e5e5;
}
</style>
