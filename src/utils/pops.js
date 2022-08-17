import { MessageBox } from 'element-ui'

export async function alert(msg) {
  try {
    return await MessageBox.alert(msg)
  } catch (e) {}
  return true
}

export async function confirm(msg) {
  try {
    return await MessageBox.confirm(msg)
  } catch (e) {}
  return false
}
