<template>
  <div class="mdm_ceter_wrapper">
    <div class="header">
      <div class="crumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>主索引管理</el-breadcrumb-item>
          <el-breadcrumb-item>{{ selectedMDM.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="actions">
        <el-button type="primary" @click="startEditMDM">编 辑</el-button>
        <el-button type="primary" @click="startCreateMDM">新 增</el-button>
      </div>
    </div>
    <div class="search">
      <div v-for="item in mdmprops" :key="item.prop">
        <span>{{ item.prop }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <div class="table"></div>
  </div>
</template>
<script>
import { mapState as globalMapState } from 'vuex'
export default {
  data() {
    return {
      mdmprops: [
        { prop: '标准来源：', value: 'xxxx' },
        { prop: ' 创建日期：', value: '2022/01/01' },
        { prop: '更新日期：', value: '2022/05/01' }
      ]
    }
  },
  computed: {
    ...globalMapState({ selectedMDM: state => state.mdm.selectedMDM })
  },
  methods: {
    startEditMDM() {},
    startCreateMDM() {}
  }
}
</script>
<style lang="scss" scoped></style>
