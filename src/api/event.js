import request from '@/utils/request'

export const getVersionListApi = () => {
  return request({
    method: 'get',
    url: '/dataset/getVersionList'
  })
}

export const getCatalogApi = version => {
  return request({
    method: 'get',
    url: `/dataset/getCatalog/${version}`
  })
}

export const getEventInfoApi = (
  current,
  size,
  data = {},
  isAdvance = false
) => {
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

export const addVersionApi = (version, parVersion, state) => {
  return request({
    method: 'post',
    url: '/dataset/addVersion',
    data: {
      version,
      parVersion,
      state
    }
  })
}

export const addCatalogApi = (
  version,
  theme,
  code,
  nameCn,
  nameEn,
  description
) => {
  return request({
    method: 'post',
    url: '/dataset/addDataSet',
    data: {
      version,
      theme,
      code,
      nameCn,
      nameEn,
      description
    }
  })
}

export const updateCatalogApi = (
  id,
  version,
  theme,
  code,
  nameCn,
  nameEn,
  description
) => {
  return request({
    method: 'post',
    url: '/dataset/editDataSet',
    data: {
      id,
      version,
      theme,
      code,
      nameCn,
      nameEn,
      description
    }
  })
}

export const addCatalogColumnApi = data => {
  return request({
    method: 'post',
    url: '/dataset/addColumn',
    data
  })
}

export const updateCatalogColumnApi = data => {
  return request({
    method: 'post',
    url: '/dataset/editColumn',
    data
  })
}

export const queryDataElementApi = nameCn => {
  return request({
    method: 'post',
    url: '/data-element/list',
    params: {
      current: 1,
      size: 30
    },
    data: {
      nameCn
    }
  })
}

export const submitCatalogApi = list => {
  return request({
    method: 'post',
    url: `/dataset/saveDataSet`,
    data: list
  })
}

export const getMaxCodeApi = (version, theme) => {
  return request({
    method: 'get',
    url: '/dataset/getMaxCode',
    params: {
      version,
      theme
    }
  })
}
