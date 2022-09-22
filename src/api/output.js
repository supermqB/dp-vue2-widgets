import request from '@/utils/request'

export const exportValueApi = data => {
  return request({
    method: 'post',
    url: '/export/dict',
    responseType: 'blob',
    data
  })
}
export const exportEventApi = data => {
  return request({
    method: 'post',
    url: '/export/dwd',
    responseType: 'blob',
    data
  })
}
export const exportBwdApi = data => {
  return request({
    method: 'post',
    url: '/export/bwd',
    responseType: 'blob',
    data
  })
}
export const exportElementApi = () => {
  return request({
    method: 'post',
    url: '/export/data-element',
    responseType: 'blob'
  })
}
