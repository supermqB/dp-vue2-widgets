import { MessageBox } from 'element-ui'

export async function alert(msg) {
  try {
    await MessageBox.alert(msg)
  } catch (e) {}
  return true
}
