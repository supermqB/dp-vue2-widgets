const drg = [
  {
    name: 'basic',
    title: '基本信息',
    props: [
      'drug_trade_name_cn',
      'drug_name_en',
      'drug_chem_name',
      'drug_common_name'
    ]
  },
  {
    name: 'type',
    title: '类型信息',
    props: ['drug_type_name', 'pharmacology_class_name', 'drug_atc_class_name']
  },
  {
    name: 'spec',
    title: '规格/生产信息',
    props: [
      'drug_form_name',
      'drug_spec_std',
      'drug_valid_dur',
      'drug_approval_no',
      'drug_standard_no',
      'manufacture_company_name'
    ]
  },
  {
    name: 'insur',
    title: '医保信息',
    props: [
      { n: 'insur_flag', f: v => (v ? '医保' : '非医保') },
      'insur_charge_item_level_name',
      'insur_drug_name',
      'insur_drug_form_name'
    ]
  },
  {
    name: 'other',
    title: '其它信息',
    props: [
      { n: 'otc_flag', f: v => (v ? '非处方药' : '处方药') },
      { n: 'essential_drug_flag', f: v => (v ? '基药' : '非基药') },
      'essential_drug_name',
      { n: 'antibacterial_drug_flag', f: v => (v ? '抗菌药' : '非抗菌药') },
      'antibacterial_drug_tp_name',
      'antibacterial_drug_level_name'
    ]
  }
]

const mat = [
  {
    name: 'classific',
    title: '分类信息',
    props: [
      'common_name',
      'material_other_name',
      'material_goods',
      'material_model',
      'material_spec',
      'material_first_name',
      'material_second_name',
      'material_third_name'
    ]
  },
  {
    name: 'produce',
    title: '生产信息',
    props: ['mnf_company_name', 'registration_number', 'register_info']
  },
  {
    name: 'specific',
    title: '单件产品信息',
    props: ['product_name', 'product_spec', 'product_model']
  }
]

const dis = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['wm_disease_other_name']
  },
  {
    name: 'chapter',
    title: '章节信息',
    props: ['wm_disease_chapter_no']
  },
  {
    name: 'type',
    title: '类型信息',
    props: ['wm_disease_class']
  },
  {
    name: 'parent',
    title: '父级信息',
    props: ['sdis_parent_inx', 'parent_wm_disease_name', 'hierarchy_no']
  }
]

const tcm = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['tcm_disease_other_name']
  },
  {
    name: 'type',
    title: '类型信息',
    props: ['tcm_disease_class']
  },
  {
    name: 'parent',
    title: '父级信息',
    props: ['stcm_parent_inx', 'parent_tcm_disease_name', 'hierarchy_no']
  },
  {
    name: 'clinical',
    title: '临床信息',
    props: ['nosogenesis_desc', 'clinical_feature_desc']
  }
]

const hrb = [
  {
    name: 'basic',
    title: '基本信息',
    props: [
      { n: 'fundamental_factor_flag', f: v => (v ? '主因子' : '非主因子') },
      'tcm_herb_name_en',
      'tcm_herb_name_en_short',
      'tcm_herb_other_name'
    ]
  },
  {
    name: 'spec',
    title: '特性信息',
    props: [
      'tcm_herb_type',
      'raw_material_name',
      'effcet_class_name',
      'tcm_herb_subject',
      'tem_herb_source'
    ]
  },
  {
    name: 'usage',
    title: '用法用量信息',
    props: [
      'herb_part',
      'specification',
      'process_method',
      'drug_property_taste',
      'meridian_tropism_name',
      'main_fuction',
      'tcm_herb_usage_dosage'
    ]
  },
  {
    name: 'other',
    title: '其他信息',
    props: ['pay_policy', 'picture_url', 'note']
  }
]
const tcs = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['tcm_syndrome_other_name']
  },
  {
    name: 'type',
    title: '类型信息',
    props: ['tcm_syndrome_class']
  },
  {
    name: 'parent',
    title: '父级信息',
    props: ['stcs_parent_inx', 'parent_tcm_syndrome_name', 'hierarchy_no']
  }
]

const exm = [
  {
    name: 'basic',
    title: '基本信息',
    props: [
      'exam_item_name_en',
      'exam_item_name_en_short',
      'exam_item_connotation'
    ]
  },
  {
    name: 'parent',
    title: '父级信息',
    props: ['sexm_parent_inx', 'parent_exam_item_name', 'hierarchy_no']
  },
  {
    name: 'test',
    title: '受检信息',
    props: [
      'exception_content',
      'exam_part_name',
      'technology_desc',
      'application_sex',
      { n: 'fasting_flag', f: v => (v ? '空腹' : '非空腹') }
    ]
  },
  {
    name: 'other',
    title: '其他信息',
    props: ['charge_unit', 'note']
  }
]
const lab = [
  {
    name: 'basic',
    title: '基本信息',
    props: [
      'lab_item_name_en',
      'lab_item_name_en_short',
      'lab_item_connotation'
    ]
  },
  {
    name: 'parent',
    title: '父级信息',
    props: ['slab_parent_inx', 'parent_lab_item_name', 'hierarchy_no']
  },
  {
    name: 'test',
    title: '受检信息',
    props: [
      'exception_content',
      'technology_desc',
      'precision_type',
      'inspection_duration',
      'dimension_type',
      'sample_ingredient',
      'sample_type_name',
      'lab_category_name',
      'application_sex',
      { n: 'fasting_flag', f: v => (v ? '空腹' : '非空腹') }
    ]
  },
  {
    name: 'other',
    title: '其他信息',
    props: ['charge_unit', 'note']
  }
]
const opt = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['oper_other_name']
  },
  {
    name: 'type',
    title: '类型信息',
    props: ['oper_chapter_name', 'oper_class']
  },
  {
    name: 'parent',
    title: '父级信息',
    props: ['sopt_parent_inx', 'parent_oper_name', 'hierarchy_no']
  },
  {
    name: 'operation',
    title: '手术相关信息',
    props: [
      'oper_part_name',
      'oper_indication_desc',
      'oper_contraindication_desc'
    ]
  }
]
const itm = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['item_connotation']
  },
  {
    name: 'parent',
    title: '父级信息',
    props: ['sitm_parent_inx', 'parent_item_name', 'hierarchy_no']
  },
  {
    name: 'item',
    title: '项目信息',
    props: ['item_except', 'item_price_unit']
  },
  {
    name: 'other',
    title: '其他信息',
    props: ['note']
  }
]
const org = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['org_alias', 'org_name_en']
  },
  {
    name: 'type',
    title: '类型信息',
    props: ['org_level_name', 'org_grade_name', 'org_type_name']
  },
  {
    name: 'property',
    title: '属性信息',
    props: ['org_property_name']
  },
  {
    name: 'address',
    title: '地址信息',
    props: ['org_addr']
  }
]
const phm = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['pharm_name_en', 'pharm_name_en_short', 'pharm_other_name']
  },
  {
    name: 'form',
    title: '剂型信息',
    props: ['drug_form_name']
  },
  {
    name: 'spec',
    title: '规格信息',
    props: ['drug_spec']
  }
]
const com = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['company_name_en', 'company_nationality', 'company_nationality_en']
  },
  {
    name: 'type',
    title: '类型信息',
    props: ['class_no']
  },
  {
    name: 'address',
    title: '地址信息',
    props: ['register_addr']
  }
]
const dep = [
  {
    name: 'basic',
    title: '基本信息',
    props: ['dept_abbrev_name', 'org_name']
  },
  {
    name: 'type',
    title: '类型信息',
    props: ['dept_category_name', 'dept_type_name']
  }
]
const emp = [
  {
    name: 'basic',
    title: '基本信息',
    props: [
      'employee_no',
      'birth_date',
      'resident_id',
      'passport_no',
      'sex',
      'marriage_status',
      'nationality'
    ]
  },
  {
    name: 'career',
    title: '职业信息',
    props: [
      'org_name',
      'dept_name',
      'title_level_name',
      'duty_name',
      'adm_duty_level_name',
      'emp_status_name'
    ]
  }
]

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
  com,
  dep,
  emp
}
