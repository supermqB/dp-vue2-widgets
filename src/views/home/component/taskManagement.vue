<template>
    <el-card class="boxCard">

      <!-- 头部 -->
      <div slot="header">
        <el-button>任务管理</el-button>
        <el-button style="float: right; padding: 3px 0" type="text" @click="closeCard"><i class="el-icon-close"></i></el-button>
      </div>

      <!-- 查询框 -->
      <div class="condition">
        <Select :name="'模块'" :options="modelOptions" @selected="selectModel"></Select>
        <Input :name="'对象名称'" @inputVal="inputObJectName"></Input>
        <Input :name="'操作人'" @inputVal="inputOperator"></Input>
        <Select :name="'状态'" :options="stateOption" @selected='selectState'></Select>
        <el-button>查询</el-button>
      </div>

      <!-- 表格展示内容 -->
       <el-table 
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          prop="1"
          label="序号"
          width="80"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="2"
          label="系统模块"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="3"
          label="任务来源"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="4"
          label="对象名称"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="5"
          label="任务内容"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="6"
          label="操作人"
          width="80"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="7"
          label="任务状态"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="8"
          label="状态时间"
          >
        </el-table-column>
      </el-table>
      

      <!-- 分页器 -->
      <!-- <el-pagination
        style="float: right; padding: 3px 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, prev, pager, next, sizes, jumper"
        :total="400">
      </el-pagination> -->

    </el-card>
</template>

<script>
import Select from './component/select.vue'
import Input from './component/input.vue'
export default {
  components: {
    Select, Input
  },
  
 
  data() {
    return {
      taskOption:{
        systemModule:'',
        objectName:'',
        operator:'',
        taskStatus:''
      },
      modelOptions:[
        {label:'请选择',value:'请选择'},
        {label:'值域',value:'值域'},
        {label:'主索引',value:'主索引'}
      ],
      stateOption:[
        {label:'请选择',value:'请选择'},
        {label:'已完成',value:1},
        {label:'未完成',value:0}
      ],

      tableData:[
        {
          1:213123214,
          2:2131223123213214,
          3:213132432423214,
          4:'我为七万去问我去饿的武器去问我去饿武器回去我i的话',
          5:21313232432423432432423214,
          6:213123214,
          7:213123232432432432414,
          8:213125353214,
        }
      ]
    }
  },
  props: {
    showCard: {
      type:String,
      default:''
    }
  },
  methods: {
    closeCard() {
      this.$emit('update:showCard','')
      console.log(this.showCard);
    },
    selectModel(val){
      this.taskOption.systemModule = val
    },
    selectState(val){
       this.taskOption.taskStatus = val
    },
    inputObJectName(val){
       this.taskOption.objectName = val
    },
    inputOperator(val){
       this.taskOption.operator = val
    }
  },
  watch:{
    taskOption:{
      handler(val){
        console.log(val);
      },
      deep:true
    }
  }
}
</script>

<style scopet lang="scss" >
  .boxCard {
    margin-top: 41px;
    width: 100%;
    height: 100%;
    .el-card__header {
      padding: 5px 10px;
    }
    .el-card__body {
      height: 100%;
    }
    .condition {
      display: flex;
      justify-content: space-between;
    }
    .el-table {
      margin-top: 10px;
    }
  }

</style>