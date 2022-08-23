export const drg = function () {
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

export const mat = function () {
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

export const dis = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sdis_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'wm_disease_name'
    },
    {
      type: 'el-input',
      label: '疾病分类',
      id: 'wm_disease_class'
    }
  ]
}

export const tcm = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'stcm_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'tcm_disease_name'
    },
    {
      type: 'el-input',
      label: '疾病分类',
      id: 'tcm_disease_class'
    }
  ]
}
export const hrb = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'shrb_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'tcm_herb_name'
    },
    {
      type: 'el-input',
      label: '类别',
      id: 'tcm_herb_type'
    },
    {
      type: 'el-input',
      label: '功效分类',
      id: 'effcet_class_name'
    },
    {
      type: 'el-input',
      label: '来源',
      id: 'tcm_herb_source'
    },
    {
      type: 'el-input',
      label: '功能主治',
      id: 'main_fuction'
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
  drg: ['drug_name'],
  dis: ['wm_disease_name', 'wm_disease_class'],
  tcm: ['tcm_disease_name', 'tcm_disease_class'],
  hrb: ['tcm_herb_name', 'tcm_herb_type','effcet_class_name','tcm_herb_source','main_fuction']
}

export default { drg, mat, dis, tcm, hrb }
