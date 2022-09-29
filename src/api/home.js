import request from '@/utils/request'

export const getGeneralViewApi = () => {
  return request({
    method: 'post',
    url: '/homePage/generalView'
  })
}

export const dataElementClassifyApi = () => {
  return request({
    method: 'post',
    url: '/homePage/queryDataElementClassify'
  })
}

export const queryIndexInfoApi = () => {
  return request({
    method: 'post',
    url: '/homePage/queryIndexInfo'
  })
}

export const selectIndexSourceApi = () => {
  return request({
    method: 'post',
    url: '/homePage/selectIndexSource'
  })
}

export const selectLiteratureInfoApi = () => {
  return request({
    method: 'post',
    url: '/homePage/selectLiteratureInfo'
  })
}
