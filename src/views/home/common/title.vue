<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .title {
    padding: 0 15px;
    border-left: 3px solid #1890FF
  }
</style>