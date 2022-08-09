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

export const getEventInfoApi = (id, current, size, form = {}) => {
  return request({
    method: 'post',
    url: `/dataset/getInfo`,
    params: {
      current,
      size
    },
    data: Object.assign({ id }, form)
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

export const addCatalogColumnApi = (
  id,
  nameCn,
  nameEn,
  definition,
  primaryKeyFlag,
  requiredFlag,
  indexFlag
) => {
  return request({
    method: 'post',
    url: '/dataset/addColumn',
    data: {
      id,
      nameCn,
      nameEn,
      definition,
      primaryKeyFlag,
      requiredFlag,
      indexFlag
    }
  })
}

export const updateCatalogColumnApi = (
  id,
  nameCn,
  nameEn,
  definition,
  primaryKeyFlag,
  requiredFlag,
  indexFlag
) => {
  return request({
    method: 'post',
    url: '/dataset/editColumn',
    data: {
      id,
      nameCn,
      nameEn,
      definition,
      primaryKeyFlag,
      requiredFlag,
      indexFlag
    }
  })
}
