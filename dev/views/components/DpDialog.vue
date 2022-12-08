<template>
  <div>
    <el-button type="primary" plain @click="handleOpenDialog">
      打开DpDialog弹框
    </el-button>
    <dp-dialog :visible.sync="visible" @save="handleSave" @open="handleOpen">
      我是body部分
    </dp-dialog>

    <el-button type="primary" plain @click="handleOpenDialogInfo">
      打开DpDialog(type="info")弹框
    </el-button>
    <dp-dialog
      :visible.sync="visibleInfo"
      type="info"
      @save="handleSave('info')"
      @open="handleOpen('info')"
    >
      我是body部分
    </dp-dialog>
  </div>
</template>

<script>
export default {
  name: 'CompDpDialog',
  data() {
    return {
      visible: false,
      visibleInfo: false
    }
  },
  methods: {
    handleOpenDialog() {
      console.log('打开default')
      this.visible = true
    },
    handleOpenDialogInfo() {
      console.log('打开info')
      this.visibleInfo = true
    },
    handleSave(type = 'default') {
      console.log('保存' + type)
    },
    handleOpen(type = 'default') {
      console.log('打开' + type)
    }
  }
}
</script>
