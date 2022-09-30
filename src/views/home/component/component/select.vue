<template>
  <div class="select">
    <p>{{ name }}</p>
    <el-select v-model="value" placeholder="请选择"  @change="chanegVal">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
       >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      require:true,
      default:() => {}
    },
    options:{
      type:Array,
      // require:true,
      default:() => {}
    }
  },
  data(){
    return {
      value:''
    }
  },
  methods:{
    chanegVal(val){
      this.$emit('selected',val)
    }
  }
}
</script>

<style scoped lang="scss">
  .select {
    display: flex;
    p {
      margin-right: 5px;
      line-height: 28px;
      font-size: 13px;
    }
  }
</style>