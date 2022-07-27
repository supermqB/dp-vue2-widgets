<template>
  <div class="header-title">
    <div class="header-title__logo"></div>
    <div class="header-title__text">数据标准管理系统</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle'
}
</script>

<style lang="scss" scoped>
.header-title {
  position: relative;
  padding: 14px 16px;
  width: 128px;
  display: flex;
  justify-content: space-between;
  &__logo {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d8d8d8;
    border: 1px solid #979797;
  }

  &__text {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0.16px;
    width: 130px;
    line-height: 22px;
  }
}
</style>
