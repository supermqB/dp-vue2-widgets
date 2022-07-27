import request from '@/utils/request'

export function getParentList(params) {
  return request({
    url: '/dict/organ-system',
    method: 'get',
    params
  })
}
