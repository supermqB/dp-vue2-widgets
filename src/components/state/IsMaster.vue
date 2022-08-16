<template>
  <div>
    <span v-if="isMaster" class="master">主</span>
  </div>
</template>

<script>
export default {
  props: {
    isMaster: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.master {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 20px; 
  border: 1px solid #1890FF;
  font-style: normal;
  text-align: center;
  line-height: 20px;
  color: #1890FF;
  background-color: rgba(24,144,255,0.1);
}
</style>