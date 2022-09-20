<template>
  <button 
    @click="click"
    :class="{ 'match' : !value }">
  </button>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      click() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  button {
    width: 16px;
    height: 16px;
    border: 0;
    cursor: pointer;
    background: url('@/assets/images/common/icons/unmatch.png');
  }
  .match {
    background: url('@/assets/images/common/icons/match.png');
  }
</style>