<template>
  <div class="checkrule_wrapper">
    <CardVue title="非法字符校验">
      <el-checkbox v-model="formData.generalInvalidChar"
        >通用非法字符校验</el-checkbox
      >
      <el-checkbox v-model="formData.onlyInvalidChar"
        >仅非法字符校验</el-checkbox
      >
    </CardVue>
    <CardVue title="类型格式校验">
      <FormVue v-bind="typeCheck" />
    </CardVue>
    <CardVue title="字段内涵校验">
      <el-checkbox v-model="fieldCheck.enableValDomain">值域字典</el-checkbox>
      <span>选择值域</span>
      <el-autocomplete
        class="inline-input"
        v-model="fieldCheck.valDomain"
        :fetch-suggestions="searchDomainByList"
        placeholder="搜索"
      ></el-autocomplete>

      <el-checkbox v-model="fieldCheck.enableValRange">取值范围检验</el-checkbox>

        <el-radio v-model="fieldCheck.valDomainRange.great" label="notequal">&gt;</el-radio>
        <el-radio v-model="fieldCheck.valDomainRange.great" label="equal"></el-radio>
      
      <el-checkbox v-model="fieldCheck.enableRegexp">表达格式规范校验</el-checkbox>
    </CardVue>
  </div>
</template>
<script>
import CardVue from '@/components/list/Card.vue'
import FormVue from '@/components/Form.vue'
export default {
  data() {
    return {
      formData: {
        generalInvalidChar: true,
        onlyInvalidChar: true,
        formatType: ''
      },
      typeCheck: {
        formCfg: [
          {
            type: 'el-select',
            options: ['数值型', '逻辑型', '日期型', '时间型', '文本型'],
            label: '数据类型',
            id: 'data_type'
          },
          {
            type: 'el-select',
            options: [],
            label: '类型编码',
            id: 'data_code'
          },
          {
            type: 'el-input',
            label: '字符长度',
            id: 'data_length'
          }
        ],
        formRule: {
          data_type: { required: true },
          data_code: { required: true },
          data_length: { required: true }
        },
        formData: {
          data_type: '数值型',
          data_code: 'N',
          data_length: ''
        }
      },
      fieldCheck: {
        enableValDomain: false,
        valDomain: '',
        valDomainList: ['DICT_SEX', 'DICT_NAME'],
        enableValRange: false,
        valDomainRange: {
          great: 'equal',
          greatVal: 0,
          less: 'equal',
          lessVal: 50
        },
        enableRegexp: false,
        regexpText: '.*'
      }
    }
  },
  components: {
    CardVue,
    FormVue
  },
  methods: {
    searchDomainByList(queryString, cb) {
      let orginOptions = this.fieldCheck.valDomainList
      let filteredValues = queryString
        ? orginOptions.filter(item => item.indexOf(queryString) != -1)
        : orginOptions
      cb(filteredValues.map(item => ({ value: item })))
    }
  },
  watch: {
    'typeCheck.formData': {
      handler(val) {
        const ops = {
          数值型: ['N'],
          逻辑型: ['N'],
          日期型: ['D'],
          时间型: ['DT'],
          文本型: ['A', 'N', 'AN']
        }[val.data_type]
        this.typeCheck.formCfg[1].options = [...ops]
        let curCode = this.typeCheck.formData.data_code
        ops.indexOf(curCode) == -1 && (this.typeCheck.formData.data_code = '')

        if (val.data_type == '逻辑型') {
          this.typeCheck.formData.data_length = 1
        }

        if (val.data_type == '日期型') {
          this.typeCheck.formData.data_code = 'D'
          this.typeCheck.formData.data_length = 8
        }

        if (val.data_type == '时间型') {
          this.typeCheck.formData.data_code = 'DT'
          this.typeCheck.formData.data_length = 15
        }
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.checkrule_wrapper * {
  font-size: 13px;
  color: #606266;
  font-weight: normal;
  .el-checkbox,
  .el-radio {
    margin: 5px 0;
  }
  .el-form-item {
    margin: 0;
    .el-select,
    .el-input {
      width: 80px;
    }
  }
}
</style>
