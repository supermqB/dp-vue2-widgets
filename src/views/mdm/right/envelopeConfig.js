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

export default { drg, mat, dis, tcm }
