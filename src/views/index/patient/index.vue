<template>
  <dp-layout-container>
    <template #asideLeft>
      <IndexPatientAside />
    </template>
    <template #main>
      <IndexPatientMain />
    </template>
    <template #mainBottom>
      <IndexPatientMainBottom />
    </template>
  </dp-layout-container>
</template>

<script>
import IndexPatientAside from './aside'
import IndexPatientMain from './main'
import IndexPatientMainBottom from './main-bottom'
export default {
  name: 'IndexPatient',
  components: { IndexPatientAside, IndexPatientMain, IndexPatientMainBottom }
}
</script>
