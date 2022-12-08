<template>
  <el-dialog
    ref="dpDialog"
    class="dp-dailog"
    :title="title"
    :visible.sync="_visible"
    :width="width"
    :close-on-click-modal="closeOnClickModal"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #default>
      <div
        class="dialog-body"
        :style="{ 'min-height': minHight, 'max-height': maxHight }"
      >
        <slot></slot>
      </div>
    </template>
    <template #footer>
      <slot name="footer">
        <div v-if="type === 'default'" class="footer-btn">
          <el-button @click="_visible = false">取 消</el-button>
          <el-button type="primary" plain @click="handleSave">保 存</el-button>
        </div>
        <div v-if="type === 'info'" class="footer-btn">
          <el-button type="primary" plain @click="_visible = false"
            >确 定</el-button
          >
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'DpDialog',
  props: {
    // Dialog的标题
    title: {
      type: String,
      default: '标题'
    },
    // 是否显示Dialog
    visible: {
      type: Boolean,
      default: false
    },
    // Dialog的宽度
    width: {
      type: String,
      default: '50%'
    },
    // Dialog-body的最小高度
    minHight: {
      type: String,
      default: '200px'
    },
    // Dialog-body的最大高度
    maxHight: {
      type: String,
      default: '50vh'
    },
    // 是否可以通过点击 modal(遮罩，弹窗外部区域) 关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    // 类型：default:默认显示取消和保存；info:默认显示确定
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {}
  },
  computed: {
    _visible: {
      get() {
        return this.visible
      },
      set(v) {
        this.$emit('update:visible', v)
      }
    }
  },
  methods: {
    // 保存
    handleSave() {
      this.$emit('save')
    }
  }
}
</script>

<style scoped lang="scss">
$spacing16: 16px;
::v-deep .el-dialog {
  .el-dialog__header {
    height: 46px;
    padding: $spacing16 $spacing16 0;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    .el-dialog__title {
      font-size: 16px;
      color: #303133;
      font-weight: 600;
      line-height: normal;
    }
    .el-dialog__headerbtn {
      top: $spacing16;
      right: $spacing16;
    }
  }
  .el-dialog__body {
    padding: 20px 24px;
    overflow: auto;
  }
  .el-dialog__footer {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 $spacing16;
    border-top: 1px solid #e5e5e5;
    .el-button + .el-button {
      margin-left: 6px;
    }
  }
}
</style>
