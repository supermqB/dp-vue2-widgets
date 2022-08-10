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
    // data: {
    //   id,
    //   nameCn,
    //   nameEn,
    //   definition,
    //   primaryKeyFlag,
    //   requiredFlag,
    //   indexFlag
    // }
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

export const submitCatalogApi = id => {
  return request({
    method: 'put',
    url: `/dataset/saveDataSet/${parseInt(id)}`
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

export const advanceSearchApi = (current, page, data) => {
  return request({
    method: 'post',
    url: '/dataset/advanceSearch',
    data,
    params: {
      current,
      page
    }
  })
}
