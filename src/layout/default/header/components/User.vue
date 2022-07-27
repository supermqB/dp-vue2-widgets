<template>
  <div class="header-user">
    <div class="header-user__info"></div>

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
  padding: 12px 16px;
  width: 56px;
  display: flex;
  &__info {
    width: 16px;
    height: 16px;
    margin: 4px 16px 0 0;
    background-color: rgb(222, 212, 212);
    background-image: url('~@/assets/images/layout/default/header/user/info.svg');
  }
  &__avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #78838e;
  }
}
</style>
