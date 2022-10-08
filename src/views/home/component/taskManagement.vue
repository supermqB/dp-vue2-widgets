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
        <el-button @click="inquire">查询</el-button>
      </div>

      <!-- 表格展示内容 -->
       <el-table 
        :data="suspectedPageInfo"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          label="序号"
          width="80"
          type="index"
          :index="indexMethod"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="entity"
          label="系统模块"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="userName"
          label="任务来源"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="identifier"
          label="对象名称"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="nameCn"
          label="任务内容"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="updateBy"
          label="操作人"
          width="80"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="state"
          label="任务状态"
          >
        </el-table-column>
        <el-table-column
          align="center"
          prop="updateTime"
          label="状态时间"
          >
        </el-table-column>
      </el-table>
      

      <!-- 分页器 -->
      <el-pagination
        style="float: right; padding: 20px 0 60px 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageInfo.curPage"
        :page-size.sync="pageInfo.pageSize"
        :page-sizes="[5, 10, 20, 50]"
        layout="total, prev, pager, next, sizes, jumper"
        :total="pageInfo.totalSize">
      </el-pagination>

    </el-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('home')
import Select from './component/select.vue'
import Input from './component/input.vue'
export default {
  components: {
    Select, Input
  },
  
 
  data() {
    return {
      modelOptions:[
        {label:'请选择',value:'请选择'},
        {label:'值域',value:'值域'},
        {label:'主索引',value:'主索引'}
      ],
      stateOption:[
        {label:'请选择',value:'请选择'},
        {label:'已完成',value:1},
        {label:'未完成',value:0}
      ]
    }
  },
  computed:{
      ...mapState(['taskOption','suspectedPageInfo','pageInfo']),
  },
  props: {
    showCard: {
      type:String,
      default:''
    }
  },
  methods: {
    ...mapActions(['getSuspectedPageInfo','getSuspectedPageInfo']),
    ...mapMutations(['setCurPage','setPageSize']),
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
    },
    async inquire(){
      await  this.getSuspectedPageInfo()
    },
    indexMethod(index){
      return index + 1
    },
    //页
    handleSizeChange(v){
      this.getSuspectedPageInfo()
    },
    //展示条数
    handleCurrentChange(v){
      this.getSuspectedPageInfo()
    }
  },
  watch:{
    taskOption:{
      handler(val){
        console.log(val);
      },
      deep:true
    }
  },
  async mounted(){
   await this.getSuspectedPageInfo()
   await console.log(this.suspectedPageInfo,22333333);
  }
}
</script>

<style scopet lang="scss" >
  .boxCard {
    // width: 100%;
    // height: 80%;
    overflow: scroll;
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