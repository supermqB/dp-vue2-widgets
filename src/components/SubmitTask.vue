<template>
  <el-dialog
    title="提交列表"
    :visible="showSubmitModel"
    :close-on-click-modal="false"
    :modal-append-to-body="false"
    :before-close="handleClose"
  >
    <el-table
      :data="tableData"
      highlight-current-row
      :header-cell-style="{ background: '#F5F7FA' }"
      style="width: 100%"
      max-height="500"
      stripe
      border
    >
      <el-table-column
        v-for="(item, indexs) in submitHeader"
        :key="indexs"
        :property="item.property"
        :type="item.type"
        :width="item.width"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="showSubmitModel = false">取 消</el-button>
      <el-button type="primary" @click="showSubmitModel = false"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'SubmitTask',
  props: {
    tableData: Array,
    showSubmitModel: Boolean,
    submitHeader: Array
  },
  data() {
    return {}
  },
  mounted: function () {
    console.log(this.tableData, '111')
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.showSubmitModel = false
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.submit {
}
</style>
<style>
.el-dialog {
}
</style>
