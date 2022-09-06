import request from '@/utils/request'

export const downloadLiteratureApi = (
  identifier = 'S31990001',
  online = true
) => {
  return request({
    method: 'post',
    data: {
      identifier: 'Z220220002',
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

export const queryLiteratureApi = identifier => {
  return request({
    method: 'post',
    data: {
      identifier
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
