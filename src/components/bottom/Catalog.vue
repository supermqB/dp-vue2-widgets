<template>
  <div class="catalogBottomWrap">
    <p v-for="(label,index) in labelList" :key="index">
      <span>{{ label }}：</span>
      <span>{{ value[index] ? value[index] : '' }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    labelList: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.catalogBottomWrap {
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
  border-top: 1px solid #E5E5E5;
  font-size: 12px;
  p {
    width: 80px;
    line-height: 30px;
  }
}
</style>