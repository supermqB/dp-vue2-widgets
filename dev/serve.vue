<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { DpVue2WidgetsSample } from '@/entry.esm';

export default Vue.extend({
  name: "ServeDev",
  // components: {
  //  DpVue2WidgetsSample,
  // }
});
</script>

<template>
  <div id="app">
    <dp-vue2-widgets-sample />
    <dp-title :title="'test title'"></dp-title>
  </div>
</template>
