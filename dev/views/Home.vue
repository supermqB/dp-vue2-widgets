<script>
import Vue from 'vue'

import { Title, Dialog, CatalogButtons, SideCatalog } from '@/entry'

export default Vue.extend({
  components: { Title, Dialog, CatalogButtons, SideCatalog },
  name: 'ServeDev',
  data() {
    return {
      catalogs: [
        {
          label: 'test',
          id: 'c-1',
          number: 27361516
        }
      ]
    }
  },
  methods: {
    openDlg() {
      this.$refs.dlg.toggleOpen()
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
  </div>
</template>
