<template>
  <div class="detailWrapper">
    <el-col :span="11">
      <p>
        字典编码:
        <span class="value">{{ code }}</span>
      </p>
      <p>
        标准来源:
        <span class="value">{{ sourceType }}</span>
      </p>
    </el-col>
    <el-col :span="13">
      <p style="width: 100%">
        标准依据:
        <span class="value">{{ basis }}</span>
      </p>
    </el-col>
    <el-col :span="11">
      <p>
        创建日期:
        <span class="value">{{ getDate(createTime) }}
        </span>
      </p>
      <p>
        更新日期:
        <span class="value">{{ getDate(updateTime) }}
      </span>
      </p>
    </el-col>
    <el-col :span="13">
      <p style="width: 100%">
        种类:
        <span class="value">{{ type }}</span>
      </p>
    </el-col>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: ''
    },
    sourceType: {
      type: String,
      default: '',
    },
    basis: {
      type: String,
      default: '',
    },
    createTime: {
      type: String,
      default: '',
    },
    updateTime: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    getDate(str) {
      if (!str) return ''
      const arr = str.split('T')
      if (arr.length !== 2) return ''
      return arr[0] 
    }
  },
}
</script>

<sstyle scoped lang="scss">
.detailWrapper {
  margin-top: 4px;
  margin-bottom: -3px;
  font-size: 13px;
  .el-col {
    height: 30px;
    padding: 0 10px;
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