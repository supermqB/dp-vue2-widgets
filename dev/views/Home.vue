<script>
import Vue from 'vue'

import { Title, Dialog, CatalogButtons } from '@/entry'

export default Vue.extend({
  components: { Title, Dialog, CatalogButtons },
  name: 'ServeDev',
  methods: {
    openDlg() {
      this.$refs.dlg.toggleOpen()
    }
  }
})
</script>

<template>
  <div style="h22eight: 100%">
    <Title :title="'test'" />
    <el-button @click="openDlg">open dialog</el-button>
    <Dialog :title="'弹框标题'" ref="dlg">test</Dialog>
    <CatalogButtons />
  </div>
</template>
