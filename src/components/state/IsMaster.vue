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
  width: 17px;
  height: 17px;
  margin: 0 3px;
  border-radius: 17px; 
  border: 1px solid #1890FF;
  font-style: normal;
  font-size: 10px;
  text-align: center;
  line-height: 17px;
  color: #1890FF;
  background-color: rgba(24,144,255,0.1);
}
</style>