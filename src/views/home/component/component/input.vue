<template>
  <div class="input">
    <p class="name">{{ name }}</p>
    <el-input v-model="input" placeholder="请输入" @change="inputVal"></el-input>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      require:true
    }
  },
  data(){
    return {
      input:''
    }
  },
  methods:{
    inputVal(val){
      this.$emit('inputVal',val)
    }
  }
}
</script>

<style scoped lang="scss">
  .input {
    display: flex;
    p {
      margin-right: 5px;
      line-height: 28px;
      font-size: 13px;
      white-space:nowrap;
    }
  }
</style>