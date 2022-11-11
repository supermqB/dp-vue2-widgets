<template>
  <div class="dp-default-page">
    <div>{{text}}</div>
  </div>

</template>

<script>
export default {
  name: 'DpDefaultPage',
  props: {
    text: {
      type: String,
      default: '建设中...'
    },
  },
}
</script>
