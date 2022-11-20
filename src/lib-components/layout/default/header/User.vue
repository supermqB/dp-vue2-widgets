<template>
  <div class="header-user">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <div class="header-user__avatar">
          <i class="el-icon-user-solid" />
        </div>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">
          <span>退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'HeaderUser',
  props: {
    logoutEvent: Function
  },
  methods: {
    handleCommand(command) {
      if (command == 'logout') {
        if (this.logoutEvent !== null) {
          this.logoutEvent()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-user {
  width: 56px;
  display: flex;
  align-items: center;
  &__info {
    color: #fff;
    margin: 16px;
  }
  &__avatar {
    width: 16px;
    height: 16px;
    padding: 4px;
    border-radius: 50%;
    margin-right: 20px;
    i {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
