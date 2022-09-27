<template>
  <div class="select">
    <p>{{ name }}</p>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      require:true
    },
    value:{
      type:Array,
      // require:true
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