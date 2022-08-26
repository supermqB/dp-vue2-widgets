<template>
  <dp-layout-container>
    <template #main>
      <CenterVue></CenterVue>
    </template>
    <template #asideRight>
      <RightVue></RightVue>
    </template>
  </dp-layout-container>
</template>

<script>
import CenterVue from './center'
import RightVue from './right'
export default {
  components: {
    CenterVue,
    RightVue
  }
}
</script>