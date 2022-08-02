import request from '@/utils/request'

export const getVersionListApi = () => {
  return request({
    method: 'get',
    url: '/dataset/getVersionList'
  })
}

export const getCatalogApi = () => {
  return request({
    method: 'get',
    url: '/dataset/getCatalog'
  })
}

export const getEventInfoApi = (
  id,
  current,
  size,
  identifier = '',
  nameCn = ''
) => {
  return request({
    method: 'post',
    url: `/dataset/getInfo`,
    params: {
      current,
      size
    },
    data: {
      id,
      identifier,
      nameCn
    }
  })
}
