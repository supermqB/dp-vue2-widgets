<template>
  <div class="wrapper">
    <div class="header">
      <span>版本</span>
      <el-select v-model="version">
        <el-option value="v1.0"></el-option>
      </el-select>
      <i class="master">主</i>
      <span>状态</span>
      <el-select v-model="version">
        <el-option value="v1.0"></el-option>
      </el-select>
    </div>
    <el-col :span="11">
      <p>
        字典编码:
        <span class="value">{{ code }}</span>
      </p>
      <p>
        标准来源:
        <span class="value">{{ source }}</span>
      </p>
    </el-col>
    <el-col :span="13">
      <p style="width: 100%">
        标准依据:
        <span class="value">{{ reason }}</span>
      </p>
    </el-col>
    <el-col :span="11">
      <p>
        创建日期:
        <span class="value">{{ createDate }}
        </span>
      </p>
      <p>
        更新日期:
        <span class="value">{{ updateDate }}
      </span>
      </p>
    </el-col>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      default: '已启动'
    },
    code: {
      type: String,
      default: 'DE02.01.10.018'
    },
    source: {
      type: String,
      default: '国家推荐标准',
    },
    reason: {
      type: String,
      default: 'GB/T 2261.1-2003 个人基本信息分类与代码 第1部分 人的性别代码',
    },
    createDate: {
      type: String,
      default: '2022.01.01',
    },
    updateDate: {
      type: String,
      default: '2022.05.01'
    },
  },
  data() {
    return {
      version: ''
    }
  },
}
</script>

<sstyle scoped lang="scss">
.wrapper {
  font-size: 13px;
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 41px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
  }
  i.master {
   display: inline-block;
   width: 20px;
   height: 20px;
   margin-right: 5px;
   border-radius: 20px; 
   border: 1px solid #1890FF;
   font-style: normal;
   text-align: center;
   line-height: 20px;
   color: #1890FF;
   background-color: rgba(24,144,255,0.1);
  }
  .el-row {
    margin-top: 5px;
  }
  .el-col {
    height: 35px;
    padding: 5px 10px 2px 10px;
    display: flex;
    align-items: center;
  }
  .el-select {
    margin: 0 10px 0 9px;
    width: 150px;
  }
  p {
    width: 50%;
    @include ellipsisNoWrap()
  }
  .value {
    padding-left: 5px
  }
}

</sstyle>