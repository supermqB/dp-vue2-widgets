import request from '@/utils/request'

export const exportValueApi = data => {
  return request({
    method: 'post',
    url: '/export/dict',
    responseType: 'blob',
    data
  })
}
