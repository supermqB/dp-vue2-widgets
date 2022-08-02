<template>
  <div class="wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>事件模型管理</el-breadcrumb-item>
        <el-breadcrumb-item>E000-卫生事件记录(event_record)</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="status" 
        :class="[ status === 'running' ? 'running' : 'edit' ]">
        {{ status === 'running' ? '已启动' : '编辑中'  }}
      </div>
      <div class="buttons">
        <el-button type="primary" @click="() => status = 'running'">新增</el-button>
        <el-button type="primary">编辑</el-button>
      </div>
    </div>
    <div class="search">
      <Form class="searchForm" :formData="formData" :formCfg="formCfg"></Form>
      <div class="buttons">
        <el-button>查询</el-button>
        <el-button type="text">高级搜索</el-button>
      </div>
    </div>
    <div class="content">
      <Table
        :tableConfig="tableConfig"
        :tableData="tableData"
        :pageInfo="pageInfo"
      ></Table>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import Table from '@/components/GeneralTable.vue';
import formCfg from './config/searchForm';
import tableConfig from './config/tableColumn';

export default {
  components: {
    Form, Table
  },
  data() {
    return {
      status: '',
      formData: {
        identifier: '',
        field: '',
        type: '',
        status: '',
        primary: ''
      },
      formCfg,
      tableConfig,
      tableData: [
        {
          index: 1
        },{
          index: 2
        }, {
          index: 3
        }
      ],
      pageInfo: {
        curPage: 1,
        pageSize: 10,
        totalSize: 3,
        totalPage: 1
      }
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
        color: #EB9E05;
        background-color: rgba(235,158,5,0.2)
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
    position: relative;
    width: 100%;
    height: 41px;
    padding-left: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
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
  .content {
    padding: 0 5px;
  }
}
</style>