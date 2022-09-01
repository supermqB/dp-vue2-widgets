<template>
  <dp-layout-container>
    <template #asideLeft>
      <Group />
    </template>
    <template #main>
      <Center />
    </template>
  </dp-layout-container>
</template>

<script>
import Group from './Group'
import Center from './Center'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('docs')
export default {
  methods: { ...mapActions(['loadCommonDocCtlg']) },
  mounted(){
      this.loadCommonDocCtlg()
  },
  components: { Group, Center }
}
</script>
