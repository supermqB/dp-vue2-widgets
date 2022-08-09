<template>
  <div class="checkrule_wrapper" v-if="selectedDataElem != null">
    <CardVue title="非法字符校验">
      <el-checkbox v-model="illegalChar.general">通用非法字符校验</el-checkbox>
      <el-checkbox v-model="illegalChar.only">仅非法字符校验</el-checkbox>
    </CardVue>
    <CardVue title="类型格式校验">
      <FormVue v-bind="formatCheck" />
    </CardVue>
    <CardVue title="字段内涵校验" class="fieldContent">
      <el-checkbox
        v-model="fieldCheck.enableValDomain"
        :disabled="!hasValDomain"
        >值域字典</el-checkbox
      >
      <!--span>选择值域</span-->
      <div class="val_domain_dict">
        <el-autocomplete
          class="inline-input"
          v-model="fieldCheck.valDomain"
          :fetch-suggestions="searchDomainByList"
          placeholder="搜索"
          :disabled="!fieldCheck.enableValDomain"
        ></el-autocomplete>
      </div>

      <el-checkbox v-model="fieldCheck.enableValRange" :disabled="!hasValRange"
        >取值范围检验</el-checkbox
      >
      <div class="num_range_area">
        <div>
          <el-radio
            v-model="fieldCheck.valDomainRange.great"
            label="notequal"
            :disabled="!fieldCheck.enableValRange"
            >&gt;</el-radio
          >
          <el-radio
            v-model="fieldCheck.valDomainRange.great"
            label="equal"
            :disabled="!fieldCheck.enableValRange"
            >&ge;</el-radio
          >
        </div>
        <el-input
          v-model="fieldCheck.valDomainRange.greatVal"
          :disabled="!fieldCheck.enableValRange"
          :placeHolder="rangeFormat"
        ></el-input>

        <div>
          <el-radio
            v-model="fieldCheck.valDomainRange.less"
            label="notequal"
            :disabled="!fieldCheck.enableValRange"
            >&lt;</el-radio
          >
          <el-radio
            v-model="fieldCheck.valDomainRange.less"
            label="equal"
            :disabled="!fieldCheck.enableValRange"
            >&le;</el-radio
          >
        </div>
        <el-input
          v-model="fieldCheck.valDomainRange.lessVal"
          :disabled="!fieldCheck.enableValRange"
          :placeHolder="rangeFormat"
        ></el-input>
      </div>
      <el-checkbox v-model="fieldCheck.enableRegexp" :disabled="!hasRegexp"
        >表达格式规范校验</el-checkbox
      >
      <el-input
        type="textarea"
        :rows="2"
        placeholder="输入正则表达式"
        v-model="fieldCheck.regexpText"
        :disabled="!fieldCheck.enableRegexp"
      >
      </el-input>
    </CardVue>
    <div class="btn_area">
      <el-button @click="reset">重置</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>
<script>
import CardVue from '@/components/list/Card.vue'
import FormVue from '@/components/Form.vue'
import { createNamespacedHelpers, mapState as globalMapState } from 'vuex'
const { mapState, mapMutations, mapActions } =
  createNamespacedHelpers('dataElem/checkRule')

const _formatCheck = {
  formCfg: [
    {
      type: 'el-select',
      options: [
        { label: '字符型(S1)', value: 'S1' },
        { label: '字符型(S2)', value: 'S2' },
        { label: '字符型(S3)', value: 'S3' },
        { label: '逻辑型(L)', value: 'L' },
        { label: '数值型(N)', value: 'N' },
        { label: '日期型(D)', value: 'D' },
        { label: '时间型(DT)', value: 'DT' }
      ],
      label: '数据类型',
      id: 'data_type'
    },
    {
      type: 'el-select',
      options: [],
      label: '字符类型',
      id: 'char_type_code',
      elOptions: {
        disabled: false
      }
    },
    {
      type: 'el-input',
      label: '字符长度',
      id: 'data_length',
      elOptions: {
        disabled: false
      }
    }
  ],
  formRule: {
    data_type: { required: true },
    char_type_code: { required: true },
    data_length: { required: true }
  },
  formData: {
    data_type: 'S1',
    char_type_code: 'N',
    data_length: ''
  }
}

export default {
  data() {
    return {
      rangeFormat: ''
    }
  },
  computed: {
    ...mapState({
      illegalChar: state => state.illegalChar,
      formatCheck: state => ({
        ..._formatCheck,
        formData: state.formatCheckData
      }),
      fieldCheck: state => state.fieldCheck
    }),
    ...globalMapState({
      selectedDataElem: state => state.dataElem.elemList.selectedItem
    }),
    hasValDomain() {
      let enable = this.formatCheck.formData.data_type == 'S3'
      this.fieldCheck.enableValDomain = enable
      return enable
    },
    hasValRange() {
      let type = this.formatCheck.formData.data_type
      let enable = type.indexOf('S') == -1 && type != 'L'
      this.fieldCheck.enableValRange = enable
      return enable
    },
    hasRegexp() {
      let enable = this.formatCheck.formData.data_type != 'L'
      this.fieldCheck.enableRegexp = enable
      return enable
    }
  },
  methods: {
    searchDomainByList(queryString, cb) {
      let orginOptions = this.fieldCheck.valDomainList
      let filteredValues = queryString
        ? orginOptions.filter(item => item.indexOf(queryString) != -1)
        : orginOptions
      cb(filteredValues.map(item => ({ value: item })))
    },
    toggleFormatCheckInput(enable) {
      let fcCfg = this.formatCheck.formCfg
      fcCfg[1].elOptions.disabled = !enable
      fcCfg[2].elOptions.disabled = !enable
    },
    ...mapActions(['save', 'reset'])
  },
  watch: {
    'formatCheck.formData': {
      handler(val) {
        const ops = {
          L: ['N'],
          S1: ['A', 'N', 'AN'],
          S2: ['A', 'N', 'AN'],
          S3: ['A', 'N', 'AN']
        }[val.data_type] || [val.data_type]
        this.formatCheck.formCfg[1].options = [...ops]
        let curCode = val.char_type_code
        ops.indexOf(curCode) == -1 && (val.char_type_code = '')

        this.rangeFormat = ''

        if (val.data_type == 'L') {
          val.char_type_code = 'N'
          val.data_length = 1
          this.toggleFormatCheckInput(false)
          return
        }

        if (val.data_type == 'D') {
          val.char_type_code = 'D'
          val.data_length = 8
          this.toggleFormatCheckInput(false)
          this.rangeFormat = 'YYYYMMDD'
          return
        }

        if (val.data_type == 'DT') {
          val.char_type_code = 'DT'
          val.data_length = 15
          this.toggleFormatCheckInput(false)
          this.rangeFormat = 'YYYYMMDDThhmmss'
          return
        }

        this.toggleFormatCheckInput(true)
      },
      deep: true
    },
    fieldCheck: {
      handler(val) {
        /*  if (!val.enableValDomain) {
        } */
      },
      deep: true
    },
    selectedDataElem() {
      this.reset()
    }
  },
  components: {
    CardVue,
    FormVue
  }
}
</script>
<style lang="scss" scoped>
::v-deep.checkrule_wrapper {
  * {
    font-size: 13px;
    color: #606266;
    font-weight: normal;
  }

  .el-checkbox,
  .el-radio {
    margin: 5px 0;
  }
  .el-form-item {
    margin: 0;
    .el-select,
    .el-input {
      width: 105px;
    }
  }
  .fieldContent {
    .val_domain_dict {
      margin-left: 23px;
    }
    .num_range_area {
      margin-left: 23px;
      .el-radio {
        padding-right: 30px;
      }
      .el-input {
        width: 165px;
      }
    }
    .el-textarea {
      width: 165px;
      margin-left: 23px;
      .el-textarea__inner {
        padding: 5px 8px;
      }
    }
  }
  .btn_area {
    position: fixed;
    bottom: 35px;
    right: 10px;
  }
}
</style>
