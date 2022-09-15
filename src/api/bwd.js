import { EDITINGSTATE } from '@/utils/const'
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
export const updateFileCatalogApi = (id, nameCn, nameEn, theme, state) => {
  return request({
    method: 'post',
    url: '/data-mapping/file/edit',
    data: {
      id,
      nameCn,
      nameEn,
      theme,
      state
    }
  })
}
export const addFileCatalogApi = (
  nameCn,
  nameEn,
  theme,
  state = EDITINGSTATE
) => {
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
export const addFileFieldsApi = ({ id, index, nameCn, nameEn }) => {
  return request({
    method: 'post',
    url: '/data-mapping/column/add',
    data: {
      id,
      seqNo: index,
      nameCn,
      nameEn
    }
  })
}
export const updateFileFieldsApi = ({ id, index, nameCn, nameEn }) => {
  return request({
    method: 'post',
    url: '/data-mapping/column/edit',
    data: {
      id,
      seqNo: index,
      nameCn,
      nameEn
    }
  })
}
export const submitCatalogApi = id => {
  return request({
    method: 'post',
    url: '/data-mapping/commit',
    params: {
      id: parseInt(id)
    }
  })
}
export const addMappingApi = ({ id, bwdMappingColumn }) => {
  return request({
    method: 'post',
    url: '/data-mapping/mapping/add',
    data: {
      id,
      bwdMappingColumn
    }
  })
}
export const deleteMappingApi = id => {
  return request({
    method: 'post',
    url: '/data-mapping/mapping/delete',
    params: {
      id: parseInt(id)
    }
  })
}
export const getMapModelApi = (source, version) => {
  return request({
    method: 'get',
    url: '/data-mapping/getTableModel',
    params: {
      source,
      version
    }
  })
}
export const getMapFieldsApi = id => {
  return request({
    method: 'get',
    url: '/data-mapping/getColumnModel',
    params: {
      id: parseInt(id)
    }
  })
}
