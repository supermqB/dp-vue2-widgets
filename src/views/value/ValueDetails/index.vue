<template>
  <div class="detail">
    <div class="detail-header">
      <div class="detail-header-button">值域明细</div>
    </div>
    <div class="detail-handle">
      <span>原始值</span>
      <div class="detail-handle-input">
        <el-input
          v-model="inputOrigin"
          size="small"
          placeholder="请输入"
          suffix-icon="el-icon-search"
        ></el-input>
      </div>
    </div>
    <div class="detail-content">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        :header-cell-style="{ background: '#F5F7FA' }"
        style="width: 100%"
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
          :align="item.align"
          @current-change="handleCurrentChange"
        >
          <template v-if="item.property == 'handle'" scope="scope">
            <img
              v-if="active"
              :src="currentRow == scope.$index ? cancel : choose"
              class="table-content-img"
              @click="handleChange(scope.$index)"
            />
            <span v-else>-</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import choose from '@/assets/images/value/choose.svg'
import cancel from '@/assets/images/value/cancel.svg'
export default {
  name: 'ValueDetails',
  // props:[]
  data() {
    return {
      active: false,
      valueHeader: [
        {
          property: 'handle',
          label: '操作',
          width: 38.5,
          align: 'center'
        },
        {
          property: 'standNum',
          width: 64,
          label: '标准编码'
        },
        {
          property: 'standNum',
          width: 65.5,
          label: '标准值'
        },
        {
          property: 'similiar',
          width: 50,
          label: '相似度',
          align: 'right'
        }
      ],
      tableData: [
        {
          id: 0,
          standNum: '05',
          standValue: '男性转女性',
          similiar: 0.63
        },
        {
          id: 1,
          standNum: '01',
          standValue: '男性',
          similiar: 0.63
        },
        {
          id: 2,
          standNum: '02',
          standValue: '女性',
          similiar: 0.63
        }
      ],

      currentRow: null,
      inputOrigin: '',
      choose,
      cancel
    }
  },
  methods: {
    handleCurrentChange: function (e) {
      console.log(e)
      // this.currentRow = e;

      debugger
    },
    handleChange: function (index) {
      debugger

      console.log(index)
      this.currentRow = index
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  &-header {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #dcdfe6;
    display: flex;
    justify-content: center;
    align-items: center;
    &-button {
      width: 80%;
      // margin: 0 auto;
      // margin-top: 6px;
      border: 1px solid #dcdfe6;
      text-align: center;
      height: 28px;
      line-height: 28px;
      font-family: PingFangSC-Medium;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.65);
    }
  }
  &-handle {
    width: 100%;
    margin-top: 7px;
    span {
      display: inline-block;
      // width: 52px;
      font-size: 13px;
      color: #606266;
      text-align: right;
      margin: 0 6px;
    }
    &-input {
      width: 162px;
      height: 28px;
      margin-right: 6px;
      display: inline-block;
    }
  }
  &-content {
    margin: 10px 6px;
  }
}
</style>
