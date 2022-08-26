import request from '@/utils/request'

export const getBwdInfoApi = (current, size, data = {}, isAdvance = false) => {
  return request({
    method: 'post',
    url: isAdvance ? '/dataset/advanceSearch' : '/dataset/getInfo',
    params: {
      current,
      size
    },
    data
  })
}
export const updateFileCatalogApi = (id, name, index, state) => {
  return request({
    method: 'post',
    url: '/dataset/editDataSet',
    data: {
      id,
      name,
      index,
      state
    }
  })
}
export const addFileCatalogApi = (name, index, state) => {
  return request({
    method: 'post',
    url: '/',
    data: {
      name,
      index,
      state
    }
  })
}

export const testApi = (name, index, state) => {
  return request({
    method: 'post',
    url: '/',
    data: {
      name,
      index,
      state
    }
  })
}
