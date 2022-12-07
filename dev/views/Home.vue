<script>
import Vue from 'vue'

import { Title, Dialog, CatalogButtons, SideCatalog, DpDialog } from '@/entry'

export default Vue.extend({
  components: { Title, Dialog, CatalogButtons, SideCatalog, DpDialog },
  name: 'ServeDev',
  data() {
    return {
      catalogs: [
        {
          label: 'test',
          id: 'c-1',
          number: 27361516
        }
      ],
      dialogVisible: false
    }
  },
  methods: {
    openDlg() {
      this.$refs.dlg.toggleOpen()
    },
    handleOpenDialog() {
      this.dialogVisible = true
    },
    handleSave() {
      console.log('保存')
    },
    handleOpen() {
      console.log('打开')
    }
  }
})
</script>

<template>
  <div>
    <Title :title="'test'" />
    <el-button @click="openDlg">open dialog</el-button>
    <Dialog :title="'弹框标题'" ref="dlg">test</Dialog>
    <CatalogButtons />
    <div style="width: 200px">
      <SideCatalog :data="catalogs" />
    </div>
    <div style="margin-top: 10px">
      <el-button type="primary" @click="handleOpenDialog"
        >打开DpDialog弹框</el-button
      >
      <DpDialog
        :dialogVisible.sync="dialogVisible"
        type="info"
        @handleSave="handleSave"
        @open="handleOpen"
      >
        我是body部分
      </DpDialog>
    </div>
  </div>
</template>

<style lang="scss"></style>
