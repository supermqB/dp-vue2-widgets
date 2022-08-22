export const fileFieldsCfg = [
  {
    type: 'el-input',
    label: '顺序号',
    id: 'index',
    elOptions: {
      placeholder: '自动max+1',
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字段名称',
    id: 'nameCn',
    elOptions: {
      placeholder: '请输入',
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字段英文名',
    id: 'nameEn',
    elOptions: {
      placeholder: '请输入',
      style: {
        width: '260px'
      }
    }
  }
]

export const fileFieldsRule = {
  index: { required: true },
  nameCn: { required: true },
  nameEn: [
    { required: true },
    {
      validator: (rule, value, callback) => {
        if (!/^[\w+]{1,30}$/.test(value)) {
          showEnErr()
          callback('英文名称必须小于30个字符, 由小写字母、下划线、数字构成')
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ]
}
