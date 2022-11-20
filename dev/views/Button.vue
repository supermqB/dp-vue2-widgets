<template>
  <div class="button-page">
    <div class="button-page__line">
      <el-button type="primary" plain>两字</el-button>
    </div>
    <div class="button-page__line">
      <el-button type="primary" plain>三个字</el-button>
      <el-button type="primary" plain>四个文字</el-button>
    </div>

    <div class="button-page__line">
      <dp-subtitle text="dp-button-group" />
      <dp-button-group
        :btnCfgs="[
          [
            { name: 'pass', label: '通过' },
            { name: 'noPass', label: '不通过' }
          ]
        ]"
      />
      <dp-button-group
        :btnCfgs="[
          [
            { name: 'pass', label: '通过', props: { disabled: true } },
            { name: 'noPass', label: '不通过', props: { disabled: true } }
          ]
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button-page {
  padding: 40px;
  &__line {
    height: 40px;
    line-height: 40px;
  }
}
</style>
