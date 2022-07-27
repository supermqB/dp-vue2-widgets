<template>
  <div class="table">
    <div class="table-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadList" :key="index"
          >{{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <button class="table-header-submit" @click.prevent="submit">提 交</button>
    </div>
    <div class="table-handle">
      <div class="table-handle-left">
        <span>原始值</span>
        <div class="table-handle-input">
          <el-input
            v-model="inputOrigin"
            size="small"
            placeholder="请输入"
          ></el-input>
        </div>

        <span>原始编码</span>
        <div class="table-handle-input">
          <el-input
            v-model="inputNum"
            size="small"
            placeholder="请输入"
          ></el-input>
        </div>

        <span>处理状态</span>
        <div class="table-handle-input">
          <el-select
            v-model="selectStatus"
            placeholder="请选择"
            class="table-handle-select"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="table-handle-right">
        <button>查 询</button>
      </div>
    </div>
    <div class="table-content">
      <!-- <el-radio-group v-model="radio" > -->
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        :header-cell-style="{ background: '#F5F7FA' }"
        style="width: 100%"
        height="740"
        stripe
        border
      >
        <el-table-column
          v-for="(item, indexs) in valueHeader"
          :key="indexs"
          :property="item.property"
          :type="item.type"
          :width="item.width"
          :label="item.label"
          @current-change="handleCurrentChange"
        >
          <template v-if="indexs == 0" scope="scope">
            <el-radio
              v-model="radio"
              :label="scope.$index"
              @change="handleRadioChange(scope.$index)"
              >&nbsp;</el-radio
            >
          </template>
          <template v-else-if="item.property == 'handle'" scope="scope">
            <span
              class="table-content-handle"
              :style="[{ opacity: radio == scope.$index ? '1' : '0.5' }]"
              @click="
                radio == scope.$index ? handleAdd(scope.$index, scope.row) : ''
              "
              >新增标准</span
            >&nbsp;&nbsp;
            <span
              class="table-content-handle"
              :style="[{ opacity: radio == scope.$index ? '1' : '0.5' }]"
              @click="
                radio == scope.$index
                  ? handleDelete(scope.$index, scope.row)
                  : ''
              "
              >废弃</span
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- </el-radio-group> -->
    </div>
    <div class="table-pagination" v-if="total > 10">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handlePaginationChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <SubmitTask
      :tableData="tableData"
      :showSubmitModel="showSubmitModel"
      :submitHeader="submitHeader"
    />
  </div>
</template>

<script>
import SubmitTask from '@/components/SubmitTask'

export default {
  name: 'ValueCenters',
  components: { SubmitTask },
  data() {
    return {
      breadList: ['瑞金HIS', '性别(DE07.0000)'],
      inputOrigin: '',
      inputNum: '',
      selectStatus: '',
      currentRow: null,
      showSubmitModel: false,
      options: [
        {
          value: 1,
          label: '已完成'
        },
        {
          value: 2,
          label: '人工分配'
        },
        {
          value: 3,
          label: '自动分配'
        }
      ],
      currentKey: 0,
      radio: null,
      currentPage: 1,
      total: 11,
      valueHeader: [
        {
          width: 83,
          label: ''
        },
        {
          type: 'index',
          width: 50,
          label: '序号'
        },
        {
          property: 'dept',
          width: 88,
          label: '机构'
        },
        {
          property: 'value',
          width: 84.5,
          label: '值域'
        },
        {
          property: 'num',
          width: 87,
          label: '编码'
        },
        {
          property: 'orginValue',
          width: 94,
          label: '原始值'
        },
        {
          property: 'status',
          width: 84,
          label: '处理状态'
        },
        {
          property: 'standNum',
          width: 120,
          label: '标准编码'
        },
        {
          property: 'standNum',
          width: 120,
          label: '标准值'
        },
        {
          property: 'handle',
          label: '操作'
        }
      ],
      submitHeader: [
        {
          type: 'index',
          width: 50,
          label: '序号'
        },
        {
          property: 'dept',
          width: 170,
          label: '机构'
        },
        {
          property: 'value',
          width: 100.5,
          label: '值域'
        },
        {
          property: 'num',
          width: 111,
          label: '原始编码'
        },
        {
          property: 'orginValue',
          width: 126,
          label: '原始值'
        },
        {
          property: 'standNum',
          width: 120,
          label: '标准编码'
        },
        {
          property: 'standNum',
          width: 120,
          label: '标准值'
        },
        {
          property: 'status',
          label: '处理状态'
        }
      ],
      tableData: [
        {
          id: 0,
          dept: '瑞金HIS',
          value: '性别',
          num: 80,
          orginValue: '男转女',
          type: 1,
          status: '已作废',
          standNum: '02',
          standValue: '男性转女性'
        },
        {
          id: 1,
          dept: '瑞金HIS',
          value: '性别',
          num: 67,
          orginValue: 'femail',
          type: 2,
          status: '待处理',
          standNum: '05',
          standValue: '女性'
        },
        {
          id: 2,
          dept: '瑞金HIS',
          value: '性别',
          num: 80,
          orginValue: '男转女',
          type: 2,
          status: '已提交',
          standNum: '02',
          standValue: '男性转女性'
        },
        {
          id: 3,
          dept: '瑞金HIS',
          value: '性别',
          num: 80,
          orginValue: '男转女',
          type: 2,
          status: '已提交',
          standNum: '02',
          standValue: '男性转女性'
        },
        {
          id: 4,
          dept: '瑞金HIS',
          value: '性别',
          num: 80,
          orginValue: '男转女',
          type: 2,
          status: '已提交',
          standNum: '02',
          standValue: '男性转女性'
        },
        {
          id: 5,
          dept: '瑞金HIS',
          value: '性别',
          num: 80,
          orginValue: '男转女',
          type: 2,
          status: '已提交',
          standNum: '02',
          standValue: '男性转女性'
        }
      ]
    }
  },
  methods: {
    handleRadioChange: function (index) {
      console.log(index)
      debugger
    },
    handleSizeChange: function (e) {
      console.log(e)
      debugger
    },
    handlePaginationChange: function (e) {
      console.log(e)
      debugger
    },
    handleCurrentChange: function (e) {
      console.log(e)
      this.currentRow = e
      debugger
    },
    handleAdd: function (index, row) {
      debugger
    },
    handleDelete: function (index, row) {},
    submit: function () {
      this.showSubmitModel = true
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  position: relative;
  width: 100%;
  height: 100%;
  &-header {
    width: 100%;
    height: 40px;
    // padding: 12px 0 4px 6px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    button {
      color: #ffffff;
      background: #1890ff;
    }
  }
  &-handle {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    &-left {
      width: 90%;
      height: 28px;
      margin-top: 7px;

      span {
        display: inline-block;
        width: 52px;
        font-size: 13px;
        color: #606266;
        text-align: right;
        margin-right: 6px;
      }
    }
    &-right {
      height: 28px;
      button {
        margin-top: 6px;
        border: 1px solid #1890ff;
        color: #1890ff;
        background-color: #fff;
      }
    }
    &-input {
      width: 184px;
      height: 28px;
      margin-right: 20px;
      display: inline-block;
    }
    &-select {
      height: 32px;
      ::v-deep input {
        height: 32px !important;
      }
      ::v-deep .el-input__icon {
        line-height: 32px;
      }
    }
  }
  &-content {
    margin: 10px 6px 0 6px;
    height: 79vh;
    overflow-y: auto;
    &-handle {
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #1890ff;
      opacity: 0.5;
    }
  }
  &-pagination {
    width: 100%;
    text-align: right;
    position: absolute;
    right: 0;
    bottom: 15px;
  }
}
button {
  width: 59px;
  height: 28px;
  border: 0;
  border-radius: 2px;
  font-size: 13px;
  text-align: center;
  margin: auto 6px;
}
</style>
<style>
.el-table {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.65);
}
.el-breadcrumb {
  line-height: 40px;
  margin-left: 6px;
}
.el-table__header {
  width: 100%;
  font-family: PingFangSC-Medium;
}
</style>
