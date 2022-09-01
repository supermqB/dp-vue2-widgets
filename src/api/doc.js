import request from '@/utils/request'

export const downloadLiteratureApi = (
  identifier = 'S31990001',
  online = true
) => {
  return request({
    method: 'post',
    data: {
      identifier,
      online
    },
    url: '/literature/downloadLiterature'
  })
}

export const getSimilarLiteratureListApi = identifier => {
  return request({
    method: 'get',
    params: {
      identifier
    },
    url: '/literatrue/similarList'
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
  return request({
    method: 'post',
    data,
    url: '/literature/EditLiterature'
  })
}
