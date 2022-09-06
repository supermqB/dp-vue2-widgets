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
      id: 'drug_type_code',
      elOptions: {
        clearable: true
      }
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
        placeholder: '请输入并选择',
        clearable: true
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

export const tcs = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'stcs_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'tcm_syndrome_name'
    },
    {
      type: 'el-input',
      label: '分类',
      id: 'tcm_syndrome_class'
    }
  ]
}
export const exm = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sexm_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'exam_item_name'
    },
    {
      type: 'el-input',
      label: '计价单位',
      id: 'charge_unit'
    }
  ]
}
export const lab = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'slab_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'lab_item_name'
    },
    {
      type: 'el-input',
      label: '计价单位',
      id: 'charge_unit'
    }
  ]
}
export const opt = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sopt_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'oper_name'
    },
    {
      type: 'el-input',
      label: '分类',
      id: 'oper_class'
    }
  ]
}
export const itm = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sitm_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'item_name'
    },
    {
      type: 'el-input',
      label: '计价单位',
      id: 'item_price_unit'
    }
  ]
}
export const org = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sorg_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'org_name'
    },
    {
      type: 'el-select',
      options: [
        { label: '三级', value: '1' },
        { label: '三级特等', value: '11' },
        { label: '三级甲等', value: '12' },
        { label: '三级乙等', value: '13' },
        { label: '三级丙等', value: '14' },
        { label: '二级', value: '2' },
        { label: '二级甲等', value: '21' },
        { label: '二级乙等', value: '22' },
        { label: '二级丙等', value: '23' },
        { label: '一级', value: '3' },
        { label: '一级甲等', value: '31' },
        { label: '一级乙等', value: '32' },
        { label: '一级丙等', value: '33' },
        { label: '其他', value: '9' }
      ],
      label: '等级',
      id: 'org_level_code'
    },
    {
      type: 'el-input',
      label: '类型名称',
      id: 'org_type_name'
    },
    {
      type: 'el-input',
      label: '详细地址',
      id: 'org_addr'
    }
  ]
}
export const phm = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sphm_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'pharm_name'
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
    },
    {
      type: 'el-input',
      label: '药物规格',
      id: 'drug_spec'
    }
  ]
}
export const cmp = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'scom_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'company_name'
    },
    {
      type: 'el-input',
      label: '机构代码',
      id: 'company_no'
    },
    {
      type: 'el-input',
      label: '详细地址',
      id: 'register_addr'
    }
  ]
}
export const reg = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sreg_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'region_name'
    },
    {
      type: 'el-select',
      options: [
        { label: '一线', value: '1' },
        { label: '新一线', value: '2' },
        { label: '二线', value: '3' },
        { label: '三线', value: '4' },
        { label: '四线', value: '5' },
        { label: '五线', value: '6' }
      ],
      label: '城市等级',
      id: 'city_level_code'
    },
    {
      type: 'el-input',
      label: '详细地址',
      id: 'addr'
    }
  ]
}
export const dep = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sdep_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'dept_name'
    },
    {
      type: 'el-select',
      options: [
        { label: '中医', value: '1' },
        { label: '医', value: '11' },
        { label: '民族医', value: '12' },
        { label: '中西医', value: '2' },
        { label: '西医', value: '3' },
        { label: '其他', value: '9' }
      ],
      label: '科室类别',
      id: 'dept_category_code'
    }
  ]
}
export const emp = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'semp_inx'
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'employee_name'
    },
    {
      type: 'el-input',
      label: '身份证号',
      id: 'resident_id'
    }
  ]
}
export const fml = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'sfml_inx'
    },
    {
      type: 'el-input',
      label: '档案编号',
      id: 'family_recode_no'
    },
    {
      type: 'el-select',
      options: [
        { label: '常住', value: '1' },
        { label: '户籍', value: '11' },
        { label: '非户籍', value: '12' },
        { label: '流动', value: '2' }
      ],
      label: '居住类型',
      id: 'residential_type_code'
    },
    {
      type: 'el-input',
      label: '详细地址',
      id: 'family_address'
    }
  ]
}
export const pat = function () {
  return [
    {
      type: 'el-input',
      label: '编号',
      id: 'spat_inx'
    },
    {
      type: 'el-input',
      label: '户主姓名',
      id: 'housholder_name'
    },
    {
      type: 'el-input',
      label: '患者姓名',
      id: 'patient_name'
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
  hrb: [
    'tcm_herb_name',
    'tcm_herb_type',
    'effcet_class_name',
    'tcm_herb_source',
    'main_fuction'
  ],
  tcs: ['tcm_syndrome_name', 'tcm_syndrome_class'],
  exm: ['exam_item_name'],
  lab: ['lab_item_name'],
  opt: ['oper_name', 'oper_class'],
  itm: ['item_name'],
  org: ['org_name', 'org_type_name', 'org_addr'],
  phm: ['pharm_name', 'drug_spec'],
  cmp: ['company_name', 'register_addr'],
  reg: ['region_name'],
  dep: ['dept_name'],
  emp: ['employee_name'],
  pat: ['housholder_name', 'patient_name']
}

export default {
  drg,
  mat,
  dis,
  tcm,
  hrb,
  tcs,
  exm,
  lab,
  opt,
  itm,
  org,
  phm,
  cmp,
  reg,
  dep,
  emp,
  fml,
  pat
}
