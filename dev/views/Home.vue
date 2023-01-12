<template>
  <div style="height: 100%">
    <Title :title="'test'" />
    <el-button @click="openDlg">open dialog</el-button>
    <Dialog :title="'弹框标题'" ref="dlg">test</Dialog>
    <CatalogButtons />
    <div style="width: 200px">
      <SideCatalog :data="catalogs" />
    </div>
    <div style="margin-top: 10px">
      <CompDpDialog />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

import { Title, Dialog, CatalogButtons, SideCatalog } from '@/entry'

import CompDpDialog from './components/DpDialog.vue'

export default Vue.extend({
  components: { Title, Dialog, CatalogButtons, SideCatalog, CompDpDialog },
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
