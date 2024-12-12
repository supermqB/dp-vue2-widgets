<template>
  <el-drawer
    class="dp_drawer"
    :visible.sync="visible"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #title>
      <Title :title="title" :show-underline="false" />
    </template>
    <template #default>
      <div class="content">
        <slot name="default"> drawer content </slot>
      </div>
      <div class="footer">
        <slot name="footer">
          <div class="footer_btn">
            <el-button v-if="!!cancelText" @click="toggleOpen(false)">{{
              cancelText
            }}</el-button>
            <el-button
              v-if="!!confirmText"
              type="primary"
              plain
              @click="handleSave()"
              >{{ confirmText }}</el-button
            >
          </div>
        </slot>
      </div>
    </template>
  </el-drawer>
</template>

<script>
import Title from './Title.vue'

export default {
  components: {
    Title
  },
  props: {
    title: {
      type: String,
      default: () => 'drawer title'
    },
    validate: {
      type: Function,
      default: () => {
        return () => true
      }
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '保存'
    }
  },
  data() {
    return { visible: false }
  },
  methods: {
    toggleOpen(open = undefined) {
      this.visible = open != undefined ? open : !this.visible
    },
    handleSave() {
      if (!this.validate()) return
      this.$emit('drawer-save')
      this.toggleOpen(false)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.dp_drawer {
  .el-drawer__header {
    padding: 3px 0 2px 16px;
    margin-bottom: unset;
    border-bottom: 1px solid #e5e5e5;
    .el-drawer__close-btn {
      font-size: 16px;
      padding-right: 12px;
    }
  }
  .el-drawer__body {
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      min-height: 0;
      overflow: auto;
    }
    .footer .footer_btn {
      height: 40px;
      display: flex;
      align-items: center;
      border-top: 1px solid #e5e5e5;
      justify-content: flex-end;
      padding-right: 16px;
    }
  }
}
</style>
