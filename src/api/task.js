import request from '@/utils/request'

export function getParentList(params) {
  return request({
    url: '/dict/organ-system',
    method: 'get',
    params
  })
}

export const getSuspectListApi = (
  dictId,
  searchKey,
  type = 'dic',
  state = '0'
) => {
  return request({
    url: '/suspected/list',
    method: 'post',
    data: {
      type,
      state,
      searchKey,
      source: '',
      name: '',
      dictId: 25
    }
  })
}

export const commitSuspectApi = () => {}
