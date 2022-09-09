import { Message } from 'element-ui'

export const validateEnglish = (rule, value, callback) => {
  if (!/^[\w+]{1,30}$/.test(value)) {
    Message.warning('英文名称必须小于30个字符, 由小写字母、下划线、数字构成！')
    callback(new Error())
  } else {
    callback()
  }
}

export const validateNotEmpty = (rule, value, callback) => {
  if (!value.trim()) {
    // Message.warning('输入不能是空！')
    callback(new Error())
  } else {
    callback()
  }
}
