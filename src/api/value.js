import request from '@/utils/request'

export const getCatalogApi = () => {
  return request({
    url: '/dict/getCatalog',
    method: 'get'
  })
}

export const getVersionListApi = (dictName, sourceTypeCode) => {
  return request({
    url: '/dict/getVersionList',
    method: 'post',
    params: {
      dictName,
      sourceTypeCode
    }
  })
}

export const getVersionDetailApi = dictId => {
  return request({
    url: '/dict/getVersionDetail',
    method: 'post',
    params: {
      dictId
    }
  })
}

export const editVersionApi = ({
  id,
  masterVersion,
  version,
  state,
  sourceTypeCode,
  sourceBasis
}) => {
  return request({
    url: '/dict/editVersion',
    method: 'post',
    data: {
      id,
      masterVersion,
      version,
      state,
      sourceTypeCode,
      sourceBasis
    }
  })
}

export const addVersionApi = ({ version, dictName, parVersion, file }) => {
  return request({
    url: '/dict/addVersion',
    method: 'post',
    data: {
      version,
      dictName,
      parVersion,
      file
    }
  })
}

export const downloadTemplateApi = dictId => {
  return request({
    url: '/dict/download',
    method: 'post',
    params: {
      id: dictId
    },
    responseType: 'blob'
  })
}

export const getListApi = ({ dictId, current, size, columnParamList }) => {
  return request({
    url: '/dict/list',
    method: 'post',
    params: {
      current,
      size
    },
    data: {
      id: dictId,
      columnParamList
    }
  })
}

export const addDictApi = ({
  type,
  ctlgCode,
  dictCode,
  nameEn,
  nameCn,
  version,
  sourceTypeCode,
  sourceBasis,
  sourceBasisCode,
  state
}) => {
  return request({
    url: '/dict/addDict',
    method: 'post',
    data: {
      type,
      ctlgCode,
      dictCode,
      nameEn,
      nameCn,
      version,
      sourceTypeCode,
      sourceBasis,
      sourceBasisCode,
      state
    }
  })
}

export const editDictApi = ({ id, nameEn, nameCn }) => {
  return request({
    url: '/dict/editDict',
    method: 'post',
    data: {
      id,
      nameEn,
      nameCn
    }
  })
}

export const addDictValueApi = ({ id, valueObject, file }) => {
  return request({
    url: '/dict/addDictValue',
    method: 'post',
    data: { id, valueObject, file }
  })
}

export const editDictValueApi = ({ id, colId, valueObject }) => {
  return request({
    url: '/dict/editDictValue',
    method: 'post',
    data: { id, colId, valueObject }
  })
}

export const getClassifyCodeApi = () => {
  return request({
    url: '/dict/getClassifyCode',
    method: 'get'
  })
}

export const getMaxDictCodeApi = classifyCode => {
  return request({
    url: '/dict/getMaxDictCode',
    method: 'post',
    params: {
      classifyCode
    }
  })
}

export const getMAxValueCodeApi = id => {
  return request({
    url: '/dict/getMaxValueCode',
    method: 'post',
    params: {
      id
    }
  })
}
