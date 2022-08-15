<template>
  <div class="detailWrapper">
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
.detailWrapper {
  font-size: 13px;
  .el-row {
    margin-top: 5px;
  }
  .el-col {
    height: 32px;
    padding: 5px 10px 2px 10px;
    display: flex;
    align-items: center;
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