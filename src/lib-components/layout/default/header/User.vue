<template>
  <div class="header-user">
    <div class="header-user__info">
      <i class="el-icon-warning-outline" />
    </div>
    <div class="header-user__avatar"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderUser'
}
</script>

<style lang="scss" scoped>
.header-user {
  width: 56px;
  display: flex;
  align-items: center;
  &__info {
    color: #78838e;
    margin: 16px;
    // background-color: rgb(222, 212, 212);
    // background-image: url('~@/assets/images/layout/default/header/user/info.svg');
  }
  &__avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #78838e;
    margin-right: 12px;
  }
}
</style>
