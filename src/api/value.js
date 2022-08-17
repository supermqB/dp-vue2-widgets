import request from '@/utils/request'

export const getCatalogApi = () => {
  return request({
    url: '/dict/getCatalog',
    method: 'get'
  })
}

export const getVersionListApi = dictName => {
  return request({
    url: '/dict/getVersionList',
    method: 'post',
    params: {
      dictName
    }
  })
}

export const getVersionDetailApi = dictId => {
  return request({
    url: '',
    method: 'post',
    data: {
      dictId
    }
  })
}

export const editVersionApi = ({
  id,
  masterVersion,
  version,
  state,
  sourceType,
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
      sourceType,
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

export const downloadTemplateApi = dictName => {
  return request({
    url: '/dict/download',
    method: 'post',
    params: {
      dictName
    }
  })
}

export const getListApi = dictId => {
  return request({
    url: '/dict/list',
    method: 'post',
    params: {
      dictId
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

export const addDictValueApi = ({
  id,
  name,
  parCode,
  type,
  note,
  hierarchyRelation,
  file
}) => {
  return request({
    url: '/dict/addDictValue',
    method: 'post',
    data: {
      id,
      name,
      parCode,
      type,
      note,
      hierarchyRelation,
      file
    }
  })
}

export const editDictValueApi = ({
  id,
  colId,
  code,
  name,
  parCode,
  type,
  note,
  hierarchyRelation
}) => {
  return request({
    url: '/dict/editDictValue',
    method: 'post',
    data: {
      id,
      colId,
      code,
      name,
      parCode,
      type,
      note,
      hierarchyRelation
    }
  })
}
