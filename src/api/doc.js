import request from '@/utils/request'

export const downloadLiteratureApi = (identifier, online = true) => {
  return request({
    method: 'post',
    data: {
      identifier,
      online
    },
    url: '/literature/downloadFile',
    responseType: 'blob'
  })
}

export const getSimilarLiteratureListApi = identifier => {
  return request({
    method: 'post',
    data: {
      identifier
    },
    url: '/literature/similarList'
  })
}

export const queryLiteratureApi = id => {
  return request({
    method: 'post',
    data: {
      id
    },
    url: '/literature/detail'
  })
}

export const editLiteratureApi = data => {
  // data['catalogCode'] = data['catalogCode'].split(',')
  return request({
    method: 'post',
    data,
    url: '/literature/EditLiterature'
  })
}
