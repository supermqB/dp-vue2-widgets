<template>
  <div class="wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>事件模型管理</el-breadcrumb-item>
        <el-breadcrumb-item>E000-卫生事件记录(event_record)</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="running status" v-if="status === 'running'">已启动</div>
      <!-- <div class="edit status" v-else>编辑中</div> -->
      <div class="buttons">
        <el-button type="primary">新增</el-button>
        <el-button type="primary">编辑</el-button>
      </div>
    </div>
    <div class="search">
      <Form class="searchForm" :formData="formData" :formCfg="formCfg"></Form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import formCfg from './config/searchForm';
export default {
  components: {
    Form
  },
  data() {
    return {
      status: 'running',
      formData: {
        identifier: '',
        field: '',
        type: '',
        status: '',
        primary: ''
      },
      formCfg
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  /* padding: 0 10px; */
  .header {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 41px;
    padding-left: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
    .status {
      width: 46px;
      height: 18px;
      margin-top: 1px;
      margin-left: 10px;
      line-height: 18px;
      text-align: center;
      border-radius: 10px;
      font-size: 10px;
      &.running {
        color: #67C23A;
        background-color: rgba(103,194,58,0.2);
      }
      &.edit {

      }
    }
    .buttons {
      position: absolute;
      right: 0;
      top: 0;
      width: 135px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .search {
    width: 100%;
    height: 41px;
    padding-left: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
  }
}
</style>