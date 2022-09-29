<template>
  <div class="input">
    <div class="name">{{ name }}</div>
    <el-input v-model="input" placeholder="请输入"></el-input>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      require:true
    }
  }
}
</script>

<style scoped lang="scss">
  .input {
    display: flex;
    .name {
      margin-right: 5px;
      line-height: 28px;
      font-size: 13px;
      width: 35px;
    }
  }
</style>