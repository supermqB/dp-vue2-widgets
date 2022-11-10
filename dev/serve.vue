<script>
import Vue from "vue";
import ElementUI from "element-ui";

Vue.use(ElementUI);

import "../dist/theme-dp-ui/index.css";
import { Title, Dialog,CatalogButtons } from "@/entry";

export default Vue.extend({
  components: { Title, Dialog },
  name: "ServeDev",
  methods: {
    openDlg() {
      this.$refs.dlg.toggleOpen();
    },
  },
});
</script>

<template>
  <div id="app">
    <Title :title="'test'" />
    <el-button @click="openDlg">open dialog</el-button>
    <Dialog :title="'弹框标题'" ref="dlg">test</Dialog>
    <CatalogButtons/>
  </div>
</template>
