import { MessageBox } from 'element-ui'

export async function alert(msg) {
  try {
    return await MessageBox.alert(msg)
  } catch (e) {}
  return true
}

export async function confirm(msg, options = {}) {
  try {
    return await MessageBox.confirm(msg, options)
  } catch (e) {}
  return false
}

export async function slimConfirm(msg) {
  return await confirm(msg, {
    dangerouslyUseHTMLString: true,
    confirmButtonText: '是',
    cancelButtonText: '否',
    showClose: false,
    closeOnClickModal: false
  })
}
