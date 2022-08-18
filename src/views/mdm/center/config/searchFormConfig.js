export const generateSearchFormConfig = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sdrg_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'drug_name'
    },
    {
      type: 'el-input',
      label: '批准文号',
      id: 'drug_approval_no'
    },
    {
      type: 'el-select',
      options: [
        { label: '西药', value: '10' },
        { label: '中药', value: '20' },
        { label: '中成药', value: '21' }
      ],
      label: '药品类别',
      id: 'drug_type_code'
    },
    {
      type: 'el-autocomplete',
      elOptions: {
        'fetch-suggestions': (queryString, cb) => {
          let orginOptions = this.drugFormList
          let filteredValues = queryString
            ? orginOptions.filter(item => item.indexOf(queryString) != -1)
            : orginOptions
          cb(filteredValues.map(item => ({ value: item })))
        },
        placeholder: '请输入并选择'
      },
      label: '注册剂型',
      id: 'drug_form_name'
    }
  ]
}

export const generateSearchFormConfig_mat = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'smat_inx'
    },
    {
      type: 'el-input',
      label: '耗材名称',
      id: 'material_name'
    },

    {
      type: 'el-input',
      label: '注册证号',
      id: 'registration_number'
    },
    {
      type: 'el-input',
      label: '一级分类',
      id: 'material_first_name'
    },
    {
      type: 'el-input',
      label: '二级分类',
      id: 'material_second_name'
    },
    {
      type: 'el-input',
      label: '三级分类',
      id: 'material_third_name'
    },
    {
      type: 'el-input',
      label: '生产企业',
      id: 'mnf_company_name'
    }
  ]
}

export const likeFields = {
  mat: [
    'material_name',
    'material_first_name',
    'material_second_name',
    'material_third_name',
    'mnf_company_name'
  ],
  drg: ['drug_name']
}
