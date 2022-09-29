import request from '@/utils/request'

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
