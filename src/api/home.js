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

export const getModelDatasetApi = () => {
  return request({
    method: 'post',
    url: '/homePage/selectModelSource'
  })
}
export const getDictDatasetApi = () => {
  return request({
    method: 'post',
    url: '/homePage/queryDict'
  })
}
export const getDictSuspectApi = () => {
  return request({
    method: 'post',
    url: '/homePage/queryValueDict'
  })
}
export const literatureStatisticsApi = () => {
  return request({
    method: 'post',
    url: '/homePage/literatureStatistics'
  })
}
export const suspectedPageInfoApi = data => {
  return request({
    method: 'post',
    url: '/homePage/suspectedPageInfo ',
    data
  })
}
