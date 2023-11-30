<template>
  <div class="user-wrapper">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <div class="avatar">
          <i class="el-icon-user-solid" />
        </div>
      </span>
      <el-dropdown-menu class="header-user-menu" slot="dropdown">
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
.user-wrapper {
  display: flex;
  align-items: center;
  .avatar {
    width: 16px;
    height: 16px;
    padding: 4px;
    border-radius: 50%;
    i {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
}
.header-user-menu {
  &::v-deep.el-dropdown-menu {
    padding: 5px 0;
  }
  ::v-deep.popper__arrow {
    left: 49px !important;
  }
}
</style>
