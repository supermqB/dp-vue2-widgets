import { STATEOPTIONS } from '@/utils/const'
import { validateEnglish } from '@/utils/validator'

export const fileCatalogCfg = (categoryList = [], disabled = false) =>
  [
    {
      type: 'el-input',
      label: 'BWD文件名称',
      id: 'nameCn',
      elOptions: {
        placeholder: '请输入'
      }
    },
    {
      type: 'el-input',
      label: 'BWD文件英文名称',
      id: 'nameEn',
      elOptions: {
        placeholder: '请输入'
      }
    },
    {
      type: 'el-select',
      label: '文件分类',
      options: categoryList,
      id: 'theme',
      elOptions: {
        disabled,
        placeholder: '请选择'
      }
    }
    // {
    //   type: 'el-select',
    //   label: '启用状态',
    //   id: 'state',
    //   options: STATEOPTIONS,
    //   elOptions: {
    //     placeholder: '请选择'
    //   }
    // }
  ].map(item => {
    const elOptions = Object.assign({}, item.elOptions, {
      style: {
        width: '260px'
      }
    })
    item.elOptions = elOptions
    return item
  })

export const fileCatalogRule = {
  nameCn: { required: true },
  nameEn: [{ required: true }, { validator: validateEnglish, trigger: 'blur' }],
  theme: { required: true }
}
