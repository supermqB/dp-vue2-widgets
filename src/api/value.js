import request, { postWithFile } from '@/utils/request'

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
  basis
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
      basis
    }
  })
}

export const addVersionApi = data => {
  if (!data['file']) delete data['file']
  return postWithFile('/dict/addVersion', data)
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

export const addDictValueApi = ({ id, valueObject, suspectList }) => {
  return request({
    url: '/dict/addDictValueOne',
    method: 'post',
    data: {
      id,
      valueObject,
      suspectList
    }
  })
}

export const addDictValueManyApi = ({ id, file }) => {
  return postWithFile('/dict/addDictValueMany', {
    id,
    file,
    suspectList: null
  })
}

export const editDictValueApi = ({ id, colId, valueObject, suspectList }) => {
  if (valueObject['term_code']) colId = valueObject['term_code']
  return request({
    url: '/dict/editDictValue',
    method: 'post',
    data: { id, colId, valueObject, suspectList }
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
