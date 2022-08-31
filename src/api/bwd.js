import request from '@/utils/request'

export const getCatalogApi = () => {
  return request({
    method: 'get',
    url: '/data-mapping/getCatalog'
  })
}

export const getBwdInfoApi = (current, size, data = {}, isAdvance = false) => {
  return request({
    method: 'post',
    url: '/data-mapping/list',
    // url: isAdvance ? '/dataset/advanceSearch' : '/dataset/getInfo',
    params: {
      current,
      size
    },
    data
  })
}
export const getTotalNumApi = () => {
  return request({
    method: 'get',
    url: '/data-mapping/getTotalNum'
  })
}
export const updateFileCatalogApi = (id, name, index, state) => {
  return request({
    method: 'post',
    url: '/data-mapping/file/edit',
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
    url: '/data-mapping/file/add',
    data: {
      nameCn,
      nameEn,
      theme,
      state
    }
  })
}
export const addFileFieldsApi = (datasetId, index, nameCn, nameEn) => {
  return request({
    method: 'post',
    url: '/data-mapping/column/add',
    data: {
      datasetId,
      index,
      nameCn,
      nameEn
    }
  })
}
export const updateFileFieldsApi = (id, datasetId, index, nameCn, nameEn) => {
  return request({
    method: 'post',
    url: '/data-mapping/column/edit',
    data: {
      id,
      datasetId,
      index,
      nameCn,
      nameEn
    }
  })
}
export const submitCatalogApi = list => {
  return request({
    method: 'post',
    url: '/data-mapping/commit',
    data: list
  })
}
