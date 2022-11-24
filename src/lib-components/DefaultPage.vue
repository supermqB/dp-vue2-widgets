<template>
  <div class="dp-default-page">
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'DpDefaultPage',
  props: {
    text: {
      type: String,
      default: '建设中...'
    }
  }
}
</script>
<style lang="scss" scoped>
.dp-default-page {
  display: flex;
  height: 100%;
  align-items: center;
  div {
    flex: 1;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
}
</style>
